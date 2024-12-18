import { createCamera } from "../components/camera.js";
import {createScene} from '../components/scene.js'
import {createRenderer} from '../systems/renderer.js'
import {createCube} from '../components/cube.js'
import { createLights } from "../components/lights.js";

import {Resizer} from '../systems/Resizer.js'
import { Loop } from "../systems/Loop.js";


let camera;
let renderer;
let scene;
let loop;

class World {
    // 1. create an instance of the app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
       
        // scene.background = new Color('red')
        renderer = createRenderer();
        loop =new Loop(camera, scene, renderer)
        container.append(renderer.domElement);
      
        const cube = createCube();
        const light = createLights()
        loop.updatables.push(cube)
      
        scene.add(cube, light);
        console.log(scene.children)

        const resizer = new Resizer(container, camera, renderer)
       
        
      }
    // 2. render the scene
    render() {
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
      }
      
      stop() {
        loop.stop();
      }
}

export {World}; 