import Accordion from "@/components/commons/Accordion";
import Button from "@/components/commons/Button";
import TagCard from "@/components/commons/cards/TagCard";
import HomeProductCarousel from "@/components/commons/carousels/HomeProductCarousel";
import HomeTestimonyCarousel from "@/components/commons/carousels/HomeTestimonyCarousel";
import { appConfig } from "@/lib/config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaLine } from "react-icons/fa6";
import { IoBagOutline, IoCall, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoMail, IoPersonCircleOutline } from "react-icons/io5";

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
                src={'/assets/images/products/essensia.png'}
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
              {`Specially formulated for anyone who wants to promote their good health and well-being`}
            </p>
          </div>

          <div className="max-w-full mt-4">
            <HomeProductCarousel
              products={[{
                id: 1,
                name: `Moment Fucosan`,
                price: 650000,
                color: '#cacef4',
                image_url: '/assets/images/products/fucosan.png',
              }, {
                id: 2,
                name: `Zmooth`,
                price: 650000,
                color: '#d2ecc5',
                image_url: '/assets/images/products/zmooth.png',
                decoration_url: '/assets/images/decorations/decoration-zmooth.png',
              }, {
                id: 3,
                name: `Moment Essensia`,
                price: 650000,
                color: '#eee4c3',
                image_url: '/assets/images/products/essensia.png',
                decoration_url: '/assets/images/decorations/decoration-herb.png',
              }, {
                id: 4,
                name: `Moment Glucogen`,
                price: 650000,
                color: '#ffe1e1',
                image_url: '/assets/images/products/glucogen.png',
                decoration_url: '/assets/images/decorations/decoration-lemon.png',
              }, {
                id: 5,
                name: `Zhield`,
                price: 650000,
                color: '#ffdbdb',
                image_url: '/assets/images/products/zhield.png',
                decoration_url: '/assets/images/decorations/decoration-zhield.png',
              }, {
                id: 6,
                name: `Morex`,
                price: 650000,
                color: '#d0eeff',
                image_url: '/assets/images/products/morex.png',
                decoration_url: '/assets/images/decorations/decoration-morex.png',
              }, {
                id: 7,
                name: `Moment Propolis`,
                price: 650000,
                color: '#f6f4d3',
                image_url: '/assets/images/products/propolis.png',
              }, {
                id: 8,
                name: `Moment Coffe`,
                price: 650000,
                color: '#f5e5d6',
              }, {
                id: 9,
                name: `Softly`,
                price: 650000,
              }, {
                id: 10,
                name: `Creamy Essence`,
                price: 650000,
              }]}
            />
          </div>
        </section>

        <section className="py-7 bg-fucosan-pink text-white">
          <h3 className="container font-bold text-2xl md:text-5xl font-serif text-center mx-auto">
            {`Live Life Better with Personalized Nutrition`}
          </h3>
        </section>

        <section className="container md:pt-24 md:px-12 sm mx-auto h-screen flex-col flex justify-center">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-serif">
              {`What Our Customer Say`}
            </h3>

            <p className="text-lg md:text-xl mt-3 font-serif">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
            </p>
          </div>

          <div className="max-w-full mt-12">
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
              }]}
            />
          </div>
        </section>

        <section className="container md:pt-24 md:px-12 sm mx-auto h-screen flex-col flex justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-serif font-bold">
              {`The Daily Habit`}
            </h3>

            <p className="text-lg md:text-xl mt-3">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation`}
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-8 mt-8 md:mt-12">
            <Link href="/" className="w-[288px] group/card">
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

            <Link href="/" className="w-[288px] group/card">
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

            <Link href="/" className="w-[288px] group/card">
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

          <div className="w-80 absolute top-1/2 left-1/2 md:translate-y-[20%] md:-translate-x-[128%] -translate-x-[55%] z-20">
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

        <section className="container md:pt-24 md:px-12 sm mx-auto flex items-center py-24 px-12">
          <div className="w-1/2">
            <h3 className="text-3xl mb-5 md:mb-0 text-center md:text-left md:text-5xl leading-normal md:leading-normal font-black font-serif">
              {`Question?`}
              <br />{`We've got answer`}
            </h3>
          </div>

          <div className="w-1/2">
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

        <section className="container pt-8 md:pt-20 md:px-12 sm mx-auto flex-col flex justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="uppercase text-center text-4xl font-serif font-bold">
              {`Mau Konsultasi`}
              {' '}<span className="text-fucosan-pink">{`Gratis`}</span>
              {' '}{`Dengan Saya`}
            </h3>

            <Image
              src={'/assets/images/pictures/avatar.jpg'}
              alt="Konsultasi Gratis"
              className="my-12 w-44 h-44 rounded-full shadow-lg mx-auto shadow-primary"
              width={200}
              height={200}
            />

            <h5 className="font-medium text-4xl text-center">
              {`Delta Gamma`}
            </h5>

            <p className="mt-4 text-xl text-center">
              {`- Delta Store -`}
            </p>

            <Button
              className="mt-12 inline-flex items-center"
              type="link"
              href={'https://wa.me/6282110000000'}
              target="_blank"
              color="fucosan-pink"
            >
              <p className="px-6 uppercase -ml-4">
                {`Konsultasi Sekarang`}
              </p>

              <div className="-my-4 -mr-5 bg-white rounded-full h-10 w-10 flex items-center justify-center">
                <Image
                  src={'/assets/images/socials/icon-whatsapp.png'}
                  alt="Konsultasi Gratis"
                  width={24}
                  height={24}
                />
              </div>
            </Button>
          </div>
        </section>
      </main>

      <footer className="relative">
        <div className="absolute inset-0 flex flex-col -z-10">
          <div className="-mt-[300px] grow flex items-end">
            <Image
              src={'/assets/images/decorations/brown.svg'}
              alt="Footer Decoration Pink"
              className="w-full h-screen absolute bottom-8 object-cover object-top"
              width={1440}
              height={500}
            />

            <Image
              src={'/assets/images/decorations/blue.svg'}
              alt="Footer Decoration Pink"
              className="w-full h-full absolute bottom-24 object-cover object-top"
              width={1440}
              height={500}
            />

            <Image
              src={'/assets/images/decorations/green.svg'}
              alt="Footer Decoration Pink"
              className="w-full h-full absolute bottom-12 object-cover object-top"
              width={1440}
              height={500}
            />

            <Image
              src={'/assets/images/decorations/yellow.svg'}
              alt="Footer Decoration Pink"
              className="w-full h-full absolute bottom-24 object-cover object-top"
              width={1440}
              height={500}
            />

            <Image
              src={'/assets/images/decorations/purple.svg'}
              alt="Footer Decoration Pink"
              className="w-full h-full absolute bottom-8 object-cover object-top"
              width={1440}
              height={500}
            />

            <Image
              src={'/assets/images/decorations/pink.svg'}
              alt="Footer Decoration Pink"
              className="w-full h-auto object-cover object-top relative translate-y-24"
              width={1440}
              height={500}
            />
          </div>
        </div>

        <div className="container relative z-10 md:px-12 px-8 mx-auto text-white pt-48 mt-24">
          <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
            <div className="col-span-12 md:col-span-4 hidden lg:block">
              <Image
                src={'/assets/images/app-logo-vertical.png'}
                alt={appConfig('company')}
                className="invert brightness-0 h-24 md:h-48 -mt-20"
                width={242}
                height={192}
              />
            </div>

            <div className="grid grid-cols-12 gap-5 col-span-12 lg:col-span-8">
              <div className="col-span-12 md:col-span-4 hidden lg:block">
                <h5 className="font-bold uppercase">{`Inquiries`}</h5>

                <ul className="mt-2">
                  {[{
                    label: `Contact`,
                    url: '#contact',
                  }, {
                    label: `Term of Use`,
                    url: '#terms',
                  }, {
                    label: `Privacy Policy`,
                    url: '#privacy',
                  }].map((item, index) => (
                    <li className={!index ? '' : 'mt-1'} key={item.url}>
                      <Link href={item.url} className="uppercase hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-12 md:col-span-4 hidden lg:block">
                <h5 className="font-bold uppercase">{`Help`}</h5>

                <ul className="mt-2">
                  {[{
                    label: `FAQ`,
                    url: '#faq',
                  }, {
                    label: `Shipping`,
                    url: '#shipping',
                  }].map((item, index) => (
                    <li className={!index ? '' : 'mt-1'} key={item.url}>
                      <Link href={item.url} className="uppercase hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-12 md:col-span-4 hidden lg:block">
                <h5 className="font-bold uppercase">{`Contact Us`}</h5>

                <ul className="mt-2">
                  {[{
                    label: appConfig('contact_phone'),
                    url: `tel:${appConfig('contact_phone')}`,
                    Icon: IoCall,
                  }, {
                    label: appConfig('contact_email'),
                    url: `mailto:${appConfig('contact_email')}`,
                    Icon: IoMail,
                  }].map((item, index) => (
                    <li className={clsx([!index ? '' : 'mt-1', 'text-sm'])} key={item.url}>
                      <Link href={item.url} className="inline-flex hover:underline">
                        <item.Icon size={18} className="mr-1" />

                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}

                  <li className="mt-1 flex gap-x-2">
                    {[{
                      link: '#instagram',
                      Icon: IoLogoInstagram,
                    }, {
                      link: '#line',
                      Icon: FaLine,
                    }, {
                      link: '#whatsapp',
                      Icon: IoLogoWhatsapp,
                    }].map((item) => (
                      <Link href={item.link} key={item.link}>
                        <item.Icon size={24} />
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white text-sm text-center py-6">
            <p className="font-bold">
              {`Copyright 2019 © PT MOMEN GLOBAL INTERNASIONAL. All Right Reserved`}
            </p>

            <p className="mt-2">
              {`Powered by:`}
              <Link href={'https://archon.co.id/'} target="_blank" className="underline hover:underline hover:font-bold">
                {`Archon Intelligent Technology`}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
