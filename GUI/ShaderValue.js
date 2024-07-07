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
    