'use client';

import Button from "@/components/commons/Button";
import AddressButtonCard from "@/components/commons/cards/AddressButtonCard";
import BankCard from "@/components/commons/cards/BankCard";
import CartItemCard from "@/components/commons/cards/CartItemCard";
import SelectField from "@/components/commons/SelectField";
import { useFields } from "@/lib/hooks";
import { numeral } from "@/lib/utilities";
import { useShopShallow } from "@/states/shopState";
import { CartModel } from "@/types/models";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowBack, IoCartOutline, IoClose } from "react-icons/io5";
import { Slide, toast, ToastContainer, ToastContentProps } from "react-toastify";

type Props = {
  // 
};

const CartToast = ({
  data: { cart },
  closeToast,
  toastProps,
}: ToastContentProps<{ cart: CartModel }>) => {
  return (
    <div
      className="grow rounded-lg bg-gray-200 shadow-lg flex items-center p-2 font-sans"
      style={{ backgroundColor: cart.product?.color }}
    >
      <div className="w-24 h-24 flex items-center justify-center">
        {!!cart.product?.image && (
          <Image
            src={cart.product.image}
            alt={`Produk ${cart.product.name}`}
            className="object-contain max-w-full max-h-full"
            width={200}
            height={200}
          />
        )}
      </div>

      <div className="relative grow self-stretch flex flex-col p-2 rounded-md bg-white">
        <p className="text-xs font-bold">
          {`Added to cart`}
        </p>

        <h1 className="text-sm">{cart.product_name}</h1>

        <div className="flex items-center mt-auto pt-1">
          <div className="grow pr-1 text-sm">
            <p>Qty: {cart.qty}</p>
          </div>

          <p
            className="-mr-4 bg-gray-200 text-black py-1 pl-2 pr-4 rounded-lg font-bold text-xs"
            style={{ backgroundColor: cart.product?.color }}
          >
            {numeral(cart.total).format('$0,0')}
          </p>
        </div>

        <Button
          className="absolute top-0 right-0"
          size={24}
          onClick={() => toast.dismiss(`cart-toast-${cart.product_id}`)}
        >
          <IoClose size={12} />
        </Button>
      </div>
    </div>
  );
};

function FloatingCart({}: Props) {
  // Hooks
  const router = useRouter();

  const cartOpen = useShopShallow((state) => state.cartOpen);
  const cartsUpdate = useShopShallow((state) => state.cartsUpdate);
  const carts = useShopShallow((state) => state.carts);
  const grandTotal = useShopShallow((state) => state.transaction?.order_grand_total);
  const setCartOpen = useShopShallow((state) => state.setCartOpen);

  const input = useFields({
    address_id: null as number | null,
    store_id: null as number | null,
    payment_method: '',
    courier: '',
  });

  // States
  const [step, setStep] = useState<number>(STEP.CART);
  const [isSaving, setIsSaving] = useState(false);

  // Effects
  useEffect(() => {
    const [cart] = carts.sort((a, b) => moment(b.update_at).diff(a.update_at));

    if (cart) {
      const toastId = `cart-toast-${cart.product_id}`;
      const toastData = { cart };

      if (toast.isActive(toastId)) {
        toast.update(toastId, { data: toastData });

        return;
      }

      toast(CartToast, {
        toastId,
        containerId: 'cart-toast',
        position: 'top-center',
        transition: Slide,
        autoClose: 5000,
        pauseOnHover: true,
        hideProgressBar: true,
        closeButton: false,
        className: '!p-0 !bg-transparent !shadow-none ',
        data: toastData,
      });
    }
  }, [cartsUpdate, carts]);

  // Actions
  const handleNextStep = () => {
    switch (step) {
      case STEP.CART:
        return setStep(STEP.ADDRESS);
      case STEP.ADDRESS:
        return setStep(STEP.STORE);
      case STEP.STORE:
        return setStep(STEP.CHECKOUT);
      case STEP.CHECKOUT:
        return handleSubmit();
      case STEP.DONE:
        setCartOpen(false);
        setStep(STEP.CART);

        return router.push('/account/order');
    }
  };

  const handleSubmit = async () => {
    if (!input.fields.address_id) {
      return input.handleErrorShow([], `Please select an address`);
    } else if (!input.fields.store_id) {
      return input.handleErrorShow([], `Please select a store`);
    } else if (!input.fields.payment_method) {
      return input.handleErrorShow('payment_method', `Please select a payment method`);
    } else if (!input.fields.courier) {
      return input.handleErrorShow('courier', `Please select a courier`);
    }

    console.log("Inputs", input.fields);

    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      input.reset();

      setStep(STEP.DONE);
    }, 2000);
  }

  return (
    <>
      <Button
        className="fixed right-6 bottom-6 bg-white text-black shadow-lg hover:shadow-xl hover:bg-gray-100 z-[300] rounded-full"
        size={64}
        onClick={() => setCartOpen(true)}
      >
        <IoCartOutline size={32} />

        {!!carts.length && (
          <span className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs mt-1">{carts.length}</span>
          </span>
        )}
      </Button>

      <div className={clsx([
        "fixed inset-0 p-4 z-[700]",
        !cartOpen && "!opacity-0 [visibility:hidden]",
      ])}>
        <div
          className={clsx([
            "absolute inset-0 bg-white/50 backdrop-blur-md",
            "transition-opacity duration-300 opacity-0",
            cartOpen && "!opacity-100"
          ])}
          onClick={() => setCartOpen(false)}
        />

        <div className={clsx([
          'w-[400px] absolute top-4 bottom-4 right-4 bg-white rounded-xl shadow-lg',
          'flex flex-col',
          "transition-transform duration-300 translate-x-0",
          !cartOpen && "!translate-x-full",
        ])}>
          <div className="flex items-center mx-4 border-b-4 border-primary py-2 mt-2">
            <Button
              className="hover:bg-black/10 -my-4"
              size={32}
              onClick={() => {
                if (step === STEP.CART) {
                  return setCartOpen(false);
                } else if (step === STEP.DONE) {
                  setStep(0);

                  return setCartOpen(false);
                }

                step !== 1 && setStep(state => Math.max(1, state - 1));
              }}
            >
              <IoArrowBack size={24} />
            </Button>

            <div className="grow">
              <h3 className="text-xl font-semibold text-fucosan-pink-dark text-center">
                {step === STEP.CART && `My Cart`}
                {step === STEP.ADDRESS && `Delivery Information`}
                {step === STEP.STORE && `Select Store`}
                {step === STEP.CHECKOUT && `Payment`}
                {step === STEP.DONE && `Payment`}
              </h3>
            </div>
          </div>

          {step === STEP.CART && (
            <div className="flex-1 overflow-y-auto py-4 px-4">
              {carts.map((item, index) => {
                return (
                  <CartItemCard
                    key={item.product_id}
                    className={clsx([!index ? '' : 'mt-2'])}
                    cart={item}
                  />
                );
              })}
            </div>
          )}

          {step === STEP.ADDRESS && (
            <div className="flex-1 overflow-y-auto py-4 px-4">
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
              }].map((item, index) => {
                const isActive = input.fields.address_id === item.id;

                return (
                  <AddressButtonCard
                    key={item.id}
                    className={clsx([
                      'border border-transparent !px-4 !py-2',
                      !index ? '' : 'mt-2',
                      !isActive && '!bg-slate-100',
                      isActive && '!border-slate-400 !bg-slate-200',
                    ])}
                    address={item}
                    onClick={() => input.handleFieldChange('address_id', item.id)}
                  />
                );
              })}
            </div>
          )}

          {step === STEP.STORE && (
            <div className="flex-1 overflow-y-auto py-4 px-4">
              {[{
                id: 1,
                name: `Delta Store`,
                address: `Jl. Delta No. 1, Jakarta Selatan, Indonesia`,
                phone: `08123456789`,
              }, {
                id: 2,
                name: `Stockist Surabaya`,
                address: `Jl. Alpha No. 2, Surabaya, Indonesia`,
                phone: `08123456789`,
              }].map((item, index) => {
                const isActive = input.fields.store_id === item.id;

                return (
                  <Button
                    key={item.id}
                    className={clsx([
                      "text-left w-full bg-white shadow-sm hover:shadow-md !px-4 !py-2",
                      'border border-transparent',
                      !index ? '' : 'mt-2',
                      !isActive && '!bg-slate-100',
                      isActive && '!border-slate-400 !bg-slate-200',
                    ])}
                    onClick={() => input.handleFieldChange('store_id', item.id)}
                  >
                    <h1 className="font-bold">{item.name}</h1>

                    <p className="mt-1 text-gray-500 text-xs">
                      {item.address}
                    </p>

                    <a href={`tel:${item.phone}`} className="mt-1 text-gray-500 text-xs hover:underline">
                      {item.phone}
                    </a>
                  </Button>
                );
              })}
            </div>
          )}

          {step === STEP.CHECKOUT && (
            <div className="flex-1 overflow-y-auto pt-4 pb-6 px-4">
              {carts.map((item, index) => {
                return (
                  <CartItemCard
                    key={item.product_id}
                    className={clsx([!index ? '' : 'mt-2'])}
                    cart={item}
                  />
                );
              })}

              <h3 className="mt-6 px-3 text-sm font-medium">
                {`Delivery Information`}
              </h3>

              <AddressButtonCard
                className="pointer-events-none !bg-slate-100 !px-4 !py-2 mt-1"
                address={{ 
                  id: 1,
                  title: `Alpha`,
                  name: `Alpha Beta`,
                  address: `Jl. Majapahit No. 1, Jakarta Selatan, Indonesia`,
                  phone: `08123456789`,
                }}
              />

              <h3 className="mt-4 px-3 text-sm font-medium">
                {`Payment Method`}
              </h3>

              <SelectField
                className="mt-1"
                inputClassName="!border-slate-300 !bg-slate-200"
                onChange={(e) => input.handleFieldChange('payment_method', e.target.value)}
                error={input.isFieldError('payment_method')}
                message={input.error.message}
              >
                <option>{`-- Select Payment Method ---`}</option>

                {[
                  "Bank BCA (1234) - Alpha",
                  "Bank Mandiri (1234) - Alpha",
                ].map((item, index) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </SelectField>

              <h3 className="mt-4 px-3 text-sm font-medium">
                {`Couriers`}
              </h3>

              <SelectField
                className="mt-1"
                inputClassName="!border-slate-300 !bg-slate-200"
                onChange={(e) => input.handleFieldChange('courier', e.target.value)}
                error={input.isFieldError('courier')}
                message={input.error.message}
              >
                <option>{`-- Select Courier ---`}</option>

                {[
                  "Jalur Nugraha Ekakurir (JNE)",
                  "Express",
                  "SiCepat Express",
                  "Citra Van Titipan Kilat (TIKI)",
                  "POS Indonesia (POS)",
                ].map((item, index) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </SelectField>
            </div>
          )}

          {step === STEP.DONE && (
            <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto py-8 px-4">
              <Image
                src="/assets/images/pictures/order-placed.svg"
                alt="Checkout Success"
                className="w-36 h-36"
                width={200}
                height={200}
              />

              <h3 className="text-2xl font-bold mt-4 text-primary">
                {`Order Placed`}
              </h3>

              <p className="mt-2">
                {`Your order was placed successfully. please make a payment to bank account bellow.`}
              </p>

              <BankCard className="mt-3" />
            </div>
          )}

          {step === STEP.CART && (
            <div className="mx-4 border-t-4 border-primary py-4">
              {[{
                label: `Subtotal`,
                value: numeral(grandTotal).format('$0,0'),
              }].map((item, index) => (
                <div key={item.label} className={clsx(["flex items-center", !!index && 'mt-1'])}>
                  <p className="grow shrink pr-4">{item.label}</p>

                  <p className="text-right">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {step === STEP.CHECKOUT && (
            <div className="px-4 border-t-2 border-gray-300 border-dashed py-4">
              {[{
                label: `Subtotal`,
                value: numeral(grandTotal).format('$0,0'),
              }, {
                label: `Delivery Cost`,
                value: numeral(65000).format('$0,0'),
                show: !!input.fields.courier,
              }].filter(({ show }) => show !== false).map((item, index) => (
                <div key={item.label} className={clsx(["flex items-center text-sm", !!index && 'mt-1'])}>
                  <p className="grow shrink pr-4">{item.label}</p>

                  <p className="text-right">{item.value}</p>
                </div>
              ))}

              <div className="mt-2 pt-2 border-t-2 border-primary">
                <div className="flex items-center text-sm font-bold">
                  <p className="grow shrink pr-4">
                    {`Grand Total`}
                  </p>

                  <p className="text-right">
                    {numeral((grandTotal || 0) + 65000).format('$0,0')}
                  </p>
                </div>
              </div>

              {input.isFieldError() && (
                <div className="mt-2 text-xs text-red-500">
                  {input.error.message}
                </div>
              )}
            </div>
          )}

          <Button
            className="!rounded-t-none !rounded-b-xl opacity-60 hover:opacity-50 text-lg"
            color="fucosan-pink-dark"
            loading={isSaving}
            onClick={() => handleNextStep()}
          >
            {step === STEP.CART && `Checkout`}
            {step === STEP.ADDRESS && `Next`}
            {step === STEP.STORE && `Next`}
            {step === STEP.CHECKOUT && `Checkout`}
            {step === STEP.DONE && `Order Detail`}
          </Button>
        </div>
      </div>

      <ToastContainer
        containerId={"cart-toast"}
      />
    </>
  );
};

const STEP = {
  CART: 1,
  ADDRESS: 2,
  STORE: 3,
  CHECKOUT: 4,
  DONE: 5,
};

export default FloatingCart;
