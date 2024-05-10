import { useGLTF } from "@react-three/drei";

function Zipper({ model }) {
  const { scene } = useGLTF(model);

  return <primitive object={scene} />;
}

export default Zipper;
