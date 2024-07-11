function generateBlendShader(numTextures) {
    let uniforms = '';
    let blendCode = '';

    for (let i = 0; i < numTextures; i++) {
        uniforms += `uniform sampler2D texture${i};\n`;
        blendCode += `vec4 color${i} = texture2D(texture${i}, vUv);\n`;
        if (i === 0) {
            blendCode += 'vec4 finalColor = color0;\n';
        } else {
            blendCode += `finalColor += color${i};\n`;
        }
    }

    const fragmentShader = `
        varying vec2 vUv;

        ${uniforms}

        void main() {
            ${blendCode}
            gl_FragColor = finalColor / ${numTextures.toFixed(1)}; // Average to avoid overflow
        }
    `;

    return { vertexShader, fragmentShader };
}


class ShaderConstructor {
    constructor(renderer, scene, camera) {
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.shaders = [];
        this.renderTargets = [];
        this.modules = [];
        this.connections = [];
        this.output = [];
    }

    init(nodes, connections, output=[]) {
        this.shaders = [];
        this.renderTargets = [];
        this.nodes = nodes;
        this.connections = connections;
        this.output = output;

        nodes.forEach(node => {
            const shaderMaterial = this.createShader(node.module.vertexShader,node.module.fragmentShader, node.module.uniforms);
            const renderTarget = this.createRenderTarget();
            this.shaders.push(shaderMaterial);
            this.renderTargets.push(renderTarget);
        });

        this.emptyTexture = this.createEmptyTexture();
    }

    createShader(vertexShader, fragmentShader, uniforms) {
        const iResolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: uniforms,
        });
        //shaderMaterial.uniforms.iResolution.value = iResolution;
        return shaderMaterial;
    }

    createRenderTarget() {
        const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
        return renderTarget;
    }

    createMesh(shaderMaterial) {
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        return mesh;
    }

    renderToTarget(shaderMaterial, renderTarget) {
        const scene = new THREE.Scene();
        const mesh = this.createMesh(shaderMaterial);
        scene.add(mesh);
        this.renderer.setRenderTarget(renderTarget);
        this.renderer.render(scene, this.camera);
        this.renderer.setRenderTarget(null);
    }

    createEmptyTexture() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const numberOfChannels = 4;                    
        const dataSize = width * height * numberOfChannels;
        const data = new Uint8Array(dataSize);
        const emptyTexture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
        emptyTexture.needsUpdate = true;

        return emptyTexture;
    }

    getIndexFromId(id) {
        let index_for_id = null;
        this.nodes.forEach((node, index) => {
            if (node.id === id) {
                index_for_id = index;
            }
        });

        return index_for_id;
    }

    getRenderIds() {
        let renderIds = [];
        for (let j = 0; j < this.connections.length; j++) {
            let connection = this.connections[j];
            if (connection.toNode === this.nodes[0].id) {
                let index = this.getIndexFromId(connection.fromNode);
                renderIds.push(index);
            }
        }

        return renderIds;
    }

    setInputTexturesAndRenderTargets() {
        for (let i = 0; i < this.shaders.length; i++) {
            const currentShader = this.shaders[i];
            const currentRenderTarget = this.renderTargets[i];

            // Set input texture if there is a connection, otherwise empty texture
            let connected = false;
            for (let j = 0; j < this.connections.length; j++) {
                let connection = this.connections[j];
                if (connection.toNode === this.nodes[i].id) {
                    let input_node_id = this.getIndexFromId(connection.fromNode);
                    const inputTexture = this.renderTargets[input_node_id].texture;
                    currentShader.uniforms.tDiffuse.value = inputTexture;
                    connected = true;
                    break;
                }
            }
            if (!connected) {
                currentShader.uniforms.tDiffuse.value = this.emptyTexture;
            }

            this.renderToTarget(currentShader, currentRenderTarget);
        }
    }

    render() {
        this.setInputTexturesAndRenderTargets();

        // Display the final render target on screen
        const finalScene = new THREE.Scene();
        //let render_id = this.renderTargets.length - 1;
        // let render_id = 0;
        // const finalMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: this.renderTargets[render_id].texture }));
        // finalScene.add(finalMesh);

        let renderTargetIDs = this.getRenderIds();

        const numTextures = renderTargetIDs.length;

        const { vertexShader, fragmentShader } = generateBlendShader(numTextures);
    
        const blendUniforms = {};
        for (let i = 0; i < numTextures; i++) {
            blendUniforms[`texture${i}`] = { value: this.renderTargets[renderTargetIDs[i]].texture };
        }
    
        const blendShaderMaterial = new THREE.ShaderMaterial({
            uniforms: blendUniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });
    
        const finalMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blendShaderMaterial);

        finalScene.add(finalMesh);
        this.renderer.render(finalScene, this.camera);
    }
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    shaderConstructor.renderer.setSize(width, height);
    //shaderConstructor.init(nodes, connections);

    // shaderConstructor.shaders.forEach(shader => {
    //     if (shader.uniforms.iResolution) {
    //         shader.uniforms.iResolution.value.set(width, height, 1);
    //     }
    // });
    // Update the iResolution uniform
    //uniforms.iResolution.value.set(width, height, 1);
}
