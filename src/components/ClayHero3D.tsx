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
        roughness: 0.55,
        metalness: 0,
        clearcoat: 0.4,
        clearcoatRoughness: 0.6,
        sheen: 0.5,
        sheenColor: new THREE.Color(0xffffff),
      });

    type Shape = { mesh: THREE.Mesh; speed: number; offset: number; axis: THREE.Vector3 };
    const shapes: Shape[] = [];

    const add = (geo: THREE.BufferGeometry, color: number, pos: [number, number, number], scale = 1) => {
      const mesh = new THREE.Mesh(geo, clayMat(color));
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      shapes.push({
        mesh,
        speed: 0.3 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
        axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize(),
      });
    };

    add(new THREE.IcosahedronGeometry(1.1, 1), 0xffb3c1, [-2.6, 0.8, 0], 1);
    add(new THREE.TorusKnotGeometry(0.7, 0.28, 120, 16), 0xb6e0c2, [2.6, -0.4, 0.5], 1);
    add(new THREE.SphereGeometry(0.85, 48, 48), 0xc9b8ff, [0.2, 1.6, -1], 1);
    add(new THREE.TorusGeometry(0.7, 0.28, 24, 80), 0xfcd6a4, [-1.6, -1.4, 0.8], 1);
    add(new THREE.OctahedronGeometry(0.8, 0), 0xa6d0ff, [2.2, 1.4, -0.5], 1);
    add(new THREE.DodecahedronGeometry(0.55, 0), 0xffe29a, [-0.6, -1.6, 1.2], 1);

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
