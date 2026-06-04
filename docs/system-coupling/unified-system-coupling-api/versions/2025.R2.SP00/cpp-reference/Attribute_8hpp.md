# File Attribute.hpp

![][C++]

**Location**: `Attribute.hpp`





## Classes

* [sysc::RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute)
* [sysc::IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute)
* [sysc::StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* <cstdint>

```mermaid
graph LR
4["cstdint"]

3["SystemCouplingParticipant/CommonTypes.hpp"]

1["Attribute.hpp"]
click 1 "Attribute_8hpp.md#Attribute_8hpp"
1 --> 2
1 --> 3
1 --> 4

2["SystemCouplingParticipant/LibraryType.hpp"]

```

## Source

```cpp
/*
 * Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/CommonTypes.hpp"

#include <cstdint>

namespace sysc {

class SYSTEM_COUPLING_PARTICIPANT_DLL RealAttribute {
public:
  RealAttribute(
    AttributeName name,
    double value,
    Dimensionality dimensionality);

  RealAttribute(
    AttributeName name,
    double value,
    Dimensionality dimensionality,
    bool modifiable);

  const AttributeName& getName() const noexcept;

  double getValue() const noexcept;

  const Dimensionality& getDimensionality() const noexcept;

  bool isModifiable() const noexcept;

  std::string getUnits() const;

private:
  AttributeName m_name;
  double m_value{0.0};
  Dimensionality m_dimensionality;
  bool m_modifiable{true};
};

class SYSTEM_COUPLING_PARTICIPANT_DLL IntegerAttribute {
public:
  IntegerAttribute(
    AttributeName name,
    std::int64_t value);

  IntegerAttribute(
    AttributeName name,
    std::int64_t value,
    bool modifiable);

  const AttributeName& getName() const noexcept;

  std::int64_t getValue() const noexcept;

  bool isModifiable() const noexcept;

private:
  AttributeName m_name;
  std::int64_t m_value{0};
  bool m_modifiable{true};
};

class SYSTEM_COUPLING_PARTICIPANT_DLL StringAttribute {
public:
  StringAttribute(
    AttributeName name,
    std::string value);

  StringAttribute(
    AttributeName name,
    std::string value,
    bool modifiable);

  const AttributeName& getName() const noexcept;

  std::string getValue() const;

  bool isModifiable() const noexcept;

private:
  AttributeName m_name;
  std::string m_value{0};
  bool m_modifiable{true};
};

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)