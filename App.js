import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './App.css';

function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to Softwork Solutions</h1>
      <Canvas style={{ height: "400px" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;