<a id="distance__calculator_8h"></a>
# File distance\_calculator.h

![][C++]

**Location**: `autonomy/evaluator/distance\_calculator/distance\_calculator.h`





## Classes

* [simulation\_framework::evaluator::DistanceDrivenCalculator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [evaluator](namespaceevaluator.md#namespaceevaluator)
* [simulation\_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* <osi_groundtruth.pb.h>
* <optional>


```mermaid
graph LR
1["distance_calculator.h"]
click 1 "distance__calculator_8h.md#distance__calculator_8h"
1 --> 2
1 --> 3

3["optional"]

2["osi_groundtruth.pb.h"]

```


## Included by

* [distance_calculator.cpp](distance__calculator_8cpp.md#distance__calculator_8cpp)
* [distance_driven_evaluator.h](distance__driven__evaluator_8h.md#distance__driven__evaluator_8h)


```mermaid
graph RL
2["distance_calculator.cpp"]
click 2 "distance__calculator_8cpp_source.md#distance__calculator_8cpp_source"

1["distance_calculator.h"]
click 1 "distance__calculator_8h.md#distance__calculator_8h"
2 --> 1
3 --> 1

4["distance_driven_evaluator.cpp"]
click 4 "distance__driven__evaluator_8cpp_source.md#distance__driven__evaluator_8cpp_source"

3["distance_driven_evaluator.h"]
click 3 "distance__driven__evaluator_8h_source.md#distance__driven__evaluator_8h_source"
4 --> 3

```


## Source


```cpp


#pragma once

#include <osi_groundtruth.pb.h>
#include <optional>

namespace simulation_framework
{

namespace evaluator
{


class DistanceDrivenCalculator
{
  public:
    double Calculate(const osi3::GroundTruth& ground_truth);

  private:
    std::optional<double> last_xpos_;
    std::optional<double> last_ypos_;
    bool is_initialized_{false};
};

}  // namespace evaluator
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)