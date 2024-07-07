class Oscillator extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "oscillator";

        this.p = new ShaderValue(this.id, 0.0, 1.0, 0.01, 0.0, 'p'); // phase
        this.f = new ShaderValue(this.id, 0.001, 50.0, 0.01, 1.0, 'f'); // frequency
        this.fm = new ShaderValue(this.id, 0.0, 10.0, 0.01, 3.0, 'fm'); // frequency modulation
        this.s = new ShaderValue(this.id, -1.0, 1.0, 0.01, 0.1, 's'); // speed
        this.rot = new ShaderValue(this.id, 0.0, 3.6, 0.01, 0.0, 'rot'); // r
        this.amp = new ShaderValue(this.id, 0.0, 2.0, 0.01, 1.0, 'amp'); // amplitude

        this.r = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'r');
        this.g = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'g');
        this.b = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'b');
        
        this.waveform =  new ShaderValue(this.id, 1.0, 3.0, 1.0, 0.0, 'waveform');
        this.offset = new ShaderValue(this.id, 0.0, 1.0, 0.01, 0.0, 'offset');
        this.scale_fract = new ShaderValue(this.id, 0.0, 10.0, 0.01, 1.0, 'scale_fract');
    }

    shader_values() {
        return [
            this.p,
            this.f,
            this.fm,
            this.s,
            this.rot,
            this.amp,
            this.r,
            this.g,
            this.b,
            this.waveform,
            this.offset,
            this.scale_fract,
        ]
    }
}

class PolyShape extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "polyShape";

        this.p = new ShaderValue(this.id, 0.0, 1000.0, 0.01, 0.0, 'p'); // phase
        this.f = new ShaderValue(this.id, 0.001, 50.0, 0.01, 1.0, 'f'); // frequency
        this.fm = new ShaderValue(this.id, 0.0, 10.0, 0.01, 3.0, 'fm'); // frequency modulation
        this.s = new ShaderValue(this.id, -1.0, 1.0, 0.01, 0.1, 's'); // speed
        this.rot = new ShaderValue(this.id, 0.0, 1.0, 0.01, 0.0, 'rot'); // rot
        this.amp = new ShaderValue(this.id, 0.0, 2.0, 0.01, 1.0, 'amp'); // amplitude
        this.r = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'r');
        this.g = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'g');
        this.b = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'b');
        this.waveform =  new ShaderValue(this.id, 1.0, 3.0, 1.0, 0.0, 'waveform');
        this.offset = new ShaderValue(this.id, 0.0, 1.0, 0.01, 0.0, 'offset');
        this.scale_fract = new ShaderValue(this.id, 0.0, 10.0, 0.01, 1.0, 'scale_fract');
        this.n =  new ShaderValue(this.id, 1.0, 100.0, 1.0, 3.0, 'n');
    }

    shader_values() {
        return [
            this.p,
            this.f,
            this.fm,
            this.s,
            this.rot,
            this.amp,
            this.r,
            this.g,
            this.b,
            this.waveform,
            this.offset,
            this.scale_fract,
            this.n,
        ]
    }
}

class Noise extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "noise";

        this.p = new ShaderValue(this.id, 0.0, 10.0, 1.0, 0.0, 'p'); // phase
        this.f = new ShaderValue(this.id, 0.001, 100.0, 0.01, 3., 'f'); // frequency
        this.fm = new ShaderValue(this.id, 0.0, 10.0, 0.01, 3.0, 'fm'); // frequency modulation
        this.s = new ShaderValue(this.id, -1.0, 1.0, 0.01, 0.1, 's'); // speed
        this.rot = new ShaderValue(this.id, 0.0, 3.6, 0.01, 0.0, 'rot'); // r
        this.amp = new ShaderValue(this.id, 0.0, 2.0, 0.01, 1.0, 'amp'); // amplitude
        this.r = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'r');
        this.g = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'g');
        this.b = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'b');
        this.waveform =  new ShaderValue(this.id, 1.0, 3.0, 1.0, 0.0, 'waveform');
        this.offset = new ShaderValue(this.id, 0.0, 1.0, 0.01, 0.0, 'offset');
        this.scale_fract = new ShaderValue(this.id, 0.0, 10.0, 0.01, 1.0, 'scale_fract');
    }

    shader_values() {
        return [
            this.p,
            this.f,
            this.fm,
            this.s,
            this.rot,
            this.amp,
            this.r,
            this.g,
            this.b,
            this.waveform,
            this.offset,
            this.scale_fract,
        ]
    }
}

class PolyShapeStatic extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "polyShapeStatic";

        this.p = new ShaderValue(this.id, 0.0, 1.0, 0.01, 0.0, 'p'); // phase
        this.f = new ShaderValue(this.id, 0.001, 10.0, 0.01, 3., 'f'); // frequency
        this.fm = new ShaderValue(this.id, 0.0, 10.0, 0.01, 3.0, 'fm'); // frequency modulation
        this.rot = new ShaderValue(this.id, 0.0, 3.6, 0.01, 0.0, 'rot'); // r
        this.amp = new ShaderValue(this.id, 0.0, 2.0, 0.01, 1.0, 'amp'); // amplitude
        this.r = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'r');
        this.g = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'g');
        this.b = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'b');
        this.offset = new ShaderValue(this.id, 0.0, 1.0, 0.01, 0.0, 'offset');
        this.scale_fract = new ShaderValue(this.id, 0.0, 10.0, 0.01, 1.0, 'scale_fract');
        this.n =  new ShaderValue(this.id, 1.0, 100.0, 1.0, 1.0, 'n');
    }

    shader_values() {
        return [
            this.p,
            this.f,
            this.fm,
            this.rot,
            this.amp,
            this.r,
            this.g,
            this.b,
            this.offset,
            this.scale_fract,
            this.n,
        ]
    }
}

class Constant extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "constant";

        this.amp = new ShaderValue(this.id, 0.0, 2.0, 0.01, 1.0, 'amp'); // amplitude
        this.r = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'r');
        this.g = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'g');
        this.b = new ShaderValue(this.id, 0.0, 1.0, 0.01, 1.0, 'b');
        this.scale_fract = new ShaderValue(this.id, 0.0, 10.0, 0.01, 1.0, 'scale_fract');
    }

    shader_values() {
        return [
            this.amp,
            this.r,
            this.g,
            this.b,
            this.scale_fract,
        ]
    }
}

class Output {
    constructor (id) {
        this.id = id;
        this.name = 'output';
    }

    shader_values() {
        return [];
    }
}