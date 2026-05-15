# Structure simulation_framework::autonomy::communication::messages::TimestampView

![][C++]
![][public]

**Definition**: `autonomy/communication/messages/autonomy_msg.h` (line 24)

Simple timestamp view exposing seconds and nanoseconds.

?> Both fields are stored as uint64_t to avoid overflow and for consistent fixed-size serialization.

## Members

* [nanos](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1a3ed08a0ceda9a05a5aa9b19dc7cf6529)
* [ns](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1a1a6d1088221e8e2ed126150a433180cb)
* [seconds](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1acba606b71225bbded7a27e6f9db49ffc)
* [secs](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1ad99e308110b611f1aedbbb717247c017)

## Public attributes

<a id="structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1ad99e308110b611f1aedbbb717247c017"></a>
### Variable secs

![][public]

**Definition**: `autonomy/communication/messages/autonomy_msg.h` (line 34)


```cpp
uint64_t simulation_framework::autonomy::communication::messages::TimestampView::secs {0}
```








**Type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::TimestampView::secs"}]}`
-->

<a id="structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1a1a6d1088221e8e2ed126150a433180cb"></a>
### Variable ns

![][public]

**Definition**: `autonomy/communication/messages/autonomy_msg.h` (line 35)


```cpp
uint64_t simulation_framework::autonomy::communication::messages::TimestampView::ns {0}
```








**Type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::TimestampView::ns"}]}`
-->

## Public functions

<a id="structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1acba606b71225bbded7a27e6f9db49ffc"></a>
### Function seconds

![][public]
![][const]


```cpp
uint64_t simulation_framework::autonomy::communication::messages::TimestampView::seconds() const noexcept
```


Seconds since epoch.

**Returns**:

seconds as uint64_t



**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::TimestampView::seconds"}]}`
-->

<a id="structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView_1a3ed08a0ceda9a05a5aa9b19dc7cf6529"></a>
### Function nanos

![][public]
![][const]


```cpp
uint64_t simulation_framework::autonomy::communication::messages::TimestampView::nanos() const noexcept
```


Nanoseconds part of the timestamp.

**Returns**:

nanos as uint64_t



**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::TimestampView::nanos"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)