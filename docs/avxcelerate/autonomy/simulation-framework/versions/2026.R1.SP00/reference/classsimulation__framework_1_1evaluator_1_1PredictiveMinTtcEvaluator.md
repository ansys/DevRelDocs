# Class simulation_framework::evaluator::PredictiveMinTtcEvaluator

![][C++]
![][public]

**Definition**: `autonomy/evaluator/predictive_min_ttc_evaluator/predictive_min_ttc_evaluator.h` (line 30)

class [PredictiveMinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator)

Definition of [PredictiveMinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator) class to calculate the minimum time to collision. This will store the lowest value of TTC being observed during one simulation run.

**Inherits from**:

* [simulation_framework::core::kpi::IKpi\< osi3::GroundTruth \>](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)

## Members

* [CalculateKpi](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1a8778dbbad77b21dec72930729a8f52a7)
* [GetKpiType](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1afa04796b1e66b16c1f33ee011530cb90)
* [Init](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1aad25aefd4cb26ff9697c441d39de2deb)
* [PredictiveMinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1ad053b6beae6e2c424e89c268bc4c8941)
* [Reset](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1a8f78acf7646d8476fdbbdc931fbc3ffe)
* [~IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ab56f1f4f0afe45f82e9c591df22d1377)
* [~PredictiveMinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1af2cfc869b789faf7d46a1ddacf96747d)

## Public functions

<a id="classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1ad053b6beae6e2c424e89c268bc4c8941"></a>
### Function PredictiveMinTtcEvaluator

![][public]


```cpp
simulation_framework::evaluator::PredictiveMinTtcEvaluator::PredictiveMinTtcEvaluator(const std::string &kpi_name="predictive_min_ttc")
```








**Parameters**:

* const std::string & **kpi_name** = "predictive_min_ttc" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::PredictiveMinTtcEvaluator::PredictiveMinTtcEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1af2cfc869b789faf7d46a1ddacf96747d"></a>
### Function ~PredictiveMinTtcEvaluator

![][public]


```cpp
simulation_framework::evaluator::PredictiveMinTtcEvaluator::~PredictiveMinTtcEvaluator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::PredictiveMinTtcEvaluator::~PredictiveMinTtcEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1aad25aefd4cb26ff9697c441d39de2deb"></a>
### Function Init

![][public]


```cpp
void simulation_framework::evaluator::PredictiveMinTtcEvaluator::Init() override
```


Initializes the KPI logic.

Sets up any necessary state or resources required for KPI calculation.



**Return type**: void

**Reimplements**: [Init](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1affa38e79e2d2fe57ac913fa736437fae)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::PredictiveMinTtcEvaluator::Init"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1a8f78acf7646d8476fdbbdc931fbc3ffe"></a>
### Function Reset

![][public]


```cpp
void simulation_framework::evaluator::PredictiveMinTtcEvaluator::Reset() override
```


Resets the KPI logic.

Clears temporary data and prepares the KPI logic for a new calculation, especially if the simulation needs to be restarted.



**Return type**: void

**Reimplements**: [Reset](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ad08cdb1d1091c84920a9733a81c752a5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::PredictiveMinTtcEvaluator::Reset"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1a8778dbbad77b21dec72930729a8f52a7"></a>
### Function CalculateKpi

![][public]


```cpp
core::kpi::KpiContent simulation_framework::evaluator::PredictiveMinTtcEvaluator::CalculateKpi(const osi3::GroundTruth &ground_truth) override
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::PredictiveMinTtcEvaluator::CalculateKpi"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator_1afa04796b1e66b16c1f33ee011530cb90"></a>
### Function GetKpiType

![][public]
![][const]


```cpp
core::kpi::Type simulation_framework::evaluator::PredictiveMinTtcEvaluator::GetKpiType() const override
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::PredictiveMinTtcEvaluator::GetKpiType"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"predictive__min__ttc__evaluator_8h"},"children":[{"type":"text","text":"predictive_min_ttc_evaluator.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)