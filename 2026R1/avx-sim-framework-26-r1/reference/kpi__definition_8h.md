<a id="kpi__definition_8h"></a>
# File kpi\_definition.h

![][C++]

**Location**: `core/kpi/definition/kpi\_definition.h`





## Classes

* [simulation\_framework::core::kpi::Datatype](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype)
* [simulation\_framework::core::kpi::KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::kpi](namespacesimulation__framework_1_1core_1_1kpi.md#namespacesimulation__framework_1_1core_1_1kpi)

## Includes

* [core/time/i_clock/i_clock.h](i__clock_8h.md#i__clock_8h)
* <string>
* <vector>


```mermaid
graph LR
1["kpi_definition.h"]
click 1 "kpi__definition_8h.md#kpi__definition_8h"
1 --> 2
1 --> 5
1 --> 8

2["core/time/i_clock/i_clock.h"]
click 2 "i__clock_8h_source.md#i__clock_8h_source"
2 --> 3
2 --> 6
2 --> 7

3["core/time/i_clock/timestamp.h"]
click 3 "timestamp_8h_source.md#timestamp_8h_source"
3 --> 4
3 --> 5

6["chrono"]

4["cstdint"]

7["memory"]

5["string"]

8["vector"]

```


## Included by

* [i_kpi.h](i__kpi_8h.md#i__kpi_8h)
* [i_kpi_message_converter.h](i__kpi__message__converter_8h.md#i__kpi__message__converter_8h)


```mermaid
graph RL
4["distance_driven_evaluator.cpp"]
click 4 "distance__driven__evaluator_8cpp_source.md#distance__driven__evaluator_8cpp_source"

3["distance_driven_evaluator.h"]
click 3 "distance__driven__evaluator_8h_source.md#distance__driven__evaluator_8h_source"
4 --> 3

6["gt_base_evaluator.h"]
click 6 "gt__base__evaluator_8h_source.md#gt__base__evaluator_8h_source"

8["min_ttc_evaluator.cpp"]
click 8 "min__ttc__evaluator_8cpp_source.md#min__ttc__evaluator_8cpp_source"

7["min_ttc_evaluator.h"]
click 7 "min__ttc__evaluator_8h_source.md#min__ttc__evaluator_8h_source"
8 --> 7

10["predictive_min_ttc_evaluator.cpp"]
click 10 "predictive__min__ttc__evaluator_8cpp_source.md#predictive__min__ttc__evaluator_8cpp_source"

9["predictive_min_ttc_evaluator.h"]
click 9 "predictive__min__ttc__evaluator_8h_source.md#predictive__min__ttc__evaluator_8h_source"
10 --> 9

1["kpi_definition.h"]
click 1 "kpi__definition_8h.md#kpi__definition_8h"
2 --> 1
11 --> 1

5["i_evaluator.h"]
click 5 "i__evaluator_8h_source.md#i__evaluator_8h_source"
6 --> 5

2["i_kpi.h"]
click 2 "i__kpi_8h_source.md#i__kpi_8h_source"
3 --> 2
5 --> 2
7 --> 2
9 --> 2

11["i_kpi_message_converter.h"]
click 11 "i__kpi__message__converter_8h_source.md#i__kpi__message__converter_8h_source"
12 --> 11

12["kpi_message_converter.h"]
click 12 "kpi__message__converter_8h_source.md#kpi__message__converter_8h_source"

```


## Source


```cpp


#pragma once

#include "core/time/i_clock/i_clock.h"
#include <string>
#include <vector>

namespace simulation_framework
{
namespace core
{
namespace kpi
{

enum class Type : uint8_t
{
    kScalar = 0,  
    kTimeSeries,  
    kLog,         
    kOther        
};

class Datatype
{
  public:
    enum class Value : uint8_t
    {
        kDouble = 0,
        kInteger,
        kString,
        kBoolean,
        kJson,
        kOther
    };

    Datatype();
    Datatype(Value value);
    Datatype(const std::string& value_string);

    ~Datatype() = default;

    operator Value() const;

    std::string ToString() const noexcept;
    void FromString(const std::string& value_string) noexcept;

    bool operator==(Datatype other) const;

  private:
    Value value_;
};


struct KpiContent
{
    core::time::Timestamp timestamp;
    std::string name;
    Datatype data_type;
    std::string value;
    std::string unit;
    Type type;
};

inline bool operator==(const core::kpi::KpiContent& lhs, const core::kpi::KpiContent& rhs)
{
    return (lhs.timestamp == rhs.timestamp) && (lhs.name == rhs.name) && (lhs.data_type == rhs.data_type) &&
           (lhs.value == rhs.value) && (lhs.unit == rhs.unit) && (lhs.type == rhs.type);
}

using KpiMessage = std::vector<KpiContent>;

}  // namespace kpi
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)