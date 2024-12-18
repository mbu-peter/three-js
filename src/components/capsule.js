import { CapsuleGeometry, MeshBasicMaterial, Mesh } from "three";

function createCapsule(){
    const geometry = new CapsuleGeometry( 1, 1, 4, 8 ); 
    const material = new MeshBasicMaterial( {color: 0x00ff00} ); 
    const capsule = new Mesh( geometry, material ); 

    return capsule

}
export {createCapsule}