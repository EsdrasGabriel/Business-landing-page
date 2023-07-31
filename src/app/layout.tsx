import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],

})

export const metadata: Metadata = {
  title: 'Business landing Page',
  description: 'A WebSite for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='overflow-x-hidden scroll-smooth'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
