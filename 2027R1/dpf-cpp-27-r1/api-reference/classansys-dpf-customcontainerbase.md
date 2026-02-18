# Class ansys::dpf::CustomContainerBase

<a id="classansys-dpf-customcontainerbase"></a>

![][C++]
![][public]

Allows you to define your own containers by deriving from this class.

For the custom class deriving from [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase) to be fully supported by DPF features (connection to Operator, remote access, multi languages API), all private attributes should registered into the GenericDataContainer held.

**Inherited by**:

* [ansys::dpf::Changelog](classansys-dpf-changelog.md#classansys-dpf-changelog)

## Members

* [container](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a595ca7a2057dd128a01676b24e622c08)
* [container](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a43b2fea572fa3298d6405cf7f497c78b)
* [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1ab2649202d9da1730e164634a4d864f3e)
* [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a0dbdad77df7b779da34e8fa283a6597f)
* [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1ae7229c52821828cec4fca9dce836ee55)
* [describe](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a65a8a6f6585ddf80c7e0dfdf9b9c50f5)
* [getAttributeNames](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a1ba98abe5c74497c829744f302de3cb5)
* [getClient](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1ae048111b288fdbddfd3a5ab07438bc85)
* [~CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a352060b066a01aeda0631390b664f021)

## Friends

## Public functions

<a id="classansys-dpf-customcontainerbase-1ab2649202d9da1730e164634a4d864f3e"></a>
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

<a id="classansys-dpf-customcontainerbase-1a0dbdad77df7b779da34e8fa283a6597f"></a>
### Function CustomContainerBase

![][public]


```cpp
ansys::dpf::CustomContainerBase::CustomContainerBase(std::string const &class_name, Client const *const client)
```








**Parameters**:

* std::string const & **class_name**: [in] Name of the custom class in camel case format. Will be used to print the instance.
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CustomContainerBase::CustomContainerBase"}]}`
-->

<a id="classansys-dpf-customcontainerbase-1ae7229c52821828cec4fca9dce836ee55"></a>
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

<a id="classansys-dpf-customcontainerbase-1a352060b066a01aeda0631390b664f021"></a>
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

<a id="classansys-dpf-customcontainerbase-1a595ca7a2057dd128a01676b24e622c08"></a>
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

<a id="classansys-dpf-customcontainerbase-1a43b2fea572fa3298d6405cf7f497c78b"></a>
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

<a id="classansys-dpf-customcontainerbase-1a65a8a6f6585ddf80c7e0dfdf9b9c50f5"></a>
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

<a id="classansys-dpf-customcontainerbase-1a1ba98abe5c74497c829744f302de3cb5"></a>
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

<a id="classansys-dpf-customcontainerbase-1ae048111b288fdbddfd3a5ab07438bc85"></a>
### Function getClient

![][public]
![][const]


```cpp
bool ansys::dpf::CustomContainerBase::getClient(Client &client) const
```




**Returns**:

Get the [Client](classansys-dpf-client.md#classansys-dpf-client) the object is on, if it has one. Must not be used without using remote API.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) & **client**

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
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)