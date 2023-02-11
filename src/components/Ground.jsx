import { usePlane } from "@react-three/cannon"
import { NearestFilter, RepeatWrapping } from "three"
import {grassTexture} from "../images/textures"

import { useStore } from '../hooks/useStore'


export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2,0,0],
        position: [0,-0.5,0],
    }))

    const [addCube] = useStore((state) => [state.addCube])


    grassTexture.magFilter = NearestFilter
    grassTexture.wrapS = RepeatWrapping
    grassTexture.wrapT = RepeatWrapping
    grassTexture.repeat.set(10,10)

	return (
		<mesh
			onClick={(e) => {
				e.stopPropagation()
				const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
				addCube(x, y, z)
			}}
			ref={ref}
		>
			<planeBufferGeometry attach='geometry' args={[10,10]} />
			<meshStandardMaterial attach='material' map={grassTexture} />
		</mesh>
	)
}