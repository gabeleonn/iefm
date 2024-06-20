import type { Metadata, Viewport } from "next";
import { type ReactNode } from "react";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

import "@/app/globals.css";
import { Application } from "@/shared/application";

const APP_NAME = "dev.gleon.sg-mgmt";
const APP_DEFAULT_TITLE = "Células IEFM";
const APP_TITLE_TEMPLATE = "%s - Gestão de Células";
const APP_DESCRIPTION = "Gestão de Células Família Missionária";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  icons: "/favicon.ico",
  manifest: "/manifest.json",
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" dir="ltr">
      <head />
      <body>
        <ProgressBarProvider>
          <ProgressBar className="fixed h-1 shadow-lg shadow-text bg-sky-500 top-0" />
          <Application>{children}</Application>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
