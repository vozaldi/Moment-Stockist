import clsx from "clsx";
import Button, { ButtonProps } from "../Button";
import { AddressModel } from "@/types/models";

type Props = ButtonProps & {
  address: AddressModel;
};

function AddressButtonCard({
  className,
  address,
  ...props
}: Props) {
  return (
    <Button
      className={clsx(["text-left w-full bg-white shadow-sm hover:shadow-md", className])}
      {...props}
    >
      <h1 className="font-bold">{address.title}</h1>

      <p className="text-gray-700 text-sm">
        {address.name}
      </p>

      <p className="mt-1 text-gray-500 text-xs">
        {address.address}
      </p>

      <a href={`tel:${address.phone}`} className="mt-1 text-gray-500 text-xs hover:underline">
        {address.phone}
      </a>
    </Button>
  );
};

export default AddressButtonCard;
