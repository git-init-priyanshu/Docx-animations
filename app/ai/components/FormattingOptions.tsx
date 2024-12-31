import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Baseline,
  Bold,
  ChevronDown,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Underline,
} from "lucide-react";

export const formattingBtns = [
  { Icon: Bold, name: "bold", func: "toggleBold" },
  { Icon: Italic, name: "italic", func: "toggleItalic" },
  { Icon: Underline, name: "underline", func: "toggleUnderline" },
  { Icon: Strikethrough, name: "strike", func: "toggleStrike" },
];
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
              <div
                className="flex cursor-pointer rounded w-fit border col-span-6 sm:col-span-4 lg:col-span-3 lg:mb-0"
              >
                {formattingBtns.map(({ name, Icon }, i) => {
                  return (
                    <div
                      key={name}
                      className={`${i === 0
                        ? "bg-blue-500 text-white hover:bg-blue-500"
                        : `hover:bg-slate-100 bg-white}`} 
                        p-2 rounded ${i === formattingBtns.length - 1
                          ? "border-none"
                          : "border-r"
                        }`
                      }
                    >
                      <Icon size={18} />
                    </div>
                  );
                })}
              </div>
              <div
                className="flex items-center cursor-pointer rounded w-fit border col-span-6 sm:col-span-4 lg:mb-0"
              >
                <div className="flex items-center cursor-pointer rounded w-fit border col-span-6 sm:col-span-4 lg:mb-0">
                  <Baseline size={35} className="hover:bg-slate-100 p-2 rounded border-r" />
                  <ChevronDown size={35} strokeWidth={1} className="py-2 w-fit hover:bg-slate-100 border-r" />
                  <Highlighter size={35} color="#fdfb7a" className="hover:bg-slate-100 p-2 rounded border-r" />
                  <ChevronDown size={35} strokeWidth={1} className="py-2 w-fit hover:bg-slate-100 border-r" />
                </div>
              </div>
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
