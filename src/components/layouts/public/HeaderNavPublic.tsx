import { appConfig } from "@/lib/config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoBagOutline, IoPersonCircleOutline } from "react-icons/io5";

type Props = React.HTMLAttributes<HTMLDivElement>;

function HeaderNavPublic({
  className,
  ...props
}: Props) {
  return (
    <nav className={clsx("w-full absolute top-0 left-0 z-[500]", className)} {...props}>
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={'/assets/images/app-logo.png'}
            alt={appConfig('company')}
            width={220}
            height={52}
          />
        </Link>

        <ul className="flex gap-x-6 items-center">
          <li>
            <Link href={'/auth/login'} className="flex text-lg items-center hover:text-primary">
              <IoPersonCircleOutline size={32} />

              <span className="ml-2">{`Login`}</span>
            </Link>
          </li>
          <li>
            <Link href={'/auth/login'} className="flex text-lg items-center hover:text-primary">
              <IoBagOutline size={32} />

              <span className="ml-2">{`(0)`}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavPublic;
