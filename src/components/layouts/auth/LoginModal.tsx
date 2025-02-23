'use client';

import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { useUiShallow } from "@/states/uiState";
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

  return !loginOpen ? null : (
    <div className="fixed inset-0 p-4 z-[700] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => setLoginOpen(false)}
      />

      <div className="relative w-[640px] max-w-full bg-white/70 backdrop-blur-lg border border-white shadow-lg rounded-2xl py-8 px-8">
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
