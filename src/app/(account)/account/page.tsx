import Button from "@/components/commons/Button";
import AddressAddButtonModal from "@/components/layouts/account/AddressAddButtonModal";
import PasswordButtonModal from "@/components/layouts/account/PasswordButtonModal";
import ProfileButtonModal from "@/components/layouts/account/ProfileButtonModal";
import Image from "next/image";

export default function Account() {
  return (
    <section className="container mx-auto pt-6 pb-8 flex gap-5">
      <div className="w-4/12">
        <div className="sticky top-24 p-5 rounded-md bg-slate-200">
          <h1 className="text-lg text-center">
            {`Contact Information`}
          </h1>

          <Image
            src={'/assets/images/pictures/avatar.jpg'}
            alt="User Avatar"
            className="mt-6 w-36 h-36 rounded-full shadow-lg mx-auto shadow-primary"
            width={200}
            height={200}
          />

          <div className="pt-6">
            {[{
              label: `Name`,
              value: `Delta Gamma`,
            }, {
              label: `Email`,
              value: `delta@gamma.com`,
            }, {
              label: `Phone`,
              value: `085649303689`,
            }].map((item, index) => (
              <div key={item.label} className="flex items-center py-1">
                <p className="w-4/12">
                  {item.label}
                </p>

                <p className="grow shrink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          
          <ProfileButtonModal className="w-full mt-6" />

          <PasswordButtonModal className="w-full mt-3" />
        </div>
      </div>

      <div className="flex-1">
        <div className="px-4 py-4 rounded-md bg-slate-200">
          <h1 className="text-lg text-center">
            {`Delivery Information`}
          </h1>

          {[{ 
              id: 1,
              title: `Alpha`,
              name: `Alpha Beta`,
              address: `Jl. Majapahit No. 1, Jakarta Selatan, Indonesia`,
              phone: `08123456789`,
          }, { 
              id: 2,
              title: `Beta`,
              name: `Cak Cak`,
              address: `Jl. Alpha No. 2, Surabaya, Indonesia`,
              phone: `08123456789`,
          }, { 
              id: 3,
              title: `Gamma`,
              name: `Delta Echo`,
              address: `Jl. Merdeka No. 3, Bandung, Indonesia`,
              phone: `08129876543`,
          }, { 
              id: 4,
              title: `Delta`,
              name: `Foxtrot Golf`,
              address: `Jl. Diponegoro No. 4, Yogyakarta, Indonesia`,
              phone: `08134567890`,
          }, { 
              id: 5,
              title: `Epsilon`,
              name: `Hotel India`,
              address: `Jl. Sudirman No. 5, Semarang, Indonesia`,
              phone: `08135678901`,
          }, { 
              id: 6,
              title: `Zeta`,
              name: `Juliet Kilo`,
              address: `Jl. Thamrin No. 6, Medan, Indonesia`,
              phone: `08136789012`,
          }, { 
              id: 7,
              title: `Eta`,
              name: `Lima Mike`,
              address: `Jl. Ahmad Yani No. 7, Makassar, Indonesia`,
              phone: `08137890123`,
          }, { 
              id: 8,
              title: `Theta`,
              name: `November Oscar`,
              address: `Jl. Gatot Subroto No. 8, Palembang, Indonesia`,
              phone: `08138901234`,
          }, { 
              id: 9,
              title: `Iota`,
              name: `Papa Quebec`,
              address: `Jl. Panglima No. 9, Balikpapan, Indonesia`,
              phone: `08139012345`,
          }, { 
              id: 10,
              title: `Kappa`,
              name: `Romeo Sierra`,
              address: `Jl. Gajah Mada No. 10, Denpasar, Indonesia`,
              phone: `08140123456`,
          }].map((item, index) => (
            <Button
              key={item.id}
              className="text-left w-full mt-4 !rounded-lg bg-white shadow-sm hover:shadow-md"
            >
              <h1 className="font-bold">{item.title}</h1>

              <p className="text-gray-700 text-sm">
                {item.name}
              </p>

              <p className="mt-1 text-gray-500 text-xs">
                {item.address}
              </p>

              <a href={`tel:${item.phone}`} className="mt-1 text-gray-500 text-xs hover:underline">
                {item.phone}
              </a>
            </Button>
          ))}

          <div className="sticky bottom-0 py-4 -mb-2 bg-slate-200">
            <AddressAddButtonModal />
          </div>
        </div>
      </div>
    </section>
  );
};
