import Button from "@/components/commons/Button";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import numeral from "numeral";

export default function Order() {
  return (
    <section className="container px-4 mx-auto pt-6 pb-8 flex flex-col gap-5">
      {[{ 
        id: 1,
        order_code: `ORD-0422-V76-216`,
        date: `2025-02-01 08:00:00`,
        name: `Rivan Firdhaus Widigdo`,
        address: `Jl. Majapahit No. 1, Surabaya, Indonesia`,
        phone: `08123456789`,
        delivery_cost: 60000,
      }, { 
        id: 2,
        order_code: `ORD-0422-DTG-257`,
        date: `2025-03-04 14:41:00`,
        name: `Eko Sastro Husodo`,
        address: `Jl. Sriwijaya No. 4, Bandung, Indonesia`,
        phone: `08123456789`,
        delivery_cost: 60000,
      }, { 
        id: 3,
        order_code: `ORD-0422-JKT-311`,
        date: `2025-03-10 10:15:00`,
        name: `Siti Aminah`,
        address: `Jl. Sudirman No. 10, Jakarta, Indonesia`,
        phone: `08129876543`,
        delivery_cost: 75000,
      }, { 
        id: 4,
        order_code: `ORD-0422-SBY-412`,
        date: `2025-03-15 16:30:00`,
        name: `Ahmad Fauzan`,
        address: `Jl. Pemuda No. 5, Surabaya, Indonesia`,
        phone: `08134567890`,
        delivery_cost: 55000,
      }, { 
        id: 5,
        order_code: `ORD-0422-MDN-523`,
        date: `2025-03-18 09:45:00`,
        name: `Budi Santoso`,
        address: `Jl. Thamrin No. 12, Medan, Indonesia`,
        phone: `08135678901`,
        delivery_cost: 65000,
      }].map((item, index) => (
        <div
          key={item.id}
          className={clsx([
            "relative overflow-hidden p-5 flex flex-col rounded-lg shadow-md hover:shadow-lg bg-slate-100",
            "md:flex-row",
          ])}
        >
          <div className="px-3 py-1 text-sm uppercase text-center absolute top-[32px] left-[-30px] font-mono pointer-events-none rotate-[-45deg] w-[150px] bg-gray-500 text-white">
            {`Pending`}
          </div>

          <div className="md:w-4/12">
            <h1 className="text-center text-2xl font-bold font-mono tracking-wide">
              {item.order_code}
            </h1>

            <div className="mt-3">
              {[{
                label: `Date`,
                value: moment(item.date).format('ddd, D MMM YYYY HH:mm'),
              }, {
                label: `Name`,
                value: item.name,
              }].map((item, index) => (
                <div key={item.label} className="flex items-center text-sm">
                  <p className="w-4/12">
                    {item.label}
                  </p>

                  <p className="grow shrink text-right">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 pt-2 border-t border-gray-300 text-sm">
              <h3 className="font-bold">
                {`Delivery Address`}
              </h3>

              <p className="text-gray-700 text-sm mt-1">
                {item.address}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                <a href={`tel:${item.phone}`} className="hover:underline">
                  {item.phone}
                </a>
              </p>
            </div>

            <div className="mt-2 pt-2 border-t border-gray-300 text-sm">
              <h3 className="font-bold">
                {`Payment Information`}
              </h3>

              <div className="flex items-center mt-1">
                <div className="self-start flex items-center justify-center w-16 h-16 rounded-lg bg-slate-300/50 hover:shadow-md hover:bg-slate-300">
                  <Image
                    src={'/assets/images/banks/bca.png'}
                    alt="Payment Bank"
                    className="object-contain max-w-full max-h-full"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="flex-1 shrink pl-3 text-xs">
                  <p className="text-xs text-gray-900">{`BCA (Bank Central Asia)`}</p>

                  <p className="text-gray-700 mt-2">
                    {`0987654321 a/n Rifan Firdhaus Widigdo`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx([
            "border-t mt-2 pt-2 border-gray-300",
            "md:grow md:pl-5 md:ml-5 md:mt-0 md:pt-0 md:border-l md:border-t-0",
          ])}>
            <div className="flex flex-col">
              {[{
                id: 1,
                name: `Moment Fucosan`,
                price: 650000,
                qty: 1,
                color: '#cacef4',
                image_url: '/assets/images/products/fucosan.png',
              }, {
                id: 2,
                name: `Zmooth`,
                price: 650000,
                qty: 4,
                color: '#d2ecc5',
                image_url: '/assets/images/products/zmooth.png',
              }, {
                id: 3,
                name: `Moment Essensia`,
                price: 650000,
                qty: 2,
                color: '#eee4c3',
                image_url: '/assets/images/products/essensia.png',
              }].map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={clsx([
                      "flex items-center",
                      !!index && 'border-t border-gray-300 mt-2 pt-2',
                    ])}
                  >
                    <div
                      className={clsx([
                        'w-16 h-16 rounded-lg bg-slate-300/50 hover:shadow-md hover:bg-slate-300',
                        'flex items-center justify-center',
                      ])}
                      style={{ backgroundColor: item.color }}
                    >
                      <Image
                        src={item.image_url}
                        alt={`Product ${item.name}`}
                        className="object-contain max-w-full max-h-full"
                        width={200}
                        height={200}
                      />
                    </div>

                    <div className="grow shrink px-3">
                      <p className="text-sm font-semibold">
                        {item.name}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {`Qty: ${item.qty} x ${numeral(item.price).format('$0,0')}`}
                      </p>
                    </div>

                    <p className="text-sm font-medium">
                      {numeral(item.price * item.qty).format('$0,0')}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-gray-300 border-dashed pt-3 mt-3">
              <div className="flex items-center text-sm">
                <p className="w-1/2">
                  {`Delivery Cost`}
                </p>

                <p className="w-1/2 text-right">
                  {numeral(item.delivery_cost).format('$0,0')}
                </p>
              </div>

              <div className="flex items-center font-bold text-sm mt-1">
                <p className="w-1/2">
                  {`Grand Total`}
                </p>

                <p className="w-1/2 text-right">
                  {numeral((1 * 650000) + (4 * 650000) + (650000 * 2) + item.delivery_cost).format('$0,0')}
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 mt-4">
              <div className="w-1/2">
                <Button
                  className="text-sm border-2 border-fucosan-pink-dark text-fucosan-pink-dark w-full !rounded-lg hover:bg-primary/10 font-semibold"
                >
                  {`Trace`}
                </Button>
              </div>

              <div className="w-1/2">
                <Button
                  className="text-sm border-2 border-fucosan-pink-dark text-fucosan-pink-dark w-full !rounded-lg hover:bg-primary/10 font-semibold"
                >
                  {`Barcodes`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
