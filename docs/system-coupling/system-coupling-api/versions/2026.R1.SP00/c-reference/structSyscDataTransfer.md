# Structure SyscDataTransfer

![][C]
![][public]

**Definition**: `syscDataTransfer.h` (line 29)

Provide a struct for a data transfer.

Data transfer specifies the source and target variables for mapping.

## Members

* [sourceVariable](structSyscDataTransfer.md#structSyscDataTransfer_1a75ab076255c5c6861138810f25ce9a46)
* [targetSide](structSyscDataTransfer.md#structSyscDataTransfer_1ab79ebf125798afce8652e2f40cb33e91)
* [targetVariable](structSyscDataTransfer.md#structSyscDataTransfer_1a71ca350ac0121f402db52a74e84edfa0)

## Public attributes

<a id="structSyscDataTransfer_1a75ab076255c5c6861138810f25ce9a46"></a>
### Variable sourceVariable

![][public]

**Definition**: `syscDataTransfer.h` (line 30)

```
SyscVariable SyscDataTransfer::sourceVariable
```







**Type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="structSyscDataTransfer_1a71ca350ac0121f402db52a74e84edfa0"></a>
### Variable targetVariable

![][public]

**Definition**: `syscDataTransfer.h` (line 31)

```
SyscVariable SyscDataTransfer::targetVariable
```







**Type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="structSyscDataTransfer_1ab79ebf125798afce8652e2f40cb33e91"></a>
### Variable targetSide

![][public]

**Definition**: `syscDataTransfer.h` (line 31)

```
enum SyscInterfaceSide SyscDataTransfer::targetSide
```







**Type**: enum [SyscInterfaceSide](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gacf32f1d9c1566f28bee2b348b2dcd9f5)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)