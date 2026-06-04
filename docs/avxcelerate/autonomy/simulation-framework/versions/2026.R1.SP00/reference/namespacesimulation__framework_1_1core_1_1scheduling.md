# Namespace simulation_framework::core::scheduling

![][C++]

**Definition**: `core/scheduler/i_scheduler_client/i_scheduler_client.h` (line 21)





## Child namespaces

* [simulation_framework::core::scheduling::scheduling_client_creator](namespacesimulation__framework_1_1core_1_1scheduling_1_1scheduling__client__creator.md#namespacesimulation__framework_1_1core_1_1scheduling_1_1scheduling__client__creator)

## Classes

* [simulation_framework::core::scheduling::ISchedulerClient](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient)

## Enumeration types

<a id="i__scheduler__client_8h_1ac76a3d7176d8d397cb7820e9aa8b8fd8"></a>
### Enumeration type SchedulerClientType

![][public]

**Definition**: `core/scheduler/i_scheduler_client/i_scheduler_client.h` (line 32)


```cpp
enum SchedulerClientType {
  kRTIDDS = 0,
  kDUMMY
}
```


class ISchedulerClient

SchedulerClient is injected into an BaseActivity and listens to events sent by the Scheduler. On receiving an event, it triggers the <code>Step()</code> function of its BaseActivity and sends back the feedback to the Scheduler once the activity is done stepping.



<a id="i__scheduler__client_8h_1ac76a3d7176d8d397cb7820e9aa8b8fd8adcdc344069d78d9d7508e68ed678df10"></a>
#### Enumerator kRTIDDS





<a id="i__scheduler__client_8h_1ac76a3d7176d8d397cb7820e9aa8b8fd8a97dc514bc7729fe1f3867ff60f5b8fa6"></a>
#### Enumerator kDUMMY

use event sending/receiving mechanism to schedule activities



<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::SchedulerClientType"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)