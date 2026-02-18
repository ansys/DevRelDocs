# Class ansys::dpf::ElementCursor

<a id="classansys-dpf-elementcursor"></a>

![][C++]
![][public]



Point on a local element data within a mesh.

## Members

* [defined](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1a4daaa4aa35e0c6a769d80b5fa0523b4d)
* [descriptor](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1af3c4e595a62ac09aca9de7fc2322bb62)
* [effectiveSize](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1a2c9af98ac05f0b60cdac5f3baeece638)
* [ElementCursor](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1ae5a794891c2c4ce555ef9ebed86c72c1)
* [ElementCursor](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1ab3b7e0f631546b360d00d30f57475d29)
* [ElementCursor](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1a42a87b28ff9b8cd52894405beb4f8aa0)
* [id](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1a3f73e05a946c60b4901cb32027d84765)
* [numberOfCornerNodes](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1a5e7ffc770ff20b75c5353f34aae6c687)
* [numberOfMidNodes](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1a1710596a51fd20b7cc2e087cd78790a9)
* [numberOfNodes](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1a54ae9b25c375c752682a7dff04603348)
* [operator[]](classansys-dpf-elementcursor.md#classansys-dpf-elementcursor-1ade825f7c6dc2123cb6c7e9c03c2750fe)

## Friends

<a id="classansys-dpf-elementcursor-1abb31806c269987c4a5e2a51f1f4d4d39"></a>
### Friend MeshedRegion

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class MeshedRegion"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::MeshedRegion"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"MeshedRegion"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys-dpf-elementcursor-1ae5a794891c2c4ce555ef9ebed86c72c1"></a>
### Function ElementCursor

![][public]


```cpp
ansys::dpf::ElementCursor::ElementCursor()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::ElementCursor"}]}`
-->

<a id="classansys-dpf-elementcursor-1ab3b7e0f631546b360d00d30f57475d29"></a>
### Function ElementCursor

![][public]


```cpp
ansys::dpf::ElementCursor::ElementCursor(ElementCursor const &)=delete
```








**Parameters**:

* ElementCursor const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::ElementCursor"}]}`
-->

<a id="classansys-dpf-elementcursor-1a42a87b28ff9b8cd52894405beb4f8aa0"></a>
### Function ElementCursor

![][public]


```cpp
ansys::dpf::ElementCursor::ElementCursor(ElementCursor &&)=delete
```








**Parameters**:

* ElementCursor &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::ElementCursor"}]}`
-->

<a id="classansys-dpf-elementcursor-1af3c4e595a62ac09aca9de7fc2322bb62"></a>
### Function descriptor

![][public]
![][const]


```cpp
ElementDescriptor const  & ansys::dpf::ElementCursor::descriptor() const
```




**Returns**:

Element descriptor for cursor.



**Return type**: [ElementDescriptor](structansys-dpf-elementdescriptor.md#structansys-dpf-elementdescriptor) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::descriptor"}]}`
-->

<a id="classansys-dpf-elementcursor-1a54ae9b25c375c752682a7dff04603348"></a>
### Function numberOfNodes

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::numberOfNodes() const
```


@ return Number of nodes in element.





**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::numberOfNodes"}]}`
-->

<a id="classansys-dpf-elementcursor-1a5e7ffc770ff20b75c5353f34aae6c687"></a>
### Function numberOfCornerNodes

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::numberOfCornerNodes() const
```




**Returns**:

Number of corner nodes in element.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::numberOfCornerNodes"}]}`
-->

<a id="classansys-dpf-elementcursor-1a1710596a51fd20b7cc2e087cd78790a9"></a>
### Function numberOfMidNodes

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::numberOfMidNodes() const
```




**Returns**:

Number of mid-side nodes in element.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::numberOfMidNodes"}]}`
-->

<a id="classansys-dpf-elementcursor-1a2c9af98ac05f0b60cdac5f3baeece638"></a>
### Function effectiveSize

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::effectiveSize() const
```




**Returns**:

Number of nodes in cursor.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::effectiveSize"}]}`
-->

<a id="classansys-dpf-elementcursor-1a4daaa4aa35e0c6a769d80b5fa0523b4d"></a>
### Function defined

![][public]
![][const]


```cpp
bool ansys::dpf::ElementCursor::defined() const
```




**Returns**:

Indication that cursor is defined.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::defined"}]}`
-->

<a id="classansys-dpf-elementcursor-1a3f73e05a946c60b4901cb32027d84765"></a>
### Function id

![][public]
![][const]


```cpp
dp_id ansys::dpf::ElementCursor::id() const
```




**Returns**:

Element cursor id.



**Return type**: [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::id"}]}`
-->

<a id="classansys-dpf-elementcursor-1ade825f7c6dc2123cb6c7e9c03c2750fe"></a>
### Function operator[]

![][public]
![][const]


```cpp
dp_index ansys::dpf::ElementCursor::operator[](dp_index i) const
```




**Returns**:

Connectivity node id given by index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **i**: [in] Index into connectivity list.

**Return type**: [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::operator[]"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)