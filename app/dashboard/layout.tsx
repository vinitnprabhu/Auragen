import SideNav from '@/components/nav/side-nav';
import React from 'react';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 h-screen sticky top-0">
        <SideNav />
      </div>
      <div className="w-3/4 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
