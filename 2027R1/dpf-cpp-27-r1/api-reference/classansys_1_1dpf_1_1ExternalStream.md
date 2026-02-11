<a id="classansys_1_1dpf_1_1ExternalStream"></a>
# Class ansys::dpf::ExternalStream

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 3577)



Abstraction of a stream. 

**See also**: [Streams](classansys_1_1dpf_1_1Streams.md#classansys_1_1dpf_1_1Streams)

## Members

* [fileName](classansys_1_1dpf_1_1ExternalStream.md#classansys_1_1dpf_1_1ExternalStream_1a80d1920a080fd91dc80850b6b465cc29)
* [release](classansys_1_1dpf_1_1ExternalStream.md#classansys_1_1dpf_1_1ExternalStream_1aa6f23cac0435e5324144ee0887e80ecf)
* [streamTypeName](classansys_1_1dpf_1_1ExternalStream.md#classansys_1_1dpf_1_1ExternalStream_1a0e85f7d70ad9c2a2b80c81bf6ac2ed20)
* [~ExternalStream](classansys_1_1dpf_1_1ExternalStream.md#classansys_1_1dpf_1_1ExternalStream_1ae82ac90ef3e0b83a61c65d6f38920dde)

## Friends

<a id="classansys_1_1dpf_1_1ExternalStream_1a5a10e7ca5f11fc70cc7d8e5b48bfff72"></a>
### Friend Streams

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 3579)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Streams"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalStream::Streams"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"Streams"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1ExternalStream_1ae82ac90ef3e0b83a61c65d6f38920dde"></a>
### Function ~ExternalStream

![][public]


```cpp
virtual ansys::dpf::ExternalStream::~ExternalStream()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalStream::~ExternalStream"}]}`
-->

<a id="classansys_1_1dpf_1_1ExternalStream_1aa6f23cac0435e5324144ee0887e80ecf"></a>
### Function release

![][public]


```cpp
virtual void ansys::dpf::ExternalStream::release()=0
```




Free a stream after usage.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalStream::release"}]}`
-->

<a id="classansys_1_1dpf_1_1ExternalStream_1a0e85f7d70ad9c2a2b80c81bf6ac2ed20"></a>
### Function streamTypeName

![][public]
![][const]


```cpp
virtual std::string ansys::dpf::ExternalStream::streamTypeName() const =0
```




**Returns**:

Type name of stream.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalStream::streamTypeName"}]}`
-->

<a id="classansys_1_1dpf_1_1ExternalStream_1a80d1920a080fd91dc80850b6b465cc29"></a>
### Function fileName

![][public]
![][const]


```cpp
virtual std::string ansys::dpf::ExternalStream::fileName() const =0
```




**Returns**:

File name of stream.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ExternalStream::fileName"}]}`
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