import React from "react"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
// TypeScript
type RootLayoutProps = {
  children: React.ReactNode;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main>
          <Navbar />
          {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
