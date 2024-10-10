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
        <td>Sound ID (int, from 0 to 32765)</td>
        <td>Preload a sound file and assign it the specified ID as a
            reference for later use</td>
    </tr>
    <tr>
        <td>
            <p>File name (string)</p>
        </td>
        <td>Full path of the sound file including extension</td>
    </tr>
    <tr>
        <td rowspan="5">SOUND_PLAY_3D</td>
        <td>Source ID (int, from 0 to 20)</td>
        <td>Play the 3D sound source identified by the specified ID</td>
    </tr>
     <tr>
        <td>Sound ID (int)</td>
        <td>ID of the preloaded sound (message SOUND_LOAD)
            that should be played as this sound source</td>
    </tr>
     <tr>
        <td>Number of playback loops (int)</td>
        <td>Number of playback loops: -1 means infinite loop</td>
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
        <td>Source ID (int, from 1 to 10)</td>
        <td>Play the 3D interpolated sound source identified by the specified ID</td>
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
        <td>Source ID (int, from 1 to 2)</td>
        <td>Play the ambiance sound source identified by the specified ID</td>
    </tr>
    <tr>
        <td>Sound ID (int)</td>
        <td>ID of the preloaded sound (message SOUND_LOAD)
            that should be played as this sound source</td>
    </tr>
    <tr>
        <td>Number of playback loops (int)</td>
        <td>Number of playback loops: -1 means infinite loop</td>
    </tr>
    <tr>
        <td>Volume (float, gain in dB)</td>
        <td>Initial volume</td>
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
        <td>Speed (float)</td>
        <td>Playback speed (1 is the normal speed).
            Changing the values also affects the pitch.</td>
    </tr>
    <tr>
        <td rowspan="8">INPUTCHANNEL_SOUND_PLAY</td>
        <td>Source ID (int, from 1 to 3)</td>
        <td>
            <p>Play the 3D input audio stream identified by the specified ID</p>
        </td>
    </tr>
    <tr>
        <td>Channel index (int)</td>
        <td>Index of the sound card’s input channel to use as 3D input audio stream</td>
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
        <td>SOUND_STOP_3D</td>
        <td>Source ID (int, from 1 to 20)</td>
        <td>Stop the playback of the 3D sound source
            identified by the specified ID</td>
    </tr>
    <tr>
        <td>INTERP_SOUND_STOP</td>
        <td>Source ID (int, from 1 to 10)</td>
        <td>Stop the playback of the 3D interpolated sound source
            identified by the specified ID</td>
    </tr>
    <tr>
        <td>SOUND_STOP_AMBIANCE</td>
        <td>Source ID (int, from 1 to 2)</td>
        <td>Stop the playback of the ambiance sound source
            identified by the specified ID</td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_SOUND_STOP</td>
        <td>Source ID (int, from 1 to 3)</td>
        <td>Stop the playback of the 3D input audio stream
            identified by the specified ID</td>
    </tr>
    <tr>
        <td>SOUND_VOLUME_3D</td>
        <td>
            <p>Source ID (int, from 1 to 20)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Change the sound volume of the 3D sound source
               identified by the specified ID</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 20 dB</p>
        </td>
    </tr>
    <tr>
        <td>INTERP_SOUND_VOLUME</td>
        <td>
            <p>Source ID (int, from 1 to 10)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Change the sound volume of the 3D interpolated sound source
               identified by the specified ID</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 10 dB</p>
        </td>
    </tr>
    <tr>
        <td>SOUND_VOLUME_AMBIANCE</td>
        <td>
            <p>Source ID (int, from 1 to 2)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Change the sound volume of the ambiance sound source
               identified by the specified ID</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 20 dB</p>
        </td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_VOLUME</td>
        <td>
            <p>Source ID (int, from 1 to 3)</p>
            <p>Volume (float, gain in dB)</p>
        </td>
        <td>
            <p>Change the sound volume of the 3D input stream
               identified by the specified ID</p>
            <p>0 dB = unitary gain</p>
            <p>Maximum gain allowed = 20 dB</p>
        </td>
    </tr>
    <tr>
        <td>SOLO_3D</td>
        <td>
            <p>Source ID (int, from 1 to 20)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) for a 3D sound source,
            all other non-soloed 3D sound sources are muted.</td>
    </tr>
    <tr>
        <td>INTERP_SOLO</td>
        <td>
            <p>Source ID (int, from 1 to 10)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) for a 3D interpolated sound source,
            all other non-soloed 3D interpolated sound sources are muted.</td>
    </tr>
    <tr>
        <td>SOLO_AMBIANCE</td>
        <td>
            <p>Source ID (int, from 1 to 2)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) for an ambiance sound source,
            all other non-soloed ambiance sound sources are muted.</td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_SOLO</td>
        <td>
            <p>Source ID (int, from 1 to 3)</p>
            <p>Solo info (int 0/1)</p>
        </td>
        <td>When solo is activated (1) for a 3D input stream,
            all other non-soloed input streams are muted.</td>
    </tr>
    <tr>
        <td>MUTE_3D</td>
        <td>
            <p>Source ID (int, from 1 to 20)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>When mute is activated (1) for a 3D sound source, it becomes silent.</td>
    </tr>
    <tr>
        <td>INTERP_MUTE</td>
        <td>
            <p>Source ID (int, from 1 to 10)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>When mute is activated (1) for a 3D interpolated sound source, it becomes silent.</td>
    </tr>
    <tr>
        <td>MUTE_AMBIANCE</td>
        <td>
            <p>Source ID (int, from 1 to 2)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>When mute is activated (1) for an ambiance sound source, it becomes silent.</td>
    </tr>
    <tr>
        <td>INPUTCHANNEL_MUTE</td>
        <td>
            <p>Source ID (int, from 1 to 3)</p>
            <p>Mute info (int 0/1)</p>
        </td>
        <td>When mute is activated (1) for a 3D input stream, it becomes silent.</td>
    </tr>
                    <tr>
                        <td>ACTIVE_SPAT_3D</td>
                        <td>
                            <p>Source ID (int, from 1 to 20)</p>
                            <p>Spat info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural or transaural restitution only. When spatialization
                                is activated (1), the sound can be perceived in 3D.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_ACTIVE_SPAT</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
                            <p>Spat info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural or transaural restitution only. When spatialization
                                is activated (1), the sound can be perceived in 3D.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_ACTIVE_SPAT</td>
                        <td>
                            <p>Source ID (int, from 1 to 3)</p>
                            <p>Spat info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural or transaural restitution only. When spatialization
                                is activated (1), the sound can be perceived in 3D.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>ACTIVE_TRACKING_3D</td>
                        <td>
                            <p>Source ID (int, from 1 to 20)</p>
                            <p>Head-tracking info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural restitution only. When head-tracking
                                is activated (1), the apparent source position remains the same
                                however the listener moves their head.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_ACTIVE_TRACKING</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
                            <p>Head-tracking info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural restitution only. When head-tracking
                                is activated (1), the apparent source position remains the same
                                however the listener moves their head.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_ACTIVE_TRACKING</td>
                        <td>
                            <p>Source ID (int, from 1 to 3)</p>
                            <p>Head-tracking info (int 0/1)</p>
                        </td>
                        <td>
                            <p>For binaural restitution only. When head-tracking is
                                activated (1), the apparent source position remains the same
                                however the listener moves their head.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>SPEED_3D</td>
                        <td>
                            <p>Source ID (int, from 1 to 20)</p>
                            <p>Playback speed (float)</p>
                        </td>
                        <td>
                            <p>Playback speed for the 3D sound source identified by the
                                specified ID (1 is the normal speed). Changing the
                                value also affects the pitch.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>SPEED_AMBIANCE</td>
                        <td>
                            <p>Source ID (int, from 1 to 2)</p>
                            <p>Playback speed (float)</p>
                        </td>
                        <td>
                            <p>Playback speed for the ambiance sound source identified by the
                                specified ID (1 is the normal speed). Changing
                                the value also affects the pitch.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3D_SOURCE_TRAJECTORY</td>
                        <td>
                            <p>Source ID (int, from 1 to 20)</p>
                            <p>File name (string)</p>
                        </td>
                        <td>
                            <p>Load a trajectory for the 3D sound source
                                identified by the specified ID</p>
                            <p>Full path of the trajectory file including extension</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_TRAJECTORY</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
                            <p>File name (string)</p>
                        </td>
                        <td>
                            <p>Load a trajectory for the 3D interpolated sound source 
                                identified by the specified ID</p>
                            <p>Full path of the trajectory file including extension</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3D_SOURCE_DIFFUSENESS</td>
                        <td>
                            <p>Source ID (int, from 1 to 20)</p>
                            <p>Diffuseness value (int, %)</p>
                        </td>
                        <td>
                            <p>For VBAP rendering mode only.</p>
                            <p>Specify how diffuse the spatialization of the 3D sound
                                source identified by the specified ID shall be.</p>
                            <p>0% means the source is not spread, 100% means the source is totally
                                surrounding and diffused over all speakers.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_SOURCE_DIFFUSENESS</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
                            <p>Diffuseness value (int, %)</p>
                        </td>
                        <td>
                            <p>For VBAP rendering mode only.</p>
                            <p>Specify how diffuse the spatialization of the 3D interpolated sound
                                source identified by the specified ID shall be.</p>
                            <p>0% means the source is not spread, 100% means the source is totally
                                surrounding and diffused over all speakers.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_SOURCE_DIFFUSENESS</td>
                        <td>
                            <p>Source ID (int, from 1 to 3)</p>
                            <p>Diffuseness value (int, %)</p>
                        </td>
                        <td>
                            <p>For VBAP rendering mode only.</p>
                            <p>Specify how diffuse the spatialization of the 3D input
                                audio stream identified by the specified ID shall be.</p>
                            <p>0% means the source is not spread, 100% means the source is
                                surrounding and diffused over all speakers.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_CONTROL_PARAM</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
                            <p>Control parameter value (int)</p>
                        </td>
                        <td>
                            <p>Depending on the type of source, the control parameter can be speed,
                                RPM, or any parameter that has an influence on the rendering of the
                                source.</p>
                        </td>
                    </tr>
                                        <tr>
                        <td>INTERP_CONTROL_PARAMETER_FILE</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
                            <p>FileName (string)</p>
                        </td>
                        <td>
                            <p>File containing a sequence of control parameters (as above), varying with time.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_OVERLAP</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
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
                        <td rowspan="3">HEAD_POSITION_3D</td>
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
                            <p>Elevation (float)</p>
                            <p>Azimuth (float)</p>
                            <p>Roll (float)</p>
                        </td>
                        <td>
                            <p>Coordinate Mode A</p> <p>Head orientation using Euler Angles in radians</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Azimuth (float)</p>
                            <p>Elevation (float)</p>
                            <p>Roll (float)</p>
                        </td>
                        <td>
                            <p>Coordinate Mode B</p> <p>Head orientation using Euler Angles in radians</p>
                        </td>
                    </tr>
                    <tr>
                        <td>SOURCE_POSITION_3D</td>
                        <td>
                            <p>Source ID (int, from 1 to 20)</p>
                            <p>x (float)</p>
                            <p>y (float)</p>
                            <p>z (float)</p>
                        </td>
                        <td>
                            <p>3D sound source position update</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INTERP_SOURCE_POSITION</td>
                        <td>
                            <p>Source ID (int, from 1 to 10)</p>
                            <p>x (float)</p>
                            <p>y (float)</p>
                            <p>z (float)</p>
                        </td>
                        <td>
                            <p>3D interpolated sound source position update</p>
                        </td>
                    </tr>
                    <tr>
                        <td>INPUTCHANNEL_POSITION</td>
                        <td>
                            <p>Source ID (int, from 1 to 3)</p>
                            <p>x (float)</p>
                            <p>y (float)</p>
                            <p>z (float)</p>
                        </td>
                        <td>
                            <p>3D input audio stream position update</p>
                        </td>
                    </tr>
                </tbody>
                </table>
