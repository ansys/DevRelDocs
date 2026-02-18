<a id="classansys-dpf-externalstream"></a>
# Class ansys::dpf::ExternalStream

![][C++]
![][public]



Abstraction of a stream. 

**See also**: [Streams](classansys-dpf-streams.md#classansys-dpf-streams)

## Members

* [fileName](classansys-dpf-externalstream.md#classansys-dpf-externalstream-1a80d1920a080fd91dc80850b6b465cc29)
* [release](classansys-dpf-externalstream.md#classansys-dpf-externalstream-1aa6f23cac0435e5324144ee0887e80ecf)
* [streamTypeName](classansys-dpf-externalstream.md#classansys-dpf-externalstream-1a0e85f7d70ad9c2a2b80c81bf6ac2ed20)
* [~ExternalStream](classansys-dpf-externalstream.md#classansys-dpf-externalstream-1ae82ac90ef3e0b83a61c65d6f38920dde)

## Friends

## Public functions

<a id="classansys-dpf-externalstream-1ae82ac90ef3e0b83a61c65d6f38920dde"></a>
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

<a id="classansys-dpf-externalstream-1aa6f23cac0435e5324144ee0887e80ecf"></a>
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

<a id="classansys-dpf-externalstream-1a0e85f7d70ad9c2a2b80c81bf6ac2ed20"></a>
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

<a id="classansys-dpf-externalstream-1a80d1920a080fd91dc80850b6b465cc29"></a>
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

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)