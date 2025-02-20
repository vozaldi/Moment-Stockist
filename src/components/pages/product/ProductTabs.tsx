'use client';

import Button from "@/components/commons/Button";
import { PromoModel } from "@/types/models";
import clsx from "clsx";
import { useState } from "react";

const detail = `
<p><strong>LOREM</strong> adalah Premium Product dari <strong>PT Momen Global Internasional</strong>. Merupakan Minuman berserat tinggi dengan rasa Black Currant yang terbuat dari bahan bahan organic alamiah pilihan terbaik. Tidak Hanya mengandung serat larut (soluble fiber) dan serat tidak larut (Insoluble Fiber) yang mampu memenuhi kebutuhan serat harian anda namun juga mengandung berbagai bahan active dengan teknologi terkini untuk menjaga kesehatan tubuh.</p>
`;

const howToUse = `<p>TBD</p>`;
const ingredient = `<p>TBD</p>`;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  product: PromoModel;
};

function ProductTabs({
  product,
  className,
  ...props
}: Props) {
  // States
  const [tabActive, setTabActive] = useState(0);

  return (
    <div className={clsx([className])} {...props}>
      <div className="flex items-center gap-x-8 py-4">
        {[{
          label: `Details`,
        }, {
          label: `How to Use`,
        }, {
          label: `Ingredients`,
        }].map((item, index) => (
          <Button
            key={index}
            className={clsx([
              "text-white font-bold text-lg py-0.5 px-0 !rounded-none border-b border-transparent",
              tabActive === index && "!border-white",
              tabActive !== index && "opacity-75",
            ])}
            onClick={() => setTabActive(index)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {tabActive === 0 && (
        <div className="article-content" dangerouslySetInnerHTML={{ __html: product.description || detail.replace("LOREM", product.name || "Lorem ipsum") }} />
      )}

      {tabActive === 1 && (
        <div className="article-content" dangerouslySetInnerHTML={{ __html: howToUse }} />
      )}

      {tabActive === 2 && (
        <div className="article-content" dangerouslySetInnerHTML={{ __html: ingredient }} />
      )}
    </div>
  );
};

export default ProductTabs;
