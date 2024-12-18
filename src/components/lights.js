import { DirectionalLight } from "three";

function createLights(){
    const light = new DirectionalLight('white', 8)

    // move the light right, up, and towards us
    light.position.set(1, 10, 20)

    return light
}

export {createLights}