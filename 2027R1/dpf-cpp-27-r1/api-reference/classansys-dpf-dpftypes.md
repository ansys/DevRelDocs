# Class ansys::dpf::DpfTypes

<a id="classansys-dpf-dpftypes"></a>

![][C++]
![][public]



Base class for many DPF classes

**Inherited by**:

* [ansys::dpf::Any](classansys-dpf-any.md#classansys-dpf-any)
* [ansys::dpf::Client](classansys-dpf-client.md#classansys-dpf-client)
* [ansys::dpf::CollectionBase](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase)
* [ansys::dpf::CustomTypeField](classansys-dpf-customtypefield.md#classansys-dpf-customtypefield)
* [ansys::dpf::CyclicSupport](classansys-dpf-cyclicsupport.md#classansys-dpf-cyclicsupport)
* [ansys::dpf::DataSources](classansys-dpf-datasources.md#classansys-dpf-datasources)
* [ansys::dpf::DataTree](classansys-dpf-datatree.md#classansys-dpf-datatree)
* [ansys::dpf::Field](classansys-dpf-field.md#classansys-dpf-field)
* [ansys::dpf::FieldDefinition](classansys-dpf-fielddefinition.md#classansys-dpf-fielddefinition)
* [ansys::dpf::GenericDataContainer](classansys-dpf-genericdatacontainer.md#classansys-dpf-genericdatacontainer)
* [ansys::dpf::LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace)
* [ansys::dpf::Mapping](classansys-dpf-mapping.md#classansys-dpf-mapping)
* [ansys::dpf::MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)
* [ansys::dpf::Operator](classansys-dpf-operator.md#classansys-dpf-operator)
* [ansys::dpf::OperatorConfig](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig)
* [ansys::dpf::OperatorSpecification](classansys-dpf-operatorspecification.md#classansys-dpf-operatorspecification)
* [ansys::dpf::PropertyField](classansys-dpf-propertyfield.md#classansys-dpf-propertyfield)
* [ansys::dpf::ResultInfo](classansys-dpf-resultinfo.md#classansys-dpf-resultinfo)
* [ansys::dpf::Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)
* [ansys::dpf::Session](classansys-dpf-session.md#classansys-dpf-session)
* [ansys::dpf::Streams](classansys-dpf-streams.md#classansys-dpf-streams)
* [ansys::dpf::StringField](classansys-dpf-stringfield.md#classansys-dpf-stringfield)
* [ansys::dpf::Support](classansys-dpf-support.md#classansys-dpf-support)
* [ansys::dpf::TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport)
* [ansys::dpf::Workflow](classansys-dpf-workflow.md#classansys-dpf-workflow)

## Members

* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)

## Friends

## Public functions

<a id="classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f"></a>
### Function ~DpfTypes

![][public]


```cpp
virtual ansys::dpf::DpfTypes::~DpfTypes()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::~DpfTypes"}]}`
-->

<a id="classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459"></a>
### Function empty

![][public]
![][const]


```cpp
virtual bool ansys::dpf::DpfTypes::empty() const
```




**Returns**:

Indicates if object is empty.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::empty"}]}`
-->

<a id="classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15"></a>
### Function hasInternalObject

![][public]
![][const]


```cpp
virtual bool ansys::dpf::DpfTypes::hasInternalObject() const
```




**Returns**:

Indicates if the internal implementation object has been instantiated.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::hasInternalObject"}]}`
-->

<a id="classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2"></a>
### Function describe

![][public]
![][const]


```cpp
virtual std::string ansys::dpf::DpfTypes::describe() const
```




**Returns**:

Description of object.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::describe"}]}`
-->

<a id="classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597"></a>
### Function callAPI

![][public]
![][const]


```cpp
so::API const  * ansys::dpf::DpfTypes::callAPI() const
```




**Returns**:

API of object.



**Return type**: so::API const *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::callAPI"}]}`
-->

<a id="classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73"></a>
### Function isOnCommonAPI

![][public]
![][const]


```cpp
bool ansys::dpf::DpfTypes::isOnCommonAPI() const
```




**Returns**:

Wether the common API is used by the object or not.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::isOnCommonAPI"}]}`
-->

<a id="classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a"></a>
### Function getClient

![][public]
![][const]


```cpp
bool ansys::dpf::DpfTypes::getClient(Client &client) const
```




**Returns**:

Get the [Client](classansys-dpf-client.md#classansys-dpf-client) the object is on, if it has one. Must not be used without using remote API.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) & **client**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::getClient"}]}`
-->

<a id="classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66"></a>
### Function hasBeenMovedLocally

![][public]
![][const]


```cpp
bool ansys::dpf::DpfTypes::hasBeenMovedLocally() const
```




**Returns**:

Wether the object has been fully moved on the local server, in case it was defined first on another server.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::hasBeenMovedLocally"}]}`
-->

<a id="classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7"></a>
### Function isSameObject

![][public]
![][const]


```cpp
bool ansys::dpf::DpfTypes::isSameObject(DpfTypes const &rhs) const
```




**Returns**:

Indicate if the current object reference the same underlying DPF object than the provided DpfType.



**Parameters**:

* DpfTypes const & **rhs**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfTypes::isSameObject"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)