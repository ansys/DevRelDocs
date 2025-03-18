# Structure SyscElementNodeConnectivityData

![][C]
![][public]

**Definition**: `syscMeshDefinition.h` (line 166)

Element node connectivity access struct, provides read-only access to the element-to-node connectivity.

To create and/or initialize [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData), it is highly recommended to use one of the functions with names starting with <code>syscGetElementNodeConnectivityData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscElementNodeConnectivityData elemNodeConn =
syscGetElementNodeConnectivityData(elemNodeIds);
```

## Members

* [elementNodeIds](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData_1a08dfd1139cb4d1b40de4480d91a87565)

## Public attributes

<a id="structSyscElementNodeConnectivityData_1a08dfd1139cb4d1b40de4480d91a87565"></a>
### Variable elementNodeIds

![][public]

**Definition**: `syscMeshDefinition.h` (line 168)

```
SyscOutputIntegerData SyscElementNodeConnectivityData::elementNodeIds
```

Element-to-node connectivity array.





**Type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)