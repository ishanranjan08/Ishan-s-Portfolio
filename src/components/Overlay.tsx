"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -150]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.55], [100, -150]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.85], [100, -150]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full h-screen overflow-hidden">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
            Ishan Ranjan.
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-light text-zinc-300 drop-shadow">
            Java Developer.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl drop-shadow-xl">
          I build scalable <br className="hidden md:block" />
          <span className="text-zinc-400 font-serif italic">enterprise applications.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl drop-shadow-xl">
          Integrating APIs <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
            and Spring AI.
          </span>
        </h2>
      </motion.div>
    </div>
  );
}
