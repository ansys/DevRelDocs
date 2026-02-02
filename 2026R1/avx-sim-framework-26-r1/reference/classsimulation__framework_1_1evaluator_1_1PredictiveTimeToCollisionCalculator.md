# Class simulation_framework::evaluator::PredictiveTimeToCollisionCalculator

![][C++]
![][public]

**Definition**: `autonomy/evaluator/predictive_ttc_calculator/predictive_ttc_calculator.h` (line 44)

class [PredictiveTimeToCollisionCalculator](classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator)

[PredictiveTimeToCollisionCalculator](classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator) class to calculate the time of Ego to collision with other traffic car based on osi GroundTruth Internal Variables: uint64_t predictive_ttc_precision_{100} : step in time space to estimate the collision between 2 objects uint64_t predictive_ttc_max_{20000}: maximum time span from current timestamp for collision evaluation. If the predictive_min_ttc value calculated is very large. We assume that the vehicle will never collide. In such cases, we have decided to use a considerably large value of time to collision as predictive_ttc_max_{20000} and mark it as a max value of predictive_min_ttc.





Algorithm explaination:
1. read Ego vehicle position and speed vectors, as well as its bounding box size from GroundTruth and compute the BoundingBox

2. loop through all existing objects within MovingObject list from GroundTruth and compute the BoundingBox.

3. check if there is any collision between ego vehicle and traffic objects 3.1 if so return 0 indicating that there is collision 3.2 if there is no collision in current frame, estimate if there will be a collision in near future (dt) under condition that 2 vehicles keeping their current speed vector. If so, return this std::chrono::milliseconds(dt) as predictive time to collision.

## Members

* [Calculate](classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator_1aeb6dab536ddc23eafec60a4dca7b066e)
* [predictive_ttc_max_](classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator_1a8470dab615a4276538dcb76ec677de5a)
* [predictive_ttc_precision_](classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator_1ab533c9a25f48054357c33ffe53a0f858)

## Public functions

<a id="classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator_1aeb6dab536ddc23eafec60a4dca7b066e"></a>
### Function Calculate

![][public]
![][const]


```cpp
std::chrono::milliseconds simulation_framework::evaluator::PredictiveTimeToCollisionCalculator::Calculate(const osi3::GroundTruth &ground_truth) const
```








**Parameters**:

* const osi3::GroundTruth & **ground_truth**

**Return type**: std::chrono::milliseconds

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::PredictiveTimeToCollisionCalculator::Calculate"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"predictive__ttc__calculator_8h"},"children":[{"type":"text","text":"predictive_ttc_calculator.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)