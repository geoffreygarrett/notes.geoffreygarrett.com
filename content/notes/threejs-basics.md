---
title: three.js Library
comments: false
tags:
- frontend
- javascript
- library
---

````html {linenostart=1, linenos=false, title="index.html"}
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>My first three.js app</title>
    <style> body {
        margin: 0;
    } </style>
</head>
<body>
<script src="js/three.js"></script>
<script>
    // Our Javascript will go here.
</script>
</body>
````

The main components of any `three.js` app are the scene, the camera, and the
renderer. These are setup as demonstrated in the following code:

````javascript {title="main.js", linenos=false}
// 1. Create a scene
var scene = new THREE.Scene();

// 2. Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 3. Create a render
var renderer = new THREE.WebGLRenderer();

// 4. Set the size of the render
renderer.setSize(window.innerWidth, window.innerHeight);
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