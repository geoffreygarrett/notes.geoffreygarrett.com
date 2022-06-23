---
title: Three.js Fundamentals
comments: false
tags:
- frontend
- javascript
- library
- sapling

custom_js_path: ["/js/cube-basic.js"]
---

Three.js is a cross-browser Javascript API which allows for the creation and
display of 3D computer graphics in a web browser using
[WebGL](https://en.wikipedia.org/wiki/WebGL?wprov=sfla1) (a lower level
Javascript API allowing for GPU-accelerated physics and image processing
locally, as part of the web page canvas). There exists a [plethora of
examples](https://threejs.org/) which can be used as starting points in your
projects, one of which I often see when [signing into
GitHub](https://github.com/home).

{{< rawhtml >}}
<div class="threejs" id="threejs-cube"></div>
{{< /rawhtml >}}


````html {title="/index.html"}
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My first three.js app</title>
    <style> body {
        margin: 0;
    } </style>
    <link rel="stylesheet" href="style.css">
    <script src="first-cube.js" type="module"></script>
</head>
<body>
<div id="threejs"></div>
</body>
````

The main components of any `three.js` app are the scene, the camera, and the
renderer. These are setup as demonstrated in the following code:

````javascript {linenos=true, linenostart=5, title="/first-cube.js"}
// 0. Get your desired element to render on
let element = document.getElementById('threejs');
let w = window.innerWidth;
let h = window.innerHeight;

// 1. Create a scene
var scene = new THREE.Scene();

// 2. Create a camera
let camera = new THREE.PerspectiveCamera(
    75, w / h, 0.1, 1000);

// 3. Create a render
var renderer = new THREE.WebGLRenderer();

// 4. Set the size of the render
renderer.setSize(w, h);
````

- There are different types of cameras in `three.js`:
- [PerspectiveCamera](https://threejs.org/docs/#api/cameras/PerspectiveCamera)
- [OrthographicCamera](https://threejs.org/docs/#api/cameras/OrthographicCamera)
- [CubeCamera](https://threejs.org/docs/#api/cameras/CubeCamera)
- [StereoCamera](https://threejs.org/docs/#api/cameras/StereoCamera)
- [ArrayCamera](https://threejs.org/docs/#api/cameras/ArrayCamera)
- [Camera](https://threejs.org/docs/#api/cameras/Camera)

But for now, we'll stick with the PerspectiveCamera.

`PerspectiveCamera(fov, aspect, near, far)`

- `near`: The near clipping plane. Nothing is rendered before this distance.
- `far`: The far clipping plane. Nothing is rendered after this distance.
- `fov`: The field of view.
- `aspect`: The aspect ratio.

**Want to render at a different resolution?** 
> Use the `setSize` method. If you wish to keep the size of your app but render
it at a lower resolution, you can do so by calling setSize with false as
updateStyle (the third argument). For example, `setSize(window.innerWidth/2,
window.innerHeight/2, false)` will render your app at half resolution, given
that your `<canvas>` has 100% width and height.

Let's add a cube to our scene.
````js {linenos=false}
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
````

> By default, when we call scene.add(), the thing we add will be added to the
coordinates (0,0,0). This would cause both the camera and the cube to be inside
each other. To avoid this, we simply move the camera out a bit.

**Rendering the scene**

> If you copied the code from above into the HTML file we created earlier, you
wouldn't be able to see anything. This is because we're not actually rendering
anything yet. For that, we need what's called a render or animate loop.




### Resources

- [Using Three.js to Add 3D Elements to your Websites](https://www.elegantthemes.com/blog/design/using-three-js-to-add-3d-elements-to-your-websites)