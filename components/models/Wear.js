import { useGLTF } from "@react-three/drei";

function Wear() {
  const { scene } = useGLTF("/glb/test.glb");
  return <primitive object={scene}></primitive>;
}

export default Wear;
