<a id="classansys_1_1dpf_1_1MeshInfo"></a>
# Class ansys::dpf::MeshInfo

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4064)





## Members

* [\_genericData](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a9493684fe3cf86c47988022b9b1e9723)
* [getAvailableEt](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a3b20de6e4ee7a5ac086d260f139706bc)
* [getGenericDataContainer](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1ade93496d845481b6281f4c3ed7b90bc4)
* [getNumElem](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a11ef1866e82f2da3c65bc54df8b2f2f6)
* [getNumNodes](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a97b6898d8b6aeb48a9d2afd5e5b6bd62)
* [getProperty](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a6684d9aec524aceb631ae9355f2b83f0)
* [getSplittableBy](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a7a288ff55960fa0955502b51d8f84583)
* [MeshInfo](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a890fd135102502182cd0155f13524a49)
* [MeshInfo](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1ae404772abc35c42c2ff22217d162c573)
* [MeshInfo](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1afff8f1ec60d852cc1e15c5fd5df6306b)
* [operator=](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1af4c160914d28373854dbcf1dd6e71a84)
* [setAvailableEt](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a3b721847ffa9d30a481f2663e2144eaa)
* [setNumElem](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1aebe7a82bcdb39780fc0f8149049b9710)
* [setNumNodes](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1abb5a97fd0df25a44a6f6d9baa12a9655)
* [setProperty](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1a2e03f447b78a4f99d590c6d183616709)
* [setSplittableBy](classansys_1_1dpf_1_1MeshInfo.md#classansys_1_1dpf_1_1MeshInfo_1aac41382a70a99d12ccb70215685f5d00)

## Private attributes

<a id="classansys_1_1dpf_1_1MeshInfo_1a9493684fe3cf86c47988022b9b1e9723"></a>
### Variable \_genericData

![][private]

**Definition**: `dpf\_api.h` (line 4066)

```cpp
GenericDataContainer ansys::dpf::MeshInfo::_genericData
```







**Type**: GenericDataContainer

## Public functions

<a id="classansys_1_1dpf_1_1MeshInfo_1a890fd135102502182cd0155f13524a49"></a>
### Function MeshInfo

![][public]

```cpp
ansys::dpf::MeshInfo::MeshInfo()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1MeshInfo_1ae404772abc35c42c2ff22217d162c573"></a>
### Function MeshInfo

![][public]

```cpp
ansys::dpf::MeshInfo::MeshInfo(const GenericDataContainer &_genericData)
```







**Parameters**:

* const GenericDataContainer & **_genericData**

**Return type**: 

<a id="classansys_1_1dpf_1_1MeshInfo_1afff8f1ec60d852cc1e15c5fd5df6306b"></a>
### Function MeshInfo

![][public]

```cpp
ansys::dpf::MeshInfo::MeshInfo(MeshInfo const &)
```







**Parameters**:

* MeshInfo const &

**Return type**: 

<a id="classansys_1_1dpf_1_1MeshInfo_1af4c160914d28373854dbcf1dd6e71a84"></a>
### Function operator=

![][public]

```cpp
MeshInfo& ansys::dpf::MeshInfo::operator=(MeshInfo const &)
```







**Parameters**:

* MeshInfo const &

**Return type**: MeshInfo &

<a id="classansys_1_1dpf_1_1MeshInfo_1ade93496d845481b6281f4c3ed7b90bc4"></a>
### Function getGenericDataContainer

![][public]

```cpp
GenericDataContainer ansys::dpf::MeshInfo::getGenericDataContainer()
```







**Return type**: GenericDataContainer

<a id="classansys_1_1dpf_1_1MeshInfo_1a6684d9aec524aceb631ae9355f2b83f0"></a>
### Function getProperty

![][public]

```cpp
T ansys::dpf::MeshInfo::getProperty(const std::string &property_name)
```







**Parameters**:

* const std::string & **property_name**

**Return type**: T

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1MeshInfo_1a2e03f447b78a4f99d590c6d183616709"></a>
### Function setProperty

![][public]

```cpp
void ansys::dpf::MeshInfo::setProperty(const std::string &property_name, const T &property)
```







**Parameters**:

* const std::string & **property_name**
* const T & **property**

**Return type**: void

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1MeshInfo_1abb5a97fd0df25a44a6f6d9baa12a9655"></a>
### Function setNumNodes

![][public]

```cpp
void ansys::dpf::MeshInfo::setNumNodes(int numNodes)
```

@detail set the number of nodes.





**Parameters**:

* int **numNodes**: [in] Number of nodes.

**Return type**: void

<a id="classansys_1_1dpf_1_1MeshInfo_1aebe7a82bcdb39780fc0f8149049b9710"></a>
### Function setNumElem

![][public]

```cpp
void ansys::dpf::MeshInfo::setNumElem(int numElements)
```

@detail set the number of elements.





**Parameters**:

* int **numElements**: [in] Number of elements.

**Return type**: void

<a id="classansys_1_1dpf_1_1MeshInfo_1aac41382a70a99d12ccb70215685f5d00"></a>
### Function setSplittableBy

![][public]

```cpp
void ansys::dpf::MeshInfo::setSplittableBy(dpf::StringField splittableByScoping)
```

@detail set strings name correspondind to mesh split scopings.





**Parameters**:

* [dpf::StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField) **splittableByScoping**: [in] Split mesh names.

**Return type**: void

<a id="classansys_1_1dpf_1_1MeshInfo_1a3b721847ffa9d30a481f2663e2144eaa"></a>
### Function setAvailableEt

![][public]

```cpp
void ansys::dpf::MeshInfo::setAvailableEt(dpf::Scoping availableElementTypes)
```

@detail set available elements of the mesh.





**Parameters**:

* [dpf::Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) **availableElementTypes**: [in] Scopings of available element types.

**Return type**: void

<a id="classansys_1_1dpf_1_1MeshInfo_1a97b6898d8b6aeb48a9d2afd5e5b6bd62"></a>
### Function getNumNodes

![][public]

```cpp
int ansys::dpf::MeshInfo::getNumNodes()
```



**Returns**:

the number of nodes of the mesh.



**Return type**: int

<a id="classansys_1_1dpf_1_1MeshInfo_1a11ef1866e82f2da3c65bc54df8b2f2f6"></a>
### Function getNumElem

![][public]

```cpp
int ansys::dpf::MeshInfo::getNumElem()
```



**Returns**:

the number of elements of the mesh.



**Return type**: int

<a id="classansys_1_1dpf_1_1MeshInfo_1a3b20de6e4ee7a5ac086d260f139706bc"></a>
### Function getAvailableEt

![][public]

```cpp
dpf::Scoping ansys::dpf::MeshInfo::getAvailableEt()
```



**Returns**:

the available element types of the mesh.



**Return type**: [dpf::Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1MeshInfo_1a7a288ff55960fa0955502b51d8f84583"></a>
### Function getSplittableBy

![][public]

```cpp
dpf::StringField ansys::dpf::MeshInfo::getSplittableBy()
```



**Returns**:

the names of the scoped meshes that split the mesh.



**Return type**: [dpf::StringField](classansys_1_1dpf_1_1StringField.md#classansys_1_1dpf_1_1StringField)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)