'use client';

import Button, { ButtonProps } from "@/components/commons/Button";
import UpdateProfiileForm from "@/components/forms/account/UpdateProfiileForm";
import clsx from "clsx";
import { useState } from "react";
import { createPortal } from "react-dom";

type Props = ButtonProps & {};

function ProfileButtonModal({
  className,
  ...props
}: Props) {
  // States
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className={clsx(["!rounded-lg", className])}
        color="primary"
        onClick={() => setIsOpen(true)}
        {...props}
      >
        {`Update Profile`}
      </Button>

      {createPortal((!isOpen ? null : (
        <div className="fixed inset-0 p-4 z-[700] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-[560px] max-w-full bg-white/70 backdrop-blur-lg border border-white shadow-lg rounded-2xl py-8 px-8">
            <UpdateProfiileForm onSubmitted={() => setIsOpen(false)} />
          </div>
        </div>
      )), document.body)}
    </>
  );
};

export default ProfileButtonModal;
