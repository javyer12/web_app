'use client'
import {signIn, useSession, signOut } from 'next-auth/react';

export default function App(){
    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={()=> signIn('google', {callbackUrl:"/checkout"})} className=" bg-sky-500 px-3 py-1 ms-1 rounded">
                Proceed
            </button>
        </div>
    )
}