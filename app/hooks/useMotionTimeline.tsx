// Source code: https://gist.github.com/TomIsLoading/ae9c5af702f242df461c1cb1be5c33a4

import { useEffect, useRef } from "react";
import {
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
  useAnimate,
} from "motion/react";
import { ElementOrSelector } from "motion-dom"

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
];

type Animation = AnimateParams | Animation[];

export default function useMotionTimeline(
  keyframes: Animation[],
  count: number = 1,
) {
  const mounted = useRef(true);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    mounted.current = true;

    handleAnimate();

    return () => {
      mounted.current = false;
    };
  }, []);

  const processAnimation = async (animation: Animation) => {
    // If list of animations, run all concurrently
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async (a) => {
          await processAnimation(a as Animation);
        })
      );
    } else {
      // Else run the single animation
      await animate(...(animation as AnimateParams));
    }
  };

  const handleAnimate = async () => {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;
        await processAnimation(animation);
      }
    }
  };

  return scope;
};
