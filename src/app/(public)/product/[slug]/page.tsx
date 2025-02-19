import AddToCart from "@/components/commons/buttons/AddToCart";
import KonsultasiGratisSection from "@/components/commons/KonsultasiGratisSection";
import ProductTabs from "@/components/pages/product/ProductTabs";
import { appConfig } from "@/lib/config";
import { ProductModel } from "@/types/models";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import numeral from "numeral";

export const metadata: Metadata = {
  title: [`Moment Fucosan`, appConfig('company')].filter(Boolean).join(' | '),
  description: "Lorem ipsum dolor sit amet",
};

const product: ProductModel = {
  id: 1,
  name: `Moment Fucosan`,
  price: 650000,
  color: '#cacef4',
  image_url: '/assets/images/products/fucosan.png',
  decoration_url: '/assets/images/decorations/decoration-fucosan.png',
};

export default function ProductSlug() {
  return (
    <>
      <div className="container mt-32 mx-auto">
        <article
          className={clsx([
            "rounded-2xl bg-white shadow-lg mr-12",
            "flex",
            !!product.color && "text-white",
          ])}
          style={{ background: product.color }}
        >
          <div className="grow shrink bg-black/10 rounded-s-2xl py-10 px-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-2 text-lg md:text-2xl font-medium">
              {numeral(product.price).format('$0,0')}
            </p>

            {!!product && (
              <ProductTabs className="mt-2" product={product} />
            )}

            <AddToCart product={product} />
          </div>

          <div className="p-12 relative flex items-center justify-center">
            {!!product.image_url && (
              <Image
                className="max-w-none w-[360px] h-[360px] object-contain -m-12"
                src={product.image_url}
                alt={`Image ${product.name}`}
                width={400}
                height={400}
              />
            )}
            
            {!!product.decoration_url && (
              <Image
                src={product.decoration_url || `/assets/images/app-logo-vertical.png`}
                className="absolute max-w-none w-[120%] h-[120%] -left-[5%] -top-[10%] object-contain group-hover/card:scale-105 transition-all duration-300 pointer-events-none"
                alt={`Image ${product.name}`}
                width={400}
                height={400}
              />
            )}
          </div>
        </article>
      </div>

      <KonsultasiGratisSection className="mt-12" />
    </>
  );
};
