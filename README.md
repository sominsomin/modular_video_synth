# About

This is an emulation of a modular analog video synthesizer, which is coded in javascript and
WebGL (with Three.js).
This is inspired by digital tools such as 
["https://www.kevinkripper.com/vsynth"](Vsynth) for Max/MSP, ["https://hydra.ojack.xyz/?sketch_id=example_11"](Hydra) or the digital hardware video synthesizer ["https://sleepycircuits.com/hypno"](Hypno). And, of course, in the analog realm, everything created by ["https://lzxindustries.net/"](lxz-industries).
            
This tool consists of a node-editor, to create a dataflow between modules. Each node respresent a fragment shader and has an input (left) and an output (right). Connections can be made (or deleted) between those nodes.
Nodes can be generators (creating an image) or effects (modifying the input). All nodes connected to the output node will be displayed. The generators input functions as a frequency modulation on the input, this can be used e.g. to create
interesting frequency modulation feedback loops.
Outputs can't be connected to the input of the same node, but this can be done by using a node in between to create feedback loops (which lead to very interesting visual results).

## Why Javascript, why frontend?

Multiplatform, almost all browser support WebGL, so its easy to share.

## How to use:

Open the main.html and play around with it. Move around some sliders or try out some presets. Create and connect nodes however you wish.
Currently Nodes only listen to the first input, except for the output module which displays all connected inputs. (this might change in future versions).

### GUI Explanations:

- select a module type in the dropdown and right click somewhere on the screen. This will create a new node with the selected type of module
- to connect nodes, left-click on an output on a node and then left-click on an input of another node
- inputs are on the left, outputs on the right of the node
- delete connections by clicking on the 'x' of the connection, delete nodes by clicking on the 'x' of the module
- all nodes connected to the output node will be displayed
- all the other nodes have currently only a single input, so if you add multiple connections, only the first one will be used (this might change in future versions)


## Nodes

### Generators

Generators generate image output, the input is used for frequency modulation.
This can be used to create interesting feedback loops.

#### Oscillator

A simple Oscillator with different waveforms.

#### Noise

A perlin noise like generator.

#### PolyShape

A Oscillator to create N-shaped polygons.

#### PolyShapeStatic

Same as Polyshape but no movement and frequency.

#### constant

Just a constant color filling the full screen.


### FX

FX nodes modify the image which comes in through the input.

#### kaleidoscope

Kaleidoscope effect on the input.

#### pixelate

Pixelate the input image.

#### color

change the color of an input.

####  translate

translate the image in x or y direction.

#### scale_fract

Scale the image, the image is repeated as tiles.

#### space_warp

Morph the topolgy of the input.