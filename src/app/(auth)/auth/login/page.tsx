import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="grow p-8 flex items-center justify-center">
      <div className="w-[640px] max-w-full bg-white border border-gray-300 rounded-2xl py-8 px-8 shadow-lg">
        <LoginForm className="max-w-[400px] mx-auto" />

        <div className="mt-4 text-center">
          <Link href={'/'} className="text-fucosan-pink text-sm underline">
            {`Back to Home`}
          </Link>
        </div>
      </div>
    </div>
  );
};
