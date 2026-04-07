import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logga in',
  description: 'Logga in till din kundportal hos Lulus Streetfood och följ din matvagns tillverkning.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
