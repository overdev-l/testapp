import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import { Providers } from '../providers'
import { zhCN } from "@clerk/localizations";
import DefaultLayout from '@/components/DefaultLayout'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GDN | global developers navigator',
  description: 'global developers navigator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <ClerkProvider
      clerkJSVariant="headless"
      localization={zhCN}
    >
      <html lang="zh" className='w-full h-full'>
        <body className={classNames(
          inter.className,
          "w-full h-full"
        )}>
          <Providers>
            <DefaultLayout>
              {children}
            </DefaultLayout>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
