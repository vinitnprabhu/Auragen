'use client'
import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser
  } from '@clerk/nextjs';
import Link from 'next/link';
import Image from "next/image";
import { Toaster } from 'react-hot-toast';

const TopNav = () => {
  const { isSignedIn, user} = useUser();
  return (
    <nav className='flex justify-between items-center p-2 shadow'>
        <Toaster />
        <Link href="/">
        <Image
              src="/nav-logo.png" 
              alt="Auragen Logo"
              width={150}
              height={150} 
              className="hover:opacity-80 transition-opacity duration-200"
            />
        </Link>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </nav>
  )
}

export default TopNav;
