# File communication_manager_creator.h

![][C++]

**Location**: `core/communication/communication_manager_creator.h`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::communication_manager_creator](namespacesimulation__framework_1_1core_1_1communication__manager__creator.md#namespacesimulation__framework_1_1core_1_1communication__manager__creator)

## Includes

* [core/communication/topic.h](topic_8h.md#topic_8h)
* core/export/simfwk_core_export.h
* <memory>




## Source


```cpp


#ifndef SIMFWK_CORE_COMMUNICATION_COMMUNICATIONMANAGERCREATOR_H
#define SIMFWK_CORE_COMMUNICATION_COMMUNICATIONMANAGERCREATOR_H

#include "core/communication/topic.h"
#include "core/export/simfwk_core_export.h"
#include <memory>

namespace simulation_framework
{
namespace core
{

class CommunicationManager;


namespace communication_manager_creator
{

enum class Type
{
    kRTIDDS = 0,
    kMOCK,
};

SIMFWK_CORE_API std::shared_ptr<CommunicationManager> Create(const Type type, const Topics& topics = Topics{});

}  // namespace communication_manager_creator
}  // namespace core
}  // namespace simulation_framework

#endif  // SIMFWK_CORE_COMMUNICATION_COMMUNICATIONMANAGERCREATOR_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)