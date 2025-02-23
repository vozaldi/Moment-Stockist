'use client';

import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { useUiShallow } from "@/states/uiState";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = {

};

const LoginModal = ({}: Props) => {
  // Hooks
  const loginOpen = useUiShallow((state) => state.loginOpen);
  const setLoginOpen = useUiShallow((state) => state.setLoginOpen);

  // States
  const [isRegister, setIsRegister] = useState(false);

  // Effects
  useEffect(() => {
    !loginOpen && setIsRegister(false);
  }, [loginOpen]);

  return (
    <div className={clsx([
      "fixed inset-0 p-4 z-[700] flex items-center justify-center",
      !loginOpen && "opacity-0 [visibility:hidden]",
    ])}>
      <div
        className={clsx([
          "absolute inset-0 bg-black/30",
          "transition-opacity duration-300 opacity-0",
          loginOpen && "!opacity-100"
        ])}
        onClick={() => setLoginOpen(false)}
      />

      <div className={clsx([
        "relative w-[640px] max-w-full bg-white/70 backdrop-blur-lg border border-white shadow-lg rounded-2xl py-8 px-8",
        "transition-all duration-300 opacity-0 translate-y-[10vh]",
        loginOpen && "!translate-y-0 !opacity-100",
      ])}>
        {!isRegister ? (
          <LoginForm
            className="max-w-[400px] mx-auto"
            onRegisterClick={() => setIsRegister(true)}
          />
        ) : (
          <RegisterForm
            className="max-w-[400px] mx-auto"
            onLoginClick={() => setIsRegister(false)}
          />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
