import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Three.js scene with floating clay-like 3D shapes.
 * Reacts to mouse movement with subtle parallax.
 */
export function ClayHero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights — soft, three-point-ish for clay vibe
    scene.add(new THREE.AmbientLight(0xfff1e0, 0.7));
    const key = new THREE.DirectionalLight(0xffd9c7, 1.2);
    key.position.set(5, 6, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xb8d8ff, 0.8);
    rim.position.set(-5, -2, 3);
    scene.add(rim);
    const fill = new THREE.PointLight(0xffc0e0, 0.6, 20);
    fill.position.set(0, 0, 4);
    scene.add(fill);

    const clayMat = (color: number) =>
      new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.3,
        metalness: 0.4,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        emissive: new THREE.Color(color).multiplyScalar(0.15),
      });

    type Shape = { mesh: THREE.Mesh; speed: number; offset: number; axis: THREE.Vector3 };
    const shapes: Shape[] = [];

    const makeBox = (size: number) => new THREE.BoxGeometry(size, size, size, 2, 2, 2);

    const add = (geo: THREE.BufferGeometry, color: number, pos: [number, number, number], scale = 1) => {
      const mesh = new THREE.Mesh(geo, clayMat(color));
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      // Wireframe overlay for futuristic vibe
      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })
      );
      mesh.add(wire);
      shapes.push({
        mesh,
        speed: 0.3 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
        axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize(),
      });
    };

    add(makeBox(1.5), 0xa855f7, [-2.6, 0.8, 0]);
    add(makeBox(1.2), 0xc084fc, [2.6, -0.4, 0.5]);
    add(makeBox(1.4), 0x9333ea, [0.2, 1.6, -1]);
    add(makeBox(1.1), 0xd946ef, [-1.6, -1.4, 0.8]);
    add(makeBox(1.3), 0x7c3aed, [2.2, 1.4, -0.5]);
    add(makeBox(0.9), 0xe879f9, [-0.6, -1.6, 1.2]);

    // Mouse parallax
    const target = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      shapes.forEach((s) => {
        s.mesh.rotateOnAxis(s.axis, 0.005 * s.speed);
        s.mesh.position.y += Math.sin(t * s.speed + s.offset) * 0.003;
      });
      // ease camera toward mouse
      camera.position.x += (target.x * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (-target.y * 0.4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      shapes.forEach((s) => {
        s.mesh.geometry.dispose();
        (s.mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
}
