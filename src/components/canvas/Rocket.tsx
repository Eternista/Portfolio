import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Rocket = () => {
  const rocketRef = useRef();
  const { scene } = useGLTF("rocket/rocket.gltf");

  // Animation logic
  // const targetRocketPosition = 80;
  // const animationDuration = 2000;

  useFrame(() => {
    // const t = (Date.now() % animationDuration) / animationDuration;
    // const delta = targetRocketPosition * Math.sin(Math.PI * 1 * t);
    if (rocketRef.current) {
      rocketRef.current.rotation.y = 0;
      rocketRef.current.position.y = -100; // += delta by wystrzelić
    }
  });

  return <primitive ref={rocketRef} object={scene} scale={2} />;
};

const Lights = () => {
  return (
    <>
      <hemisphereLight args={[0x404040, 0x404040, 1]} />
      <directionalLight
        color={0xdfebff}
        intensity={1}
        position={[-300, 0, 600]}
      />
      <pointLight color={0xa11148} intensity={2} distance={1000} decay={2} position={[200, -100, 50]} />
    </>
  );
};

const RocketScene = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 1,
        far: 10000,
        position: [0, -10, 500],
      }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Rocket />
        <OrbitControls autoRotate={false} enableZoom={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RocketScene;
