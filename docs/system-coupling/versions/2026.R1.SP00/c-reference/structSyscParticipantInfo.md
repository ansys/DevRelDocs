# Structure SyscParticipantInfo

![][C]
![][public]

**Definition**: `syscCommonTypes.h` (line 353)

Provide a structure to provide connection info to System Coupling.

**Parameters**:

* **scHost**: Name of the host on which System Coupling is running.
* **scPort**: Port number on which System Coupling is listening for participant connections.
* **participantName**: Name of this participant (e.g. "MAPDL-1").
* **buildInformation**: Information about the build of this participant solver.
* **isCosimulation**: Flag signifying if the simulation is a cosimulation.
* **transcriptFilename**: The filename to be given to the output participant transcript.


**Returns**:

[SyscError](structSyscError.md#structSyscError) Can be checked for any errors.

## Members

* [buildInformation](structSyscParticipantInfo.md#structSyscParticipantInfo_1aa341c59a4953b40db05064cd5495d9f7)
* [participantName](structSyscParticipantInfo.md#structSyscParticipantInfo_1afda543c3aeea91e0136520fca2487d6b)
* [scHost](structSyscParticipantInfo.md#structSyscParticipantInfo_1a04b95234f786ebe57fd1650eca58f411)
* [scPort](structSyscParticipantInfo.md#structSyscParticipantInfo_1a39c22384e8889c14c55ae7e4921873cb)
* [transcriptFilename](structSyscParticipantInfo.md#structSyscParticipantInfo_1a622cd703147ec31e2c80b1933ea773a1)

## Public attributes

<a id="structSyscParticipantInfo_1a04b95234f786ebe57fd1650eca58f411"></a>
### Variable scHost

![][public]

**Definition**: `syscCommonTypes.h` (line 354)

```
char SyscParticipantInfo::scHost[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```







**Type**: char

<a id="structSyscParticipantInfo_1a39c22384e8889c14c55ae7e4921873cb"></a>
### Variable scPort

![][public]

**Definition**: `syscCommonTypes.h` (line 355)

```
unsigned short SyscParticipantInfo::scPort
```







**Type**: unsigned short

<a id="structSyscParticipantInfo_1afda543c3aeea91e0136520fca2487d6b"></a>
### Variable participantName

![][public]

**Definition**: `syscCommonTypes.h` (line 356)

```
char SyscParticipantInfo::participantName[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```







**Type**: char

<a id="structSyscParticipantInfo_1aa341c59a4953b40db05064cd5495d9f7"></a>
### Variable buildInformation

![][public]

**Definition**: `syscCommonTypes.h` (line 357)

```
char SyscParticipantInfo::buildInformation[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```







**Type**: char

<a id="structSyscParticipantInfo_1a622cd703147ec31e2c80b1933ea773a1"></a>
### Variable transcriptFilename

![][public]

**Definition**: `syscCommonTypes.h` (line 358)

```
char SyscParticipantInfo::transcriptFilename[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```







**Type**: char

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)