import React from 'react';
import { useSnapshot } from 'valtio';
import { useGLTF, useTexture, Decal } from '@react-three/drei';
import state from '../store';
import { useFrame } from '@react-three/fiber';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  
  materials.lambert1.color.set(snap.color);
  

    
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={0.5} // Adjust the roughness value
        material-map={fullTexture} // Apply the texture to the material
        dispose={null}
      >
       {snap.isFullTexture && (
        <Decal
         position= {[0, 0, 0]}
         rotation= {[0, 0, 0]}
         scale={1}
         map={fullTexture}
        />
       )}
       {snap.isLogoTexture && (
        <Decal
         position= {[0, 0.04, 0.15]}
         rotation= {[0, 0, 0]}
         scale={0.15}
         map={logoTexture}
        

        />
       )}
       </mesh>
    </group>
  );
};

export default Shirt;

