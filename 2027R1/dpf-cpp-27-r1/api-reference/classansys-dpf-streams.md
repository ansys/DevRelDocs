# Class ansys::dpf::Streams

<a id="classansys-dpf-streams"></a>

![][C++]
![][public]

Defines an open, ready-to-use, data sources.

[Streams](classansys-dpf-streams.md#classansys-dpf-streams) is an entity containing the data sources. Once the files in the streams are opened, they stay opened and they keep some data in cache to make the next evaluations faster. To close the files, release the streams.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

## Members

* [addStream](classansys-dpf-streams.md#classansys-dpf-streams-1a13bc16955004519b53af3b0cc4ab613a)
* [addStream](classansys-dpf-streams.md#classansys-dpf-streams-1a6451cbe0726b6ab1da471b7bda20fabb)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [dataSources](classansys-dpf-streams.md#classansys-dpf-streams-1a6cc780b11dc285dab97f73e1cb347872)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [emptyStreams](classansys-dpf-streams.md#classansys-dpf-streams-1a5bace24c4a163ba13a5aca8fb6f24199)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getExternalStream](classansys-dpf-streams.md#classansys-dpf-streams-1a1e1392a7f458c6a150f8cca4b02eb73f)
* [getExternalStream](classansys-dpf-streams.md#classansys-dpf-streams-1ab140ed7556c377c5332578fbb5a28a21)
* [getStreamByFileType](classansys-dpf-streams.md#classansys-dpf-streams-1a4476af5485d19220b9ed49642c81b5ff)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [operator=](classansys-dpf-streams.md#classansys-dpf-streams-1a6f88f1efa7e63cf70d4998621697d182)
* [operator=](classansys-dpf-streams.md#classansys-dpf-streams-1ac8a81b6a8f8ffbf11c3d86cbe54f6c78)
* [releaseFiles](classansys-dpf-streams.md#classansys-dpf-streams-1a959c1869453d29b05a9fe3ce191404fb)
* [splitStreams](classansys-dpf-streams.md#classansys-dpf-streams-1a547d03c0ffbcd5465ffb09418fdbde89)
* [Streams](classansys-dpf-streams.md#classansys-dpf-streams-1a8260b408904e6e11e24e2cf1ca3f7bd2)
* [Streams](classansys-dpf-streams.md#classansys-dpf-streams-1a2d3487cb883138358d6e0cc76bb71974)
* [Streams](classansys-dpf-streams.md#classansys-dpf-streams-1a4e584cc75bc6d32cd768005451643ef9)
* [Streams](classansys-dpf-streams.md#classansys-dpf-streams-1a24c07bb8c759f0a8b2cacd44af9ac929)
* [tryGetDataFromCache](classansys-dpf-streams.md#classansys-dpf-streams-1ad6233f69d2c2ee94226928c9bc06401a)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~Streams](classansys-dpf-streams.md#classansys-dpf-streams-1a3be81fb59adfb4050c563ade28ea99c5)

## Friends

## Public functions

<a id="classansys-dpf-streams-1a3be81fb59adfb4050c563ade28ea99c5"></a>
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

<a id="classansys-dpf-streams-1a8260b408904e6e11e24e2cf1ca3f7bd2"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(DataSources const &dataSources, bool open_files=false)
```




Create a stream from given data sources.



**Parameters**:

* [DataSources](classansys-dpf-datasources.md#classansys-dpf-datasources) const & **dataSources**: [in] Data source from which to create stream.
* bool **open_files** = false : [in] Wether files defined in the dataSources are opened at the creation of the [Streams](classansys-dpf-streams.md#classansys-dpf-streams) (default false).

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys-dpf-streams-1a2d3487cb883138358d6e0cc76bb71974"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(Streams const &)
```








**Parameters**:

* [Streams](classansys-dpf-streams.md#classansys-dpf-streams) const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys-dpf-streams-1a4e584cc75bc6d32cd768005451643ef9"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(Streams &&) noexcept
```








**Parameters**:

* [Streams](classansys-dpf-streams.md#classansys-dpf-streams) &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys-dpf-streams-1a24c07bb8c759f0a8b2cacd44af9ac929"></a>
### Function Streams

![][public]


```cpp
ansys::dpf::Streams::Streams(int id, Client const *const client)
```




Retrieve an existing instance of [Streams](classansys-dpf-streams.md#classansys-dpf-streams) on a server. <br/>



**Parameters**:

* int **id**: [in] Id of the [Streams](classansys-dpf-streams.md#classansys-dpf-streams) on the server's database.
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::Streams"}]}`
-->

<a id="classansys-dpf-streams-1a6f88f1efa7e63cf70d4998621697d182"></a>
### Function operator=

![][public]


```cpp
Streams & ansys::dpf::Streams::operator=(Streams const &)
```








**Parameters**:

* [Streams](classansys-dpf-streams.md#classansys-dpf-streams) const &

**Return type**: [Streams](classansys-dpf-streams.md#classansys-dpf-streams) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::operator="}]}`
-->

<a id="classansys-dpf-streams-1ac8a81b6a8f8ffbf11c3d86cbe54f6c78"></a>
### Function operator=

![][public]


```cpp
Streams & ansys::dpf::Streams::operator=(Streams &&) noexcept
```








**Parameters**:

* [Streams](classansys-dpf-streams.md#classansys-dpf-streams) &&

**Return type**: [Streams](classansys-dpf-streams.md#classansys-dpf-streams) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::operator="}]}`
-->

<a id="classansys-dpf-streams-1a959c1869453d29b05a9fe3ce191404fb"></a>
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

<a id="classansys-dpf-streams-1a13bc16955004519b53af3b0cc4ab613a"></a>
### Function addStream

![][public]


```cpp
void ansys::dpf::Streams::addStream(ExternalStream *stream)
```




Add external stream.



**Parameters**:

* [ExternalStream](classansys-dpf-externalstream.md#classansys-dpf-externalstream) * **stream**: [in] External stream to add.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::addStream"}]}`
-->

<a id="classansys-dpf-streams-1a6451cbe0726b6ab1da471b7bda20fabb"></a>
### Function addStream

![][public]


```cpp
void ansys::dpf::Streams::addStream(ExternalStream *stream, LabelSpace const &identifier)
```




Add external stream.



**Parameters**:

* [ExternalStream](classansys-dpf-externalstream.md#classansys-dpf-externalstream) * **stream**: [in] External stream to add.
* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **identifier**: [in] Identifier returned by the data sources.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::addStream"}]}`
-->

<a id="classansys-dpf-streams-1a1e1392a7f458c6a150f8cca4b02eb73f"></a>
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

<a id="classansys-dpf-streams-1ab140ed7556c377c5332578fbb5a28a21"></a>
### Function getExternalStream

![][public]
![][const]


```cpp
ExternalStreamType *const ansys::dpf::Streams::getExternalStream(LabelSpace const &identifier) const
```








**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **identifier**

**Return type**: ExternalStreamType *const

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename ExternalStreamType"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::getExternalStream"}]}`
-->

<a id="classansys-dpf-streams-1a6cc780b11dc285dab97f73e1cb347872"></a>
### Function dataSources

![][public]
![][const]


```cpp
DataSources ansys::dpf::Streams::dataSources() const
```








**Return type**: [DataSources](classansys-dpf-datasources.md#classansys-dpf-datasources)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::dataSources"}]}`
-->

<a id="classansys-dpf-streams-1a547d03c0ffbcd5465ffb09418fdbde89"></a>
### Function splitStreams

![][public]
![][const]


```cpp
std::vector< Streams > ansys::dpf::Streams::splitStreams() const
```




Split the [Streams](classansys-dpf-streams.md#classansys-dpf-streams) into multiple single-domain [Streams](classansys-dpf-streams.md#classansys-dpf-streams) containers. 
**Returns**:

Vector of [Streams](classansys-dpf-streams.md#classansys-dpf-streams), one per domain.



**Return type**: std::vector< [Streams](classansys-dpf-streams.md#classansys-dpf-streams) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::splitStreams"}]}`
-->

<a id="classansys-dpf-streams-1a4476af5485d19220b9ed49642c81b5ff"></a>
### Function getStreamByFileType

![][public]
![][const]


```cpp
Streams ansys::dpf::Streams::getStreamByFileType(std::string const &file_type) const
```




Get a single-stream [Streams](classansys-dpf-streams.md#classansys-dpf-streams) object for the stream identified by the given file type. 
**Returns**:

[Streams](classansys-dpf-streams.md#classansys-dpf-streams) containing only the stream matching the given file type extension (e.g. "rst", "h5dpf").



**Parameters**:

* std::string const & **file_type**: [in] File type extension identifying the stream.

**Return type**: [Streams](classansys-dpf-streams.md#classansys-dpf-streams)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::getStreamByFileType"}]}`
-->

<a id="classansys-dpf-streams-1ad6233f69d2c2ee94226928c9bc06401a"></a>
### Function tryGetDataFromCache

![][public]
![][const]


```cpp
bool ansys::dpf::Streams::tryGetDataFromCache(std::string const &identifier, DataT &to_fill) const
```




Try to get data from a stream's cache. 
**Returns**:

true if data was found in cache, false otherwise.



**Parameters**:

* std::string const & **identifier**: [in] Cache key identifier.
* DataT & **to_fill**: [out] Data retrieved from cache.

**Return type**: bool

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename DataT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::tryGetDataFromCache"}]}`
-->

## Public static functions

<a id="classansys-dpf-streams-1a5bace24c4a163ba13a5aca8fb6f24199"></a>
### Function emptyStreams

![][public]
![][static]


```cpp
static Streams ansys::dpf::Streams::emptyStreams()
```




Create an empty streams. 
**Returns**:

Empty [Streams](classansys-dpf-streams.md#classansys-dpf-streams).



**Return type**: [Streams](classansys-dpf-streams.md#classansys-dpf-streams)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Streams::emptyStreams"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)