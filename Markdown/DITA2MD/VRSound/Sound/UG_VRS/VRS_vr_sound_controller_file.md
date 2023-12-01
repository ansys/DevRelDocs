# File {#VRS_vr_sound_controller_file}

VR Sound offers the facility to save and load projects, using the dedicated **File** tab on the controller interface:

![](images/file_tab.png)

A project includes all the sound parameters that have potentially been modified by the user:

-   Sound files
-   Sound trajectories
-   Sources positions
-   Sound volumes
-   Diffuseness values \(in VBAP mode\)
-   Playback speed values
-   Solo, Mute, Active 3D and Active Tracking states
-   Sound card inputs for 3Dinput streams
-   3D interpolated sources configuration file
-   All sample files, control and overlap parameter values for 3D interpolated sources
-   Global settings \(Doppler on/off, Reference distance, Roll-off factor, Display scale\)

A project does not include parameters realting to the rendering mode. Rendering parameters are independent and are specified in the configuration file VR Sound.cfg.

To save a VR Sound project:

-   Click the **Save project** button on the controller **File** tab.
-   Enter a path and filename for the project, with the extension .VRSproject.

Once these are chosen, a folder is created with the same name. This folder contains:

-   The .VRSproject file
-   All the sounds that are used in the project \(including the samples for the 3D interpolated sources\)
-   All the trajectories that are used in the project
-   The configuration file for the 3D interpolated sources, SampleData.cfg

Saving all this data inside a single folder allows you to transport a project easily from one PC to another, as everything that is needed by the project is already included.

To load a VR Sound project:

-   Click the **Open project** button on the controller **File** tab.
-   In the file dialog, select a .VRSproject file.
-   A message appears while the project is loading:

![](images/file_loading.png)

Once the project is loaded, all the parameters and values that were stored in the project are restored.

