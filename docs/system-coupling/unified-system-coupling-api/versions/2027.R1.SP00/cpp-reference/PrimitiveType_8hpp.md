# File PrimitiveType.hpp

![][C++]

**Location**: `PrimitiveType.hpp`





## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Source


```cpp
/*
 * © 2025-2026 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

namespace sysc {


enum PrimitiveType {
  Float = 0,         
  Double = 1,        
  Int32 = 2,         
  Int64 = 3,         
  UnsignedInt16 = 4, 
  UnsignedInt64 = 5  
};


}  // namespace sysc
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)