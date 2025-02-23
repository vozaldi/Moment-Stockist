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
      'flex items-center cursor-default lg:hover:scale-105 hover:scale-110 transition-all ease-in-out duration-300 bg-white',
      size === 'default' && 'py-3 px-4 text-xs rounded-xl shadow-lg hover:shadow-xl',
      size === 'default' && 'lg:py-5 lg:px-6 lg:text-sm',
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
