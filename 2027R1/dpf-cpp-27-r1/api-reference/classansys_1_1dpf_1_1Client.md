<a id="classansys_1_1dpf_1_1Client"></a>
# Class ansys::dpf::Client

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1083)



[Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) for remote DPF connection. A [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance is always associated to a DPF server process. The corresponding server needs to run so that the client instance can then be correctly used. This client allows to create DPF objects on a remote server.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [callAPI](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a59c1b204080ed29f91883d6671eadfbb)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a8f8c75395535d5f2446bbb6678568755)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1ac877bd3942c9ceb5ef5fc61eda5e3445)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1ab848ac7d438cfdbac21b5c634771e5eb)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a53ac66c262ddb2e4485b6590ddbe4ce6)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a2ffa309b414af2d3c89d24e8fb1b292d)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a13b12680853a5cd3d21ef45ebc8ff3cf)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a04e16bc14f5a885a01dbe0319809aed6)
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1abd9dd9720d7ae3882753e701ccc2b911)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyClient](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a92c3f1e9c2cdfa589372253103065f73)
* [getChannelAddress](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1ac4d7086213dd34ecb5d83723b85a6a2c)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getOrStartLocalServer](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1afd0f1549caf0a53c6fdcb763648e8ff7)
* [getProtocolName](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a7bb04a2b5cb70a3d2439a1e31d209dbc)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ae198f89868d85c7db6dc1a934a1d3c15)
* [internalObj](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a639a846bb0055117950c97f1599d6818)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [operator=](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a0bb061f147ac0b86d79eeef92d9a2089)
* [operator=](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1a80e74fee04787f2ca20bd0d18dc26315)
* [~Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client_1ab8cad35b4ab7dc06f9afa751ea1fda30)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)

## Friends

<a id="classansys_1_1dpf_1_1Client_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1086)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Workflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Workflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a4d716179fdda163f10d901eb583050bf"></a>
### Friend RemoteWorkflow

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1087)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class RemoteWorkflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::RemoteWorkflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"RemoteWorkflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a0188648e79792cb24b2117066be505eb"></a>
### Friend LabelSpace

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1088)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class LabelSpace"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::LabelSpace"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"LabelSpace"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1089)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::core"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"core"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a33382a01bdd05ad6c51454d9ed2afaae"></a>
### Friend DpfTypes

![][C++]
![][private]

**Definition**: `dpf\_api\_base.h` (line 1090)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class DpfTypes"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::DpfTypes"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"DpfTypes"}]},{"type":"text","text":"\n        "}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1Client_1a8f8c75395535d5f2446bbb6678568755"></a>
### Function Client

![][private]


```cpp
ansys::dpf::Client::Client(opaque::DpfInternalSharedObject *obj)
```








**Parameters**:

* opaque::DpfInternalSharedObject * **obj**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1ac877bd3942c9ceb5ef5fc61eda5e3445"></a>
### Function Client

![][private]


```cpp
ansys::dpf::Client::Client(std::string const &address, so::API const *library_handle)
```








**Parameters**:

* std::string const & **address**
* so::API const * **library_handle**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1Client_1ab848ac7d438cfdbac21b5c634771e5eb"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &ip, std::string const &port)
```




Create [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) object from known ip and port.



**Parameters**:

* std::string const & **ip**: [in] server ip
* std::string const & **port**: [in] server port

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a53ac66c262ddb2e4485b6590ddbe4ce6"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &ip, std::string const &port, LibraryHandle const &library_handle)
```




Create [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) from known ip, port and library handle.



**Parameters**:

* std::string const & **ip**: [in] server ip
* std::string const & **port**: [in] server port
* LibraryHandle const & **library_handle**: [in] the library_handle API will be used

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a2ffa309b414af2d3c89d24e8fb1b292d"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &address)
```




Create [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) from known address.



**Parameters**:

* std::string const & **address**: [in] string with 'ip::port' format.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a13b12680853a5cd3d21ef45ebc8ff3cf"></a>
### Function Client

![][public]


```cpp
ansys::dpf::Client::Client(std::string const &address, LibraryHandle const &library_handle)
```




Create [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) from known address and library handle.



**Parameters**:

* std::string const & **address**: [in] string with 'ip::port' format.
* LibraryHandle const & **library_handle**: [in] the library_handle API will be used

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::Client"}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a04e16bc14f5a885a01dbe0319809aed6"></a>
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

<a id="classansys_1_1dpf_1_1Client_1abd9dd9720d7ae3882753e701ccc2b911"></a>
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

<a id="classansys_1_1dpf_1_1Client_1a0bb061f147ac0b86d79eeef92d9a2089"></a>
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

<a id="classansys_1_1dpf_1_1Client_1a80e74fee04787f2ca20bd0d18dc26315"></a>
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

<a id="classansys_1_1dpf_1_1Client_1ab8cad35b4ab7dc06f9afa751ea1fda30"></a>
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

<a id="classansys_1_1dpf_1_1Client_1a639a846bb0055117950c97f1599d6818"></a>
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

<a id="classansys_1_1dpf_1_1Client_1ac4d7086213dd34ecb5d83723b85a6a2c"></a>
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

<a id="classansys_1_1dpf_1_1Client_1a7bb04a2b5cb70a3d2439a1e31d209dbc"></a>
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

<a id="classansys_1_1dpf_1_1Client_1afd0f1549caf0a53c6fdcb763648e8ff7"></a>
### Function getOrStartLocalServer

![][public]
![][const]


```cpp
bool ansys::dpf::Client::getOrStartLocalServer(ansys::dpf::Streams &streams, ansys::dpf::Operator &stream_provider, int output_pin=0) const
```




If it doesn't exist yet, a local server is started. This local server can then be connected to by another server (usually used for bidirectional gRPC connections).



**Parameters**:

* [ansys::dpf::Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) & **streams**: [out] [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) holding the started server.
* [ansys::dpf::Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) & **stream_provider**: [in] [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator) which can start the server.
* int **output_pin** = 0 : [in] output pin of stream_provider returning a [ansys::dpf::Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams).

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::getOrStartLocalServer"}]}`
-->

<a id="classansys_1_1dpf_1_1Client_1a59c1b204080ed29f91883d6671eadfbb"></a>
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

<a id="classansys_1_1dpf_1_1Client_1a92c3f1e9c2cdfa589372253103065f73"></a>
### Function emptyClient

![][public]
![][static]


```cpp
static Client ansys::dpf::Client::emptyClient()
```




Create an empty client. 
**Returns**:

Empty [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client)



**Return type**: Client

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Client::emptyClient"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)