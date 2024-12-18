import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader } from "three";


const radianPerSecond = MathUtils.degToRad(30)
const spec = {
    color: 'peachpuff'
}

function createMaterial() {

    // texture loader
    const textureloader = new TextureLoader()
    // load texture
    const texture = textureloader.load('../assets/texturess/uv-test-bw.png')
    
    // create a "standard" material using
    const material = new MeshStandardMaterial({
        map: texture
    })
    return material

}




function createCube(){
    // create geometry
    const geometry = new BoxGeometry(2,2,2)
    //  material
    const material = createMaterial()
   
    //  Mesh
    const cube = new Mesh(geometry, material)
    cube.rotation.set(-0.5, -0.1, 0.8)

    cube.tick = (delta)=> {
        cube.rotation.z += radianPerSecond * delta
        cube.rotation.x += radianPerSecond * delta
        cube.rotation.y += radianPerSecond * delta
    }

    return cube;
}
export {createCube};