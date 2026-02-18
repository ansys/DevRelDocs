# Structure ansys::dpf::ConstructHelpers::construct\_trait\< DataT, std::false\_type \>

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4"></a>

![][C++]
![][public]



specialized for all entities not deriving from [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase).

**Template parameters**:

* typename DataT

## Members

* [createAny](structansys-dpf-constructhelpers-construct-trait-datat-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a883546799a9ae38062cf12f1c9df946d)
* [getFromAny](structansys-dpf-constructhelpers-construct-trait-datat-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a9cc7d7c65cb2f41c7c826dbb01ee2d05)
* [getOperatorInput](structansys-dpf-constructhelpers-construct-trait-datat-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a9eb79b0b5db85ead9ec358aa878c4203)
* [getOutputFromOperator](structansys-dpf-constructhelpers-construct-trait-datat-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a506ad6d1994cc22b40c83ee9b77fdebc)
* [getOutputFromWorkflow](structansys-dpf-constructhelpers-construct-trait-datat-std-false-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1aeb56b19f98e5ebeb8297a71ac863fc60)

## Public static functions

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a9cc7d7c65cb2f41c7c826dbb01ee2d05"></a>
### Function getFromAny

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getFromAny(Any const &any)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) const & **any**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getFromAny"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a883546799a9ae38062cf12f1c9df946d"></a>
### Function createAny

![][public]
![][static]


```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::createAny(Any &any, DataT const &obj, Client const *const client)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) & **any**
* DataT const & **obj**
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::createAny"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a506ad6d1994cc22b40c83ee9b77fdebc"></a>
### Function getOutputFromOperator

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromOperator(Operator &op, dp_index pin_index)
```








**Parameters**:

* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **op**
* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromOperator"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1aeb56b19f98e5ebeb8297a71ac863fc60"></a>
### Function getOutputFromWorkflow

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromWorkflow(Workflow &wf, std::string const &pin_index)
```








**Parameters**:

* Workflow & **wf**
* std::string const & **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOutputFromWorkflow"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-false-type-4-1a9eb79b0b5db85ead9ec358aa878c4203"></a>
### Function getOperatorInput

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOperatorInput(OperatorMain &op, dp_index pin_index)
```








**Parameters**:

* OperatorMain & **op**
* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::false_type >::getOperatorInput"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)