import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aiva',
  description: 'Automate appointment booking, customer inquiries, and follow-ups – so you can focus on running your business.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
