import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { EmailVerification } from './components/auth/EmailVerification';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { OrganizerDashboard } from './components/dashboard/OrganizerDashboard';
import { ParticipantDashboard } from './components/dashboard/ParticipantDashboard';
import { ProfileCompletion } from './components/profile/ProfileCompletion';
import { EventForm } from './components/events/EventForm';
import { EventLandingPage } from './components/events/EventLandingPage';
import { PrivateEventAccess } from './components/events/PrivateEventAccess';
import { CertificateVerification } from './components/certificates/CertificateVerification';
import { OrganizationDirectory, FollowedOrganizations, OrganizationPage } from './components/organization';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Navbar, Hero, Features, CTA, Footer } from './components/landing';
import { UserRole } from './types';
import api from './lib/api';
import { Toaster } from './components/ui/sonner';

const queryClient = new QueryClient();

function OrganizationPageWrapper() {
  const { organizationId } = useParams<{ organizationId: string }>();
  const { user } = useAuth();
  
  if (!organizationId) {
    return <Navigate to="/organizations" replace />;
  }
  
  return <OrganizationPage organizationId={organizationId} currentUser={user ?? undefined} />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background text-foreground">
              <Toaster />
              <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route 
              path="/complete-profile" 
              element={
                <ProtectedRoute>
                  <ProfileCompletion />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requireEmailVerification>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/events/create" 
              element={
                <ProtectedRoute requireEmailVerification>
                  <EventForm />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/events/:eventId/edit" 
              element={
                <ProtectedRoute requireEmailVerification>
                  <EventEditWrapper />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/events/:eventId" 
              element={<EventLandingPage />} 
            />
            <Route 
              path="/events/:eventId/access" 
              element={<PrivateEventAccess />} 
            />
            {/* Organization routes */}
            <Route 
              path="/organizations" 
              element={<OrganizationDirectory />} 
            />
            <Route 
              path="/organizations/followed" 
              element={
                <ProtectedRoute>
                  <FollowedOrganizations />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/organizations/:organizationId" 
              element={<OrganizationPageWrapper />} 
            />
            {/* Public certificate verification routes */}
            <Route 
              path="/verify-certificate/:certificateId" 
              element={<CertificateVerification />} 
            />
            <Route 
              path="/verify-certificate" 
              element={<CertificateVerification />} 
            />
            {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

function Home() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function Dashboard() {
  const { user } = useAuth();

  // Check if organizer needs to complete profile (Requirements 2.4, 2.5)
  if (user?.role === UserRole.ORGANIZER && !user?.profileCompleted) {
    return <Navigate to="/complete-profile" replace />;
  }

  if (user?.role === UserRole.ORGANIZER) {
    return <OrganizerDashboard />;
  } else if (user?.role === UserRole.PARTICIPANT) {
    return <ParticipantDashboard />;
  }

  // For other roles, show a generic dashboard or redirect
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome, {user?.name}</p>
        <p className="text-sm text-gray-500 mt-2">Role: {user?.role}</p>
        <div className="mt-4">
          <Link
            to="/complete-profile"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Complete Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

function EventEditWrapper() {
  const { eventId } = useParams<{ eventId: string }>();
  const { data: event, isLoading } = useQuery({
    queryKey: ['event', eventId],
    queryFn: async () => {
      const response = await api.get(`/events/${eventId}`);
      return response.data.event;
    },
    enabled: !!eventId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!event) {
    return <Navigate to="/dashboard" replace />;
  }

  return <EventForm event={event} isEditing={true} />;
}
