import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { InteractiveCursor } from "@/components/ui/InteractiveCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Samson Jebaraj | DevOps & Cloud Engineer",
  description: "Portfolio of Samson Jebaraj, DevOps Engineer specializing in AWS, Kubernetes, and Cloud Native solutions.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "Terraform", "Jenkins", "Portfolio", "Samson Jebaraj"],
  openGraph: {
    title: "Samson Jebaraj | DevOps & Cloud Engineer",
    description: "DevOps Engineer with 2 years of experience designing, automating, and managing cloud-native applications on AWS.",
    type: "website",
    locale: "en_US",
    siteName: "Samson Jebaraj Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#030014" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden md:block">
            <InteractiveCursor />
          </div>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 w-full relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
