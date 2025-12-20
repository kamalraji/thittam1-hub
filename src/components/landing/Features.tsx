import { motion } from 'framer-motion';
import { 
  QrCode, 
  BarChart3, 
  Mail, 
  Users2, 
  Shield, 
  Globe,
  Sparkles,
  Trophy
} from 'lucide-react';

const features = [
  {
    icon: <QrCode className="w-6 h-6" />,
    title: 'QR Check-In',
    description: 'Instant attendee check-in with unique QR codes. Track attendance in real-time across sessions.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Judging System',
    description: 'Create custom rubrics, assign judges, and calculate scores automatically with live leaderboards.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights on registrations, attendance, and engagement. Export reports anytime.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Smart Communications',
    description: 'Segment audiences and send targeted emails with customizable templates and tracking.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: 'Organization Profiles',
    description: 'Build your community with branded organization pages. Let attendees follow and discover events.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Certificate Generation',
    description: 'Auto-generate and verify certificates for participants, volunteers, and winners.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Custom Landing Pages',
    description: 'Beautiful, branded event pages with custom domains. Public or private access controls.',
    color: 'from-sky-500 to-cyan-500',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Role-Based Access',
    description: 'Granular permissions for organizers, judges, volunteers, and speakers.',
    color: 'from-fuchsia-500 to-pink-500',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Run Amazing Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From registration to certificates, Thittam1Hub handles it all so you can focus on creating memorable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" 
                style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[0].replace('from-', '')} 0%, ${feature.color.split(' ')[1].replace('to-', '')} 100%)` }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
