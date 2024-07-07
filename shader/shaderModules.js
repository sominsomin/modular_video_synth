const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShaderTemplate = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;

void main() {
    vec4 color1 = texture2D(tDiffuse, vUv);
    gl_FragColor = color1;
}
`;

const fragmentShaderWithFeedback = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform sampler2D tFeedback; // Feedback texture
uniform float uTime;

void main() {
    vec4 color1 = texture2D(tDiffuse, vUv);
    vec4 color2 = texture2D(tFeedback, vUv);
    gl_FragColor = color1 + 2.*color2;
    //gl_FragColor = mix(color1, color2, 0.5); // Mix previous pass and feedback
}
`;


const fragmentShaderOscillator = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float waveform;
uniform float p;
uniform float f;
uniform float fm;
uniform float s;
uniform float rot;
uniform float amp;
uniform float scale_fract;
uniform float r;
uniform float g;
uniform float b;

uniform float offset;

vec2 rotate2d(vec2 uv, float angle) {
    return vec2(sin(angle) * uv.x - cos(angle) * uv.y, cos(angle) * uv.x + sin(angle) * uv.y);
}

float get_phase(float p, float f, float s, float x, float time) {
    return (f * x + s * time + p);
}

float sine_shape(float x) {
    return 0.5 * sin(x * 2. * 3.14) + 0.5;
}

float ramp_shape(float x) {
    return mod(x, 1.);
}

float rect_shape(float x, float pw) {
    return step(ramp_shape(x), pw);
}

float apply_shape(float phase, float waveform) {
    if (waveform <= 1.0 ) {
        return sine_shape(phase);
    }
    else if (waveform <= 2.0 ) {
        return ramp_shape(phase);
    }
    else {
        return rect_shape(phase, 0.5);
    }

    return sine_shape(phase);
}

float oscillator(float p, float f, float s, float x, float time, float waveform, float offset) {
    float phase = get_phase(p, f, s, x + offset/f, time);

    return apply_shape(phase, waveform);
}

void main() {
    vec2 uv = vUv.xy;
    vec4 color1 = texture2D(tDiffuse, vUv);
    uv = mod(scale_fract * vUv - (scale_fract - 1.) / 2., 1.);
    uv = rotate2d(uv, rot);
    vec3 f_fm =  vec3(f) + color1.rgb * fm; 
    float r_ = oscillator(p, f_fm.r, s, uv.x, uTime, waveform, -offset);
    float g_ = oscillator(p, f_fm.g, s, uv.x, uTime, waveform, 0.0);
    float b_ = oscillator(p, f_fm.b, s, uv.x, uTime, waveform, +offset);
    gl_FragColor = vec4(vec3(r_, g_, b_) * amp * vec3(r, g, b), 1.0);
}
`;

const fragmentShaderRotate = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float angle;

vec2 rotate2d(vec2 uv, float angle) {
    return vec2(sin(angle) * uv.x - cos(angle) * uv.y, cos(angle) * uv.x + sin(angle) * uv.y);
}

void main() {
    vec2 uv = vUv - vec2(0.5, 0.5);
    vec4 color1 = texture2D(tDiffuse, rotate2d(uv, angle));
    gl_FragColor = color1;
}
`;


const fragmentShaderKaleidoscope = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float nSides;
uniform float xOff;
uniform float yOff;

float PI = 3.14;
float TWO_PI = 2. * 3.14;

vec2 kaleidoscope(vec2 uv, float nSides) {
    uv = uv + vec2(0.5, 0.5);
    if(nSides == 0.0) {
        return uv;
    } else {
        vec2 st = uv;
        st -= 0.5;
        float r = length(st);
        float a = atan(st.x, st.y);
        a = mod(a, PI / nSides);
        a = abs(a - PI / nSides / 2.);

        return r * vec2(cos(a), sin(a));
    }
}

void main() {
    vec2 uv = vUv;
    uv = vUv - vec2(0.5, 0.5);
    uv = uv - vec2(xOff, yOff);
    vec4 color1 = texture2D(tDiffuse, kaleidoscope(uv, nSides));
    gl_FragColor = color1;
}
`;


const fragmentShaderPixelate = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float pixelX;
uniform float pixelY;

vec2 pixelate(vec2 uv, float pixelX, float pixelY) {
    vec2 xy = vec2(pixelX, pixelY);
    return (floor(uv * xy) + 0.5) / xy;
}

void main() {
    vec2 uv = vUv;
    uv = pixelate(uv, pixelX, pixelY);
    vec4 color1 = texture2D(tDiffuse, uv);
    gl_FragColor = color1;
}
`;

const fragmentShaderColor = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float r;
uniform float g;
uniform float b;
uniform float amp;

void main() {
    vec2 uv = vUv;
    vec4 color1 = texture2D(tDiffuse, uv);
    gl_FragColor = color1 * vec4(vec3(r, g, b) * amp, 1.);
}
`;

const fragmentShaderOutput = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output

void main() {
    vec2 uv = vUv;
    vec4 color1 = texture2D(tDiffuse, uv);
    gl_FragColor = color1;
}
`;

const fragmentShaderScaleFract = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float scale_fract;


void main() {
    //vec2 uv = mod(scale_fract * vUv - (scale_fract - 1.) / 2., 1.);
    vec2 uv = mod(scale_fract * vUv - (scale_fract - 1.) / 2., 1.);
    //vec2 uv = scale_fract * vUv;
    vec4 color1 = texture2D(tDiffuse, uv);
    gl_FragColor = color1;
}
`;

const fragmentShaderTranslate = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float scale;
uniform float scale_fract;
uniform float xOff;
uniform float yOff;
uniform float r;

vec2 rotate2d(vec2 uv, float angle) {
    return vec2(sin(angle) * uv.x - cos(angle) * uv.y, cos(angle) * uv.x + sin(angle) * uv.y);
}

void main() {
    vec2 uv = vUv;
    //uv = uv - vec2(0.5,0.5);
    //uv = rotate2d(uv, r);
    uv = mod(scale_fract * uv - (scale_fract - 1.) / 2., 1.);
    uv = scale * uv - (scale - 1.) / 2.;
    uv = uv + vec2(xOff, yOff);
    vec4 color1 = texture2D(tDiffuse, uv);
    gl_FragColor = color1;
}
`;

const fragmentShaderSpaceWarp = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float space_warp;

vec2 interpolate2d(vec2 func_1, vec2 func_2, float value) {
    vec2 uv_out = (1. - value) * func_1 + value * func_2;

    return uv_out;
}

float interpolate1d(float f_1, float f_2, float value) {
    float value_out = (1. - value) * f_1 + value * f_2;

    return value_out;
}

vec2 space_warp_fn(vec2 uv, float space_warp_) {
    if(space_warp_ < 1.) {
        vec2 func_1 = vec2(uv.x * sin(uv.y), uv.y * cos(uv.x));
        uv = interpolate2d(uv, func_1, space_warp_);
    } else if(space_warp_ < 2.) {
        vec2 func_2 = vec2(uv.x * sin(uv.y), uv.y * cos(uv.x));
        vec2 func_3 = vec2(sin(uv.x) * sin(uv.x), uv.y * cos(uv.x));
        uv = interpolate2d(func_2, func_3, space_warp_ - 1.);
    } else if(space_warp_ < 3.) {
        vec2 func_3 = vec2(sin(uv.x) * sin(uv.x), uv.y * cos(uv.x));
        //uv = vec2(0.5, 0.5) - uv;
        vec2 func_4 = vec2(tan(uv.x), uv.y * tan(uv.x));
        uv = interpolate2d(func_3, func_4, space_warp_ - 2.);

    } else if(space_warp_ < 4.) {
        uv = vec2(0.5, 0.5) - uv;
        uv = vec2(tan(uv.x), uv.y * tan(uv.x));

    }
    return uv;
}

void main() {
    vec2 uv = space_warp_fn(vUv, space_warp);
    vec4 color1 = texture2D(tDiffuse, uv);
    gl_FragColor = color1;
}
`;

const fragmentShaderPolyShape = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float waveform;
uniform float p;
uniform float f;
uniform float fm;
uniform float s;
uniform float rot;
uniform float amp;
uniform float r;
uniform float g;
uniform float b;
uniform float scale_fract;
uniform float n;

uniform float offset;


float PI = 3.14;

float length_(vec2 x) {
    return sqrt(x.x * x.x + x.y * x.y);
}

vec2 rotate2d(vec2 uv, float angle) {
    return vec2(sin(angle) * uv.x - cos(angle) * uv.y, cos(angle) * uv.x + sin(angle) * uv.y);
}

float sine_shape(float x) {
    return 0.5 * sin(x * 2. * 3.14) + 0.5;
}

float ramp_shape(float x) {
    return mod(x, 1.);
}

float rect_shape(float x, float pw) {
    return step(ramp_shape(x), pw);
}

float apply_shape(float phase, float waveform) {
    if (waveform <= 1.0 ) {
        return sine_shape(phase);
    }
    else if (waveform <= 2.0 ) {
        return ramp_shape(phase);
    }
    else {
        return rect_shape(phase, 0.5);
    }

    return sine_shape(phase);
}

float poly_shape_d(vec2 uv, float s, float N, float p) {
    // N= number of sides of the shape
    float d = 0.0;

    // Angle and radius from the current pixel
    float a = atan(uv.x, uv.y) + PI;
    float r = 2. * PI / float(N);

    // Adjust the angle 'a' to ensure proper rotation
    float rotation_angle;
    if (mod(N, 2.0) == 0.0) {
        rotation_angle = PI / float(N);
    } else {
        rotation_angle = PI / (2.0 * float(N));
        a -= rotation_angle;
    }
    
    // Shaping function that modulate the distance
    //d = mod(cos(floor(.5 + a / r) * r - a) * length_(uv + p) - s * uTime, 1.);
    d = cos(floor(.5 + a / r) * r - a) * length_(uv + p) - s * uTime;

    return d;
}

float poly_shape(vec2 uv, float p, float f, float s, float waveform, float r, float _offset, float n) {
    vec2 uv_center = uv;
    uv_center = rotate2d(uv_center, 2. * PI * rot);
    float d = poly_shape_d(f * uv_center, s, n, p);

    //return step(d, 0.5);
    return apply_shape(d + _offset, waveform);
}

void main() {
    vec2 uv = vUv;
    vec4 color1 = texture2D(tDiffuse, vUv);
    uv = mod(scale_fract * vUv - (scale_fract - 1.) / 2., 1.);
    //uv = rotate2d(uv, rot);
    uv = uv - vec2(0.5, 0.5);
    float n_ = ceil(n);
    vec3 f_fm =  vec3(f) + color1.rgb * fm; 
    float r_ = poly_shape(uv, p, f_fm.r, s, waveform, r, offset, n_);
    float g_ = poly_shape(uv, p, f_fm.g, s, waveform, r, 0.0, n_);
    float b_ = poly_shape(uv, p, f_fm.b, s, waveform, r, -offset, n_);
    vec4 osc = vec4(vec3(r_, g_, b_) * vec3(r, g, b) * amp, 1.0);
    gl_FragColor = osc;
}
`;

const fragmentShaderPolyShapeStatic = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float p;
uniform float f;
uniform float fm;
uniform float rot;
uniform float amp;
uniform float r;
uniform float g;
uniform float b;
uniform float scale_fract;
uniform float n;

uniform float offset;


float PI = 3.14;

float length_(vec2 x) {
    return sqrt(x.x * x.x + x.y * x.y);
}

vec2 rotate2d(vec2 uv, float angle) {
    return vec2(sin(angle) * uv.x - cos(angle) * uv.y, cos(angle) * uv.x + sin(angle) * uv.y);
}

float sine_shape(float x) {
    return 0.5 * sin(x * 2. * 3.14) + 0.5;
}

float ramp_shape(float x) {
    return mod(x, 1.);
}

float rect_shape(float x, float pw) {
    return step(ramp_shape(x), pw);
}

float apply_shape(float phase, float waveform) {
    if (waveform <= 1.0 ) {
        return sine_shape(phase);
    }
    else if (waveform <= 2.0 ) {
        return ramp_shape(phase);
    }
    else {
        return rect_shape(phase, 0.5);
    }

    return sine_shape(phase);
}

float poly_shape_d(vec2 uv, float s, float N, float p) {
    // N= number of sides of the shape
    float d = 0.0;

    // Angle and radius from the current pixel
    float a = atan(uv.x, uv.y) + PI;
    float r = 2. * PI / float(N);

    // Shaping function that modulate the distance
    //d = mod(cos(floor(.5 + a / r) * r - a) * length_(uv + p) - s * uTime, 1.);
    d = cos(floor(.5 + a / r) * r - a) * length_(uv + p) - s * uTime;

    return d;
}

float poly_shape(vec2 uv, float p, float f, float s, float waveform, float r, float _offset, float n) {
    vec2 uv_center = uv;
    uv_center = rotate2d(uv_center, 2. * PI * rot - 0.525);
    float d = poly_shape_d(f * uv_center, s, n, p);

    return step(d + _offset, 0.5);
    //return apply_shape(d + _offset, waveform);
}

void main() {
    vec2 uv = vUv;
    vec4 color1 = texture2D(tDiffuse, vUv);
    uv = mod(scale_fract * vUv - (scale_fract - 1.) / 2., 1.);
    uv = uv - vec2(0.5, 0.5);
    float n_ = ceil(n);
    vec3 f_fm =  vec3(f) + color1.rgb * fm; 
    float r_ = poly_shape(uv, p, f_fm.r, 0.0, 0.0, r, offset, n_);
    float g_ = poly_shape(uv, p, f_fm.g, 0.0, 0.0, r, 0.0, n_);
    float b_ = poly_shape(uv, p, f_fm.b, 0.0, 0.0, r, -offset, n_);
    vec4 osc = vec4(vec3(r_, g_, b_) * vec3(r, g, b) * amp, 1.0);
    gl_FragColor = osc;
}
`;

const fragmentShaderNoise = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float waveform;
uniform float p;
uniform float f;
uniform float fm;
uniform float s;
uniform float rot;
uniform float amp;
uniform float r;
uniform float g;
uniform float b;
uniform float scale_fract;

uniform float offset;

vec2 rotate2d(vec2 uv, float angle) {
    return vec2(sin(angle) * uv.x - cos(angle) * uv.y, cos(angle) * uv.x + sin(angle) * uv.y);
}

float sine_shape(float x) {
    return 0.5 * sin(x * 2. * 3.14) + 0.5;
}

float ramp_shape(float x) {
    return mod(x, 1.);
}

float rect_shape(float x, float pw) {
    return step(ramp_shape(x), pw);
}

float apply_shape(float phase, float waveform) {
    if (waveform <= 1.0 ) {
        return sine_shape(phase);
    }
    else if (waveform <= 2.0 ) {
        return ramp_shape(phase);
    }
    else {
        return rect_shape(phase, 0.5);
    }

    return sine_shape(phase);
}

vec2 GetGradient(vec2 intPos, float t) {
    float rand = fract(sin(dot(intPos, vec2(12.9898, 78.233))) * 43758.5453);
    float angle = 6.283185 * rand + 4.0 * t * rand;
    return vec2(cos(angle), sin(angle));
}

float Pseudo3dNoise(vec3 pos) {
    vec2 i = floor(pos.xy);
    vec2 f = pos.xy - i;
    vec2 blend = f * f * (3.0 - 2.0 * f);
    float noiseVal = mix(mix(dot(GetGradient(i + vec2(0., 0.), pos.z), f - vec2(0., 0.)), dot(GetGradient(i + vec2(1., 0.), pos.z), f - vec2(1., 0.)), blend.x), mix(dot(GetGradient(i + vec2(0., 1.), pos.z), f - vec2(0., 1.)), dot(GetGradient(i + vec2(1., 1.), pos.z), f - vec2(1., 1.)), blend.x), blend.y);
    return noiseVal / 0.7; // normalize to about [-1..1]
}

void main() {
    vec4 color1 = texture2D(tDiffuse, vUv);
    vec2 uv = mod(scale_fract * vUv - (scale_fract - 1.) / 2., 1.);
    uv = uv - vec2(0.5, 0.5);
    uv = rotate2d(uv, rot);
    vec3 f_fm =  vec3(f) + color1.rgb * fm;
    vec3 osc = vec3(0.);
    for(float i=0.;i<p;++i)
    {
        float noise = Pseudo3dNoise(vec3(vec2(uv.x, uv.y) * 1.0 * f, s * uTime));
        uv = vec2(noise, noise);
    }
    osc = vec3(0.5 + 0.5 * Pseudo3dNoise(vec3(vec2(uv.x + offset, uv.y) * 1.0 * f_fm.r, s * uTime)), 0.5 + 0.5 * Pseudo3dNoise(vec3(vec2(uv.x, uv.y) * 1.0 * f_fm.g, s * uTime)), 0.5 + 0.5 * Pseudo3dNoise(vec3(vec2(uv.x - offset, uv.y) * 1.0 * f_fm.b, s * uTime)));
    osc = vec3(apply_shape(osc.x, waveform), apply_shape(osc.y, waveform), apply_shape(osc.z, waveform));
    gl_FragColor = vec4(osc * vec3(r, g, b) * amp, 1.);
}
`;

const fragmentShaderConstant = `
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D tDiffuse;  // Previous pass output
uniform float uTime;
uniform float amp;
uniform float r;
uniform float g;
uniform float b;
uniform float scale_fract;

void main() {
    vec4 color1 = texture2D(tDiffuse, vUv);
    vec2 uv = mod(scale_fract * vUv - (scale_fract - 1.) / 2., 1.);
    vec3 osc = vec3(1. , 1., 1.);
    gl_FragColor = vec4(osc * vec3(r, g, b) * amp, 1.);
}
`;

const moduleWithFeedback = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderWithFeedback,
    uniforms: {
        tDiffuse: { value: null },
        tFeedback: { value: null },
        uTime: { value: 0.0 }
    },
    requiresFeedback: true
};

const oscillatorModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderOscillator,
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0.0 },
        p: { value: 0.0},
        f: { value: 10.0},
        fm: { value: 3.0},
        s: { value: .1},
        rot: { value: 1.0},
        amp: { value: 1.0},
        r: { value: 1.0 },
        g: { value: 1.0 },
        b: { value: 1.0 },
        waveform: { value: 1.0},
        offset: {value: 0.0},
        scale_fract: {value: 1.0},
    },
};

const polyShapeModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderPolyShape,
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0.0 },
        p: { value: 0.0},
        f: { value: 1.0},
        fm: { value: 3.0},
        s: { value: .1},
        rot: { value: 1.0},
        amp: { value: 1.0},
        r: { value: 1.0 },
        g: { value: 1.0 },
        b: { value: 1.0 },
        waveform: { value: 1.0},
        offset: {value: 0.0},
        scale_fract: {value: 1.0},
        n: {value: 3.0},
    },
};

const polyShapeStaticModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderPolyShapeStatic,
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0.0 },
        p: { value: 0.0},
        f: { value: 3.0},
        fm: { value: 3.0},
        rot: { value: 1.0},
        amp: { value: 1.0},
        r: { value: 1.0 },
        g: { value: 1.0 },
        b: { value: 1.0 },
        offset: {value: 0.0},
        scale_fract: {value: 1.0},
        n: {value: 3.0},
    },
};

const noiseModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderNoise,
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0.0 },
        p: { value: 0.0},
        f: { value: 3.0},
        fm: { value: 3.0},
        s: { value: 0.1},
        rot: { value: 1.0},
        amp: { value: 1.0},
        r: { value: 1.0 },
        g: { value: 1.0 },
        b: { value: 1.0 },
        waveform: { value: 0.0 },
        offset: {value: 0.0},
        scale_fract: {value: 1.0},
    },
};

const constantModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderConstant,
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0.0 },
        amp: { value: 1.0},
        r: { value: 1.0 },
        g: { value: 1.0 },
        b: { value: 1.0 },
        scale_fract: {value: 1.0},
    },
};

const multiShapeOscillator = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderOscillator,
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0.0 },
        p: { value: 0.0},
        f: { value: 10.0},
        fm: { value: 3.0},
        s: { value: .1},
        r: { value: 1.0},
        waveform: { value: 1.0},
    },
};

const rotateModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderRotate,
    uniforms: {
        tDiffuse: { value: null },
        uTime: { value: 0.0 },
        angle: { value: 0.25 },
    },
};

const kaleidoscopeModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderKaleidoscope,
    uniforms: {
        tDiffuse: { value: null },
        nSides: { value: 10.0 },
        xOff: { value: 0.0},
        yOff: { value: 0.0},
    },
};

const pixelateModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderPixelate,
    uniforms: {
        tDiffuse: { value: null },
        pixelX: { value: 100.0 },
        pixelY: { value: 100.0 },
    },
};

const colorModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderColor,
    uniforms: {
        tDiffuse: { value: null },
        r: { value: 0.0 },
        g: { value: 1.0 },
        b: { value: 0.0 },
        amp: { value: 1.0 },
    },
};

const outputModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderOutput,
    uniforms: {
        tDiffuse: { value: null },
    },
};

const scaleFractModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderScaleFract,
    uniforms: {
        tDiffuse: { value: null },
        scale_fract: { value: 1.0},
    },
};

const translateModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderTranslate,
    uniforms: {
        tDiffuse: { value: null },
        scale: { value: 1.0},
        scale_fract: { value: 1.0},
        xOff: { value: 0.0},
        yOff: { value: 0.0},
    },
};

const spaceWarpModule = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShaderSpaceWarp,
    uniforms: {
        tDiffuse: { value: null },
        space_warp: { value: 0.0},
    },
};
