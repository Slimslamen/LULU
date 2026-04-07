import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Löneportal',
  robots: { index: false, follow: false },
}

export default function LoneportalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
