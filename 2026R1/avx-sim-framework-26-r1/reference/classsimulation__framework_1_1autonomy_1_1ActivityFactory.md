# Class simulation_framework::autonomy::ActivityFactory

![][C++]
![][public]

**Definition**: `autonomy/simulation/activity_factory/activity_factory.h` (line 38)

Factory class for creating activities for autonomy simulation.

The <code>[ActivityFactory](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory)</code> implements the <code>IActivityFactory</code> interface to provide mechanisms for creating and managing simulation activities. It supports creating both generic and FMU-based activities, allowing for flexible integration into various simulation workflows.





The class also manages the base cycle time for the simulation, which can be retrieved or modified as needed.







**See also**: [core::lifecycle::IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory), [core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity), [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)

**Inherits from**:

* [simulation_framework::core::lifecycle::IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory)

## Members

* [ActivityFactory](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a95a2f9ae094f44fbbfec5391e5fbd97c)
* [base_cycle_time_](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a20e520974b59e234385790385389c0df)
* [Create](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1aadc073761ddca70660c778b109cd8f2a)
* [CreateFmuActivity](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1ae25fb9a822daf739975964cdafb610d2)
* [GetSimulationBaseCycleTime](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a94f462204396f9cb530415976df06210)
* [IfAvxSensorSettingsDefined](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a37defb0d81b110616e4870d0406c19eb)
* [SetSimulationBaseCycleTime](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1affd15ea8f52128efdef54859ed514dc7)
* [sim_params_](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a1bfaa8abb6c8f26b16b2e8af1f2d0f1a)
* [~IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1adf2fbce25a6e1ead3b04a8490dfdc498)

## Public functions

<a id="classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a95a2f9ae094f44fbbfec5391e5fbd97c"></a>
### Function ActivityFactory

![][public]


```cpp
simulation_framework::autonomy::ActivityFactory::ActivityFactory(const core::SimulationParameters &sim_params, const time::milliseconds &base_cycle_time=time::milliseconds{50})
```


Constructs an <code>[ActivityFactory](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory)</code> instance.

Initializes the factory with the simulation parameters and an optional base cycle time.






**Parameters**:

* **sim_params**: The simulation parameters used to configure activities created by this factory.
* **base_cycle_time**: The base cycle time for the simulation (default: 50 milliseconds).



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **sim_params**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) time::milliseconds & **base_cycle_time** = time::milliseconds{50} 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ActivityFactory::ActivityFactory"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1ActivityFactory_1aadc073761ddca70660c778b109cd8f2a"></a>
### Function Create

![][public]


```cpp
std::unique_ptr< core::lifecycle::IActivity > simulation_framework::autonomy::ActivityFactory::Create(const std::string &activity_name, const core::scheduling::SchedulerClientType type=core::scheduling::SchedulerClientType::kDUMMY) override
```


Creates a simulation activity.

Generates a simulation activity based on the provided name and scheduler client type. The activity is returned as a unique pointer for efficient memory management.






**Parameters**:

* **activity_name**: The name of the activity to create.
* **type**: The type of scheduler client to associate with the activity (default: <code>core::scheduling::SchedulerClientType::kDUMMY</code>).


**Returns**:

A unique pointer to the created <code>[core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)</code> instance.


**Exceptions**:

* **std::runtime_error**: if the activity creation fails.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) core::scheduling::SchedulerClientType **type** = core::scheduling::SchedulerClientType::kDUMMY 

**Return type**: std::unique_ptr< [core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity) >

**Reimplements**: [Create](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a9ec94cdb7f7a92ff15ccee4e63dd0c3c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ActivityFactory::Create"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1ActivityFactory_1ae25fb9a822daf739975964cdafb610d2"></a>
### Function CreateFmuActivity

![][public]


```cpp
std::unique_ptr< IActivity > simulation_framework::autonomy::ActivityFactory::CreateFmuActivity(const std::string &activity_name, const core::lifecycle::FmuConfig &fmu_config, const scheduling::SchedulerClientType type=scheduling::SchedulerClientType::kDUMMY) override
```


Creates an FMU-based simulation activity.

Generates a simulation activity specific to an FMU (Functional Mock-up Unit), using the provided FMU configuration and scheduler client type.






**Parameters**:

* **activity_name**: The name of the FMU activity to create.
* **fmu_config**: The configuration details for the FMU.
* **type**: The type of scheduler client to associate with the activity (default: <code>core::scheduling::SchedulerClientType::kDUMMY</code>).


**Returns**:

A unique pointer to the created FMU activity as an <code>IActivity</code> instance.


**Exceptions**:

* **std::runtime_error**: if the FMU activity creation fails.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::lifecycle::FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig) & **fmu_config**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) scheduling::SchedulerClientType **type** = scheduling::SchedulerClientType::kDUMMY 

**Return type**: std::unique_ptr< [IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity) >

**Reimplements**: [CreateFmuActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a96c9a911627cd3dd1410e161eca05e63)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ActivityFactory::CreateFmuActivity"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a94f462204396f9cb530415976df06210"></a>
### Function GetSimulationBaseCycleTime

![][public]
![][const]


```cpp
time::milliseconds simulation_framework::autonomy::ActivityFactory::GetSimulationBaseCycleTime() const override
```


Retrieves the simulation's base cycle time.

Provides the base cycle time used for scheduling and synchronization in the simulation.






**Returns**:

The simulation base cycle time in milliseconds.



**Return type**: time::milliseconds

**Reimplements**: [GetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1a4ccd952c296850abe2efccad25634c4d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ActivityFactory::GetSimulationBaseCycleTime"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1ActivityFactory_1affd15ea8f52128efdef54859ed514dc7"></a>
### Function SetSimulationBaseCycleTime

![][public]


```cpp
void simulation_framework::autonomy::ActivityFactory::SetSimulationBaseCycleTime(const time::milliseconds &time) override
```


Sets the simulation's base cycle time.

Updates the base cycle time used for scheduling and synchronization in the simulation.






**Parameters**:

* **time**: The new base cycle time in milliseconds.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) time::milliseconds & **time**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory_1ae79c188b8b5e40fc4bfb4e87f24a4a9d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ActivityFactory::SetSimulationBaseCycleTime"}]}`
-->

## Private functions

<a id="classsimulation__framework_1_1autonomy_1_1ActivityFactory_1a37defb0d81b110616e4870d0406c19eb"></a>
### Function IfAvxSensorSettingsDefined

![][private]
![][const]


```cpp
bool simulation_framework::autonomy::ActivityFactory::IfAvxSensorSettingsDefined(const std::string &activity_name, const std::vector< avx_sensor_cosim::AvxSensorSetting > &avx_sensor_settings) const
```


Check if the AVxcelerate Sensor settings are defined.





**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **activity_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::vector< avx_sensor_cosim::AvxSensorSetting > & **avx_sensor_settings**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ActivityFactory::IfAvxSensorSettingsDefined"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"activity__factory_8h"},"children":[{"type":"text","text":"activity_factory.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)