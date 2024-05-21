import { Environment, OrbitControls } from "@react-three/drei";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { animated } from "@react-spring/three";
import Wear from "./Wear";
import Zipper from "./Zipper";

const Scene = forwardRef(( {position, scale, rotation, model, handleModelLoaded, layer}, ref )=>{ 
    const controlsRef = useRef();
    
    useImperativeHandle(ref, () => ({
        resetClick() {            
            if (controlsRef.current) {
                
                controlsRef.current.reset();
                
            }
        }
    }))

    
    
    return (
    <>
        <OrbitControls 
        ref={controlsRef}
        target={[0, 0, 0]}        
        enablePan={false} 
        dampingFactor={0.2}
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2}
        maxDistance={7}
        minDistance={4}        
        />
        <animated.group position={position} scale={scale} rotation={rotation}>
        <mesh position={[0, -14, 0]} scale={[10.5, 10.5, 10.5]}>
            <Wear onLoad={handleModelLoaded} />
        </mesh>
        {model && (
            <mesh position={[-0.1, -4, 1]} scale={[0.2, 0.2, 0.01]} rotation={[0,0,0]}>
            <Zipper model={model} />
            <meshStandardMaterial attach="material" color={0xa3b18a} />
            </mesh>
        )}
        </animated.group>
        <Environment
        background={true}
        files={[`/hdr/${layer ? 'whiteBackground' : 'studio'}.hdr`]}
        />
        <axesHelper args={[5]} />
    </>
      );
    }
  )
  Scene.displayName = "Scene";
  export default Scene;