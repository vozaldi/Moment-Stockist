import type { Metadata } from "next";
import { appConfig } from "@/lib/config";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoBagOutline, IoPersonCircleOutline } from "react-icons/io5";
import HeaderNavPublic from "@/components/layouts/public/HeaderNavPublic";
import FooterPublic from "@/components/layouts/public/FooterPublic";

export const metadata: Metadata = {
  title: appConfig('company'),
  description: "Lorem ipsum dolor sit amet",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNavPublic />

      <main className="grow">{children}</main>

      <FooterPublic />
    </>
  );
}
