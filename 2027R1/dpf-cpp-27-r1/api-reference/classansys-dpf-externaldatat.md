<a id="classansys-dpf-externaldatat"></a>
# Class ansys::dpf::ExternalDataT

![][C++]
![][public]



Typed encapsulation of external data.

**Template parameters**:

* typename DataT

**Inherits from**:

* [ansys::dpf::ExternalData](classansys-dpf-externaldata.md#classansys-dpf-externaldata)

## Members

* [ExternalDataT](classansys-dpf-externaldatat.md#classansys-dpf-externaldatat-1aa7dd171449cdbd182e1fb9698a6e1466)
* [get](classansys-dpf-externaldatat.md#classansys-dpf-externaldatat-1a3067764e79993273bd275f2eabbaf0a7)
* [get](classansys-dpf-externaldatat.md#classansys-dpf-externaldatat-1ae79ddf35ad3a2bd72fb31c8ab2f4300f)
* [~ExternalData](classansys-dpf-externaldata.md#classansys-dpf-externaldata-1ada5a486f7b90c6a662e7f1e0c93312a1)
* [~ExternalDataT](classansys-dpf-externaldatat.md#classansys-dpf-externaldatat-1aa228dffe77f8d166380eae47bcbd009d)

## Public functions

<a id="classansys-dpf-externaldatat-1aa7dd171449cdbd182e1fb9698a6e1466"></a>
### Function ExternalDataT

![][public]


```cpp
ansys::dpf::ExternalDataT< DataT >::ExternalDataT(DataT const &d)
```




Create an encapsulated data object.



**Parameters**:

* DataT const & **d**: [in] Object to encapsulate.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalDataT::ExternalDataT"}]}`
-->

<a id="classansys-dpf-externaldatat-1aa228dffe77f8d166380eae47bcbd009d"></a>
### Function ~ExternalDataT

![][public]


```cpp
virtual ansys::dpf::ExternalDataT< DataT >::~ExternalDataT()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalDataT::~ExternalDataT"}]}`
-->

<a id="classansys-dpf-externaldatat-1a3067764e79993273bd275f2eabbaf0a7"></a>
### Function get

![][public]


```cpp
DataT & ansys::dpf::ExternalDataT< DataT >::get()
```




**Returns**:

Base data object.



**Return type**: DataT &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalDataT::get"}]}`
-->

<a id="classansys-dpf-externaldatat-1ae79ddf35ad3a2bd72fb31c8ab2f4300f"></a>
### Function get

![][public]
![][const]


```cpp
DataT const  & ansys::dpf::ExternalDataT< DataT >::get() const
```




**Returns**:

Base data object.



**Return type**: DataT const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalDataT::get"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)