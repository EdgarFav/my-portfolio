import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

// Configuración de metadatos
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nahucodes.dev';
const SITE_NAME = 'Edgar Favela | Fullstack Developer';
const SITE_DESCRIPTION = 'Desarrollador Fullstack con experiencia en React, Next.js, Node.js y más. Echa un vistazo a mis proyectos y habilidades técnicas.';

// Configuración de vista para dispositivos móviles
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#121212',
};

export const metadata: Metadata = {
  title: {
    default: 'Edgar Favela | Fullstack Developer',
    template: '%s | Edgar Favela',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Desarrollador Fullstack', 
    'Desarrollador Web', 
    'React', 
    'Next.js', 
    'Node.js',
    'Portafolio',
    'Programador'
  ],
  authors: [{ name: 'Edgar Favela' }],
  creator: 'Edgar Favela',
  publisher: 'Edgar Favela',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edgar Favela - Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@tuusuario', // Reemplaza con tu usuario de Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#6366f1' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#6366f1',
    'theme-color': '#121212',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={onest.className}>{children}</body>
    </html>
  );
}