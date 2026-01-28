<a id="namespacertidds"></a>
# Namespace rtidds

![][C++]

#include: <topic_registry.h>

A dedicated namespace for messages in RTI-DDS communication.

© 2023-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. Acknowledge to Real-Time Innovations using their DDS technology. © 2005-2023 Copyright, Real-Time Innovations, Inc. All rights reserved.

## Typedefs

<a id="namespacertidds_1ac35b14c276cd5d698f53163f30132293"></a>
### Typedef VariantMessage

![][public]

#include: <topic_registry.h>


```cpp
using rtidds::VariantMessage =  FmuMessage
```


Type aliases for variant message types.

These aliases provide a generic way to reference variant-style message types. Currently, variant types are aliased to Fmu types, but this can be changed in the future if dedicated variant types are introduced. This abstraction allows "Variant" to be used as a generic alias for all possible "Fmu" variant message types.





Alias for variant message type (currently maps to FmuMessage).





This alias allows VariantDataTopicType and other code to use a semantic name ([rtidds::VariantMessage](namespacertidds.md#namespacertidds_1ac35b14c276cd5d698f53163f30132293)) while maintaining compatibility with the underlying FmuMessage structure. If a dedicated VariantMessage type is introduced in the future, only this alias needs to be updated.



**Return type**: FmuMessage

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"rtidds::VariantMessage"}]}`
-->

<a id="namespacertidds_1aae35e1634347f425630b55b8e956864d"></a>
### Typedef VariantData

![][public]

#include: <topic_registry.h>


```cpp
using rtidds::VariantData =  FmuData
```


Alias for variant data type (currently maps to FmuData).

This alias provides a generic name for variant data entries, allowing code to use [rtidds::VariantData](namespacertidds.md#namespacertidds_1aae35e1634347f425630b55b8e956864d) instead of rtidds::FmuData when working with variant-style messages.



**Return type**: FmuData

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"rtidds::VariantData"}]}`
-->

<a id="namespacertidds_1a4641aa3b5d2f6aa988504f083bb15126"></a>
### Typedef VariantDatatype

![][public]

#include: <topic_registry.h>


```cpp
using rtidds::VariantDatatype =  FmuDatatype
```


Alias for variant datatype enum (currently maps to FmuDatatype).

This alias provides a generic name for variant datatype enumerations. Use rtidds::VariantDatatype::kDouble, rtidds::VariantDatatype::kInteger, etc.



**Return type**: FmuDatatype

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"rtidds::VariantDatatype"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)