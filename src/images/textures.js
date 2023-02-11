import { LinearMipMapNearestFilter, NearestFilter, NearestMipMapNearestFilter, TextureLoader } from 'three'
import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'

//const dirtTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)
const dirtTexture = new TextureLoader().load(dirtImg)

dirtTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter


export {
    dirtTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture,
}