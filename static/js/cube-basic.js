import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js";
import {TrackballControls} from "https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/controls/TrackballControls.js";

const renderCube = function (event) {

    let element = document.getElementById('threejs-cube');


    // 1. Create a scene
    let scene = new THREE.Scene();

    // 2. Create a camera
    let w = element.clientWidth;  // offsetWidth is with border included
    let h = element.clientHeight; // offsetHeight is with border included
    let camera = new THREE.PerspectiveCamera(
        75, w / h, 0.1, 1000);

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
        renderer.setPixelRatio(element.clientWidth / element.clientHeight);
        controls.handleResize();
        renderer.setSize(element.clientWidth, element.clientHeight);
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