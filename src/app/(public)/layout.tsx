import React from "react";
import HeaderNavPublic from "@/components/layouts/public/HeaderNavPublic";
import FooterPublic from "@/components/layouts/public/FooterPublic";
import FloatingCart from "@/components/layouts/public/FloatingCart";
import LoginModal from "@/components/layouts/auth/LoginModal";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNavPublic className="hover:bg-white/25 hover:backdrop-blur-sm" />

      <main className="grow">{children}</main>

      <FooterPublic className="mt-16" />

      <FloatingCart />

      <LoginModal />
    </>
  );
}
