---
title: "Structure SyscElementTypeData"
---

![][C]
![][public]

**Definition**: `syscMeshDefinition.h` (line 88)

Element types access struct, provides read-only access to the mesh element types.

To create and/or initialize [SyscElementTypeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscElementTypeData), it is highly recommended to use one of the functions with names starting with <code>syscGetElementTypeData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscElementTypeData elemTypeData = syscGetElementTypeData(elemTypes);
```

## Members

* [elementTypes](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscElementTypeData)

## Public attributes

<a id="structSyscElementTypeData_1a19c71338f6ede3812e004456d525c5dd"></a>
### Variable elementTypes

![][public]

**Definition**: `syscMeshDefinition.h` (line 89)

```
SyscOutputIntegerData SyscElementTypeData::elementTypes
```

Element types array access.





**Type**: [SyscOutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputIntegerData)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)