# Namespace rtidds

![][C++]

**Definition**: `core/communication/topic_registry.h` (line 16)

A dedicated namespace for messages in RTI-DDS communication.

© 2023-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. Acknowledge to Real-Time Innovations using their DDS technology. © 2005-2023 Copyright, Real-Time Innovations, Inc. All rights reserved.

## Typedefs

<a id="namespacertidds_1a442f59bc02e5668d37a306af1c6faacd"></a>
### Typedef VariantMessage

![][public]

**Definition**: `core/communication/topic_registry.h` (line 33)


```cpp
using rtidds::VariantMessage = typedef FmuMessage
```


Type aliases for variant message types.

These aliases provide a generic way to reference variant-style message types. Currently, variant types are aliased to Fmu types, but this can be changed in the future if dedicated variant types are introduced. This abstraction allows "Variant" to be used as a generic alias for all possible "Fmu" variant message types.





Alias for variant message type (currently maps to FmuMessage).





This alias allows VariantDataTopicType and other code to use a semantic name ([rtidds::VariantMessage](namespacertidds.md#namespacertidds_1a442f59bc02e5668d37a306af1c6faacd)) while maintaining compatibility with the underlying FmuMessage structure. If a dedicated VariantMessage type is introduced in the future, only this alias needs to be updated.



**Return type**: FmuMessage

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"rtidds::VariantMessage"}]}`
-->

<a id="namespacertidds_1a5d98a2ba88abe876a19cf09c458e06e1"></a>
### Typedef VariantData

![][public]

**Definition**: `core/communication/topic_registry.h` (line 38)


```cpp
using rtidds::VariantData = typedef FmuData
```


Alias for variant data type (currently maps to FmuData).

This alias provides a generic name for variant data entries, allowing code to use [rtidds::VariantData](namespacertidds.md#namespacertidds_1a5d98a2ba88abe876a19cf09c458e06e1) instead of rtidds::FmuData when working with variant-style messages.



**Return type**: FmuData

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"rtidds::VariantData"}]}`
-->

<a id="namespacertidds_1ae065fe2b5abd93b78891593a53ef039b"></a>
### Typedef VariantDatatype

![][public]

**Definition**: `core/communication/topic_registry.h` (line 43)


```cpp
using rtidds::VariantDatatype = typedef FmuDatatype
```


Alias for variant datatype enum (currently maps to FmuDatatype).

This alias provides a generic name for variant datatype enumerations. Use rtidds::VariantDatatype::kDouble, rtidds::VariantDatatype::kInteger, etc.



**Return type**: FmuDatatype

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"rtidds::VariantDatatype"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)