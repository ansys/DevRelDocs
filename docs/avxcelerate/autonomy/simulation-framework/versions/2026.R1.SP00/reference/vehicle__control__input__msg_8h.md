# File vehicle_control_input_msg.h

![][C++]

**Location**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h`





## Classes

* [simulation_framework::autonomy::communication::messages::VehicleControlInput](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)
* [simulation_framework::autonomy::communication](namespacesimulation__framework_1_1autonomy_1_1communication.md#namespacesimulation__framework_1_1autonomy_1_1communication)
* [simulation_framework::autonomy::communication::messages](namespacesimulation__framework_1_1autonomy_1_1communication_1_1messages.md#namespacesimulation__framework_1_1autonomy_1_1communication_1_1messages)

## Includes

* [autonomy/communication/messages/autonomy_msg.h](autonomy__msg_8h.md#autonomy__msg_8h)
* <cstdint>
* <variant>




## Source


```cpp

#ifndef AUTONOMY_COMMUNICATION_MESSAGES_VEHICLE_CONTROL_INPUT_MSG_H
#define AUTONOMY_COMMUNICATION_MESSAGES_VEHICLE_CONTROL_INPUT_MSG_H

#include "autonomy/communication/messages/autonomy_msg.h"
#include <cstdint>
#include <variant>

namespace simulation_framework
{
namespace autonomy
{
namespace communication
{
namespace messages
{
using ThrottleType = std::variant<int, double>;

using SteeringType = std::variant<int, double>;

enum class VehicleControlMode
{
    ACC_N_STEER = 0,  // control vehicle using acceleration (m/s^2) and steering angle (radians)
    ANALOG = 1,       // control throttle and steering in continuous values within set max limits
    BINARY = 2,       // control throttle and steering in discrete steps [ -1, 0 , 1 ]
    INVALID = 255
};


class VehicleControlInput : public AutonomyMsg
{
  public:
    VehicleControlInput() = default;

    uint64_t object_id{0};

    VehicleControlMode control_mode{VehicleControlMode::INVALID};

    ThrottleType throttle;

    SteeringType steering;

    double max_acceleration{0.0};

    double max_deceleration{0.0};

  protected:
    size_t PayloadSize() const noexcept override
    {
        size_t sz = 0;
        sz += sizeof(uint64_t);  // object_id
        sz += sizeof(uint8_t);   // control_mode
        sz += 1;                 // throttle tag
        if (std::holds_alternative<int>(throttle))
            sz += sizeof(int32_t);
        else
            sz += sizeof(double);
        sz += 1;  // steering tag
        if (std::holds_alternative<int>(steering))
            sz += sizeof(int32_t);
        else
            sz += sizeof(double);
        sz += sizeof(double);  // max_acceleration
        sz += sizeof(double);  // max_deceleration
        return sz;
    }

    void SerializePayload(unsigned char*& ptr, size_t& remaining) const override
    {
        writeLE(ptr, remaining, object_id);
        uint8_t mode = static_cast<uint8_t>(control_mode);
        writeLE(ptr, remaining, mode);

        if (std::holds_alternative<int>(throttle))
        {
            uint8_t tag = 0;
            writeLE(ptr, remaining, tag);
            int32_t v = static_cast<int32_t>(std::get<int>(throttle));
            writeLE(ptr, remaining, v);
        }
        else
        {
            uint8_t tag = 1;
            writeLE(ptr, remaining, tag);
            double v = std::get<double>(throttle);
            writeLE(ptr, remaining, v);
        }

        if (std::holds_alternative<int>(steering))
        {
            uint8_t tag = 0;
            writeLE(ptr, remaining, tag);
            int32_t v = static_cast<int32_t>(std::get<int>(steering));
            writeLE(ptr, remaining, v);
        }
        else
        {
            uint8_t tag = 1;
            writeLE(ptr, remaining, tag);
            double v = std::get<double>(steering);
            writeLE(ptr, remaining, v);
        }

        writeLE(ptr, remaining, max_acceleration);
        writeLE(ptr, remaining, max_deceleration);
    }

    void ParsePayload(const unsigned char*& ptr, size_t& remaining) override
    {
        readLE(ptr, remaining, object_id);
        uint8_t mode{0};
        readLE(ptr, remaining, mode);
        control_mode = static_cast<VehicleControlMode>(mode);

        uint8_t tag{0};
        readLE(ptr, remaining, tag);
        if (tag == 0)
        {
            int32_t v{0};
            readLE(ptr, remaining, v);
            throttle = static_cast<int>(v);
        }
        else if (tag == 1)
        {
            double v{0.0};
            readLE(ptr, remaining, v);
            throttle = v;
        }
        else
        {
            throw std::runtime_error("ParsePayload: invalid tag for throttle");
        }

        readLE(ptr, remaining, tag);
        if (tag == 0)
        {
            int32_t v{0};
            readLE(ptr, remaining, v);
            steering = static_cast<int>(v);
        }
        else if (tag == 1)
        {
            double v{0.0};
            readLE(ptr, remaining, v);
            steering = v;
        }
        else
        {
            throw std::runtime_error("ParsePayload: invalid tag for steering");
        }

        readLE(ptr, remaining, max_acceleration);
        readLE(ptr, remaining, max_deceleration);

        if (!(max_acceleration >= 0.0))
        {
            throw std::runtime_error("ParsePayload: invalid max_acceleration (must be >= 0)");
        }
        if (!(max_deceleration > 0.0))
        {
            throw std::runtime_error("ParsePayload: invalid max_deceleration (must be > 0)");
        }
    }
};

}  // namespace messages

}  // namespace communication
}  // namespace autonomy
}  // namespace simulation_framework

#endif
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)