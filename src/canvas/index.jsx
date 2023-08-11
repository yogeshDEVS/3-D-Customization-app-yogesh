import React from 'react';
import { Canvas } from '@react-three/fiber';

import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';


const CanvasModel = () => {
  return (
    <Canvas
    shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <CameraRig>
      <Backdrop />
      
      <Shirt />
      </CameraRig>

    </Canvas>
  );
};

export default CanvasModel;

