---
title: "Structure SyscSetupInfo"
---

![][C]
![][public]

**Definition**: `syscCommonTypes.h` (line 191)

Provide a structure for System Coupling setup information.

To create and/or initialize the [SyscSetupInfo](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSetupInfo) struct, it is highly recommended to use one of the functions with names starting with <code>syscGetSetupInfo</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscSetupInfo setupInfo = syscGetSetupInfoA(SyscSteady); 
```

## Members

* [analysisType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSetupInfo)
* [dimension](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSetupInfo)
* [participantType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSetupInfo)
* [restartsSupported](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSetupInfo)
* [timeIntegration](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscSetupInfo)

## Public attributes

<a id="structSyscSetupInfo_1ac769cbb25b2b34dbb5bc44f281299780"></a>
### Variable analysisType

![][public]

**Definition**: `syscCommonTypes.h` (line 139)

```
enum SyscAnalysisType SyscSetupInfo::analysisType
```



Analysis type.



**Type**: enum [SyscAnalysisType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscSetupInfo_1a50a3305a3b93fedcc8f4435bd43b9aa1"></a>
### Variable restartsSupported

![][public]

**Definition**: `syscCommonTypes.h` (line 193)

```
int SyscSetupInfo::restartsSupported
```



Flag indicating whether restarts are supported.



**Type**: int

<a id="structSyscSetupInfo_1a8f4b32e8360553ac5bb5d179efb58b81"></a>
### Variable dimension

![][public]

**Definition**: `syscCommonTypes.h` (line 193)

```
enum SyscDimension SyscSetupInfo::dimension
```



Participant dimension.



**Type**: enum [SyscDimension](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscSetupInfo_1a8044b6d9483952f222aef29315ac2711"></a>
### Variable timeIntegration

![][public]

**Definition**: `syscCommonTypes.h` (line 193)

```
enum SyscTimeIntegration SyscSetupInfo::timeIntegration
```



Time integration method



**Type**: enum [SyscTimeIntegration](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscSetupInfo_1a68b5379863a9f8dab98fdc4ba7e83716"></a>
### Variable participantType

![][public]

**Definition**: `syscCommonTypes.h` (line 193)

```
enum SyscParticipantType SyscSetupInfo::participantType
```



Participant type



**Type**: enum SyscParticipantType

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)