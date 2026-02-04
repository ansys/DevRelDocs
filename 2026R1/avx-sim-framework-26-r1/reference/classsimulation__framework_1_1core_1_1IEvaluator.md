# Class simulation_framework::core::IEvaluator

![][C++]
![][public]

**Definition**: `core/kpi/i_evaluator/i_evaluator.h` (line 22)

class [IEvaluator](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator)

Interface definition for evaluator where user can add KPIs and do evaluations in a chain based on input message type

**Template parameters**:

* [typename](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

## Members

* [AddKpi](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a382b22c39881af2b0397df0caee82063)
* [Evaluate](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a251fb9feee11d29b6c4bd5161a7b7089)
* [GetKpiMessage](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a81ab03795b81308e647d4f7022a64d4a)
* [Init](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1ac62458dfff2bf4a0287bc48335bec4ff)
* [Reset](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a4f2140b6e5dc9289d084c601c1f28cf2)
* [SetInput](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a17db67a251425e3ecc47d45c03a1b056)
* [~IEvaluator](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator_1a605a97c7c7aef7588ff1ce0957d97f79)

## Public functions

<a id="classsimulation__framework_1_1core_1_1IEvaluator_1a605a97c7c7aef7588ff1ce0957d97f79"></a>
### Function ~IEvaluator

![][public]


```cpp
virtual simulation_framework::core::IEvaluator< T >::~IEvaluator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IEvaluator::~IEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IEvaluator_1ac62458dfff2bf4a0287bc48335bec4ff"></a>
### Function Init

![][public]


```cpp
virtual void simulation_framework::core::IEvaluator< T >::Init()=0
```




Implement any initialization related logic happens here



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Init](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a930cb234264aa995b30eab8c537a15ad)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IEvaluator::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IEvaluator_1a4f2140b6e5dc9289d084c601c1f28cf2"></a>
### Function Reset

![][public]


```cpp
virtual void simulation_framework::core::IEvaluator< T >::Reset()=0
```




Implement any logic to reset your KPI calculations



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Reset](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1acacfb885fab2f83b114e870fa9433f3d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IEvaluator::Reset"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IEvaluator_1a251fb9feee11d29b6c4bd5161a7b7089"></a>
### Function Evaluate

![][public]


```cpp
virtual void simulation_framework::core::IEvaluator< T >::Evaluate()=0
```




Do calculation of all KPIs



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Evaluate](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a09b8959aaaacce2b842abfd304b63674)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IEvaluator::Evaluate"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IEvaluator_1a382b22c39881af2b0397df0caee82063"></a>
### Function AddKpi

![][public]


```cpp
virtual void simulation_framework::core::IEvaluator< T >::AddKpi(std::unique_ptr< kpi::IKpi< T > > kpi)=0
```








**Parameters**:

* std::unique_ptr< [kpi::IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)< [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > > **kpi**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IEvaluator::AddKpi"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IEvaluator_1a81ab03795b81308e647d4f7022a64d4a"></a>
### Function GetKpiMessage

![][public]
![][const]


```cpp
virtual core::kpi::KpiMessage simulation_framework::core::IEvaluator< T >::GetKpiMessage() const =0
```




Get the filled KPI messages based on calculation of all KPIs 

**Returns**:

A kpi::KpiMessage object, the vector of KpiContent represents of all added KPIs into this evaluator



**Return type**: core::kpi::KpiMessage

**Reimplemented by**:

* [GetKpiMessage](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1a2e37677f4b8884d78f028589c6adac48)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IEvaluator::GetKpiMessage"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IEvaluator_1a17db67a251425e3ecc47d45c03a1b056"></a>
### Function SetInput

![][public]


```cpp
virtual void simulation_framework::core::IEvaluator< T >::SetInput(const T &input)=0
```




Set input message for KPI calculations 

**Parameters**:

* **input**: The generic input for the evaluator to base the KPI calculations on



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **input**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetInput](classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator.md#classsimulation__framework_1_1evaluator_1_1GtBaseEvaluator_1adc68080d44c2f5a294dbb511fe7d1c77)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IEvaluator::SetInput"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__evaluator_8h"},"children":[{"type":"text","text":"i_evaluator.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)