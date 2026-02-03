# Class simulation_framework::evaluator::MinTtcEvaluator

![][C++]
![][public]

**Definition**: `autonomy/evaluator/min_ttc_evaluator/min_ttc_evaluator.h` (line 32)

class [MinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator)

Definition of [MinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator) class to calculate the minimum time to collision. This will store the lowest value of TTC being observed during one simulation run.

**Inherits from**:

* [simulation_framework::core::kpi::IKpi\< osi3::GroundTruth \>](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)

## Members

* [CalculateKpi](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1aec1741a5c8b655182c090b2bafdafb12)
* [GetKpiType](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1af021217919c4e7498c6247dd46947e2c)
* [Init](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1a1c317953b082649c8134c3c79cec5160)
* [MinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1a5a35e9df18a09910460479a7bfdadf7e)
* [Reset](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1aff4c106aeed6de6bb55d3e5c4680e04a)
* [~IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ab56f1f4f0afe45f82e9c591df22d1377)
* [~MinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1afdb0fa3d5dc75f71132a46cba5bcf912)

## Public functions

<a id="classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1a5a35e9df18a09910460479a7bfdadf7e"></a>
### Function MinTtcEvaluator

![][public]


```cpp
simulation_framework::evaluator::MinTtcEvaluator::MinTtcEvaluator(const std::string &kpi_name="min_ttc")
```








**Parameters**:

* const std::string & **kpi_name** = "min_ttc" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::MinTtcEvaluator::MinTtcEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1afdb0fa3d5dc75f71132a46cba5bcf912"></a>
### Function ~MinTtcEvaluator

![][public]


```cpp
simulation_framework::evaluator::MinTtcEvaluator::~MinTtcEvaluator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::MinTtcEvaluator::~MinTtcEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1a1c317953b082649c8134c3c79cec5160"></a>
### Function Init

![][public]


```cpp
void simulation_framework::evaluator::MinTtcEvaluator::Init() override
```


Initializes the KPI logic.

Sets up any necessary state or resources required for KPI calculation.



**Return type**: void

**Reimplements**: [Init](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1affa38e79e2d2fe57ac913fa736437fae)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::MinTtcEvaluator::Init"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1aff4c106aeed6de6bb55d3e5c4680e04a"></a>
### Function Reset

![][public]


```cpp
void simulation_framework::evaluator::MinTtcEvaluator::Reset() override
```


Resets the KPI logic.

Clears temporary data and prepares the KPI logic for a new calculation, especially if the simulation needs to be restarted.



**Return type**: void

**Reimplements**: [Reset](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ad08cdb1d1091c84920a9733a81c752a5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::MinTtcEvaluator::Reset"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1aec1741a5c8b655182c090b2bafdafb12"></a>
### Function CalculateKpi

![][public]


```cpp
core::kpi::KpiContent simulation_framework::evaluator::MinTtcEvaluator::CalculateKpi(const osi3::GroundTruth &ground_truth) override
```


Executes the core KPI calculation logic.

**Parameters**:

* **input**: The input data required for KPI calculation.


**Returns**:

The calculated KPI content as a <code>KpiContent</code> object.



**Parameters**:

* const osi3::GroundTruth & **input**

**Return type**: [core::kpi::KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent)

**Reimplements**: [CalculateKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1a614cb6051405e8865257360eefff9ab6)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::MinTtcEvaluator::CalculateKpi"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator_1af021217919c4e7498c6247dd46947e2c"></a>
### Function GetKpiType

![][public]
![][const]


```cpp
core::kpi::Type simulation_framework::evaluator::MinTtcEvaluator::GetKpiType() const override
```


Retrieves the KPI type.

Indicates the type of KPI, which can be one of the following:
* <code>kpi::Type::kScalar</code>: A scalar value with a unit.

* <code>kpi::Type::kTimeSeries</code>: A time series representation.

* <code>kpi::Type::kLog</code>: A continuous log. 

**Returns**:

The type of the KPI as a <code>kpi::Type</code> enum value.



**Return type**: core::kpi::Type

**Reimplements**: [GetKpiType](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1aeef163c532f5b7b03e685642cb75ccaa)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::MinTtcEvaluator::GetKpiType"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"min__ttc__evaluator_8h"},"children":[{"type":"text","text":"min_ttc_evaluator.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)