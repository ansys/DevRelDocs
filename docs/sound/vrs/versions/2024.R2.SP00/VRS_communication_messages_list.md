# Messages List

There are 3 types of messages:

- The control messages, corresponding to a global instruction, such as initialization.
- The event service messages, such as the loading or triggering of a sound source.
- The recurrent service messages sent periodically, corresponding to updates of the listener position or the sources positions.

## Control Messages

<table>
  <thead>
    <tr>
      <th><b>Keyword</b></th>
      <th><b>Data</b></th>
      <th><b>Comments</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">GLOBAL_INIT</td>
      <td>IP address of the supervisor (for example : 192.168.0.1)</td>
      <td rowspan="3">IP address and port used for the sending of state messages. Resets the sound generator (Id's cleared).</td>
    </tr>
    <tr>
    <td>Port (for example : 5555)</td>
    </tr>
    <tr>
    <td>Sending period of the ALIVE message (in milliseconds)</td>
    </tr>
    <tr>
      <td>GLOBAL_PAUSE</td>
      <td>none</td>
      <td>Pauses the playback of all sound sources. Freezes the sound generator.</td>
    </tr>
    <tr>
      <td>GLOBAL_RESUME</td>
      <td>none</td>
      <td>Resumes the playback.</td>
    </tr>
    <tr>
      <td>GLOBAL_3D_MODE</td>
      <td>Rendering Mode (string)</td>
      <td>The rendering modes are:<br>Binaural<br>VBAP<br>Transaural<br>DoubleTransaural<br>Ambisonic</td>
    </tr>
    <tr>
      <td>API_COORDINATES_MODE</td>
      <td>Coordinate Mode (string)</td>
      <td>The available coordinate modes are:<br>A - Virtools/Unity<br>B - Polhemus<br>C - Angular mode</td>
    </tr>
  </tbody>
</table>

## Event Service Messages

<table>
   <thead>
    <tr>
      <th><b>Keyword</b></th>
      <th><b>Data</b></th>
      <th><b>Comments</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td rowspan="2">SOUND_LOAD</td>
        <td>Id (Int, from 0 to 32765)</td>
        <td>Preload a sound</td>
    </tr>
    <tr>
        <td>
            <p>File name (string)</p>
        </td>
        <td>Full path of the sound file including extension</td>
    </tr>
    <tr>
        <td rowspan="5">SOUND_PLAY_3D</td>
        <td>Playback Slot (int)</td>
        <td>Playback of a spatialized sound (1 ≤ Slot ≤ 10)</td>
    </tr>
     <tr>
        <td>Sound Id (int)</td>
        <td></td>
    </tr>
     <tr>
        <td>Number of playbacks (int)</td>
        <td>Number of playbacks: -1 means infinite loop</td>
    </tr>
    <tr>
        <td>Volume (float, gain in dB)</td>
        <td>Initial volume</td>
    </tr>
    <tr>
        <td>
            <p>x (float)</p>
            <p>y (float)</p>
            <p>z (float)</p>
        </td>
        <td>Initial position of the source</td>
    </tr>
    <tr>
        <td rowspan="7">INTERP_SOUND_PLAY</td>
        <td>Slot (int, from 1 to 10)</td>
        <td>Playback of a spatialized sound (1 ≤ Slot ≤ 10)</td>
    </tr>
    <tr>
        <td>>Volume (float, gain in dB)</td>
        <td>Initial volume</td>
    </tr>
    <tr>
        <td>
            <p>x (float)</p>
            <p>y (float)</p>
            <p>z (float)</p>
        </td>
        <td>Initial position of the source</td>
    </tr>
    <tr>
        <td>Spat (int 0/1)</td>
        <td>Spatialization off/on</td>
    </tr>
    <tr>
        <td>Tracker (int 0/1)</td>
        <td>Tracking off/on</td>
    </tr>
    <tr>
        <td>Solo (int 0/1)</td>
        <td>Solo off/on</td>
    </tr>
    <tr>
        <td>Mute (int 0/1)</td>
        <td>Mute off/on</td>
    </tr>
    <tr>
        <td rowspan="7">SOUND_PLAY_AMBIANCE</td>
        <td>Playback Slot (int)</td>
        <td>Playback of an ambiance source (1 ≤ Slot ≤ 2)</td>
    </tr>
    <tr>
        <td>Sound Id (int)</td>
        <td></td>
    </tr>
    <tr>
        <td>Number of playbacks (int)</td>
        <td>Number of playbacks: -1 means infinite loop</td>
    </tr>
    <tr>
        <td>Volume (float, gain in dB)</td>
        <td>Initial volume</td>
    </tr>
    <tr>
        <td>>Solo (int 0/1)</td>
        <td>Solo off/on</td>
    </tr>
    <tr>
        <td>Mute (int 0/1)</td>
        <td>Mute off/on</td>
    </tr>
    <tr>
        <td>Speed (float)</td>
        <td>Playback speed (1 is the normal speed). Changing the values also affects the pitch.</td>
    </tr>
    <tr>
        <td rowspan="7">INPUTCHANNEL_SOUND_PLAY</td>
        <td>Channel Id (int)</td>
        <td>
            <p>Activates the playback of an input audio stream.</p>
            <p>ID = input number in the sound card.</p>
        </td>
    </tr>
    <tr>
        <td>Volume (float, gain in dB)</td>
        <td>Initial volume</td>
    </tr>
    <tr>
        <td>
            <p>x (float)</p>
            <p>y (float)</p>
            <p>z (float)</p>
        </td>
        <td>Initial position of the source</td>
    </tr>
    <tr>
        <td>Spat (int 0/1)</td>
        <td>Spatialization off/on</td>
    </tr>
    <tr>
        <td>>Tracker (int 0/1)</td>
        <td>Tracking off/on</td>
    </tr>
    <tr>
        <td>Solo (int 0/1)</td>
        <td>Solo off/on</td>
    </tr>
    <tr>
        <td>Mute (int 0/1)</td>
        <td>Mute off/on</td>
    </tr>
    <tr>
        <td>SOUND_STOP_3D</td>
        <td>Slot (int)</td>
        <td>Stops the playback of a 3D sound</td>
    </tr>
    <tr>
        <td>INTERP_SOUND_STOP</td>
        <td>Slot (int, from 1 to 10)</td>
        <td>Stops the playback of a 3D Interpolated source</td>
    </tr>
    <tr>
        <td>SOUND_STOP_AMBIANCE</td>
        <td>Slot (int)</td>
        <td>Stops the playback of an ambiance sound</td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_SOUND_STOP</td>
        <td>Channel Id (int)</td>
        <td>Stops the input channel audio stream</td>
    </tr>
    <tr>
        <td>SOUND_VOLUME_3D</td>
        <td>
            <p>Slot (int)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Changes the sound volume of an ambiance sound.</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 20 dB</p>
        </td>
    </tr>
    <tr>
        <td>INTERP_SOUND_VOLUME</td>
        <td>
            <p>Slot (int)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Changes the sound volume of a 3D interpolated source.</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 10 dB</p>
        </td>
    </tr>
    <tr>
        <td>SOUND_VOLUME_AMBIANCE</td>
        <td>
            <p>Slot (int)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Changes the sound volume of an ambiance sound.</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 20 dB</p>
        </td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_VOLUME</td>
        <td>
            <p>Channel Id (int)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Changes the sound volume of the input channel stream.</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 20 dB</p>
        </td>
    </tr>
    <tr>
        <td>SOLO_3D</td>
        <td>
            <p>Slot (int)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) on a 3D track, all other tracks are muted except those in solo mode.</td>
    </tr>
    <tr>
        <td>INTERP_SOLO</td>
        <td>
            <p>Slot (int)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) on a 3D interpolated source, all other tracks are muted except those in solo mode.</td>
    </tr>
    <tr>
        <td>SOLO_AMBIANCE</td>
        <td>
            <p>Slot (int)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) on an ambiance track, all other tracks are muted except those in solo mode.</td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_SOLO</td>
        <td>
            <p>Channel Id (int)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) on the input channel track, all other tracks are muted except those in solo mode.</td>
    </tr>
    <tr>
        <td>MUTE_3D</td>
        <td>
            <p>Slot (int)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>When mute is activated (1) on a 3D track, this track becomes silent.</td>
    </tr>
    <tr>
        <td>INTERP_MUTE</td>
        <td>
            <p>Slot (int)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>When mute is activated (1) on a 3D interpolated source, this track becomes silent.</td>
    </tr>
    <tr>
        <td>MUTE_AMBIANCE</td>
        <td>
            <p>Slot (int)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>>When mute is activated (1) on an ambiance track, this track becomes silent.</td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_MUTE</td>
        <td>
            <p>Channel Id (int)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>When mute is activated (1) on the input channel track, this track becomes silent.</td>
    </tr>
                    <tr>
                        <td>ACTIVE_SPAT_3D</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Spat info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural or transaural restitution only. When the spatialization
                                is activated (1), the sound can be perceived in 3D.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_ACTIVE_SPAT</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Spat info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural or transaural restitution only. When the spatialization
                                is activated (1), the sound can be perceived in 3D.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_ACTIVE_SPAT</td>
                        <td>
                            <p>Channel Id (int)</p>
                            <p>Spat info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural or transaural restitution only. When the spatialization
                                is activated (1), the sound can be perceived in 3D.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>ACTIVE_TRACKING_3D</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Head-tracking info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For 3D tracks and binaural restitution only. When the head-tracking
                                is activated(1), the listener can move their head and the source
                                remains at an absolute position in space.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_ACTIVE_TRACKING</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Head-tracking info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For 3D tracks and binaural restitution only. When the head-tracking
                                is activated(1), the listener can move their head and the source
                                remains at an absolute position in space.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_ACTIVE_TRACKING</td>
                        <td>
                            <p>Channel Id (int)</p>
                            <p>Head-tracking info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural restitution only. When the head- tracking is
                                activated(1), the listener can move their head and the input
                                channelstream remains at an absolute position in space.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>SPEED_3D</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Playback speed (float)</p>
                        </td>
                        <td>
                            <p>Playback speed for 3D sounds (1 is the normal speed). Changing the
                                values also affects the pitch.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>SPEED_AMBIANCE</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Playback speed (float)</p>
                        </td>
                        <td>
                            <p>Playback speed for ambiance sounds (1 is the normal speed). Changing
                                the values also affects the pitch.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3D_SOURCE_TRAJECTORY</td>
                        <td>
                            <p>Slot (Int, from 1 to 20)</p>
                            <p>File name (string)</p>
                        </td>
                        <td>
                            <p>Load a trajectory.</p>
                            <p>Full path of the trajectory file including extension.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_TRAJECTORY</td>
                        <td>
                            <p>Slot (Int, from 1 to 10)</p>
                            <p>File name (string)</p>
                        </td>
                        <td>
                            <p>Load a trajectory.</p>
                            <p>Full path of the trajectory file including extension.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3D_SOURCE_DIFFUSENESS</td>
                        <td>
                            <p>Slot (Int, from 1 to 20)</p>
                            <p>Diffuseness value (int, %)</p>
                        </td>
                        <td>
                            <p>For 3D sources in VBAP rendering mode only.</p>
                            <p>0% means the source is not spread, 100% means the source is totally
                                surrounding and diffused over all speakers.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_SOURCE_DIFFUSENESS</td>
                        <td>
                            <p>Slot (Int, from 1 to 10)</p>
                            <p>Diffuseness value (int, %)</p>
                        </td>
                        <td>
                            <p>For interpolated sources in VBAP rendering mode only.</p>
                            <p>0% means the source is not spread, 100% means the source is totally
                                surrounding and diffused over all speakers.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_SOURCE_DIFFUSENESS</td>
                        <td>
                            <p>Slot (Int, from 1 to 3)</p>
                            <p>Diffuseness value (int, %)</p>
                        </td>
                        <td>
                            <p>For 3D input streams in VBAP rendering mode only.</p>
                            <p>0% means the source is not spread, 100% means the source is
                                surrounding and diffused over all speakers.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_CONTROL_PARAM</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Control parameter value (int)</p>
                        </td>
                        <td>
                            <p>Depending on the type of source, the control parameter can be speed,
                                RPM, or any parameter that has an influence on the rendering of the
                                source.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_OVERLAP</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>Overlap value (int)</p>
                        </td>
                        <td>
                            <p>This is the overlap value between two adjacent samples, in the same
                                unit as the control parameter.</p>
                        </td>
                    </tr>
                </tbody>
            </tgroup>
                </table>

## Recurrent Service Messages

<table>
                <thead>
                    <tr>
                        <td> <b>Keyword</b> </td>
                        <td> <b>Data</b> </td>
                        <td> <b>Comments</b> </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowspan="2">HEAD_POSITION_3D</td>
                        <td>
                            <p>x (float)</p>
                            <p>y (float)</p>
                            <p>z (float)</p>
                        </td>
                        <td>
                            <p>Head coordinates</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Yaw (float, radians)</p>
                            <p>Pitch (float, radians)</p>
                            <p>Roll (float, radians)</p>
                        </td>
                        <td>
                            <p>Head orientation using Euler Angles (Tait-Bryan convention: Azimuth-
                                Elevation-Roll)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>SOURCE_POSITION_3D</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>x (float)</p>
                            <p>y (float)</p>
                            <p>z (float)</p>
                        </td>
                        <td>
                            <p>Source position update</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_SOURCE_POSITION</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>x (float)</p>
                            <p>y (float)</p>
                            <p>z (float)</p>
                        </td>
                        <td>
                            <p>Source position update</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_POSITION</td>
                        <td>
                            <p>Slot (int)</p>
                            <p>x (float)</p>
                            <p>y (float)</p>
                            <p>z (float)</p>
                        </td>
                        <td>
                            <p>Input channel stream position update</p>
                        </td>
                    </tr>
                </tbody>
                </table>
