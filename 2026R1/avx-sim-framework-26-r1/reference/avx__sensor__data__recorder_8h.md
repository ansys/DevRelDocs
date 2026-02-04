# File avx_sensor_data_recorder.h

![][C++]

**Location**: `co_sim/avx_sensor/avx_sensor_data_recorder/avx_sensor_data_recorder.h`





## Classes

* [simulation_framework::avx_sensor_cosim::AvxSensorDataRecorder](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataRecorder)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::avx_sensor_cosim](namespacesimulation__framework_1_1avx__sensor__cosim.md#namespacesimulation__framework_1_1avx__sensor__cosim)

## Includes

* <ansys/api/avxcelerate/sensors/v1/sensor_data/sensor_data.pb.h>
* <memory>
* <string>




## Source


```cpp


#pragma once

#include <ansys/api/avxcelerate/sensors/v1/sensor_data/sensor_data.pb.h>
#include <memory>
#include <string>

namespace simulation_framework
{
namespace avx_sensor_cosim
{

class AvxSensorDataRecorder
{
  public:
    explicit AvxSensorDataRecorder(const std::string& file_path, const std::string& topic_name = "/avx/sensor_data");

    ~AvxSensorDataRecorder();

    AvxSensorDataRecorder(const AvxSensorDataRecorder&) = delete;

    AvxSensorDataRecorder& operator=(const AvxSensorDataRecorder&) = delete;

    void Record(const ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData& sensor_data);

  private:
    struct Impl;
    std::unique_ptr<Impl> impl_;
};

}  // namespace avx_sensor_cosim
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)