# Class simulation_framework::core::lifecycle::IActivityFactory

![][C++]
![][public]

**Definition**: `core/lifecycle/i_activity_factory/i_activity_factory.h` (line 30)

Interface for creating simulation activities.

The <code>[IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory)</code> interface provides methods for creating activity instances based on specified types and configurations. It also allows for managing the base cycle time of simulations. 

**See also**: [IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity), [FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig)

**Inherited by**:

* [simulation_framework::autonomy::ActivityFactory](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory)

## Members

* [Create](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a9ec94cdb7f7a92ff15ccee4e63dd0c3c)
* [CreateFmuActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a96c9a911627cd3dd1410e161eca05e63)
* [GetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a4ccd952c296850abe2efccad25634c4d)
* [SetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1ae79c188b8b5e40fc4bfb4e87f24a4a9d)
* [~IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1adf2fbce25a6e1ead3b04a8490dfdc498)

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1adf2fbce25a6e1ead3b04a8490dfdc498"></a>
### Function ~IActivityFactory

![][public]


```cpp
virtual simulation_framework::core::lifecycle::IActivityFactory::~IActivityFactory()=default
```


Virtual destructor for proper cleanup of derived classes.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivityFactory::~IActivityFactory"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a9ec94cdb7f7a92ff15ccee4e63dd0c3c"></a>
### Function Create

![][public]


```cpp
virtual std::unique_ptr< IActivity > simulation_framework::core::lifecycle::IActivityFactory::Create(const std::string &activity_name, const scheduling::SchedulerClientType type=scheduling::SchedulerClientType::kDUMMY)=0
```


Creates an activity instance based on the provided name and type.

This method is used to create a standard activity with the specified name and scheduler client type. 

**Parameters**:

* **activity_name**: The name of the activity to create.
* **type**: The type of the activity client, defaulting to <code>SchedulerClientType::kDUMMY</code>.


**Returns**:

A unique pointer to the created <code>[IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)</code> instance.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) scheduling::SchedulerClientType **type** = scheduling::SchedulerClientType::kDUMMY 

**Return type**: std::unique_ptr< [IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity) >

**Reimplemented by**:

* [Create](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1aadc073761ddca70660c778b109cd8f2a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivityFactory::Create"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a96c9a911627cd3dd1410e161eca05e63"></a>
### Function CreateFmuActivity

![][public]


```cpp
virtual std::unique_ptr< IActivity > simulation_framework::core::lifecycle::IActivityFactory::CreateFmuActivity(const std::string &activity_name, const FmuConfig &fmu_config, const scheduling::SchedulerClientType type=scheduling::SchedulerClientType::kDUMMY)=0
```


Creates an FMU-based activity instance.

This method creates an activity based on the provided FMU (Functional Mock-up Unit) configuration. 

**Parameters**:

* **activity_name**: The name of the FMU activity to create.
* **fmu_config**: The FMU configuration details.
* **type**: The type of the activity client, defaulting to <code>SchedulerClientType::kDUMMY</code>.


**Returns**:

A unique pointer to the created FMU-based <code>[IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)</code> instance.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig) & **fmu_config**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) scheduling::SchedulerClientType **type** = scheduling::SchedulerClientType::kDUMMY 

**Return type**: std::unique_ptr< [IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity) >

**Reimplemented by**:

* [CreateFmuActivity](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1ae25fb9a822daf739975964cdafb610d2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivityFactory::CreateFmuActivity"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a4ccd952c296850abe2efccad25634c4d"></a>
### Function GetSimulationBaseCycleTime

![][public]
![][const]


```cpp
virtual time::milliseconds simulation_framework::core::lifecycle::IActivityFactory::GetSimulationBaseCycleTime() const =0
```


Retrieves the simulation's base cycle time.

The base cycle time determines the frequency of activity execution in the simulation. 

**Returns**:

The base cycle time as a duration in milliseconds.



**Return type**: time::milliseconds

**Reimplemented by**:

* [GetSimulationBaseCycleTime](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a94f462204396f9cb530415976df06210)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivityFactory::GetSimulationBaseCycleTime"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1ae79c188b8b5e40fc4bfb4e87f24a4a9d"></a>
### Function SetSimulationBaseCycleTime

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::IActivityFactory::SetSimulationBaseCycleTime(const time::milliseconds &time)=0
```


Sets the simulation's base cycle time.

Adjusts the frequency of activity execution by updating the base cycle time. 

**Parameters**:

* **time**: The new base cycle time as a duration in milliseconds.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) time::milliseconds & **time**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SetSimulationBaseCycleTime](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1affd15ea8f52128efdef54859ed514dc7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::IActivityFactory::SetSimulationBaseCycleTime"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__activity__factory_8h"},"children":[{"type":"text","text":"i_activity_factory.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)