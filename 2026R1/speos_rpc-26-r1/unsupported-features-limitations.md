# Unsupported features and limitations

## Unsupported features

### Import
- glTF import

### Materials

- Texture mapping & Texture option in simulation <!--1161101-->
- Load of scene using unsupported file as rdr file
- Polarizer file <!--1175078-->

### Sources

- Ambient source MODTRAN
- Source group <!--1151840 1175113-->

### Sensors

- Immersive & Observer sensors 
- 3D energy density sensor
- LiDAR sensor
- Camera sensor on specific mode (Geometric/Balance None/Balance Grey world)
- Timeline parameters in sensor
- Thermic unit of FLIR thermal camera sensor

### Components

- Timeline parameters in Speos Lightbox
- Speos Lightbox <!--1175652-->
- Speos pattern from Speos Lightbox <!--1175652-->
 
### Simulations

- Simulation with Timeline <!--1161170-->
- Light Expert
- Texture option in simulation
- Output faces in Irradiance sensor & IN/Out sources in simulation (only available with exported simulation, not natively)
- RayTracer selection for simulation 
- Multi-GPU compute
- Fast Transmission Gathering (FTG) usage
- Percentage of error during the simulation run 

## Limitations

### Layer separation by source

Let's consider that you load, in the scene, a *.speos file that contains:
- supported sources by Speos RPC
- unsupported sources by Speos RPC (see list above)
- a sensor using the layer separation by source.
The order of sources in the layer list of the XMP generated out of Speos RPC job, and the order of source in the layer list of the XMP generated out of the *.speos are different.
Why does the order change? This is due to the unsupported sources by Speos RPC. The Speos RPC job reorders the sources, placing the unsupported sources first, then the supported sources in the layer list. As a consequence, the potential XML template generated out of the XMP (from the *.speos file) cannot be applied to the XMP (from the Speos RPC job).
