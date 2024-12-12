'use client'
import React from 'react';
import { LayoutDashboard, FileClock, WalletCards, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideNav = () => {
  const path = usePathname();
  console.log(path);
  const menu = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];

  return (
    <div className="h-screen p-5 shadow-sm border">
      {menu.map((item, index) => {
        return (
          <div key={index} className={`${path === item.path ? "border-primary text-primary" : "hover:border-primary hover:text-primary"} flex m-2 mr-4 p-2 rounded-lg cursor-pointer border`}>
            <div className="flex justify-center items-center md:justify-start w-full">
                <Link href={item.path} className="flex">
                    <item.icon />{" "}
                </Link>
                <span className='ml-2 hidden md:inline'>{item.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
