# File autonomy_msg.h

![][C++]

**Location**: `autonomy/communication/messages/autonomy_msg.h`





## Classes

* [simulation_framework::autonomy::communication::messages::TimestampView](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView)
* [simulation_framework::autonomy::communication::messages::AutonomyMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)
* [simulation_framework::autonomy::communication](namespacesimulation__framework_1_1autonomy_1_1communication.md#namespacesimulation__framework_1_1autonomy_1_1communication)
* [simulation_framework::autonomy::communication::messages](namespacesimulation__framework_1_1autonomy_1_1communication_1_1messages.md#namespacesimulation__framework_1_1autonomy_1_1communication_1_1messages)

## Includes

* <algorithm>
* <cstddef>
* <cstdint>
* <cstring>
* <stdexcept>
* <type_traits>




## Included by

* [dds_to_autonomy_msg_converter.h](dds__to__autonomy__msg__converter_8h.md#dds__to__autonomy__msg__converter_8h)
* [vehicle_control_input_msg.h](vehicle__control__input__msg_8h.md#vehicle__control__input__msg_8h)




## Source


```cpp

#ifndef AUTONOMY_COMMUNICATION_MESSAGES_AUTONOMY_MSG_H
#define AUTONOMY_COMMUNICATION_MESSAGES_AUTONOMY_MSG_H

#include <algorithm>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <stdexcept>
#include <type_traits>

namespace simulation_framework
{
namespace autonomy
{
namespace communication
{
namespace messages
{

struct TimestampView
{
    uint64_t seconds() const noexcept { return secs; }

    uint64_t nanos() const noexcept { return ns; }

    uint64_t secs{0};
    uint64_t ns{0};
};

class AutonomyMsg
{
  public:
    AutonomyMsg() {}

    uint64_t sequence_id{0ULL};

    size_t ByteSizeLong() const noexcept { return BaseSize() + PayloadSize(); }

    TimestampView timestamp() const noexcept { return timestamp_view_; }

    void SetTimestamp(uint64_t seconds, uint64_t nanos) noexcept
    {
        timestamp_view_.secs = seconds;
        timestamp_view_.ns = nanos;
    }

    void SerializeToArray(void* data, size_t size) const
    {
        if (!data)
        {
            throw std::runtime_error("Serialize buffer pointer is invalid");
        }
        const size_t needed = ByteSizeLong();
        if (size < needed)
        {
            throw std::runtime_error("Serialize buffer overflow: not enough space to write value");
        }
        unsigned char* ptr = static_cast<unsigned char*>(data);
        size_t remaining = size;

        writeLE(ptr, remaining, sequence_id);
        writeLE(ptr, remaining, timestamp_view_.secs);
        writeLE(ptr, remaining, timestamp_view_.ns);

        SerializePayload(ptr, remaining);
    }
    void ParseFromArray(const void* data, size_t size)
    {
        if (!data)
            throw std::runtime_error("Parse buffer pointer is invalid");
        const unsigned char* ptr = static_cast<const unsigned char*>(data);
        size_t remaining = size;

        readLE(ptr, remaining, sequence_id);
        readLE(ptr, remaining, timestamp_view_.secs);
        readLE(ptr, remaining, timestamp_view_.ns);

        ParsePayload(ptr, remaining);
    }

  protected:
    static constexpr size_t BaseSize() noexcept { return sizeof(uint64_t) + sizeof(uint64_t) + sizeof(uint64_t); }

    virtual size_t PayloadSize() const noexcept = 0;

    virtual void SerializePayload(unsigned char*& ptr, size_t& remaining) const = 0;

    template <typename T>
    static typename std::enable_if<std::is_integral<T>::value || std::is_floating_point<T>::value, void>::type
    readLE(const unsigned char*& ptr, size_t& remaining, T& out)
    {
        const size_t n = sizeof(T);
        if (remaining < n)
        {
            throw std::runtime_error("Parse buffer underflow: not enough data to read value");
        }
        unsigned char tmp[sizeof(T)];
        std::memcpy(tmp, ptr, n);
        const uint16_t one = 1;
        const bool host_is_little = (*reinterpret_cast<const unsigned char*>(&one) == 1);
        if (!host_is_little)
        {
            std::reverse(tmp, tmp + n);
        }
        std::memcpy(&out, tmp, n);
        ptr += n;
        remaining -= n;
    }

    virtual void ParsePayload(const unsigned char*& ptr, size_t& remaining) = 0;

    template <typename T>
    static typename std::enable_if<std::is_integral<T>::value || std::is_floating_point<T>::value, void>::type
    writeLE(unsigned char*& ptr, size_t& remaining, T value)
    {
        const size_t n = sizeof(T);
        if (remaining < n)
        {
            throw std::runtime_error("Serialize buffer overflow: not enough space to write value");
        }
        unsigned char tmp[sizeof(T)];
        std::memcpy(tmp, &value, n);
        const uint16_t one = 1;
        const bool host_is_little = (*reinterpret_cast<const unsigned char*>(&one) == 1);
        if (!host_is_little)
        {
            std::reverse(tmp, tmp + n);
        }
        std::memcpy(ptr, tmp, n);
        ptr += n;
        remaining -= n;
    }

    TimestampView timestamp_view_;
};

}  // namespace messages
}  // namespace communication
}  // namespace autonomy
}  // namespace simulation_framework

#endif  // AUTONOMY_COMMUNICATION_MESSAGES_AUTONOMY_MSG_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)