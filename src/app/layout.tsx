import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/fonts.css";
import { appConfig } from "@/lib/config";

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
        className={`text-gray-600 antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
