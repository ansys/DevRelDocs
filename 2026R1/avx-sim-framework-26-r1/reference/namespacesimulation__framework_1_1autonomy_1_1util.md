# Namespace simulation_framework::autonomy::util

![][C++]

**Definition**: `autonomy/simulation/sim_instance/simulation_input_utils.h` (line 25)





## Functions

<a id="simulation__input__utils_8h_1a86f70142a2bd2a72289fc3e0a26f1a9f"></a>
### Function GetCustomizedParameterByName

![][public]


```cpp
std::optional< std::string > simulation_framework::autonomy::util::GetCustomizedParameterByName(const std::string &name, const core::SimulationParameters &core_parameters)
```


Retrieves the file path for a specified input file.

Searches for the file path corresponding to the given input file name within the provided simulation parameters.





This function is designed to locate and return file paths dynamically based on the configuration specified in the simulation parameters.






**Parameters**:

* **name**: The name of the input file to retrieve.
* **core_parameters**: The simulation parameters containing the file mappings or paths.


**Returns**:

The full path of the input file as a string, if exists.


**Exceptions**:

* **std::runtime_error**: if the file path for the given name cannot be found.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **core_parameters**

**Return type**: std::optional< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::util::GetCustomizedParameterByName"}]}`
-->

<a id="simulation__input__utils_8h_1ac3cccfc541b0992295896d732876f335"></a>
### Function GetInputOpenScenarioFilePath

![][public]


```cpp
std::string simulation_framework::autonomy::util::GetInputOpenScenarioFilePath(const core::SimulationParameters &core_parameters)
```


Retrieves the file path for the OpenScenario input file.

Fetches the path of the OpenScenario file defined in the simulation parameters. This file typically contains scenario configurations in OpenScenario format, used to define simulation scenarios.






**Parameters**:

* **core_parameters**: The simulation parameters containing the OpenScenario file path.


**Returns**:

The full path of the OpenScenario file as a string.


**Exceptions**:

* **std::runtime_error**: if the file path cannot be determined.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **core_parameters**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::util::GetInputOpenScenarioFilePath"}]}`
-->

<a id="simulation__input__utils_8h_1a32c5e8aee385054142e14cde2b40f957"></a>
### Function GetGtGenUserSettingsFilePath

![][public]


```cpp
std::string simulation_framework::autonomy::util::GetGtGenUserSettingsFilePath(const core::SimulationParameters &core_parameters)
```


Retrieves the file path for the GT-Gen user settings file.

Fetches the path of the user settings file specific to the GT-Gen simulation environment. This file contains configurations or preferences for the user.






**Parameters**:

* **core_parameters**: The simulation parameters containing the user settings file path.


**Returns**:

The full path of the GT-Gen user settings file as a string.


**Exceptions**:

* **std::runtime_error**: if the file path cannot be determined.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **core_parameters**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::util::GetGtGenUserSettingsFilePath"}]}`
-->

<a id="simulation__input__utils_8h_1a18c536d8f920c54958e743434aa60b4f"></a>
### Function GetDriverInputFilePath

![][public]


```cpp
std::string simulation_framework::autonomy::util::GetDriverInputFilePath(const core::SimulationParameters &core_parameters)
```


Retrieves the file path for the driver input file.

Fetches the path of the input file containing driver-specific configurations or input commands for the simulation.






**Parameters**:

* **core_parameters**: The simulation parameters containing the driver input file path.


**Returns**:

The full path of the driver input file as a string.


**Exceptions**:

* **std::runtime_error**: if the file path cannot be determined.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **core_parameters**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::util::GetDriverInputFilePath"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)