# File GLTFTechnique.h

<a id="_g_l_t_f_technique_8h"></a>

![][C++]

## Classes

* [ANSYS::AVZ::GLTFWriter::Parameter](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_parameter.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_parameter)
* [ANSYS::AVZ::GLTFWriter::State](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state)
* [ANSYS::AVZ::GLTFWriter::Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique)

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

1["GLTFTechnique.h"]
click 1 "_g_l_t_f_technique_8h.md#_g_l_t_f_technique_8h"
1 --> 2
1 --> 3

```


## Included by

* [GLTFWriter.h](_g_l_t_f_writer_8h.md#_g_l_t_f_writer_8h)


```mermaid
graph RL
1["GLTFTechnique.h"]
click 1 "_g_l_t_f_technique_8h.md#_g_l_t_f_technique_8h"
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
#ifndef __INCLUDED_GLTF_GLTFTECHNIQUE__
#define __INCLUDED_GLTF_GLTFTECHNIQUE__

#include "GLTFCommon.h"
#include "GLTFObject.h"

namespace ANSYS { namespace AVZ { namespace GLTFWriter {
    class GLTF;
    class Program;
    class Value;

    class Parameter : public Object
    {
    public:
        enum ParameterType
        {
//            PT_BYTE = 5120,
//            PT_USIGNED_BYTE = 5121,
//            PT_SHORT = 5122,
//            PT_UNSIGNED_SHORT = 5123,
            PT_INT = 5124, 
//            PT_UNSIGNED_INT = 5125,
            PT_FLOAT = 5126, 
            PT_FLOAT_VEC2 = 35664, 
            PT_FLOAT_VEC3 = 35665, 
            PT_FLOAT_VEC4 = 35666, 
            PT_INT_VEC2 = 35667, 
            PT_INT_VEC3 = 35668, 
            PT_INT_VEC4 = 35669, 
            PT_BOOL = 35670, 
//            PT_BOOL_VEC2 = 35671,
//            PT_BOOL_VEC3 = 35672,
//            PT_BOOL_VEC4 = 35673,
//            PT_FLOAT_MAT2 = 35674,
            PT_FLOAT_MAT3 = 35675, 
            PT_FLOAT_MAT4 = 35676, 
            PT_SAMPLER_2D = 35678 
    };

    protected:
        virtual ~Parameter() {}

    public:
        static GLTFWRITERSPEC Parameter *Create(GLTF *gltf, 
            const char *shaderName, 
            const char *externalName, 
            ParameterType type, 
            const Value *defaultValue = 0 
        );
        static GLTFWRITERSPEC Parameter *CreateModelViewMatrix(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateModelMatrix(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateViewMatrix(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateProjectionMatrix(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateNormalMatrix(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateViewport(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateTexture(GLTF *gltf, 
            const char *shaderName, 
            unsigned int num 
        );
        static GLTFWRITERSPEC Parameter *CreatePosition(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateColor(GLTF *gltf, 
            const char *shaderName, 
            ParameterType type 
        );
        static GLTFWRITERSPEC Parameter *CreatePointSize(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter* CreateDisplacementScale(GLTF* gltf, 
            const char* shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateNormal(GLTF *gltf, 
            const char *shaderName 
        );
        static GLTFWRITERSPEC Parameter *CreateTexCoord(GLTF *gltf, 
            const char *shaderName, 
            unsigned int num 
        );
    };

    class State : public Object
    {
    public:
        enum StateType
        {
            ST_UNKNOWN, 
//                ST_BLENDCOLOR, // RED, //(0.0), 0.0 - 1.0
                                // GREEN, //(0.0), 0.0 - 1.0
                                // BLUE, //(0.0), 0.0 - 1.0
                                // ALPHA, //(0.0), 0.0 - 1.0
            ST_BLENDENABLE, 
//                ST_BLENDEQUATION, //(32774), FUNC_ADD(32774), FUNC_SUBTRACT(32778), FUNC_REVERSE_SUBTRACT(32779)
//                ST_BLENDEQUATIONSEPARATE, // RGB, //(32774), FUNC_ADD(32774), FUNC_SUBTRACT(32778), FUNC_REVERSE_SUBTRACT(32779)
                                        // ALPHA, //(32774), FUNC_ADD(32774), FUNC_SUBTRACT(32778), FUNC_REVERSE_SUBTRACT(32779)
//                ST_BLENDFUNC, // SFACTOR, //(1), ZERO(0), ONE(1), SRC_COLOR(768), ONE_MINUS_SOURCE_COLOR(769), DST_COLOR(774), ONE_MINUS_DST_COLOR(775), SRC_ALPHA(770), ONE_MINUS_SRC_ALPHA(771), DST_ALPHA(772), ONE_MINUS_DST_ALPHA(773), CONSANT_COLOR(32769), ONE_MINUS_CONSTANT_COLOR(32770), CONSTANT_ALPHA(32771), ONE_MINUS_CONSTANT_ALPHA(32772), SRC_ALPHA_SATURATE(776)
                            // DFACTOR, //(0), ZERO(0), ONE(1), SRC_COLOR(768), ONE_MINUS_SOURCE_COLOR(769), DST_COLOR(774), ONE_MINUS_DST_COLOR(775), SRC_ALPHA(770), ONE_MINUS_SRC_ALPHA(771), DST_ALPHA(772), ONE_MINUS_DST_ALPHA(773), CONSANT_COLOR(32769), ONE_MINUS_CONSTANT_COLOR(32770), CONSTANT_ALPHA(32771), ONE_MINUS_CONSTANT_ALPHA(32772), SRC_ALPHA_SATURATE(776)
//                ST_BLENDFUNCSEPARATE, // SRCRGB, //(1), ZERO(0), ONE(1), SRC_COLOR(768), ONE_MINUS_SOURCE_COLOR(769), DST_COLOR(774), ONE_MINUS_DST_COLOR(775), SRC_ALPHA(770), ONE_MINUS_SRC_ALPHA(771), DST_ALPHA(772), ONE_MINUS_DST_ALPHA(773), CONSANT_COLOR(32769), ONE_MINUS_CONSTANT_COLOR(32770), CONSTANT_ALPHA(32771), ONE_MINUS_CONSTANT_ALPHA(32772), SRC_ALPHA_SATURATE(776)
                                    // SRCALPHA, //(1), ZERO(0), ONE(1), SRC_COLOR(768), ONE_MINUS_SOURCE_COLOR(769), DST_COLOR(774), ONE_MINUS_DST_COLOR(775), SRC_ALPHA(770), ONE_MINUS_SRC_ALPHA(771), DST_ALPHA(772), ONE_MINUS_DST_ALPHA(773), CONSANT_COLOR(32769), ONE_MINUS_CONSTANT_COLOR(32770), CONSTANT_ALPHA(32771), ONE_MINUS_CONSTANT_ALPHA(32772), SRC_ALPHA_SATURATE(776)
                                    // DSTRGB, //(0), ZERO(0), ONE(1), SRC_COLOR(768), ONE_MINUS_SOURCE_COLOR(769), DST_COLOR(774), ONE_MINUS_DST_COLOR(775), SRC_ALPHA(770), ONE_MINUS_SRC_ALPHA(771), DST_ALPHA(772), ONE_MINUS_DST_ALPHA(773), CONSANT_COLOR(32769), ONE_MINUS_CONSTANT_COLOR(32770), CONSTANT_ALPHA(32771), ONE_MINUS_CONSTANT_ALPHA(32772), SRC_ALPHA_SATURATE(776)
                                    // DSTALPHA, //(0), ZERO(0), ONE(1), SRC_COLOR(768), ONE_MINUS_SOURCE_COLOR(769), DST_COLOR(774), ONE_MINUS_DST_COLOR(775), SRC_ALPHA(770), ONE_MINUS_SRC_ALPHA(771), DST_ALPHA(772), ONE_MINUS_DST_ALPHA(773), CONSANT_COLOR(32769), ONE_MINUS_CONSTANT_COLOR(32770), CONSTANT_ALPHA(32771), ONE_MINUS_CONSTANT_ALPHA(32772), SRC_ALPHA_SATURATE(776)
//                ST_COLORMASK, // RED, //(1), FALSE(0), TRUE(1)
                            // GREEN, //(1), FALSE(0), TRUE(1)
                            // BLUE, //(1), FALSE(0), TRUE(1)
                            // ALPHA, //(1), FALSE(0), TRUE(1)
            ST_CULLFACE, 
            ST_CULLFACEENABLE, 
            ST_DEPTHFUNC, 
            ST_DEPTHMASK, 
//                ST_DEPTHRANGE, // ZNEAR, //(0.0), 0.0 - 1.0
                                // ZFAR, //(1.0), 0.0 - 1.0
            ST_DEPTHTESTENABLE, 
//                ST_DITHERENABLE, //(1), FALSE(0), TRUE(1)
            ST_FRONTFACE, 
            ST_LINEWIDTH, 
//                ST_POINTSIZE,
            ST_POLYGONOFFSET, 
            ST_POLYGONOFFSETFILLENABLE 
//                ST_SAMPLEALPHATOCOVERAGEENABLE, //(0), FALSE(0), TRUE(0)
//                ST_SAMPLECOVERAGE, // VALUE, //(1.0), 0.0 - 1.0
                                    // INVERT, //(0) FALSE(0), TRUE(1)
//                ST_SAMPLECOVERAGEENABLE, //(0), FALSE(0), TRUE(1)   
//                ST_SCISSOR, // X, //(0), > 0
                            // Y, //(0), > 0
                            // WIDTH, //(0), > 0
                            // HEIGHT, //(0), > 0
//                ST_SCISSORTESTENABLE, //(0), FALSE(0), TRUE(1)
//                ST_STENCILFUNC, // FUNC, //(519), NEVER(512), LESS(513), LEQUAL(515), EQUAL(514), GREATER(516), NOTEQUAL(517), GEQUAL(518), ALWAYS(519)
                                // REF, //(0), 0 - 2^n-1 where n is number of bit planes in stencil buffer
                                // MASK, //(0xFFFFFFFF), 0 - 0xFFFFFFFF
//                ST_STENCILFUNCSEPARATE, // FACE, //(?), FRONT(1028), BACK(1029), FRONT_AND_BACK(1032)
                                        // FUNC, //(519), NEVER(512), LESS(513), LEQUAL(515), EQUAL(514), GREATER(516), NOTEQUAL(517), GEQUAL(518), ALWAYS(519)
                                        // REF, //(0), 0 - 2^n-1 where n is number of bit planes in stencil buffer
                                        // MASK, //(0xFFFFFFFF), 0 - 0xFFFFFFFF
//                ST_STENCILMASK, //(0xFFFFFFFF), 0 - 0xFFFFFFFF
//                ST_STENCILMASKSEPARATE, // FACE, //(?), FRONT(1028), BACK(1029), FRONT_AND_BACK(1032)
                                        // MASK, //(0xFFFFFFFF), 0 - 0xFFFFFFFF
//                ST_STENCILOP, // SFAIL, //(7680), KEEP(7680), ZERO(0), REPLACE(7681), INCR(7682), DECR(7683), INVERT(5386), INCR_WRAP(34055), DECR_WRAP(34056)
                            // DPFAIL, //(7680), KEEP(7680), ZERO(0), REPLACE(7681), INCR(7682), DECR(7683), INVERT(5386), INCR_WRAP(34055), DECR_WRAP(34056)
                            // DPPASS, //(7680), KEEP(7680), ZERO(0), REPLACE(7681), INCR(7682), DECR(7683), INVERT(5386), INCR_WRAP(34055), DECR_WRAP(34056)
//                ST_STENCILOPSEPARATE, // FACE, //(?), FRONT(1028), BACK(1029), FRONT_AND_BACK(1032)
                                    // SFAIL, //(7680), KEEP(7680), ZERO(0), REPLACE(7681), INCR(7682), DECR(7683), INVERT(5386), INCR_WRAP(34055), DECR_WRAP(34056)
                                    // DPFAIL, //(7680), KEEP(7680), ZERO(0), REPLACE(7681), INCR(7682), DECR(7683), INVERT(5386), INCR_WRAP(34055), DECR_WRAP(34056)
                                    // DPPASS, //(7680), KEEP(7680), ZERO(0), REPLACE(7681), INCR(7682), DECR(7683), INVERT(5386), INCR_WRAP(34055), DECR_WRAP(34056)
//                ST_STENCILTESTENABLE //(0), FALSE(0), TRUE(1)
        };

    protected:
        virtual ~State() {}

    public:
        static GLTFWRITERSPEC State *Create(GLTF *gltf, 
            StateType type, 
            double v1, 
            double v2 = 0, 
            double v3 = 0, 
            double v4 = 0 
        );
    };

    class Technique : public Object
    {
    protected:
        virtual ~Technique() {}

    public:
        static GLTFWRITERSPEC Technique *Create(GLTF *gltf, 
            Program *program = 0, 
            bool is2D = false 
        );

        GLTFWRITERSPEC virtual Technique *Mirror() = 0;
        GLTFWRITERSPEC virtual bool AppendParameter(Parameter *parameter 
        ) = 0;
        GLTFWRITERSPEC virtual bool AppendState(State *state 
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