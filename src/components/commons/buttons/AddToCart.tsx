'use client';

import clsx from "clsx";
import Button, { ButtonProps } from "../Button";
import { useShopShallow } from "@/states/shopState";
import { useState } from "react";
import { ProductModel } from "@/types/models";

type Props = ButtonProps & {
  product: ProductModel;
};

function AddToCart({
  className,
  product,
  onClick,
  ...props
}: Props) {
  // Hooks
  const pushShopCartItem = useShopShallow((state) => state.pushShopCartItem);

  // States
  const [isLoading, setIsLoading] = useState(false);

  // Vars
  const handleAddToCart = async () => {
    setIsLoading(true);

    pushShopCartItem({
      product,
      product_id: product.id,
      product_name: product.name,
      qty: 1,
    });

    setIsLoading(false);
  };

  return (
    <Button
      className={clsx([
        "mt-8 min-w-[200px] border border-white bg-white/20 hover:bg-white/30",
        className
      ])}
      loading={isLoading}
      onClick={() => handleAddToCart()}
      {...props}
    >
      {`Add to Cart`}
    </Button>
  );
};

export default AddToCart;
