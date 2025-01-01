import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ChevronDown,
  List,
  ListOrdered,
} from "lucide-react";
import FormattingBtns from "./FormattingBtns";
import ColorHighlight from "./ColorHighlight";

export const paragraphBtns = [
  { Icon: AlignLeft, align: "left" },
  { Icon: AlignCenter, align: "center" },
  { Icon: AlignRight, align: "right" },
  { Icon: AlignJustify, align: "justify" },
];
export const BulletBtns = [
  { Icon: List, key: "list" },
  { Icon: ListOrdered, key: "ordered_list" },
];
export default function Format() {
  return (
    <div className="w-fit hidden flex-col items-start gap-8 lg:flex">
      <form className="grid w-full items-start gap-6">
        <fieldset className=" grid gap-6 bg-white rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Style</legend>
          <div className="grid gap-3">
            <div className="rounded-md border p-4 py-2 flex justify-between items-center">
              Normal
              <ChevronDown strokeWidth={1} size={18} />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid max-w-fit gap-6 bg-white rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Font</legend>
          <div>
            <div className="rounded-md border p-4 py-2 flex justify-between items-center">
              Inter
              <ChevronDown strokeWidth={1} size={18} />
            </div>
            <div className="w-full mt-3 flex justify-between gap-4">
              <FormattingBtns isBubbleMenuBtn={false} />
              <ColorHighlight isBubbleMenuBtn={false} />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 bg-white rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Paragraph</legend>
          <div className="flex gap-4">
            <div className="flex cursor-pointer border rounded w-fit col-span-6 sm:col-span-4">
              {paragraphBtns.map(({ align, Icon }, i) => {
                return (
                  <Icon
                    key={align}
                    size={35}
                    className={`${i === 0
                      ? "bg-blue-500 text-white hover:bg-blue-500"
                      : `hover:bg-slate-100 bg-white}`} 
                        p-2 rounded ${i === paragraphBtns.length - 1
                        ? "border-none"
                        : "border-r"
                      }`
                    }
                  />
                );
              })}
            </div>
            <div className="flex cursor-pointer border rounded w-fit col-span-6 sm:col-span-4">
              {BulletBtns.map(({ Icon, key }, i) => {
                return (
                  <Icon
                    key={key}
                    size={35}
                    className={`hover:bg-slate-100 bg-white p-2 rounded 
                        ${i === BulletBtns.length - 1
                        ? "border-none"
                        : "border-r"
                      }`
                    }
                  />
                );
              })}
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
