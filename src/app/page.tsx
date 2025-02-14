import TagCard from "@/components/commons/cards/TagCard";
import { appConfig } from "@/lib/config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoBagOutline, IoPersonCircleOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <nav className="w-full absolute top-0 left-0 z-[500]">
        <div className="container mx-auto py-4 flex justify-between">
          <Link href={"/"}>
            <Image
              src={'/assets/images/app-logo.png'}
              alt={appConfig('company')}
              width={220}
              height={52}
            />
          </Link>

          <ul className="flex gap-x-6">
            <li>
              <Link href={'/auth/login'} className="flex text-lg items-center hover:text-primary">
                <IoPersonCircleOutline size={32} />

                <span className="ml-2">{`Login`}</span>
              </Link>
            </li>
            <li>
              <Link href={'/auth/login'} className="flex text-lg items-center hover:text-primary">
                <IoBagOutline size={32} />

                <span className="ml-2">{`(0)`}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className="relative flex items-center justify-center w-full h-[100vh] max-h-[800px]">
          <Image
            className="absolute inset-0 object-cover w-full h-full pointer-events-none"
            src={'/assets/images/pictures/bg-header.jpg'}
            alt={`Background Header`}
            width={1280}
            height={720}
          />

          <div className="container pt-12 mx-auto px-8 md:px-6 xl:px-12 flex flex-col md:flex-row items-center relative">
            <div className="grow max-w-xl flex flex-col items-start">
              <h3 className="text-2xl xl:text-4xl xl:leading-normal leading-normal text-gray-700 font-black mb-8">
                {`The Easiest Way`}
                <br />
                {`to`} <span className="text-secondary">{`Keep You Healthy`}</span>
              </h3>

              <p className="text-base xl:text-xl xl:leading-normal leading-normal max-w-5xl mb-5">
                {`We'll help you create a health plan with vitamins, supplements, and more that help you feel your best today and support you long-term`}
              </p>

              <TagCard label={`Boost Immune System`} />
            </div>

            <div className="relative">
              <Image
                src={'/assets/images/products/product-essensia.png'}
                alt={`Moment Essensia`}
                width={600}
                height={600}
              />

              <TagCard
                className="absolute top-8 left-28"
                label={`Reduce The Occurence of Allergies`}
                imageSrc={'/assets/images/decorations/decoration-herb.png'}
                ImageProps={{
                  className: 'absolute -top-12 right-12 w-16 h-16  object-contain',
                  width: 70,
                  height: 70,
                }}
              />

              <TagCard
                className="absolute bottom-8 right-20"
                label={`Reduce The Risk of Viral Infection`}
                imageSrc={'/assets/images/decorations/decoration-lemon.png'}
                ImageProps={{
                  className: `absolute -bottom-4 -right-4 w-10 h-10 object-contain`,
                }}
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto pb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-9 gap-x-8 place-content-center">
            {[{
              label: `Natural Ingredients`,
              src: '/assets/images/icons/icon-quality-ingredient.png',
            }, {
              label: `Best Quality`,
              src: '/assets/images/icons/icon-colorant-free.png',
            }, {
              label: `Family Partner`,
              src: '/assets/images/icons/icon-gluten-free.png',
            }].map((item, index) => (
              <TagCard
                key={item.label}
                className={clsx("col-span-3 !text-lg !rounded-2xl !px-8", index === 1 && "scale-105")}
                label={item.label}
                left={(
                  <Image
                    src={item.src}
                    alt={`Icon ${item.label}`}
                    width={64}
                    height={64}
                  />
                )}
              />
            ))}
          </div>
        </section>

        <section className="flex">
          <div className="bg-focusan-pink/50 grow md:w-50 p-10 md:p-12">
            <div className="relative flex flex-col justify-center items-center max-w-[550px] mx-auto aspect-square p-6 md:p-8 rounded-3xl bg-white/90 text-center">
              <h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-8">
                {`Why you'll love Moment`}
              </h3>

              <p className="text-sm md:text-lg">
                {`Moment selalu menghadirkan produk-produk terbaik untuk menjadi partner terpercaya bagi keluarga anda. Dikombinasikan dengan bahan natural alami yang telah teruji secara klinis, sehingga aman untuk dikonsumsi mulai dari anak-anak hingga dewasa. Selain itu Seluruh produk moment juga sudah memilik BPOM, dan terverifikasi HALAL.`}
              </p>

              <Image
                className="absolute w-full h-full scale-[1.1] object-contain"
                src={'/assets/images/decorations/decoration-box.png'}
                alt={`Banner why you'll love us`}
                width={626}
                height={626}
              />
            </div>
          </div>

          <div className="w-5/12 overflow-hidden flex items-center justify-center">
            <Image
              className="relative -top-[15%] -m-[400px] w-[144%] h-[144%] object-cover"
              src={'/assets/images/banners/banner-one.jpg'}
              alt={`Banner why you'll love us`}
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className="container md:pt-24 md:px-12 sm mx-auto h-screen flex-col flex justify-center">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-serif">
              {`Health is about balance`}
            </h3>

            <p className="text-lg md:text-xl mt-3">
              {`Specially formulated for anyone who wants to promote their good health and well-being `}
            </p>
          </div>

          
        </section>

        <p>{appConfig('company')}</p>
      </main>
    </>
  );
}
