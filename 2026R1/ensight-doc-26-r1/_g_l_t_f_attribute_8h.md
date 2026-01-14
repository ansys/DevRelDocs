# File GLTFAttribute.h

<a id="_g_l_t_f_attribute_8h"></a>

![][C++]

## Classes

* [ANSYS::AVZ::GLTFWriter::Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute)

## Namespaces

* [ANSYS](namespace_a_n_s_y_s.md#namespace_a_n_s_y_s)
* [ANSYS::AVZ](namespace_a_n_s_y_s_1_1_a_v_z.md#namespace_a_n_s_y_s_1_1_a_v_z)
* [ANSYS::AVZ::GLTFWriter](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer)

## Includes

* [GLTFCommon.h](_g_l_t_f_common_8h.md#_g_l_t_f_common_8h)
* [GLTFObject.h](_g_l_t_f_object_8h.md#_g_l_t_f_object_8h)


```mermaid
graph LR
1["GLTFAttribute.h"]
click 1 "_g_l_t_f_attribute_8h.md#_g_l_t_f_attribute_8h"
1 --> 2
1 --> 3

2["GLTFCommon.h"]
click 2 "_g_l_t_f_common_8h_source.md#_g_l_t_f_common_8h_source"

3["GLTFObject.h"]
click 3 "_g_l_t_f_object_8h_source.md#_g_l_t_f_object_8h_source"
3 --> 2

```


## Included by

* [GLTFWriter.h](_g_l_t_f_writer_8h.md#_g_l_t_f_writer_8h)


```mermaid
graph RL
1["GLTFAttribute.h"]
click 1 "_g_l_t_f_attribute_8h.md#_g_l_t_f_attribute_8h"
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
#ifndef __INCLUDED_GLTF_GLTFATTRIBUTE__
#define __INCLUDED_GLTF_GLTFATTRIBUTE__

#include "GLTFCommon.h"
#include "GLTFObject.h"

namespace ANSYS { namespace AVZ { namespace GLTFWriter {
    class GLTF;
    class Buffer;

    class Attribute : public Object
    {
    public:
        enum AttributeType
        {
//            AT_BYTE = 5120,
//            AT_SHORT = 5122,
//            AT_UNSIGNED_SHORT = 5123,
            AT_INT = 5124, 
//            AT_UNSIGNED_INT = 5125,
            AT_FLOAT = 5126, 
            AT_FLOAT_VEC2 = 35664, 
            AT_FLOAT_VEC3 = 35665, 
            AT_FLOAT_VEC4 = 35666, 

            AT_FLOAT_MAT4 = 35676 
        };

    protected:
        virtual ~Attribute() {}

    public:
        static GLTFWRITERSPEC Attribute *Create(GLTF *gltf, 
            const char *name, 
            AttributeType type, 
            unsigned int count, 
            const int *data, 
            Buffer *buffer = 0 
        );
        static GLTFWRITERSPEC Attribute *Create(GLTF *gltf, 
            const char *name, 
            AttributeType type, 
            unsigned int count, 
            const float *data, 
            Buffer *buffer = 0 
        );
        static GLTFWRITERSPEC Attribute *CreatePosition(GLTF *gltf, 
            unsigned int count, 
            const float *data, 
            Buffer *buffer = 0 
        );
        static GLTFWRITERSPEC Attribute *CreateColor(GLTF *gltf, 
            AttributeType type, 
            unsigned int count, 
            const float *data, 
            Buffer *buffer = 0 
        );
        static GLTFWRITERSPEC Attribute *CreatePointSize(GLTF *gltf, 
            unsigned int count, 
            const float *data, 
            Buffer *buffer = 0 
        );
        static Attribute* CreateDisplacementScale(GLTF* gltf, 
            unsigned int count, 
            const float* data,  
            Buffer* buffer = 0 
        );
        static GLTFWRITERSPEC Attribute *CreateNormal(GLTF *gltf, 
            unsigned int count, 
            const float *data, 
            Buffer *buffer = 0 
        );
        static GLTFWRITERSPEC Attribute *CreateTextureCoord(GLTF *gltf, 
            unsigned int num, 
            unsigned int count, 
            const float *data, 
            Buffer *buffer = 0 
        );

        GLTFWRITERSPEC virtual bool SetMinMax(AttributeType type, 
            const int *mn, 
            const int *mx 
        ) = 0;
        GLTFWRITERSPEC virtual bool SetMinMax(AttributeType type, 
            const float *mn, 
            const float *mx 
        ) = 0;
        GLTFWRITERSPEC virtual void SetLogarithmic(bool log 
        ) = 0;
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