import React from "react";
import HeaderNavPublic from "@/components/layouts/public/HeaderNavPublic";
import FloatingCart from "@/components/layouts/public/FloatingCart";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNavPublic className="!sticky hover:bg-white/25 hover:backdrop-blur-sm" />

      <main className="grow">{children}</main>

      <FloatingCart />
    </>
  );
}
