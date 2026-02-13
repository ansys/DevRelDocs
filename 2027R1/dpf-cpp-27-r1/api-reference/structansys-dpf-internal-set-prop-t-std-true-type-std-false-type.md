<a id="structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1true__type_00_01std_1_1false__type_01_4"></a>
# Structure ansys::dpf::internal::set\_prop\< T, std::true\_type, std::false\_type \>

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 7071)

**Template parameters**:

* typename T

## Members

* [internalAddEntry](structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1true__type_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1true__type_00_01std_1_1false__type_01_4_1adf1c3141341cbba4753a8ed12800c18a)
* [internalSetProperty](structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1true__type_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1true__type_00_01std_1_1false__type_01_4_1a1e206b90ddd1db2708cd13c45fc38306)

## Public static functions

<a id="structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1true__type_00_01std_1_1false__type_01_4_1a1e206b90ddd1db2708cd13c45fc38306"></a>
### Function internalSetProperty

![][public]
![][static]

```cpp
static void ansys::dpf::internal::set_prop< T, std::true_type, std::false_type >::internalSetProperty(GenericDataContainer &gdc, const std::string &property_name, const T &property)
```

**Parameters**:

* GenericDataContainer & **gdc**
* const std::string & **property_name**
* const T & **property**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop< T, std::true_type, std::false_type >::internalSetProperty"}]}`
-->

<a id="structansys_1_1dpf_1_1internal_1_1set__prop_3_01T_00_01std_1_1true__type_00_01std_1_1false__type_01_4_1adf1c3141341cbba4753a8ed12800c18a"></a>
### Function internalAddEntry

![][public]
![][static]

```cpp
static void ansys::dpf::internal::set_prop< T, std::true_type, std::false_type >::internalAddEntry(Collection< T > &collection, LabelSpace const &labels, T const &f, bool can_replace)
```

**Parameters**:

* [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< T > & **collection**
* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **labels**
* T const & **f**
* bool **can_replace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop< T, std::true_type, std::false_type >::internalAddEntry"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)