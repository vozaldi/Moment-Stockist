import RegisterForm from "@/components/forms/RegisterForm";

export default function Register() {
  return (
    <div className="grow p-8 flex items-center justify-center">
      <div className="w-[640px] max-w-full bg-white border border-gray-300 rounded-2xl py-8 px-8 shadow-lg">
        <RegisterForm className="max-w-[400px] mx-auto" />
      </div>
    </div>
  );
};
