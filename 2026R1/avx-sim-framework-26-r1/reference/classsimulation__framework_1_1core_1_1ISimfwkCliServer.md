# Class simulation_framework::core::ISimfwkCliServer

![][C++]
![][public]

**Definition**: `core/service/grpc/cli/i_cli_server.h` (line 24)

class [ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer)

simulation framework cli server interface. The server holds an entity of simulation framework and forward user command to it.

**Inherited by**:

* [simulation_framework::core::SimfwkCliServer](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer)

## Members

* [BindSimRunner](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ac0aa11b3e94c4c6280ff4f45d247712c)
* [GetServerAddress](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ad6d63581bc9214f61ed06c0c55747b28)
* [WaitForCommand](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1a762214a4e54414550af137c57b29d174)
* [~ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ae0b305b84f2c9c13f7bafa2b258c2b4d)

## Public functions

<a id="classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ae0b305b84f2c9c13f7bafa2b258c2b4d"></a>
### Function ~ISimfwkCliServer

![][public]


```cpp
virtual simulation_framework::core::ISimfwkCliServer::~ISimfwkCliServer()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimfwkCliServer::~ISimfwkCliServer"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ac0aa11b3e94c4c6280ff4f45d247712c"></a>
### Function BindSimRunner

![][public]


```cpp
virtual void simulation_framework::core::ISimfwkCliServer::BindSimRunner(std::unique_ptr< simulation_framework::core::ISimRunner > sim_runner)=0
```








**Parameters**:

* std::unique_ptr< [simulation_framework::core::ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner) > **sim_runner**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [BindSimRunner](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1a2298836e929027f610ee47cc6596616d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimfwkCliServer::BindSimRunner"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimfwkCliServer_1a762214a4e54414550af137c57b29d174"></a>
### Function WaitForCommand

![][public]


```cpp
virtual void simulation_framework::core::ISimfwkCliServer::WaitForCommand()=0
```








**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [WaitForCommand](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1ab9d3d3b02f9601efb7c4c979ffccce06)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimfwkCliServer::WaitForCommand"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ad6d63581bc9214f61ed06c0c55747b28"></a>
### Function GetServerAddress

![][public]


```cpp
virtual std::string simulation_framework::core::ISimfwkCliServer::GetServerAddress()=0
```








**Return type**: std::string

**Reimplemented by**:

* [GetServerAddress](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1a8f16cb74b31d87361ee4da1b5c7ab9da)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimfwkCliServer::GetServerAddress"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__cli__server_8h"},"children":[{"type":"text","text":"i_cli_server.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)