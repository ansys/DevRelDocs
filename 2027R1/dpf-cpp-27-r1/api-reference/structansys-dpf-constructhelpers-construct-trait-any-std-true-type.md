# Structure ansys::dpf::ConstructHelpers::construct\_trait\< Any, std::true\_type \>

<a id="structansys-dpf-constructhelpers-construct-trait-any-std-true-type-4"></a>

![][C++]
![][public]



specialized for [Any](classansys-dpf-any.md#classansys-dpf-any) as it takes a GenericDataContainer in a constructor but isn't deriving from [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase).



## Members

* [createAny](structansys-dpf-constructhelpers-construct-trait-any-std-true-type.md#structansys-dpf-constructhelpers-construct-trait-any-std-true-type-4-1a36eee1b1c96ffd7764e7e343f7c8d135)
* [getFromAny](structansys-dpf-constructhelpers-construct-trait-any-std-true-type.md#structansys-dpf-constructhelpers-construct-trait-any-std-true-type-4-1ac1834b3f597127608805227626b3cde7)

## Public static functions

<a id="structansys-dpf-constructhelpers-construct-trait-any-std-true-type-4-1ac1834b3f597127608805227626b3cde7"></a>
### Function getFromAny

![][public]
![][static]


```cpp
static Any ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::getFromAny(Any const &any)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) const & **any**

**Return type**: [Any](classansys-dpf-any.md#classansys-dpf-any)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::getFromAny"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-any-std-true-type-4-1a36eee1b1c96ffd7764e7e343f7c8d135"></a>
### Function createAny

![][public]
![][static]


```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::createAny(Any &any, Any const &obj, Client const *const)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) & **any**
* [Any](classansys-dpf-any.md#classansys-dpf-any) const & **obj**
* [Client](classansys-dpf-client.md#classansys-dpf-client) const * const

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Any, std::true_type >::createAny"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)