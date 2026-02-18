# Structure ansys::dpf::internal::set\_prop

<a id="structansys-dpf-internal-set-prop"></a>

![][C++]
![][public]





**Template parameters**:

* typename T
* typename isBaseOfDpfTypes = typename std::is_base_of<[DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes), T>::type 
* typename isBaseOfCustomContainerBase = typename std::is_base_of<[CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase), T>::type 

## Members

* [internalAddEntry](structansys-dpf-internal-set-prop.md#structansys-dpf-internal-set-prop-1a0c674593940be72e72528aaaf9cf5243)
* [internalSetProperty](structansys-dpf-internal-set-prop.md#structansys-dpf-internal-set-prop-1af74a2e86cec206896b0ddd37ad20c254)

## Public static functions

<a id="structansys-dpf-internal-set-prop-1af74a2e86cec206896b0ddd37ad20c254"></a>
### Function internalSetProperty

![][public]
![][static]


```cpp
void ansys::dpf::internal::set_prop< T, isBaseOfDpfTypes, isBaseOfCustomContainerBase >::internalSetProperty(GenericDataContainer &gdc, const std::string &property_name, const T &property)
```








**Parameters**:

* GenericDataContainer & **gdc**
* const std::string & **property_name**
* const T & **property**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop::internalSetProperty"}]}`
-->

<a id="structansys-dpf-internal-set-prop-1a0c674593940be72e72528aaaf9cf5243"></a>
### Function internalAddEntry

![][public]
![][static]


```cpp
void ansys::dpf::internal::set_prop< T, isBaseOfDpfTypes, isBaseOfCustomContainerBase >::internalAddEntry(Collection< T > &collection, LabelSpace const &labels, T const &f, bool can_replace)
```








**Parameters**:

* [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< T > & **collection**
* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **labels**
* T const & **f**
* bool **can_replace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop::internalAddEntry"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)