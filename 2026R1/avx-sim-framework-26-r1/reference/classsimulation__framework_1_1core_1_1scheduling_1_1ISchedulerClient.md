<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient"></a>
# Class simulation\_framework::core::scheduling::ISchedulerClient

![][C++]
![][public]

#include: <[i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)>





## Members

* [BindActivity](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a5e4746f85ab1765dc9c5ba92d3cf5678)
* [GetCurrentTimestamp](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a8c765474d5eee90b0efa2fe6a4bae686)
* [GetSimulationSettings](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a702d2e97502ffc37067a009b450e1c71)
* [IsPrimaryActivity](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1ac9c317c08f22030bf4db201103da3224)
* [SendAbort](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a92d7ec9b317fdd7ec0f5d9e98b548d4d)
* [SetSimulationSettings](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a8c3161558e38af1267a574d64ff9899a)
* [ShouldStep](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1ac6a1cb5df2433aa3fb9e08fb293137d9)
* [~ISchedulerClient](classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient.md#classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a8ca123b421503d053eedd4da40d2624a)

## Public functions

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a8ca123b421503d053eedd4da40d2624a"></a>
### Function ~ISchedulerClient

![][public]


```cpp
virtual simulation_framework::core::scheduling::ISchedulerClient::~ISchedulerClient()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::~ISchedulerClient"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a5e4746f85ab1765dc9c5ba92d3cf5678"></a>
### Function BindActivity

![][public]


```cpp
virtual void simulation_framework::core::scheduling::ISchedulerClient::BindActivity(IActivity *activity)=0
```


Bind with an activity so that it can be controlled by scheduling event.

**Parameters**:

* **activity**: A pointer of an BaseActivity



**Parameters**:

* [IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity) * **activity**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::BindActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1ac6a1cb5df2433aa3fb9e08fb293137d9"></a>
### Function ShouldStep

![][public]


```cpp
virtual bool simulation_framework::core::scheduling::ISchedulerClient::ShouldStep(const std::string &topic_name)=0
```


Determine if a certain topic should be stepped at this point based on scheduling config. Currently this feature is NOT supported yet.

**Parameters**:

* **topic_name**: The name of [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) it should be stepped



**Parameters**:

* const std::string & **topic_name**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::ShouldStep"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a92d7ec9b317fdd7ec0f5d9e98b548d4d"></a>
### Function SendAbort

![][public]


```cpp
virtual void simulation_framework::core::scheduling::ISchedulerClient::SendAbort()=0
```


Actively send a abort signal to stop simulation.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::SendAbort"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a8c765474d5eee90b0efa2fe6a4bae686"></a>
### Function GetCurrentTimestamp

![][public]
![][const]


```cpp
virtual time::Timestamp simulation_framework::core::scheduling::ISchedulerClient::GetCurrentTimestamp() const =0
```


Return current timestamp during simulation.

**Returns**:

The current timestamp during simulation



**Return type**: time::Timestamp

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::GetCurrentTimestamp"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a702d2e97502ffc37067a009b450e1c71"></a>
### Function GetSimulationSettings

![][public]
![][const]


```cpp
virtual const SimulationSettings & simulation_framework::core::scheduling::ISchedulerClient::GetSimulationSettings() const =0
```


Return static simulation settings struct.

**Returns**:

The static simulation settings struct



**Return type**: const SimulationSettings &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::GetSimulationSettings"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1ac9c317c08f22030bf4db201103da3224"></a>
### Function IsPrimaryActivity

![][public]
![][const]


```cpp
virtual bool simulation_framework::core::scheduling::ISchedulerClient::IsPrimaryActivity() const =0
```


Return if the activity is simulation primary activity.

**Returns**:

True if the activity is simulation primary activity, false otherwise



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::IsPrimaryActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1scheduling_1_1ISchedulerClient_1a8c3161558e38af1267a574d64ff9899a"></a>
### Function SetSimulationSettings

![][public]


```cpp
virtual void simulation_framework::core::scheduling::ISchedulerClient::SetSimulationSettings(const SimulationSettings &sim_settings)=0
```


Set the simulation settings struct.

**Parameters**:

* **sim_settings**: The simulation settings struct



**Parameters**:

* const SimulationSettings & **sim_settings**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::scheduling::ISchedulerClient::SetSimulationSettings"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)