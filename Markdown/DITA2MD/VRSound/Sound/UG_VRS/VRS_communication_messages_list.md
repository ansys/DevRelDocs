# Messages List {#jpkgaeMessages}

There are 3 types of messages:

-   The control messages, corresponding to a global instruction, such as initialization.
-   The event service messages, such as the loading or triggering of a sound source.
-   The recurrent service messages sent periodically, corresponding to updates of the listener position or the sources positions.

## Control Messages {#section_bf1_hfh_ftb .section}

|**Keyword**|**Data**|**Comments**|
|GLOBAL\_INIT

|IP address of the supervisor\(for example : 192.168.0.1\)

|IP address and port used for the sending of state messages. Resets the sound generator \(Id's cleared\).

|
|Port \(for example : 5555\)

|
|Sending period of the ALIVE message \(in milliseconds\)

|
|GLOBAL\_PAUSE

|none

|Pauses the playback of all sound sources. Freezes the sound generator.

|
|GLOBAL\_RESUME

|none

|Resumes the playback.

|
|GLOBAL\_3D\_MODE

|Rendering Mode \(string\)

|The rendering modes are:

 « Binaural »

 « VBAP »

 « Transaural »

 « DoubleTransaural»

 « Ambisonic»

|
|API\_COORDINATES\_MODE

|Coordinate Mode \(string\)

|The available coordinate modes are:

 A - Virtools/Unity

 B - Polhemus

 C - Angular mode

|

## Event Service Messages {#section_z42_3fh_ftb .section}

|**Keyword**|**Data**|**Comments**|
|SOUND\_LOAD|Id \(Int, from 0 to 32765\)

|Preload a sound

|
|File name \(string\)

|Full path of the sound file including extension

|
|SOUND\_PLAY\_3D|Playback Slot \(int\)

|Playback of a spatialized sound \(1 ≤ Slot ≤ 10\)

|
|Sound Id \(int\)

| |
|Number of playbacks \(int\)

|Number of playbacks: -1 means infinite loop

|
|Volume \(float, gain in dB\)

|Initial volume

|
|x \(float\)

 y \(float\)

 z \(float\)

|Initial position of the source

|
|INTERP\_SOUND\_PLAY|Slot \(int, from 1 to 10\)

|Playback of a spatialized sound \(1 ≤ Slot ≤ 10\)

|
|Volume \(float, gain in dB\)

|Initial volume

|
|x \(float\)

 y \(float\)

 z \(float\)

|Initial position of the source

|
|Spat \(int 0/1\)

|Spatialization off/on

|
|Tracker \(int 0/1\)

|Tracking off/on

|
|Solo \(int 0/1\)

|Solo off/on

|
|Mute \(int 0/1\)

|Mute off/on

|
|SOUND\_PLAY\_AMBIANCE|Playback Slot \(int\)

|Playback of an ambiance source \(1 ≤ Slot ≤ 2\)

|
|Sound Id \(int\)

| |
|Number of playbacks \(int\)

|Number of playbacks: -1 means infinite loop

|
|Volume \(float, gain in dB\)

|Initial volume

|
|Solo \(int 0/1\)

|Solo off/on

|
|Mute \(int 0/1\)

|Mute off/on

|
|Speed \(float\)

|Playback speed \(1 is the normal speed. Changing the values also affects the pitch.

|
|INPUTCHANNEL\_SOUND\_PLAY|Channel Id \(int\)

|Activates the playback of an input audio stream.

 ID = input number in the sound card.

|
|Volume \(float, gain in dB\)

|Initial volume

|
|x \(float\)

 y \(float\)

 z \(float\)

|Initial position of the source

|
|Spat \(int 0/1\)

|Spatialization off/on

|
|Tracker \(int 0/1\)

|Tracking off/on

|
|Solo \(int 0/1\)

|Solo off/on

|
|Mute \(int 0/1\)

|Mute off/on

|
|SOUND\_STOP\_3D|Slot \(int\)

|Stops the playback of a 3D sound

|
|INTERP\_SOUND\_STOP|Slot \(int, from 1 to 10\)

|Stops the playback of a 3D Interpolated source

|
|SOUND\_STOP\_AMBIANCE|Slot \(int\)

|Stops the playback of an ambiance sound

|
|INPUTCHANNEL\_SOUND\_STOP|Channel Id \(int\)

|Stops the input channel audio stream

|
|SOUND\_VOLUME\_3D|Slot \(int\)

 Volume \(float, gain in dB\)

|Changes the sound volume of an ambiance sound.

 0 dB = unitary gain

 Maximum gain allowed = 20 dB

|
|INTERP\_SOUND\_VOLUME|Slot \(int\)

 Volume \(float, gain in dB\)

|Changes the sound volume of a 3D interpolated source.

 0 dB = unitary gain

 Maximum gain allowed = 10 dB

|
|SOUND\_VOLUME\_AMBIANCE|Slot \(int\)

 Volume \(float, gain in dB\)

|Changes the sound volume of an ambiance sound.

 0 dB = unitary gain

 Maximum gain allowed = 20 dB

|
|INPUTCHANNEL\_VOLUME|Channel Id \(int\)

 Volume \(float, gain in dB\)

|Changes the sound volume of the input channel stream.

 0 dB = unitary gain

 Maximum gain allowed = 20 dB

|
|SOLO\_3D|Slot \(int\)

 Solo info \(int 0/1\)

|When solo is activated \(1\) on a 3D track, all other tracks are muted except those in solo mode.

|
|INTERP\_SOLO|Slot \(int\)

 Solo info \(int 0/1\)

|When solo is activated \(1\) on a 3D interpolated source, all other tracks are muted except those in solo mode.

|
|SOLO\_AMBIANCE|Slot \(int\)

 Solo info \(int 0/1\)

|When solo is activated \(1\) on an ambiance track, all other tracks are muted except those in solo mode.

|
|INPUTCHANNEL\_SOLO|Channel Id \(int\)

 Solo info \(int 0/1\)

|When solo is activated \(1\) on the input channel track, all other tracks are muted except those in solo mode.

|
|MUTE\_3D|Slot \(int\)

 Mute info \(int 0/1\)

|When mute is activated \(1\) on a 3D track, this track becomes silent.

|
|INTERP\_MUTE|Slot \(int\)

 Mute info \(int 0/1\)

|When mute is activated \(1\) on a 3D interpolated source, this track becomes silent.

|
|MUTE\_AMBIANCE|Slot \(int\)

 Mute info \(int 0/1\)

|When mute is activated \(1\) on an ambiance track, this track becomes silent.

|
|INPUTCHANNEL\_MUTE|Channel Id \(int\)

 Mute info \(int 0/1\)

|When mute is activated \(1\) on the input channel track, this track becomes silent.

|
|ACTIVE\_SPAT\_3D|Slot \(int\)

 Spat info \(int 0/1\)

|For binaural or transaural restitution only. When the spatialization is activated \(1\), the sound can be perceived in 3D.

|
|INTERP\_ACTIVE\_SPAT|Slot \(int\)

 Spat info \(int 0/1\)

|For binaural or transaural restitution only. When the spatialization is activated \(1\), the sound can be perceived in 3D.

|
|INPUTCHANNEL\_ACTIVE\_SPAT|Channel Id \(int\)

 Spat info \(int 0/1\)

|For binaural or transaural restitution only. When the spatialization is activated \(1\), the sound can be perceived in 3D.

|
|ACTIVE\_TRACKING\_3D|Slot \(int\)

 Head-tracking info \(int 0/1\)

|For 3D tracks and binaural restitution only. When the head-tracking is activated\(1\), the listener can move their head and the source remains at an absolute position in space.

|
|INTERP\_ACTIVE\_TRACKING|Slot \(int\)

 Head-tracking info \(int 0/1\)

|For 3D tracks and binaural restitution only. When the head-tracking is activated\(1\), the listener can move their head and the source remains at an absolute position in space.

|
|INPUTCHANNEL\_ACTIVE\_TRACKING|Channel Id \(int\)

 Head-tracking info \(int 0/1\)

|For binaural restitution only. When the head- tracking is activated\(1\), the listener can move their head and the input channelstream remains at an absolute position in space.

|
|SPEED\_3D|Slot \(int\)

 Playback speed \(float\)

|Playback speed for 3D sounds \(1 is the normal speed\). Changing the values also affects the pitch.

|
|SPEED\_AMBIANCE|Slot \(int\)

 Playback speed \(float\)

|Playback speed for ambiance sounds \(1 is the normal speed\). Changing the values also affects the pitch.

|
|3D\_SOURCE\_TRAJECTORY|Slot \(Int, from 1 to 20\)

 File name \(string\)

|Load a trajectory.

 Full path of the trajectory file including extension.

|
|INTERP\_TRAJECTORY|Slot \(Int, from 1 to 10\)

 File name \(string\)

|Load a trajectory.

 Full path of the trajectory file including extension.

|
|3D\_SOURCE\_DIFFUSENESS|Slot \(Int, from 1 to 20\)

 Diffuseness value \(int, %\)

|For 3D sources in VBAP rendering mode only.

 0% means the source is not spread, 100% means the source is totally surrounding and diffused over all speakers.

|
|INTERP\_SOURCE\_DIFFUSENESS|Slot \(Int, from 1 to 10\)

 Diffuseness value \(int, %\)

|For interpolated sources in VBAP rendering mode only.

 0% means the source is not spread, 100% means the source is totally surrounding and diffused over all speakers.

|
|INPUTCHANNEL\_SOURCE\_DIFFUSENESS|Slot \(Int, from 1 to 3\)

 Diffuseness value \(int, %\)

|For 3D input streams in VBAP rendering mode only.

 0% means the source is not spread, 100% means the source is surrounding and diffused over all speakers.

|
|INTERP\_CONTROL\_PARAM|Slot \(int\)

 Control parameter value \(int\)

|Depending on the type of source, the control parameter can be speed, RPM, or any parameter that has an influence on the rendering of the source.

|
|INTERP\_OVERLAP|Slot \(int\)

 Overlap value \(int\)

|This is the overlap value between two adjacent samples, in the same unit as the control parameter.

|

## Recurrent Service Messages {#section_mlp_kfh_ftb .section}

|**Keyword**|**Data**|**Comments**|
|HEAD\_POSITION\_3D|x \(float\)

 y \(float\)

 z \(float\)

|Head coordinates

|
|Yaw \(float, radians\)

 Pitch \(float, radians\)

 Roll \(float, radians\)

|Head orientation using Euler Angles \(Tait-Bryan convention: Azimuth- Elevation-Roll\)

|
|SOURCE\_POSITION\_3D|Slot \(int\)

 x \(float\)

 y \(float\)

 z \(float\)

|Source position update

|
|INTERP\_SOURCE\_POSITION|Slot \(int\)

 x \(float\)

 y \(float\)

 z \(float\)

|Source position update

|
|INPUTCHANNEL\_POSITION|Slot \(int\)

 x \(float\)

 y \(float\)

 z \(float\)

|Input channel stream position update

|

**Parent topic:**[Communication](../../Sound/UG_VRS/VRS_communication.md)

