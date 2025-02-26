import Accordion from "@/components/commons/Accordion";
import TagCard from "@/components/commons/cards/TagCard";
import HomeProductCarousel from "@/components/commons/carousels/HomeProductCarousel";
import HomeTestimonyCarousel from "@/components/commons/carousels/HomeTestimonyCarousel";
import KonsultasiGratisSection from "@/components/commons/KonsultasiGratisSection";
import LoginModal from "@/components/layouts/auth/LoginModal";
import FloatingCart from "@/components/layouts/public/FloatingCart";
import FooterPublic from "@/components/layouts/public/FooterPublic";
import HeaderNavPublic from "@/components/layouts/public/HeaderNavPublic";
import { appConfig } from "@/lib/config";
import { ProductModel } from "@/types/models";
import axios from "axios";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products: ProductModel[] = await axios({
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

      return models; 
    }

    throw data;
  }).catch((e) => []);

  return (
    <>
      <HeaderNavPublic />

      <main>
        <section className="relative flex items-center justify-center w-full h-[100vh] max-h-[800px] z-50">
          <Image
            className="absolute inset-0 object-cover w-full h-full pointer-events-none"
            src={'/assets/images/pictures/bg-header.jpg'}
            alt={`Background Header`}
            width={1280}
            height={720}
          />

          <div className={clsx([
            "container px-4 pt-12 mx-auto flex flex-col-reverse items-center gap-x-4 gap-y-4 relative",
            "md:flex-row md:px-6",
            "lg:px-8",
            "xl:px-12",
          ])}>
            <div className="flex-1 max-w-lg lg:max-w-xl flex flex-col items-start">
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
                src={'/assets/images/products/featured-essensia.png'}
                alt={`Moment Essensia`}
                className="lg:max-w-xl max-w-sm h-auto"
                width={600}
                height={600}
              />

              <TagCard
                className={clsx([
                  "absolute top-0 left-0 -mr-24",
                  "lg:top-8 lg:left-28",
                ])}
                label={`Reduce The Occurence of Allergies`}
                imageSrc={'/assets/images/decorations/decoration-herb.png'}
                ImageProps={{
                  className: 'absolute -top-12 right-12 w-16 h-16  object-contain',
                  width: 70,
                  height: 70,
                }}
              />

              <TagCard
                className={clsx([
                  "absolute bottom-0 right-0 -ml-24",
                  "lg:bottom-8 lg:right-20",
                ])}
                label={`Reduce The Risk of Viral Infection`}
                imageSrc={'/assets/images/decorations/decoration-lemon.png'}
                ImageProps={{
                  className: `absolute -bottom-4 -right-4 w-10 h-10 object-contain`,
                }}
              />
            </div>
          </div>
        </section>

        <div className="fixed top-0 left-0 w-full p-4 lg:px-8 z-20">
          <div className="relative container mx-auto">
            <HeaderNavPublic className="bg-white/50 rounded-full backdrop-blur-md shadow-lg px-4" />
          </div>
        </div>

        <section className="container px-4 mx-auto pb-8 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-9 gap-x-8 gap-y-3 place-content-center">
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
                className={clsx([
                  "col-span-12 md:col-span-3 gap-x-3 !text-lg !rounded-2xl !bg-slate-100",
                  "!px-8 !py-2 !md:py-3",
                  "justify-center md:justify-stretch",
                  index === 1 && "lg:scale-105 md:scale-110"
                ])}
                label={item.label}
                left={(
                  <Image
                    src={item.src}
                    alt={`Icon ${item.label}`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    width={64}
                    height={64}
                  />
                )}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col md:flex-row">
          <div className="bg-fucosan-pink/50 grow md:w-50 p-10 md:p-12">
            <div className="relative flex flex-col justify-center items-center max-w-[550px] mx-auto aspect-square p-6 md:p-8 rounded-3xl bg-white/90 text-center">
              <h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-8">
                {`Why you'll love Moment`}
              </h3>

              <p className="text-sm md:text-lg">
                {`Moment selalu menghadirkan produk-produk terbaik untuk menjadi partner terpercaya bagi keluarga anda. Dikombinasikan dengan bahan natural alami yang telah teruji secara klinis, sehingga aman untuk dikonsumsi mulai dari anak-anak hingga dewasa. Selain itu Seluruh produk moment juga sudah memilik BPOM, dan terverifikasi HALAL.`}
              </p>

              <Image
                className="absolute w-full h-full scale-[1.1] object-contain pointer-events-none"
                src={'/assets/images/decorations/decoration-box.png'}
                alt={`Banner why you'll love us`}
                width={626}
                height={626}
              />
            </div>
          </div>

          <div className={clsx([
            "flex h-[100vw] overflow-hidden items-center justify-center",
            "md:hidden",
            "lg:flex lg:w-5/12 lg:h-auto",
          ])}>
            <Image
              className="relative -top-[15%] -m-[400px] w-[144%] h-[144%] object-cover"
              src={'/assets/images/banners/banner-one.jpg'}
              alt={`Banner why you'll love us`}
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className="lg:container md:pt-24 lg:px-12 sm mx-auto h-screen flex-col flex justify-center">
          <div className="text-center px-12">
            <h3 className="text-3xl md:text-5xl font-serif">
              {`Health is about balance`}
            </h3>

            <p className="text-lg md:text-xl mt-3">
              {`Specially formulated for anyone who wants to promote their good health and well-being`}
            </p>
          </div>

          <div className="max-w-full mt-12">
            <HomeProductCarousel
              products={products.map((item, index) => {
                const color = ['#cacef4', '#d2ecc5', '#eee4c3', '#ffe1e1', '#ffdbdb', '#d0eeff', '#f6f4d3', '#f5e5d6'][index];
                const decoration_url = [
                  '/assets/images/decorations/decoration-fucosan.png',
                  '/assets/images/decorations/decoration-zmooth.png',
                  '/assets/images/decorations/decoration-essensia.png',
                  '/assets/images/decorations/decoration-glucogen.png',
                  '/assets/images/decorations/decoration-zhield.png',
                  '/assets/images/decorations/decoration-morex.png',
                ][index];

                return { ...item, color, decoration_url };
              })}
            />
          </div>
        </section>

        <section className="py-7 bg-fucosan-pink text-white">
          <h3 className="container px-4 font-bold text-2xl md:text-5xl font-serif text-center mx-auto">
            {`Live Life Better with Personalized Nutrition`}
          </h3>
        </section>

        <section className="md:pt-24 md:px-12 sm mx-auto h-screen flex-col flex justify-center items-center overflow-hidden">
          <div className="container px-4 text-center">
            <h3 className="text-3xl md:text-5xl font-serif">
              {`What Our Customer Say`}
            </h3>

            <p className="text-lg md:text-xl mt-3 font-serif">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
            </p>
          </div>

          <div className="lg:max-w-6xl md:-mx-12 mt-12">
            <HomeTestimonyCarousel
              testimonies={[{
                id: 1,
                name: `Daniela Pramitha`,
                comment: `Daniela Pramitha Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh ultricies euismod tincidunt ut labore et dolore magna aliquam. Ut enim ad minim veniam`,
                image_url: '/assets/images/testimonies/avatar-1.png',
              }, {
                id: 2,
                name: `Elsha Harley Oktarindra`,
                comment: `Elsha Harley Oktarindra Nonummy nibh ultricies euismod tincidunt ut labore et dolore magna aliquam. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam`,
                image_url: '/assets/images/testimonies/avatar-2.png',
              }, {
                id: 3,
                name: `Kamila Badriyah Fisrih`,
                comment: `Kamila Badriyah Fisrih Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam. Nonummy nibh ultricies euismod tincidunt ut labore et dolore magna aliquam`,
                image_url: '/assets/images/testimonies/avatar-3.png',
              }, {
                id: 3,
                name: `Katrina Lestari`,
                comment: `Elsha Harley Oktarindra Nonummy nibh ultricies euismod tincidunt ut labore et dolore magna aliquam. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam.`,
                image_url: '/assets/images/testimonies/avatar-2.png',
              }]}
            />
          </div>
        </section>

        <section className="container px-4 md:pt-24 md:px-12 sm mx-auto h-screen flex-col flex justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-serif font-bold">
              {`The Daily Habit`}
            </h3>

            <p className="text-lg md:text-xl mt-3">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation`}
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-8 mt-8 md:mt-12">
            <Link href={'/article/astaxanthin'} className="w-[288px] group/card">
              <Image
                className="rounded-xl md:rounded-3xl aspect-square object-cover group-hover/card:scale-[0.95] transition-all duration-500"
                src={'/assets/images/pictures/cover-astaxanthin.jpg'}
                alt={`Cover Astaxanthin`}
                width={400}
                height={400}
              />

              <h6 className="text-base md:text-3xl font-serif text-center mt-4 group-hover/card:-translate-y-[30%] transition-all duration-500">
                {`ASTAXANTHIN : ANTIOKSIDAN 6000X LEBIH KUAT DARI VIT.C`}
              </h6>
            </Link>

            <Link href={'/article/hmpv'} className="w-[288px] group/card">
              <Image
                className="rounded-xl md:rounded-3xl aspect-[0.7] object-cover group-hover/card:scale-[0.95] transition-all duration-500"
                src={'/assets/images/pictures/cover-hmpv.jpg'}
                alt={`Cover HMPV`}
                width={400}
                height={400}
              />

              <h6 className="text-base md:text-3xl font-serif text-center mt-4 group-hover/card:-translate-y-[30%] transition-all duration-500">
                {`Mengenal Human Metapneumovirus (HMPV)`}
              </h6>
            </Link>

            <Link href={'/article/fish-collagen'} className="w-[288px] group/card">
              <Image
                className="rounded-xl md:rounded-3xl aspect-square object-cover group-hover/card:scale-[0.95] transition-all duration-500"
                src={'/assets/images/pictures/cover-fish-collagen.jpg'}
                alt={`Cover FISH MARINE COLLAGEN`}
                width={400}
                height={400}
              />

              <h6 className="text-base md:text-3xl font-serif text-center mt-4 group-hover/card:-translate-y-[30%] transition-all duration-500">
                {`KEUNGGULAN FISH MARINE COLLAGEN DIBANDING SUMBER ALAMI LAINNYA`}
              </h6>
            </Link>
          </div>
        </section>

        <section className="relative py-12 md:py-24 h-[75vh] md:h-screen bg-gray-100 overflow-hidden flex justify-center items-center">
          <div className="absolute top-0 bottom-0 -mx-[500px] lg:w-[1440px] w-[1280px] h-full z-0">
            {[{
              image_url: '/assets/images/pictures/post-1.png',
              right: '3%',
              top: '45%',
              size: 192,
            }, {
              image_url: '/assets/images/pictures/post-2.png',
              left: '30%',
              top: '20%',
              size: 216,
            }, {
              image_url: '/assets/images/pictures/post-3.png',
              left: '1%',
              top: '37%',
              size: 216,
            }, {
              image_url: '/assets/images/pictures/post-4.png',
              left: '45%',
              top: '56%',
              size: 282,
            }, {
              image_url: '/assets/images/pictures/post-5.png',
              left: '58%',
              top: '35%',
              size: 242,
            }].map((item, index) => (
              <Image
                key={item.image_url}
                src={item.image_url}
                alt="Instagram Icon"
                className="absolute object-cover pointer-events-none"
                style={{
                  left: item.left,
                  right: item.right,
                  top: item.top,
                  width: item.size,
                  height: item.size,
                  zIndex: 10 - index,
                }}
                width={300}
                height={300}
              />
            ))}
          </div>

          <div className={clsx([
            "w-80 absolute top-1/2 left-1/2 -translate-x-[55%] z-20 bg-white/50 rounded-lg p-3 shadow-sm",
            "md:translate-y-[20%] md:-translate-x-[128%] md:bg-transparent",
            "lg:bg-transparent lg:shadow-none"
          ])}>
            <div className="font-bold text-sm md:text-xl flex items-center drop-shadow">
              <Image
                src={"/assets/images/socials/icon-instagram.png"}
                alt="Instagram Icon"
                className="w-8 h-8 mr-3"
                width={32}
                height={32}
              />

              <Link href={appConfig('url_instagram')} target="_blank" className="hover:underline">
                <span>{`@moment2uofficial`}</span>
              </Link>
            </div>
            
            <p className="mt-4 text-sm md:text-base drop-shadow">
              {`Use #moment2uofficial and your post could be featured in our gallery`}
            </p>
          </div>
        </section>

        <section className={clsx([
          "mx-auto flex flex-col py-24 px-12 gap-y-4",
          "md:flex-row md:pt-24 md:px-12 md:items-center",
          "lg:container",
        ])}>
          <div className="md:w-1/2">
            <h3 className="text-3xl mb-5 md:mb-0 text-center md:text-left md:text-5xl leading-normal md:leading-normal font-black font-serif">
              {`Question?`}
              <br />{`We've got answer`}
            </h3>
          </div>

          <div className="md:w-1/2">
            <Accordion
              items={[{
                title: `Where can I buy moment products?`,
                content: `Anda dapat membeli produk moment dengan mengunjungi (nama webnya nnti) , lalu “add to chart” produk sesuai kebutuhan dan login ke akun anda, namun jika tidak memiliki akun maka “create account” untuk membuat terlebih dahulu.`
              }, {
                title: `How about the shipment?`,
                content: `Terdapat banyak pilihan jasa pengiriman beserta keterangan hari dan harga, maka anda dapat memilih sesuai kebutuhan.`
              }, {
                title: `How do I pay?`,
                content: `Pada kolom “Payment method” anda dapat memilih bank tujuan sesuai keinginan`
              }]}
            />
          </div>
        </section>

        <KonsultasiGratisSection />
      </main>

      <FooterPublic />

      <FloatingCart />

      <LoginModal />
    </>
  );
}
