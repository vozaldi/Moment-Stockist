'use client';

import Button from "@/components/commons/Button";
import { appConfig } from "@/lib/config";
import { useShopShallow } from "@/states/shopState";
import { useUiShallow } from "@/states/uiState";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoBagOutline, IoPersonCircleOutline } from "react-icons/io5";

type Props = React.HTMLAttributes<HTMLDivElement>;

function HeaderNavPublic({
  className,
  ...props
}: Props) {
  // Hooks
  const carts = useShopShallow((state) => state.carts);
  const setLoginOpen = useUiShallow((state) => state.setLoginOpen);
  const setCartOpen = useShopShallow((state) => state.setCartOpen);

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

        <ul className="flex gap-x-4 items-center">
          <li>
            <Link
              href={'/auth/login'}
              className="flex text-lg items-center hover:text-primary px-2 py-2"
              onClick={(e) => {
                e.preventDefault();

                return setLoginOpen(true);
              }}
            >
              <IoPersonCircleOutline size={32} />

              <span className="ml-2">{`Login`}</span>
            </Link>
          </li>

          <li>
            <Button
              className="!px-2 !py-2 flex items-center"
              onClick={() => setCartOpen(true)}
            >
              <IoBagOutline size={32} />

              <span className="ml-2">{`(${carts.length})`}</span>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavPublic;
