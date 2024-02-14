# Ansys Sound: Car Sound Simulator - OSC Messages

Ansys Sound: Car Sound Simulator is driven by OSC MESSAGES sent over UDP: there is one action at a time associated to one message. The action name is a KEYWORD, followed by some OSC ARGUMENTS.

## Basic management messages

Basic management for the sound generator

|KEY WORD

 \(Address Pattern\)

|TYPE|Comments|
|--------------------------------|----|--------|
|Messages sent once by state change:|
|INIT\_DATAPATH|String|Data initialization :|
|Data path|
|INIT\_CONFIGFILE|String|Data initialization:|
|File Name|
|DSP\_START| |Starts the MAX/Msp Audio Engine|
|DSP\_STOP| |Stops the MAX/Msp Audio Engine \(sound off\)|
|START\_KEY|Integer|Position of the start key :|
|0 : off|
|1 : contact|
|2 : on|
|3 : start|
|Messages sent regularly:|
|SPEED|Float \(m/s\)|absolute vehicle speed|
|RPM|Float \(tr/min\)|engine speed \(rounds by minutes\)|
|CHARGE|Float \(% between 0. and 1.\)|throttle load|
|OUTPUT\_TYPE|String|Audio output configuration type :|
|- Stereo|
|- 2.1|
|- 4.1|
|- 4.0

 -   Binaural
-   Transaural2HP

|
|- \[your system\]|
|SCANMAX\_VERSION|String|unused|

## Traffic noise management

The exploiting application handles up to 8 traffic vehicles, corresponding to 8 possible synthesis slots. These 8 vehicles must be chosen by the simulator depending on their contribution to the sound scene, for example by selecting the closest ones.

Angles are in radians, 0 is a front source, -pi/2 is left, +pi/2 is right. Angles superior to pi or inferior to -pi are accepted

|KEY WORD

 \(Address Pattern\)

|TYPE|Comments|
|Messages sent once by state change:|
|TRAFIC\_INIT|Slot index \(Int\)|Traffic synthesis initialization at slot index. \(1<=slot index<=8\)

 Type:

 0 = unknown

 1 = car

 2 = truck/bus

 3 = motorbike

|
|Vehicle type \(int\)|
|Distance \(float en m\)|
|Azimuth \(en rad\)|
|Absolute speed

 \(float in m/s\)

|
|TRAFIC\_STOP|slot index \(Int\)|Traffic sound synthesis stopped at slot index \(1<=slot index<=8\)|
|Messages sent regularly:|
|TRAFIC\_UPDATE|Slot \(Int\)

 Distance \(Float, in m\) Azimut\(Float, in rad\) Vitesse \(Float, in m/s\)

|Update of the traffic vehicle characteristics \(distance, azimuth, speed\) at slot index \(1<=slot index<=8\).|

## Harmonic sources management

The application handles up to 10 harmonic sources. Each of them can be controlled with the following messages:

|KEY WORD

 \(Address Pattern\)

|TYPE|Comments|
|Messages sent once by state change:|
|RPM\_USER\_1|Value \(int\)|1st specific RPM for a dedicated harmonic source|
|RPM\_USER\_2|Value \(int\)|2nd specific RPM for a dedicated harmonic source|
|RPM\_USER\_3|Value \(int\)|3rd specific RPM for a dedicated harmonic source|
|RPM\_USER\_4|Value \(int\)|4th specific RPM for a dedicated harmonic source|
|RPM\_USER\_5|Value \(int\)|5th specific RPM for a dedicated harmonic source|
|RPM\_USER\_6|Value \(int\)|6th specific RPM for a dedicated harmonic source|
|RPM\_USER\_7|Value \(int\)|7th specific RPM for a dedicated harmonic source|
|RPM\_USER\_8|Value \(int\)|8th specific RPM for a dedicated harmonic source|
|RPM\_USER\_9|Value \(int\)|9th specific RPM for a dedicated harmonic source|
|RPM\_USER\_10|Value \(int\)|10th specific RPM for a dedicated harmonic source|
||
|HS\_AZIM|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is the azimuth angle in degrees for the spatial positioning of the source \(between -180° and 180°\)|
|HS\_VOL|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is a gain value in dB applied to that source \(between -15 and +15 dB\)|
|HS\_WIDTH|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is the coefficient of diffuseness of the source, between 0 and 100% \(0% means the source has no diffuseness, it can be perceived from a specific direction, 100% means the source is totally diffuse, it is perceived as surrounding and coming from all speakers with the same energy\).|

## Tires noises of the main vehicle

Tires Noise has to be updated for each wheel by providing information about the current slippyness

|KEY WORD

 \(Address Pattern\)

|TYPE & COMMENTS|
|Messages sent once by state change:|
|GROUND\_INDEX|0 = asphalt, 1 = concrete, 2 = grass, 3 = cobblestone \(integer\)

|
|SCREECH|4 x slipping intensity -100% à 100%

 \(float in this order : front left, front right, rear left, rear right\)

|
|4 x slipping angle of each wheel in radians

 \(float in this order : front left, front right, rear left, rear right\)

|
|WHEEL\_ ADHERENCE|4 x \(int wheel index, float stickiness coefficient\)

 Ex : 0 0.1 1 0.3 2 0.7 3 0.7

|
|0.7< float stickiness coefficient <1: dry 0.2< float stickiness coefficient <0.7:wet

 0.1< float stickiness coefficient <0.2 : snowy

|

## Weather management

Weather noise management

|KEY WORD

 \(Address Pattern\)

|TYPE & COMMENTS|
|*Messages sent once by state change:*|
|WEATHER\_RAIN|% rain, Integer from 0 to 100%|
|WEATHER\_WIND|% wind, Integer from 0 to 100%|

## Additional noises

Loading orders of additional simulation noises:

|KEY WORD

 \(Address Pattern\)

|TYPE|COMMENTS|
|*Messages sent once by state change:*|
|MOTOR\_PARTIALS|string|.motor file to load \(path must include slashes '/' instead of '\\'\)|
|MOTOR\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|AERO\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|ROLLING\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|STARTER\_MOTOR|string|wav file corresponding to the engine

 starting noise

|

## Sound files playing

Supported functions:

-   sendSoundLoad : loads a sound
-   sendSoundPlay : play a sound \(looping available\)
-   sendSoundStop : stops a sound play
-   sendSoundPause : pauses a sound play
-   sendSoundVolume : sets the sound volume

There are 10 available slots for sound play in Car Sound Simulator. The main simulation application has to manage the slots indexes availability.

Notes : ²

-   the slots indexes are \>=1 and <=10
-   .wav extension is appended to the file name

|KEYWORD

 \(Address Pattern\)

|TYPE|COMMENTS|
|*Messages sent once by state change:*|
|SOUND\_LOAD|sound Id \(Integer, 0<id<32765\)|loads a file to play|
|File Name \(String\)|
|SOUND\_PLAY|Slot index \(int\)|Starts playing the sound \#Id at slot \#Slot index.

 TypeSpat: 0 = not localized, 1=attached to a vehicle, 2 = attached to a point

 Gain is linear \(directly multiplied with the signal\).

 Azimut in radians, Distance and DistanceMax in meters. DistanceMAx corresponsd to the distance from the source cannot

 be heard anymore

|
|sound Id \(int\)|
|play in loop \(1/0 Int\)|
|Gain \(float\) TypeSpat \(int\) Azimut \(float, in rad\) Distance \(float, in m\)

 DistanceMax \(float, in m\)

|
|SOUND\_STOP|Slot index \(int\)|Stops playing a sound|
|SOUND\_PAUSE|Slot index \(int\)|Pause the playback of a sound|
|SOUND\_RESUME|Slot index \(int\)|Resume a paused sound|
|SOUND\_VOLUME|Slot index \(int\)|Changes the volume of a sound. The gain is linear \(value directly multiplied to the signal\)|
|Gain \(float\)|
|SOUND\_UPDATE\_POSITION|Slot index \(int\)|Updates the position of the sound at \#slot index|
|Azimut \(float, in rad\)|
|Distance \(float, in m\)|

## Error and warning messages

Messages sent toward the main simulation application when required:

|KEY WORD

 \(Address Pattern\)

|TYPE|COMMENTS|
|Messages sent once by state change:|
|WARNING|String|sends a warning message|
|ERROR|String|sends an error message|

## Start, stop, state management 

The main simulation application has to start and stop Car Sound Simulator.

|KEY WORD

 \(Address Pattern\)

|TYPE|COMMENTS|
|Message sent periodically to the main application|
|ALIVE|-|Indicates that Car Sound Simulator is still alive|

## Head-tracking 

Message sent to locate the position of the listener's head for head-tracked binaural rendering

|KEY WORD

 \(Address Pattern\)

|TYPE|COMMENTS|
|Message sent periodically to the main application|
|HEAD-POSITION|X \(float\) Y \(float\) Z \(float\)

 rotZ \(float\) rotY \(float\) rotX \(float\)

|Position of the listener's head in space.

 Distances are in meters, angles in radians.

 X points front

 Y points to the right Z points below

 The azimuth angle is then rotZ, with a positive angle when the listener turns his head to the right.

 Elevation angle is then rotY with a positive angle when the listener raises the head.

|

**Parent topic:**[API for Direct Driving of Ansys Sound: Car Sound Simulator through UDP](../../Sound/UG_Car/car_ost.md)

