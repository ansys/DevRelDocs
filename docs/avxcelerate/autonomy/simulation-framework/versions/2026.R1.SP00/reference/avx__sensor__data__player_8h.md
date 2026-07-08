# File avx_sensor_data_player.h

![][C++]

**Location**: `co_sim/avx_sensor/avx_sensor_data_player/avx_sensor_data_player.h`





## Classes

* [simulation_framework::avx_sensor_cosim::AvxSensorDataPlayer](classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer.md#classsimulation__framework_1_1avx__sensor__cosim_1_1AvxSensorDataPlayer)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::avx_sensor_cosim](namespacesimulation__framework_1_1avx__sensor__cosim.md#namespacesimulation__framework_1_1avx__sensor__cosim)

## Includes

* <ansys/api/avxcelerate/sensors/v1/sensor_data/sensor_data.pb.h>
* <optional>
* <string>
* <vector>




## Source


```cpp


#pragma once

#include <ansys/api/avxcelerate/sensors/v1/sensor_data/sensor_data.pb.h>
#include <optional>
#include <string>
#include <vector>

namespace simulation_framework
{
namespace avx_sensor_cosim
{

class AvxSensorDataPlayer
{
  public:
    explicit AvxSensorDataPlayer(const std::string& file_path, const std::string& topic_name = "/avx/sensor_data");

    ~AvxSensorDataPlayer();

    AvxSensorDataPlayer(const AvxSensorDataPlayer&) = delete;

    AvxSensorDataPlayer& operator=(const AvxSensorDataPlayer&) = delete;

    void Open();

    bool HasNext() const;

    std::optional<ansys::api::avxcelerate::sensors::v1::sensor_data::SensorData> GetNext();

    void Reset();

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
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)