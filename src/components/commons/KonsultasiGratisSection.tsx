import clsx from "clsx";
import Image from "next/image";
import Button from "./Button";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  hideDecoration?: boolean;
};

function KonsultasiGratisSection({
  className,
  hideDecoration,
  ...props
}: Props) {
  return (
    <section className={clsx(["relative", className])} {...props}>
      <div className="max-w-7xl px-4 py-8 md:py-12 lg:px-12 sm mx-auto flex-col flex justify-center">
        <div className="text-center mx-auto">
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
            className="mt-12 inline-flex items-center rounded-full"
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
      </div>

      {!hideDecoration && (
        <Image
          src={'/assets/images/decorations/brown.svg'}
          alt="Footer Decoration Pink"
          className="w-full h-screen absolute top-40 object-cover object-top sm:block -z-10"
          width={1440}
          height={500}
        />
      )}
    </section>
  );
};

export default KonsultasiGratisSection;
