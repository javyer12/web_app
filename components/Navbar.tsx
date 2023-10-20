'use client'
import Link from 'next/link';
import {signIn, useSession, signOut } from 'next-auth/react';

export default function Navbar(){
    const {data:session} = useSession();
    const profile:string = session?.user?.image || "profile-no=found";
    const  name = session?.user?.name || "tito";
    const email = session?.user?.email || "example@exa.com";

    // localStorage.setItem('user-profile', profile);
    // localStorage.setItem('user-name', name);
    // localStorage.setItem('user-email', email);
    return (
        <nav className='bg-slate-900 flex items-center py-1 justify-between p-3 px-24 text-white'>
            <Link href="/">
            <h1>Home</h1>
            </Link>

            {session?.user ? (
                <div className='flex gap-x-2 items-center'>
                <Link href="/dashboard">Dashboard</Link>
                <p>{name}</p>

                <div className="group/item hover:bg-slate-900 flex items-center mr-5">
                    <img width="10"  height="10" src={profile} alt='user image' className='w-10 h-10 m-1  rounded-full cursor-pointer'/>
                         <a className="group/edit invisible group-hover/item:visible ...">
                        <span className="group-hover/edit:text-gray-700 ...">{session.user.email}</span>
                        </a>
                </div>
                <button className='bg-sky-400 px-3 py-1 ms-1 rounded' onClick={ ()=> {
                         signOut( {callbackUrl:"/"} )
                    }}>Sign Out 
                </button>
            </div>
            ):
            (
                <div>
                    <Link href="/dashboard">Dashboard</Link>
                <button onClick={()=> signIn('google', {callbackUrl:"/checkout"})} className='bg-sky-400 m-1 px-3 py-2 rounded'>Login</button>
                </div>
            )
            }
        </nav>
    )
}