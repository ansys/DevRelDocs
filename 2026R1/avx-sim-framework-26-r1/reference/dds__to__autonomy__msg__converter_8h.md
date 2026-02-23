# File dds_to_autonomy_msg_converter.h

![][C++]

**Location**: `autonomy/communication/utils/dds_to_autonomy_msg_converter.h`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)
* [simulation_framework::autonomy::communication](namespacesimulation__framework_1_1autonomy_1_1communication.md#namespacesimulation__framework_1_1autonomy_1_1communication)
* [simulation_framework::autonomy::communication::utils](namespacesimulation__framework_1_1autonomy_1_1communication_1_1utils.md#namespacesimulation__framework_1_1autonomy_1_1communication_1_1utils)

## Includes

* [autonomy/communication/messages/autonomy_msg.h](autonomy__msg_8h.md#autonomy__msg_8h)
* core/message/rtidds/generic_bytes/generic_bytes.hpp
* <string>




## Source


```cpp


#pragma once

#include "autonomy/communication/messages/autonomy_msg.h"
#include "core/message/rtidds/generic_bytes/generic_bytes.hpp"
#include <string>

namespace simulation_framework
{
namespace autonomy
{
namespace communication
{
namespace utils
{

rtidds::GenericBytesMessage ConvertAutonomyMsgToGenericBytes(const int frame_counter,
                                                             const std::string& header_name,
                                                             const messages::AutonomyMsg& msg);

void ConvertGenericBytesToAutonomyMsg(const rtidds::GenericBytesMessage& dds_msg, messages::AutonomyMsg& msg);

}  // namespace utils
}  // namespace communication
}  // namespace autonomy
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)