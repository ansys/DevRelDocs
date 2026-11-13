# File CommonSettings.hpp

![][C++]

**Location**: `CommonSettings.hpp`





## Classes

* [sysc::Dimensionality](structsysc_1_1Dimensionality.md#structsysc_1_1Dimensionality)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/Dimension.hpp


```mermaid
graph LR
1["CommonSettings.hpp"]
click 1 "CommonSettings_8hpp.md#CommonSettings_8hpp"
1 --> 2

2["SystemCouplingParticipant/Dimension.hpp"]

```


## Source


```cpp
/*
 * © 2025-2026 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/Dimension.hpp"

namespace sysc {


enum AnalysisType {
  Steady = 0,
  Transient = 1,
  Mapping = 2
};

enum class TimeIntegration {
  Implicit = 0,
  Explicit = 1
};

enum TensorType {
  Scalar = 0,
  Vector = 1
};

enum RegionDiscretizationType {
  MeshRegion = 0,
  PointCloudRegion = 1
};

enum class InterfaceSide {
  One = 1,
  Two = 2
};

enum Location {
  Node = 0,
  Element = 1
};

enum QuantityType {
  Unspecified = 0,
  Force = 1,
  IncrementalDisplacement = 2,
  Temperature = 3,
  HeatRate = 4,
  HeatTransferCoefficient = 5,
  ConvectionReferenceTemperature = 6,
  ModeShape = 7,
  ElectricalConductivity = 8
};

struct Dimensionality {
  constexpr Dimensionality(
    double length,
    double time,
    double mass,
    double temperature,
    double amountOfSubstance,
    double current,
    double luminousIntensity,
    double angle) noexcept :
      length(length),
      time(time),
      mass(mass),
      temperature(temperature),
      amountOfSubstance(amountOfSubstance),
      current(current),
      luminousIntensity(luminousIntensity),
      angle(angle)
  {
  }

  constexpr Dimensionality() noexcept = default;

  constexpr bool empty() const noexcept
  {
    return length == 0.0 &&
           time == 0.0 &&
           mass == 0.0 &&
           temperature == 0.0 &&
           amountOfSubstance == 0.0 &&
           current == 0.0 &&
           luminousIntensity == 0.0 &&
           angle == 0.0;
  }

  double length{0.0};            
  double time{0.0};              
  double mass{0.0};              
  double temperature{0.0};       
  double amountOfSubstance{0.0}; 
  double current{0.0};           
  double luminousIntensity{0.0}; 
  double angle{0.0};             
};

enum class ParticipantType {
  DEFAULT = 0,
  CFX = 1,
  FLUENT = 2,
  MAPDL = 3,
  AEDT = 4,
  FMU = 5,
  FMU_PROXY = 6,
  EXTERNALDATA = 7,
  FORTE = 8,
  DEFAULT_SRV = 9,
  MECH_SRV = 10,
  CFD_SRV = 11,
  SCDT_SRV = 12,
  THERMAL_DESKTOP = 13,
  LS_DYNA = 14,
  ROCKY = 15,
  FILE = 16,
  SPEOS = 17
};


}  // namespace sysc
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)