<a id="classsimulation__framework_1_1core_1_1ISubscriber"></a>
# Class simulation\_framework::core::ISubscriber

![][C++]
![][public]

#include: <[i_subscriber.h](i__subscriber_8h.md#i__subscriber_8h)>





## Members

* [Execute](classsimulation__framework_1_1core_1_1ISubscriber.md#classsimulation__framework_1_1core_1_1ISubscriber_1a2c0cb372702d4a21ff6dee465dfc4e90)
* [Init](classsimulation__framework_1_1core_1_1ISubscriber.md#classsimulation__framework_1_1core_1_1ISubscriber_1a4325847fef6bc9881e53582482e16c1a)
* [WaitForPublisher](classsimulation__framework_1_1core_1_1ISubscriber.md#classsimulation__framework_1_1core_1_1ISubscriber_1a7377aee4592d5d47ad611f43831aa7c5)
* [~ISubscriber](classsimulation__framework_1_1core_1_1ISubscriber.md#classsimulation__framework_1_1core_1_1ISubscriber_1a6653b5684339599b7c0de3deb5fa2f33)

## Public functions

<a id="classsimulation__framework_1_1core_1_1ISubscriber_1a6653b5684339599b7c0de3deb5fa2f33"></a>
### Function ~ISubscriber

![][public]


```cpp
virtual simulation_framework::core::ISubscriber::~ISubscriber()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISubscriber::~ISubscriber"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISubscriber_1a2c0cb372702d4a21ff6dee465dfc4e90"></a>
### Function Execute

![][public]


```cpp
virtual void simulation_framework::core::ISubscriber::Execute()=0
```








**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISubscriber::Execute"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISubscriber_1a4325847fef6bc9881e53582482e16c1a"></a>
### Function Init

![][public]


```cpp
virtual void simulation_framework::core::ISubscriber::Init()=0
```








**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISubscriber::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISubscriber_1a7377aee4592d5d47ad611f43831aa7c5"></a>
### Function WaitForPublisher

![][public]


```cpp
virtual bool simulation_framework::core::ISubscriber::WaitForPublisher(std::chrono::milliseconds timeout=std::chrono::milliseconds(60000))=0
```








**Parameters**:

* std::chrono::milliseconds **timeout** = std::chrono::milliseconds(60000) 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISubscriber::WaitForPublisher"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)