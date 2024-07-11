window.addEventListener('resize', onWindowResize, false);

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
    -1, 1, 1, -1, 0.1, 10
);
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight, false);
//renderer.setPixelRatio(window.devicePixelRatio * 2.);
//document.body.appendChild(renderer.domElement);
const canvasContainer = document.getElementById('canvasContainer');
canvasContainer.appendChild(renderer.domElement);
//document.getElementById('container').appendChild(renderer.domElement);

const shaderConstructor = new ShaderConstructor(renderer, scene, camera);
shaderConstructor.init(nodes, connections);

let uTime = 0.0;

function animate() {
    requestAnimationFrame(animate);

    uTime += 0.1;
    shaderConstructor.shaders.forEach(shader => {
        if (shader.uniforms.uTime) {
            shader.uniforms.uTime.value = uTime;
        }
    });
    shaderConstructor.render();
}
animate();