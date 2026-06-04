# Structure SyscParticipantInfo

![][C]
![][public]

**Definition**: `syscCommonTypes.h` (line 362)

Provide a structure to provide connection info to System Coupling.

**Parameters**:

* **scHost**: Name of the host on which System Coupling is running.
* **scPort**: Port number on which System Coupling is listening for participant connections.
* **participantName**: Name of this participant (e.g. "MAPDL-1").
* **buildInformation**: Information about the build of this participant solver.
* **isCosimulation**: Flag signifying if the simulation is a cosimulation.
* **transcriptFilename**: The filename to be given to the output participant transcript.
* **numApps**: Number of applications to be connected by the SCP library (only assign on designated root app).
* **myHostName**: Name of the host on which this process is running (usually can be left unassigned).


**Returns**:

[SyscError](structSyscError.md#structSyscError) Can be checked for any errors.

## Members

* [buildInformation](structSyscParticipantInfo.md#structSyscParticipantInfo_1aa341c59a4953b40db05064cd5495d9f7)
* [isCosimulation](structSyscParticipantInfo.md#structSyscParticipantInfo_1a64051db841c50c0d800b6a5b495ebd9c)
* [myHostName](structSyscParticipantInfo.md#structSyscParticipantInfo_1a850ee26304a950d1abe92275cb4cd3e2)
* [numApps](structSyscParticipantInfo.md#structSyscParticipantInfo_1a176536fe1ef3ba43e10aa9445c3c1585)
* [participantName](structSyscParticipantInfo.md#structSyscParticipantInfo_1afda543c3aeea91e0136520fca2487d6b)
* [scHost](structSyscParticipantInfo.md#structSyscParticipantInfo_1a04b95234f786ebe57fd1650eca58f411)
* [scPort](structSyscParticipantInfo.md#structSyscParticipantInfo_1a39c22384e8889c14c55ae7e4921873cb)
* [transcriptFilename](structSyscParticipantInfo.md#structSyscParticipantInfo_1a622cd703147ec31e2c80b1933ea773a1)

## Public attributes

<a id="structSyscParticipantInfo_1a04b95234f786ebe57fd1650eca58f411"></a>
### Variable scHost

![][public]

**Definition**: `syscCommonTypes.h` (line 363)


```
char SyscParticipantInfo::scHost[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```








**Type**: char

<a id="structSyscParticipantInfo_1a39c22384e8889c14c55ae7e4921873cb"></a>
### Variable scPort

![][public]

**Definition**: `syscCommonTypes.h` (line 364)


```
unsigned short SyscParticipantInfo::scPort
```








**Type**: unsigned short

<a id="structSyscParticipantInfo_1afda543c3aeea91e0136520fca2487d6b"></a>
### Variable participantName

![][public]

**Definition**: `syscCommonTypes.h` (line 365)


```
char SyscParticipantInfo::participantName[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```








**Type**: char

<a id="structSyscParticipantInfo_1a64051db841c50c0d800b6a5b495ebd9c"></a>
### Variable isCosimulation

![][public]

**Definition**: `syscCommonTypes.h` (line 366)


```
int SyscParticipantInfo::isCosimulation
```








**Type**: int

<a id="structSyscParticipantInfo_1aa341c59a4953b40db05064cd5495d9f7"></a>
### Variable buildInformation

![][public]

**Definition**: `syscCommonTypes.h` (line 367)


```
char SyscParticipantInfo::buildInformation[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```








**Type**: char

<a id="structSyscParticipantInfo_1a622cd703147ec31e2c80b1933ea773a1"></a>
### Variable transcriptFilename

![][public]

**Definition**: `syscCommonTypes.h` (line 368)


```
char SyscParticipantInfo::transcriptFilename[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```








**Type**: char

<a id="structSyscParticipantInfo_1a176536fe1ef3ba43e10aa9445c3c1585"></a>
### Variable numApps

![][public]

**Definition**: `syscCommonTypes.h` (line 369)


```
size_t SyscParticipantInfo::numApps
```








**Type**: size_t

<a id="structSyscParticipantInfo_1a850ee26304a950d1abe92275cb4cd3e2"></a>
### Variable myHostName

![][public]

**Definition**: `syscCommonTypes.h` (line 370)


```
char SyscParticipantInfo::myHostName[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```








**Type**: char

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)