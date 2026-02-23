# Structure simulation_framework::core::SimulationParameters

![][C++]
![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 22)

The [SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) struct encapsulates parameters related to simfwk-core configuration.



## Members

* [breakpoints_file_path](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a8d443b6771dafc576ce1138f399e2760)
* [cli_control_grpc_address](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1af8a90b2bef8680b69a15813e60c93404)
* [cli_control_mode_enabled](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a0b5db8592c55e9a1c4eb17eae6d23283)
* [customized_parameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a1aabfd1ab24a9fec7079fe8bc391060b)
* [CustomizedParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a25a000c4c4dfefb04ff71a796e06c787)
* [debugger_enabled](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a045453a8cf2bac1ca819d5c49e5c9863)
* [id](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a1d05a88de7c8c3ff63adf06a52f53c7d)
* [kMaxCustomizedParamNameLength](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1af9f3c73a22e76a7236e6f3300048a8f1)
* [kMaxCustomizedParamValueLength](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a95b40e23aafac5285a11f2bf2dfeb84a)
* [log_level](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a394b1d58a15a471682013c63f4e37d13)
* [output_directory](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a3dc188eb45de6e1481b6ce35ce773588)
* [scheduler_event_timeout](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a234596a492675e46f8c4c0900768093d)
* [scheduling_config](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1ad04340b459fca0559a426a198593af73)
* [simulation_config](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a2714b6d1f312742f94dc3222ac760fa9)
* [timescale_factor](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1aca58e1bd9cc396ed5b520495c61f818a)
* [version](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a394360d7e19a61151974fa528f4f1a2a)

## Public types

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a25a000c4c4dfefb04ff71a796e06c787"></a>
### Typedef CustomizedParameters

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 28)


```cpp
using simulation_framework::core::SimulationParameters::CustomizedParameters =  std::unordered_map<std::string, std::string>
```


A definition of customized parameters which simulation could use as input. key is the name of the customized parameter, value is the value of the customized parameter in type of <code>std::string</code>.





**Return type**: std::unordered_map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::CustomizedParameters"}]}`
-->

## Public static attributes

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1af9f3c73a22e76a7236e6f3300048a8f1"></a>
### Variable kMaxCustomizedParamNameLength

![][public]
![][static]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 33)


```cpp
constexpr size_t simulation_framework::core::SimulationParameters::kMaxCustomizedParamNameLength = 64
```


Maximum allowed lengths for customized parameter names and values, to prevent unintended behavior.





**Type**: [constexpr](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::kMaxCustomizedParamNameLength"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a95b40e23aafac5285a11f2bf2dfeb84a"></a>
### Variable kMaxCustomizedParamValueLength

![][public]
![][static]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 34)


```cpp
constexpr size_t simulation_framework::core::SimulationParameters::kMaxCustomizedParamValueLength = 1024
```








**Type**: [constexpr](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::kMaxCustomizedParamValueLength"}]}`
-->

## Public attributes

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a394360d7e19a61151974fa528f4f1a2a"></a>
### Variable version

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 38)


```cpp
std::string simulation_framework::core::SimulationParameters::version = ""
```


version A string representing the version of the simulation.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::version"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a394b1d58a15a471682013c63f4e37d13"></a>
### Variable log_level

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 43)


```cpp
std::string simulation_framework::core::SimulationParameters::log_level = "Debug"
```


A string indicating the logging level for the simulation.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::log_level"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a1d05a88de7c8c3ff63adf06a52f53c7d"></a>
### Variable id

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 48)


```cpp
std::string simulation_framework::core::SimulationParameters::id = ""
```


A string indicating a unique ID for the simulation.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::id"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a2714b6d1f312742f94dc3222ac760fa9"></a>
### Variable simulation_config

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 54)


```cpp
std::string simulation_framework::core::SimulationParameters::simulation_config = ""
```


A string indicating the path to the simulation configuration file for your built simulation application.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::simulation_config"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1ad04340b459fca0559a426a198593af73"></a>
### Variable scheduling_config

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 59)


```cpp
std::string simulation_framework::core::SimulationParameters::scheduling_config = ""
```


A string containing the scheduling configuration file path for the simulation.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::scheduling_config"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a3dc188eb45de6e1481b6ce35ce773588"></a>
### Variable output_directory

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 64)


```cpp
std::string simulation_framework::core::SimulationParameters::output_directory = "./"
```


A string indicating the path where simulation shall dump out files.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::output_directory"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a1aabfd1ab24a9fec7079fe8bc391060b"></a>
### Variable customized_parameters

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 69)


```cpp
CustomizedParameters simulation_framework::core::SimulationParameters::customized_parameters = {}
```


A map of customized parameters which simulation could use as input.





**Type**: [CustomizedParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a25a000c4c4dfefb04ff71a796e06c787)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::customized_parameters"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1af8a90b2bef8680b69a15813e60c93404"></a>
### Variable cli_control_grpc_address

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 75)


```cpp
std::string simulation_framework::core::SimulationParameters::cli_control_grpc_address = "localhost:50051"
```


A string specifying the gRPC address for CLI (Command Line Interface) control. The format should be "host:port".





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::cli_control_grpc_address"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a0b5db8592c55e9a1c4eb17eae6d23283"></a>
### Variable cli_control_mode_enabled

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 80)


```cpp
bool simulation_framework::core::SimulationParameters::cli_control_mode_enabled = [false](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)
```


A boolean indicating whether CLI control mode is enabled.





**Type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::cli_control_mode_enabled"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a234596a492675e46f8c4c0900768093d"></a>
### Variable scheduler_event_timeout

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 85)


```cpp
std::chrono::milliseconds simulation_framework::core::SimulationParameters::scheduler_event_timeout = std::chrono::milliseconds(60000)
```


A duration representing the timeout for scheduler events, expressed in milliseconds.





**Type**: std::chrono::milliseconds

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::scheduler_event_timeout"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1aca58e1bd9cc396ed5b520495c61f818a"></a>
### Variable timescale_factor

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 90)


```cpp
float simulation_framework::core::SimulationParameters::timescale_factor = -1.0f
```


A floating-point value representing the timescale factor for simulation time.





**Type**: [float](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::timescale_factor"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a045453a8cf2bac1ca819d5c49e5c9863"></a>
### Variable debugger_enabled

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 95)


```cpp
bool simulation_framework::core::SimulationParameters::debugger_enabled = [false](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)
```


A boolean indicating whether the Debugger is enabled.





**Type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::debugger_enabled"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1SimulationParameters_1a8d443b6771dafc576ce1138f399e2760"></a>
### Variable breakpoints_file_path

![][public]

**Definition**: `core/service/parameter/simulation_parameters.h` (line 100)


```cpp
std::string simulation_framework::core::SimulationParameters::breakpoints_file_path = ""
```


A string containing the path to the breakpoints file for the simulation.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimulationParameters::breakpoints_file_path"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)