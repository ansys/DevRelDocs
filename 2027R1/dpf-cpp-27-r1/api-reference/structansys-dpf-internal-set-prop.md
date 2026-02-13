<a id="structansys_1_1dpf_1_1internal_1_1set__prop"></a>
# Structure ansys::dpf::internal::set\_prop

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 2711)





**Template parameters**:

* typename T
* typename isBaseOfDpfTypes = typename std::is_base_of<[DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes), T>::type 
* typename isBaseOfCustomContainerBase = typename std::is_base_of<[CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase), T>::type 

## Members

* [internalAddEntry](structansys_1_1dpf_1_1internal_1_1set__prop.md#structansys_1_1dpf_1_1internal_1_1set__prop_1a0c674593940be72e72528aaaf9cf5243)
* [internalSetProperty](structansys_1_1dpf_1_1internal_1_1set__prop.md#structansys_1_1dpf_1_1internal_1_1set__prop_1af74a2e86cec206896b0ddd37ad20c254)

## Public static functions

<a id="structansys_1_1dpf_1_1internal_1_1set__prop_1af74a2e86cec206896b0ddd37ad20c254"></a>
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

<a id="structansys_1_1dpf_1_1internal_1_1set__prop_1a0c674593940be72e72528aaaf9cf5243"></a>
### Function internalAddEntry

![][public]
![][static]


```cpp
void ansys::dpf::internal::set_prop< T, isBaseOfDpfTypes, isBaseOfCustomContainerBase >::internalAddEntry(Collection< T > &collection, LabelSpace const &labels, T const &f, bool can_replace)
```








**Parameters**:

* [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< T > & **collection**
* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **labels**
* T const & **f**
* bool **can_replace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::internal::set_prop::internalAddEntry"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)