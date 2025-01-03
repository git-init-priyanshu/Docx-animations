'use client'

import { useState } from 'react'
import { motion } from "motion/react";

import useMotionTimeline from '@/app/hooks/useMotionTimeline';
import BubbleMenu from './components/BubbleMenu';

type cursorPosType = {
  x: number,
  y: number
}
export default function AiAnimation() {
  const [cursorPosInitial, setCursorPosInitial] = useState<cursorPosType | null>(null);
  const [cursorPos, setCursorPos] = useState<cursorPosType>({ x: 0, y: 0 });

  const [displayText, setDisplayText] = useState("This document showcases the project's advanced AI capabilities.");
  const [isHighlightVisible, setIsHighlightVisible] = useState(true);

  const scope = useMotionTimeline([
    [
      [".highlight", { width: "100%" }, { ease: "easeInOut", delay: 1, duration: 2 }],
      [".cursor", { x: "65%" }, { ease: "easeInOut", delay: 1, duration: 2 }],
    ],
    [".cursor", { left: "-155%", top: "-110%" }, { ease: "easeInOut", delay: 0.5, duration: 1.5 }],
    [".cursor", { scale: 0.8 }, { ease: "easeInOut", delay: 0.2, duration: 0.1 }],
    [".cursor", { scale: 1 }, { ease: "easeInOut" }],
    [".cursor", { left: "-150%", top: "220%" }, { ease: "easeInOut", delay: 0.5, duration: 0.8 }],
    [".cursor", { scale: 0.8 }, { ease: "easeInOut", delay: 0.2, duration: 0.1 }],
    [".cursor", { scale: 1 }, { ease: "easeInOut" }],
    [".cursor", { left: "-90%", top: "700%" }, { ease: "easeInOut", delay: 0.1, duration: 1.5 }],
    [".cursor", { left: "-105%", top: "650%" }, { ease: "easeInOut", delay: 0.5, duration: 1.5 }],
    [".cursor", { scale: 0.8 }, { ease: "easeInOut", delay: 0.2, duration: 0.1 }],
    [".cursor", { scale: 1 }, { ease: "easeInOut" }],
  ])

  return (
    <div className="w-full h-screen flex justify-center items-center bg-neutral-500">
      <div className="w-[80%] h-[80%]">

        <motion.div
          className="h-full w-full overflow-hidden bg-slate-50 rounded-md border"
          initial={{
            zoom: 0.8,

          }}
          animate={{
            zoom: 1.5
          }}
          transition={{
            duration: 1
          }}
        >
          {/*Editor component*/}
          <motion.div
            className="relative h-full mx-auto text-nowrap rounded-md p-20 shadow-none focus-visible:outline-none"
            style={{
              translate: `${cursorPos?.x / 10}% ${(cursorPos?.y + 0.5) / 40}%`
            }}
            transition={{
              type: "spring"
            }}
          >
            <div ref={scope} className=''>
              {/* <h3 className="text-[250%] text-center font-bold text-blue-500 mb-4">AI Feature</h3> */}
              <span className="relative">
                {displayText}

                {/* Bubble menu */}
                <BubbleMenu
                  setDisplayText={setDisplayText}
                  setIsHighlightVisible={setIsHighlightVisible}
                />

                {/* Highlighted text */}
                {
                  isHighlightVisible &&
                  <div
                    className="highlight w-0 h-[120%] absolute bg-[#3367d1] text-nowrap overflow-hidden text-white -top-[2px] left-0"
                  >
                    {displayText}
                  </div>
                }

                {/* Cursor */}
                <motion.svg
                  //@ts-ignore
                  onAnimationStart={(e) => setCursorPosInitial({ x: parseInt(e.left), y: parseInt(e.top) })}
                  //@ts-ignore
                  onUpdate={(e) => setCursorPos({ x: cursorPosInitial!.x - parseInt(e.left), y: cursorPosInitial!.y - parseInt(e.top) })}
                  className="cursor absolute -rotate-90 z-20"
                  fill="#3b82f6"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="150%"
                  height="150%"
                  viewBox="0 0 266.495 266.494"
                  initial={{
                    top: "500%",
                    left: "10%",
                    rotate: "-90deg"
                  }}
                  animate={{
                    top: "50%",
                    left: "-70%",
                    rotate: "-90deg"
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1
                  }}
                >
                  <g>
                    <g>
                      <path
                        stroke='#e5e7eb'
                        strokeWidth={10}
                        d="M150.036,266.494c-0.264,0-0.517-0.006-0.792-0.018c-6.102-0.337-11.332-4.474-13.046-10.347l-26.067-89.027	l-95.203-18.867c-6.014-1.194-10.614-6.059-11.476-12.123c-0.858-6.062,2.201-12.016,7.65-14.832L242.143,1.617 C247.5-1.175,254.057-0.29,258.518,3.8c4.474,4.101,5.885,10.55,3.562,16.146l-98.743,237.655 C161.097,263.018,155.836,266.494,150.036,266.494z"
                      />
                    </g>
                  </g>
                </motion.svg>
              </span>
              {" "}
              <br />
              <span>
                Try improvising the content, fixing spellings and grammar, translating it, simplifying the language, or adjusting the length to suit your needs.
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
