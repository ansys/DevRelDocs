# File GLTFValue.h

<a id="_g_l_t_f_value_8h"></a>

![][C++]

## Classes

* [ANSYS::AVZ::GLTFWriter::Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value)

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

1["GLTFValue.h"]
click 1 "_g_l_t_f_value_8h.md#_g_l_t_f_value_8h"
1 --> 2
1 --> 3

```


## Included by

* [GLTFWriter.h](_g_l_t_f_writer_8h.md#_g_l_t_f_writer_8h)


```mermaid
graph RL
1["GLTFValue.h"]
click 1 "_g_l_t_f_value_8h.md#_g_l_t_f_value_8h"
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
#ifndef __INCLUDED_GLTF_GLTFVALUE__
#define __INCLUDED_GLTF_GLTFVALUE__

#include "GLTFCommon.h"
#include "GLTFObject.h"

namespace ANSYS { namespace AVZ { namespace GLTFWriter {
    class GLTF;

    class Value : public Object
    {
    protected:
        virtual ~Value() {};

    public:
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            const Value *value = 0 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const char **v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const bool *v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const char *v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const short *v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const unsigned short *v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const int *v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const unsigned int *v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const float *v 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            unsigned int count, 
            const double *v 
        );

        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            const char *v1, 
            const char *v2 = 0, 
            const char *v3 = 0, 
            const char *v4 = 0 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            double v1 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            double v1, 
            double v2 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            double v1, 
            double v2, 
            double v3 
        );
        static GLTFWRITERSPEC Value *Create(GLTF *gltf, 
            const char *name, 
            double v1, 
            double v2, 
            double v3, 
            double v4 
        );

        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const char **v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const bool *v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const char *v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const short *v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const unsigned short *v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const int *v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const unsigned int *v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const float *v 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(unsigned int count, 
            const double *v 
        ) = 0;

        GLTFWRITERSPEC virtual bool Set(const char *v1, 
            const char *v2 = 0, 
            const char *v3 = 0, 
            const char *v4 = 0 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(double v1 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(double v1, 
            double v2 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(double v1, 
            double v2, 
            double v3 
        ) = 0;
        GLTFWRITERSPEC virtual bool Set(double v1, 
            double v2, 
            double v3, 
            double v4 
        ) = 0;

        GLTFWRITERSPEC virtual bool Append(const char *value 
        ) = 0;
        GLTFWRITERSPEC virtual bool Append(double value 
        ) = 0;

        GLTFWRITERSPEC virtual unsigned int Size() const = 0;

        GLTFWRITERSPEC virtual const char *elemS(unsigned int pos 
        ) const = 0;
        GLTFWRITERSPEC virtual double elemD(unsigned int pos 
        ) const = 0;
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