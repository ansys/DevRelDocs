# Class simulation_framework::evaluator::DistanceDrivenCalculator

![][C++]
![][public]

**Definition**: `autonomy/evaluator/distance_calculator/distance_calculator.h` (line 38)

class [DistanceDrivenCalculator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator)

[DistanceDrivenCalculator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator) class to calculate the total distance covered/driven by an Ego car based on osi GroundTruth Algorithm explaination:
1. Find out the Ego vehicle index within MovingObject list from GroundTruth and compute the BoundingBox

2. Get the position of Ego vehicle at each time interval/step.

3. Calculate the Eucledian distance between two positions of Ego vehicle(at given time stamp)

4. Make the sum of all the distances calculated(For each time step)

5. One of the possible validation method could be to calculate distance from Formulas based on the Average car Velocity and total travel Time. And compare the result with distance calculated using Euclidean method.

6. For now, we have added a few tests based on hard-coded values of position, which helps to confirm/validate the basic logic of distance driven calculation.

## Members

* [Calculate](classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator_1ab8226778bd055bda3a5b216f57289092)

## Public functions

<a id="classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator_1ab8226778bd055bda3a5b216f57289092"></a>
### Function Calculate

![][public]


```cpp
double simulation_framework::evaluator::DistanceDrivenCalculator::Calculate(const osi3::GroundTruth &ground_truth)
```








**Parameters**:

* const osi3::GroundTruth & **ground_truth**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::DistanceDrivenCalculator::Calculate"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"distance__calculator_8h"},"children":[{"type":"text","text":"distance_calculator.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)