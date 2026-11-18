# File Dimension.hpp

![][C++]

**Location**: `Dimension.hpp`





## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* <cstdint>


```mermaid
graph LR
1["Dimension.hpp"]
click 1 "Dimension_8hpp.md#Dimension_8hpp"
1 --> 2

2["cstdint"]

```


## Source


```cpp
/*
 * © 2025-2026 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include <cstdint>

namespace sysc {


enum class Dimension {
  D2 = 2,
  D3 = 3
};

/* \brief Return number of components of dimension, given dimension enum. */
constexpr std::uint8_t getNumDimensions(enum sysc::Dimension dimension) noexcept
{
  // Note: c++11 requires a single return statement in a constexpr function
  return dimension == sysc::Dimension::D3 ? 3 : 2;
}


}  // namespace sysc
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)