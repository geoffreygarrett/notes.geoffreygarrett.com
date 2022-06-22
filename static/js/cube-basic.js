import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import { TrackballControls } from "https://cdn.skypack.dev/three-trackballcontrols-ts@0.2.3";


const renderCube = function (event) {

    let element = document.getElementById('threejs');
    let w = element.clientWidth;  // offsetWidth is with border included
    let h = element.clientHeight; // offsetHeight is with border included

    // 1. Create a scene
    let scene = new THREE.Scene();

    // 2. Create a camera
    let camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);

    // 3. Create a render
    let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

    // 4. Set the size of the render
    renderer.setSize(w, h);
    element.appendChild(renderer.domElement);

    // Create the cube geometry
    let geometry = new THREE.BoxGeometry(1, 1, 1);

    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let material = new THREE.MeshNormalMaterial();

    let cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    //Trackball Controls for Camera
    const controls = new TrackballControls(camera, renderer.domElement);
    controls.maxDistance = 10;
    controls.noPan = true;
    controls.minDistance = 1.5;
    controls.rotateSpeed = 4;
    controls.dynamicDampingFactor = 0.15;



    camera.position.z = 2;

    // RESIZE LISTENER
    window.addEventListener('resize', () => {
        camera.aspect = element.clientWidth / element.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });


    function animate() {
        requestAnimationFrame(animate);
        scene.rotation.z -= 0.005;
        scene.rotation.x -= 0.005;
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

window.addEventListener("DOMContentLoaded", renderCube);