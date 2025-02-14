import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  size?: 'default' | 'sm' | 'xs';
  imageSrc?: string;
  ImageProps?: Partial<ImageProps>;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

function TagCard({
  className = '',
  label,
  size = 'default',
  imageSrc,
  ImageProps,
  left,
  right,
  ...props
}: Props) {
  return (
    <div className={clsx([
      { relative: !className?.includes('absolute') },
      'flex items-center cursor-default hover:scale-105 transition-all ease-in-out duration-300 bg-white',
      size === 'default' && 'py-5 px-6 text-sm rounded-xl shadow-lg hover:shadow-xl',
      size === 'sm' && 'py-4 px-4 text-xs rounded-lg',
      size === 'xs' && 'py-2 px-2 text-xs rounded-md',
      className,
    ])} {...props}>
      {left}

      <p>{label}</p>

      {right}

      {imageSrc && (
        <Image
          src={imageSrc}
          alt={label || "Image decoration"}
          width={40}
          height={40}
          {...ImageProps}
        />
      )}
    </div>
  );
};

export default TagCard;
