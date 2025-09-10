import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Code, User, FileText } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="glass sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-bold text-xl gradient-text"
          >
            <Code className="h-6 w-6" />
            <span>ProductionApp</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>About Me</span>
              </div>
            </Link>
            
            <Link 
              to="/api" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/api') 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>API Docs</span>
              </div>
            </Link>
            
            <Link to="/login">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Mobile Menu Button - You can add mobile menu here */}
            <div className="md:hidden">
              <Link to="/login">
                <Button variant="default" size="sm">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}