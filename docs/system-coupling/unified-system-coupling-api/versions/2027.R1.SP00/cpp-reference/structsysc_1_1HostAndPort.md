# Structure sysc::HostAndPort

![][C++]
![][public]

**Definition**: `HostAndPort.hpp` (line 28)

Provide a structure for host and port for remote connections.

**Parameters**:

* **host**: remote server host name
* **port**: remote server port number

## Members

* [host](structsysc_1_1HostAndPort.md#structsysc_1_1HostAndPort_1a70a711dc66721bbc9d0e9862a01b0a7d)
* [HostAndPort](structsysc_1_1HostAndPort.md#structsysc_1_1HostAndPort_1ab46ff92d33f63082e405b16ab669ada3)
* [HostAndPort](structsysc_1_1HostAndPort.md#structsysc_1_1HostAndPort_1ad1f900b2d235b7633444d10b9f818afb)
* [HostAndPort](structsysc_1_1HostAndPort.md#structsysc_1_1HostAndPort_1ac95ec5248d3b89f0798b29a3a19ba231)
* [port](structsysc_1_1HostAndPort.md#structsysc_1_1HostAndPort_1a3615321654401d527d930495ee7d9c08)

## Public attributes

<a id="structsysc_1_1HostAndPort_1a70a711dc66721bbc9d0e9862a01b0a7d"></a>
### Variable host

![][public]

**Definition**: `HostAndPort.hpp` (line 37)


```cpp
Host sysc::HostAndPort::host
```








**Type**: [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::HostAndPort::host"}]}`
-->

<a id="structsysc_1_1HostAndPort_1a3615321654401d527d930495ee7d9c08"></a>
### Variable port

![][public]

**Definition**: `HostAndPort.hpp` (line 38)


```cpp
Port sysc::HostAndPort::port {0}
```








**Type**: [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::HostAndPort::port"}]}`
-->

## Public functions

<a id="structsysc_1_1HostAndPort_1ab46ff92d33f63082e405b16ab669ada3"></a>
### Function HostAndPort

![][public]


```cpp
sysc::HostAndPort::HostAndPort()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::HostAndPort::HostAndPort"}]}`
-->

<a id="structsysc_1_1HostAndPort_1ad1f900b2d235b7633444d10b9f818afb"></a>
### Function HostAndPort

![][public]


```cpp
sysc::HostAndPort::HostAndPort(Host host, Port port)
```








**Parameters**:

* [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249) **host**
* [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b) **port**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::HostAndPort::HostAndPort"}]}`
-->

<a id="structsysc_1_1HostAndPort_1ac95ec5248d3b89f0798b29a3a19ba231"></a>
### Function HostAndPort

![][public]


```cpp
sysc::HostAndPort::HostAndPort(Port port)
```








**Parameters**:

* [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b) **port**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::HostAndPort::HostAndPort"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)