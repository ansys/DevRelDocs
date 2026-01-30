# Class simulation_framework::core::kpi::IKpi

![][C++]
![][public]

**Definition**: `core/kpi/i_kpi/i_kpi.h` (line 38)

Represents core KPI calculation logic.

The <code>[IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)</code> template class defines the interface for calculating a Key Performance Indicator (KPI) based on a specific input type. It includes initialization, reset, and calculation methods for KPI evaluators. Example KPIs include Time to Collision (TTC) or Maximum Acceleration. 
`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"T"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The type of input data used for KPI calculations. "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`




**See also**: [KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent), kpi::Type

**Template parameters**:

* [typename](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

## Members

* [CalculateKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1a614cb6051405e8865257360eefff9ab6)
* [GetKpiType](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1aeef163c532f5b7b03e685642cb75ccaa)
* [Init](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1affa38e79e2d2fe57ac913fa736437fae)
* [Reset](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ad08cdb1d1091c84920a9733a81c752a5)
* [~IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ab56f1f4f0afe45f82e9c591df22d1377)

## Public functions

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ab56f1f4f0afe45f82e9c591df22d1377"></a>
### Function ~IKpi

![][public]


```cpp
virtual simulation_framework::core::kpi::IKpi< T >::~IKpi()=default
```


Virtual destructor for proper cleanup of derived classes.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpi::~IKpi"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1affa38e79e2d2fe57ac913fa736437fae"></a>
### Function Init

![][public]


```cpp
virtual void simulation_framework::core::kpi::IKpi< T >::Init()=0
```


Initializes the KPI logic.

Sets up any necessary state or resources required for KPI calculation.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Init](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1abfe81ec22fdea705cf8ed83d51f2f3eb)
* [Init](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1a1c317953b082649c8134c3c79cec5160)
* [Init](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1aad25aefd4cb26ff9697c441d39de2deb)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpi::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ad08cdb1d1091c84920a9733a81c752a5"></a>
### Function Reset

![][public]


```cpp
virtual void simulation_framework::core::kpi::IKpi< T >::Reset()=0
```


Resets the KPI logic.

Clears temporary data and prepares the KPI logic for a new calculation, especially if the simulation needs to be restarted.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Reset](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a0ae35bde229b1db909a6331e8062d3ac)
* [Reset](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1aff4c106aeed6de6bb55d3e5c4680e04a)
* [Reset](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1a8f78acf7646d8476fdbbdc931fbc3ffe)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpi::Reset"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1a614cb6051405e8865257360eefff9ab6"></a>
### Function CalculateKpi

![][public]


```cpp
virtual KpiContent simulation_framework::core::kpi::IKpi< T >::CalculateKpi(const T &input)=0
```


Executes the core KPI calculation logic.

**Parameters**:

* **input**: The input data required for KPI calculation.


**Returns**:

The calculated KPI content as a <code>[KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent)</code> object.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **input**

**Return type**: [KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent)

**Reimplemented by**:

* [CalculateKpi](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a84b5bd6ae0f4af77a17363b20ed5b086)
* [CalculateKpi](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1aec1741a5c8b655182c090b2bafdafb12)
* [CalculateKpi](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1a8778dbbad77b21dec72930729a8f52a7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpi::CalculateKpi"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1aeef163c532f5b7b03e685642cb75ccaa"></a>
### Function GetKpiType

![][public]
![][const]


```cpp
virtual kpi::Type simulation_framework::core::kpi::IKpi< T >::GetKpiType() const =0
```


Retrieves the KPI type.

Indicates the type of KPI, which can be one of the following:
* <code>kpi::Type::kScalar</code>: A scalar value with a unit.

* <code>kpi::Type::kTimeSeries</code>: A time series representation.

* <code>kpi::Type::kLog</code>: A continuous log. 
**Returns**:

The type of the KPI as a <code>kpi::Type</code> enum value.



**Return type**: kpi::Type

**Reimplemented by**:

* [GetKpiType](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1acc4088bba0acb50e544228f3ed1fa35a)
* [GetKpiType](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1af021217919c4e7498c6247dd46947e2c)
* [GetKpiType](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1afa04796b1e66b16c1f33ee011530cb90)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpi::GetKpiType"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__kpi_8h"},"children":[{"type":"text","text":"i_kpi.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)