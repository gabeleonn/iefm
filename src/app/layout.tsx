import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Comunidades";
const APP_DEFAULT_TITLE = "Comunidades - Familia Missionária";
const APP_TITLE_TEMPLATE = "%s - Comunidades";
const APP_DESCRIPTION =
  "Aplicativo de gestão de comunidades da Família Missionária.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  maximumScale: 1,
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
