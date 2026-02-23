# Car Sound Simulator - OSC Messages

Car Sound Simulator is driven by OSC MESSAGES sent over UDP,  with each action associated with one message. The action name is a KEYWORD, followed by some OSC ARGUMENTS.

## Basic management messages

Basic management for the sound generator.

#### Messages sent once by state change

|KEYWORD (Address Pattern)|TYPE   |Comments|
|-------------------------|-------|--------|
|INIT\_DATAPATH            |String|Data initialization: Data path|
|INIT\_CONFIGFILE          |String|Data initialization: File name|
|DSP\_START| |Starts the CSS Audio Engine|
|DSP\_STOP| |Stops the CSS Audio Engine \(sound off\)|
|START\_KEY|Integer|Position of the start key : <ul><li>0 : off</li><li>1 : contact</li><li>2 : on</li><li>3 : start</li></ul>|

#### Messages sent regularly

|KEYWORD (Address Pattern)|TYPE   |Comments|
|-------------------------|-------|--------|
|SPEED|Float \(m/s\)|Absolute vehicle speed|
|RPM|Float \(rev/min\)|Engine speed \(revolutions per minute\)|
|CHARGE|Float \(between 0. and 1.\)|Throttle load|
|OUTPUT\_TYPE|String|Audio output configuration:<ul><li>"Stereo"</li><li>"2.1"</li><li>"4.1"</li><li>"4.0"<ul><li>"Binaural"</li><li>"Transaural"</li></ul></li></ul>|
|SCANMAX\_VERSION|String|Unused|

## Traffic noise management

The exploiting application handles up to 8 traffic vehicles, corresponding to 8 possible synthesis slots. These 8 vehicles must be chosen by the simulator depending on their contribution to the sound scene, for example by selecting the closest ones.

Angles are in radians, 0 is a front source, -pi/2 is left, +pi/2 is right. Angles greater than pi or less than -pi are accepted.

Note that the specified traffic vehicle speed only serves sound source synthesis. It does not affect the Doppler effect, which is only controlled by the successive relative positions set with the TRAFIC_UPDATE message.

#### Messages sent once by state change

|KEYWORD (Address Pattern)|TYPE   |Comments|
|-------------------------|-------|--------|
|TRAFIC_INIT|Slot index \(int\)<br> Vehicle type (int)<br> Distance (float in m)<br> Azimuth (in rad) <br> Absolute speed (float in m/s)|Traffic synthesis initialization at slot index.<br>\(1<=slot index<=8\)<br> Type: <ul><li>0 = unknown</li><li>1 = car</li><li>2 = truck/bus</li><li>3 = motorbike</li></ul>|
|TRAFIC\_STOP|slot index \(int\)|Traffic sound synthesis stopped at slot index \(1<=slot index<=8\)|

#### Messages sent regularly

|KEYWORD (Address Pattern)|TYPE   |Comments|
|-------------------------|-------|--------|
|TRAFIC\_UPDATE|Slot \(int\)<br> Distance \(float, in m\)<br> Azimut\(float, in rad\)<br> Vitesse \(float, in m/s\)|Update of the traffic vehicle characteristics \(distance, azimuth, speed\) at slot index<br>\(1<=slot index<=8\).|


## Harmonic sources management

The application handles up to 10 harmonic sources. Each of them can be controlled with the following messages:

#### Messages sent once by state change

KEYWORD (Address Pattern)|TYPE   |Comments|
|------------------------|-------|--------|
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
|HS\_AZIM|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is the azimuth angle in degrees for the spatial positioning of the source \(between -180° and 180°\).|
|HS\_VOL|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is a gain value in dB applied to that source \(between -15 and +15 dB\).|
|HS\_WIDTH|ID \(int\) Value \(int\)|ID is the number of the specific harmonic source. Value is the coefficient of diffuseness of the source, between 0 and 100% \(0% means the source has no diffuseness, it can be perceived from a specific direction, 100% means the source is totally diffuse, it is perceived as surrounding and coming from all speakers with the same energy\).|

## Tire noises of the main vehicle

Tire noise has to be updated for each wheel by providing information about the current slippiness.

#### Messages sent once by state change

<table>
                    <thead>
                        <tr>
                            <th outputclass="thead2">
                            <p>KEYWORD</p>
                            <p>(Address Pattern)</p>
                        </th>
                        <th outputclass="thead2">TYPE</th>
                        <th outputclass="thead2">COMMENTS</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GROUND_INDEX</td>
                            <td>int (0-3)</td>
                            <td><p>0 = asphalt, 1 = concrete, 2 = grass, 3 = cobblestone</p></td>
                        </tr>
                        <tr>
                        <td rowspan="3">SCREECH</td>
                        <td rowspan="3">float x8</td>
                        <td>
                            <p>4 x wheel slipping intensity between -1 and 1.</p>
                            <p>(float in this order : front left, front right, rear left, rear
                                right)</p>
                        </td>
                    </tr>
                        <tr>
                        <td>
                            <p>4 x wheel slipping angle of each wheel in radians (2*pi-periodic)</p>
                            <p>(float in this order : front left, front right, rear left, rear
                                right)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>For example: SCREECH 0.2 0.2 0.15 0.15 0.4 0.4 0.1 0.1</p>
                        </td>
                    </tr>
                        <tr>
                        <td rowspan="3">WHEEL_ ADHERENCE</td>
                        <td rowspan="3">int + float x4</td>
                        <td>
                            <p>4 pairs composed of an int (wheel index) and a float (wheel stickiness coefficient)</p>
                            <p>Wheel indexes are 0, 1, 2, and 3, for front-left, front-right, rear-left, and rear-right wheels, respectively.</p>
                            <p>Wheel stickiness coefficient range is between 0 and 1.</p>
                        </td>
                    </tr>
                        <tr>
                        <td>
                            <p>For example: WHEEL_ADHERENCE 0 0.1 1 0.3 2 0.7 3 0.7</p>
                        </td>
                    </tr>
                    </tr>
                        <tr>
                        <td>
                            <p>0.7 &lt; float stickiness coefficient &lt; 1 : dry</p>
                            <p>0.2 &lt; float stickiness coefficient &lt; 0.7 : wet</p>
                            <p>0.1 &lt; float stickiness coefficient &lt; 0.2 : snowy</p>
                        </td>
                    </tr>
                    </tbody>
                </tgroup>
</table>

## Weather management

Weather noise management.

#### Messages sent once by state change

|KEYWORD \(Address Pattern\)|TYPE|COMMENTS|
|---------------------------|----|--------|
|WEATHER\_RAIN|int \(0-100\)|% rain|
|WEATHER\_WIND|int \(0-100\)|% wind|

## Additional noises

Loading orders of additional simulation noises.
#### Messages sent once by state change.

|KEYWORD \(Address Pattern\)|TYPE|COMMENTS|
|---------------------------|----|--------|
|MOTOR\_PARTIALS|string|.motor file to load \(path must include slashes '/' instead of '\\'\)|
|MOTOR\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|AERO\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|ROLLING\_NOISE|string|.noise file to load \(path must include slashes '/' instead of '\\'\)|
|STARTER\_MOTOR|string|wav file corresponding to the engine starting noise|
|HORN|0 or 1|Triggers the built-in horn sound (sawtooth signal). Note that the sound is triggered on onsets only; several 1s sent in a row only trigger the sound once.|
|INDICATORS|0 or 1|Plays the built-in turn indicator sound. 0=off; 1=on.|

## Sound files playing

Supported functions:

-   sendSoundLoad : loads a sound
-   sendSoundPlay : plays a sound \(looping available\)
-   sendSoundStop : stops a sound play
-   sendSoundPause : pauses a sound play
-   sendSoundVolume : sets the sound volume

There are 10 available slots for sound playback in Car Sound Simulator. The main simulation application has to manage the slot index availabilities.

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
                        <td>Sound id (int,
                            0&lt;id&lt;32765)</td>
                        <td rowspan="2">Loads a file to play with the specified id.</td>
                    </tr>
                        <tr>
                        <td>File name (string)</td>
                    </tr>
                        <tr>
                        <td rowspan="4">SOUND_PLAY</td>
                        <td>Slot index (int)</td>
                        <td rowspan="4">
                            <p>Starts playing the sound &lt;Sound #id&gt; at slot &lt;#Slot index&gt;.</p>
                            <p>TypeSpat: 0 = not localized, 1=attached to a vehicle, 2 = attached to
                                a point.</p>
                            <p>Gain is linear (directly multiplied with the signal).</p>
                            <p>Azimuth in radians, Distance and DistanceMax in meters. DistanceMax
                                corresponds to the distance from the source where it can</p>
                            <p>no longer be heard.</p>
                        </td>
                    </tr>
                        <tr>
                        <td>Sound id (int)</td>
                    </tr>
                        <tr>
                        <td>Play in loop (1 or 0)</td>
                    </tr>
                        <tr>
                        <td>
                            <p>Gain (float) TypeSpat (int) Azimuth (float, in rad) Distance (float,
                                in m)</p>
                            <p>DistanceMax (float, in m)</p>
                        </td>
                    </tr>
                        <tr>
                        <td>SOUND_STOP</td>
                        <td>Slot index (int)</td>
                        <td>Stops playing the specified slot's sound.</td>
                    </tr>
                        <tr>
                        <td>SOUND_PAUSE</td>
                        <td>Slot index (int)</td>
                        <td>Pauses the playback of the specified slot's sound.</td>
                    </tr>
                        <tr>
                        <td>SOUND_RESUME</td>
                        <td>Slot index (int)</td>
                        <td>Resumes the specified slot's sound playback.</td>
                    </tr>
                        <tr>
                        <td rowspan="2">SOUND_VOLUME</td>
                        <td>Slot index (int)</td>
                        <td rowspan="2">Changes the volume of the specified slot's sound. The gain is linear (value
                            directly multiplied with the signal).</td>
                    </tr>
                        <tr>
                        <td>Gain (float)</td>
                    </tr>
                        <tr>
                        <td rowspan="3">SOUND_UPDATE_POSITION</td>
                        <td>Slot index (int)</td>
                        <td rowspan="3">Updates the position of the sound at slot &lt;#Slot index&gt;.</td>
                    </tr>
                    <tr>
                        <td>Azimuth (float, in rad)</td>
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

|KEYWORD \(Address Pattern\)|TYPE|COMMENTS|
|---------------------------|----|--------|
|WARNING|String|Sends a warning message|
|ERROR|String|Sends an error message|

## Start, stop, state management 

The main simulation application has to start and stop Car Sound Simulator.

#### Message sent periodically to the main application.

|KEYWORD \(Address Pattern\)|TYPE|COMMENTS|
|---------------------------|----|--------|
|ALIVE|-|Indicates that Car Sound Simulator is still running|

## Head-tracking 

Message sent to locate the position of the listener's head for head-tracked binaural rendering.

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
                            <p>X points to the front.</p>
                            <p>Y points to the right Z points below.</p>
                            <p>The azimuth angle is then rotZ, with a positive angle when the
                                listener turns their head to the right.</p>
                            <p>Elevation angle is then rotY with a positive angle when the listener
                                raises their head.</p>
                        </td>
                    </tr>
                    </tbody>
                </tgroup>
</table>
