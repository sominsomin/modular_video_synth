var container = document.getElementById('container');
var moduleTypeDropdown = document.getElementById('moduleType');

let class_resolver = {
    'Oscillator': Oscillator,
    'polyShape': PolyShape,
    'noise': Noise,
    'polyShapeStatic': PolyShapeStatic,
    'constant': Constant,
    'kaleidoscope': kaleidoscope,
    'pixelate': pixelate,
    'rotate': rotate2d,
    'color': color,
    'output': Output,
    'scale_fract': scale_fract,
    'space_warp': space_warp,
    'translate': translate,
}

let module_resolve = {
    'Oscillator': oscillatorModule,
    'polyShape': polyShapeModule,
    'noise': noiseModule,
    'polyShapeStatic': polyShapeStaticModule,
    'constant': constantModule,
    'kaleidoscope': kaleidoscopeModule,
    'pixelate': pixelateModule,
    'rotate': rotateModule,
    'color': colorModule,
    'output': outputModule,
    'scale_fract': scaleFractModule,
    'space_warp': spaceWarpModule,
    'translate': translateModule,
}

class GUIModule {
    constructor(shader_class, x, y) {
        this.i = shader_class.i;
        this.shader_class = shader_class;

        let module = createModule(x, y, shader_class);

        this.module = module;
    }

    get_shader_values_dict() {
        let shader_values = this.shader_class.shader_values();

        let shader_values_dict = {}
        for (let i = 0; i < shader_values.length; i++) {
            shader_values_dict[shader_values[i].display_name] = shader_values[i].value;
        }

        return shader_values_dict;
    }

    delete() {
        cleanModules(this.module, this.shader_class);
    }
}

class GUIConnection {
    constructor(output, input, id) {
        let [line, xIcon] = createLineDiv(output, input);
        this.line = line;
        this.xIcon = xIcon;
        this.line.position();

        this.id = id;
        this.output = output;
        this.input = input;

        this.xIcon.addEventListener('click', function() {
            filterConnections(id);
            line.remove();
            xIcon.remove();
            shaderConstructor.init(nodes, connections); 
        });
    }

    delete() {
        this.line.remove();
        this.xIcon.remove();
    }   

    update_position() {
        let [x, y] = calcXIconPosition(this.input, this.output);
        this.xIcon.style.left = x + 'px';
        this.xIcon.style.top = y + 'px';
        this.line.position();
    }
}

let currentScale = 1;

function updateScale() {
    document.getElementById('container').style.transform = 'scale(' + currentScale + ')';
    updateConnectionPositions();
}

function decreaseScale() {
    currentScale -= 0.1;
    if (currentScale < 0.1) {
        currentScale = 0.1;
    }
    updateScale();
}

function increaseScale() {
    currentScale += 0.1;
    updateScale();
}

let hidden = false;

function hideModules() {
    console.log('hide');
    nodes.forEach(node => {
        if (hidden === false) {
            if (node.guiModule !== null) {
                node.guiModule.module.style.display = 'none';
            }
        }
        else if (hidden === true) {
            if (node.guiModule !== null) {
                node.guiModule.module.style.display = 'initial';
            }
        }
    });
    connections.forEach(connection => {
        if (hidden === false) {
            connection.guiConnection.line.hide('none');
            connection.guiConnection.xIcon.style.display = 'none';
        }
        else if (hidden === true) {
            connection.guiConnection.line.show('draw');
            connection.guiConnection.xIcon.style.display = 'initial';
            connection.guiConnection.update_position();       
        }
    });

    if (hidden === true) {hidden = false;}
    else if (hidden === false) {hidden = true;}
}

function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);
}

let transparent = true;
let module_color;

function setModuleTransparency() {
    nodes.forEach(node => {
        node.guiModule.module.style.backgroundColor = module_color;
    });
}

function changeModuleTransparency() {
    if (transparent === true) {
        module_color = "rgba(255, 255, 255, 0.9)";
        transparent = false;
    }
    else {
        module_color = "rgba(255, 255, 255, 0.2)";
        transparent = true;
    }

    setModuleTransparency();
}

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    let dropdown_text = moduleTypeDropdown.options[moduleTypeDropdown.selectedIndex].text;
    createNode(dropdown_text, event.clientX, event.clientY)
    shaderConstructor.init(nodes, connections);
    setModuleTransparency();
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 46) { // Del key
        var selectedModule = document.querySelector('.module');
        if (selectedModule) {
            container.removeChild(selectedModule);
        }
    }
});