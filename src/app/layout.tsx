import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Inter } from "next/font/google";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reimagify",
  description: "AI-powered image generation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          <div className="flex-1">
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          </div>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
