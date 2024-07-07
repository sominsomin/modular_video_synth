class kaleidoscope extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "kaleidoscope";

        this.nSides = new ShaderValue(this.id, 0, 10.0, 0.01, 0.0, 'nSides'); // n_sides
        this.xOff = new ShaderValue(this.id, -1, 1.0, 0.01, 0.0, 'xOff'); // n_sides
        this.yOff = new ShaderValue(this.id, -1, 1.0, 0.01, 0.0, 'yOff'); // n_sides
    }

    shader_values() {
        return [
            this.nSides,
            this.xOff,
            this.yOff,
        ]
    }
}

class pixelate extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "pixelate";

        this.pixelX = new ShaderValue(this.id, 1, 1000.0, 0.01, 1000.0, 'pixelX'); // pixelX
        this.pixelY = new ShaderValue(this.id, 1, 1000.0, 0.01, 1000.0, 'pixelY'); // pixelY
        
    }

    shader_values() {
        return [
            this.pixelX,
            this.pixelY,
        ]
    }
}

class color extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "color";

        this.r = new ShaderValue(this.id, 0, 1.0, 0.01, .0, 'r'); // pixelX
        this.g = new ShaderValue(this.id, 0, 1.0, 0.01, 1.0, 'g'); // pixelX
        this.b = new ShaderValue(this.id, 0, 1.0, 0.01, 0.0, 'b'); // pixelY
        this.amp = new ShaderValue(this.id, 0, 2.0, 0.01, 1.0, 'amp'); // pixelY
        
    }

    shader_values() {
        return [
            this.r,
            this.g,
            this.b,
            this.amp,
        ]
    }
}

class rotate2d extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "rotate2d";

        this.angle = new ShaderValue(this.id, 0, 1.0, 0.01, .0, 'angle');        
    }

    shader_values() {
        return [
            this.angle,
        ]
    }
}


class scale_fract extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "scale_fract";

        this.scale_fract = new ShaderValue(this.id, 0, 10.0, 0.01, 1.0, 'scale_fract');        
    }

    shader_values() {
        return [
            this.scale_fract,
        ]
    }
}


class space_warp extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "space_warp";

        this.space_warp = new ShaderValue(this.id, 0, 5.0, 0.01, 0.0, 'space_warp');        
    }

    shader_values() {
        return [
            this.space_warp ,
        ]
    }
}

class translate extends ModuleBaseClass{
    constructor(id) {
        super();
        this.id = id;
        this.name = "translate";

        this.scale = new ShaderValue(this.id, 0.01, 10.0, 0.01, 1.0, 'scale');
        this.scale_fract = new ShaderValue(this.id, 0.01, 10.0, 0.01, 1.0, 'scale_fract');
        this.xOff = new ShaderValue(this.id, -1., 1.0, 0.01, 0.0, 'xOff');
        this.yOff = new ShaderValue(this.id, -1., 1.0, 0.01, 0.0, 'yOff');
        //this.r = new ShaderValue(this.id, 0., 1.0, 0.01, 0.0, 'r');   
    }

    shader_values() {
        return [
            this.scale,
            this.scale_fract,
            this.xOff,
            this.yOff,
            //this.r,
        ]
    }
}