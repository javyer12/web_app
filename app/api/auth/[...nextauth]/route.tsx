import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// permite la comunicacion con los servicios de google
 const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET_KEY as string,
        })
    ]
})

export  {handler as GET, handler as POST};