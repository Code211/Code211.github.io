"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  return (
    <>
      <Stars
        radius={50}
        depth={50}
        count={20000}
        factor={4}
        saturation={1}
        fade
        speed={1}
      />
    </>
  );
};

const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 pointer-events-none" />
    </div>
  );
};

export default HeroBackground3D;
