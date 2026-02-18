# Structure ansys::dpf::internal::set\_prop\< T, std::true\_type, std::false\_type \>

<a id="structansys-dpf-internal-set-prop-t-std-true-type-std-false-type-4"></a>

![][C++]
![][public]





**Template parameters**:

* typename T

## Members

* [internalAddEntry](structansys-dpf-internal-set-prop-t-std-true-type-std-false-type.md#structansys-dpf-internal-set-prop-t-std-true-type-std-false-type-4-1adf1c3141341cbba4753a8ed12800c18a)
* [internalSetProperty](structansys-dpf-internal-set-prop-t-std-true-type-std-false-type.md#structansys-dpf-internal-set-prop-t-std-true-type-std-false-type-4-1a1e206b90ddd1db2708cd13c45fc38306)

## Public static functions

<a id="structansys-dpf-internal-set-prop-t-std-true-type-std-false-type-4-1a1e206b90ddd1db2708cd13c45fc38306"></a>
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

<a id="structansys-dpf-internal-set-prop-t-std-true-type-std-false-type-4-1adf1c3141341cbba4753a8ed12800c18a"></a>
### Function internalAddEntry

![][public]
![][static]


```cpp
static void ansys::dpf::internal::set_prop< T, std::true_type, std::false_type >::internalAddEntry(Collection< T > &collection, LabelSpace const &labels, T const &f, bool can_replace)
```








**Parameters**:

* [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< T > & **collection**
* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **labels**
* T const & **f**
* bool **can_replace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop< T, std::true_type, std::false_type >::internalAddEntry"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)