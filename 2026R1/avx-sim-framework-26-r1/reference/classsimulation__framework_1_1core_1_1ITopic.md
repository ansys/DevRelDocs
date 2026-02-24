# Class simulation_framework::core::ITopic

![][C++]
![][public]

**Definition**: `core/communication/i_topic.h` (line 36)



This is abstraction class of a [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) and it defines the interfaces based on different type of topic.

**Inherited by**:

* [simulation_framework::core::Topic\< TopicMsgType \>](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

## Members

* [AddPublisher](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1aadab7c49ae9beaa036d3fa9845aed85d)
* [AddSubscriber](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a612d64a1aca7a60a8efc7f07f4d28311)
* [ClearPubSub](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a470392793ee8cb2fc406b8b1e1b55d2d)
* [GetId](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1ad4e077cd059e9c6f0ce9ad0df73ca3cd)
* [GetPublishers](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1aa02ef4f55132426e2af9de01bde3bf4b)
* [GetSubscribers](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a52c9a4a95089eb1dfbc0606974d9a8d0)
* [GetType](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a461f8684a1e5190affbe69253f74fdb7)
* [PublisherCount](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a469c0e1f5fd07f9829e93fd8a43bd6f7)
* [SubscriberCount](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a370ff9b0059ea1c200e6a5384671aac8)
* [~ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1ac3d4c1cecd1a0c394f8b5a308a0439b5)

## Public functions

<a id="classsimulation__framework_1_1core_1_1ITopic_1ac3d4c1cecd1a0c394f8b5a308a0439b5"></a>
### Function ~ITopic

![][public]


```cpp
virtual simulation_framework::core::ITopic::~ITopic()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::~ITopic"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1ad4e077cd059e9c6f0ce9ad0df73ca3cd"></a>
### Function GetId

![][public]
![][const]


```cpp
virtual TopicId simulation_framework::core::ITopic::GetId() const =0
```




**Returns**:

A unique ID of this topic



**Return type**: TopicId

**Reimplemented by**:

* [GetId](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a6cef83adabcaab8aabd20cd3184dca3c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::GetId"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1a461f8684a1e5190affbe69253f74fdb7"></a>
### Function GetType

![][public]
![][const]


```cpp
virtual TopicType simulation_framework::core::ITopic::GetType() const =0
```




**Returns**:

The type of this topic



**Return type**: TopicType

**Reimplemented by**:

* [GetType](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a6f459336816bf96dd43d4a827043485d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::GetType"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1a370ff9b0059ea1c200e6a5384671aac8"></a>
### Function SubscriberCount

![][public]
![][const]


```cpp
virtual std::size_t simulation_framework::core::ITopic::SubscriberCount() const =0
```




**Returns**:

The number of subscriber which is listening to this topic



**Return type**: std::size_t

**Reimplemented by**:

* [SubscriberCount](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a71ce3df423a48cbc555cf9fb322726df)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::SubscriberCount"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1a469c0e1f5fd07f9829e93fd8a43bd6f7"></a>
### Function PublisherCount

![][public]
![][const]


```cpp
virtual std::size_t simulation_framework::core::ITopic::PublisherCount() const =0
```




**Returns**:

The number of publisher which publishes message into this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic). The max publisher count of a topic is limited to be one.



**Return type**: std::size_t

**Reimplemented by**:

* [PublisherCount](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a9056b30c90efc165ee8559b41e8a9064)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::PublisherCount"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1aadab7c49ae9beaa036d3fa9845aed85d"></a>
### Function AddPublisher

![][public]


```cpp
virtual void simulation_framework::core::ITopic::AddPublisher(std::unique_ptr< IPublisher > pub_ptr)=0
```




Add one publisher of this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic). The max publisher count of a topic is limited to be one. 

**Parameters**:

* **pub_ptr**: The abstraction of publisher interface



**Parameters**:

* std::unique_ptr< IPublisher > **pub_ptr**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [AddPublisher](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a9a3bdb1cc0fb2b885fbe528903abcb14)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::AddPublisher"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1a612d64a1aca7a60a8efc7f07f4d28311"></a>
### Function AddSubscriber

![][public]


```cpp
virtual void simulation_framework::core::ITopic::AddSubscriber(std::unique_ptr< ISubscriber > sub_ptr)=0
```




Add one subscriber to this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) 

**Parameters**:

* **sub_ptr**: The abstraction of subscriber interface



**Parameters**:

* std::unique_ptr< ISubscriber > **sub_ptr**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [AddSubscriber](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a33882d851ffa66f8db5a83813969e48a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::AddSubscriber"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1a470392793ee8cb2fc406b8b1e1b55d2d"></a>
### Function ClearPubSub

![][public]


```cpp
virtual void simulation_framework::core::ITopic::ClearPubSub()=0
```




Remove all publisher and subscriber which are asociated with this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)



**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [ClearPubSub](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1ac366c5dd53e4c5770b1a5f40ae2c8956)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::ClearPubSub"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1a52c9a4a95089eb1dfbc0606974d9a8d0"></a>
### Function GetSubscribers

![][public]
![][const]


```cpp
virtual const Subscribers & simulation_framework::core::ITopic::GetSubscribers() const =0
```




**Returns**:

The list of assigned subscriber which are listening to this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Subscribers &

**Reimplemented by**:

* [GetSubscribers](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1ab0a3ea471d469cf2b0611b6548752298)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::GetSubscribers"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ITopic_1aa02ef4f55132426e2af9de01bde3bf4b"></a>
### Function GetPublishers

![][public]
![][const]


```cpp
virtual const Publishers & simulation_framework::core::ITopic::GetPublishers() const =0
```




**Returns**:

The list of assigned publisher which are publishing message to this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)



**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Publishers &

**Reimplemented by**:

* [GetPublishers](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1ac31691f84f68ad4a3aeda6074739676f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ITopic::GetPublishers"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__topic_8h"},"children":[{"type":"text","text":"i_topic.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)