# File dvs\_hash\_interface.h

<a id="dvs__hash__interface_8h"></a>

![][C++]

DVS Reader API Hash Interface.



## Classes

* [DVS::IHash](class_d_v_s_1_1_i_hash.md#class_d_v_s_1_1_i_hash)

## Namespaces

* [DVS](namespace_d_v_s.md#namespace_d_v_s)

## Includes

* [dynamic_visualization_store_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)
* [dynamic_visualization_store_error_codes.h](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h)


```mermaid
graph LR
1["dvs_hash_interface.h"]
click 1 "dvs__hash__interface_8h.md#dvs__hash__interface_8h"
1 --> 2
1 --> 4

2["dynamic_visualization_store_enums.h"]
click 2 "dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h"
2 --> 3

4["dynamic_visualization_store_error_codes.h"]
click 4 "dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h"
4 --> 3

3["stdint.h"]

```


## Included by

* [dvs_element_block_interface.h](dvs__element__block__interface_8h.md#dvs__element__block__interface_8h)
* [dvs_mesh_chunk_interface.h](dvs__mesh__chunk__interface_8h.md#dvs__mesh__chunk__interface_8h)
* [dvs_plot_chunk_interface.h](dvs__plot__chunk__interface_8h.md#dvs__plot__chunk__interface_8h)


```mermaid
graph RL
6["dvs_client_interface.h"]
click 6 "dvs__client__interface_8h.md#dvs__client__interface_8h"
7 --> 6

2["dvs_element_block_interface.h"]
click 2 "dvs__element__block__interface_8h.md#dvs__element__block__interface_8h"
3 --> 2

1["dvs_hash_interface.h"]
click 1 "dvs__hash__interface_8h.md#dvs__hash__interface_8h"
2 --> 1
3 --> 1
10 --> 1

3["dvs_mesh_chunk_interface.h"]
click 3 "dvs__mesh__chunk__interface_8h.md#dvs__mesh__chunk__interface_8h"
4 --> 3

10["dvs_plot_chunk_interface.h"]
click 10 "dvs__plot__chunk__interface_8h.md#dvs__plot__chunk__interface_8h"
4 --> 10

4["dvs_query_interface.h"]
click 4 "dvs__query__interface_8h.md#dvs__query__interface_8h"
5 --> 4

5["dvs_server_interface.h"]
click 5 "dvs__server__interface_8h.md#dvs__server__interface_8h"
6 --> 5
7 --> 5
8 --> 5
9 --> 5

7["test_dvs_client_cxx.cpp"]
click 7 "test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp"

8["test_dvs_reader.cpp"]
click 8 "test__dvs__reader_8cpp.md#test__dvs__reader_8cpp"

9["test_dvs_server.cpp"]
click 9 "test__dvs__server_8cpp.md#test__dvs__server_8cpp"

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


#ifndef ___DVS_HASH_INTERFACE_H___
#define ___DVS_HASH_INTERFACE_H___

#include "dynamic_visualization_store_enums.h"
#include "dynamic_visualization_store_error_codes.h"

namespace DVS
{

class IHash
{
public:

    IHash() = default; 
    virtual ~IHash() = default; 
    IHash(IHash&&) = default;  
    IHash& operator=(IHash&&) = default; 
    IHash(const IHash&) = default; 
    IHash& operator=(const IHash&) = default; 

    virtual uint32_t get_hash_size() const = 0;

    virtual dvs_ret get_hash(char* hash) const = 0;
};

} //namespace DVS

#endif //___DVS_HASH_INTERFACE_H___
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)