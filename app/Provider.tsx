'use client'
import { SessionProvider } from "next-auth/react";

export function LocalProviders({children}: {children:React.ReactNode}){
    return <SessionProvider>
            {children}
        </SessionProvider>;
}
