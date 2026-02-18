<a id="classansys-dpf-runtimeclientconfig"></a>
# Class ansys::dpf::RuntimeClientConfig

![][C++]
![][public]



enables to set runtime configuration options to DPF [Client](classansys-dpf-client.md#classansys-dpf-client).

**Inherits from**:

* ansys::dpf::RuntimeConfig

## Members

* [enableCache](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1ab83354eaf4d8646fd7d06e0f5dbdafaf)
* [getAvailableOptions](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1add61c48a143d2603ab22e1028dc8a25f)
* [getBoolValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aa611e355441057cef04ef164008da8c8)
* [getDoubleValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1abcbfdbc481d8fe2c2d5454830104b216)
* [getIntValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1a155763466ea3c190bf5b5090080edeae)
* [getMetadata](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1afd80c6f61d3503fff0667191937dfae8)
* [getStreamingBufferSize](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1a31e99b0bf8468a58ca3b5bcaa1412fe6)
* [getStringValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ae73075c73be83d06188b1708b8ebff47)
* [isCacheEnabled](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1aac0f20eaf4cb412d3ef03d787ac38f06)
* [isConnectionSecure](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1adb4e00bb129ca912c50e719176d29e59)
* [RuntimeClientConfig](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1a0ae5e33053e62969b2968019c869b693)
* [RuntimeClientConfig](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1adec9994df2fb0d2b4717c300a69ed0c2)
* [RuntimeConfig](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ab8144e943554f8eaab1002be7b92c8cd)
* [RuntimeConfig](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1af6f35d3d6b1aec5480004ae4ed1fe625)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ab1b88cf95976b49097ccc460bf8035ed)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1a02d687d1252675cab169991475aa343d)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1af559e97f012ddd2a31dbbf4185b4cfe5)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aef94b87f0abba8d508181b8fa62af304)
* [setMetadata](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1accdb5f4e700803b8bd6b6cf8cb8623d1)
* [setSecureConnection](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1aff6f9df92453eff0bea05c9ce2c96a3b)
* [setStreamFloatsInsteadOfDoubles](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1a380e861289e9683a04ca84c250b0ecf7)
* [setStreamingBufferSize](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1a286701384f2b37237c61f20d1c24eae6)
* [setSubOption](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aa7dcdc58bbf5639bad4036ded9785905)
* [streamingFloatsInsteadOfDouble](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig-1a38db32f9104c3c2884a734a7cf606ed7)

## Friends

## Public functions

<a id="classansys-dpf-runtimeclientconfig-1a0ae5e33053e62969b2968019c869b693"></a>
### Function RuntimeClientConfig

![][public]


```cpp
ansys::dpf::RuntimeClientConfig::RuntimeClientConfig(RuntimeClientConfig const &rhs)
```








**Parameters**:

* RuntimeClientConfig const & **rhs**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::RuntimeClientConfig"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1adec9994df2fb0d2b4717c300a69ed0c2"></a>
### Function RuntimeClientConfig

![][public]


```cpp
ansys::dpf::RuntimeClientConfig::RuntimeClientConfig(RuntimeClientConfig &&rhs) noexcept
```








**Parameters**:

* RuntimeClientConfig && **rhs**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::RuntimeClientConfig"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1ab83354eaf4d8646fd7d06e0f5dbdafaf"></a>
### Function enableCache

![][public]


```cpp
void ansys::dpf::RuntimeClientConfig::enableCache(bool use_cache)
```




Sets whether gRPC calls should be intercepted to cache responses or not.



**Parameters**:

* bool **use_cache**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::enableCache"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1aac0f20eaf4cb412d3ef03d787ac38f06"></a>
### Function isCacheEnabled

![][public]
![][const]


```cpp
bool ansys::dpf::RuntimeClientConfig::isCacheEnabled() const
```




**Returns**:

Whether gRPC calls are intercepted to cache responses or not.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::isCacheEnabled"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1a286701384f2b37237c61f20d1c24eae6"></a>
### Function setStreamingBufferSize

![][public]


```cpp
void ansys::dpf::RuntimeClientConfig::setStreamingBufferSize(int size)
```




Sets the chunk size (in bytes) used in gRPC streaming calls.



**Parameters**:

* int **size**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::setStreamingBufferSize"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1a31e99b0bf8468a58ca3b5bcaa1412fe6"></a>
### Function getStreamingBufferSize

![][public]
![][const]


```cpp
int ansys::dpf::RuntimeClientConfig::getStreamingBufferSize() const
```




**Returns**:

the chunk size (in bytes) used in gRPC streaming calls.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::getStreamingBufferSize"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1a380e861289e9683a04ca84c250b0ecf7"></a>
### Function setStreamFloatsInsteadOfDoubles

![][public]


```cpp
void ansys::dpf::RuntimeClientConfig::setStreamFloatsInsteadOfDoubles(bool use_float)
```




Sets whether double values (8 bytes) should be converted and streamed as floats values (4 bytes) in gRPC streaming calls.



**Parameters**:

* bool **use_float**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::setStreamFloatsInsteadOfDoubles"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1a38db32f9104c3c2884a734a7cf606ed7"></a>
### Function streamingFloatsInsteadOfDouble

![][public]
![][const]


```cpp
bool ansys::dpf::RuntimeClientConfig::streamingFloatsInsteadOfDouble() const
```




**Returns**:

Whether double values (8 bytes) are converted and streamed as floats values (4 bytes) in gRPC streaming calls.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::streamingFloatsInsteadOfDouble"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1accdb5f4e700803b8bd6b6cf8cb8623d1"></a>
### Function setMetadata

![][public]


```cpp
void ansys::dpf::RuntimeClientConfig::setMetadata(std::map< std::string, std::string > const &metadata)
```




Sets the custom metadata appended to gRPC packets.



**Parameters**:

* std::map< std::string, std::string > const & **metadata**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::setMetadata"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1afd80c6f61d3503fff0667191937dfae8"></a>
### Function getMetadata

![][public]
![][const]


```cpp
std::map< std::string, std::string > ansys::dpf::RuntimeClientConfig::getMetadata() const
```




Gets the custom metadata appended to gRPC packets.



**Return type**: std::map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::getMetadata"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1aff6f9df92453eff0bea05c9ce2c96a3b"></a>
### Function setSecureConnection

![][public]


```cpp
void ansys::dpf::RuntimeClientConfig::setSecureConnection(bool secure)
```




Sets the use of TLS for secure gRPC connections.



**Parameters**:

* bool **secure**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::setSecureConnection"}]}`
-->

<a id="classansys-dpf-runtimeclientconfig-1adb4e00bb129ca912c50e719176d29e59"></a>
### Function isConnectionSecure

![][public]
![][const]


```cpp
bool ansys::dpf::RuntimeClientConfig::isConnectionSecure() const
```




Returns if the gRPC communication is secured by using TLS.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeClientConfig::isConnectionSecure"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)