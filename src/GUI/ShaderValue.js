function getRandomFloat(min, max, decimals) {
    min = parseFloat(min);
    max = parseFloat(max);

    const str = (Math.random() * (max - min) + min).toFixed(
        decimals,
    );

    return parseFloat(str);
}

class types {
    constructor() {
        this.generator = 'generator';
        this.fx = 'fx';
        this.output = 'output';
    }
}

display_texts = {
    'p': 'phase of the oscillator/generator',
    'f': 'frequency of the oscillator/generator',
    'fm': 'frequency modulation strength',
    's': 'speed of the oscillator/generator',
    'rot': 'rotation angle',
    'amp': 'amplitude of the oscillator/generator/input',
    'r': 'r color value',
    'g': 'g color value',
    'b': 'b color value',
    'waveform': 'waveform of the oscillator/generator',
    'offset': 'phase offset of the rgb value of the oscillator/generator',
    'scale': 'scale the oscillator/generator/input',
    'scale_fract': 'scale the oscillator/generator with repeating tile effect',
    'n': 'number of corners of the polygon shape',
    'xOff': 'offset in x-direction',
    'yOff': 'offset in y-direction',
    'pixelX': 'pixelation in x-direction',
    'pixelY': 'pixelation in y-direction',
    'space_warp': 'warping xy coordinates of the input',
    'nSides': 'number of sides',
}

class ShaderValue {
    slider = null;

    constructor(
        id = 'null',
        min_value = 0.0,
        max_value = 0.0,
        step_size = 0.01,
        default_value = 0.0,
        display_name = '',
        shader_id = '',
        display_text = '',
        //value = 0.,
    ) {
        this.id = id;
        this.default_value = parseFloat(default_value);
        this.min_value = parseFloat(min_value);
        this.max_value = parseFloat(max_value);
        this.step_size = parseFloat(step_size);
        this.display_name = display_name;
        this.shader_id = shader_id;
        this.value = parseFloat(default_value);
        this.display_text = display_texts[display_name];
    }

    randomize_value(range = null) {
        if (this.display_name != 'amp') {
            this.value = String(getRandomFloat(this.min_value, this.max_value, 2));
            this.updateValue(this.value);
        }
    }

    updateValue(value) {
        this.value = value;

        this.updateGLParameter();

        let input = this.slider.querySelector('input[type="range"]');
        input.value = value;
        let valueDisplay = this.slider.querySelector('.slider-value-display');;
        valueDisplay.textContent = value;
    }   

    updateGLParameter() {
        for (let i=0; i < nodes.length; i++) {
            if (this.id == nodes[i].id) {
                shaderConstructor.shaders[i].uniforms[this.display_name].value = this.value;
                console.log(i);
            }
        }
    }
}
