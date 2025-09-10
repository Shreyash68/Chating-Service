import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore();
  const [checking, setChecking] = useState(true);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const verifyAuth = async () => {
      if (!isAuthenticated) {
        const authResult = await checkAuth();
        if (!authResult) {
          toast({
            title: "Authentication Required",
            description: "Please login first to access this page.",
            variant: "destructive",
          });
        }
      }
      setChecking(false);
    };

    verifyAuth();
  }, [isAuthenticated, checkAuth, toast]);

  if (checking || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
}