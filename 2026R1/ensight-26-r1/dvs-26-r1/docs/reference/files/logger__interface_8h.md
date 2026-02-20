# File logger_interface.h

<a id="logger__interface_8h"></a>

![][C++]

Logger Interface Class.

## Classes

* [DVS::ILogger](../classes/class_d_v_s_1_1_i_logger.md)

## Namespaces

* [DVS](../namespaces/namespace_d_v_s.md)

## Includes

* [dynamic_visualization_store_api.h](dynamic__visualization__store__api_8h.md)

```mermaid
graph LR
2["dynamic_visualization_store_api.h"]
click 2 "dynamic__visualization__store__api_8h.md"
2 --> 3
2 --> 4
2 --> 5
2 --> 6
2 --> 7

4["dynamic_visualization_store_enums.h"]
click 4 "dynamic__visualization__store__enums_8h.md"
4 --> 3

5["dynamic_visualization_store_error_codes.h"]
click 5 "dynamic__visualization__store__error__codes_8h.md"
5 --> 3

6["dynamic_visualization_store_version.h"]
click 6 "dynamic__visualization__store__version_8h.md"

1["logger_interface.h"]
click 1 "logger__interface_8h.md"
1 --> 2

7["dvs_import_export.h"]

3["stdint.h"]

```

## Included by

* [dvs_client_interface.h](dvs__client__interface_8h.md)
* [dvs_query_interface.h](dvs__query__interface_8h.md)
* [logger_verbose.h](logger__verbose_8h.md)

```mermaid
graph RL
2["dvs_client_interface.h"]
click 2 "dvs__client__interface_8h.md"
3 --> 2

4["dvs_query_interface.h"]
click 4 "dvs__query__interface_8h.md"
5 --> 4

5["dvs_server_interface.h"]
click 5 "dvs__server__interface_8h.md"
2 --> 5
3 --> 5
6 --> 5
7 --> 5

1["logger_interface.h"]
click 1 "logger__interface_8h.md"
2 --> 1
4 --> 1
8 --> 1

8["logger_verbose.h"]
click 8 "logger__verbose_8h.md"
6 --> 8

3["test_dvs_client_cxx.cpp"]
click 3 "test__dvs__client__cxx_8cpp.md"

6["test_dvs_reader.cpp"]
click 6 "test__dvs__reader_8cpp.md"

7["test_dvs_server.cpp"]
click 7 "test__dvs__server_8cpp.md"

```

## Source

```cpp
/*  *************************************************************
 *   Copyright 2018-2025 ANSYS, Inc.
 *   All Rights Reserved.
 *
 *        Restricted Rights Legend
 *
 *   Use, duplication, or disclosure of this
 *   software and its documentation by the
 *   Government is subject to restrictions as
 *   set forth in subdivision [(b)(3)(ii)] of
 *   the Rights in Technical Data and Computer
 *   Software clause at 52.227-7013.
 *  *************************************************************
 */

#ifndef ____DVS_LOGGER_INTERFACE_H____
#define ____DVS_LOGGER_INTERFACE_H____


#include "dynamic_visualization_store_api.h"

namespace DVS
{
class ILogger
{
public:
    ILogger() = default; 
    virtual ~ILogger() = default; 
    ILogger(ILogger&&) = default;  
    ILogger& operator=(ILogger&&) = default; 
    ILogger(const ILogger&) = default; 
    ILogger& operator=(const ILogger&) = default; 

    virtual void log(int type, const char* msg, ...) = 0;

    virtual void release() {};
};
}

#endif //____DVS_LOGGER_INTERFACE_H____
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)