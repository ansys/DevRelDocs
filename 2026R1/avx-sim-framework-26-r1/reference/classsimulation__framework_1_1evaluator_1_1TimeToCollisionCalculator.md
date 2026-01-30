# Class simulation_framework::evaluator::TimeToCollisionCalculator

![][C++]
![][public]

**Definition**: `autonomy/evaluator/ttc_calculator/ttc_calculator.h` (line 41)

class [TimeToCollisionCalculator](classsimulation__framework_1_1evaluator_1_1TimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1TimeToCollisionCalculator)

[TimeToCollisionCalculator](classsimulation__framework_1_1evaluator_1_1TimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1TimeToCollisionCalculator) class to calculate the time of Ego to collision with other traffic car based on osi GroundTruth Algorithm explaination:
1. find out the Ego vehicle index within MovingObject list from GroundTruth and compute the BoundingBox

2. find out the nearest with possible colliding traffic vehicle index within MovingObject list from GroundTruth and compute the BoundingBox.

3. calculate the distance between ego and nearest possible colliding traffic vehicle, with consideraion of dimensions of ego and traffic car with approximation using half length from both.

4. check if two bounding boxes are overlapping, if yes return ttc value to 0 (zero) meaning collision happens; if no, go to No.5.

5. calculate current TTC based on velocity difference (2d velocity vector Norm difference) and distance. If velocity difference has a negative value, which means the nearest traffic car is driving faster than ego, ttc value will be returned as std::chrono::milliseconds::max()

## Members

* [Calculate](classsimulation__framework_1_1evaluator_1_1TimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1TimeToCollisionCalculator_1aae6550ba8e9cff9880853cc9e32c65b8)

## Public functions

<a id="classsimulation__framework_1_1evaluator_1_1TimeToCollisionCalculator_1aae6550ba8e9cff9880853cc9e32c65b8"></a>
### Function Calculate

![][public]
![][const]


```cpp
std::chrono::milliseconds simulation_framework::evaluator::TimeToCollisionCalculator::Calculate(const osi3::GroundTruth &ground_truth) const
```








**Parameters**:

* const osi3::GroundTruth & **ground_truth**

**Return type**: std::chrono::milliseconds

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::evaluator::TimeToCollisionCalculator::Calculate"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"ttc__calculator_8h"},"children":[{"type":"text","text":"ttc_calculator.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)