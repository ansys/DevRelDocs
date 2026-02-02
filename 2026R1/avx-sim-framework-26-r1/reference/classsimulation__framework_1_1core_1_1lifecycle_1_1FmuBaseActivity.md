# Class simulation_framework::core::lifecycle::FmuBaseActivity

![][C++]
![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_base_activity.h` (line 30)

An activity that subscribes to messages to input to an FMU and publishes the FMU output.

The configuration of the topics and which FMU variables they contain is given by the [FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig). 

**See also**: [FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig)

**Inherits from**:

* [simulation_framework::core::lifecycle::BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity)

## Members

* [AddPublisher](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a33e63ce3d3f544b5bfef0e8955b81a81)
* [AddPublisherAndSubscriber](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1ab6db7c5859ed2d69aaa518545f6eaa30)
* [AddPublisherForTopic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a00befd5e3be463458b3f8e74067b71e4)
* [AddSubscriber](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a680815941f7e02b42000251dc70e798b)
* [AddSubscriberForTopic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a9152b8c7429871e44fd191ab9aa026b9)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a95dfde5a91f76076db6bc011995dcee1)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a650b1e86ca7059ad464709ca0d06347f)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a4ccbf97b81ac7b2a43ceef2c151138e1)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a8a0d6519c43db4cd308cbe2e62af2810)
* [DecodeBytesMessage](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a1f936da3169a9b8486fcaacecfe0e202)
* [DecodeMessage](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a4fd1018c270deb9e4c4aebb238a964b6)
* [EncodeBytesMessage](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1ad210963059911414220f275bd1682579)
* [EncodeMessage](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1aa1b8aea2a86d97ed5e5d4abcd30a527f)
* [ExecuteStep](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a412b94d22b964d6762321464970c6d34)
* [Finalize](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a9162ba92fb21fd805a6c72b1065b187c)
* [fmu_config_](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a55ba412be4a52a61cc7c68207b8f3d88)
* [fmu_logic_](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a8c713dd64a2a30af59a6908caf3bc14b)
* [FmuBaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1adbe15957d5e1d89197264acc6f012656)
* [GetCurrentTimestamp](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2cfe6105cb8e660b2757e602d4fc1a87)
* [GetCustomizedParameters](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a56fe34c6d46420a6049b7ee19a7f8e1f)
* [GetCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2dcf170a633dad7ea1238489c6f9237c)
* [GetName](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a11d72f1e983f825e5d812224aa43c432)
* [GetSimulationOutputDirectory](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aeca0631080d2751212ad8958d16860e9)
* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a7f2b0dba2e396cdd58cc414f3a52848c)
* [init_param_topics_to_var_map_](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a13d382fb97f13f8a7fb8ffb6d9a8b666)
* [input_topics_to_var_map_](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a9c5e9745f447f179dffaff037cb09338)
* [output_topics_to_var_map_](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1ab2ff48df96a66b5816e41c0a3c7f6194)
* [SetSimulationSettings](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3f7d19a88d57a2b77941db44fe0a4e65)
* [SetUpCommunication](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3355c18c8d6519f9649ec7de4274e645)
* [Shutdown](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1ac0a680a9bd6db9111ba085d641a16126)
* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a45bf4108dc4b3b77b4ca997b824ea07f)
* [step_size_](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a5645715270857e72b39cc22475cee6d3)
* [~BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aa52831f008141d199920090685f078fd)
* [~IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1aa2353eb3f2ef5955c1c3c2d1024c8c48)

## Protected attributes

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a55ba412be4a52a61cc7c68207b8f3d88"></a>
### Variable fmu_config_

![][protected]

**Definition**: `core/lifecycle/fmu_activity/fmu_base_activity.h` (line 89)


```cpp
FmuConfig simulation_framework::core::lifecycle::FmuBaseActivity::fmu_config_ {}
```


A struct containing information about topics and corresponding FMU variables.





**Type**: [FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::fmu_config_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a8c713dd64a2a30af59a6908caf3bc14b"></a>
### Variable fmu_logic_

![][protected]

**Definition**: `core/lifecycle/fmu_activity/fmu_base_activity.h` (line 92)


```cpp
std::unique_ptr<IFmuLogic> simulation_framework::core::lifecycle::FmuBaseActivity::fmu_logic_
```


A pointer to the logic that manages simulating the FMU.





**Type**: std::unique_ptr< [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::fmu_logic_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a5645715270857e72b39cc22475cee6d3"></a>
### Variable step_size_

![][protected]

**Definition**: `core/lifecycle/fmu_activity/fmu_base_activity.h` (line 95)


```cpp
std::optional<double> simulation_framework::core::lifecycle::FmuBaseActivity::step_size_
```


The step size to increment the FMU's independent variable.





**Type**: std::optional< [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::step_size_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a13d382fb97f13f8a7fb8ffb6d9a8b666"></a>
### Variable init_param_topics_to_var_map_

![][protected]

**Definition**: `core/lifecycle/fmu_activity/fmu_base_activity.h` (line 98)


```cpp
FmuTopicToVarMap simulation_framework::core::lifecycle::FmuBaseActivity::init_param_topics_to_var_map_ {}
```


A mapping of intialization parameter topics to FMU variables.





**Type**: FmuTopicToVarMap

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::init_param_topics_to_var_map_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a9c5e9745f447f179dffaff037cb09338"></a>
### Variable input_topics_to_var_map_

![][protected]

**Definition**: `core/lifecycle/fmu_activity/fmu_base_activity.h` (line 101)


```cpp
FmuTopicToVarMap simulation_framework::core::lifecycle::FmuBaseActivity::input_topics_to_var_map_ {}
```


A mapping of input topics to FMU variables.





**Type**: FmuTopicToVarMap

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::input_topics_to_var_map_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1ab2ff48df96a66b5816e41c0a3c7f6194"></a>
### Variable output_topics_to_var_map_

![][protected]

**Definition**: `core/lifecycle/fmu_activity/fmu_base_activity.h` (line 104)


```cpp
FmuTopicToVarMap simulation_framework::core::lifecycle::FmuBaseActivity::output_topics_to_var_map_ {}
```


A mapping of output topics to FMU variables.





**Type**: FmuTopicToVarMap

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::output_topics_to_var_map_"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1adbe15957d5e1d89197264acc6f012656"></a>
### Function FmuBaseActivity

![][public]


```cpp
simulation_framework::core::lifecycle::FmuBaseActivity::FmuBaseActivity(const std::string &name, std::shared_ptr< CommunicationManager > communication_manager, std::unique_ptr< scheduling::ISchedulerClient > scheduler_client, FmuConfig fmu_config, std::unique_ptr< IFmuLogic > fmu_logic, const std::optional< double > step_size=std::nullopt)
```


Construct an FMU activity to join the simulation.

**Parameters**:

* **name**: A unique name for the activity, which is used as identifier for connections
* **communication_manager**: Communication Manager to enable the activity join in the communication channel
* **scheduler_client**: The client which receives events from the scheduler server
* **fmu_config**: A struct containing information about topics and corresponding FMU variables
* **fmu_logic**: An [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) implementation responsible for setting up and simulating the FMU
* **step_size**: A fixed step size to increment the FMU's independent variable. if not given, the step size will be retrieved from json scheduling configuration



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **name**
* std::shared_ptr< [CommunicationManager](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > **communication_manager**
* std::unique_ptr< scheduling::ISchedulerClient > **scheduler_client**
* [FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig) **fmu_config**
* std::unique_ptr< [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) > **fmu_logic**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::optional< [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > **step_size** = std::nullopt 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::FmuBaseActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a412b94d22b964d6762321464970c6d34"></a>
### Function ExecuteStep

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::FmuBaseActivity::ExecuteStep() override
```


Sets FMU inputs from subscribed topics, steps the FMU, and gets FMU outputs ready for published topics.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [ExecuteStep](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aaf5d84e0430a2703b697eb867e8bf303)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::ExecuteStep"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a7f2b0dba2e396cdd58cc414f3a52848c"></a>
### Function Init

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::FmuBaseActivity::Init() override
```


Initialize FMU parameters.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a7373af65d0b4c133cb5de42bf2f88caf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1ab6db7c5859ed2d69aaa518545f6eaa30"></a>
### Function AddPublisherAndSubscriber

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::FmuBaseActivity::AddPublisherAndSubscriber() override
```


Adds publishers and subscribers of rtidds::FmuMessage based on information from [FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig).





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [AddPublisherAndSubscriber](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aa898aa5e721f110f678994731a05aa6e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::AddPublisherAndSubscriber"}]}`
-->

## Protected functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a4fd1018c270deb9e4c4aebb238a964b6"></a>
### Function DecodeMessage

![][protected]
![][const]


```cpp
FmuInOutMap simulation_framework::core::lifecycle::FmuBaseActivity::DecodeMessage(const rtidds::FmuMessage &message) const
```


Put the received FmuMessage values in a format understood by the [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) implementation.

**Parameters**:

* **message**: The published message which was received


**Returns**:

A map of variable names to variable values to be sent to the FMU



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) rtidds::FmuMessage & **message**

**Return type**: FmuInOutMap

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::DecodeMessage"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1aa1b8aea2a86d97ed5e5d4abcd30a527f"></a>
### Function EncodeMessage

![][protected]
![][const]


```cpp
rtidds::FmuMessage simulation_framework::core::lifecycle::FmuBaseActivity::EncodeMessage(const FmuInOutMap &outputs) const
```


Put the outputs from the [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) implementation into an FmuMessage to be published.

**Parameters**:

* **outputs**: A map of variable names to variable values from the FMU


**Returns**:

The message to be published



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **outputs**

**Return type**: rtidds::FmuMessage

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::EncodeMessage"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a1f936da3169a9b8486fcaacecfe0e202"></a>
### Function DecodeBytesMessage

![][protected]
![][const]


```cpp
FmuInOutMap simulation_framework::core::lifecycle::FmuBaseActivity::DecodeBytesMessage(const rtidds::GenericBytesMessage &message) const
```


Put the received GenericBytes values in a format understood by the [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) implementation.

**Parameters**:

* **message**: The published message which was received


**Returns**:

A map of variable names to variable values to be sent to the FMU



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) rtidds::GenericBytesMessage & **message**

**Return type**: FmuInOutMap

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::DecodeBytesMessage"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1ad210963059911414220f275bd1682579"></a>
### Function EncodeBytesMessage

![][protected]
![][const]


```cpp
rtidds::GenericBytesMessage simulation_framework::core::lifecycle::FmuBaseActivity::EncodeBytesMessage(const FmuInOutMap &outputs) const
```


Put the outputs from the [IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic) implementation into an GenericBytes to be published.

**Parameters**:

* **outputs**: A map of variable names to variable values from the FMU


**Returns**:

The message to be published



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **outputs**

**Return type**: rtidds::GenericBytesMessage

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::EncodeBytesMessage"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a9152b8c7429871e44fd191ab9aa026b9"></a>
### Function AddSubscriberForTopic

![][protected]


```cpp
void simulation_framework::core::lifecycle::FmuBaseActivity::AddSubscriberForTopic(const std::string &topic_name, FmuInOutMap &var_map)
```


Helper to add a subscriber for a topic whose values should populate the provided variable map.

**Parameters**:

* **topic_name**: Name of the topic to subscribe to
* **var_map**: Map to be updated when messages arrive



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **topic_name**
* FmuInOutMap & **var_map**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::AddSubscriberForTopic"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a00befd5e3be463458b3f8e74067b71e4"></a>
### Function AddPublisherForTopic

![][protected]


```cpp
void simulation_framework::core::lifecycle::FmuBaseActivity::AddPublisherForTopic(const std::string &topic_name, const FmuInOutMap &var_map)
```


Helper to add a publisher for a topic whose values come from the provided variable map.

**Parameters**:

* **topic_name**: Name of the topic to publish to
* **var_map**: Map whose current values will be encoded and published



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **topic_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) FmuInOutMap & **var_map**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuBaseActivity::AddPublisherForTopic"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"fmu__base__activity_8h"},"children":[{"type":"text","text":"fmu_base_activity.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)