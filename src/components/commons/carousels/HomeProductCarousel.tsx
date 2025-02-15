"use client";

import { numeral } from "@/lib/utilities/numeral";
import { ProductModel } from "@/types/models";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import Button from "../Button";

type Props = SwiperProps & {
  products?: ProductModel[];
};

function HomeProductCarousel({
  className,
  products = [],
  ...props
}: Props) {
  return (
    <Swiper
      slidesPerView={"auto"}
      className={clsx([className])}
      {...props}
    >
      {products.map((item) => {
        return (
          <SwiperSlide key={item.name} className="!w-[224px] px-1 pb-2">
            <div className="relative px-3 flex flex-col items-center">
              <Link
                href={`/product/${item.name}`}
                className={clsx([
                  "group/card",
                  "card border-neutral-200 text-decoration-none shadow-sm overflow-hidden rounded-lg",
                  "hover:!shadow-md transition-shadow duration-200",
                ])}
              >
                <div className="w-100 h-[136px] d-flex items-center justify-center">
                  <Image
                    src={item.image_url || `/assets/images/app-logo-vertical.png`}
                    className={clsx([
                      "object-fit-cover rounded-t-md group-hover/card:scale-105 transition-transform duration-200",
                      "w-[152px] h-[152px]",
                    ])}
                    alt={`Image ${item.name}`}
                    width={152}
                    height={152}
                  />
                </div>

                <div className="card-body bg-white z-10 px-2 py-1">
                  <h6 className="small mb-1 fw-semibold min-h-[2.4em] line-clamp-2">{item.name}</h6>
                </div>
              </Link>

              {!!item.price && (
                <p className="small fw-bold mb-0">{numeral(item.price).format('$0,0')}</p>
              )}

              <Button className="uppercase font-bold w-full mt-2" color="primary" size="sm" border>
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
