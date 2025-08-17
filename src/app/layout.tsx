import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cins of Marj - Film Analysis",
  description: "A personal collection of films and TV shows that left a lasting impact, complete with detailed analysis and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load fonts directly */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load fonts with display=swap for better performance */}
        <link rel="stylesheet" href="https://use.typekit.net/gaa8hjy.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Input+Sans:ital,wght@0,400..900;1,400..900&display=swap" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
