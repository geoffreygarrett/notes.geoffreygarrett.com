import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js";
import {TrackballControls} from "https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/controls/TrackballControls.js";
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/loaders/GLTFLoader.min.js';

export async function renderVoyager() {

    let element = await document.getElementById('threejs-voyager');

    // 1. Create a scene
    let scene = new THREE.Scene();

    // 2. Create a camera
    let w = element.clientWidth;  // offsetWidth is with border included
    let h = element.clientHeight; // offsetHeight is with border included
    let camera = new THREE.PerspectiveCamera(
        75, w / h, 0.1, 100000);

    // 3. Create a render
    let renderer = new THREE.WebGLRenderer({antialias: true, alpha:true});

    // 4. Set the size of the render
    renderer.setSize(w, h);

    element.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(0, 0, 10.0)
    scene.add(light)
    light.intensity = 2.5;


    const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('/examples/js/libs/draco/');
    // loader.setDRACOLoader(dracoLoader);
    let model;
    loader.load('/models/Voyager.glb', function (gltf) {
        model = gltf.scene;
        model.scale.set(1, 1, 1) // scale here
        model.rotation.x = Math.PI / 2;
        // model.layers.enable(0);
        scene.add(model);
    });

    // scene.add(cube);

    //Trackball Controls for Camera
    const controls = new TrackballControls(camera, renderer.domElement);
    controls.maxDistance = 20;
    controls.noPan = true;
    controls.minDistance = 1.5;
    controls.rotateSpeed = 4;
    controls.dynamicDampingFactor = 0.15;


    camera.position.z = 10;

    // skynox

    // load skybox from assets/back.png, front.png, left.png, right.png, top.png, bottom.png
    const loader2 = new THREE.CubeTextureLoader();
    const texture = loader2.load([
        // positive x
        '/images/right.png',
        // negative x
        '/images/left.png',
        // positive y
        '/images/top.png',
        // negative y
        '/images/bottom.png',
        // positive z
        '/images/front.png',
        // negative z
        '/images/back.png'

    ]);
    // renderer.background = texture;
    // add skybox to scene
    const skybox = new THREE.Mesh(
        new THREE.SphereGeometry(100000, 20, 20),
        new THREE.MeshBasicMaterial({
            envMap: texture,
            side: THREE.BackSide
        })
    );

    scene.add(skybox);


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
        scene.rotation.z -= 0.002;
        // scene.rotation.x -= 0.0000;
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}
