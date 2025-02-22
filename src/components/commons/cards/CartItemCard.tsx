'use client';

import { numeral } from "@/lib/utilities";
import { CartModel } from "@/types/models";
import clsx from "clsx";
import Image from "next/image";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  cart: CartModel;
};

function CartItemCard({
  cart,
  className,
  ...props
}: Props) {
  return (
    <div className={clsx(['flex p-1 rounded-lg bg-slate-100 hover:shadow-md', className])} {...props}>
      <div className="bg-white w-20 h-20 flex items-center justify-center rounded-lg overflow-hidden">
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

      <div className="flex-1 self-center text-sm pl-3">
        <h1 className="font-semibold">{cart.product_name}</h1>

        <div className="flex gap-x-2">
          <p>{`Quantity`}</p>

          <p>{cart.qty}</p>
        </div>

        <p className="mt-1 text-xs text-fucosan-pink-dark font-medium">
          {numeral(cart.total).format('$0,0')}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
