import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

/////////////////////////////////////////////////////
// Creating the scene
/////////////////////////////////////////////////////
// 1. Create a scene
const scene = new THREE.Scene();

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.layers.enable(1);

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
loader.load('Voyager.glb', function (gltf) {
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
sphere.layers.enable(1);
scene.add(sphere);

////////////////////////////////////////////////////
// post
////////////////////////////////////////////////////
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer.js";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass.js";
import {UnrealBloomPass} from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';

const effectFXAA = new ShaderPass(FXAAShader)
effectFXAA.uniforms.resolution.value.set( 1 / window.innerWidth, 1 / window.innerHeight )

//bloom renderer
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
);
// bloomPass.threshold = 0.2;
// bloomPass.strength = 9; //intensity of glow
// bloomPass.radius =1;
bloomPass.exposure =8;
bloomPass.threshold = 0.3
bloomPass.strength = 9
bloomPass.radius = 1
bloomPass.renderToScreen = true;

const composer = new EffectComposer(renderer);
composer.setSize(window.innerWidth, window.innerHeight);
// composer.renderToScreen = true;


composer.addPass(renderScene);
composer.addPass(bloomPass);
composer.addPass(effectFXAA);

renderer.gammaInput = true
renderer.gammaOutput = true
renderer.toneMappingExposure = Math.pow(0.9, 4.0)
/////////////////////////////////////////////////////////////////
// post

// bloomComposer.addPass(renderScene2);


// camera.lookAt(0, 0, 0);

// set camera position to fixed 5.09, 0.5, -5.22
camera.position.set(5.52, 0.1, 4.78);
// camera.rotation.rotateOnAxis(new THREE.Vector3(0, 1, 0) ,1);
// camera.rotation.set(-3.03, 0.5, 3.02);
// camera.rotateZ(Math.PI/2);


// set camera angles to -3.03, 0.5, 3.02
// camera.ro


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


// const skyGeo = new THREE.SphereGeometry(100000, 25, 25);
// const loaderSky  = new THREE.TextureLoader(), texture = loaderSky.load( "assets/skymap.jpg" );
//
// const material = new THREE.MeshPhongMaterial({
//     map: texture,
// });
// const sky = new THREE.Mesh(skyGeo, material);
// sky.scale.set(-1, 1, 1);
// sky.eulerOrder = 'XZY';
// sky.renderDepth = 1000.0;
// sky.material.side = THREE.BackSide;
// scene.add(sky);


// scene.background = new THREE.Color(0xffffff);
// scene.background =sky;

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
skybox.layers.enable(1);
skybox.layers.disable(0);
// texture.layers.disable(0);
// texture.layers.enable(1);
// scene.background = texture;
scene.add(skybox);

    // }



// galaxy geometry
// const starGeometry = new THREE.SphereGeometry(80, 64, 64);
//
// // galaxy material
// const starMaterial = new THREE.MeshBasicMaterial({
//     map: THREE.ImageUtils.loadTexture("assets/background.png"),
//     side: THREE.BackSide,
//     transparent: true,
// });
//
// // galaxy mesh
// const starMesh = new THREE.Mesh(starGeometry, starMaterial);
// starMesh.layers.set(1);
// scene.add(starMesh);
// scene.add(starMaterial);


////////////////////////////////////////////////////
// Rendering the scene
////////////////////////////////////////////////////
// renderer.setAnimationLoop( function () { renderer.render( scene, camera ); } );
function animate() {
    requestAnimationFrame(animate);

    renderer.autoClear = false;
    renderer.clear();

    camera.layers.set(1);
    composer.render();

    renderer.clearDepth();
    camera.layers.set(0);
    renderer.render(scene, camera);

    // displayCameraInfo();

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

    // bloom
    composer.setSize(window.innerWidth, window.innerHeight);
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

 