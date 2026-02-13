<a id="classansys_1_1dpf_1_1CustomContainerBase"></a>
# Class ansys::dpf::CustomContainerBase

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5464)

Allows you to define your own containers by deriving from this class.

For the custom class deriving from [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase) to be fully supported by DPF features (connection to Operator, remote access, multi languages API), all private attributes should registered into the GenericDataContainer held.

**Inherited by**:

* [ansys::dpf::Changelog](classansys_1_1dpf_1_1Changelog.md#classansys_1_1dpf_1_1Changelog)

## Members

* [\_container](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a117aede0de0250a9c8eb5481377e64cc)
* [container](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a595ca7a2057dd128a01676b24e622c08)
* [container](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a43b2fea572fa3298d6405cf7f497c78b)
* [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1ab2649202d9da1730e164634a4d864f3e)
* [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a0dbdad77df7b779da34e8fa283a6597f)
* [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1ae7229c52821828cec4fca9dce836ee55)
* [describe](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a65a8a6f6585ddf80c7e0dfdf9b9c50f5)
* [getAttributeNames](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a1ba98abe5c74497c829744f302de3cb5)
* [getClient](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1ae048111b288fdbddfd3a5ab07438bc85)
* [internalObj](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a7692a444bc417444608df8174fbb9e65)
* [setContainer](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a1b6aa8a1be22a9f53f16a8620cc8b951)
* [swap](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1ac437033b807c1811dcd08e9ed527ef46)
* [~CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1a352060b066a01aeda0631390b664f021)

## Friends

<a id="classansys_1_1dpf_1_1CustomContainerBase_1acc06c4380c923e11af63f95e97c3c259"></a>
### Friend GenericDataContainer

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5466)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class GenericDataContainer"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::GenericDataContainer"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"GenericDataContainer"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5467)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::Operator"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Operator"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5468)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::Workflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Workflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1af891ea2ca8eebe3679e051763ba989ce"></a>
### Friend CollectionBase

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5469)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CollectionBase"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::CollectionBase"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"CollectionBase"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5470)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::core"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"core"}]},{"type":"text","text":"\n        "}]}`
-->

## Private attributes

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a117aede0de0250a9c8eb5481377e64cc"></a>
### Variable \_container

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5472)


```cpp
GenericDataContainer ansys::dpf::CustomContainerBase::_container
```








**Type**: GenericDataContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::_container"}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a1b6aa8a1be22a9f53f16a8620cc8b951"></a>
### Function setContainer

![][private]


```cpp
void ansys::dpf::CustomContainerBase::setContainer(GenericDataContainer const &container)
```








**Parameters**:

* GenericDataContainer const & **container**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::setContainer"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1ac437033b807c1811dcd08e9ed527ef46"></a>
### Function swap

![][private]


```cpp
void ansys::dpf::CustomContainerBase::swap(CustomContainerBase &&rhs) noexcept
```


swaps data between 2 CustomContainerBases.

should be used in derived classes copy containers.



**Parameters**:

* [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase_1ab2649202d9da1730e164634a4d864f3e) && **rhs**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::swap"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a7692a444bc417444608df8174fbb9e65"></a>
### Function internalObj

![][private]
![][const]


```cpp
opaque::DpfObject *const ansys::dpf::CustomContainerBase::internalObj() const
```








**Return type**: opaque::DpfObject *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::internalObj"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1CustomContainerBase_1ab2649202d9da1730e164634a4d864f3e"></a>
### Function CustomContainerBase

![][public]


```cpp
ansys::dpf::CustomContainerBase::CustomContainerBase(std::string const &class_name)
```








**Parameters**:

* std::string const & **class_name**: [in] Name of the custom class in camel case format. Will be used to print the instance.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::CustomContainerBase"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a0dbdad77df7b779da34e8fa283a6597f"></a>
### Function CustomContainerBase

![][public]


```cpp
ansys::dpf::CustomContainerBase::CustomContainerBase(std::string const &class_name, Client const *const client)
```








**Parameters**:

* std::string const & **class_name**: [in] Name of the custom class in camel case format. Will be used to print the instance.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::CustomContainerBase"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1ae7229c52821828cec4fca9dce836ee55"></a>
### Function CustomContainerBase

![][public]


```cpp
ansys::dpf::CustomContainerBase::CustomContainerBase(std::string const &class_name, GenericDataContainer const &container)
```








**Parameters**:

* std::string const & **class_name**: [in] Name of the custom class in camel case format. Will be used to print the instance.
* GenericDataContainer const & **container**: [in] Internal container holding all the attributes as properties.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::CustomContainerBase"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a352060b066a01aeda0631390b664f021"></a>
### Function ~CustomContainerBase

![][public]


```cpp
virtual ansys::dpf::CustomContainerBase::~CustomContainerBase()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::~CustomContainerBase"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a595ca7a2057dd128a01676b24e622c08"></a>
### Function container

![][public]


```cpp
GenericDataContainer & ansys::dpf::CustomContainerBase::container()
```




**Returns**:

The internal container.



**Return type**: GenericDataContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::container"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a43b2fea572fa3298d6405cf7f497c78b"></a>
### Function container

![][public]
![][const]


```cpp
virtual GenericDataContainer const  & ansys::dpf::CustomContainerBase::container() const
```




**Returns**:

The internal container.



**Return type**: GenericDataContainer const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::container"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a65a8a6f6585ddf80c7e0dfdf9b9c50f5"></a>
### Function describe

![][public]
![][const]


```cpp
std::string ansys::dpf::CustomContainerBase::describe() const
```




**Returns**:

Description of object.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::describe"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1a1ba98abe5c74497c829744f302de3cb5"></a>
### Function getAttributeNames

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::CustomContainerBase::getAttributeNames() const
```








**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::getAttributeNames"}]}`
-->

<a id="classansys_1_1dpf_1_1CustomContainerBase_1ae048111b288fdbddfd3a5ab07438bc85"></a>
### Function getClient

![][public]
![][const]


```cpp
bool ansys::dpf::CustomContainerBase::getClient(Client &client) const
```




**Returns**:

Get the [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) the object is on, if it has one. Must not be used without using remote API.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) & **client**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::getClient"}]}`
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