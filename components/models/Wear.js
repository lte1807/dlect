import { useGLTF } from "@react-three/drei";

function Wear() {
  const { scene } = useGLTF("/glb/work wear.1.gltf");
  return <primitive object={scene}></primitive>;
}

export default Wear;
