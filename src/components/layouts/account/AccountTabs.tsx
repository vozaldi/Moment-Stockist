'use client';

import Button from "@/components/commons/Button";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { IoCartOutline, IoExitOutline, IoPersonOutline } from "react-icons/io5";

type Props = React.HTMLAttributes<HTMLDivElement> & {

};

function AccountTabs({
  className,
  ...props
}: Props) {
  // Hooks
  const pathname = usePathname();

  return (
    <section className={clsx([className])} {...props}>
      <div className="container mx-auto flex">
        {[{
          label: `My Account`,
          href: `/account`,
          Icon: IoPersonOutline,
        }, {
          label: `My Order`,
          href: `/account/order`,
          Icon: IoCartOutline,
        }].map((item) => {
          const isActive = pathname === item.href;

          return (
            <Button
              key={item.href}
              type="link"
              href={item.href}
              className={clsx([
                "flex py-2 px-8 text-gray-700 !rounded-none border-b-2 border-transparent font-semibold hover:text-primary",
                isActive && "!font-bold !border-fucosan-pink-dark !text-fucosan-pink-dark",
              ])}
            >
              <item.Icon size={22} className="mr-2" />
              {item.label}
            </Button>
          );
        })}

        <Button
          className="flex py-2 px-8 text-gray-700 !rounded-none border-b-2 border-transparent font-semibold hover:text-primary"
        >
          <IoExitOutline size={22} className="mr-2" />

          {`Logout`}
        </Button>
      </div>
    </section>
  );
};

export default AccountTabs;
