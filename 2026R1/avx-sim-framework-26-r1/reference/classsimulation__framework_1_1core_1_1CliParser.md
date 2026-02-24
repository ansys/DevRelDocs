# Class simulation_framework::core::CliParser

![][C++]
![][public]

**Definition**: `core/service/cli/cli_parser.h` (line 25)

Command-line argument parser for simulation framework.

The <code>[CliParser](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser)</code> class provides generic functionality to parse command-line arguments and extract simulation-related parameters, configuration, and customized parameters. It helps in converting command-line input into structured simulation parameters. 

**See also**: [SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters), [SimulationParameters::CustomizedParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters_1a25a000c4c4dfefb04ff71a796e06c787)

## Members

* [ConvertCustomizedParameterFromArgs](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser_1a28eafcd480e1f5145b0d55d27fbc9677)
* [GetParserMessage](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser_1a8879b6b14d755297ec58b8d7af3361f8)
* [GetSimulationConfig](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser_1a2b6a9281bb2736988da72eae4e3a7bc8)
* [GetSimulationParameters](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser_1a475c151971317b0d7c2667053ea385a9)
* [Parse](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser_1acc52be4547ba139f22bae8d100523c5f)

## Public functions

<a id="classsimulation__framework_1_1core_1_1CliParser_1acc52be4547ba139f22bae8d100523c5f"></a>
### Function Parse

![][public]


```cpp
bool simulation_framework::core::CliParser::Parse(int argc, const char **argv)
```


Takes the command-line arguments and parses them.

Returns <code>false</code> if there is a parse error; otherwise, returns <code>true</code>. 

**Parameters**:

* **argc**: The number of arguments.
* **argv**: An array of argument strings.


**Returns**:

<code>true</code> if parsing is successful; <code>false</code> otherwise.



**Parameters**:

* [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **argc**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) ** **argv**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::CliParser::Parse"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1CliParser_1a8879b6b14d755297ec58b8d7af3361f8"></a>
### Function GetParserMessage

![][public]
![][const]


```cpp
std::string simulation_framework::core::CliParser::GetParserMessage() const
```


Returns information provided by the parser (e.g., errors or help), if applicable.

**Returns**:

A string containing parser information.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::CliParser::GetParserMessage"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1CliParser_1a475c151971317b0d7c2667053ea385a9"></a>
### Function GetSimulationParameters

![][public]
![][const]


```cpp
const SimulationParameters & simulation_framework::core::CliParser::GetSimulationParameters() const
```


Returns the simulation framework core parameters.

**Returns**:

A constant reference to <code>[SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)</code>.



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::CliParser::GetSimulationParameters"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1CliParser_1a2b6a9281bb2736988da72eae4e3a7bc8"></a>
### Function GetSimulationConfig

![][public]
![][const]


```cpp
std::string simulation_framework::core::CliParser::GetSimulationConfig() const
```


Returns the simulation configuration for the application level.

**Returns**:

A string containing the simulation configuration.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::CliParser::GetSimulationConfig"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)