# State of the Sound Generator {#jpkgaeState}

The following messages are periodically sent by the sound generator to give information regarding its state.

|**Keyword**|**Data**|**Comments**|
|***Messages periodically sent by the sound generator***|
|ALIVE|none|Provides information that the sound generator is functioning

 Sent each 500ms, or by a time lapse

 defined by GLOBAL\_INIT

|
|***Messages sporadically sent by the sound generator***|
|WARNING|string|Reports a warning|
|ERROR|string|Reports an error|
|INFO END\_PLAY\_3D|Id \(int\)|Informs that the playback of the 3D

 sound associated with Id is over

|
|INFO END\_PLAY\_AMBIANCE|Id \(int\)|Informs that the playback of the

 ambiance sound associated with Id is over

|

The sound generator is not functioning when no ALIVE message is sent in the time frame defined above.

**Parent topic:**[Communication](../../Sound/UG_VRS/VRS_communication.md)

