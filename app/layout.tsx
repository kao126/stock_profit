import '@radix-ui/themes/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stock Profit',
  description: 'Calculate profits by stock trading',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          <Theme
            accentColor="brown"
            grayColor="sand"
            radius="large"
            scaling="95%"
          >
            {children}
          </Theme>
        </body>
      </html>
    </SessionProvider>
  );
}
