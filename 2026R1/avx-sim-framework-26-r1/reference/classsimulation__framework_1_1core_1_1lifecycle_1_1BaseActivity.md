# Class simulation_framework::core::lifecycle::BaseActivity

![][C++]
![][public]

**Definition**: `core/lifecycle/activity/base_activity.h` (line 75)

This is the basic implementation of [IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity) interface. Inheriting classes, i.e. a concrete simulation activity, should implement their logic in [ExecuteStep()](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aaf5d84e0430a2703b697eb867e8bf303) and add needed pub/sub in [AddPublisherAndSubscriber()](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aa898aa5e721f110f678994731a05aa6e) method.

To join the simulation, an activity is basic component which can publish/subscribe message through communication channel and be scheduled by user config as desired. This class is the base class for any other customized activity.





Example of creating inherited 'MyActivity' using 'MyLogic' library This activity is listening to the [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) 'TopicSubscribingOn' and providing [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) 'TopicToBePublished', with corresponding underlying message type MyMessageType_Sub and MyMessageType_Pub. 
```cpp
#include "core/lifecycle/activity/base_activity.h"
#include "my_logic.h"
class MyActivity : public BaseActivity
{
  public:
    MyActivity(const std::string& name,
               std::shared_ptr<CommunicationManager> communication_manager_ptr,
               SchedulerClientPtr scheduler_client,
               MyLogic my_logic) : core::lifecycle::BaseActivity(name, communication_manager_ptr, std::move(scheduler_client)),
                                   my_logic_(my_logic)

    ~MyActivity = default;

    void AddPublisherAndSubscriber() override
    {
        AddPublisher<core::Topic<MyMessageType_Pub>>(
            "TopicToBePublished", [&]() { return msg_pub_; }
        );
        AddSubscriber<core::Topic<MyMessageType_Sub>>(
            "TopicSubscribingOn", [&](const MyMessageType_Sub& msg) { msg_sub_ = msg; }
        );
    }
    void ExecuteStep() override
    {
        my_logic_.DoSomething();
        msg_pub_ = my_logic_.GetUpdatedMsg(msg_sub_);
    }

  private:
    MyLogic my_logic_;
    MyMessageType_Sub msg_sub_{};
    MyMessageType_Pub msg_pub_{};
};
```

**Inherits from**:

* [simulation_framework::core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)

**Inherited by**:

* [simulation_framework::core::lifecycle::FmuBaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity)

## Members

* [AddPublisher](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a33e63ce3d3f544b5bfef0e8955b81a81)
* [AddPublisherAndSubscriber](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aa898aa5e721f110f678994731a05aa6e)
* [AddSubscriber](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a680815941f7e02b42000251dc70e798b)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a95dfde5a91f76076db6bc011995dcee1)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a650b1e86ca7059ad464709ca0d06347f)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a4ccbf97b81ac7b2a43ceef2c151138e1)
* [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a8a0d6519c43db4cd308cbe2e62af2810)
* [ExecuteStep](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aaf5d84e0430a2703b697eb867e8bf303)
* [Finalize](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a9162ba92fb21fd805a6c72b1065b187c)
* [GetCurrentTimestamp](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2cfe6105cb8e660b2757e602d4fc1a87)
* [GetCustomizedParameters](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a56fe34c6d46420a6049b7ee19a7f8e1f)
* [GetCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2dcf170a633dad7ea1238489c6f9237c)
* [GetName](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a11d72f1e983f825e5d812224aa43c432)
* [GetSimulationOutputDirectory](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aeca0631080d2751212ad8958d16860e9)
* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a7373af65d0b4c133cb5de42bf2f88caf)
* [SetSimulationSettings](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3f7d19a88d57a2b77941db44fe0a4e65)
* [SetUpCommunication](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3355c18c8d6519f9649ec7de4274e645)
* [Shutdown](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1ac0a680a9bd6db9111ba085d641a16126)
* [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a45bf4108dc4b3b77b4ca997b824ea07f)
* [WaitForPubSubConnection](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aec1044c8ce73f976233c54e496740b04)
* [~BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aa52831f008141d199920090685f078fd)
* [~IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1aa2353eb3f2ef5955c1c3c2d1024c8c48)

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a95dfde5a91f76076db6bc011995dcee1"></a>
### Function BaseActivity

![][public]


```cpp
simulation_framework::core::lifecycle::BaseActivity::BaseActivity(const std::string &activity_name, std::shared_ptr< core::CommunicationManager > communication_manager_ptr, std::unique_ptr< scheduling::ISchedulerClient > scheduler_client)
```


Construct an [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity) to join simulation.

**Parameters**:

* **activity_name**: a unique name of activity in string, which is used as identifier for connections
* **communication_manager_ptr**: communication manager interface to enable activity join in the com-channel
* **scheduler_client**: the client which receives event from scheduler server



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* std::shared_ptr< [core::CommunicationManager](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > **communication_manager_ptr**
* std::unique_ptr< scheduling::ISchedulerClient > **scheduler_client**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::BaseActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a650b1e86ca7059ad464709ca0d06347f"></a>
### Function BaseActivity

![][public]


```cpp
simulation_framework::core::lifecycle::BaseActivity::BaseActivity(const std::string &activity_name, std::shared_ptr< core::CommunicationManager > communication_manager_ptr, std::unique_ptr< scheduling::ISchedulerClient > scheduler_client, std::chrono::milliseconds timeout)
```


Construct an [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity) to join simulation.

**Parameters**:

* **activity_name**: a unique name of activity in string, which is used as identifier for connections
* **communication_manager_ptr**: communication manager interface to enable activity join in the com-channel
* **scheduler_client**: the client which receives event from scheduler server
* **timeout**: timeout in milliseconds for event handling



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* std::shared_ptr< [core::CommunicationManager](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > **communication_manager_ptr**
* std::unique_ptr< scheduling::ISchedulerClient > **scheduler_client**
* std::chrono::milliseconds **timeout**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::BaseActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a4ccbf97b81ac7b2a43ceef2c151138e1"></a>
### Function BaseActivity

![][public]


```cpp
simulation_framework::core::lifecycle::BaseActivity::BaseActivity(const std::string &activity_name, const Topics &topics)
```


Construct an [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity) using RTIDDS communication to join simulation.

**Parameters**:

* **activity_name**: A unique name of activity in string, which is used as identifier for connections
* **topics**: Topics which this activity want to interact with, i.e. subscribe on or publish to



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Topics & **topics**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::BaseActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a8a0d6519c43db4cd308cbe2e62af2810"></a>
### Function BaseActivity

![][public]


```cpp
simulation_framework::core::lifecycle::BaseActivity::BaseActivity(const std::string &activity_name, const Topics &topics, std::chrono::milliseconds timeout)
```


Construct an [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity) using RTIDDS communication to join simulation.

**Parameters**:

* **activity_name**: A unique name of activity in string, which is used as identifier for connections
* **topics**: Topics which this activity want to interact with, i.e. subscribe on or publish to
* **timeout**: Timeout in millisecond to wait until an event successfully received or sent



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Topics & **topics**
* std::chrono::milliseconds **timeout**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::BaseActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aa52831f008141d199920090685f078fd"></a>
### Function ~BaseActivity

![][public]


```cpp
virtual simulation_framework::core::lifecycle::BaseActivity::~BaseActivity()
```


Destructor of an [BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity) class.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::~BaseActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a11d72f1e983f825e5d812224aa43c432"></a>
### Function GetName

![][public]
![][const]


```cpp
std::string simulation_framework::core::lifecycle::BaseActivity::GetName() const override
```




**Returns**:

the name of this activity



**Return type**: std::string

**Reimplements**: [GetName](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ab0dedc5b4b7007b92f95e3356d8808bf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::GetName"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3355c18c8d6519f9649ec7de4274e645"></a>
### Function SetUpCommunication

![][public]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::SetUpCommunication() final
```


Register this activity's bounding communications, managed by higher level. Modifying by inheriting classes is NOT allowed.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetUpCommunication](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a08c573b82ec098a7ff5e31d5d827a40f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::SetUpCommunication"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a45bf4108dc4b3b77b4ca997b824ea07f"></a>
### Function Step

![][public]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::Step() final
```


Calls the [ExecuteStep()](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aaf5d84e0430a2703b697eb867e8bf303) for internal logic and send/receive message from corresponding pub/sub, managed by higher level. Modifying by inheriting classes is NOT allowed.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Step](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a8ae00ca0fb6cf1116435bdbdfa573188)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::Step"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1ac0a680a9bd6db9111ba085d641a16126"></a>
### Function Shutdown

![][public]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::Shutdown() final
```




Active shutdown the simulation. Simulation will finish planned events before this and shutdown gracefully



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Shutdown](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a1753af46ca02f6d39442afa25ddca513)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::Shutdown"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2cfe6105cb8e660b2757e602d4fc1a87"></a>
### Function GetCurrentTimestamp

![][public]
![][const]


```cpp
time::Timestamp simulation_framework::core::lifecycle::BaseActivity::GetCurrentTimestamp() const final
```


Get current simulation timestamp.

**Returns**:

The current simulation timestamp



**Return type**: time::Timestamp

**Reimplements**: [GetCurrentTimestamp](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1af4306329bbb903f70891f1e01095fc37)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::GetCurrentTimestamp"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a2dcf170a633dad7ea1238489c6f9237c"></a>
### Function GetCycleTime

![][public]
![][const]


```cpp
std::chrono::milliseconds simulation_framework::core::lifecycle::BaseActivity::GetCycleTime() const final
```


Return cycle time of this activity as duration in milliseconds.

**Returns**:

The cycle time of this activity as duration in milliseconds



**Return type**: std::chrono::milliseconds

**Reimplements**: [GetCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a2434dec1d575d7f48305c09b4117a9c2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::GetCycleTime"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aeca0631080d2751212ad8958d16860e9"></a>
### Function GetSimulationOutputDirectory

![][public]
![][const]


```cpp
std::string simulation_framework::core::lifecycle::BaseActivity::GetSimulationOutputDirectory() const final
```


Return output directory of simulation as string.

**Returns**:

The output directory of simulation



**Return type**: std::string

**Reimplements**: [GetSimulationOutputDirectory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ad282fdd8de94e0990b2ef2068a3a136e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::GetSimulationOutputDirectory"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a56fe34c6d46420a6049b7ee19a7f8e1f"></a>
### Function GetCustomizedParameters

![][public]
![][const]


```cpp
const SimulationParameters::CustomizedParameters & simulation_framework::core::lifecycle::BaseActivity::GetCustomizedParameters() const final
```


Retrieves the customized parameters for the activity.

**Returns**:

A map of customized parameters. key is the name of the customized parameter, value is the value of the customized parameter in type of <code>std::string</code>.



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [SimulationParameters::CustomizedParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a25a000c4c4dfefb04ff71a796e06c787) &

**Reimplements**: [GetCustomizedParameters](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a14b69f84754dcd92d6b5eb49a8be8f33)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::GetCustomizedParameters"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a3f7d19a88d57a2b77941db44fe0a4e65"></a>
### Function SetSimulationSettings

![][public]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::SetSimulationSettings(const scheduling::SimulationSettings &sim_settings) final
```


Set the simulation settings for this activity.

**Parameters**:

* **sim_settings**: The simulation settings struct



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) scheduling::SimulationSettings & **sim_settings**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetSimulationSettings](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1a8ae386596598777d6ddfe4ae787ef5c4)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::SetSimulationSettings"}]}`
-->

## Protected functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a7373af65d0b4c133cb5de42bf2f88caf"></a>
### Function Init

![][protected]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::Init() override
```


Initialize this activity with customized action.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ada1e5ab14eb5c159068ccbfc1f8e559c)

**Reimplemented by**:

* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a7f2b0dba2e396cdd58cc414f3a52848c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a9162ba92fb21fd805a6c72b1065b187c"></a>
### Function Finalize

![][protected]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::Finalize() override
```


Finalize this activity with customized action.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Finalize](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity_1ae83ad9c4711dfce8cf962da06e0a9193)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::Finalize"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aaf5d84e0430a2703b697eb867e8bf303"></a>
### Function ExecuteStep

![][protected]


```cpp
virtual void simulation_framework::core::lifecycle::BaseActivity::ExecuteStep()=0
```


Core operation of customer logic in a concrete activity.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [ExecuteStep](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1a412b94d22b964d6762321464970c6d34)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::ExecuteStep"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1aa898aa5e721f110f678994731a05aa6e"></a>
### Function AddPublisherAndSubscriber

![][protected]


```cpp
virtual void simulation_framework::core::lifecycle::BaseActivity::AddPublisherAndSubscriber()=0
```


Addition of Pub/Sub into a concrete activity.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [AddPublisherAndSubscriber](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity_1ab6db7c5859ed2d69aaa518545f6eaa30)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::AddPublisherAndSubscriber"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a33e63ce3d3f544b5bfef0e8955b81a81"></a>
### Function AddPublisher

![][protected]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::AddPublisher(const core::TopicId &topic_id, typename Topic::PublisherCallback callback)
```


Template method which allows user to add one publisher pushing message to the given [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic).

**Parameters**:

* **topic_id**: the name of [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) in string
* **callback**: publisher callback function



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) core::TopicId & **topic_id**
* [typename](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Topic::PublisherCallback **callback**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"typename"}]},{"type":"text","text":" "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"Topic"}]}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::AddPublisher"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity_1a680815941f7e02b42000251dc70e798b"></a>
### Function AddSubscriber

![][protected]


```cpp
void simulation_framework::core::lifecycle::BaseActivity::AddSubscriber(const core::TopicId &topic_id, typename Topic::SubscriberMessageCallback callback)
```


Template method which allows user to add one subscriber receiving message to the given [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic).

**Parameters**:

* **topic_id**: the name of [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) in string
* **callback**: subscriber callback function



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) core::TopicId & **topic_id**
* [typename](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Topic::SubscriberMessageCallback **callback**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"typename"}]},{"type":"text","text":" "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"Topic"}]}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::BaseActivity::AddSubscriber"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)