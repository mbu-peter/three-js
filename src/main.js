import { World } from "./world/World.js";
// create a main function

function main(){
    // get reference to the container
    const container = document.querySelector("#scene-container")
   
    // 1. create an instance of the world app
    const world = new World(container)
   
    // 2. render the scene
    world.start()
    // world.render()
}

// call main to start the app
main();