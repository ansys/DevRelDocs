# File GLTFSampler.h

<a id="_g_l_t_f_sampler_8h"></a>

![][C++]

## Classes

* [ANSYS::AVZ::GLTFWriter::Sampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler)

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

3["GLTFObject.h"]
click 3 "_g_l_t_f_object_8h_source.md#_g_l_t_f_object_8h_source"
3 --> 2

1["GLTFSampler.h"]
click 1 "_g_l_t_f_sampler_8h.md#_g_l_t_f_sampler_8h"
1 --> 2
1 --> 3

```


## Included by

* [GLTFWriter.h](_g_l_t_f_writer_8h.md#_g_l_t_f_writer_8h)


```mermaid
graph RL
1["GLTFSampler.h"]
click 1 "_g_l_t_f_sampler_8h.md#_g_l_t_f_sampler_8h"
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
#ifndef __INCLUDED_GLTF_GLTFSAMPLER__
#define __INCLUDED_GLTF_GLTFSAMPLER__

#include "GLTFCommon.h"
#include "GLTFObject.h"

namespace ANSYS { namespace AVZ { namespace GLTFWriter {
    class GLTF;

    class Sampler : public Object
    {
    public:
        enum FilterType
        {
            FT_NEAREST = 9728, 
            FT_LINEAR = 9729, 
            FT_NEAREST_MIPMAP_NEAREST = 9984, 
            FT_LINEAR_MIPMAP_NEAREST = 9985, 
            FT_NEAREST_MIPMAP_LINEAR = 9986, 
            FT_LINEAR_MIPMAP_LINEAR = 9987 
        };
        enum WrapType
        {
            WT_REPEAT = 10497, 
            WT_CLAMP_TO_EDGE = 33071, 
            WT_MIRRORED_REPEAT = 33648 
        };

    protected:
        virtual ~Sampler() {}

    public:
        static GLTFWRITERSPEC Sampler *Create(GLTF *gltf, 
            FilterType minFilter, 
            FilterType magFilter, 
            WrapType wrapS, 
            WrapType wrapT 
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