# Namespace simulation_framework::core

![][C++]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 18)





## Child namespaces

* [simulation_framework::core::communication_manager_creator](namespacesimulation__framework_1_1core_1_1communication__manager__creator.md#namespacesimulation__framework_1_1core_1_1communication__manager__creator)
* [simulation_framework::core::kpi](namespacesimulation__framework_1_1core_1_1kpi.md#namespacesimulation__framework_1_1core_1_1kpi)
* [simulation_framework::core::lifecycle](namespacesimulation__framework_1_1core_1_1lifecycle.md#namespacesimulation__framework_1_1core_1_1lifecycle)
* [simulation_framework::core::logging](namespacesimulation__framework_1_1core_1_1logging.md#namespacesimulation__framework_1_1core_1_1logging)
* [simulation_framework::core::scheduling](namespacesimulation__framework_1_1core_1_1scheduling.md#namespacesimulation__framework_1_1core_1_1scheduling)
* [simulation_framework::core::time](namespacesimulation__framework_1_1core_1_1time.md#namespacesimulation__framework_1_1core_1_1time)
* [simulation_framework::core::topic_registry](namespacesimulation__framework_1_1core_1_1topic__registry.md#namespacesimulation__framework_1_1core_1_1topic__registry)

## Classes

* [simulation_framework::core::Cli](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli)
* [simulation_framework::core::CliParser](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser)
* [simulation_framework::core::IEvaluator](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator)
* [simulation_framework::core::IPublisher](classsimulation__framework_1_1core_1_1IPublisher.md#classsimulation__framework_1_1core_1_1IPublisher)
* [simulation_framework::core::ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer)
* [simulation_framework::core::ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner)
* [simulation_framework::core::IStandaloneActivityCreator](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator)
* [simulation_framework::core::ISubscriber](classsimulation__framework_1_1core_1_1ISubscriber.md#classsimulation__framework_1_1core_1_1ISubscriber)
* [simulation_framework::core::ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic)
* [simulation_framework::core::SimfwkCliServer](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer)
* [simulation_framework::core::SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner)
* [simulation_framework::core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)
* [simulation_framework::core::StandaloneActivityService](classsimulation__framework_1_1core_1_1StandaloneActivityService.md#classsimulation__framework_1_1core_1_1StandaloneActivityService)
* [simulation_framework::core::StandaloneInitData](structsimulation__framework_1_1core_1_1StandaloneInitData.md#structsimulation__framework_1_1core_1_1StandaloneInitData)
* [simulation_framework::core::StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)
* [simulation_framework::core::Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

## Enumeration types

<a id="i__sim__runner_8h_1ae9ca02fd4e0731b79817f05941f5590a"></a>
### Enumeration type SimState

![][public]

**Definition**: `core/service/sim_runner/i_sim_runner.h` (line 28)


```cpp
enum SimState {
  kInitialized,
  kRunning,
  kPaused,
  kFinished,
  kTerminated,
  kError
}
```


Enumerates the possible states of the simulation.





<a id="i__sim__runner_8h_1ae9ca02fd4e0731b79817f05941f5590aab661416dbe99f1eddca1a5547a8bd720"></a>
#### Enumerator kInitialized

kInitialized: Inputs are taken, waiting for user command to execute.



<a id="i__sim__runner_8h_1ae9ca02fd4e0731b79817f05941f5590aa2fc7fbf0d19294f85dd3880460dd3c0a"></a>
#### Enumerator kRunning

kRunning: Simulation is currently running.



<a id="i__sim__runner_8h_1ae9ca02fd4e0731b79817f05941f5590aa39133fbe05b9135570285dc1ce4bf3d7"></a>
#### Enumerator kPaused

kPaused: Simulation is paused by the user.



<a id="i__sim__runner_8h_1ae9ca02fd4e0731b79817f05941f5590aa16b903606caf0e3128389431c392faf3"></a>
#### Enumerator kFinished

kFinished: Simulation is finished, waiting for user command.



<a id="i__sim__runner_8h_1ae9ca02fd4e0731b79817f05941f5590aa790ff187421ccafd6083c04549b89602"></a>
#### Enumerator kTerminated

kTerminated: Simulator is terminated by the user.



<a id="i__sim__runner_8h_1ae9ca02fd4e0731b79817f05941f5590aae3587c730cc1aa530fa4ddc9c4204e97"></a>
#### Enumerator kError

kError: An error occurred during simulation.



<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimState"}]}`
-->

<a id="i__topic_8h_1a5f3b299ad98c849f92704fc92eb23160"></a>
### Enumeration type TopicType

![][public]

**Definition**: `core/communication/i_topic.h` (line 25)


```cpp
enum TopicType {
  kRTIDDS = 0,
  kGRPC
}
```




This is the type of topic based on underlying communication middleware. Currently only supports communication using RTI DDS (Data Distribution Service from rti)



<a id="i__topic_8h_1a5f3b299ad98c849f92704fc92eb23160adcdc344069d78d9d7508e68ed678df10"></a>
#### Enumerator kRTIDDS





<a id="i__topic_8h_1a5f3b299ad98c849f92704fc92eb23160a080b014e8458acb6b31c4555bfd0e8bf"></a>
#### Enumerator kGRPC





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::TopicType"}]}`
-->

## Typedefs

<a id="topic_8h_1a21a526e4bce9d32fba0512abfd62461a"></a>
### Typedef TopicId

![][public]

**Definition**: `core/communication/topic.h` (line 21)


```cpp
typedef std::string simulation_framework::core::TopicId
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::TopicId"}]}`
-->

<a id="i__subscriber_8h_1ab00024dfb50b09a563faec9885263207"></a>
### Typedef Subscribers

![][public]

**Definition**: `core/communication/i_subscriber.h` (line 31)


```cpp
using simulation_framework::core::Subscribers = typedef std::vector<std::unique_ptr<ISubscriber> >
```








**Return type**: std::vector< std::unique_ptr< ISubscriber > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Subscribers"}]}`
-->

<a id="i__topic_8h_1a94b6a1c6d6bd3c2b105a724d32ca5098"></a>
### Typedef TopicIdVector

![][public]

**Definition**: `core/communication/i_topic.h` (line 91)


```cpp
using simulation_framework::core::TopicIdVector = typedef std::vector<TopicId>
```








**Return type**: std::vector< TopicId >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::TopicIdVector"}]}`
-->

<a id="i__topic_8h_1a34845889c831f32aedfd137807f60f7b"></a>
### Typedef Topics

![][public]

**Definition**: `core/communication/i_topic.h` (line 92)


```cpp
using simulation_framework::core::Topics = typedef std::vector<std::shared_ptr<ITopic> >
```








**Return type**: std::vector< std::shared_ptr< [ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic) > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topics"}]}`
-->

<a id="i__publisher_8h_1ac9b8ae0ea6ab33d04941db88e7625f11"></a>
### Typedef Publishers

![][public]

**Definition**: `core/communication/i_publisher.h` (line 33)


```cpp
using simulation_framework::core::Publishers = typedef std::vector<std::unique_ptr<IPublisher> >
```








**Return type**: std::vector< std::unique_ptr< IPublisher > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Publishers"}]}`
-->

## Functions

<a id="standalone__init__data_8h_1ac573afd42cfd3eadfc3e4da4f1b0c909"></a>
### Function operator==

![][public]


```cpp
bool simulation_framework::core::operator==(const StandaloneInitData &lhs, const StandaloneInitData &rhs)
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) StandaloneInitData & **lhs**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) StandaloneInitData & **rhs**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::operator=="}]}`
-->

<a id="version_8h_1a768e6b06776077a5db62df376285bc6a"></a>
### Function GetCoreVersion

![][public]


```cpp
std::string simulation_framework::core::GetCoreVersion()
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::GetCoreVersion"}]}`
-->

<a id="version_8h_1a563c5bcaf61efc6d07d644f997b55fe3"></a>
### Function GetCorePublicVersion

![][public]


```cpp
std::string simulation_framework::core::GetCorePublicVersion()
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::GetCorePublicVersion"}]}`
-->

<a id="version_8h_1a73f64a709c3af4245b457706ef762a64"></a>
### Function GetCoreInternalVersion

![][public]


```cpp
std::string simulation_framework::core::GetCoreInternalVersion()
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::GetCoreInternalVersion"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)