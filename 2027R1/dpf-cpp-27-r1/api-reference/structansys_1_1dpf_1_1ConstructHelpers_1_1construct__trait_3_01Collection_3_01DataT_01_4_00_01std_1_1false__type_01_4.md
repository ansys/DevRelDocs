<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4"></a>
# Structure ansys::dpf::ConstructHelpers::construct\_trait\< Collection\< DataT \>, std::false\_type \>

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 7033)



specialized for all entities deriving from [CustomContainerBase](classansys_1_1dpf_1_1CustomContainerBase.md#classansys_1_1dpf_1_1CustomContainerBase).

**Template parameters**:

* typename DataT

## Members

* [createAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1af70236940ffcc6f7b98ca7051444c6e5)
* [getFromAny](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a5d62c8ad22a008e7e98ad4bbbd50572c)
* [getOperatorInput](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a339f506e62141aaa8380079d0bb0cc7a)
* [getOutputFromOperator](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a41e5393894361dfb199824e842aacc28)
* [getOutputFromWorkflow](structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4.md#structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a56474f00613ec02edd73545be62a1211)

## Public static functions

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a5d62c8ad22a008e7e98ad4bbbd50572c"></a>
### Function getFromAny

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getFromAny(Any const &any)
```








**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) const & **any**

**Return type**: [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getFromAny"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1af70236940ffcc6f7b98ca7051444c6e5"></a>
### Function createAny

![][public]
![][static]


```cpp
static void ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::createAny(Any &any, Collection< DataT > const &obj, Client const *const client)
```








**Parameters**:

* [Any](classansys_1_1dpf_1_1Any.md#classansys_1_1dpf_1_1Any) & **any**
* [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< DataT > const & **obj**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::createAny"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a41e5393894361dfb199824e842aacc28"></a>
### Function getOutputFromOperator

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromOperator(Operator &op, dp_index pin_index)
```








**Parameters**:

* [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **op**
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromOperator"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a56474f00613ec02edd73545be62a1211"></a>
### Function getOutputFromWorkflow

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromWorkflow(Workflow &wf, std::string const &pin_index)
```








**Parameters**:

* Workflow & **wf**
* std::string const & **pin_index**

**Return type**: [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOutputFromWorkflow"}]}`
-->

<a id="structansys_1_1dpf_1_1ConstructHelpers_1_1construct__trait_3_01Collection_3_01DataT_01_4_00_01std_1_1false__type_01_4_1a339f506e62141aaa8380079d0bb0cc7a"></a>
### Function getOperatorInput

![][public]
![][static]


```cpp
static Collection< DataT > ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOperatorInput(OperatorMain &op, dp_index pin_index)
```








**Parameters**:

* OperatorMain & **op**
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **pin_index**

**Return type**: [Collection](classansys_1_1dpf_1_1Collection.md#classansys_1_1dpf_1_1Collection)< DataT >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ConstructHelpers::construct_trait< Collection< DataT >, std::false_type >::getOperatorInput"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)