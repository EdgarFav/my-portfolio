import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Edgar Favela - Fullstack Developer con +3 años de experiencia",
  description: "Portafolio Fullstack Developer con +3 años de experiencia",
  openGraph: {
    title: "Portfolio de Edgar Favela - Fullstack Developer",
    description: "Portafolio Fullstack Developer con +3 años de experiencia",
    type: "website",
    url: "https://www.nahucodes.dev", // Replace with your actual domain
    images: [
      {
        url: "/og-image.png", // Create an Open Graph image in your public folder
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Edgar Favela - Fullstack Developer",
    description: "Portafolio Fullstack Developer con +3 años de experiencia",
    images: ["/og-image.png"], // Same image as Open Graph
  },
  icons: {
    icon: "/favicon.ico", // Path to your favicon in the public folder
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  );
}