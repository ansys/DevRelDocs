---
title: "Structure SyscVariable"
---

![][C]
![][public]

**Definition**: `syscVariable.h` (line 37)

Provide a struct for a System Coupling variable.

To create and/or initialize the [SyscVariable](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable) struct, it is highly recommended to use one of the functions with names starting with <code>syscGetVariable</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscVariable var = syscGetVariableTE(
  "Temperature", SyscScalar, 0, SyscNode);
```

## Members

* [dataType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)
* [displayName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)
* [isExtensive](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)
* [location](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)
* [name](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)
* [quantityType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)
* [tensorType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscVariable)

## Public attributes

<a id="structSyscVariable_1a2eba6c9ae1b937d16229bb14abfd0b8c"></a>
### Variable name

![][public]

**Definition**: `syscVariable.h` (line 38)

```
char SyscVariable::name[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Unique name for this variable.



**Type**: char

<a id="structSyscVariable_1ac986a066454132f9f70180349586ab8b"></a>
### Variable quantityType

![][public]

**Definition**: `syscVariable.h` (line 38)

```
enum SyscQuantityType SyscVariable::quantityType
```



Quantity type (e.g. temperature).



**Type**: enum [SyscQuantityType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscVariable_1a417605c130a691478393fbb05840a5ab"></a>
### Variable location

![][public]

**Definition**: `syscVariable.h` (line 38)

```
enum SyscLocation SyscVariable::location
```



Location (e.g element or node).



**Type**: enum [SyscLocation](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscVariable_1a04451c3da4978114e5aba6bcf2713731"></a>
### Variable displayName

![][public]

**Definition**: `syscVariable.h` (line 41)

```
char SyscVariable::displayName[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



User-friendly name.



**Type**: char

<a id="structSyscVariable_1a0293955653368e2f48d36587d4d90ca8"></a>
### Variable tensorType

![][public]

**Definition**: `syscVariable.h` (line 41)

```
enum SyscTensorType SyscVariable::tensorType
```



Tensor type (e.g. scalar, vector).



**Type**: enum [SyscTensorType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscVariable_1aed5ddca8dd956e1b4935aa69c323e011"></a>
### Variable isExtensive

![][public]

**Definition**: `syscVariable.h` (line 43)

```
int SyscVariable::isExtensive
```



Flag indicating whether it's an extensive property.



**Type**: int

<a id="structSyscVariable_1aedd58bab04a4c0036cd07cef9016a91c"></a>
### Variable dataType

![][public]

**Definition**: `syscVariable.h` (line 43)

```
enum SyscDataType SyscVariable::dataType
```



Variable data type.



**Type**: enum SyscDataType

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)