# Car Sound Simulator - OSC Messages

Car Sound Simulator is driven by OSC MESSAGES sent over UDP,  with each action associated with one message. The action name is a KEYWORD, followed by some OSC ARGUMENTS.

## Basic management messages

Basic management for the sound generator

#### Messages sent once by state change

|KEY WORD (Address Pattern)|TYPE   |Comments|
|--------------------------|-------|--------|
|INIT\_DATAPATH            |String|Data initialization: Data path|
|INIT\_CONFIGFILE          |String|Data initialization: File Name|
|DSP\_START| |Starts the MAX/Msp Audio Engine|
|DSP\_STOP| |Stops the MAX/Msp Audio Engine \(sound off\)|
|START\_KEY|Integer|Position of the start key : <ul><li>0 : off</li><li>1 : contact</li><li>2 : on</li><li>3 : start</li></ul>|

#### Messages sent regularly

|KEY WORD (Address Pattern)|TYPE   |Comments|
|--------------------------|-------|--------|
|SPEED|Float \(m/s\)|absolute vehicle speed|
|RPM|Float \(tr/min\)|engine speed \(rounds by minutes\)|
|CHARGE|Float \(% between 0. and 1.\)|throttle load|
|OUTPUT\_TYPE|String|Audio output configuration type :<ul><li>- Stereo</li><li>- 2.1</li><li>- 4.1</li><li>- 4.0 <ul><li>Binaural</li><li>Transaural2HP</li></ul></li><li>[your system]</li></ul>|
|SCANMAX\_VERSION|String|unused|

## Traffic noise management

The exploiting application handles up to 8 traffic vehicles, corresponding to 8 possible synthesis slots. These 8 vehicles must be chosen by the simulator depending on their contribution to the sound scene, for example by selecting the closest ones.

Angles are in radians, 0 is a front source, -pi/2 is left, +pi/2 is right. Angles superior to pi or inferior to -pi are accepted

#### Messages sent once by state change

|KEY WORD (Address Pattern)|TYPE   |Comments|
|--------------------------|-------|--------|
|TRAFIC_INIT|Slot index \(Int\)<br> Vehicle type (int)<br> Distance (float en m)<br> Azimuth (en rad) <br> Absolute speed (float in m/s)|Traffic synthesis initialization at slot index.<br>\(1<=slot index<=8\)<br> Type: <ul><li>0 = unknown</li><li>1 = car</li><li>2 = truck/bus</li><li>3 = motorbike</li></ul>|
|TRAFIC\_STOP|slot index \(Int\)|Traffic sound synthesis stopped at slot index \(1<=slot index<=8\)|

#### Messages sent regularly

|KEY WORD (Address Pattern)|TYPE   |Comments|
|--------------------------|-------|--------|
|TRAFIC\_UPDATE|Slot \(Int\)<br> Distance \(Float, in m\)<br> Azimut\(Float, in rad\)<br> Vitesse \(Float, in m/s\)|Update of the traffic vehicle characteristics \(distance, azimuth, speed\) at slot index<br>\(1<=slot index<=8\).|


## Harmonic sources management

The application handles up to 10 harmonic sources. Each of them can be controlled with the following messages:

#### Messages sent once by state change

KEY WORD (Address Pattern)|TYPE   |Comments|
|-------------------------|-------|--------|
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
|HS\_AZIM|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is the azimuth angle in degrees for the spatial positioning of the source \(between -180° and 180°\)|
|HS\_VOL|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is a gain value in dB applied to that source \(between -15 and +15 dB\)|
|HS\_WIDTH|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is the coefficient of diffuseness of the source, between 0 and 100% \(0% means the source has no diffuseness, it can be perceived from a specific direction, 100% means the source is totally diffuse, it is perceived as surrounding and coming from all speakers with the same energy\).|

## Tires noises of the main vehicle

Tires Noise has to be updated for each wheel by providing information about the current slippyness

#### Messages sent once by state change

<table>
                    <thead>
                        <tr>
                            <th outputclass="thead2">
                            <p>KEY WORD</p>
                            <p>(Address Pattern)</p>
                        </th>
                        <th outputclass="thead2">TYPE &amp; COMMENTS</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GROUND_INDEX</td>
                            <td><p>0 = asphalt, 1 = concrete, 2 = grass, 3 = cobblestone (integer)</p></td>
                        </tr>
                        <tr>
                        <td rowspan="2">SCREECH</td>
                        <td>
                            <p>4 x slipping intensity -100% à 100%</p>
                            <p>(float in this order : front left, front right, rear left, rear
                                right)</p>
                        </td>
                    </tr>
                        <tr>
                        <td>
                            <p>4 x slipping angle of each wheel in radians</p>
                            <p>(float in this order : front left, front right, rear left, rear
                                right)</p>
                        </td>
                    </tr>
                        <tr>
                        <td rowspan="2">WHEEL_ ADHERENCE</td>
                        <td>
                            <p>4 x (int wheel index, float stickiness coefficient)</p>
                            <p>Ex : 0 0.1 1 0.3 2 0.7 3 0.7</p>
                        </td>
                    </tr>
                        <tr>
                        <td>
                            <p>0.7&lt; float stickiness coefficient &lt;1: dry 0.2&lt; float
                                stickiness coefficient &lt;0.7:wet</p>
                            <p>0.1&lt; float stickiness coefficient &lt;0.2 : snowy</p>
                        </td>
                    </tr>
                    </tbody>
                </tgroup>
</table>

## Weather management

Weather noise management

#### Messages sent once by state change

|KEY WORD \(Address Pattern\)|TYPE & COMMENTS|
|----------------------------|---------------|
|WEATHER\_RAIN|% rain, Integer from 0 to 100%|
|WEATHER\_WIND|% wind, Integer from 0 to 100%|

## Additional noises

Loading orders of additional simulation noises.
#### Messages sent once by state change.

|KEY WORD \(Address Pattern\)|TYPE|COMMENTS|
|----------------------------|----|--------|
|MOTOR\_PARTIALS|string|.motor file to load \(path must include slashes '/' instead of '\\'\)|
|MOTOR\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|AERO\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|ROLLING\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|STARTER\_MOTOR|string|wav file corresponding to the engine starting noise|

## Sound files playing

Supported functions:

-   sendSoundLoad : loads a sound
-   sendSoundPlay : play a sound \(looping available\)
-   sendSoundStop : stops a sound play
-   sendSoundPause : pauses a sound play
-   sendSoundVolume : sets the sound volume

There are 10 available slots for sound play in Car Sound Simulator. The main simulation application has to manage the slots indexes availability.

Notes:

-   the slots indexes are \>=1 and <=10
-   .wav extension is appended to the file name

#### Messages sent once by state change

<table>
    <thead>
        <tr>
            <th><b>KEYWORD (Address Pattern)</b></th>
            <th><b>TYPE</b></th>
            <th><b>COMMENTS</b></th>
        </tr>
    </thead>
                    <tbody>
                        <tr>
                        <td rowspan="2">SOUND_LOAD</td>
                        <td>sound Id (Integer,
                            0&lt;id&lt;32765)</td>
                        <td rowspan="2">loads a file to play</td>
                    </tr>
                        <tr>
                        <td>File Name (String)</td>
                    </tr>
                        <tr>
                        <td rowspan="4">SOUND_PLAY</td>
                        <td>Slot index (int)</td>
                        <td rowspan="4">
                            <p>Starts playing the sound #Id at slot #Slot index.</p>
                            <p>TypeSpat: 0 = not localized, 1=attached to a vehicle, 2 = attached to
                                a point</p>
                            <p>Gain is linear (directly multiplied with the signal).</p>
                            <p>Azimut in radians, Distance and DistanceMax in meters. DistanceMAx
                                corresponsd to the distance from the source cannot</p>
                            <p>be heard anymore</p>
                        </td>
                    </tr>
                        <tr>
                        <td>sound Id (int)</td>
                    </tr>
                        <tr>
                        <td>play in loop (1/0 Int)</td>
                    </tr>
                        <tr>
                        <td>
                            <p>Gain (float) TypeSpat (int) Azimut (float, in rad) Distance (float,
                                in m)</p>
                            <p>DistanceMax (float, in m)</p>
                        </td>
                    </tr>
                        <tr>
                        <td>SOUND_STOP</td>
                        <td>Slot index (int)</td>
                        <td>Stops playing a sound</td>
                    </tr>
                        <tr>
                        <td>SOUND_PAUSE</td>
                        <td>Slot index (int)</td>
                        <td>Pause the playback of a sound</td>
                    </tr>
                        <tr>
                        <td>SOUND_RESUME</td>
                        <td>Slot index (int)</td>
                        <td>Resume a paused sound</td>
                    </tr>
                        <tr>
                        <td rowspan="2">SOUND_VOLUME</td>
                        <td>Slot index (int)</td>
                        <td rowspan="2">Changes the volume of a sound. The gain is linear (value
                            directly multiplied to the signal)</td>
                    </tr>
                        <tr>
                        <td>Gain (float)</td>
                    </tr>
                        <tr>
                        <td rowspan="3">SOUND_UPDATE_POSITION</td>
                        <td>Slot index (int)</td>
                        <td rowspan="3">Updates the position of the sound at #slot index</td>
                    </tr>
                    <tr>
                        <td>Azimut (float, in rad)</td>
                    </tr>
                    <tr>
                        <td>Distance (float, in m)</td>
                    </tr>
                    </tbody>
                </tgroup>
</table>

## Error and warning messages

Messages sent to the main simulation application when required.

#### Messages sent once by state change

|KEY WORD \(Address Pattern\)|TYPE|COMMENTS|
|----------------------------|----|--------|
|WARNING|String|sends a warning message|
|ERROR|String|sends an error message|

## Start, stop, state management 

The main simulation application has to start and stop Car Sound Simulator.

#### Message sent periodically to the main application.

|KEY WORD \(Address Pattern\)|TYPE|COMMENTS|
|----------------------------|----|--------|
|ALIVE|-|Indicates that Car Sound Simulator is still alive|

## Head-tracking 

Message sent to locate the position of the listener's head for head-tracked binaural rendering

#### Message sent periodically to the main application

<table>
                    <thead>
                        <tr>
                            <th>
                            <p>KEY WORD</p>
                            <p>(Address Pattern)</p>
                        </td>
                            <th>TYPE</td>
                            <th>COMMENTS</td>
                    </thead>
                    <tbody>
                        <tr>
                        <td>HEAD-POSITION</td>
                        <td>
                            <p>X (float) Y (float) Z (float)</p>
                            <p>rotZ (float) rotY (float) rotX (float)</p>
                        </td>
                        <td>
                            <p>Position of the listener's head in space.</p>
                            <p>Distances are in meters, angles in radians.</p>
                            <p>X points front</p>
                            <p>Y points to the right Z points below</p>
                            <p>The azimuth angle is then rotZ, with a positive angle when the
                                listener turns his head to the right.</p>
                            <p>Elevation angle is then rotY with a positive angle when the listener
                                raises the head.</p>
                        </td>
                    </tr>
                    </tbody>
                </tgroup>
</table>
