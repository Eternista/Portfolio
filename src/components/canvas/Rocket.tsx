import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const RocketScene: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      rocket: THREE.Object3D | null = null;
    let animationFrameId: number;

    const HEIGHT = 400;
    const WIDTH = 650;
    const targetRocketPosition = 40;
    const animationDuration = 120000;

    const createScene = () => {
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

      const aspectRatio = WIDTH / HEIGHT;
      const fieldOfView = 60;
      const nearPlane = 1;
      const farPlane = 10000;

      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );

      camera.position.set(0, -10, 500);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;

      if (canvasRef.current) {
        canvasRef.current.appendChild(renderer.domElement);
      }

      window.addEventListener("resize", handleWindowResize);
    };

    const handleWindowResize = () => {
      const newWidth = 650;
      const newHeight = 400;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    const createLights = () => {
      const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);
      const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
      directionalLight.position.set(-300, 0, 600);

      const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
      pointLight.position.set(200, -100, 50);

      scene.add(ambientLight, directionalLight, pointLight);
    };

    const loadRocket = () => {
        const loader = new GLTFLoader();
        loader.load("/rocket.gltf", (gltf) => {
          rocket = gltf.scene;
          rocket.position.y = 50;
          scene.add(rocket);
        });
    };

    const loop = () => {
      const t = (Date.now() % animationDuration) / animationDuration;
      const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);

      if (rocket) {
        rocket.rotation.y += 0.1;
        rocket.position.y = delta;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(loop);
    };

    createScene();
    createLights();
    loadRocket();
    loop();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={canvasRef} id="canvas" className="absolute inset-0 h-80"></div>
    </div>
  );
};

export default RocketScene;
