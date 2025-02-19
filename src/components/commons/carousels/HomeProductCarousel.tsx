"use client";

import { numeral } from "@/lib/utilities/numeral";
import { ProductModel } from "@/types/models";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import Button from "../Button";
import { useState } from "react";
import { useShopShallow } from "@/states/shopState";

type Props = SwiperProps & {
  products?: ProductModel[];
};

function HomeProductCarousel({
  className,
  products = [],
  ...props
}: Props) {
  // Hooks
  const pushShopCartItem = useShopShallow((state) => state.pushShopCartItem);

  // States
  const [isLoading, setIsLoading] = useState(false);

  // Vars
  const handleAddToCart = async (product: ProductModel) => {
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
    <Swiper
      slidesPerView={"auto"}
      className={clsx([className])}
      {...props}
    >
      {products.map((item) => {
        return (
          <SwiperSlide key={item.name} className="!w-[224px] px-1 py-2">
            <div className="relative px-3 flex flex-col items-center">
              <Link
                href={`/product/${item.name}`}
                className="group/card block w-full"
              >
                <div className={clsx([
                  'relative',
                  "w-100 aspect-square flex items-center justify-center rounded-xl",
                ])} style={{ backgroundColor: item.color || 'transparent' }}>
                  <Image
                    src={item.image_url || `/assets/images/app-logo-vertical.png`}
                    className="w-[152px] h-[152px] object-contain"
                    alt={`Image ${item.name}`}
                    width={152}
                    height={152}
                  />

                  {!!item.decoration_url && (
                    <Image
                      src={item.decoration_url || `/assets/images/app-logo-vertical.png`}
                      className="absolute max-w-none w-[110%] h-[110%] -left-[5%] -top-[5%] object-contain group-hover/card:scale-105 transition-all duration-300 pointer-events-none"
                      alt={`Image ${item.name}`}
                      width={152}
                      height={152}
                    />
                  )}
                </div>

                <h6 className="text-2xl text-center mt-2 fw-semibold min-h-[3em] line-clamp-2 flex items-center justify-center group-hover/card:underline">{item.name}</h6>
              </Link>

              {!!item.price && (
                <p className="text-lg text-black font-semibold mb-0">{numeral(item.price).format('$0,0')}</p>
              )}

              <Button
                className="uppercase font-bold w-full mt-3"
                color="primary"
                size="sm"
                border
                loading={isLoading}
                onClick={() => handleAddToCart(item)}
              >
                {`Add to Cart`}
              </Button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeProductCarousel;
