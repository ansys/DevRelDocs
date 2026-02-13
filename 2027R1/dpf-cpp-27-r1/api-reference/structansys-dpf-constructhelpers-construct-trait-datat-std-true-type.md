<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4"></a>
# Structure ansys::dpf::ConstructHelpers::construct\_trait\< DataT, std::true\_type \>

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 7013)

specialized for all entities deriving from [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase).

**Template parameters**:

* typename DataT

## Members

* [createAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a7d933a66d2b30a654601ac7bc36e0a33)
* [getFromAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1ad75a177fd38a1673d3252e4b0db7eabb)
* [getOperatorInput](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a9a5ef83c02133a1ec977d26b4cd03664)
* [getOutputFromOperator](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a5ff1b9411067b57436689043782f766c)
* [getOutputFromWorkflow](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a6c010654b0ee1c6a0eda5a77cee01ddd)

## Public static functions

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1ad75a177fd38a1673d3252e4b0db7eabb"></a>
### Function getFromAny

![][public]
![][static]

```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getFromAny(Any const &any)
```

**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) const & **any**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getFromAny"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a7d933a66d2b30a654601ac7bc36e0a33"></a>
### Function createAny

![][public]
![][static]

```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::createAny(Any &any, DataT const &obj, Client const *const client)
```

**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) & **any**
* DataT const & **obj**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::createAny"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a5ff1b9411067b57436689043782f766c"></a>
### Function getOutputFromOperator

![][public]
![][static]

```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOutputFromOperator(Operator &op, dp_index pin_index)
```

**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOutputFromOperator"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a6c010654b0ee1c6a0eda5a77cee01ddd"></a>
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

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01DataT_00_01std_1_1true__type_01_4_1a9a5ef83c02133a1ec977d26b4cd03664"></a>
### Function getOperatorInput

![][public]
![][static]

```cpp
static DataT ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOperatorInput(OperatorMain &op, dp_index pin_index)
```

**Parameters**:

* OperatorMain & **op**
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: DataT

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< DataT, std::true_type >::getOperatorInput"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)