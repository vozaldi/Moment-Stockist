"use client";

import { TestimonyModel } from "@/types/models";
import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

type Props = SwiperProps & {
  testimonies?: TestimonyModel[];
};

function HomeTestimonyCarousel({
  className,
  testimonies = [],
  ...props
}: Props) {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides
      loop
      className={clsx([className])}
      {...props}
    >
      {testimonies.map((item) => {
        return (
          <SwiperSlide key={item.name} className="!w-[580px] px-1 pb-2">
            <div className="relative px-3 flex flex-col items-center">
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

              <div className="bg-white z-10 px-2 py-1 text-center">
                <h6 className="font-bold whitespace-nowrap text-lg md:text-xl text-center">{item.name}</h6>

                <p className="text-sm md:text-lg text-center px-1 md:px-[50px] mt-4">{item.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeTestimonyCarousel;
