import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, User } from 'lucide-react';

export default function About() {
  const technologies = [
    'React 18', 'TypeScript', 'React Router v6', 'TailwindCSS',
    'shadcn/ui', 'Vite', 'Axios', 'Zustand', 'Lucide Icons'
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">About This Project</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A modern, production-ready React application showcasing best practices 
            and modern web development patterns.
          </p>
        </div>

        <div className="grid gap-8 animate-slide-up">
          {/* Project Overview */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Built with modern technologies and production-ready features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This application demonstrates a complete production-ready React setup with 
                authentication, protected routes, beautiful UI components, and a scalable 
                architecture. It showcases modern development practices including TypeScript, 
                component-based architecture, and responsive design.
              </p>
              <p className="text-muted-foreground">
                The application features a clean separation between public and authenticated 
                areas, persistent theme switching, and comprehensive API integration patterns 
                that can be easily extended for real-world use cases.
              </p>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>
                Modern tools and libraries for optimal developer experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>
                Production-ready features and patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>✅ React Router v6 with protected routes</li>
                  <li>✅ Authentication with persistent sessions</li>
                  <li>✅ Light/dark theme toggle</li>
                  <li>✅ Responsive design (mobile-first)</li>
                  <li>✅ TypeScript for type safety</li>
                </ul>
                <ul className="space-y-2">
                  <li>✅ Modern UI with shadcn/ui components</li>
                  <li>✅ State management with Zustand</li>
                  <li>✅ API integration patterns</li>
                  <li>✅ SEO optimized</li>
                  <li>✅ Production build ready</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Architecture Highlights</CardTitle>
              <CardDescription>
                Clean, scalable, and maintainable code structure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Component Architecture:</strong> Modular, 
                reusable components with clear separation of concerns and consistent design patterns.
              </div>
              <div>
                <strong className="text-foreground">State Management:</strong> Lightweight Zustand 
                store for authentication with persistence and minimal boilerplate.
              </div>
              <div>
                <strong className="text-foreground">Routing Strategy:</strong> Nested layouts with 
                protected routes, proper navigation guards, and fallback handling.
              </div>
              <div>
                <strong className="text-foreground">Styling Approach:</strong> Design system-first 
                approach with semantic tokens and consistent theming across light/dark modes.
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Contact & Links</CardTitle>
              <CardDescription>
                Get in touch or explore the codebase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>View Source</span>
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}