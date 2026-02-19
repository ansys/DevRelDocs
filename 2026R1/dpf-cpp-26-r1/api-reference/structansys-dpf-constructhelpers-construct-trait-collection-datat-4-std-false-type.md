# Structure ansys::dpf::ConstructHelpers::construct_trait\< Collection\< DataT \>, std::false_type \>

<a id="structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4"></a>

![][C++]
![][public]



specialized for all entities deriving from [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase).

**Template parameters**:

* typename DataT

## Members

* [createAny](structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1af70236940ffcc6f7b98ca7051444c6e5)
* [getFromAny](structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a5d62c8ad22a008e7e98ad4bbbd50572c)
* [getOperatorInput](structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a339f506e62141aaa8380079d0bb0cc7a)
* [getOutputFromOperator](structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a41e5393894361dfb199824e842aacc28)
* [getOutputFromWorkflow](structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a56474f00613ec02edd73545be62a1211)

## Public static functions

<a id="structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a5d62c8ad22a008e7e98ad4bbbd50572c"></a>
### Function getFromAny

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getFromAny(Any const &any)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) const & **any**

**Return type**: [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getFromAny"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1af70236940ffcc6f7b98ca7051444c6e5"></a>
### Function createAny

![][public]
![][static]


```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::createAny(Any &any, Collection< DataT > const &obj, Client const *const client)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) & **any**
* [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< DataT > const & **obj**
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::createAny"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a41e5393894361dfb199824e842aacc28"></a>
### Function getOutputFromOperator

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromOperator(Operator &op, dp_index pin_index)
```








**Parameters**:

* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **op**
* [dp_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromOperator"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a56474f00613ec02edd73545be62a1211"></a>
### Function getOutputFromWorkflow

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromWorkflow(Workflow &wf, std::string const &pin_index)
```








**Parameters**:

* Workflow & **wf**
* std::string const & **pin_index**

**Return type**: [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromWorkflow"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-collection-datat-4-std-false-type-4-1a339f506e62141aaa8380079d0bb0cc7a"></a>
### Function getOperatorInput

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOperatorInput(OperatorMain &op, dp_index pin_index)
```








**Parameters**:

* OperatorMain & **op**
* [dp_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: [Collection](classansys-dpf-collection.md#classansys-dpf-collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOperatorInput"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)