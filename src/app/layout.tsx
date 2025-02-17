import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/fonts.css";
import '../lib/utilities/numeral';
import { appConfig } from "@/lib/config";
import React from "react";
import { RootStoreProvider } from "@/states/providers/storeProvider";

export const metadata: Metadata = {
  title: appConfig('company'),
  description: "Lorem ipsum dolor sit amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-gray-600 antialiased bg-white flex flex-col min-h-screen`}
      >
        <RootStoreProvider>
          {children}
        </RootStoreProvider>
      </body>
    </html>
  );
}
