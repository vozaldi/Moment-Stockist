import React from "react";
import HeaderNavPublic from "@/components/layouts/public/HeaderNavPublic";
import FloatingCart from "@/components/layouts/public/FloatingCart";
import AccountTabs from "@/components/layouts/account/AccountTabs";
import FooterPublic from "@/components/layouts/public/FooterPublic";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNavPublic className="!sticky !bg-white hover:bg-white/25 hover:backdrop-blur-sm shadow-md z-[300]" />

      <AccountTabs className="pt-2" />

      <main className="grow flex flex-col">{children}</main>

      <FooterPublic className="mt-16" />

      <FloatingCart />
    </>
  );
}
