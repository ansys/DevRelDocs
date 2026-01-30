# Class simulation_framework::evaluator::DistanceDrivenEvaluator

![][C++]
![][public]

**Definition**: `autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h` (line 29)

class [DistanceDrivenEvaluator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator)

Definition of [DistanceDrivenEvaluator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator) class to To fulfill this we want to implement a KPI evaluator that aggregates the distance driven by the ego vehicle over the course of the simulation.

**Inherits from**:

* [simulation_framework::core::kpi::IKpi\< osi3::GroundTruth \>](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)

## Members

* [CalculateKpi](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a84b5bd6ae0f4af77a17363b20ed5b086)
* [distance_calculator_](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a7ebc00139a927cc1f94eebaa75a96a8f)
* [DistanceDrivenEvaluator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a73f1fbf32fa117be135700df7bd9bf80)
* [driven_dist_](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a656af3eabf2c13d54d4bcf4cd8904c93)
* [GetKpiType](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1acc4088bba0acb50e544228f3ed1fa35a)
* [Init](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1abfe81ec22fdea705cf8ed83d51f2f3eb)
* [kpi_content_](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1ade7cc0ec061e066b6ac081c2ff7c101c)
* [kpi_name_](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a84bdd2b207cccb4ac4ff3d9da4a9d515)
* [Reset](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a0ae35bde229b1db909a6331e8062d3ac)
* [~DistanceDrivenEvaluator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1ae4f36d8b8680c725648fee833bb1f501)
* [~IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ab56f1f4f0afe45f82e9c591df22d1377)

## Private attributes

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a656af3eabf2c13d54d4bcf4cd8904c93"></a>
### Variable driven_dist_

![][private]

**Definition**: `autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h` (line 41)


```cpp
double simulation_framework::evaluator::DistanceDrivenEvaluator::driven_dist_
```








**Type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::driven_dist_"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a84bdd2b207cccb4ac4ff3d9da4a9d515"></a>
### Variable kpi_name_

![][private]

**Definition**: `autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h` (line 42)


```cpp
std::string simulation_framework::evaluator::DistanceDrivenEvaluator::kpi_name_
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::kpi_name_"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1ade7cc0ec061e066b6ac081c2ff7c101c"></a>
### Variable kpi_content_

![][private]

**Definition**: `autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h` (line 43)


```cpp
core::kpi::KpiContent simulation_framework::evaluator::DistanceDrivenEvaluator::kpi_content_ {}
```








**Type**: [core::kpi::KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::kpi_content_"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a7ebc00139a927cc1f94eebaa75a96a8f"></a>
### Variable distance_calculator_

![][private]

**Definition**: `autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h` (line 44)


```cpp
DistanceDrivenCalculator simulation_framework::evaluator::DistanceDrivenEvaluator::distance_calculator_ {}
```








**Type**: [DistanceDrivenCalculator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::distance_calculator_"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a73f1fbf32fa117be135700df7bd9bf80"></a>
### Function DistanceDrivenEvaluator

![][public]


```cpp
simulation_framework::evaluator::DistanceDrivenEvaluator::DistanceDrivenEvaluator(const std::string &kpi_name="driven_dist")
```








**Parameters**:

* const std::string & **kpi_name** = "driven_dist" 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::DistanceDrivenEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1ae4f36d8b8680c725648fee833bb1f501"></a>
### Function ~DistanceDrivenEvaluator

![][public]


```cpp
simulation_framework::evaluator::DistanceDrivenEvaluator::~DistanceDrivenEvaluator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::~DistanceDrivenEvaluator"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1abfe81ec22fdea705cf8ed83d51f2f3eb"></a>
### Function Init

![][public]


```cpp
void simulation_framework::evaluator::DistanceDrivenEvaluator::Init() override
```


Initializes the KPI logic.

Sets up any necessary state or resources required for KPI calculation.



**Return type**: void

**Reimplements**: [Init](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1affa38e79e2d2fe57ac913fa736437fae)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::Init"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a0ae35bde229b1db909a6331e8062d3ac"></a>
### Function Reset

![][public]


```cpp
void simulation_framework::evaluator::DistanceDrivenEvaluator::Reset() override
```


Resets the KPI logic.

Clears temporary data and prepares the KPI logic for a new calculation, especially if the simulation needs to be restarted.



**Return type**: void

**Reimplements**: [Reset](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi_1ad08cdb1d1091c84920a9733a81c752a5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::Reset"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1a84b5bd6ae0f4af77a17363b20ed5b086"></a>
### Function CalculateKpi

![][public]


```cpp
core::kpi::KpiContent simulation_framework::evaluator::DistanceDrivenEvaluator::CalculateKpi(const osi3::GroundTruth &ground_truth) override
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::CalculateKpi"}]}`
-->

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenEvaluator_1acc4088bba0acb50e544228f3ed1fa35a"></a>
### Function GetKpiType

![][public]
![][const]


```cpp
core::kpi::Type simulation_framework::evaluator::DistanceDrivenEvaluator::GetKpiType() const override
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenEvaluator::GetKpiType"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"distance__driven__evaluator_8h"},"children":[{"type":"text","text":"distance_driven_evaluator.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)