import { appConfig } from "@/lib/config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaLine } from "react-icons/fa6";
import { IoCall, IoLogoInstagram, IoLogoWhatsapp, IoMail } from "react-icons/io5";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  
};

function FooterPublic({
  className,
  ...props
}: Props) {
  return (
    <footer className={clsx("relative", className)} {...props}>
      <div className="absolute inset-0 flex flex-col -z-10">
        <div className="-mt-[300px] grow flex items-end">
          <Image
            src={'/assets/images/decorations/blue.svg'}
            alt="Footer Decoration Pink"
            className="w-full h-full absolute bottom-16 object-cover object-top"
            width={1440}
            height={500}
          />

          <Image
            src={'/assets/images/decorations/green.svg'}
            alt="Footer Decoration Pink"
            className="w-full h-full absolute bottom-4 object-cover object-top"
            width={1440}
            height={500}
          />

          <Image
            src={'/assets/images/decorations/yellow.svg'}
            alt="Footer Decoration Pink"
            className="w-full h-full absolute bottom-16 object-cover object-top"
            width={1440}
            height={500}
          />

          <Image
            src={'/assets/images/decorations/purple.svg'}
            alt="Footer Decoration Pink"
            className="w-full h-full absolute bottom-0 object-cover object-top"
            width={1440}
            height={500}
          />

          <Image
            src={'/assets/images/decorations/pink.svg'}
            alt="Footer Decoration Pink"
            className="w-full h-[95%] absolute object-cover object-top"
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

        <div className="mt-8 border-t border-white/50 text-sm text-center py-8 md:py-10">
          <p className="font-bold">
            {`Copyright 2019 © PT MOMEN GLOBAL INTERNASIONAL. All Right Reserved`}
          </p>

          <p className="mt-3">
            {`Powered by:`}
            <Link href={'https://archon.co.id/'} target="_blank" className="underline hover:underline hover:font-bold">
              {`Archon Intelligent Technology`}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPublic;
