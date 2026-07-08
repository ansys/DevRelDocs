# Sound Playback Process

For **3D Sources** and **Ambiance Sources**, the process is as follows:

1.  A sound file located on the audio PC \(or on the network\) is preloaded, and associated with an identification number.
2.  The playback is triggered using the identification number associated with a slot.
3.  The sound is stopped using the slot number.

To play a same sound on two different tracks \(or more\), a file must be loaded twice \(or more\), each instance associated with different IDs.

For **3D Input Streams**, starting and stopping the stream is done by enabling/disabling the dedicated input channel on the sound card.

For **3D Interpolated Sources**, the **Play**/**Stop** button allows the playback and stop of the samples from the corresponding source. The pitch of the sound and the way the samples overlap are controlled by the values of the **Control** parameter and the **Overlap** parameter respectively.

A maximum of twenty 3D sources, ten 3D interpolated sources, two Ambiance sources and three 3D input streams can be played at the same time.
