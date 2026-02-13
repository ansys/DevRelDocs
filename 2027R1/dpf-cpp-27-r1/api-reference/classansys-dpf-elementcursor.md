<a id="classansys_1_1dpf_1_1ElementCursor"></a>
# Class ansys::dpf::ElementCursor

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 994)



Point on a local element data within a mesh.

## Members

* [\_connectivity](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a2cede84b2d6cb2228836fb6b91cb7cda)
* [\_descriptor](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a2d8cd8734fa6ef0b9a36bebb54af6f5a)
* [\_effective\_size](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a7624d6f01af77eee5d2c52ce8443268e)
* [\_id](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a7fee5ce285ed04472c8f3bc65537d5b1)
* [\_is\_defined](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a686dcc5429dce2a5de2cf24c9c947b0e)
* [defined](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a4daaa4aa35e0c6a769d80b5fa0523b4d)
* [descriptor](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1af3c4e595a62ac09aca9de7fc2322bb62)
* [effectiveSize](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a2c9af98ac05f0b60cdac5f3baeece638)
* [ElementCursor](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1ae5a794891c2c4ce555ef9ebed86c72c1)
* [ElementCursor](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1ab3b7e0f631546b360d00d30f57475d29)
* [ElementCursor](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a42a87b28ff9b8cd52894405beb4f8aa0)
* [id](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a3f73e05a946c60b4901cb32027d84765)
* [numberOfCornerNodes](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a5e7ffc770ff20b75c5353f34aae6c687)
* [numberOfMidNodes](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a1710596a51fd20b7cc2e087cd78790a9)
* [numberOfNodes](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1a54ae9b25c375c752682a7dff04603348)
* [operator[]](classansys_1_1dpf_1_1ElementCursor.md#classansys_1_1dpf_1_1ElementCursor_1ade825f7c6dc2123cb6c7e9c03c2750fe)

## Friends

<a id="classansys_1_1dpf_1_1ElementCursor_1abb31806c269987c4a5e2a51f1f4d4d39"></a>
### Friend MeshedRegion

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 997)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class MeshedRegion"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::MeshedRegion"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"MeshedRegion"}]},{"type":"text","text":"\n        "}]}`
-->

## Private attributes

<a id="classansys_1_1dpf_1_1ElementCursor_1a2d8cd8734fa6ef0b9a36bebb54af6f5a"></a>
### Variable \_descriptor

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 1000)


```cpp
const ElementDescriptor* ansys::dpf::ElementCursor::_descriptor
```








**Type**: const [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::_descriptor"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a2cede84b2d6cb2228836fb6b91cb7cda"></a>
### Variable \_connectivity

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 1001)


```cpp
const dp_int* ansys::dpf::ElementCursor::_connectivity
```








**Type**: const [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::_connectivity"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a7624d6f01af77eee5d2c52ce8443268e"></a>
### Variable \_effective\_size

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 1002)


```cpp
dp_int ansys::dpf::ElementCursor::_effective_size
```








**Type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::_effective_size"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a7fee5ce285ed04472c8f3bc65537d5b1"></a>
### Variable \_id

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 1003)


```cpp
dp_id ansys::dpf::ElementCursor::_id
```








**Type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::_id"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a686dcc5429dce2a5de2cf24c9c947b0e"></a>
### Variable \_is\_defined

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 1004)


```cpp
bool ansys::dpf::ElementCursor::_is_defined
```








**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::_is_defined"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1ElementCursor_1ae5a794891c2c4ce555ef9ebed86c72c1"></a>
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

<a id="classansys_1_1dpf_1_1ElementCursor_1ab3b7e0f631546b360d00d30f57475d29"></a>
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

<a id="classansys_1_1dpf_1_1ElementCursor_1a42a87b28ff9b8cd52894405beb4f8aa0"></a>
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

<a id="classansys_1_1dpf_1_1ElementCursor_1af3c4e595a62ac09aca9de7fc2322bb62"></a>
### Function descriptor

![][public]
![][const]


```cpp
ElementDescriptor const  & ansys::dpf::ElementCursor::descriptor() const
```




**Returns**:

Element descriptor for cursor.



**Return type**: [ElementDescriptor](structansys_1_1dpf_1_1ElementDescriptor.md#structansys_1_1dpf_1_1ElementDescriptor) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::descriptor"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a54ae9b25c375c752682a7dff04603348"></a>
### Function numberOfNodes

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::numberOfNodes() const
```


@ return Number of nodes in element.





**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::numberOfNodes"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a5e7ffc770ff20b75c5353f34aae6c687"></a>
### Function numberOfCornerNodes

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::numberOfCornerNodes() const
```




**Returns**:

Number of corner nodes in element.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::numberOfCornerNodes"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a1710596a51fd20b7cc2e087cd78790a9"></a>
### Function numberOfMidNodes

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::numberOfMidNodes() const
```




**Returns**:

Number of mid-side nodes in element.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::numberOfMidNodes"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a2c9af98ac05f0b60cdac5f3baeece638"></a>
### Function effectiveSize

![][public]
![][const]


```cpp
dp_int ansys::dpf::ElementCursor::effectiveSize() const
```




**Returns**:

Number of nodes in cursor.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::effectiveSize"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1a4daaa4aa35e0c6a769d80b5fa0523b4d"></a>
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

<a id="classansys_1_1dpf_1_1ElementCursor_1a3f73e05a946c60b4901cb32027d84765"></a>
### Function id

![][public]
![][const]


```cpp
dp_id ansys::dpf::ElementCursor::id() const
```




**Returns**:

Element cursor id.



**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::id"}]}`
-->

<a id="classansys_1_1dpf_1_1ElementCursor_1ade825f7c6dc2123cb6c7e9c03c2750fe"></a>
### Function operator[]

![][public]
![][const]


```cpp
dp_index ansys::dpf::ElementCursor::operator[](dp_index i) const
```




**Returns**:

Connectivity node id given by index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **i**: [in] Index into connectivity list.

**Return type**: [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ElementCursor::operator[]"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)