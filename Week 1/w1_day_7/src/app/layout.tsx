import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <footer className="flex flex-row justify-evenly border-2 p-5">
          <a href="https://www.linkedin.com/in/liezlmouton/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://github.com/SoftDevLiz" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://stackoverflow.com/users/22359117/thatliz" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
        </footer>
      </body>
    </html>
  );
}
