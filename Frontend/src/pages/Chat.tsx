import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Users, Zap, Shield } from 'lucide-react';

export default function Chat() {
  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h1 className="text-xl font-bold">Chat</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Chat Platform</h1>
            <p className="text-xl text-muted-foreground">
              Real-time messaging and communication hub
            </p>
          </div>

          {/* Coming Soon Notice */}
          <Card className="shadow-medium mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                We're building an amazing chat experience with real-time messaging, 
                file sharing, and team collaboration features.
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Development in progress...</p>
            </CardContent>
          </Card>

          {/* Planned Features */}
          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">Real-time Messaging</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Instant messaging with typing indicators, read receipts, and emoji reactions.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold">Team Channels</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Organize conversations by teams, projects, or topics with channel-based chat.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="font-semibold">Secure & Private</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  End-to-end encryption and advanced privacy controls for sensitive communications.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold">Rich Media</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Share files, images, videos, and documents with preview capabilities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <Link to="/dashboard">
              <Button size="lg" variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}