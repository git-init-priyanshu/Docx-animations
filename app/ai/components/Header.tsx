import Image from "next/image";
import { Redo, Undo } from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";

export default function Header() {
  return (
    <header className="flex h-[8%] items-center gap-1 border-b bg-white">
      <div className="p-2 border-r">
        <Button variant="outline" size="icon">
          <Image src={logo} alt="logo" className="w-[80%]"/>
        </Button>
      </div>
      <div className="w-full flex justify-between">

        <div className="flex items-center">
          <h1 className="text-md truncate block text-xl font-semibold mx-4">
            Untitled document
          </h1>
          <Button
            variant="ghost"
            className="px-3 rounded-md"
          >
            <Undo size={15} />
          </Button>
          <Button
            variant="ghost"
            className="px-3 rounded-md"
          >
            <Redo size={15} />
          </Button>
        </div>
      </div>
    </header>
  )
}
