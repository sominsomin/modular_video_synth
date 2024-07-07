class ShaderNode {
    constructor(module_name, x=100, y=100, id=null, shader_values_init=null) {
        if (id === null) {
            let id = generateRandomId();
            this.id = id;
        }
        else {
            this.id = id;
        }
        
        this.module_name = module_name;

        // creating a deep copy of the module dict
        let module = JSON.parse(JSON.stringify(module_resolve[module_name]));
        this.module = module;
        this.vertexShader = module.vertexShader;
        this.fragmentShader = module.fragmentShader;
        this.uniforms = module.uniforms;
        this.x = x;
        this.y = y;

        this.create_GUI(module_name, x, y);

        this.shader_values_init = shader_values_init;
    }

    create_GUI(module_name, x, y) {
        let class_to_create = class_resolver[module_name];
        let new_class = new class_to_create(this.id);
        let new_module = new GUIModule(new_class, x, y);
        this.guiModule = new_module;
    }

    initShaderValuesFromDict() {
        if (this.shader_values_init !== null) {
            for (const [key, value] of Object.entries(this.shader_values_init)) {
                this.guiModule.shader_class.setShaderValue(key, value);
            }
        }
    }

    toDict() {
       return {
        'id': this.id,
        'shader_values': this.guiModule.get_shader_values_dict(),
        'module_name': this.module_name,
        'x': Number(this.guiModule.module.style.left.replace('px', '')),
        'y': Number(this.guiModule.module.style.top.replace('px', '')),
        }
    }

    static fromDict(dict) {
        let new_node = new ShaderNode(dict['module_name'], dict['x'], dict['y'], dict['id'], dict['shader_values']);
        return new_node;
    }

    delete() {
        this.guiModule.delete();
    }
}


function getNodeById(id) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == id) {
            return nodes[i];
        }
    }
}

class Connection {
    constructor(fromNode, toNode, id=null) {
        if (id === null) {
            let id = generateRandomId();
            this.id = id;
        }
        else {
            this.id = id;
        }

        this.fromNode = fromNode;
        this.toNode = toNode;

        let output = getNodeById(fromNode).guiModule.module.querySelector('.output');
        let input = getNodeById(toNode).guiModule.module.querySelector('.input');
        this.guiConnection = new GUIConnection(output, input, this.id);        
    }

    toDict() {
        return {
            'fromNode': this.fromNode,
            'toNode': this.toNode,
            'id': this.id,
        }
    }

    static fromDict(dict) {
        let new_connection = new Connection(dict['fromNode'], dict['toNode'], dict['id']);
        new_connection.id = dict['id'];
        return new_connection;
    }

    delete() {
        this.guiConnection.delete();
    }
}

function createNode(dropdown_text, x, y) {
    let node = new ShaderNode(dropdown_text, x, y);
    nodes.push(node);
}

function createConnection(input_node_id, output_node_id) {
    let connection = new Connection(output_node_id, input_node_id);
    connections.push(connection);
}

function deleteAll() {
    nodes.forEach(node => {
        node.delete();
    })
    connections.forEach(connection => {
        connection.delete();
    })
    nodes = [];
    connections = [];
}

function getDicts() {
    let nodes_dicts = [];
    let connections_dicts = [];

    nodes.forEach(node =>  {
        nodes_dicts.push(node.toDict());
    })
    connections.forEach(connection => {
        connections_dicts.push(connection.toDict());
    })

    return {
        'nodes': nodes_dicts,
        'connections': connections_dicts,
    };
}

function initFromDicts(nodes_and_connections) {
    let nodes_dicts = nodes_and_connections['nodes'];
    let connections_dicts = nodes_and_connections['connections'];

    deleteAll();

    nodes_dicts.forEach(node_dict =>  {
        let new_node = ShaderNode.fromDict(node_dict);
        nodes.push(new_node);
    })
    connections_dicts.forEach(connection_dict => {
        connections.push(Connection.fromDict(connection_dict));
    })

    shaderConstructor.init(nodes, connections);

    nodes.forEach(node =>  {
        node.initShaderValuesFromDict();
    })
    setModuleTransparency();
    updateConnectionPositions();
}

let preset_index = 0;

function loadPreviousPreset() {
    if (preset_index == 0) {
        preset_index = presets.length - 1;
    }
    else {
        preset_index -= 1;
    }
    initFromDicts(presets[preset_index]);
}


function loadNextPreset() {
    if (preset_index != presets.length - 1) {
        preset_index += 1;
    }
    else {
        preset_index = 0;
    }
    initFromDicts(presets[preset_index]);
}