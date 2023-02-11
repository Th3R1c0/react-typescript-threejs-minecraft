import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import {Ground} from './components/Ground'
import { Player } from './components/Player'

import {FPV} from './components/FPV'

import {Cubes} from './components/Cubes'

import {TextureSelector} from './components/TextureSelector'
import { Suspense, useState } from "react"
function App() {

  const [start, setState] = useState<Boolean>(false)



  return (
    <div className="fixed w-full h-full">  
    {start ?     
      <Suspense fallback={<div>loading world</div>}>
      <Canvas
      dpr={[1,2]}>
      <Sky sunPosition={[100,100,20]}/>
      <ambientLight intensity={0.5} />
      <Physics>
      <FPV />
      <Player />
      <Cubes />
      <Ground />
      </Physics>
      </Canvas>
      <div className="fixed bg-none text-white top-[50%] left-[50%] w-10 h-10 z-10 translate-x-[-50%] translate-y-[-50%]">+</div>
      <TextureSelector /></Suspense>
      :
      <div className="fixed bg-blue-300 p-8 rounded-md top-[50%] left-[50%] cursor-pointer z-10 translate-x-[-50%] translate-y-[-50%] font-extrabold text-7xl" onClick={() => setState(true)}>Play game</div>}

    </div>
  )
}

export default App
