import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Building2, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Thittam1Hub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#marketplace" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</a>
            <a href="#organizations" className="text-muted-foreground hover:text-foreground transition-colors">Organizations</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Event Management Reimagined
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Plan, Manage & Publish<br />
            <span className="text-primary">Your Events Seamlessly</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Thittam1Hub is your all-in-one platform for event management, organization pages, 
            vendor marketplace, and community workspaces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Create Your Event <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Events
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From event creation to attendee management, we've got you covered
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Event Management</CardTitle>
                <CardDescription>
                  Create and manage events with registration, ticketing, and attendance tracking
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Organization Pages</CardTitle>
                <CardDescription>
                  Branded profiles with follower systems and event feeds for your organization
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Vendor Marketplace</CardTitle>
                <CardDescription>
                  Connect with verified vendors for catering, venues, photography and more
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Track performance with detailed analytics and export reports
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Event Marketplace
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Find and book trusted vendors for your events. From catering to photography, 
                our verified marketplace connects you with the best service providers.
              </p>
              <ul className="space-y-4 mb-8">
                {["Verified vendor profiles", "Integrated booking system", "Reviews and ratings", "Service agreements"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button>Browse Marketplace</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Catering", "Venues", "Photography", "Decorations"].map((category) => (
                <Card key={category} className="bg-card border-border p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category}</h3>
                    <p className="text-sm text-muted-foreground mt-1">50+ vendors</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Workspaces Section */}
      <section id="organizations" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Community Workspaces
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Collaborate with your team in real-time. Manage tasks, communicate, 
            and track event progress all in one place.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Task Management</CardTitle>
                <CardDescription>
                  Assign and track tasks across your event team
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Team Communication</CardTitle>
                <CardDescription>
                  Built-in messaging and announcements
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
                <CardDescription>
                  Visual dashboards and milestone tracking
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Events?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of organizers who trust Thittam1Hub to bring their events to life.
              </p>
              <Button size="lg" variant="secondary" className="gap-2">
                Start Free Today <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">Thittam1Hub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Thittam1Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
