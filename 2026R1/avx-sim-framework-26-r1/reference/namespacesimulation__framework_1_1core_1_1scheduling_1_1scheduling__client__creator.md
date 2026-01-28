<a id="namespacesimulation__framework_1_1core_1_1scheduling_1_1scheduling__client__creator"></a>
# Namespace simulation\_framework::core::scheduling::scheduling\_client\_creator

![][C++]

#include: <[scheduler_client_creator.h](scheduler__client__creator_8h.md#scheduler__client__creator_8h)>





## Functions

<a id="scheduler__client__creator_8h_1a2c8d689e686b89011993438a2b0aa130"></a>
### Function Create

![][public]


```cpp
std::unique_ptr< ISchedulerClient > simulation_framework::core::scheduling::scheduling_client_creator::Create(const SchedulerClientType type)
```


class SchedulerClientCreator

SchedulerClientCreator is creator for different implementations of ISchedulerClient interface based on given type scheduling::SchedulerClientType.





Create SchedulerClient based on given type for activity scheduling 
**Parameters**:

* **type**:


**Returns**:

A unique pointer of ISchedulerClient



**Parameters**:

* const SchedulerClientType **type**

**Return type**: std::unique_ptr< ISchedulerClient >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::scheduling_client_creator::Create"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)