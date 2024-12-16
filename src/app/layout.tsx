import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UIProvider, Box } from "@yamada-ui/react";
import Header from "@/components/header";
import { SessionProviderComponent } from "@/components/sessionProviderComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeChat",
  description: "Let's chat securely!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* SessionProviderのコンポーネントを作成して配置 */}
        <SessionProviderComponent>
          <UIProvider>
            <Header />
            <Box>{children}</Box>
          </UIProvider>
        </SessionProviderComponent>
      </body>
    </html>
  );
}
