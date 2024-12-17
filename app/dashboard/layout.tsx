import SideNav from '@/components/nav/side-nav';
import React from 'react';
 
 const DashboardLayout = ({children} : Readonly<{children: React.ReactNode;}>) => {
    return (
        <div className='flex h-screen'>
            <div className='w-1/4 h-full'>
                <SideNav />
            </div>
            <div className='col-span-3'>
                {children}
            </div>
        </div>
    );
 }

 export default DashboardLayout;
 