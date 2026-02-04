# Namespace simulation_framework::core::communication_manager_creator

![][C++]

**Definition**: `core/communication/communication_manager_creator.h` (line 27)

class CommunicationManagerCreator

CommunicationManagerCreator is creator for different implementations of CommunicationManager class based on given type.

## Enumeration types

<a id="namespacesimulation__framework_1_1core_1_1communication__manager__creator_1a282d2dc6a4261dac4762b2da1e36ac4a"></a>
### Enumeration type Type

![][public]

**Definition**: `core/communication/communication_manager_creator.h` (line 30)


```cpp
enum Type {
  kRTIDDS = 0,
  kMOCK
}
```








<a id="namespacesimulation__framework_1_1core_1_1communication__manager__creator_1a282d2dc6a4261dac4762b2da1e36ac4aadcdc344069d78d9d7508e68ed678df10"></a>
#### Enumerator kRTIDDS





<a id="namespacesimulation__framework_1_1core_1_1communication__manager__creator_1a282d2dc6a4261dac4762b2da1e36ac4aa453add0e2ed08d8c7d2d5a42dd4b5b40"></a>
#### Enumerator kMOCK





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::communication_manager_creator::Type"}]}`
-->

## Functions

<a id="namespacesimulation__framework_1_1core_1_1communication__manager__creator_1a337ae4b90128bb328b0afa07179e7995"></a>
### Function Create

![][public]


```cpp
std::shared_ptr< CommunicationManager > simulation_framework::core::communication_manager_creator::Create(const Type type, const Topics &topics=Topics{})
```


Create CommunicationManager based on given type for activity communication.

**Parameters**:

* **type**:


**Returns**:

A shared pointer of CommunicationManager



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Type **type**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Topics & **topics** = Topics{} 

**Return type**: std::shared_ptr< [CommunicationManager](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::communication_manager_creator::Create"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)