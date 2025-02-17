'use client';

import Button from "@/components/commons/Button";
import { useShopShallow, useShopState } from "@/states/shopState";
import clsx from "clsx";
import numeral from "numeral";
import { useEffect } from "react";
import { IoArrowBack, IoCartOutline } from "react-icons/io5";

type Props = {
  // 
};

function FloatingCart({}: Props) {
  // Hooks
  const cartOpen = useShopShallow((state) => state.cartOpen);
  const cartsUpdate = useShopShallow((state) => state.cartsUpdate);
  const grandTotal = useShopShallow((state) => state.transaction?.order_grand_total);
  const setCartOpen = useShopShallow((state) => state.setCartOpen);

  // Effects
  useEffect(() => {

  }, [cartOpen]);

  return (
    <>
      <Button
        className="fixed right-6 bottom-6 bg-white text-black shadow-lg hover:shadow-xl hover:bg-gray-100 z-[300]"
        size={64}
        onClick={() => setCartOpen(true)}
      >
        <IoCartOutline size={32} />
      </Button>

      {!!cartOpen && (
        <div
          className="fixed inset-0 z-[700]"
        >
          <div
            className="absolute inset-0 bg-white/50 backdrop-blur-md"
            onClick={() => setCartOpen(false)}
          />

          <div className={clsx([
            'w-[400px] absolute top-4 bottom-4 right-4 bg-white rounded-xl shadow-lg',
            'flex flex-col'
          ])}>
            <div className="flex items-center mx-4 border-b-4 border-primary py-2 mt-2">
              <Button
                className="hover:bg-black/10 -my-4"
                size={32}
                onClick={() => setCartOpen(false)}
              >
                <IoArrowBack size={24} />
              </Button>

              <div className="grow">
                <h3 className="text-xl font-semibold text-fucosan-pink-dark text-center">
                  {`My Cart`}
                </h3>
              </div>
            </div>

            <div className="grow overflow-y-auto">

            </div>

            <div className="mx-4 border-t-4 border-primary py-4">
              {[{
                label: `Subtotal`,
                value: numeral(grandTotal).format('$0,0'),
              }].map((item, index) => (
                <div key={item.label} className={clsx(["flex items-center", !!index && 'mt-1'])}>
                  <p className="grow shrink pr-4">{item.label}</p>

                  <p className="text-right">{item.value}</p>
                </div>
              ))}
            </div>

            <Button
              className="!rounded-t-none !rounded-b-xl opacity-60 hover:opacity-50 text-lg"
              color="fucosan-pink-dark"
            >
              {`Checkout`}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCart;
