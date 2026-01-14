# File dvs\_object\_interface.h

<a id="dvs__object__interface_8h"></a>

![][C++]

DVS Reader API Object Interface.



## Classes

* [DVS::IObject](class_d_v_s_1_1_i_object.md#class_d_v_s_1_1_i_object)

## Namespaces

* [DVS](namespace_d_v_s.md#namespace_d_v_s)

## Includes

* [dynamic_visualization_store_enums.h](dynamic__visualization__store__enums_8h.md#dynamic__visualization__store__enums_8h)
* [dynamic_visualization_store_error_codes.h](dynamic__visualization__store__error__codes_8h.md#dynamic__visualization__store__error__codes_8h)


```mermaid
graph LR
1["dvs_object_interface.h"]
click 1 "dvs__object__interface_8h.md#dvs__object__interface_8h"
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

* [dvs_dataset_interface.h](dvs__dataset__interface_8h.md#dvs__dataset__interface_8h)
* [dvs_mesh_chunk_interface.h](dvs__mesh__chunk__interface_8h.md#dvs__mesh__chunk__interface_8h)
* [dvs_plot_chunk_interface.h](dvs__plot__chunk__interface_8h.md#dvs__plot__chunk__interface_8h)
* [dvs_query_interface.h](dvs__query__interface_8h.md#dvs__query__interface_8h)


```mermaid
graph RL
5["dvs_client_interface.h"]
click 5 "dvs__client__interface_8h.md#dvs__client__interface_8h"
6 --> 5

2["dvs_dataset_interface.h"]
click 2 "dvs__dataset__interface_8h.md#dvs__dataset__interface_8h"
3 --> 2

9["dvs_mesh_chunk_interface.h"]
click 9 "dvs__mesh__chunk__interface_8h.md#dvs__mesh__chunk__interface_8h"
3 --> 9

1["dvs_object_interface.h"]
click 1 "dvs__object__interface_8h.md#dvs__object__interface_8h"
2 --> 1
9 --> 1
10 --> 1
3 --> 1

10["dvs_plot_chunk_interface.h"]
click 10 "dvs__plot__chunk__interface_8h.md#dvs__plot__chunk__interface_8h"
3 --> 10

3["dvs_query_interface.h"]
click 3 "dvs__query__interface_8h.md#dvs__query__interface_8h"
4 --> 3

4["dvs_server_interface.h"]
click 4 "dvs__server__interface_8h.md#dvs__server__interface_8h"
5 --> 4
6 --> 4
7 --> 4
8 --> 4

6["test_dvs_client_cxx.cpp"]
click 6 "test__dvs__client__cxx_8cpp.md#test__dvs__client__cxx_8cpp"

7["test_dvs_reader.cpp"]
click 7 "test__dvs__reader_8cpp.md#test__dvs__reader_8cpp"

8["test_dvs_server.cpp"]
click 8 "test__dvs__server_8cpp.md#test__dvs__server_8cpp"

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


#ifndef ___DVS_OBJECT_INTERFACE_H___
#define ___DVS_OBJECT_INTERFACE_H___

#include "dynamic_visualization_store_enums.h"
#include "dynamic_visualization_store_error_codes.h"

namespace DVS
{

class IDataset;

class IObject
{
public:

    IObject() = default; 
    virtual ~IObject() = default; 
    IObject(IObject&&) = default;  
    IObject& operator=(IObject&&) = default; 
    IObject(const IObject&) = default; 
    IObject& operator=(const IObject&) = default; 

    enum ObjectDefType
    {
        PART, 
        PLOT, 
        CASE 
    };

    virtual const char* get_name() const = 0;

    virtual ObjectDefType get_type() const = 0;

    virtual const DVS::IDataset* get_dataset() const = 0;

    virtual uint32_t get_num_metadata() const = 0;

    virtual const char* get_metadata_key(uint32_t index) const = 0;

    virtual const char* get_metadata_value(uint32_t index) const = 0;

    virtual const char* get_metadata_value(const char* key) const = 0;
};

} //namespace DVS

#endif //___DVS_OBJECT_INTERFACE_H___
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)