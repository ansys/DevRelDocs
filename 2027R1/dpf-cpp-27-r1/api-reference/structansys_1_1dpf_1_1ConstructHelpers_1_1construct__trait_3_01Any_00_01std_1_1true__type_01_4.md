<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Any_00_01std_1_1true__type_01_4"></a>
# Structure ansys::dpf::ConstructHelpers::construct\_trait\< Any, std::true\_type \>

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 7044)



specialized for [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) as it takes a GenericDataContainer in a constructor but isn't deriving from [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase).



## Members

* [createAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Any_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Any_00_01std_1_1true__type_01_4_1a36eee1b1c96ffd7764e7e343f7c8d135)
* [getFromAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Any_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Any_00_01std_1_1true__type_01_4_1ac1834b3f597127608805227626b3cde7)

## Public static functions

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Any_00_01std_1_1true__type_01_4_1ac1834b3f597127608805227626b3cde7"></a>
### Function getFromAny

![][public]
![][static]


```cpp
static Any ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::getFromAny(Any const &any)
```








**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) const & **any**

**Return type**: [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::getFromAny"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Any_00_01std_1_1true__type_01_4_1a36eee1b1c96ffd7764e7e343f7c8d135"></a>
### Function createAny

![][public]
![][static]


```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::createAny(Any &any, Any const &obj, Client const *const)
```








**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) & **any**
* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) const & **obj**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const * const

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::createAny"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)