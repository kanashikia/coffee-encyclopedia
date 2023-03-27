import { useEffect } from "react";
import * as THREE from "three";

const init = (document: Document) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const container = document.querySelector("#sceneContainer");

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container!.clientWidth, container!.clientHeight);
  container!.appendChild(renderer.domElement);

  animate();

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  // let frameId: number;
  // const start = () => {
  //   if (!frameId) {
  //     frameId = requestAnimationFrame(animate);
  //   }
  // };
  // const stop = () => {
  //   cancelAnimationFrame(frameId);
  // };
  //   const animate = () => {
  //     //Animate Models Here
  //     //ReDraw Scene with Camera and Scene Object
  //     renderScene();
  //     frameId = window.requestAnimationFrame(animate);
  //   };
  //   const renderScene = () => {
  //     if (renderer) renderer.render(scene, camera);
  //   };
  //   const scene = new THREE.Scene();
  //   const container = document.querySelector("#sceneContainer");
  //   const width = container!.clientWidth;
  //   const height = container!.clientHeight;
  //   //Add Renderer
  //   const renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setClearColor("#263238");
  //   renderer.setSize(width, height);
  //   container!.appendChild(renderer.domElement);
  //   //add Camera
  //   const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  //   camera.position.z = 8;
  //   camera.position.y = 5;
  //   //Camera Controls
  //   // const controls = new OrbitControls(camera, renderer.domElement);
  //   //LIGHTS
  //   var lights = [];
  //   lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
  //   lights[1] = new THREE.PointLight(0xffffff, 1, 0);
  //   lights[2] = new THREE.PointLight(0xffffff, 1, 0);
  //   lights[0].position.set(0, 200, 0);
  //   lights[1].position.set(100, 200, 100);
  //   lights[2].position.set(-100, -200, -100);
  //   scene.add(lights[0]);
  //   scene.add(lights[1]);
  //   scene.add(lights[2]);
  //   renderScene();
  //   start();
};

export function Three() {
  let counter = 0;
  useEffect(() => {
    if (counter >= 1) return;
    init(document);
    counter++;
  }, [counter]);
  return (
    <div id="sceneContainer" style={{ width: "800px", height: "800px" }} />
  );
}
