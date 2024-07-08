function calcXIconPosition(input, output) {
    let inputCenterX = input.getBoundingClientRect().left;
    let inputCenterY = input.getBoundingClientRect().top;
    let outputCenterX = output.getBoundingClientRect().left;
    let outputCenterY = output.getBoundingClientRect().top;

    let x = (inputCenterX + outputCenterX) / 2 -5;
    let y = (inputCenterY + outputCenterY) / 2 -5;

    return [x, y];
}

function createLineDiv(output, input) {
    var line = new LeaderLine(
        output,
        input,
        {
            color:'#d3d3d3',
            startPlug: 'square',
            endPlug: 'square',
            //startSocketGravity: '400',
            endPlugSize: .9,
            startPlugSize: .9,
            size: 3,
            path: 'fluid',
        }
    );

    // Create X icon for deletion
    var xIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    xIcon.setAttribute("width", "20");
    xIcon.setAttribute("height", "20");
    xIcon.innerHTML = '<line x1="5" y1="5" x2="15" y2="15" stroke="white" stroke-width="1"/>' +
                      '<line x1="15" y1="5" x2="5" y2="15" stroke="white" stroke-width="1"/>';

    xIcon.style.position = 'absolute';
    let [x, y] = calcXIconPosition(input, output);
    xIcon.style.left = x -5 + 'px';
    xIcon.style.top = y -5+ 'px';
    document.body.appendChild(xIcon);

    return [line, xIcon];
}
