'use client';

import Button from "@/components/commons/Button";
import { numeral } from "@/lib/utilities";
import { useShopShallow } from "@/states/shopState";
import { CartModel } from "@/types/models";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import { useEffect } from "react";
import { IoArrowBack, IoCartOutline, IoClose } from "react-icons/io5";
import { Slide, toast, ToastContainer, ToastContentProps } from "react-toastify";

type Props = {
  // 
};

const CartToast = ({
  data: { cart },
  closeToast,
  toastProps,
}: ToastContentProps<{ cart: CartModel }>) => {
  return (
    <div
      className="grow rounded-lg bg-gray-200 shadow-lg flex items-center p-2 font-sans"
      style={{ backgroundColor: cart.product?.color }}
    >
      <div className="w-24 h-24 flex items-center justify-center">
        {!!cart.product?.image && (
          <Image
            src={cart.product.image}
            alt={`Produk ${cart.product.name}`}
            className="object-contain max-w-full max-h-full"
            width={200}
            height={200}
          />
        )}
      </div>

      <div className="relative grow self-stretch flex flex-col p-2 rounded-md bg-white">
        <p className="text-xs font-bold">
          {`Added to cart`}
        </p>

        <h1 className="text-sm">{cart.product_name}</h1>

        <div className="flex items-center mt-auto pt-1">
          <div className="grow pr-1 text-sm">
            <p>Qty: {cart.qty}</p>
          </div>

          <p
            className="-mr-4 bg-gray-200 text-black py-1 pl-2 pr-4 rounded-lg font-bold text-xs"
            style={{ backgroundColor: cart.product?.color }}
          >
            {numeral(cart.total).format('$0,0')}
          </p>
        </div>

        <Button
          className="absolute top-0 right-0"
          size={24}
          onClick={() => toast.dismiss(`cart-toast-${cart.product_id}`)}
        >
          <IoClose size={12} />
        </Button>
      </div>
    </div>
  );
};

function FloatingCart({}: Props) {
  // Hooks
  const cartOpen = useShopShallow((state) => state.cartOpen);
  const cartsUpdate = useShopShallow((state) => state.cartsUpdate);
  const carts = useShopShallow((state) => state.carts);
  const grandTotal = useShopShallow((state) => state.transaction?.order_grand_total);
  const setCartOpen = useShopShallow((state) => state.setCartOpen);

  // Effects
  useEffect(() => {
    const [cart] = carts.sort((a, b) => moment(b.update_at).diff(a.update_at));

    if (cart) {
      const toastId = `cart-toast-${cart.product_id}`;
      const toastData = { cart };

      if (toast.isActive(toastId)) {
        toast.update(toastId, { data: toastData });

        return;
      }

      toast(CartToast, {
        toastId,
        containerId: 'cart-toast',
        position: 'top-center',
        transition: Slide,
        autoClose: 5000,
        pauseOnHover: true,
        hideProgressBar: true,
        closeButton: false,
        className: '!p-0 !bg-transparent !shadow-none ',
        data: toastData,
      });
    }
  }, [cartsUpdate, carts]);

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
        <div className="fixed inset-0 z-[700]">
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

      <ToastContainer
        containerId={"cart-toast"}
      />
    </>
  );
};

export default FloatingCart;
