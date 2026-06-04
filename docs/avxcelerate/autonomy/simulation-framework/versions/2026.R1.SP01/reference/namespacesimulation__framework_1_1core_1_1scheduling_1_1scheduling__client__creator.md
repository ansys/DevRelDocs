# Namespace simulation_framework::core::scheduling::scheduling_client_creator

![][C++]

**Definition**: `core/scheduler/scheduler_client/scheduler_client_creator.h` (line 23)





## Functions

<a id="scheduler__client__creator_8h_1a1e7bfa15f048409e7fc80d020c6e16a8"></a>
### Function Create

![][public]


```cpp
SIMFWK_CORE_API std::unique_ptr< ISchedulerClient > simulation_framework::core::scheduling::scheduling_client_creator::Create(const SchedulerClientType type)
```


class SchedulerClientCreator

SchedulerClientCreator is creator for different implementations of ISchedulerClient interface based on given type scheduling::SchedulerClientType.





Create SchedulerClient based on given type for activity scheduling 

**Parameters**:

* **type**:


**Returns**:

A unique pointer of ISchedulerClient



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) SchedulerClientType **type**

**Return type**: [SIMFWK_CORE_API](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::unique_ptr< ISchedulerClient >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::scheduling_client_creator::Create"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)