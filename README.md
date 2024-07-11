# About

This is an emulation of a modular analog video synthesizer, which is coded in javascript and
WebGL (with Three.js).

Try it out here: [Github Pages Link](https://sominsomin.github.io/modular_video_synth/).
Youll need a browser that supports.

This is inspired by digital tools such as 
[Vsynth](https://www.kevinkripper.com/vsynth) for Max/MSP, [Hydra](https://hydra.ojack.xyz/?sketch_id=example_11) or the digital hardware video synthesizer [Hypno](https://sleepycircuits.com/hypno). And, of course, in the analog realm, everything created by [lxz-industries](https://lzxindustries.net/).
            
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
- drag nodes by clicking and holding and moving the mouse
- move around sliders to change values, double-click on a slider to reset the value to it's default value or change the value by doubleclicking to the value display on the right side of the slider and type a value
- drag around modules by clicking somewhere on a node and moving the mouse


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

### Parameters

p: phase of the oscillator/generator,
f: frequency of the oscillator/generator,
fm: frequency modulation strength,
s: speed of the oscillator/generator,
rot: rotation angle,
amp: amplitude of the oscillator/generator/input,
r: r color value,
g: g color value,
b: b color value,
waveform: waveform of the oscillator/generator,
offset: phase offset of the rgb value of the oscillator/generator,
scale: scale the oscillator/generator/input,
scale_fract: scale the oscillator/generator with repeating tile effect,
n: number of corners of the polygon shape,
xOff: offset in x-direction,
yOff: offset in y-direction,
pixelX: pixelation in x-direction,
pixelY: pixelation in y-direction,
space_warp: warping xy coordinates of the input,
nSides: number of sides