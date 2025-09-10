import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
}