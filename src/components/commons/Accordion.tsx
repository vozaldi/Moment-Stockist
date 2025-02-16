"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

export type AccordionItem = {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  buttonClassName?: string;
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  items: AccordionItem[];
};

function Accordion({
  items = [],
  className,
  ...props
}: Props) {
  // States
  const [open, setOpen] = useState<number[]>([]);

  return (
    <div className={clsx(['flex flex-col',className])} {...props}>
      {items.map((item: AccordionItem, index: number) => {
        const isOpen = open.includes(index);

        return (
          <div key={index} className={clsx(['flex flex-col', !!index && 'border-t border-gray-300 mt-2 pt-2'])}>
            <button
              type="button"
              className={clsx(["flex items-center py-2 text-left", item.buttonClassName])}
              onClick={() => setOpen(state => {
                const result = state.filter(i => i !== index);

                !state.includes(index) && result.push(index);

                return result;
              })}
            >
              {'string' === typeof item.title ? (
                <p className="grow font-medium text-lg">{item.title}</p>
              ) : item.title}

              <IoAdd size={20} className="text-gray-700" />
            </button>

            {isOpen && (
              'string' === typeof item.content ? (
                <p className="py-2">{item.content}</p>
              ) : item.content
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
