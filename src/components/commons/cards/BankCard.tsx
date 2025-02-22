'use client';

import clsx from "clsx";
import Image from "next/image";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  
};

function BankCard({
  className,
  ...props
}: Props) {
  return (
    <div className={clsx(["flex items-center", className])} {...props}>
      <div className="self-start flex items-center justify-center w-16 h-16 rounded-lg bg-slate-300/50 hover:shadow-md hover:bg-slate-300">
        <Image
          src={'/assets/images/banks/bca.png'}
          alt="Payment Bank"
          className="object-contain max-w-full max-h-full"
          width={200}
          height={200}
        />
      </div>

      <div className="grow shrink pl-3 text-xs">
        <p className="text-xs text-gray-900">{`BCA (Bank Central Asia)`}</p>

        <p className="text-gray-700 mt-2">
          {`0987654321 a/n USER3BCA`}
        </p>
      </div>
    </div>
  );
};

export default BankCard;
