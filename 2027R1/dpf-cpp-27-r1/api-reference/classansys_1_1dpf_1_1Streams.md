<a id="classansys_1_1dpf_1_1Streams"></a>
# Class ansys::dpf::Streams

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 3594)

Defines an open, ready-to-use, data sources.

[Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) is an entity containing the data sources. Once the files in the streams are opened, they stay opened and they keep some data in cache to make the next evaluations faster. To close the files, release the streams.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [addStream](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a13bc16955004519b53af3b0cc4ab613a)
* [addStream](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a6451cbe0726b6ab1da471b7bda20fabb)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aea34d37e0c080126eff70db34bf46597)
* [dataSources](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a6cc780b11dc285dab97f73e1cb347872)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyStreams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a5bace24c4a163ba13a5aca8fb6f24199)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getExternalStream](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a1e1392a7f458c6a150f8cca4b02eb73f)
* [getExternalStream](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1ab140ed7556c377c5332578fbb5a28a21)
* [getExternalStreamLabelWrap](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a37e0bc5eaafd69ddb0525f9e02339cd6)
* [getExternalStreamWrap](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1acaed304f6bc14eab2751b7acbebe469e)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ae198f89868d85c7db6dc1a934a1d3c15)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [operator=](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a6f88f1efa7e63cf70d4998621697d182)
* [operator=](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1ac8a81b6a8f8ffbf11c3d86cbe54f6c78)
* [releaseFiles](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a959c1869453d29b05a9fe3ce191404fb)
* [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a2c06ce5c4178519809f9e52da492cabf)
* [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a8260b408904e6e11e24e2cf1ca3f7bd2)
* [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a2d3487cb883138358d6e0cc76bb71974)
* [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a4e584cc75bc6d32cd768005451643ef9)
* [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a24c07bb8c759f0a8b2cacd44af9ac929)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams_1a3be81fb59adfb4050c563ade28ea99c5)

## Friends

<a id="classansys_1_1dpf_1_1Streams_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3596)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Operator"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Operator"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3597)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Workflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Workflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3598)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::OperatorMain"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"OperatorMain"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a4d716179fdda163f10d901eb583050bf"></a>
### Friend RemoteWorkflow

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3599)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class RemoteWorkflow"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::RemoteWorkflow"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"RemoteWorkflow"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3600)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Any"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Any"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a0188648e79792cb24b2117066be505eb"></a>
### Friend LabelSpace

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3601)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class LabelSpace"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::LabelSpace"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"LabelSpace"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a183aa7f533f994799a7dec66caf1191a"></a>
### Friend RemoteOperator

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3602)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class RemoteOperator"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::RemoteOperator"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"RemoteOperator"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1acc06c4380c923e11af63f95e97c3c259"></a>
### Friend GenericDataContainer

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3603)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class GenericDataContainer"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::GenericDataContainer"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"GenericDataContainer"}]},{"type":"text","text":"\n        "}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a5db1c99e2c94b26278f3838c85cdb618"></a>
### Friend Client

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3604)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Client"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Client"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Client"}]},{"type":"text","text":"\n        "}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1Streams_1a2c06ce5c4178519809f9e52da492cabf"></a>
### Function Streams

![][private]


```cpp
ansys::dpf::Streams::Streams(opaque::DpfInternalSharedObject *)
```








**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1acaed304f6bc14eab2751b7acbebe469e"></a>
### Function getExternalStreamWrap

![][private]
![][const]


```cpp
void *const ansys::dpf::Streams::getExternalStreamWrap(std::string const &key) const
```








**Parameters**:

* std::string const & **key**

**Return type**: void *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::getExternalStreamWrap"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a37e0bc5eaafd69ddb0525f9e02339cd6"></a>
### Function getExternalStreamLabelWrap

![][private]
![][const]


```cpp
void *const ansys::dpf::Streams::getExternalStreamLabelWrap(LabelSpace const &identifier) const
```








**Parameters**:

* LabelSpace const & **identifier**

**Return type**: void *const

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::getExternalStreamLabelWrap"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1Streams_1a3be81fb59adfb4050c563ade28ea99c5"></a>
### Function ~Streams

![][public]


```cpp
virtual ansys::dpf::Streams::~Streams()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::~Streams"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a8260b408904e6e11e24e2cf1ca3f7bd2"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(DataSources const &dataSources, bool open_files=false)
```




Create a stream from given data sources.



**Parameters**:

* [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources) const & **dataSources**: [in] Data source from which to create stream.
* bool **open_files** = false : [in] Wether files defined in the dataSources are opened at the creation of the [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) (default false).

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a2d3487cb883138358d6e0cc76bb71974"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(Streams const &)
```








**Parameters**:

* Streams const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a4e584cc75bc6d32cd768005451643ef9"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(Streams &&) noexcept
```








**Parameters**:

* Streams &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a24c07bb8c759f0a8b2cacd44af9ac929"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(int id, Client const *const client)
```




Retrieve an existing instance of [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) on a server.



**Parameters**:

* int **id**: [in] Id of the [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams) on the server's database.
* Client const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a6f88f1efa7e63cf70d4998621697d182"></a>
### Function operator=

![][public]


```cpp
Streams & ansys::dpf::Streams::operator=(Streams const &)
```








**Parameters**:

* Streams const &

**Return type**: Streams &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1ac8a81b6a8f8ffbf11c3d86cbe54f6c78"></a>
### Function operator=

![][public]


```cpp
Streams & ansys::dpf::Streams::operator=(Streams &&) noexcept
```








**Parameters**:

* Streams &&

**Return type**: Streams &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::operator="}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a959c1869453d29b05a9fe3ce191404fb"></a>
### Function releaseFiles

![][public]


```cpp
void ansys::dpf::Streams::releaseFiles()
```




Closes all files and releases file resources.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::releaseFiles"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a13bc16955004519b53af3b0cc4ab613a"></a>
### Function addStream

![][public]


```cpp
void ansys::dpf::Streams::addStream(ExternalStream *stream)
```




Add external stream.



**Parameters**:

* [ExternalStream](classansys_1_1dpf_1_1ExternalStream.md#classansys_1_1dpf_1_1ExternalStream) * **stream**: [in] External stream to add.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::addStream"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a6451cbe0726b6ab1da471b7bda20fabb"></a>
### Function addStream

![][public]


```cpp
void ansys::dpf::Streams::addStream(ExternalStream *stream, LabelSpace const &identifier)
```




Add external stream.



**Parameters**:

* [ExternalStream](classansys_1_1dpf_1_1ExternalStream.md#classansys_1_1dpf_1_1ExternalStream) * **stream**: [in] External stream to add.
* LabelSpace const & **identifier**: [in] Identifier returned by the data sources.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::addStream"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a1e1392a7f458c6a150f8cca4b02eb73f"></a>
### Function getExternalStream

![][public]
![][const]


```cpp
ExternalStreamType *const ansys::dpf::Streams::getExternalStream(std::string const &key) const
```








**Parameters**:

* std::string const & **key**

**Return type**: ExternalStreamType *const

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename ExternalStreamType"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::getExternalStream"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1ab140ed7556c377c5332578fbb5a28a21"></a>
### Function getExternalStream

![][public]
![][const]


```cpp
ExternalStreamType *const ansys::dpf::Streams::getExternalStream(LabelSpace const &identifier) const
```








**Parameters**:

* LabelSpace const & **identifier**

**Return type**: ExternalStreamType *const

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename ExternalStreamType"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::getExternalStream"}]}`
-->

<a id="classansys_1_1dpf_1_1Streams_1a6cc780b11dc285dab97f73e1cb347872"></a>
### Function dataSources

![][public]
![][const]


```cpp
DataSources ansys::dpf::Streams::dataSources() const
```








**Return type**: [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::dataSources"}]}`
-->

## Public static functions

<a id="classansys_1_1dpf_1_1Streams_1a5bace24c4a163ba13a5aca8fb6f24199"></a>
### Function emptyStreams

![][public]
![][static]


```cpp
static Streams ansys::dpf::Streams::emptyStreams()
```




Create an empty streams. 
**Returns**:

Empty [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams).



**Return type**: Streams

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::emptyStreams"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)