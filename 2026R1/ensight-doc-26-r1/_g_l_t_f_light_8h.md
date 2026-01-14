# File GLTFLight.h

<a id="_g_l_t_f_light_8h"></a>

![][C++]

## Classes

* [ANSYS::AVZ::GLTFWriter::Light](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light)

## Namespaces

* [ANSYS](namespace_a_n_s_y_s.md#namespace_a_n_s_y_s)
* [ANSYS::AVZ](namespace_a_n_s_y_s_1_1_a_v_z.md#namespace_a_n_s_y_s_1_1_a_v_z)
* [ANSYS::AVZ::GLTFWriter](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer)

## Includes

* [GLTFCommon.h](_g_l_t_f_common_8h.md#_g_l_t_f_common_8h)
* [GLTFObject.h](_g_l_t_f_object_8h.md#_g_l_t_f_object_8h)


```mermaid
graph LR
2["GLTFCommon.h"]
click 2 "_g_l_t_f_common_8h_source.md#_g_l_t_f_common_8h_source"

1["GLTFLight.h"]
click 1 "_g_l_t_f_light_8h.md#_g_l_t_f_light_8h"
1 --> 2
1 --> 3

3["GLTFObject.h"]
click 3 "_g_l_t_f_object_8h_source.md#_g_l_t_f_object_8h_source"
3 --> 2

```


## Included by

* [GLTFWriter.h](_g_l_t_f_writer_8h.md#_g_l_t_f_writer_8h)


```mermaid
graph RL
1["GLTFLight.h"]
click 1 "_g_l_t_f_light_8h.md#_g_l_t_f_light_8h"
2 --> 1

2["GLTFWriter.h"]
click 2 "_g_l_t_f_writer_8h_source.md#_g_l_t_f_writer_8h_source"

```


## Source


```cpp
/*
 * Copyright 2018-2021 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 * 
 * Restricted Rights Legend
 *
 * Use, duplication, or disclosure of this
 * software and its documentation by the
 * Government is subject to restrictions as
 * set forth in subdivision [(b)(3)(ii)] of
 * the Rights in Technical Data and Computer
 * Software clause at 52.227-7013.
 */
#ifndef __INCLUDED_GLTF_GLTFLIGHT__
#define __INCLUDED_GLTF_GLTFLIGHT__

#include "GLTFCommon.h"
#include "GLTFObject.h"

namespace ANSYS { namespace AVZ { namespace GLTFWriter {
    class GLTF;

    class Light : public Object
    {
    protected:
        virtual ~Light() {}
    
    public:
        static GLTFWRITERSPEC Light *CreateDirectional(GLTF *gltf, 
            float colR = 1, 
            float colG = 1, 
            float colB = 1, 
            float dirX = 0, 
            float dirY = 0, 
            float dirZ = -1, 
            float specColR = 1, 
            float specColG = 1, 
            float specColB = 1, 
            float shininess = 100 
        );
        static GLTFWRITERSPEC Light *CreateAmbient(GLTF *gltf, 
            float colR = 0.3, 
            float colG = 0.3, 
            float colB = 0.3 
        );
    };

} } } 

#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)