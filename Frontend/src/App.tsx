import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AppLayout } from "@/layouts/AppLayout";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Pages
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import ApiDocs from "./pages/ApiDocs";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import VideoCall from "./pages/VideoCall";
import LiveStream from "./pages/LiveStream";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="api" element={<ApiDocs />} />
            <Route path="about" element={<About />} />
          </Route>
          
          {/* Protected Routes */}
          <Route path="/" element={<AppLayout />}>
            <Route 
              path="dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="chat" 
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="video-call" 
              element={
                <ProtectedRoute>
                  <VideoCall />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="live-stream" 
              element={
                <ProtectedRoute>
                  <LiveStream />
                </ProtectedRoute>
              } 
            />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
