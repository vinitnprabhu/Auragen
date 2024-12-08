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


const TopNav = () => {
  const { isSignedIn, user} = useUser();
  return (
    <nav className='flex justify-between items-center p-2 shadow'>
        <Link href="/">Auragen</Link>
        <div>
            {isSignedIn && <Link href="/dashboard" className="mr-2">{`${user.fullName}'s Dashboard`}</Link>}
        </div>
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
