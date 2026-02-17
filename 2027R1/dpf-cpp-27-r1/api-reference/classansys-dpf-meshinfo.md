<a id="classansys-dpf-meshinfo"></a>
# Class ansys::dpf::MeshInfo

![][C++]
![][public]

Define a mesh info.

[MeshInfo](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo) can set and get properties of the mesh through a GenericDataContainer.

## Members

* [getAvailableElementTypes](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a736817aee8059d944483e080a9152d0b)
* [getGenericDataContainer](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1aedfb2d1266289e8df5820ac7662b5f6f)
* [getProperty](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1ad8d1b38ef0c64942059934fe0b33cfca)
* [getSplittableBy](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a7a288ff55960fa0955502b51d8f84583)
* [MeshInfo](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a890fd135102502182cd0155f13524a49)
* [MeshInfo](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1ae404772abc35c42c2ff22217d162c573)
* [MeshInfo](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1afff8f1ec60d852cc1e15c5fd5df6306b)
* [numberOfElements](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a446ad4eef444bdc799ea0c783783e863)
* [numberOfNodes](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a1baa306edc0ddced75798e77f68c590a)
* [operator=](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a22a33b5af1e81b7d4835343a35c99e23)
* [setAvailableElementType](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a64932c3302954322668f319e76af6911)
* [setnumberOfElements](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a01146bcc71f898d13ae42ec8b9e5f247)
* [setnumberOfNodes](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a4ad70b09ecbd1f3161ebbd33dd62d399)
* [setProperty](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1a2e03f447b78a4f99d590c6d183616709)
* [setSplittableBy](classansys-dpf-meshinfo.md#classansys-dpf-meshinfo-1aac41382a70a99d12ccb70215685f5d00)

## Public functions

<a id="classansys-dpf-meshinfo-1a890fd135102502182cd0155f13524a49"></a>
### Function MeshInfo

![][public]


```cpp
ansys::dpf::MeshInfo::MeshInfo()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::MeshInfo"}]}`
-->

<a id="classansys-dpf-meshinfo-1ae404772abc35c42c2ff22217d162c573"></a>
### Function MeshInfo

![][public]


```cpp
ansys::dpf::MeshInfo::MeshInfo(const GenericDataContainer &_genericData)
```








**Parameters**:

* const GenericDataContainer & **_genericData**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::MeshInfo"}]}`
-->

<a id="classansys-dpf-meshinfo-1afff8f1ec60d852cc1e15c5fd5df6306b"></a>
### Function MeshInfo

![][public]


```cpp
ansys::dpf::MeshInfo::MeshInfo(MeshInfo const &)
```








**Parameters**:

* MeshInfo const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::MeshInfo"}]}`
-->

<a id="classansys-dpf-meshinfo-1a22a33b5af1e81b7d4835343a35c99e23"></a>
### Function operator=

![][public]


```cpp
MeshInfo & ansys::dpf::MeshInfo::operator=(MeshInfo const &)
```








**Parameters**:

* MeshInfo const &

**Return type**: MeshInfo &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::operator="}]}`
-->

<a id="classansys-dpf-meshinfo-1aedfb2d1266289e8df5820ac7662b5f6f"></a>
### Function getGenericDataContainer

![][public]
![][const]


```cpp
GenericDataContainer const  & ansys::dpf::MeshInfo::getGenericDataContainer() const
```








**Return type**: GenericDataContainer const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::getGenericDataContainer"}]}`
-->

<a id="classansys-dpf-meshinfo-1ad8d1b38ef0c64942059934fe0b33cfca"></a>
### Function getProperty

![][public]
![][const]


```cpp
T ansys::dpf::MeshInfo::getProperty(const std::string &property_name) const
```








**Parameters**:

* const std::string & **property_name**

**Return type**: T

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::getProperty"}]}`
-->

<a id="classansys-dpf-meshinfo-1a2e03f447b78a4f99d590c6d183616709"></a>
### Function setProperty

![][public]


```cpp
void ansys::dpf::MeshInfo::setProperty(const std::string &property_name, const T &property)
```








**Parameters**:

* const std::string & **property_name**
* const T & **property**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::setProperty"}]}`
-->

<a id="classansys-dpf-meshinfo-1a4ad70b09ecbd1f3161ebbd33dd62d399"></a>
### Function setnumberOfNodes

![][public]


```cpp
void ansys::dpf::MeshInfo::setnumberOfNodes(int numNodes)
```


@detail set the number of nodes.





**Parameters**:

* int **numNodes**: [in] Number of nodes.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::setnumberOfNodes"}]}`
-->

<a id="classansys-dpf-meshinfo-1a01146bcc71f898d13ae42ec8b9e5f247"></a>
### Function setnumberOfElements

![][public]


```cpp
void ansys::dpf::MeshInfo::setnumberOfElements(int numElements)
```


@detail set the number of elements.





**Parameters**:

* int **numElements**: [in] Number of elements.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::setnumberOfElements"}]}`
-->

<a id="classansys-dpf-meshinfo-1aac41382a70a99d12ccb70215685f5d00"></a>
### Function setSplittableBy

![][public]


```cpp
void ansys::dpf::MeshInfo::setSplittableBy(dpf::StringField splittableByScoping)
```


@detail set strings name correspondind to mesh split scopings.





**Parameters**:

* [dpf::StringField](classansys-dpf-stringfield.md#classansys-dpf-stringfield) **splittableByScoping**: [in] Split mesh names.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::setSplittableBy"}]}`
-->

<a id="classansys-dpf-meshinfo-1a64932c3302954322668f319e76af6911"></a>
### Function setAvailableElementType

![][public]


```cpp
void ansys::dpf::MeshInfo::setAvailableElementType(dpf::Scoping availableElementTypes)
```


@detail set available elements of the mesh.





**Parameters**:

* [dpf::Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) **availableElementTypes**: [in] Scopings of available element types.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::setAvailableElementType"}]}`
-->

<a id="classansys-dpf-meshinfo-1a1baa306edc0ddced75798e77f68c590a"></a>
### Function numberOfNodes

![][public]


```cpp
int ansys::dpf::MeshInfo::numberOfNodes()
```




**Returns**:

the number of nodes of the mesh.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::numberOfNodes"}]}`
-->

<a id="classansys-dpf-meshinfo-1a446ad4eef444bdc799ea0c783783e863"></a>
### Function numberOfElements

![][public]


```cpp
int ansys::dpf::MeshInfo::numberOfElements()
```




**Returns**:

the number of elements of the mesh.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::numberOfElements"}]}`
-->

<a id="classansys-dpf-meshinfo-1a736817aee8059d944483e080a9152d0b"></a>
### Function getAvailableElementTypes

![][public]


```cpp
dpf::Scoping ansys::dpf::MeshInfo::getAvailableElementTypes()
```




**Returns**:

the available element types of the mesh.



**Return type**: [dpf::Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::getAvailableElementTypes"}]}`
-->

<a id="classansys-dpf-meshinfo-1a7a288ff55960fa0955502b51d8f84583"></a>
### Function getSplittableBy

![][public]


```cpp
dpf::StringField ansys::dpf::MeshInfo::getSplittableBy()
```




**Returns**:

the names of the scoped meshes that split the mesh.



**Return type**: [dpf::StringField](classansys-dpf-stringfield.md#classansys-dpf-stringfield)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::MeshInfo::getSplittableBy"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)