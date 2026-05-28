---
title: "Structure SyscDataTransfer"
---

![][C]
![][public]

**Definition**: `syscDataTransfer.h` (line 29)

Provide a struct for a data transfer.

Data transfer specifies the source and target variables for mapping.

## Members

* [sourceVariable](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscDataTransfer)
* [targetSide](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscDataTransfer)
* [targetVariable](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscDataTransfer)

## Public attributes

<a id="structSyscDataTransfer_1a75ab076255c5c6861138810f25ce9a46"></a>
### Variable sourceVariable

![][public]

**Definition**: `syscDataTransfer.h` (line 30)

```
SyscVariable SyscDataTransfer::sourceVariable
```







**Type**: [SyscVariable](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)

<a id="structSyscDataTransfer_1a71ca350ac0121f402db52a74e84edfa0"></a>
### Variable targetVariable

![][public]

**Definition**: `syscDataTransfer.h` (line 31)

```
SyscVariable SyscDataTransfer::targetVariable
```







**Type**: [SyscVariable](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)

<a id="structSyscDataTransfer_1ab79ebf125798afce8652e2f40cb33e91"></a>
### Variable targetSide

![][public]

**Definition**: `syscDataTransfer.h` (line 31)

```
enum SyscInterfaceSide SyscDataTransfer::targetSide
```







**Type**: enum [SyscInterfaceSide](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/syscCommonTypes_8h)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)