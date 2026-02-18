# Structure ansys::dpf::internal::set\_prop\< T, std::false\_type, std::true\_type \>

<a id="structansys-dpf-internal-set-prop-t-std-false-type-std-true-type-4"></a>

![][C++]
![][public]





**Template parameters**:

* typename T

## Members

* [internalAddEntry](structansys-dpf-internal-set-prop-t-std-false-type-std-true-type.md#structansys-dpf-internal-set-prop-t-std-false-type-std-true-type-4-1ab86cc33d493f42556d6698cff04c3591)
* [internalSetProperty](structansys-dpf-internal-set-prop-t-std-false-type-std-true-type.md#structansys-dpf-internal-set-prop-t-std-false-type-std-true-type-4-1a35f90cccef71e63923a17d93d5fb6ea8)

## Public static functions

<a id="structansys-dpf-internal-set-prop-t-std-false-type-std-true-type-4-1a35f90cccef71e63923a17d93d5fb6ea8"></a>
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

<a id="structansys-dpf-internal-set-prop-t-std-false-type-std-true-type-4-1ab86cc33d493f42556d6698cff04c3591"></a>
### Function internalAddEntry

![][public]
![][static]


```cpp
static void ansys::dpf::internal::set_prop< T, std::false_type, std::true_type >::internalAddEntry(Collection< T > &collection, LabelSpace const &labels, T const &f, bool can_replace)
```








**Parameters**:

* [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< T > & **collection**
* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **labels**
* T const & **f**
* bool **can_replace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop< T, std::false_type, std::true_type >::internalAddEntry"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)