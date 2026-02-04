# Class simulation_framework::core::Cli

![][C++]
![][public]

**Definition**: `core/service/cli/cli.h` (line 25)

Handles the decision to start the simulation framework.

The <code>[Cli](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli)</code> class is responsible for determining if the simulation framework runner (<code>[ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner)</code>) should be initialized and started based on the simulation parameters derived from command-line arguments. It can also interact with the CLI server if enabled. 

**See also**: [ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner), [ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer)

## Members

* [Cli](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli_1a807aa80e06431cbd27fe12c4856b668f)
* [Execute](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli_1a39259f9147a9151d89d372d4fa9f278f)

## Public functions

<a id="classsimulation__framework_1_1core_1_1Cli_1a807aa80e06431cbd27fe12c4856b668f"></a>
### Function Cli

![][public]


```cpp
simulation_framework::core::Cli::Cli(std::unique_ptr< ISimRunner > sim_runner, std::unique_ptr< ISimfwkCliServer > simfwk_cli_server=nullptr)
```


Constructs the <code>[Cli](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli)</code> object.

**Parameters**:

* **sim_runner**: Instance of the simulation runner controlled by the CLI.
* **simfwk_cli_server**: Optional instance of the CLI server for CLI controller mode.



**Parameters**:

* std::unique_ptr< [ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner) > **sim_runner**
* std::unique_ptr< [ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer) > **simfwk_cli_server** = [nullptr](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Cli::Cli"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Cli_1a39259f9147a9151d89d372d4fa9f278f"></a>
### Function Execute

![][public]


```cpp
bool simulation_framework::core::Cli::Execute()
```


Executes the appropriate function based on the parsed parameters.

This function decides which action to take, such as running the simulation or performing other tasks, based on the parameters provided during initialization. 

**Returns**:

<code>true</code> if execution is successful; otherwise, <code>false</code>.



**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Cli::Execute"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"cli_8h"},"children":[{"type":"text","text":"cli.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)