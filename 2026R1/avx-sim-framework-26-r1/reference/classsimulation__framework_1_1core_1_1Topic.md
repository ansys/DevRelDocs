<a id="classsimulation__framework_1_1core_1_1Topic"></a>
# Class simulation\_framework::core::Topic

![][C++]
![][public]

#include: <[topic.h](topic_8h.md#topic_8h)>

This is the concrete [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) class that can be used for creation of a communication channel with given underlying message. As default type, DDS type will be applied. TopicId is globally unique and represents one single [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic). Different Topics can hold same underlying message type but they are different topics for communication.

Example: 
```cpp
Topic<GenericBytesMessage> osi_topic_1("topic_1");
Topic<GenericBytesMessage> osi_topic_2("topic_2");
```

**Template parameters**:

* typename TopicMsgType

**Inherits from**:

* [simulation\_framework::core::ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic)

## Members

* [AddPublisher](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a9a3bdb1cc0fb2b885fbe528903abcb14)
* [AddSubscriber](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a33882d851ffa66f8db5a83813969e48a)
* [ClearPubSub](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1ac366c5dd53e4c5770b1a5f40ae2c8956)
* [GetId](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a6cef83adabcaab8aabd20cd3184dca3c)
* [GetPublishers](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1ac31691f84f68ad4a3aeda6074739676f)
* [GetSubscribers](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1ab0a3ea471d469cf2b0611b6548752298)
* [GetType](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a6f459336816bf96dd43d4a827043485d)
* [PublisherCallback](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a0f29e64e5b4720391091e07f6250e20a)
* [PublisherCount](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a9056b30c90efc165ee8559b41e8a9064)
* [publishers\_](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a176335b7a82a32668913d295f7a66254)
* [SubscriberCount](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a71ce3df423a48cbc555cf9fb322726df)
* [SubscriberMessageCallback](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a2c04396e41962b68a36c63f8a3c215f1)
* [subscribers\_](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a583fd56f869a0cefed12bdeedb6e2210)
* [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a9ff71b7b23ec021c0f39891008c45e22)
* [topic\_id\_](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1adfec222ecbd4c2a010baa62a04a6e0c5)
* [topic\_type\_](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1a6b6a71d35e768567e5415c1a256b3664)
* [TopicMessageType](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic_1aa28465d4f009835110d723ee902d17b4)
* [~ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1ac3d4c1cecd1a0c394f8b5a308a0439b5)

## Public types

<a id="classsimulation__framework_1_1core_1_1Topic_1a0f29e64e5b4720391091e07f6250e20a"></a>
### Typedef PublisherCallback

![][public]

#include: <[topic.h](topic_8h.md#topic_8h)>


```cpp
using simulation_framework::core::Topic< TopicMsgType >::PublisherCallback =  std::function<TopicMsgType()>
```








**Return type**: std::function< TopicMsgType()>

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::PublisherCallback"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a2c04396e41962b68a36c63f8a3c215f1"></a>
### Typedef SubscriberMessageCallback

![][public]

#include: <[topic.h](topic_8h.md#topic_8h)>


```cpp
using simulation_framework::core::Topic< TopicMsgType >::SubscriberMessageCallback =  std::function<void(const TopicMsgType&)>
```








**Return type**: std::function< void(const TopicMsgType &)>

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::SubscriberMessageCallback"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1aa28465d4f009835110d723ee902d17b4"></a>
### Typedef TopicMessageType

![][public]

#include: <[topic.h](topic_8h.md#topic_8h)>


```cpp
using simulation_framework::core::Topic< TopicMsgType >::TopicMessageType =  TopicMsgType
```








**Return type**: TopicMsgType

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::TopicMessageType"}]}`
-->

## Private attributes

<a id="classsimulation__framework_1_1core_1_1Topic_1adfec222ecbd4c2a010baa62a04a6e0c5"></a>
### Variable topic\_id\_

![][private]

#include: <[topic.h](topic_8h.md#topic_8h)>


```cpp
TopicId simulation_framework::core::Topic< TopicMsgType >::topic_id_ {}
```








**Type**: TopicId

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::topic_id_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a583fd56f869a0cefed12bdeedb6e2210"></a>
### Variable subscribers\_

![][private]

#include: <[topic.h](topic_8h.md#topic_8h)>


```cpp
Subscribers simulation_framework::core::Topic< TopicMsgType >::subscribers_ {}
```








**Type**: Subscribers

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::subscribers_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a176335b7a82a32668913d295f7a66254"></a>
### Variable publishers\_

![][private]

#include: <[topic.h](topic_8h.md#topic_8h)>


```cpp
Publishers simulation_framework::core::Topic< TopicMsgType >::publishers_ {}
```








**Type**: Publishers

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::publishers_"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a6b6a71d35e768567e5415c1a256b3664"></a>
### Variable topic\_type\_

![][private]

#include: <[topic.h](topic_8h.md#topic_8h)>


```cpp
const core::TopicType simulation_framework::core::Topic< TopicMsgType >::topic_type_ {core::TopicType::kRTIDDS}
```








**Type**: const core::TopicType

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::topic_type_"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1core_1_1Topic_1a9ff71b7b23ec021c0f39891008c45e22"></a>
### Function Topic

![][public]


```cpp
simulation_framework::core::Topic< TopicMsgType >::Topic(const TopicId &topic_id, const TopicType topic_type=TopicType::kRTIDDS)
```








**Parameters**:

* const TopicId & **topic_id**
* const TopicType **topic_type** = TopicType::kRTIDDS 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::Topic"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a6cef83adabcaab8aabd20cd3184dca3c"></a>
### Function GetId

![][public]
![][const]


```cpp
TopicId simulation_framework::core::Topic< TopicMsgType >::GetId() const override
```




**Returns**:

A unique ID of this topic



**Return type**: TopicId

**Reimplements**: [GetId](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1ad4e077cd059e9c6f0ce9ad0df73ca3cd)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::GetId"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a6f459336816bf96dd43d4a827043485d"></a>
### Function GetType

![][public]
![][const]


```cpp
TopicType simulation_framework::core::Topic< TopicMsgType >::GetType() const override
```




**Returns**:

The type of this topic



**Return type**: TopicType

**Reimplements**: [GetType](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a461f8684a1e5190affbe69253f74fdb7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::GetType"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a9a3bdb1cc0fb2b885fbe528903abcb14"></a>
### Function AddPublisher

![][public]


```cpp
void simulation_framework::core::Topic< TopicMsgType >::AddPublisher(std::unique_ptr< IPublisher > pub_ptr) override
```




Add one publisher of this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic). The max publisher count of a topic is limited to be one. 
**Parameters**:

* **pub_ptr**: The abstraction of publisher interface



**Parameters**:

* std::unique_ptr< IPublisher > **pub_ptr**

**Return type**: void

**Reimplements**: [AddPublisher](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1aadab7c49ae9beaa036d3fa9845aed85d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::AddPublisher"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a33882d851ffa66f8db5a83813969e48a"></a>
### Function AddSubscriber

![][public]


```cpp
void simulation_framework::core::Topic< TopicMsgType >::AddSubscriber(std::unique_ptr< ISubscriber > sub_ptr) override
```




Add one subscriber to this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) 
**Parameters**:

* **sub_ptr**: The abstraction of subscriber interface



**Parameters**:

* std::unique_ptr< ISubscriber > **sub_ptr**

**Return type**: void

**Reimplements**: [AddSubscriber](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a612d64a1aca7a60a8efc7f07f4d28311)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::AddSubscriber"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a71ce3df423a48cbc555cf9fb322726df"></a>
### Function SubscriberCount

![][public]
![][const]


```cpp
std::size_t simulation_framework::core::Topic< TopicMsgType >::SubscriberCount() const override
```




**Returns**:

The number of subscriber which is listening to this topic



**Return type**: std::size_t

**Reimplements**: [SubscriberCount](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a370ff9b0059ea1c200e6a5384671aac8)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::SubscriberCount"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1a9056b30c90efc165ee8559b41e8a9064"></a>
### Function PublisherCount

![][public]
![][const]


```cpp
std::size_t simulation_framework::core::Topic< TopicMsgType >::PublisherCount() const override
```




**Returns**:

The number of publisher which publishes message into this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic). The max publisher count of a topic is limited to be one.



**Return type**: std::size_t

**Reimplements**: [PublisherCount](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a469c0e1f5fd07f9829e93fd8a43bd6f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::PublisherCount"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1ac366c5dd53e4c5770b1a5f40ae2c8956"></a>
### Function ClearPubSub

![][public]


```cpp
void simulation_framework::core::Topic< TopicMsgType >::ClearPubSub() override
```




Remove all publisher and subscriber which are asociated with this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)



**Return type**: void

**Reimplements**: [ClearPubSub](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a470392793ee8cb2fc406b8b1e1b55d2d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::ClearPubSub"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1ab0a3ea471d469cf2b0611b6548752298"></a>
### Function GetSubscribers

![][public]
![][const]


```cpp
const Subscribers & simulation_framework::core::Topic< TopicMsgType >::GetSubscribers() const override
```




**Returns**:

The list of assigned subscriber which are listening to this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)



**Return type**: const Subscribers &

**Reimplements**: [GetSubscribers](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1a52c9a4a95089eb1dfbc0606974d9a8d0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::GetSubscribers"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1Topic_1ac31691f84f68ad4a3aeda6074739676f"></a>
### Function GetPublishers

![][public]
![][const]


```cpp
const Publishers & simulation_framework::core::Topic< TopicMsgType >::GetPublishers() const override
```




**Returns**:

The list of assigned publisher which are publishing message to this [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)



**Return type**: const Publishers &

**Reimplements**: [GetPublishers](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic_1aa02ef4f55132426e2af9de01bde3bf4b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::Topic::GetPublishers"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"topic_8h"},"children":[{"type":"text","text":"topic.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)