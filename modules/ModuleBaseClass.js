class ModuleBaseClass {
    constructor () {
    }

    setShaderValue(shaderValueName, value) {
        this[shaderValueName].updateValue(value);
    }
}