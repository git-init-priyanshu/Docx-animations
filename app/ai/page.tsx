import AnimatedContent from "./components/AnimatedContent";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

export default function AiAnimation() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-neutral-500">
      <div className="w-[80%] h-[80%]">

        <div className="h-full w-full overflow-y-hidden bg-slate-50 rounded-md border">
          <Header />
          <div className="flex h-full">
            <Tabs />
            <div className="w-full flex gap-4 p-4">
              <div className="w-full mb-4 flex justify-center">
                <div className="w-[75%] h-full mx-auto bg-white rounded-md border p-24 my-2 shadow-none focus-visible:outline-none">
                  <AnimatedContent />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
