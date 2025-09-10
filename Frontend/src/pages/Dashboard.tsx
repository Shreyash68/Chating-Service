import { useAuthStore } from '@/stores/useAuthStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Video, 
  Radio, 
  LogOut, 
  User, 
  Settings,
  ArrowRight 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Dashboard() {
  const { user, logout } = useAuthStore();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const features = [
    {
      title: 'Chat',
      description: 'Real-time messaging and communication platform',
      icon: MessageCircle,
      path: '/chat',
      color: 'from-blue-500 to-cyan-500',
      available: false
    },
    {
      title: 'Video Call',
      description: 'High-quality video conferencing and meetings',
      icon: Video,
      path: '/video-call',
      color: 'from-green-500 to-emerald-500',
      available: false
    },
    {
      title: 'Live Stream',
      description: 'Broadcast and streaming capabilities',
      icon: Radio,
      path: '/live-stream',
      color: 'from-purple-500 to-pink-500',
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Welcome, {user?.name || user?.email}</span>
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">
            Choose a feature to get started with your productivity suite.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="feature-card group relative overflow-hidden">
                <CardHeader className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {feature.title}
                    {!feature.available && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Link to={feature.path}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      disabled={!feature.available}
                    >
                      {feature.available ? 'Open' : 'Preview'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 animate-slide-up">
          <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">24/7</div>
                <p className="text-xs text-muted-foreground">System Uptime</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-xs text-muted-foreground">Reliability</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Features Available</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">∞</div>
                <p className="text-xs text-muted-foreground">Possibilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}