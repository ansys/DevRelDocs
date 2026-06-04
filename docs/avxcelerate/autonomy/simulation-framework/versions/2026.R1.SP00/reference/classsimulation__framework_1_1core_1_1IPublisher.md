# Class simulation_framework::core::IPublisher

![][C++]
![][public]

**Definition**: `core/communication/i_publisher.h` (line 22)





## Members

* [Execute](classsimulation__framework_1_1core_1_1IPublisher.md#classsimulation__framework_1_1core_1_1IPublisher_1a550e5304e6c852a1d9e509b94170c77a)
* [Init](classsimulation__framework_1_1core_1_1IPublisher.md#classsimulation__framework_1_1core_1_1IPublisher_1a8f652981baaa9d13d890c4804f997d4f)
* [WaitForSubscriber](classsimulation__framework_1_1core_1_1IPublisher.md#classsimulation__framework_1_1core_1_1IPublisher_1aeff22992ade6d0b81e6f1f4abf645690)
* [WaitForSubscribersInNumberOf](classsimulation__framework_1_1core_1_1IPublisher.md#classsimulation__framework_1_1core_1_1IPublisher_1ae7f7b03a9e41da48dfb5b88f9dc69688)
* [~IPublisher](classsimulation__framework_1_1core_1_1IPublisher.md#classsimulation__framework_1_1core_1_1IPublisher_1a3207f1c1ab1a0af9d22b45ecd0e55ae3)

## Public functions

<a id="classsimulation__framework_1_1core_1_1IPublisher_1a3207f1c1ab1a0af9d22b45ecd0e55ae3"></a>
### Function ~IPublisher

![][public]


```cpp
virtual simulation_framework::core::IPublisher::~IPublisher()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IPublisher::~IPublisher"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IPublisher_1a550e5304e6c852a1d9e509b94170c77a"></a>
### Function Execute

![][public]


```cpp
virtual void simulation_framework::core::IPublisher::Execute()=0
```








**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IPublisher::Execute"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IPublisher_1a8f652981baaa9d13d890c4804f997d4f"></a>
### Function Init

![][public]


```cpp
virtual void simulation_framework::core::IPublisher::Init()=0
```








**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IPublisher::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IPublisher_1aeff22992ade6d0b81e6f1f4abf645690"></a>
### Function WaitForSubscriber

![][public]


```cpp
virtual bool simulation_framework::core::IPublisher::WaitForSubscriber(std::chrono::milliseconds timeout=std::chrono::milliseconds(60000))=0
```








**Parameters**:

* std::chrono::milliseconds **timeout** = std::chrono::milliseconds(60000) 

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IPublisher::WaitForSubscriber"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1IPublisher_1ae7f7b03a9e41da48dfb5b88f9dc69688"></a>
### Function WaitForSubscribersInNumberOf

![][public]


```cpp
virtual bool simulation_framework::core::IPublisher::WaitForSubscribersInNumberOf(const int subscriber_count, std::chrono::milliseconds timeout=std::chrono::milliseconds(60000))=0
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **subscriber_count**
* std::chrono::milliseconds **timeout** = std::chrono::milliseconds(60000) 

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::IPublisher::WaitForSubscribersInNumberOf"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)