# Class simulation_framework::autonomy::communication::messages::AutonomyMsg

![][C++]
![][public]

**Definition**: `autonomy/communication/messages/autonomy_msg.h` (line 41)



[AutonomyMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg): shared base for autonomy messages. Provides timestamp view, sequence id, ByteSizeLong and SerializeToArray with small helpers for derived payloads.

**Inherited by**:

* [simulation_framework::autonomy::communication::messages::VehicleControlInput](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput)

## Members

* [AutonomyMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1aeaf911af75e203864aea70d76a3f4f59)
* [BaseSize](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a225ea2d2de0b728008f5928fda670371)
* [ByteSizeLong](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1ab1d7519bb2ef8c3ce1b63d4eacc2491f)
* [ParseFromArray](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9c797cd827a921b16a05b941a35f518f)
* [ParsePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d6f1bd66fc8e6128d60f9cc4b034265)
* [PayloadSize](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a0605e85c074c8f567ea8721c14e578d2)
* [readLE](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a0ebfb6da2f35c3bd0776a03d8fa08289)
* [sequence_id](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9e516ea908430cfb4204525fd7468775)
* [SerializePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a418d787425f08a611f1395355ab72221)
* [SerializeToArray](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a4594467c0fcee627e73346fcd88e8309)
* [SetTimestamp](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a68892ea85ca64c5335c455615e32e159)
* [timestamp](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d188dca9d51d893167a66d5e589ad30)
* [writeLE](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a663e8417c75094713f34ddc278965f1e)

## Public attributes

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9e516ea908430cfb4204525fd7468775"></a>
### Variable sequence_id

![][public]

**Definition**: `autonomy/communication/messages/autonomy_msg.h` (line 48)


```cpp
uint64_t simulation_framework::autonomy::communication::messages::AutonomyMsg::sequence_id {0ULL}
```


Sequence identifier for the message (user-settable).





**Type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::sequence_id"}]}`
-->

## Protected attributes

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a15cadc3660cc52d6462433473d78d063"></a>
### Variable timestamp_view_

![][protected]

**Definition**: `autonomy/communication/messages/autonomy_msg.h` (line 218)


```cpp
TimestampView simulation_framework::autonomy::communication::messages::AutonomyMsg::timestamp_view_
```


Internal storage for the timestamp. Use [timestamp()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d188dca9d51d893167a66d5e589ad30) and [SetTimestamp()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a68892ea85ca64c5335c455615e32e159) for controlled access.





**Type**: [TimestampView](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::timestamp_view_"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1aeaf911af75e203864aea70d76a3f4f59"></a>
### Function AutonomyMsg

![][public]


```cpp
simulation_framework::autonomy::communication::messages::AutonomyMsg::AutonomyMsg()
```


Default constructor.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::AutonomyMsg"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1ab1d7519bb2ef8c3ce1b63d4eacc2491f"></a>
### Function ByteSizeLong

![][public]
![][const]


```cpp
size_t simulation_framework::autonomy::communication::messages::AutonomyMsg::ByteSizeLong() const noexcept
```


Total serialized size of this message (base + payload).

**Returns**:

number of bytes required to SerializeToArray


?> This queries the fixed-size [BaseSize()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a225ea2d2de0b728008f5928fda670371) and the derived [PayloadSize()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a0605e85c074c8f567ea8721c14e578d2) for the total length. Use this value to allocate a buffer before calling [SerializeToArray()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a4594467c0fcee627e73346fcd88e8309).



**Return type**: [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::ByteSizeLong"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d188dca9d51d893167a66d5e589ad30"></a>
### Function timestamp

![][public]
![][const]


```cpp
TimestampView simulation_framework::autonomy::communication::messages::AutonomyMsg::timestamp() const noexcept
```


Return a view of the message timestamp.

**Returns**:

[TimestampView](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView) containing seconds() and nanos()



**Return type**: [TimestampView](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::timestamp"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a68892ea85ca64c5335c455615e32e159"></a>
### Function SetTimestamp

![][public]


```cpp
void simulation_framework::autonomy::communication::messages::AutonomyMsg::SetTimestamp(uint64_t seconds, uint64_t nanos) noexcept
```


Set the message timestamp.

**Parameters**:

* **seconds**: Seconds since epoch.
* **nanos**: Nanoseconds part of the timestamp.


?> Both <code>seconds</code> and <code>nanos</code> are stored as uint64_t to provide a fixed-size, overflow-resistant representation.



**Parameters**:

* [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **seconds**
* [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **nanos**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::SetTimestamp"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a4594467c0fcee627e73346fcd88e8309"></a>
### Function SerializeToArray

![][public]
![][const]


```cpp
void simulation_framework::autonomy::communication::messages::AutonomyMsg::SerializeToArray(void *data, size_t size) const
```


Serialize the entire message into the provided buffer.

**Parameters**:

* **data**: Pointer to target buffer. Must be non-null.
* **size**: Size of the provided buffer in bytes.


**Exceptions**:

* **std::runtime_error**: If <code>data</code> is null or <code>size</code> is smaller than [ByteSizeLong()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1ab1d7519bb2ef8c3ce1b63d4eacc2491f).


?> This writes the common base fields (sequence_id, timestamp) in little-endian byte order and then calls the derived SerializePayload to write the message-specific payload. The function will throw on buffer errors; callers may catch std::runtime_error to recover.



**Parameters**:

* [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) * **data**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **size**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::SerializeToArray"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9c797cd827a921b16a05b941a35f518f"></a>
### Function ParseFromArray

![][public]


```cpp
void simulation_framework::autonomy::communication::messages::AutonomyMsg::ParseFromArray(const void *data, size_t size)
```


Parse a serialized message from a buffer and populate this object.

**Parameters**:

* **data**: Pointer to source buffer. Must be non-null.
* **size**: Size of source buffer in bytes.


**Exceptions**:

* **std::runtime_error**: on parse errors or buffer underflow.


?> ParseFromArray will call the derived ParsePayload to extract message-specific fields. The function throws on any malformed data or buffer underflow.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) * **data**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **size**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::ParseFromArray"}]}`
-->

## Protected static functions

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a225ea2d2de0b728008f5928fda670371"></a>
### Function BaseSize

![][protected]
![][static]


```cpp
static constexpr size_t simulation_framework::autonomy::communication::messages::AutonomyMsg::BaseSize() noexcept
```


Size of common base fields written by SerializeToArray.

**Returns**:

number of bytes for sequence_id + timestamp (fixed-size)


?> This is a compile-time constant and does not depend on derived classes.



**Return type**: [constexpr](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::BaseSize"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a0ebfb6da2f35c3bd0776a03d8fa08289"></a>
### Function readLE

![][protected]
![][static]


```cpp
static std::enable_if< std::is_integral< T >::value||std::is_floating_point< T >::value, void >::type simulation_framework::autonomy::communication::messages::AutonomyMsg::readLE(const unsigned char *&ptr, size_t &remaining, T &out)
```


Read a little-endian encoded primitive value from buffer.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"T"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Integral or floating-point type (e.g., uint32_t, int64_t, float). "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* **ptr**: Reference to current buffer pointer; advanced on success.
* **remaining**: Reference to remaining bytes in buffer; decreased on success.
* **out**: Reference to destination where the read value is stored.


**Exceptions**:

* **std::runtime_error**: if buffer does not contain enough bytes.


?> This function performs endianness conversion so the caller receives the value in native host representation.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [unsigned](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) *& **ptr**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **remaining**
* [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **out**

**Return type**: std::enable_if< std::is_integral< [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >::value||std::is_floating_point< [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >::value, [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >::type

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"typename"}]},{"type":"text","text":" "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"T"}]}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::readLE"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a663e8417c75094713f34ddc278965f1e"></a>
### Function writeLE

![][protected]
![][static]


```cpp
static std::enable_if< std::is_integral< T >::value||std::is_floating_point< T >::value, void >::type simulation_framework::autonomy::communication::messages::AutonomyMsg::writeLE(unsigned char *&ptr, size_t &remaining, T value)
```


Write a native C++ integer or floating-point value as little-endian bytes into the provided buffer.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"T"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Integral or floating-point type (e.g., uint32_t, int64_t, float, double) "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* **ptr**: Reference to the current output buffer pointer; advanced on success.
* **remaining**: Reference to the number of bytes left in the buffer; decreased on success.
* **value**: The value to write.


**Exceptions**:

* **std::runtime_error**: if remaining < sizeof(T).


?> This function converts to little-endian format before writing, so the serialized bytes are portable across host endianness. It is only enabled for arithmetic types; complex or non-trivially-copyable types must be serialized via explicit helpers.



**Parameters**:

* [unsigned](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) *& **ptr**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **remaining**
* [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **value**

**Return type**: std::enable_if< std::is_integral< [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >::value||std::is_floating_point< [T](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >::value, [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >::type

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"typename"}]},{"type":"text","text":" "},{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classsimulation__framework_1_1core_1_1Topic"},"children":[{"type":"text","text":"T"}]}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::writeLE"}]}`
-->

## Protected functions

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a0605e85c074c8f567ea8721c14e578d2"></a>
### Function PayloadSize

![][protected]
![][const]


```cpp
virtual size_t simulation_framework::autonomy::communication::messages::AutonomyMsg::PayloadSize() const noexcept=0
```


Derived classes must return the size of their payload.

**Returns**:

number of bytes the derived SerializePayload will write



**Return type**: [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [PayloadSize](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput_1a531f6961b6b5709a70a71982cabb556d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::PayloadSize"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a418d787425f08a611f1395355ab72221"></a>
### Function SerializePayload

![][protected]
![][const]


```cpp
virtual void simulation_framework::autonomy::communication::messages::AutonomyMsg::SerializePayload(unsigned char *&ptr, size_t &remaining) const =0
```


Derived classes must implement payload serialization.

**Parameters**:

* **ptr**: Reference to the current buffer write pointer. Implementations should advance <code>ptr</code> as bytes are written.
* **remaining**: Reference to remaining bytes available in the buffer; update this to reflect bytes consumed.


**Exceptions**:

* **std::runtime_error**: on buffer overflow or other serialization errors.


?> Implementations should rely on the provided writeLE helpers which already perform buffer checks and endianness conversion; do not perform manual pointer arithmetic.



**Parameters**:

* [unsigned](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) *& **ptr**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **remaining**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [SerializePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput_1ac35ee1e36d31bb8a73d2b9a3ae474dcd)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::SerializePayload"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d6f1bd66fc8e6128d60f9cc4b034265"></a>
### Function ParsePayload

![][protected]


```cpp
virtual void simulation_framework::autonomy::communication::messages::AutonomyMsg::ParsePayload(const unsigned char *&ptr, size_t &remaining)=0
```


Derived classes must implement payload parsing.

**Parameters**:

* **ptr**: Reference to current buffer pointer; advanced as values are read.
* **remaining**: Reference to remaining bytes in the buffer.


**Exceptions**:

* **std::runtime_error**: on malformed payload or underflow.


?> Implementations should use readLE helper to read primitive values and honor endianness.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [unsigned](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) *& **ptr**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **remaining**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [ParsePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput_1a8539f30893253a625c2fe65fe31493bf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::AutonomyMsg::ParsePayload"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"autonomy__msg_8h"},"children":[{"type":"text","text":"autonomy_msg.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)