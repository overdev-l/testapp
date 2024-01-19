import { ClerkProvider } from "@clerk/nextjs"
import { zhCN } from "@clerk/localizations";
import { Providers } from '../providers'
import '../globals.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      localization={zhCN}
      signInUrl="/sign-in"
      appearance={{
        layout: {
          socialButtonsPlacement: 'bottom',
          logoImageUrl: '/gdn.svg',
          logoPlacement: "inside",
          privacyPageUrl: "/"
        }
      }}
    >
      <html lang="zh" className="w-full h-full">
        <body className="w-full h-full">
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}