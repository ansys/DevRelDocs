<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4"></a>
# Structure ansys::dpf::ConstructHelpers::construct\_trait\< DataT, std::true\_type \>

![][C++]
![][public]



specialized for all entities deriving from [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase).

**Template parameters**:

* typename DataT

## Members

* [createAny](structansys-dpf-constructhelpers-construct-trait-datat-std-true-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a7d933a66d2b30a654601ac7bc36e0a33)
* [getFromAny](structansys-dpf-constructhelpers-construct-trait-datat-std-true-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1ad75a177fd38a1673d3252e4b0db7eabb)
* [getOperatorInput](structansys-dpf-constructhelpers-construct-trait-datat-std-true-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a9a5ef83c02133a1ec977d26b4cd03664)
* [getOutputFromOperator](structansys-dpf-constructhelpers-construct-trait-datat-std-true-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a5ff1b9411067b57436689043782f766c)
* [getOutputFromWorkflow](structansys-dpf-constructhelpers-construct-trait-datat-std-true-type.md#structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a6c010654b0ee1c6a0eda5a77cee01ddd)

## Public static functions

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1ad75a177fd38a1673d3252e4b0db7eabb"></a>
### Function getFromAny

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getFromAny(Any const &any)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) const & **any**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getFromAny"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a7d933a66d2b30a654601ac7bc36e0a33"></a>
### Function createAny

![][public]
![][static]


```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::createAny(Any &any, DataT const &obj, Client const *const client)
```








**Parameters**:

* [Any](classansys-dpf-any.md#classansys-dpf-any) & **any**
* DataT const & **obj**
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::createAny"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a5ff1b9411067b57436689043782f766c"></a>
### Function getOutputFromOperator

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOutputFromOperator(Operator &op, dp_index pin_index)
```








**Parameters**:

* [Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **op**
* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOutputFromOperator"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a6c010654b0ee1c6a0eda5a77cee01ddd"></a>
### Function getOutputFromWorkflow

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOutputFromWorkflow(Workflow &wf, std::string const &pin_index)
```








**Parameters**:

* Workflow & **wf**
* std::string const & **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOutputFromWorkflow"}]}`
-->

<a id="structansys-dpf-constructhelpers-construct-trait-datat-std-true-type-4-1a9a5ef83c02133a1ec977d26b4cd03664"></a>
### Function getOperatorInput

![][public]
![][static]


```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOperatorInput(OperatorMain &op, dp_index pin_index)
```








**Parameters**:

* OperatorMain & **op**
* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOperatorInput"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)