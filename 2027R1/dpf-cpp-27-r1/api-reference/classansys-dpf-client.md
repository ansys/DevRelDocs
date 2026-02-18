# Class ansys::dpf::Client

<a id="classansys-dpf-client"></a>

![][C++]
![][public]



[Client](classansys-dpf-client.md#classansys-dpf-client) for remote DPF connection. A [Client](classansys-dpf-client.md#classansys-dpf-client) instance is always associated to a DPF server process. The corresponding server needs to run so that the client instance can then be correctly used. This client allows to create DPF objects on a remote server.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

## Members

* [callAPI](classansys-dpf-client.md#classansys-dpf-client-1a59c1b204080ed29f91883d6671eadfbb)
* [Client](classansys-dpf-client.md#classansys-dpf-client-1ab848ac7d438cfdbac21b5c634771e5eb)
* [Client](classansys-dpf-client.md#classansys-dpf-client-1a53ac66c262ddb2e4485b6590ddbe4ce6)
* [Client](classansys-dpf-client.md#classansys-dpf-client-1a2ffa309b414af2d3c89d24e8fb1b292d)
* [Client](classansys-dpf-client.md#classansys-dpf-client-1a13b12680853a5cd3d21ef45ebc8ff3cf)
* [Client](classansys-dpf-client.md#classansys-dpf-client-1a04e16bc14f5a885a01dbe0319809aed6)
* [Client](classansys-dpf-client.md#classansys-dpf-client-1abd9dd9720d7ae3882753e701ccc2b911)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [emptyClient](classansys-dpf-client.md#classansys-dpf-client-1a92c3f1e9c2cdfa589372253103065f73)
* [getChannelAddress](classansys-dpf-client.md#classansys-dpf-client-1ac4d7086213dd34ecb5d83723b85a6a2c)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getOrStartLocalServer](classansys-dpf-client.md#classansys-dpf-client-1afd0f1549caf0a53c6fdcb763648e8ff7)
* [getProtocolName](classansys-dpf-client.md#classansys-dpf-client-1a7bb04a2b5cb70a3d2439a1e31d209dbc)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [internalObj](classansys-dpf-client.md#classansys-dpf-client-1a639a846bb0055117950c97f1599d6818)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [operator=](classansys-dpf-client.md#classansys-dpf-client-1a0bb061f147ac0b86d79eeef92d9a2089)
* [operator=](classansys-dpf-client.md#classansys-dpf-client-1a80e74fee04787f2ca20bd0d18dc26315)
* [~Client](classansys-dpf-client.md#classansys-dpf-client-1ab8cad35b4ab7dc06f9afa751ea1fda30)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)

## Friends

## Public functions

<a id="classansys-dpf-client-1ab848ac7d438cfdbac21b5c634771e5eb"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &ip, std::string const &port)
```




Create [Client](classansys-dpf-client.md#classansys-dpf-client) object from known ip and port.



**Parameters**:

* std::string const & **ip**: [in] server ip
* std::string const & **port**: [in] server port

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys-dpf-client-1a53ac66c262ddb2e4485b6590ddbe4ce6"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &ip, std::string const &port, LibraryHandle const &library_handle)
```




Create [Client](classansys-dpf-client.md#classansys-dpf-client) from known ip, port and library handle.



**Parameters**:

* std::string const & **ip**: [in] server ip
* std::string const & **port**: [in] server port
* LibraryHandle const & **library_handle**: [in] the library_handle API will be used

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys-dpf-client-1a2ffa309b414af2d3c89d24e8fb1b292d"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &address)
```




Create [Client](classansys-dpf-client.md#classansys-dpf-client) from known address.



**Parameters**:

* std::string const & **address**: [in] string with 'ip::port' format.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys-dpf-client-1a13b12680853a5cd3d21ef45ebc8ff3cf"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &address, LibraryHandle const &library_handle)
```




Create [Client](classansys-dpf-client.md#classansys-dpf-client) from known address and library handle.



**Parameters**:

* std::string const & **address**: [in] string with 'ip::port' format.
* LibraryHandle const & **library_handle**: [in] the library_handle API will be used

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys-dpf-client-1a04e16bc14f5a885a01dbe0319809aed6"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(Client const &)
```








**Parameters**:

* Client const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys-dpf-client-1abd9dd9720d7ae3882753e701ccc2b911"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(Client &&) noexcept
```








**Parameters**:

* Client &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys-dpf-client-1a0bb061f147ac0b86d79eeef92d9a2089"></a>
### Function operator=

![][public]


```cpp
Client & ansys::dpf::Client::operator=(Client const &)
```








**Parameters**:

* Client const &

**Return type**: Client &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::operator="}]}`
-->

<a id="classansys-dpf-client-1a80e74fee04787f2ca20bd0d18dc26315"></a>
### Function operator=

![][public]


```cpp
Client & ansys::dpf::Client::operator=(Client &&) noexcept
```








**Parameters**:

* Client &&

**Return type**: Client &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::operator="}]}`
-->

<a id="classansys-dpf-client-1ab8cad35b4ab7dc06f9afa751ea1fda30"></a>
### Function ~Client

![][public]


```cpp
virtual ansys::dpf::Client::~Client()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::~Client"}]}`
-->

<a id="classansys-dpf-client-1a639a846bb0055117950c97f1599d6818"></a>
### Function internalObj

![][public]
![][const]


```cpp
opaque::DpfObject *const ansys::dpf::Client::internalObj() const
```








**Return type**: opaque::DpfObject *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::internalObj"}]}`
-->

<a id="classansys-dpf-client-1ac4d7086213dd34ecb5d83723b85a6a2c"></a>
### Function getChannelAddress

![][public]
![][const]


```cpp
std::string ansys::dpf::Client::getChannelAddress() const
```




**Returns**:

Address string with 'ip::port' format.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::getChannelAddress"}]}`
-->

<a id="classansys-dpf-client-1a7bb04a2b5cb70a3d2439a1e31d209dbc"></a>
### Function getProtocolName

![][public]
![][const]


```cpp
std::string ansys::dpf::Client::getProtocolName() const
```




**Returns**:

Protocol's name.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::getProtocolName"}]}`
-->

<a id="classansys-dpf-client-1afd0f1549caf0a53c6fdcb763648e8ff7"></a>
### Function getOrStartLocalServer

![][public]
![][const]


```cpp
bool ansys::dpf::Client::getOrStartLocalServer(ansys::dpf::Streams &streams, ansys::dpf::Operator &stream_provider, int output_pin=0) const
```




If it doesn't exist yet, a local server is started. This local server can then be connected to by another server (usually used for bidirectional gRPC connections).



**Parameters**:

* [ansys::dpf::Streams](classansys-dpf-streams.md#classansys-dpf-streams) & **streams**: [out] [Streams](classansys-dpf-streams.md#classansys-dpf-streams) holding the started server.
* [ansys::dpf::Operator](classansys-dpf-operator.md#classansys-dpf-operator) & **stream_provider**: [in] [Operator](classansys-dpf-operator.md#classansys-dpf-operator) which can start the server.
* int **output_pin** = 0 : [in] output pin of stream_provider returning a [ansys::dpf::Streams](classansys-dpf-streams.md#classansys-dpf-streams).

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::getOrStartLocalServer"}]}`
-->

<a id="classansys-dpf-client-1a59c1b204080ed29f91883d6671eadfbb"></a>
### Function callAPI

![][public]
![][const]


```cpp
so::API const  * ansys::dpf::Client::callAPI() const
```








**Return type**: so::API const *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::callAPI"}]}`
-->

## Public static functions

<a id="classansys-dpf-client-1a92c3f1e9c2cdfa589372253103065f73"></a>
### Function emptyClient

![][public]
![][static]


```cpp
static Client ansys::dpf::Client::emptyClient()
```




Create an empty client. 
**Returns**:

Empty [Client](classansys-dpf-client.md#classansys-dpf-client)



**Return type**: Client

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::emptyClient"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)