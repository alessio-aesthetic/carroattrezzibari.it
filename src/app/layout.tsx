import { type Metadata, type Viewport } from 'next'
import { site } from '@/data/site'
import '@/styles/tailwind.css'
import '@/styles/premium.css'
import '@/styles/bari-dispatch.css'
export const viewport: Viewport = { themeColor: '#112822' }
export const metadata: Metadata = {
 metadataBase: new URL(`https://${site.domain}`),
 title: { default: site.title, template: `%s | ${site.name}` }, description: site.description,
 alternates: { canonical: '/' }, icons: { icon: '/favicon.svg' },
 openGraph: { title: site.title, description: site.description, url: `https://${site.domain}/`, siteName: site.name, locale: 'it_IT', type: 'website' },
 robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="it"><body style={{ ['--font-display']: '"Trebuchet MS", system-ui, sans-serif', ['--font-body']: 'system-ui, sans-serif' } as React.CSSProperties}>{children}<script defer src="/privacy-notice.js" />
      </body></html> }
