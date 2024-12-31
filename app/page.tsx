'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full h-dvh flex justify-center items-center">
      <div className="">
        <h1 className="text-center mb-4 text-2xl font-bold">Docx Animations</h1>
        <div className="flex flex-col gap-4">
          <Button onClick={() => router.push("ai")}>AI animation</Button>
          <Button onClick={() => router.push("collab")}>Collaboration animation</Button>
        </div>
      </div>
    </main>
  );
}
