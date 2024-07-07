let nodes = [
    new ShaderNode('output', window.innerWidth * 2/3, window.innerHeight/2),
    new ShaderNode('polyShape',  window.innerWidth * 1/4, window.innerHeight * 1/4),
];
let connections = [
    new Connection(nodes[1].id, nodes[0].id)
];
