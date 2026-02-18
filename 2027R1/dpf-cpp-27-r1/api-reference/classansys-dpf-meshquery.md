# Class ansys::dpf::MeshQuery

<a id="classansys-dpf-meshquery"></a>

![][C++]
![][public]



Encapsulation of mesh.

## Members

* [GetBeamElements](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1af1dc7b80fc0968623bbeec31964697e0)
* [GetElementsByElementType](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a0cf98e86ebf498fd65d644ab980e3fe4)
* [GetElementsByMaterialId](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a7e66788a1cdb99f30308013063e0b6d9)
* [GetElementsByNamedSelection](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1aa24510b2cf985f965506d40f2a470f92)
* [GetElementsBySolverElementType](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1ae5e1be30a704d4953a0e57a2f8715f05)
* [GetNodesByElementType](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1abd8f42a913abdbd63c4cfebf311d4800)
* [GetNodesByMaterialId](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a43d364441c62f747a724815287242f4d)
* [GetNodesByNamedSelection](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a7e27f733d2a670960ee0a315380a18a1)
* [GetNodesBySolverElementType](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1ad1be7baea911e6c99b967f03b6ade8eb)
* [GetPointElements](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a0031f8fe2eb4f79349ae57ee43551f0b)
* [GetShellElements](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a0eaa2cac7c87dbc1b8b5f2b276df2509)
* [GetSkinElements](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a6dbb1c0d95142d5e78e1bf2b59888204)
* [GetSolidElements](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1ac7c64b06fea66ede6df551024a5aa3ab)
* [MeshQuery](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1ae0deb6e726cba716d779cd9a2e410e3a)
* [~MeshQuery](classansys-dpf-meshquery.md#classansys-dpf-meshquery-1a41e23dbb127e0ee69c16dcffe514502a)

## Public functions

<a id="classansys-dpf-meshquery-1a41e23dbb127e0ee69c16dcffe514502a"></a>
### Function ~MeshQuery

![][public]


```cpp
virtual ansys::dpf::MeshQuery::~MeshQuery()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::~MeshQuery"}]}`
-->

<a id="classansys-dpf-meshquery-1ae0deb6e726cba716d779cd9a2e410e3a"></a>
### Function MeshQuery

![][public]


```cpp
ansys::dpf::MeshQuery::MeshQuery(Operator &mesh_provider)
```




Create new mesh query object.



**Parameters**:

* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **mesh_provider**: [in] Mesh provider from which to create mesh query object.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::MeshQuery"}]}`
-->

<a id="classansys-dpf-meshquery-1a7e27f733d2a670960ee0a315380a18a1"></a>
### Function GetNodesByNamedSelection

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetNodesByNamedSelection(const char *named_selection, DpfError &error)
```




**Returns**:

Scoping of nodes for named selection.



**Parameters**:

* const char * **named_selection**: [in] Name of selection for which to get nodes.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetNodesByNamedSelection"}]}`
-->

<a id="classansys-dpf-meshquery-1a43d364441c62f747a724815287242f4d"></a>
### Function GetNodesByMaterialId

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetNodesByMaterialId(dp_id materialId, DpfError &error)
```




**Returns**:

Scoping of nodes for material.



**Parameters**:

* [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) **materialId**: [in] Id of material for which to get nodes.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetNodesByMaterialId"}]}`
-->

<a id="classansys-dpf-meshquery-1abd8f42a913abdbd63c4cfebf311d4800"></a>
### Function GetNodesByElementType

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetNodesByElementType(const ElementDescriptor &element_type, DpfError &error)
```




**Returns**:

Scoping of nodes for element type.



**Parameters**:

* const [ElementDescriptor](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor) & **element_type**: [in] Element descriptor for which to get nodes.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetNodesByElementType"}]}`
-->

<a id="classansys-dpf-meshquery-1ad1be7baea911e6c99b967f03b6ade8eb"></a>
### Function GetNodesBySolverElementType

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetNodesBySolverElementType(int element_type, DpfError &error)
```




**Returns**:

Scoping of nodes for solver element.



**Parameters**:

* int **element_type**: [in] Type of solver element for which to get nodes.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetNodesBySolverElementType"}]}`
-->

<a id="classansys-dpf-meshquery-1aa24510b2cf985f965506d40f2a470f92"></a>
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
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetElementsByNamedSelection"}]}`
-->

<a id="classansys-dpf-meshquery-1a7e66788a1cdb99f30308013063e0b6d9"></a>
### Function GetElementsByMaterialId

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetElementsByMaterialId(dp_id materialId, DpfError &error)
```




**Returns**:

Scoping of elements for material.



**Parameters**:

* [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) **materialId**: [in] Id of material for which to get elements.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetElementsByMaterialId"}]}`
-->

<a id="classansys-dpf-meshquery-1a0cf98e86ebf498fd65d644ab980e3fe4"></a>
### Function GetElementsByElementType

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetElementsByElementType(const ElementDescriptor &element_type, DpfError &error)
```




**Returns**:

Scoping of elements for element type.



**Parameters**:

* const [ElementDescriptor](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor) & **element_type**: [in] Element descriptor for which to get elements.
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetElementsByElementType"}]}`
-->

<a id="classansys-dpf-meshquery-1ae5e1be30a704d4953a0e57a2f8715f05"></a>
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
* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetElementsBySolverElementType"}]}`
-->

<a id="classansys-dpf-meshquery-1a6dbb1c0d95142d5e78e1bf2b59888204"></a>
### Function GetSkinElements

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetSkinElements(DpfError &error)
```




**Returns**:

Scoping of skin elements.



**Parameters**:

* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetSkinElements"}]}`
-->

<a id="classansys-dpf-meshquery-1af1dc7b80fc0968623bbeec31964697e0"></a>
### Function GetBeamElements

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetBeamElements(DpfError &error)
```




**Returns**:

Scoping of beam elements.



**Parameters**:

* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetBeamElements"}]}`
-->

<a id="classansys-dpf-meshquery-1ac7c64b06fea66ede6df551024a5aa3ab"></a>
### Function GetSolidElements

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetSolidElements(DpfError &error)
```




**Returns**:

Scoping of solid elements.



**Parameters**:

* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetSolidElements"}]}`
-->

<a id="classansys-dpf-meshquery-1a0031f8fe2eb4f79349ae57ee43551f0b"></a>
### Function GetPointElements

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetPointElements(DpfError &error)
```




**Returns**:

Scoping of point elements.



**Parameters**:

* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetPointElements"}]}`
-->

<a id="classansys-dpf-meshquery-1a0eaa2cac7c87dbc1b8b5f2b276df2509"></a>
### Function GetShellElements

![][public]


```cpp
Scoping ansys::dpf::MeshQuery::GetShellElements(DpfError &error)
```




**Returns**:

Scoping of shell elements.



**Parameters**:

* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) & **error**: [out] Status of call.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshQuery::GetShellElements"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_meshQuery.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)