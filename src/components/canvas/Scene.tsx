"use client";

import { Canvas } from "@react-three/fiber";
import { Particles } from "./Particles";
import { Suspense } from "react";

export function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
