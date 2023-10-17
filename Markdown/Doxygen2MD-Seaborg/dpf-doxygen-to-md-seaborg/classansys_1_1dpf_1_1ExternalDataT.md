<a id="classansys_1_1dpf_1_1ExternalDataT"></a>
# Class ansys::dpf::ExternalDataT

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 86)



Typed encapsulation of external data.

**Template parameters**:

* typename DataT

**Inherits from**:

* [ansys::dpf::ExternalData](classansys_1_1dpf_1_1ExternalData.md#classansys_1_1dpf_1_1ExternalData)

## Members

* [\_data](classansys_1_1dpf_1_1ExternalDataT.md#classansys_1_1dpf_1_1ExternalDataT_1a3395f311632026c3d8cf2b09d5388c03)
* [ExternalDataT](classansys_1_1dpf_1_1ExternalDataT.md#classansys_1_1dpf_1_1ExternalDataT_1aa7dd171449cdbd182e1fb9698a6e1466)
* [get](classansys_1_1dpf_1_1ExternalDataT.md#classansys_1_1dpf_1_1ExternalDataT_1a74dc7f7c691c1173351b3e7dc8d77882)
* [get](classansys_1_1dpf_1_1ExternalDataT.md#classansys_1_1dpf_1_1ExternalDataT_1aaa39334c271d0c6e708c63e18d3ab8f7)
* [~ExternalData](classansys_1_1dpf_1_1ExternalData.md#classansys_1_1dpf_1_1ExternalData_1ada5a486f7b90c6a662e7f1e0c93312a1)
* [~ExternalDataT](classansys_1_1dpf_1_1ExternalDataT.md#classansys_1_1dpf_1_1ExternalDataT_1aa228dffe77f8d166380eae47bcbd009d)

## Private attributes

<a id="classansys_1_1dpf_1_1ExternalDataT_1a3395f311632026c3d8cf2b09d5388c03"></a>
### Variable \_data

![][private]

**Definition**: `dpf\_api.h` (line 89)

```cpp
DataT ansys::dpf::ExternalDataT< DataT >::_data
```







**Type**: DataT

## Public functions

<a id="classansys_1_1dpf_1_1ExternalDataT_1aa7dd171449cdbd182e1fb9698a6e1466"></a>
### Function ExternalDataT

![][public]

```cpp
ansys::dpf::ExternalDataT< DataT >::ExternalDataT(DataT const &d)
```



Create an encapsulated data object.



**Parameters**:

* DataT const & **d**: [in] Object to encapsulate.

**Return type**: 

<a id="classansys_1_1dpf_1_1ExternalDataT_1aa228dffe77f8d166380eae47bcbd009d"></a>
### Function ~ExternalDataT

![][public]

```cpp
virtual ansys::dpf::ExternalDataT< DataT >::~ExternalDataT()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1ExternalDataT_1a74dc7f7c691c1173351b3e7dc8d77882"></a>
### Function get

![][public]

```cpp
DataT& ansys::dpf::ExternalDataT< DataT >::get()
```



**Returns**:

Base data object.



**Return type**: DataT &

<a id="classansys_1_1dpf_1_1ExternalDataT_1aaa39334c271d0c6e708c63e18d3ab8f7"></a>
### Function get

![][public]
![][const]

```cpp
DataT const& ansys::dpf::ExternalDataT< DataT >::get() const
```



**Returns**:

Base data object.



**Return type**: DataT const  &

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)