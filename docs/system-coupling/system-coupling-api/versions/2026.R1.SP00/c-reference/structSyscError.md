---
title: "Structure SyscError"
---

![][C]
![][public]

**Definition**: `syscCommonTypes.h` (line 137)

Provide a struct for detecting errors from the interface calls.



## Members

* [message](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscError)
* [retcode](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscError)

## Public attributes

<a id="structSyscError_1afbc03fa7fe0724b2810626b319364f27"></a>
### Variable retcode

![][public]

**Definition**: `syscCommonTypes.h` (line 138)

```
int SyscError::retcode
```



Error code. Set to 0 if no error.



**Type**: int

<a id="structSyscError_1a166e507f0606a321e1e076f7889d5844"></a>
### Variable message

![][public]

**Definition**: `syscCommonTypes.h` (line 139)

```
char SyscError::message[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Error message. Blank string if no error.



**Type**: char

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)