import { Button } from "@/components/ui/button";
import { ALargeSmall, FileInput } from "lucide-react";

export default function Tabs() {
  return (
    <aside className="bg-white h-full justify-between border-r flex flex-col">
      <nav className="grid gap-1 p-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg bg-slate-100"
          aria-label="Format"
        >
          <ALargeSmall className="size-10" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg"
          aria-label="Format"
        >
          <FileInput className="size-10" />
        </Button>
      </nav>
    </aside>
  )
}
