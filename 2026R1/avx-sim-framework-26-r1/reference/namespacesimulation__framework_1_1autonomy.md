# Namespace simulation_framework::autonomy

![][C++]

**Definition**: `autonomy/simulation/activity_factory/activity_factory.h` (line 23)





## Child namespaces

* [simulation_framework::autonomy::cli](namespacesimulation__framework_1_1autonomy_1_1cli.md#namespacesimulation__framework_1_1autonomy_1_1cli)
* [simulation_framework::autonomy::communication](namespacesimulation__framework_1_1autonomy_1_1communication.md#namespacesimulation__framework_1_1autonomy_1_1communication)
* [simulation_framework::autonomy::topic_registry](namespacesimulation__framework_1_1autonomy_1_1topic__registry.md#namespacesimulation__framework_1_1autonomy_1_1topic__registry)
* [simulation_framework::autonomy::util](namespacesimulation__framework_1_1autonomy_1_1util.md#namespacesimulation__framework_1_1autonomy_1_1util)

## Classes

* [simulation_framework::autonomy::ActivityFactory](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory)
* [simulation_framework::autonomy::AutonomySimInstanceCreator](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator)
* [simulation_framework::autonomy::ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator)
* [simulation_framework::autonomy::SimulationCompletionChecker](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker)

## Variables

<a id="simulation__input__definition_8h_1acb5213eea78ecb37953d8c2199b57a54"></a>
### Variable kOpenScenarioFileName

![][public]
![][static]

**Definition**: `autonomy/simulation/sim_instance/simulation_input_definition.h` (line 26)


```cpp
const std::string simulation_framework::autonomy::kOpenScenarioFileName {"open_scenario_file"}
```


Name of the OpenScenario file.

Represents the name used in the input files of [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) for the OpenScenario file 
?> This is a static constant string.



**See also**: [https://www.openscenario.org](https://www.openscenario.org) for more information on OpenScenario.



**Type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::kOpenScenarioFileName"}]}`
-->

<a id="simulation__input__definition_8h_1a063616f6ad0d8e7987102b21a8cb5e3e"></a>
### Variable kGtGenUserSettingsFileName

![][public]
![][static]

**Definition**: `autonomy/simulation/sim_instance/simulation_input_definition.h` (line 32)


```cpp
const std::string simulation_framework::autonomy::kGtGenUserSettingsFileName {"user_settings_file"}
```


Name of the GT-Gen user settings file.

Represents the name used in the input files of [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) for the user-specific settings file of the GT-Gen simulator 
?> This is a static constant string.



**Type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::kGtGenUserSettingsFileName"}]}`
-->

<a id="simulation__input__definition_8h_1a3b7dbb9e16e186458301ee764279ea69"></a>
### Variable kDriverInputFileName

![][public]
![][static]

**Definition**: `autonomy/simulation/sim_instance/simulation_input_definition.h` (line 38)


```cpp
const std::string simulation_framework::autonomy::kDriverInputFileName {"driver_input_file"}
```


Name of the driver input file.

Represents the name used in the input files of [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) for file containing driver-specific configurations or inputs for the simulation. 
?> This is a static constant string.



**Type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::kDriverInputFileName"}]}`
-->

<a id="simulation__input__definition_8h_1acf6d18fcb0645c838aeb07e726447c12"></a>
### Variable kDefaultDriverInputFilePath

![][public]
![][static]

**Definition**: `autonomy/simulation/sim_instance/simulation_input_definition.h` (line 43)


```cpp
const std::string simulation_framework::autonomy::kDefaultDriverInputFilePath {
    "/tmp/simulation_framework/[default_data](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)/driver_input_default.json"}
```


Name of the driver input file.

File containing driver-specific configurations or inputs for the simulation. This is used right now only for demonstration purposes.



**Type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::kDefaultDriverInputFilePath"}]}`
-->

<a id="simulation__input__definition_8h_1ad3b96b1989244b2ef3a73dce81b7e919"></a>
### Variable kDefaultDriverInputFileContent

![][public]
![][static]

**Definition**: `autonomy/simulation/sim_instance/simulation_input_definition.h` (line 50)


```cpp
const std::string simulation_framework::autonomy::kDefaultDriverInputFileContent = [R"](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)(
{
    "driverInput": [
        {
            "defaultValue": "0",
            "inputSequence": [
                {
                    "endTime": 3.0,
                    "startTime": 1.0,
                    "value": "1"
                }
            ],
            "name": "dummy"
        }
    ]
})"
```


Content of default driver input file.

default content will be dumped into file if this is required by simulation (dummy_driver_activity is used) but not given by user in simulation config. 
?> This is a static constant string.



**Type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::kDefaultDriverInputFileContent"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)