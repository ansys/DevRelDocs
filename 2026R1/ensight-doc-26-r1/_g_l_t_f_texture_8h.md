# File GLTFTexture.h

<a id="_g_l_t_f_texture_8h"></a>

![][C++]

## Classes

* [ANSYS::AVZ::GLTFWriter::Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture)

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

1["GLTFTexture.h"]
click 1 "_g_l_t_f_texture_8h.md#_g_l_t_f_texture_8h"
1 --> 2
1 --> 3

```


## Included by

* [GLTFWriter.h](_g_l_t_f_writer_8h.md#_g_l_t_f_writer_8h)


```mermaid
graph RL
1["GLTFTexture.h"]
click 1 "_g_l_t_f_texture_8h.md#_g_l_t_f_texture_8h"
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
#ifndef __INCLUDED_GLTF_GLTFTEXTURE__
#define __INCLUDED_GLTF_GLTFTEXTURE__

#include "GLTFCommon.h"
#include "GLTFObject.h"

namespace ANSYS { namespace AVZ { namespace GLTFWriter {
    class GLTF;
    class Image;
    class Sampler;

    class Texture : public Object
    {
    public:
        enum TextureFormat
        {
//            TF_ALPHA = 6406,
            TF_RGB = 6407, 
            TF_RGBA = 6408 
//            TF_LUMINANCE = 6409,
//            TF_LUMINANCE_ALPHA = 6410
        };

        enum TextureTarget
        {
            TT_TEXTURE_2D = 3553 
//            TT_TEXTURE_CUBE_MAP = 34067
        };

    protected:
        virtual ~Texture() {}

    public:
        static GLTFWRITERSPEC Texture *Create(GLTF *gltf, 
            TextureFormat format, 
            TextureTarget target, 
            Sampler *sampler, 
            Image *image 
        );
        static GLTFWRITERSPEC Texture *Create(GLTF *gltf, 
            TextureFormat format, 
            unsigned int numColors, 
            const unsigned char *colors, 
            bool smooth = true, 
            unsigned int numBands = 0, 
            const float *bandLocations = 0 
        );
        static GLTFWRITERSPEC Texture *Create(GLTF *gltf, 
            TextureFormat format, 
            unsigned int width, 
            unsigned int height, 
            unsigned char *data 
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