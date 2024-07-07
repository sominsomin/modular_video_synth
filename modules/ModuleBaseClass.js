class ModuleBaseClass {
    constructor () {
    }

    setShaderValue(shaderValueName, value) {
        //this[shaderValueName].value = value;
        this[shaderValueName].updateValue(value);
    }
}