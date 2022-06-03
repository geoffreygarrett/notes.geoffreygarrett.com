import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

/////////////////////////////////////////////////////
// Creating the scene
/////////////////////////////////////////////////////
// 1. Create a scene
const scene = new THREE.Scene();

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

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
// change brightness
light.intensity = 2.5;


// const ambientLight = new THREE.AmbientLight()
// scene.add(ambientLight)

/////////////////////////////////////////////////////
// add fancy rendering
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// Basic cube
/////////////////////////////////////////////////////
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// camera.position.z = 5;

/////////////////////////////////////////////////////
// Basic cube
/////////////////////////////////////////////////////
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js";
// load a gltf model
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/examples/js/libs/draco/');
loader.setDRACOLoader(dracoLoader);

let model;
// Load a glTF resource
loader.setPath('./assets/');
loader.load('Voyager.glb', function (gltf) {
    // size
    model = gltf.scene;
    model.scale.set(1, 1, 1) // scale here
    // let axesHelper2 = new THREE.AxesHelper(5);
    // model.add(axesHelper2);
    // rotate
    model.rotation.x = Math.PI / 2;

    scene.add(model);
});

// model.material.specular = new THREE.Color(0xffffff);
// model.material.shininess =  100;

// set model light interaction specular
// model.traverse(function (child) {
//     if (child.isMesh) {
//         child.castShadow = true;
//         child.receiveShadow = true;
//
//
//         child.material.shininess = 100;
//
//         child.material.needsUpdate = true;
//
//
// }
// point camera to model

camera.lookAt(0,0,0);

// scene.add(model);
camera.position.z = 10;
camera.position.y = 0;
camera.position.x = 5;

// load skybox from assets/back.png, front.png, left.png, right.png, top.png, bottom.png
const loader2 = new THREE.CubeTextureLoader();
const texture = loader2.load([
    // positive x
    './assets/right.png',
    // negative x
    './assets/left.png',
    // positive y
    './assets/top.png',
    // negative y
    './assets/bottom.png',
    // positive z
    './assets/front.png',
    // negative z
    './assets/back.png'

]);
scene.background = texture;

// make background darker
renderer.setClearColor(0x000000, 1);

// add a burning ball for the sun
const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 100);
scene.add(sphere);

// add shader to glow around sun to make it radial gradient
// const glowMaterial = new THREE.ShaderMaterial({
//     uniforms: {
//         color: {value: new THREE.Color(0xffff00)},
//         contrast: {value: 0.5},
//         intensity: {value: 0.5}
//     },
//     // vertexShader: document.getElementById('vertexShader').textContent,
//     // fragmentShader: document.getElementById('fragmentShader').textContent,
//     side: THREE.BackSide
// });
// const glow = new THREE.Mesh(glowGeometry, glowMaterial);
// glow.position.set(0, 0, 100);
// scene.add(glow);

// animate();
//
//     }
// }
// const glowMaterial = new THREE.MeshBasicMaterial({
//     color: 0xffff00,
//     transparent: true,
//     opacity: 0.5,
//     side: THREE.BackSide,
//     blending: THREE.AdditiveBlending
// });
// const glow = new THREE.Mesh(glowGeometry, glowMaterial);
// glow.position.set(0, 0, 100);
// scene.add(glow);

let N = 20;
for (let i = 0; i < 20; i++) {
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.01 * (N-i),
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending
    });
    const glowGeometry = new THREE.SphereGeometry(0.2 * i, 32, 32);

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.set(0, 0, 100);
    // sphere.position.set(0, 0, 100);
    scene.add(glow);
}


////////////////////////////////////////////////////
// Rendering the scene
////////////////////////////////////////////////////
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    // rotate the object
    // objects[0].rotation.y += 0.01;
    // objects[0].rotation.z += 0.01;
    if (model) {
        model.rotation.y += 0.002;
        // model.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI * 0.001);

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

// add sun on skybox
// const sun = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5),
//     new THREE.MeshBasicMaterial({color: 0xffff00})
// );
// sun.position.set(0, 0, 0);
// scene.add(sun);

// make sun bright and glaring
// const sunLight = new THREE.PointLight();
// sunLight.position.copy(sun.position);
// scene.add(sunLight);


// make stars visible
// stars.visible = false;


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
// const controls2 = new OrbitControls(camera, renderer.domElement);
// controls2.update();
    
 