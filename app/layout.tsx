import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/Navbar';
import {LocalProviders} from './Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paypal',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LocalProviders>
          <NavBar/>
          {children}
        </LocalProviders>
      </body>
    </html>
  )
}
