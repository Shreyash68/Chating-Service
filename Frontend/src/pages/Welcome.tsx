import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{' '}
              <span className="gradient-text">ProductionApp</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern, production-ready React application with authentication, 
              routing, and beautiful UI components. Built with the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="btn-hero">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/api">
                <Button variant="outline" size="lg">
                  View API Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Production-Ready Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a modern web application, built with best practices and scalability in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Modern Stack</CardTitle>
                <CardDescription>
                  Built with React, TypeScript, TailwindCSS, and shadcn/ui for the best developer experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure Authentication</CardTitle>
                <CardDescription>
                  Complete authentication system with protected routes and persistent sessions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="feature-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>
                  Optimized build, responsive design, and deployment-ready configuration out of the box.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Login to access your dashboard and explore all the features this application has to offer.
            </p>
            <Link to="/login">
              <Button size="lg" className="btn-hero">
                Login Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}