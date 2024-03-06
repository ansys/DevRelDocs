# Introduction

API for Direct Driving of Ansys Sound: Car Sound Simulator through UDP.

Ansys Sound - Car Sound Simulator is driven:

- Directly using the Open Sound Control Protocol (<a target="_blank" href="https://opensoundcontrol.stanford.edu/ ">OSC</a>) over the UDP network protocol.
- Or by using a specialized method implying the use of a proprietary communication application transferring data between the simulator and Car Sound Simulator.

Documentation structure:

- [OSC Protocol](Sound/UG_Car/car_ost_osc_prot.md): Describes the usage of the OSC protocol for controlling Ansys Sound - Car Sound Simulator.
- [Ansys Sound: Car Sound Simulator - OSC Messages](Sound/UG_Car/car_ost_simdrive.md): Provides detailed information about the specific OSC messages used to drive the Car Sound Simulator within Ansys Sound.
- [C++ Program](Sound/UG_Car/car_ost_c_prog.md): Offers guidance on integrating the API into C++ programs for efficient control of the Car Sound Simulator.