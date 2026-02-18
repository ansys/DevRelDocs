# Class ansys::dpf::Support

<a id="classansys-dpf-support"></a>

![][C++]
![][public]

Define an abstract support notion.

[Support](classansys-dpf-support.md#classansys-dpf-support) describes the model. It can be the mesh, geometric entities, time or frequency domain...

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

**Inherited by**:

* [ansys::dpf::GenericSupport](classansys-dpf-genericsupport.md#classansys-dpf-genericsupport)

## Members

* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [deep\_copy](classansys-dpf-support.md#classansys-dpf-support-1a3b4233346825454e052a9de678d9ef0a)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [emptySupport](classansys-dpf-support.md#classansys-dpf-support-1ad5b62f0bc3fc29380461006280edf89b)
* [getAsCyclicSupport](classansys-dpf-support.md#classansys-dpf-support-1a5903cf9eb1f3f3fec9fc0a22331db3d3)
* [getAsDomainMesh](classansys-dpf-support.md#classansys-dpf-support-1a244cc29be85eb6192faf468268478064)
* [getAsTimeFreqSupport](classansys-dpf-support.md#classansys-dpf-support-1a2ced0ad4403332166b14f301d67f4a4e)
* [getAvailablePropertyNamesForFields](classansys-dpf-support.md#classansys-dpf-support-1ac6c5332826a5eb2814e71a02fe3e7132)
* [getAvailablePropertyNamesForPropertyFields](classansys-dpf-support.md#classansys-dpf-support-1adb40c35236879d4d6d8a418c618a2f00)
* [getAvailablePropertyNamesForStringFields](classansys-dpf-support.md#classansys-dpf-support-1aefed9b020ce057f1c59e87c5cd0c11f5)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getFieldSupportByProperty](classansys-dpf-support.md#classansys-dpf-support-1aa4704f682e0e0543acf44e37e9350aab)
* [getPropertyFieldSupportByProperty](classansys-dpf-support.md#classansys-dpf-support-1a7b80b961c6418d9c54bb2d50560d3d2f)
* [getStringFieldSupportByProperty](classansys-dpf-support.md#classansys-dpf-support-1a85465ef9621478e6990fddc5ecddc264)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [isMeshedDomain](classansys-dpf-support.md#classansys-dpf-support-1a3cad097e6d82306d5ab8ba23bdb7c8ff)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [operator=](classansys-dpf-support.md#classansys-dpf-support-1aafaebcbcdc49b2ab6fe730399f382d81)
* [operator=](classansys-dpf-support.md#classansys-dpf-support-1a8584e7d484ca126718b4bd7e563011de)
* [Support](classansys-dpf-support.md#classansys-dpf-support-1a7437ca78d2d2fa368dc0063fdf3c221a)
* [Support](classansys-dpf-support.md#classansys-dpf-support-1a71326b7a5a317dd79c6b97a4eb18e79a)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~Support](classansys-dpf-support.md#classansys-dpf-support-1a3f63403200b8eb094dd8ebb3e43661ef)

## Friends

<a id="classansys-dpf-support-1aaec47a26a3c11c1debd3ed922b69cbd2"></a>
### Friend Field

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Field"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::Field"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Field"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1ad19b1aa2f28448bd897fc6c5dd771f02"></a>
### Friend CustomTypeField

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CustomTypeField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::CustomTypeField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"CustomTypeField"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1abb4aa5a7ed62b741f0b146a257d0fe5e"></a>
### Friend PropertyField

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class PropertyField"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::PropertyField"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"PropertyField"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1af891ea2ca8eebe3679e051763ba989ce"></a>
### Friend CollectionBase

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class CollectionBase"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::CollectionBase"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"CollectionBase"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::Operator"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Operator"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::Workflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Workflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::OperatorMain"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"OperatorMain"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1afb1dc59f2e0edbbfe9016fab50e74fbd"></a>
### Friend ResultInfo

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class ResultInfo"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::ResultInfo"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"ResultInfo"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::Any"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Any"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1acc06c4380c923e11af63f95e97c3c259"></a>
### Friend GenericDataContainer

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class GenericDataContainer"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::GenericDataContainer"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"GenericDataContainer"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys-dpf-support-1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::core"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"core"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys-dpf-support-1a3f63403200b8eb094dd8ebb3e43661ef"></a>
### Function ~Support

![][public]


```cpp
virtual ansys::dpf::Support::~Support()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::~Support"}]}`
-->

<a id="classansys-dpf-support-1a7437ca78d2d2fa368dc0063fdf3c221a"></a>
### Function Support

![][public]


```cpp
ansys::dpf::Support::Support(Support const &)
```








**Parameters**:

* Support const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::Support"}]}`
-->

<a id="classansys-dpf-support-1a71326b7a5a317dd79c6b97a4eb18e79a"></a>
### Function Support

![][public]


```cpp
ansys::dpf::Support::Support(Support &&) noexcept
```








**Parameters**:

* Support &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::Support"}]}`
-->

<a id="classansys-dpf-support-1aafaebcbcdc49b2ab6fe730399f382d81"></a>
### Function operator=

![][public]


```cpp
Support & ansys::dpf::Support::operator=(Support const &)
```








**Parameters**:

* Support const &

**Return type**: Support &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::operator="}]}`
-->

<a id="classansys-dpf-support-1a8584e7d484ca126718b4bd7e563011de"></a>
### Function operator=

![][public]


```cpp
Support & ansys::dpf::Support::operator=(Support &&) noexcept
```








**Parameters**:

* Support &&

**Return type**: Support &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::operator="}]}`
-->

<a id="classansys-dpf-support-1a3cad097e6d82306d5ab8ba23bdb7c8ff"></a>
### Function isMeshedDomain

![][public]
![][const]


```cpp
bool ansys::dpf::Support::isMeshedDomain() const
```




**Returns**:

Indication if support is meshed domain.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::isMeshedDomain"}]}`
-->

<a id="classansys-dpf-support-1a244cc29be85eb6192faf468268478064"></a>
### Function getAsDomainMesh

![][public]
![][const]


```cpp
MeshedRegion ansys::dpf::Support::getAsDomainMesh() const
```




**Returns**:

[Support](classansys-dpf-support.md#classansys-dpf-support) as domain mesh.



**Return type**: [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getAsDomainMesh"}]}`
-->

<a id="classansys-dpf-support-1a5903cf9eb1f3f3fec9fc0a22331db3d3"></a>
### Function getAsCyclicSupport

![][public]
![][const]


```cpp
CyclicSupport ansys::dpf::Support::getAsCyclicSupport() const
```




**Returns**:

[Support](classansys-dpf-support.md#classansys-dpf-support) as cyclic support.



**Return type**: [CyclicSupport](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getAsCyclicSupport"}]}`
-->

<a id="classansys-dpf-support-1a2ced0ad4403332166b14f301d67f4a4e"></a>
### Function getAsTimeFreqSupport

![][public]
![][const]


```cpp
TimeFreqSupport ansys::dpf::Support::getAsTimeFreqSupport() const
```




**Returns**:

[Support](classansys-dpf-support.md#classansys-dpf-support) as time frequency support.



**Return type**: [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getAsTimeFreqSupport"}]}`
-->

<a id="classansys-dpf-support-1aa4704f682e0e0543acf44e37e9350aab"></a>
### Function getFieldSupportByProperty

![][public]
![][const]


```cpp
Field ansys::dpf::Support::getFieldSupportByProperty(PropertyType const &property_name) const
```




**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) for a given property.

return empty [Field](classansys-dpf-field.md#classansys-dpf-field) if the property doesn't exist.



**Parameters**:

* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype) const & **property_name**

**Return type**: Field

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getFieldSupportByProperty"}]}`
-->

<a id="classansys-dpf-support-1a7b80b961c6418d9c54bb2d50560d3d2f"></a>
### Function getPropertyFieldSupportByProperty

![][public]
![][const]


```cpp
PropertyField ansys::dpf::Support::getPropertyFieldSupportByProperty(PropertyType const &property_name) const
```




**Returns**:

[PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield) for a given property.

return empty [PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield) if the property doesn't exist.



**Parameters**:

* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype) const & **property_name**

**Return type**: PropertyField

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getPropertyFieldSupportByProperty"}]}`
-->

<a id="classansys-dpf-support-1a85465ef9621478e6990fddc5ecddc264"></a>
### Function getStringFieldSupportByProperty

![][public]
![][const]


```cpp
StringField ansys::dpf::Support::getStringFieldSupportByProperty(PropertyType const &property_name) const
```




**Returns**:

[StringField](classansys-dpf-stringfield.md#classansys-dpf-stringfield) for a given property.

return empty [StringField](classansys-dpf-stringfield.md#classansys-dpf-stringfield) if the property doesn't exist.



**Parameters**:

* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype) const & **property_name**

**Return type**: [StringField](classansys-dpf-stringfield.md#classansys-dpf-stringfield)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getStringFieldSupportByProperty"}]}`
-->

<a id="classansys-dpf-support-1ac6c5332826a5eb2814e71a02fe3e7132"></a>
### Function getAvailablePropertyNamesForFields

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::Support::getAvailablePropertyNamesForFields() const
```




**Returns**:

the list of available properties returning a [Field](classansys-dpf-field.md#classansys-dpf-field).



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getAvailablePropertyNamesForFields"}]}`
-->

<a id="classansys-dpf-support-1adb40c35236879d4d6d8a418c618a2f00"></a>
### Function getAvailablePropertyNamesForPropertyFields

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::Support::getAvailablePropertyNamesForPropertyFields() const
```




**Returns**:

the list of available properties returning a [PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield).



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getAvailablePropertyNamesForPropertyFields"}]}`
-->

<a id="classansys-dpf-support-1aefed9b020ce057f1c59e87c5cd0c11f5"></a>
### Function getAvailablePropertyNamesForStringFields

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::Support::getAvailablePropertyNamesForStringFields() const
```




**Returns**:

the list of available properties returning a [PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield).



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::getAvailablePropertyNamesForStringFields"}]}`
-->

<a id="classansys-dpf-support-1a3b4233346825454e052a9de678d9ef0a"></a>
### Function deep\_copy

![][public]
![][const]


```cpp
Support ansys::dpf::Support::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```




Create a new [Support](classansys-dpf-support.md#classansys-dpf-support) on a server by copying all the data of this [Support](classansys-dpf-support.md#classansys-dpf-support).



**Parameters**:

* [ansys::dpf::Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client** = nullptr : [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: Support

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::deep_copy"}]}`
-->

## Public static functions

<a id="classansys-dpf-support-1ad5b62f0bc3fc29380461006280edf89b"></a>
### Function emptySupport

![][public]
![][static]


```cpp
static Support ansys::dpf::Support::emptySupport()
```




Create an empty support. 
**Returns**:

Empty [Support](classansys-dpf-support.md#classansys-dpf-support).



**Return type**: Support

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Support::emptySupport"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)