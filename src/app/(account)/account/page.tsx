import Link from "next/link";

export default function Account() {
  return (
    <div className="grow p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        {`Account`}
      </h1>

      <Link href={'/'} className="text-primary underline text-sm mt-4">
        {`Back to Home`}
      </Link>
    </div>
  );
};
