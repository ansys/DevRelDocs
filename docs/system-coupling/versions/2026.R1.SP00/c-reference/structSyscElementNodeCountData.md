# Structure SyscElementNodeCountData

![][C]
![][public]

**Definition**: `syscMeshDefinition.h` (line 126)

Element node count access struct, provides read-only access to the mesh element node counts.

To create and/or initialize [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData), it is highly recommended to use one of the functions with names starting with <code>syscGetElementNodeCountData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscElementNodeCountData elemNodeCountData =
syscGetElementNodeCountData(elemNodeCounts);
```

## Members

* [elementNodeCounts](structSyscElementNodeCountData.md#structSyscElementNodeCountData_1a7b8d330429782be5862b24638866be6b)

## Public attributes

<a id="structSyscElementNodeCountData_1a7b8d330429782be5862b24638866be6b"></a>
### Variable elementNodeCounts

![][public]

**Definition**: `syscMeshDefinition.h` (line 127)

```
SyscOutputIntegerData SyscElementNodeCountData::elementNodeCounts
```



Element node counts array.



**Type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)