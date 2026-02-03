# Class simulation_framework::autonomy::cli::CliProvider

![][C++]
![][public]

**Definition**: `autonomy/cli/cli_provider/cli_provider.h` (line 71)

Provides a command-line interface for simulation execution via dependency injection.

This class facilitates the creation of a command-line executable that executes a simulation on a specific simulation instance. The simulation instance is provided through a concrete implementation of the <code>[ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator)</code> interface, enabling flexibility and modularity.





The design supports scenarios where different simulation instances need to be created dynamically based on the implementation of the <code>[ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator)</code>.






An example of executable creation using [CliProvider](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider).
**See also**: [ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator), [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)






```cpp
#include "autonomy/cli/cli_provider/cli_provider.h"
#include "your_sim_instance_creator.h"

enum CliReturnCode
{
    kSuccess = 0,
    kParserError = 1,
    kCliError = 2
};

int main(int argc, const char** argv)
{
    auto cli_provider = std::make_unique<autonomy::cli::CliProvider>(
        std::move(std::make_unique<YourSimInstanceCreator>()));

    if (cli_provider->Parse(argc, argv))
    {
        if (!cli_provider->GetCommandLineInterface()->Execute())
        {
            return CliReturnCode::kCliError;
        }
        return CliReturnCode::kSuccess;
    }

    return CliReturnCode::kParserError;
}
```

## Members

* [cli_](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1a89353709d46735be53952123878fb8e7)
* [CliProvider](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1aaa4a83f8ce6c7532b64621c25a646eb3)
* [core_parameters_](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1afb2c42c4fc3a5092bf95ae6909148f40)
* [GetCommandLineInterface](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1a5989884eebef1c6a32141f72b7842b9f)
* [GetCoreParameters](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1a632fd12769ad3ba2aecaf2d854602e9a)
* [Parse](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1abd689d5923a3218f0acb267f080ec591)
* [sim_instance_creator_](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1aec36a2507049d8c06cfcbabf914189b8)
* [~CliProvider](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1ad471556a9f2093e7678b580843827f12)

## Public functions

<a id="classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1aaa4a83f8ce6c7532b64621c25a646eb3"></a>
### Function CliProvider

![][public]


```cpp
simulation_framework::autonomy::cli::CliProvider::CliProvider(std::unique_ptr< ISimInstanceCreator > sim_instance_creator)
```


Construct [CliProvider](classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider.md#classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider) to execute simulation based on given instance through command line options or args.

**Parameters**:

* **sim_instance_creator**: An implementation of interface '[ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator)', showing how your simulation should be constructed



**Parameters**:

* std::unique_ptr< [ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator) > **sim_instance_creator**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::cli::CliProvider::CliProvider"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1ad471556a9f2093e7678b580843827f12"></a>
### Function ~CliProvider

![][public]


```cpp
simulation_framework::autonomy::cli::CliProvider::~CliProvider()=default
```


Default Destructor.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::cli::CliProvider::~CliProvider"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1a5989884eebef1c6a32141f72b7842b9f"></a>
### Function GetCommandLineInterface

![][public]


```cpp
const std::unique_ptr< core::Cli > & simulation_framework::autonomy::cli::CliProvider::GetCommandLineInterface()
```


Accesser of Cli reference.

**Returns**:

The reference of '[core::Cli](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli)' object to let you do execution or enable the cli controller



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::unique_ptr< [core::Cli](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli) > &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::cli::CliProvider::GetCommandLineInterface"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1a632fd12769ad3ba2aecaf2d854602e9a"></a>
### Function GetCoreParameters

![][public]
![][const]


```cpp
core::SimulationParameters simulation_framework::autonomy::cli::CliProvider::GetCoreParameters() const
```


Accesser of simulation parameters.

**Returns**:

The generic simulation parameters parsed from command line inputs



**Return type**: [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::cli::CliProvider::GetCoreParameters"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1cli_1_1CliProvider_1abd689d5923a3218f0acb267f080ec591"></a>
### Function Parse

![][public]


```cpp
bool simulation_framework::autonomy::cli::CliProvider::Parse(int argc, const char **argv)
```


Parses command-line arguments.

Processes the arguments passed from the process <code>main</code> function, allowing the application to configure or initialize based on the provided input. This function typically interprets options, flags, and positional arguments supplied via the command line.






**Parameters**:

* **argc**: The number of arguments passed to the program, including the executable name.
* **argv**: An array of C-style strings representing the arguments.


**Returns**:

<code>true</code> if the arguments were successfully parsed; otherwise, <code>false</code>.



**Parameters**:

* [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **argc**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) ** **argv**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::cli::CliProvider::Parse"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"cli__provider_8h"},"children":[{"type":"text","text":"cli_provider.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)