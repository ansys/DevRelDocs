<a id="classansys_1_1dpf_1_1GenericDataContainer"></a>
# Class ansys::dpf::GenericDataContainer

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4026)





**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1ef954a45b178eac4de68813168db6fb)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [GenericDataContainer](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1ab2d68cadf7c4ee3502154973176b7ecf)
* [GenericDataContainer](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1a8f809e3503a06710a076825a1c331740)
* [GenericDataContainer](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1aa21e7758ec9efc6d257e7d2db76035ef)
* [GenericDataContainer](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1a3903f967494baaf46bd6f7035cc569d0)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getProperty](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1a38418a10a5c3594bde66acede15e96e9)
* [getPropertyAny](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1a95c85823326a024c3debd50a54b966f4)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [operator=](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1a521990ad5bfdcefc2ade56aeed1e8724)
* [operator=](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1aeef62c1ea406b7a102e55f1970b826be)
* [setProperty](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1ae9feb6c42b98ceb8f7371c3cb6c3d601)
* [setPropertyAny](classansys_1_1dpf_1_1GenericDataContainer.md#classansys_1_1dpf_1_1GenericDataContainer_1a772dc4122f531c8a3944411b55e232a3)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)

## Private functions

<a id="classansys_1_1dpf_1_1GenericDataContainer_1ab2d68cadf7c4ee3502154973176b7ecf"></a>
### Function GenericDataContainer

![][private]

```cpp
ansys::dpf::GenericDataContainer::GenericDataContainer(opaque::DpfInternalSharedObject *)
```







**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

<a id="classansys_1_1dpf_1_1GenericDataContainer_1a95c85823326a024c3debd50a54b966f4"></a>
### Function getPropertyAny

![][private]

```cpp
Any ansys::dpf::GenericDataContainer::getPropertyAny(const std::string &property_name)
```







**Parameters**:

* const std::string & **property_name**

**Return type**: [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any)

<a id="classansys_1_1dpf_1_1GenericDataContainer_1a772dc4122f531c8a3944411b55e232a3"></a>
### Function setPropertyAny

![][private]

```cpp
void ansys::dpf::GenericDataContainer::setPropertyAny(const std::string &property_name, const Any &property)
```







**Parameters**:

* const std::string & **property_name**
* const [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) & **property**

**Return type**: void

## Public functions

<a id="classansys_1_1dpf_1_1GenericDataContainer_1a8f809e3503a06710a076825a1c331740"></a>
### Function GenericDataContainer

![][public]

```cpp
ansys::dpf::GenericDataContainer::GenericDataContainer()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1GenericDataContainer_1aa21e7758ec9efc6d257e7d2db76035ef"></a>
### Function GenericDataContainer

![][public]

```cpp
ansys::dpf::GenericDataContainer::GenericDataContainer(GenericDataContainer const &)
```







**Parameters**:

* GenericDataContainer const &

**Return type**: 

<a id="classansys_1_1dpf_1_1GenericDataContainer_1a3903f967494baaf46bd6f7035cc569d0"></a>
### Function GenericDataContainer

![][public]

```cpp
ansys::dpf::GenericDataContainer::GenericDataContainer(GenericDataContainer &&)
```







**Parameters**:

* GenericDataContainer &&

**Return type**: 

<a id="classansys_1_1dpf_1_1GenericDataContainer_1a521990ad5bfdcefc2ade56aeed1e8724"></a>
### Function operator=

![][public]

```cpp
GenericDataContainer& ansys::dpf::GenericDataContainer::operator=(GenericDataContainer const &)
```







**Parameters**:

* GenericDataContainer const &

**Return type**: GenericDataContainer &

<a id="classansys_1_1dpf_1_1GenericDataContainer_1aeef62c1ea406b7a102e55f1970b826be"></a>
### Function operator=

![][public]

```cpp
GenericDataContainer& ansys::dpf::GenericDataContainer::operator=(GenericDataContainer &&)
```







**Parameters**:

* GenericDataContainer &&

**Return type**: GenericDataContainer &

<a id="classansys_1_1dpf_1_1GenericDataContainer_1a38418a10a5c3594bde66acede15e96e9"></a>
### Function getProperty

![][public]

```cpp
T ansys::dpf::GenericDataContainer::getProperty(const std::string &property_name)
```



**Returns**:

property associated to given property name



**Parameters**:

* const std::string & **property_name**

**Return type**: T

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1GenericDataContainer_1ae9feb6c42b98ceb8f7371c3cb6c3d601"></a>
### Function setProperty

![][public]

```cpp
void ansys::dpf::GenericDataContainer::setProperty(const std::string &property_name, const T &property)
```



set property with given property name



**Parameters**:

* const std::string & **property_name**
* const T & **property**

**Return type**: void

**TODO**:

* templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)