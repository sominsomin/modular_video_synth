var selectionMode = false;
var selectedOutput = null;
var selectedShaderClass = null;


function filterConnections(id) {
    let connections_filtered = [];

    for (let j=0; j < connections.length; j++) {
        if (connections[j].id !== id) {
            connections_filtered.push(connections[j]);
        }
    }

    connections = connections_filtered;
}

function cleanConnections() {
    let connections_filtered = [];

    let node_ids = [];
    for (let i =0; i < nodes.length; i++) {
        node_ids.push(nodes[i].id);
    }

    for (let j=0; j < connections.length; j++) {
        if (node_ids.includes(connections[j].fromNode) && node_ids.includes(connections[j].toNode)) {
            connections_filtered.push(connections[j]);
        }
        else {
            connections[j].guiConnection.delete();
        }
    }
    connections = connections_filtered;
}

function cleanModules(module, shader_class) {
    nodes_filtered = [];

    for (let i =0; i < nodes.length; i++) {
        if (nodes[i].id !== shader_class.id) {
            nodes_filtered.push(nodes[i]);
        }
    }

    nodes = nodes_filtered;
    container.removeChild(module);
    cleanConnections();
    shaderConstructor.init(nodes, connections);
}

function createCloseButton(module, shader_class) {
    var closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', function () {
        cleanModules(module, shader_class);
    });

    return closeBtn;
}

function createSliders(module, shader_class) {
    var sliders_wrapper = document.createElement('div');
    sliders_wrapper.className = 'module_sliders_wrapper';
    let shader_values = shader_class.shader_values();
    for (let i = 0; i < shader_values.length; i++) {
        let shader_slider = createShaderValueSlider(shader_values[i], sliders_wrapper);
        shader_values[i].slider = shader_slider;
    }

    return sliders_wrapper;
}

function create_randomize_buttons(module, shader_class) {
    let shader_values = shader_class.shader_values();
    var randomize_values_button = document.createElement("button");
    randomize_values_button.className = "top_div_button";
    randomize_values_button.textContent = 'randomize values';
    randomize_values_button.onclick = function () {
        for (let i = 0; i < shader_values.length; i++) {
            shader_values[i].randomize_value();
        }
    };

    if (shader_class.hasOwnProperty('r')) {
        var randomize_color_button = document.createElement("button");
        randomize_color_button.className = "top_div_button";
        randomize_color_button.textContent = 'randomize color';
        randomize_color_button.onclick = function () {
            shader_class.r.randomize_value();
            shader_class.g.randomize_value();
            shader_class.b.randomize_value();
        };

        return [randomize_values_button, randomize_color_button];
    }

    return [randomize_values_button];
}

function updateConnectionPositions() {
    connections.forEach(element => {
        element.guiConnection.update_position();
    });
}

function makeDraggable(module) {
    let isDragging = false;

    var offsetX, offsetY;
    var topRegionHeight = 10;

    module.addEventListener('mousedown', function (event) {
        // if (event.offsetY < topRegionHeight) {
        isDragging = true;
        isDrawing = false;
        offsetX = event.clientX - module.getBoundingClientRect().left;
        offsetY = event.clientY - module.getBoundingClientRect().top;
        // }
        updateConnectionPositions();
    });

    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            module.style.left = (event.clientX - offsetX) + 'px';
            module.style.top = (event.clientY - offsetY) + 'px';
        }
        updateConnectionPositions();
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
        updateConnectionPositions();
    });
}

function createInputOutput(module, shader_class) {
    var output = document.createElement('div');
    output.className = 'output';

    var input = document.createElement('div');
    input.className = 'input';

    output.addEventListener('click', (e) => {
        selectionMode = true;
        selectedOutput = output;
        selectedShaderClass = shader_class;
    });

    input.addEventListener('click', (e) => {
        let endX = e.clientX;
        let endY = e.clientY;

        if (selectionMode == true) {
            let input_id = selectedShaderClass.id;
            let output_id = shader_class.id;
            createConnection(output_id, input_id);

            selectionMode = false;
            selectedOutput = null;
            selectedShaderClass = null;

        }
    });

    return [input, output];
}

function createModule(x, y, shader_class) {
    var module = document.createElement('div');
    module.className = 'module';
    module.style.left = x + 'px';
    module.style.top = y + 'px';

    var top_div = document.createElement('div');
    top_div.className = 'top_module';

    var module_name = document.createElement('div');
    module_name.className = 'module_title';
    module_name.textContent = shader_class.name;

    var divider = document.createElement('div');
    divider.className = 'divider';

    top_div.appendChild(module_name);
    top_div.appendChild(divider);

    if (shader_class.name != 'output') {
        let randomize_values_buttons = create_randomize_buttons(module, shader_class);
        randomize_values_buttons.forEach(button => {
            top_div.appendChild(button);
        });
    }

    if (shader_class.name != 'output') {
        let closeBtn = createCloseButton(module, shader_class);
        top_div.appendChild(closeBtn);
    }

    module.appendChild(top_div);

    let sliders_wrapper = createSliders(module, shader_class);
    module.appendChild(sliders_wrapper);

    let [input, output] = createInputOutput(module, shader_class);
    module.appendChild(input);
    if (shader_class.name != 'output') {
        module.appendChild(output);
    }
    container.appendChild(module);

    makeDraggable(module); 

    return module;
}

function createShaderValueSlider(shader_value, module) {
    const slider_wrapper = document.createElement('div');
    slider_wrapper.classList.add('slider_wrapper');
    slider_wrapper.id = 'slider_wrapper';

    const nameText = document.createElement('span');
    nameText.textContent = shader_value.display_name;
    nameText.classList.add('slider-name');

    const input = document.createElement('input');
    input.classList.add('range-slider');
    input.setAttribute('type', 'range');
    input.setAttribute('id', shader_value.name);
    input.setAttribute('min', shader_value.min_value);
    input.setAttribute('max', shader_value.max_value);
    input.setAttribute('step', shader_value.step_size);
    input.setAttribute('value', shader_value.default_value);

    const valueDisplay = document.createElement('span');
    valueDisplay.textContent = shader_value.default_value;
    valueDisplay.classList.add('slider-value-display');

    slider_wrapper.appendChild(nameText);
    slider_wrapper.appendChild(input);
    slider_wrapper.appendChild(valueDisplay);

    const lfo_dot = document.createElement('div');
    lfo_dot.classList.add('lfo-dot');
    slider_wrapper.appendChild(lfo_dot);

    module.appendChild(slider_wrapper);

    input.addEventListener('input', function (event) {
        shader_value.updateValue(input.value);
        valueDisplay.textContent = input.value;
        event.stopPropagation();

    });
    input.addEventListener('dblclick', function () {
        shader_value.updateValue(input.defaultValue);
        valueDisplay.textContent = input.value;
    });
    input.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
    input.addEventListener('mousemove', (e) => {
        e.stopPropagation();
    });
    input.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });

    valueDisplay.addEventListener('dblclick', function () {
        const editableInput = document.createElement('input');
        editableInput.type = 'number';
        editableInput.value = valueDisplay.textContent;
        editableInput.classList.add('slider-value-input');

        slider_wrapper.replaceChild(editableInput, valueDisplay);

        editableInput.addEventListener('blur', function () {
            const newValue = parseFloat(editableInput.value);
            // if (!isNaN(newValue) && newValue >= shader_value.min_value && newValue <= shader_value.max_value) {
            if (!isNaN(newValue)) {
                input.value = newValue;
                shader_value.value = newValue;
                shader_value.updateGLParameter();
                valueDisplay.textContent = newValue;
            }
            slider_wrapper.replaceChild(valueDisplay, editableInput);
        });

        editableInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                editableInput.blur();
            } else if (event.key === 'Escape') {
                slider_wrapper.replaceChild(valueDisplay, editableInput);
            }
        });

        editableInput.focus();
    });

    lfo_dot.addEventListener('dblclick', (event) => {
        console.log('');
        showContextMenu(event);
        event.stopPropagation();
    });

    lfo_dot.addEventListener('mouseleave', () => {
        //hideContextMenu();
    });

    return slider_wrapper;
}

function showContextMenu(event) {
    const contextMenu = document.createElement('div');
    contextMenu.classList.add('context-menu');
    contextMenu.id = 'context-menu';

    const lfo_amp = document.createElement('input');
    lfo_amp.classList.add('range-slider');
    lfo_amp.setAttribute('type', 'range');
    lfo_amp.setAttribute('id', '');
    lfo_amp.setAttribute('min', '0');
    lfo_amp.setAttribute('max', '1.');
    lfo_amp.setAttribute('step', '0.1');
    lfo_amp.setAttribute('value', '0.0');
    
    const lfo_freq = document.createElement('input');
    lfo_freq.classList.add('range-slider');
    lfo_freq.setAttribute('type', 'range');
    lfo_freq.setAttribute('id', '');
    lfo_freq.setAttribute('min', '0');
    lfo_freq.setAttribute('max', '1.');
    lfo_freq.setAttribute('step', '0.1');
    lfo_freq.setAttribute('value', '0.0');
    
    const waveform = document.createElement('input');
    waveform.classList.add('range-slider');
    waveform.setAttribute('type', 'range');
    waveform.setAttribute('id', '');
    waveform.setAttribute('min', '0');
    waveform.setAttribute('max', '1.');
    waveform.setAttribute('step', '0.1');
    waveform.setAttribute('value', '0.0');
    
    contextMenu.appendChild(lfo_amp);
    contextMenu.appendChild(lfo_freq);
    contextMenu.appendChild(waveform);

    document.body.appendChild(contextMenu);

    contextMenu.style.display = 'block';
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;

    document.addEventListener('click', hideContextMenu);
}

function hideContextMenu() {
    const contextMenu = document.getElementById('context-menu');
    if (contextMenu) {
        contextMenu.remove();
    }
    document.removeEventListener('click', hideContextMenu);
}

function adjustValue(option) {
    alert(`You selected: ${option}`);
    hideContextMenu();
}