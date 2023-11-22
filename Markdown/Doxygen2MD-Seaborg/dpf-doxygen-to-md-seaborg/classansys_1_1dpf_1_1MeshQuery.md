<a id="classansys_1_1dpf_1_1MeshQuery"></a>
# Class ansys::dpf::MeshQuery

![][C++]
![][public]

**Definition**: `helpers/dpf\_meshQuery.h` (line 11)



Encapsulation of mesh.

## Members

* [\_meshProvider](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a7262b59619a236e6ac3d1064e1993aaa)
* [GetBeamElements](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1af1dc7b80fc0968623bbeec31964697e0)
* [GetByMaterialId](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1aa56c1e88479f4a8ed1e5cefeab8de71c)
* [GetByNamedSelection](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a75086d688c8f231320db67a5964ec28b)
* [GetByPropertyType](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a0b82272a6d0b4797e278a6c1499be8f5)
* [GetElements](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a45ee89c9ea9df4410ecfd62634d8d1d3)
* [GetElementsByElementType](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a0cf98e86ebf498fd65d644ab980e3fe4)
* [GetElementsByMaterialId](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a7e66788a1cdb99f30308013063e0b6d9)
* [GetElementsByNamedSelection](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1aa24510b2cf985f965506d40f2a470f92)
* [GetElementsBySolverElementType](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1ae5e1be30a704d4953a0e57a2f8715f05)
* [GetNodesByElementType](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1abd8f42a913abdbd63c4cfebf311d4800)
* [GetNodesByMaterialId](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a43d364441c62f747a724815287242f4d)
* [GetNodesByNamedSelection](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a7e27f733d2a670960ee0a315380a18a1)
* [GetNodesBySolverElementType](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1ad1be7baea911e6c99b967f03b6ade8eb)
* [GetPointElements](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a0031f8fe2eb4f79349ae57ee43551f0b)
* [GetShellElements](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a0eaa2cac7c87dbc1b8b5f2b276df2509)
* [GetSkinElements](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a6dbb1c0d95142d5e78e1bf2b59888204)
* [GetSolidElements](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1ac7c64b06fea66ede6df551024a5aa3ab)
* [init](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a488785e7dd40524d29906255f4058a7f)
* [MeshQuery](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1ae0deb6e726cba716d779cd9a2e410e3a)
* [~MeshQuery](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery_1a41e23dbb127e0ee69c16dcffe514502a)

## Private attributes

<a id="classansys_1_1dpf_1_1MeshQuery_1a7262b59619a236e6ac3d1064e1993aaa"></a>
### Variable \_meshProvider

![][private]

**Definition**: `helpers/dpf\_meshQuery.h` (line 111)

```cpp
Operator ansys::dpf::MeshQuery::_meshProvider
```







**Type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

## Public functions

<a id="classansys_1_1dpf_1_1MeshQuery_1a41e23dbb127e0ee69c16dcffe514502a"></a>
### Function ~MeshQuery

![][public]

```cpp
virtual ansys::dpf::MeshQuery::~MeshQuery()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1MeshQuery_1ae0deb6e726cba716d779cd9a2e410e3a"></a>
### Function MeshQuery

![][public]

```cpp
ansys::dpf::MeshQuery::MeshQuery(Operator &mesh_provider)
```



Create new mesh query object.



**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **mesh_provider**: [in] Mesh provider from which to create mesh query object.

**Return type**: 

<a id="classansys_1_1dpf_1_1MeshQuery_1a7e27f733d2a670960ee0a315380a18a1"></a>
### Function GetNodesByNamedSelection

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetNodesByNamedSelection(const char *named_selection, DpfError &error)
```



**Returns**:

Scoping of nodes for named selection.



**Parameters**:

* const char * **named_selection**: [in] Name of selection for which to get nodes.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a43d364441c62f747a724815287242f4d"></a>
### Function GetNodesByMaterialId

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetNodesByMaterialId(dp_id materialId, DpfError &error)
```



**Returns**:

Scoping of nodes for material.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **materialId**: [in] Id of material for which to get nodes.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1abd8f42a913abdbd63c4cfebf311d4800"></a>
### Function GetNodesByElementType

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetNodesByElementType(const ElementDescriptor &element_type, DpfError &error)
```



**Returns**:

Scoping of nodes for element type.



**Parameters**:

* const [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor) & **element_type**: [in] Element descriptor for which to get nodes.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1ad1be7baea911e6c99b967f03b6ade8eb"></a>
### Function GetNodesBySolverElementType

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetNodesBySolverElementType(int element_type, DpfError &error)
```



**Returns**:

Scoping of nodes for solver element.



**Parameters**:

* int **element_type**: [in] Type of solver element for which to get nodes.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1aa24510b2cf985f965506d40f2a470f92"></a>
### Function GetElementsByNamedSelection

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetElementsByNamedSelection(const char *named_selection, bool inclusive, DpfError &error)
```



**Returns**:

Scoping of elements for named selection.



**Parameters**:

* const char * **named_selection**: [in] Name of selection for which to get elements.
* bool **inclusive**: [in] Flag indicating to return elements fully contained within named selection.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a7e66788a1cdb99f30308013063e0b6d9"></a>
### Function GetElementsByMaterialId

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetElementsByMaterialId(dp_id materialId, DpfError &error)
```



**Returns**:

Scoping of elements for material.



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **materialId**: [in] Id of material for which to get elements.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a0cf98e86ebf498fd65d644ab980e3fe4"></a>
### Function GetElementsByElementType

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetElementsByElementType(const ElementDescriptor &element_type, DpfError &error)
```



**Returns**:

Scoping of elements for element type.



**Parameters**:

* const [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor) & **element_type**: [in] Element descriptor for which to get elements.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1ae5e1be30a704d4953a0e57a2f8715f05"></a>
### Function GetElementsBySolverElementType

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetElementsBySolverElementType(int element_type, DpfError &error)
```



Element type is given by APDLElementType. Example: 181 = 4 - Node Structural Shell, 186 = 3 - D 20 - Node Structural Solid. 
**Returns**:

Scoping of elements for solver element.



**Parameters**:

* int **element_type**: [in] Type of solver element for which to get elements.
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a6dbb1c0d95142d5e78e1bf2b59888204"></a>
### Function GetSkinElements

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetSkinElements(DpfError &error)
```



**Returns**:

Scoping of skin elements.



**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1af1dc7b80fc0968623bbeec31964697e0"></a>
### Function GetBeamElements

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetBeamElements(DpfError &error)
```



**Returns**:

Scoping of beam elements.



**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1ac7c64b06fea66ede6df551024a5aa3ab"></a>
### Function GetSolidElements

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetSolidElements(DpfError &error)
```



**Returns**:

Scoping of solid elements.



**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a0031f8fe2eb4f79349ae57ee43551f0b"></a>
### Function GetPointElements

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetPointElements(DpfError &error)
```



**Returns**:

Scoping of point elements.



**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a0eaa2cac7c87dbc1b8b5f2b276df2509"></a>
### Function GetShellElements

![][public]

```cpp
Scoping ansys::dpf::MeshQuery::GetShellElements(DpfError &error)
```



**Returns**:

Scoping of shell elements.



**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

## Private functions

<a id="classansys_1_1dpf_1_1MeshQuery_1a488785e7dd40524d29906255f4058a7f"></a>
### Function init

![][private]

```cpp
void ansys::dpf::MeshQuery::init(Operator &mesh_provider)
```







**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **mesh_provider**

**Return type**: void

<a id="classansys_1_1dpf_1_1MeshQuery_1a45ee89c9ea9df4410ecfd62634d8d1d3"></a>
### Function GetElements

![][private]

```cpp
Scoping ansys::dpf::MeshQuery::GetElements(std::string const &element_type, DpfError &error)
```







**Parameters**:

* std::string const & **element_type**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a75086d688c8f231320db67a5964ec28b"></a>
### Function GetByNamedSelection

![][private]

```cpp
Scoping ansys::dpf::MeshQuery::GetByNamedSelection(bool wantNodes, const char *named_selection, DpfError &error, bool inclusive=false)
```







**Parameters**:

* bool **wantNodes**
* const char * **named_selection**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**
* bool **inclusive** = false 

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1aa56c1e88479f4a8ed1e5cefeab8de71c"></a>
### Function GetByMaterialId

![][private]

```cpp
Scoping ansys::dpf::MeshQuery::GetByMaterialId(bool wantNodes, dp_id materialId, DpfError &error)
```







**Parameters**:

* bool **wantNodes**
* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **materialId**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshQuery_1a0b82272a6d0b4797e278a6c1499be8f5"></a>
### Function GetByPropertyType

![][private]

```cpp
Scoping ansys::dpf::MeshQuery::GetByPropertyType(bool wantNodes, const char *property_name, int element_type, DpfError &error)
```







**Parameters**:

* bool **wantNodes**
* const char * **property_name**
* int **element_type**
* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) & **error**

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_meshQuery.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)