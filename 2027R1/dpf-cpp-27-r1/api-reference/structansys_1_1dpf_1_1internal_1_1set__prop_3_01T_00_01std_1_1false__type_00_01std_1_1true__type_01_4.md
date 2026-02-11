<a id="structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1false__type_00_01std_1_1true__type_01_4"></a>
# Structure ansys::dpf::internal::set\_prop\< T, std::false\_type, std::true\_type \>

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 7089)





**Template parameters**:

* typename T

## Members

* [internalAddEntry](structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1false__type_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1false__type_00_01std_1_1true__type_01_4_1ab86cc33d493f42556d6698cff04c3591)
* [internalSetProperty](structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1false__type_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1false__type_00_01std_1_1true__type_01_4_1a35f90cccef71e63923a17d93d5fb6ea8)

## Public static functions

<a id="structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1false__type_00_01std_1_1true__type_01_4_1a35f90cccef71e63923a17d93d5fb6ea8"></a>
### Function internalSetProperty

![][public]
![][static]


```cpp
static void ansys::dpf::internal::set_prop< T, std::false_type, std::true_type >::internalSetProperty(GenericDataContainer &gdc, const std::string &property_name, const T &property)
```








**Parameters**:

* GenericDataContainer & **gdc**
* const std::string & **property_name**
* const T & **property**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop< T, std::false_type, std::true_type >::internalSetProperty"}]}`
-->

<a id="structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1false__type_00_01std_1_1true__type_01_4_1ab86cc33d493f42556d6698cff04c3591"></a>
### Function internalAddEntry

![][public]
![][static]


```cpp
static void ansys::dpf::internal::set_prop< T, std::false_type, std::true_type >::internalAddEntry(Collection< T > &collection, LabelSpace const &labels, T const &f, bool can_replace)
```








**Parameters**:

* [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< T > & **collection**
* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **labels**
* T const & **f**
* bool **can_replace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop< T, std::false_type, std::true_type >::internalAddEntry"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)