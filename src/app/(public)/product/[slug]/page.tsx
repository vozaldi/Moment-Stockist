import AddToCart from "@/components/commons/buttons/AddToCart";
import KonsultasiGratisSection from "@/components/commons/KonsultasiGratisSection";
import ProductTabs from "@/components/pages/product/ProductTabs";
import { appConfig } from "@/lib/config";
import { ProductModel } from "@/types/models";
import axios from "axios";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import numeral from "numeral";

export const metadata: Metadata = {
  title: [`Moment Fucosan`, appConfig('company')].filter(Boolean).join(' | '),
  description: "Lorem ipsum dolor sit amet",
};

const productDummy: ProductModel = {
  name: `Moment Fucosan`,
  color: '#cacef4',
  decoration_url: '/assets/images/decorations/decoration-fucosan.png',
};

export default async function ProductSlug({
  params: { slug },
}: { params: { slug: string } }) {
  const model: ProductModel | null = await axios({
    url: appConfig('api_url') + '/products',
    method: 'get',
  }).then(({ data }) => {
    if (data?.status === 'success') {
      const items: any[] = data.data || [];
      const models: ProductModel[] = items.map((item): ProductModel => {
        return {
          ...item,
          price: Number(item.price),
        };
      });

      return models.find((item) => item.name === decodeURI(slug)) || null; 
    }

    throw data;
  }).catch((e) => null);

  const color = ['#cacef4', '#d2ecc5', '#eee4c3', '#ffe1e1', '#ffdbdb', '#d0eeff', '#f6f4d3', '#f5e5d6'];
  const product: ProductModel = { ...productDummy, ...model };

  product.color = color[(product.id || 0) - 1];

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
          <div className="flex-1 bg-black/10 rounded-s-2xl py-10 px-8">
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
            {!!product.image && (
              <Image
                className="max-w-none w-[360px] h-[360px] object-contain -m-12"
                src={product.image}
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
