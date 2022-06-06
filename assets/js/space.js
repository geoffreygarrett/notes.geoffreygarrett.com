import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

/////////////////////////////////////////////////////
// Creating the scene
/////////////////////////////////////////////////////
// 1. Create a scene
const scene = new THREE.Scene();

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);

// 3. Create a render
let artifactCanvas = document.getElementById('artifactCanvas');
const renderer = new THREE.WebGLRenderer({antialias: true, canvas: artifactCanvas});

// 4. Set the size of the render{ canvas: artifactCanvas }
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/////////////////////////////////////////////////////
// Add lights
/////////////////////////////////////////////////////
const light = new THREE.PointLight(0xffffff, 1, 0);
light.position.set(0, 0, 10.0)
scene.add(light)
light.intensity = 2.5;

/////////////////////////////////////////////////////
// Import GLTF
/////////////////////////////////////////////////////
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js";

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/examples/js/libs/draco/');
loader.setDRACOLoader(dracoLoader);
let model;
loader.setPath('../models/');
loader.load('New_Horizons.glb', function (gltf) {
    model = gltf.scene;
    model.scale.set(1, 1, 1) // scale here
    model.rotation.x = Math.PI / 2;
    model.layers.enable(0);
    scene.add(model);
});

////////////////////////////////////////////////////
// Create the Sun
////////////////////////////////////////////////////
const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 50);
scene.add(sphere);
render.renderToScreen = true;
camera.position.set(5.52, 0.1, 4.78);

// display current camera positions and angles on screen
function displayCameraInfo() {
    const info = document.getElementById('info');
    info.innerHTML = `
        <p>Camera position: ${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)}</p>
        <p>Camera rotation: ${camera.rotation.x.toFixed(2)}, ${camera.rotation.y.toFixed(2)}, ${camera.rotation.z.toFixed(2)}</p>
        <p>Camera fov: ${camera.fov.toFixed(2)}</p>
        <p>Camera aspect: ${camera.aspect.toFixed(2)}</p>
        <p>Camera near: ${camera.near.toFixed(2)}</p>
    `
}

// load skybox from assets/back.png, front.png, left.png, right.png, top.png, bottom.png
const loader2 = new THREE.CubeTextureLoader();
const texture = loader2.load([
    // positive x
    '../images/right.png',
    // negative x
    '../images/left.png',
    // positive y
    '../images/top.png',
    // negative y
    '../images/bottom.png',
    // positive z
    '../images/front.png',
    // negative z
    '../images/back.png'

]);
// add skybox to scene
const skybox = new THREE.Mesh(
    new THREE.SphereGeometry(100000, 20, 20),
    new THREE.MeshBasicMaterial({
        envMap: texture,
        side: THREE.BackSide
    })
);

scene.add(skybox);

////////////////////////////////////////////////////
// Rendering the scene
////////////////////////////////////////////////////
// renderer.setAnimationLoop( function () { renderer.render( scene, camera ); } );
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if (model) {
        model.rotation.y += 0.0009;
    }
}

animate();

////////////////////////////////////////////////////
// Place surface under model
////////////////////////////////////////////////////
// const surface = new THREE.Mesh(
//     new THREE.PlaneBufferGeometry(25, 25),
//     new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide})
// );
// // add gray grid on surface
// scene.add(surface);
// surface.position.y = -0.5;
//
//
// surface.position.y = -10;
// surface.rotation.x = Math.PI / 2;
// scene.add(surface);

//
// const ball = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5),
//     // color red
//     new THREE.MeshBasicMaterial({color: 0xff0000})
// );
// scene.add(ball);

// model.rotateOnAxis( new THREE.Vector3(1,0,0), Math.PI * -0.5 );

// // find mouse intersection on surface
// function onMouseMove(event) {
//     event.preventDefault();
//     const mouse = new THREE.Vector2(
//         (event.clientX / window.innerWidth) * 2 - 1,
//         -(event.clientY / window.innerHeight) * 2 + 1
//     );
//     const raycaster = new THREE.Raycaster();
//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObject(surface);
//     if (intersects.length > 0) {
//
//         // place small ball where mouse is
//
//         ball.position.copy(intersects[0].point);
//
//         // points model to ball with x axis
//         // model.up =
//         model.lookAt(ball.position);
//         model.rotateOnAxis( new THREE.Vector3(1,0,0), Math.PI * 0.5 );
//         model.rotateOnAxis( new THREE.Vector3(0,1,0), Math.PI * 0.5 );
//
//
//         // const intersect = intersects[0];
//         // const position = new THREE.Vector3();
//         // position.copy(intersect.point).add(surface.position);
//         // model.position.copy(position);
//     }
// }
//
// // add event listener
// window.addEventListener('mousemove', onMouseMove);


////////////////////////////////////////////////////
// On window resize
////////////////////////////////////////////////////
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Draw world x,y,z axes
////////////////////////////////////////////////////
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);


////////////////////////////////////////////////////
// Draw axes on object[0]
////////////////////////////////////////////////////

// scene.add(objects[0]);

////////////////////////////////////////////////////
// OrbitControls for object[0]
////////////////////////////////////////////////////
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

////////////////////////////////////////////////////
// OrbitControls for object[0]
////////////////////////////////////////////////////
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

 