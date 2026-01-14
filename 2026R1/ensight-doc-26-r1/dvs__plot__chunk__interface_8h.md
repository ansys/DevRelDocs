# File dvs\_plot\_chunk\_interface.h

<a id="dvs__plot__chunk__interface_8h"></a>

![][C++]

DVS Reader API Plot Chunk Interface.



## Classes

* [DVS::IPlotChunk](class_d_v_s_1_1_i_plot_chunk.md#class_d_v_s_1_1_i_plot_chunk)

## Namespaces

* [DVS](namespace_d_v_s.md#namespace_d_v_s)

## Includes

* [dynamic_visualization_store_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)
* [dynamic_visualization_store_error_codes.h](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h)
* [dvs_object_interface.h](dvs__object__interface_8h.md#dvs__object__interface_8h)
* [dvs_hash_interface.h](dvs__hash__interface_8h.md#dvs__hash__interface_8h)


```mermaid
graph LR
6["dvs_hash_interface.h"]
click 6 "dvs__hash__interface_8h.md#dvs__hash__interface_8h"
6 --> 2
6 --> 4

5["dvs_object_interface.h"]
click 5 "dvs__object__interface_8h.md#dvs__object__interface_8h"
5 --> 2
5 --> 4

1["dvs_plot_chunk_interface.h"]
click 1 "dvs__plot__chunk__interface_8h.md#dvs__plot__chunk__interface_8h"
1 --> 2
1 --> 4
1 --> 5
1 --> 6

2["dynamic_visualization_store_enums.h"]
click 2 "dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h"
2 --> 3

4["dynamic_visualization_store_error_codes.h"]
click 4 "dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h"
4 --> 3

3["stdint.h"]

```


## Included by

* [dvs_query_interface.h](dvs__query__interface_8h.md#dvs__query__interface_8h)


```mermaid
graph RL
4["dvs_client_interface.h"]
click 4 "dvs__client__interface_8h.md#dvs__client__interface_8h"
5 --> 4

1["dvs_plot_chunk_interface.h"]
click 1 "dvs__plot__chunk__interface_8h.md#dvs__plot__chunk__interface_8h"
2 --> 1

2["dvs_query_interface.h"]
click 2 "dvs__query__interface_8h.md#dvs__query__interface_8h"
3 --> 2

3["dvs_server_interface.h"]
click 3 "dvs__server__interface_8h.md#dvs__server__interface_8h"
4 --> 3
5 --> 3
6 --> 3
7 --> 3

5["test_dvs_client_cxx.cpp"]
click 5 "test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp"

6["test_dvs_reader.cpp"]
click 6 "test__dvs__reader_8cpp.md#test__dvs__reader_8cpp"

7["test_dvs_server.cpp"]
click 7 "test__dvs__server_8cpp.md#test__dvs__server_8cpp"

```


## Source


```cpp
/**************************************************************
*
*   (C) 2022-2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*
*   Restricted Rights Legend
*
*   Use, duplication, or disclosure of this
*   software and its documentation by the
*   Government is subject to restrictions as
*   set forth in subdivision [(b)(3)(ii)] of
*   the Rights in Technical Data and Computer
*   Software clause at 52.227-7013.
*
**************************************************************
*/


#ifndef ___DVS_PLOT_CHUNK_INTERFACE_H___
#define ___DVS_PLOT_CHUNK_INTERFACE_H___

#include "dynamic_visualization_store_enums.h"
#include "dynamic_visualization_store_error_codes.h"

#include "dvs_object_interface.h"
#include "dvs_hash_interface.h"

namespace DVS
{

class IPlotChunk : public DVS::IHash
{
public:

    IPlotChunk() = default; 
    virtual ~IPlotChunk() = default; 
    IPlotChunk(IPlotChunk&&) = default;  
    IPlotChunk& operator=(IPlotChunk&&) = default; 
    IPlotChunk(const IPlotChunk&) = default; 
    IPlotChunk& operator=(const IPlotChunk&) = default; 

    virtual float get_time() const = 0;

    virtual uint32_t get_rank() const = 0;

    virtual const DVS::IObject* get_object() const = 0;

    virtual dvs_ret get_data(uint32_t* num_values, float* x_axis_values, float* y_axis_values) = 0;
};

} //namespace DVS

#endif //___DVS_PLOT_CHUNK_INTERFACE_H___
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)