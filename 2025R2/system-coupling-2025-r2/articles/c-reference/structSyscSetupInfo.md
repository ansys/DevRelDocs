# Structure SyscSetupInfo

![][C]
![][public]

**Definition**: `syscCommonTypes.h` (line 191)

Provide a structure for System Coupling setup information.

To create and/or initialize the [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo) struct, it is highly recommended to use one of the functions with names starting with <code>syscGetSetupInfo</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscSetupInfo setupInfo = syscGetSetupInfoA(SyscSteady); 
```

## Members

* [analysisType](structSyscSetupInfo.md#structSyscSetupInfo_1ac769cbb25b2b34dbb5bc44f281299780)
* [dimension](structSyscSetupInfo.md#structSyscSetupInfo_1a8f4b32e8360553ac5bb5d179efb58b81)
* [participantType](structSyscSetupInfo.md#structSyscSetupInfo_1a68b5379863a9f8dab98fdc4ba7e83716)
* [restartsSupported](structSyscSetupInfo.md#structSyscSetupInfo_1a50a3305a3b93fedcc8f4435bd43b9aa1)
* [timeIntegration](structSyscSetupInfo.md#structSyscSetupInfo_1a8044b6d9483952f222aef29315ac2711)

## Public attributes

<a id="structSyscSetupInfo_1ac769cbb25b2b34dbb5bc44f281299780"></a>
### Variable analysisType

![][public]

**Definition**: `syscCommonTypes.h` (line 139)

```
enum SyscAnalysisType SyscSetupInfo::analysisType
```



Analysis type.



**Type**: enum [SyscAnalysisType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7d5b3786948265c902f7231abe6d79b5)

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



**Type**: enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d)

<a id="structSyscSetupInfo_1a8044b6d9483952f222aef29315ac2711"></a>
### Variable timeIntegration

![][public]

**Definition**: `syscCommonTypes.h` (line 193)

```
enum SyscTimeIntegration SyscSetupInfo::timeIntegration
```



Time integration method



**Type**: enum [SyscTimeIntegration](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaedf008f34febb068e44cb21292dc167f)

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