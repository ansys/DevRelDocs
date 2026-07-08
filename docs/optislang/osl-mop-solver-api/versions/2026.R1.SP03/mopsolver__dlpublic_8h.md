# File mopsolver_dlpublic.h

![][C++]

**Location**: `mopsolver_dlpublic.h`





## Includes

* dlvisibility.h


```mermaid
graph LR
1["mopsolver_dlpublic.h"]
click 1 "mopsolver__dlpublic_8h.md#mopsolver__dlpublic_8h"
1 --> 2

2["dlvisibility.h"]

```


## Macros

<a id="mopsolver__dlpublic_8h_1a20ec90e10cc7c073f025376fbcf54710"></a>
### Macro DYNARDO_MOPSOLVER_INTERNAL_DLPUBLIC

![][public]


```cpp
#define DYNARDO_MOPSOLVER_INTERNAL_DLPUBLIC
```








## Source


```cpp
// $Id:  $

#ifndef __MOPSOLVER_DLPUBLIC_H__
#define __MOPSOLVER_DLPUBLIC_H__

#include "dlvisibility.h"

#ifdef DYNARDO_MOPSOLVER_INTERNAL_SHARED
    #ifdef DYNARDO_MOPSOLVER_INTERNAL_BUILD
        #define DYNARDO_MOPSOLVER_INTERNAL_DLPUBLIC DLPUBLIC_SHARED_EXPORT
    #else
        #define DYNARDO_MOPSOLVER_INTERNAL_DLPUBLIC DLPUBLIC_SHARED_IMPORT
    #endif
#else
    #define DYNARDO_MOPSOLVER_INTERNAL_DLPUBLIC
#endif

#endif // __MOPSOLVER_DLPUBLIC_H__
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)