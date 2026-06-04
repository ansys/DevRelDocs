# Class simulation_framework::core::SimfwkCliServer

![][C++]
![][public]

**Definition**: `core/service/grpc/cli/cli_server.h` (line 27)

class [SimfwkCliServer](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer)

simulation framework cli server. The server holds an entity of simulation framework and forward user command to it.

**Inherits from**:

* [simulation_framework::core::ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer)

## Members

* [BindSimRunner](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1a2298836e929027f610ee47cc6596616d)
* [GetServerAddress](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1a8f16cb74b31d87361ee4da1b5c7ab9da)
* [SimfwkCliServer](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1a7d45c7dc24e6751063c9894339912009)
* [WaitForCommand](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1ab9d3d3b02f9601efb7c4c979ffccce06)
* [~ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ae0b305b84f2c9c13f7bafa2b258c2b4d)
* [~SimfwkCliServer](classsimulation__framework_1_1core_1_1SimfwkCliServer.md#classsimulation__framework_1_1core_1_1SimfwkCliServer_1a8cd61043746cbaa3ac45453188b51d99)

## Public functions

<a id="classsimulation__framework_1_1core_1_1SimfwkCliServer_1a7d45c7dc24e6751063c9894339912009"></a>
### Function SimfwkCliServer

![][public]


```cpp
simulation_framework::core::SimfwkCliServer::SimfwkCliServer(const std::string &server_address)
```


ctor of grpc cli server

**Parameters**:

* **server_address**: gRPC server address



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **server_address**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimfwkCliServer::SimfwkCliServer"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimfwkCliServer_1a8cd61043746cbaa3ac45453188b51d99"></a>
### Function ~SimfwkCliServer

![][public]


```cpp
simulation_framework::core::SimfwkCliServer::~SimfwkCliServer()
```


dtor of grpc cli server





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimfwkCliServer::~SimfwkCliServer"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimfwkCliServer_1ab9d3d3b02f9601efb7c4c979ffccce06"></a>
### Function WaitForCommand

![][public]


```cpp
void simulation_framework::core::SimfwkCliServer::WaitForCommand()
```


calling this to ensure the server is running and waiting for command to do any action.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [WaitForCommand](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1a762214a4e54414550af137c57b29d174)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimfwkCliServer::WaitForCommand"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimfwkCliServer_1a8f16cb74b31d87361ee4da1b5c7ab9da"></a>
### Function GetServerAddress

![][public]


```cpp
std::string simulation_framework::core::SimfwkCliServer::GetServerAddress()
```


get grpc server address of cli server





**Return type**: std::string

**Reimplements**: [GetServerAddress](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ad6d63581bc9214f61ed06c0c55747b28)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimfwkCliServer::GetServerAddress"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimfwkCliServer_1a2298836e929027f610ee47cc6596616d"></a>
### Function BindSimRunner

![][public]


```cpp
void simulation_framework::core::SimfwkCliServer::BindSimRunner(std::unique_ptr< simulation_framework::core::ISimRunner > sim_runner)
```


set sim runner pointer which to be controlled

**Parameters**:

* **sim_runner**: a pointer of simfwk runner. This is the mean entity of simulation framework and being hold by This is the mean entity of simulation framework and being hold by the simfwk cli server. Whatever user command is given by cli, will be passed into the runner and execute the logic



**Parameters**:

* std::unique_ptr< [simulation_framework::core::ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner) > **sim_runner**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [BindSimRunner](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer_1ac0aa11b3e94c4c6280ff4f45d247712c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimfwkCliServer::BindSimRunner"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"cli__server_8h"},"children":[{"type":"text","text":"cli_server.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)