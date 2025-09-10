import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Video, Users, Monitor, Mic } from 'lucide-react';

export default function VideoCall() {
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
                <Video className="h-5 w-5 text-primary" />
                <h1 className="text-xl font-bold">Video Call</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Video Conferencing</h1>
            <p className="text-xl text-muted-foreground">
              High-quality video calls and meetings
            </p>
          </div>

          {/* Coming Soon Notice */}
          <Card className="shadow-medium mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                We're developing a comprehensive video conferencing solution with 
                HD video, crystal-clear audio, and collaborative features.
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-primary rounded-full animate-pulse"></div>
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
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Video className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold">HD Video Quality</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Crystal-clear video with adaptive quality based on network conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">Multi-participant</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Support for large meetings with advanced participant management.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Monitor className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="font-semibold">Screen Sharing</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Share your screen, applications, or specific windows with participants.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Mic className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold">Advanced Audio</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Noise cancellation, echo suppression, and spatial audio features.
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