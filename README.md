# Report
## General description
The project consists of a 3D model of the SpaceX *Falcon Heavy* rocket positioned on an irregular terrain generated through the use of a heightmap. There are also the animation of smoke and fire coming out of the engines and the animation of the rocket's departure towards the space.

![Scene graph](/resources/scene_graph.jpeg)

The scene graph shows that there are two main objects: the terrain and the *Falcon Heavy*. The rocket consists of three *Falcon 9* (***central_rocket***, ***left_rocket***, ***right_rocket***). The lateral rockets are children of the central rocket, in this way, acting on the latter, the entire rocket is modified. 

The code is divided into two files: 

- **index.html**: main file
- **functions.js**: functions file.

The libraries used are the following:

- **three.min.js**
- **stats.min.js**
- **Coordinates.js**
- **OrbitControls.js**
- **tween.min.js** for rocket animation.

## Project development
To realize this project, first I visited the [SpaceX website](http://www.spacex.com/falcon-heavy) to observe the aesthetic characteristics of *Falcon Heavy*. For reasons of time, I simplified the rocket as mush as possible, keeping only the main features.

The project is developed through the following steps: 

- rocket modeling
- terrain modeling through the use of a heightmap
- insertion of lights and shadows
- insertion of animations
- insertion of the cubemap
- background color animation.

The animations realized are as follows:

- fire and smoke coming out of the engines
- departure of the rocket with acceleration
- interpolation of the background color from white to light blue to blue.

## Result
The final result shows the *Falcon Heavy*, resting on the irregular terrain, with the fire and the smoke starting to come out of the engines. After, the rocket starts. As the rocket rises,  the background changes color from white to light blue to blue. Then the rocket reaches the space.

![Razzo sulla base](/resources/base.jpeg)
![Razzo in cielo](/resources/sky.jpeg)
![Razzo nello spazio](/resources/space.jpeg) 
