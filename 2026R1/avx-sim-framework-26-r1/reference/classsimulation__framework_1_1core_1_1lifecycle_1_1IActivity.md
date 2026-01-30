# Class simulation_framework::core::lifecycle::IActivity

![][C++]
![][public]

**Definition**: `core/lifecycle/activity/i_activity.h` (line 26)

Interface for simulation activities.

The <code>[IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)</code> interface defines the lifecycle of a simulation activity, including initialization, stepping logic, finalization, and shutdown processes. It also provides methods for handling communication, file input/output, and retrieving simulation metadata.

**Inherited by**:

* [simulation_framework::core::lifecycle::BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity)

## Members

* [Finalize](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ae83ad9c4711dfce8cf962da06e0a9193)
* [GetCurrentTimestamp](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1af4306329bbb903f70891f1e01095fc37)
* [GetCustomizedParameters](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a14b69f84754dcd92d6b5eb49a8be8f33)
* [GetCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a2434dec1d575d7f48305c09b4117a9c2)
* [GetName](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ab0dedc5b4b7007b92f95e3356d8808bf)
* [GetSimulationOutputDirectory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ad282fdd8de94e0990b2ef2068a3a136e)
* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ada1e5ab14eb5c159068ccbfc1f8e559c)
* [SetSimulationSettings](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a8ae386596598777d6ddfe4ae787ef5c4)
* [SetUpCommunication](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a08c573b82ec098a7ff5e31d5d827a40f)
* [Shutdown](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a1753af46ca02f6d39442afa25ddca513)
* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a8ae00ca0fb6cf1116435bdbdfa573188)
* [WaitForPubSubConnection](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a29ff4fb0ec86c24b24ff9296107df773)
* [~IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1aa2353eb3f2ef5955c1c3c2d1024c8c48)

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1aa2353eb3f2ef5955c1c3c2d1024c8c48"></a>
### Function ~IActivity

![][public]


```cpp
virtual simulation_framework::core::lifecycle::IActivity::~IActivity()=default
```


Virtual destructor for proper cleanup of derived classes.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::~IActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ada1e5ab14eb5c159068ccbfc1f8e559c"></a>
### Function Init

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivity::Init()=0
```


Initializes the activity.

Implement any logic related to the initialization phase here.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a7373af65d0b4c133cb5de42bf2f88caf)
* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a7f2b0dba2e396cdd58cc414f3a52848c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a29ff4fb0ec86c24b24ff9296107df773"></a>
### Function WaitForPubSubConnection

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivity::WaitForPubSubConnection()=0
```


Waits until Pub/Sub pairing is complete.

Ensures the communication channels are correctly paired before proceeding. 
**Returns**:

<code>true</code> if pairing is successful, otherwise <code>false</code>.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [WaitForPubSubConnection](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aec1044c8ce73f976233c54e496740b04)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::WaitForPubSubConnection"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a8ae00ca0fb6cf1116435bdbdfa573188"></a>
### Function Step

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivity::Step()=0
```


Executes one step of the activity.

Implement the main logic for each simulation step here.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a45bf4108dc4b3b77b4ca997b824ea07f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::Step"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ae83ad9c4711dfce8cf962da06e0a9193"></a>
### Function Finalize

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivity::Finalize()=0
```


Finalizes the activity.

Implement any logic related to the finalization phase here.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Finalize](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a9162ba92fb21fd805a6c72b1065b187c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::Finalize"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a1753af46ca02f6d39442afa25ddca513"></a>
### Function Shutdown

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivity::Shutdown()=0
```


Shuts down the activity.

Implement logic to conclude the activity and release any resources here.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Shutdown](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1ac0a680a9bd6db9111ba085d641a16126)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::Shutdown"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ab0dedc5b4b7007b92f95e3356d8808bf"></a>
### Function GetName

![][public]
![][const]


```cpp
virtual std::string simulation_framework::core::lifecycle::IActivity::GetName() const =0
```


Retrieves the name of the activity.

**Returns**:

The name of the activity as a string.



**Return type**: std::string

**Reimplemented by**:

* [GetName](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a11d72f1e983f825e5d812224aa43c432)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::GetName"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1af4306329bbb903f70891f1e01095fc37"></a>
### Function GetCurrentTimestamp

![][public]
![][const]


```cpp
virtual time::Timestamp simulation_framework::core::lifecycle::IActivity::GetCurrentTimestamp() const =0
```


Retrieves the current simulation timestamp.

This provides the simulation's current time as a <code>Timestamp</code> object. 
**Returns**:

The current simulation timestamp.



**Return type**: time::Timestamp

**Reimplemented by**:

* [GetCurrentTimestamp](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2cfe6105cb8e660b2757e602d4fc1a87)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::GetCurrentTimestamp"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a2434dec1d575d7f48305c09b4117a9c2"></a>
### Function GetCycleTime

![][public]
![][const]


```cpp
virtual std::chrono::milliseconds simulation_framework::core::lifecycle::IActivity::GetCycleTime() const =0
```


Retrieves the cycle time of the activity.

The cycle time indicates how often the activity executes. 
**Returns**:

The cycle time as a duration in milliseconds.



**Return type**: std::chrono::milliseconds

**Reimplemented by**:

* [GetCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2dcf170a633dad7ea1238489c6f9237c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::GetCycleTime"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a14b69f84754dcd92d6b5eb49a8be8f33"></a>
### Function GetCustomizedParameters

![][public]
![][const]


```cpp
virtual const SimulationParameters::CustomizedParameters & simulation_framework::core::lifecycle::IActivity::GetCustomizedParameters() const =0
```


Retrieves the customized parameters for the activity.

**Returns**:

A map of customized parameters.



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [SimulationParameters::CustomizedParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a25a000c4c4dfefb04ff71a796e06c787) &

**Reimplemented by**:

* [GetCustomizedParameters](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a56fe34c6d46420a6049b7ee19a7f8e1f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::GetCustomizedParameters"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ad282fdd8de94e0990b2ef2068a3a136e"></a>
### Function GetSimulationOutputDirectory

![][public]
![][const]


```cpp
virtual std::string simulation_framework::core::lifecycle::IActivity::GetSimulationOutputDirectory() const =0
```


Retrieves the output directory for simulation results.

The directory where all simulation outputs will be stored. 
**Returns**:

The output directory as a string.



**Return type**: std::string

**Reimplemented by**:

* [GetSimulationOutputDirectory](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aeca0631080d2751212ad8958d16860e9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::GetSimulationOutputDirectory"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a08c573b82ec098a7ff5e31d5d827a40f"></a>
### Function SetUpCommunication

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivity::SetUpCommunication()=0
```


Sets up the Pub/Sub communication for the activity.

Registers the activity's communication channels into the bus.



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetUpCommunication](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3355c18c8d6519f9649ec7de4274e645)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::SetUpCommunication"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a8ae386596598777d6ddfe4ae787ef5c4"></a>
### Function SetSimulationSettings

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivity::SetSimulationSettings(const scheduling::SimulationSettings &sim_settings)=0
```


Set the simulation settings for this activity.

**Parameters**:

* **sim_settings**: The simulation settings struct



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) scheduling::SimulationSettings & **sim_settings**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetSimulationSettings](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3f7d19a88d57a2b77941db44fe0a4e65)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivity::SetSimulationSettings"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__activity_8h"},"children":[{"type":"text","text":"i_activity.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)