---
title: "File NonFatalError.hpp"
---

![][C++]

**Location**: `NonFatalError.hpp`





## Classes

* [sysc::NonFatalError](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1NonFatalError)

## Namespaces

* [sysc](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc)

## Includes

* [LibraryType.hpp](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/LibraryType_8hpp)
* &lt;exception&gt;
* &lt;string&gt;

```mermaid
graph LR
1["NonFatalError.hpp"]
click 1 "NonFatalError_8hpp.md#NonFatalError_8hpp"
1 --> 2
1 --> 3
1 --> 4

4["string"]

3["exception"]

2["LibraryType.hpp"]
click 2 "LibraryType_8hpp_source.md#LibraryType_8hpp_source"

```

## Source

```cpp

/*
 * Copyright ANSYS. All rights reserved.
 */
#pragma once

#include "LibraryType.hpp"

#include <exception>
#include <string>

namespace sysc {

class NonFatalError : public std::exception {
public:
  NonFatalError(std::string str) :
      m_str("NonFatalError: " + std::move(str))
  {
  }
  ~NonFatalError() noexcept override = default;
  const char* what() const noexcept override { return m_str.c_str(); }

private:
  std::string m_str;
};

void SYSTEM_COUPLING_PARTICIPANT_DLL throwNonFatalError(const std::string& errorMessage);

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)