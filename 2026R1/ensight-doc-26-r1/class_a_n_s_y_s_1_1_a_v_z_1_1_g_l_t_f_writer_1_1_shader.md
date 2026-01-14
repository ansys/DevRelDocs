# Class ANSYS::AVZ::GLTFWriter::Shader

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader"></a>

![][C++]
![][public]


Shaders are the GLSL executable code for vertex and fragment.



**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader_1a6992cedf57147d15867859bb24dffeaf)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)
* [~Shader](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader_1a577a453c6ce5bd424a0de28c5bc2cba4)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader_1a577a453c6ce5bd424a0de28c5bc2cba4"></a>
### Function ~Shader

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Shader::~Shader()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader_1a6992cedf57147d15867859bb24dffeaf"></a>
### Function Create

![][public]
![][static]


```cpp
static Shader * ANSYS::AVZ::GLTFWriter::Shader::Create(GLTF *gltf, const char *shaderText, unsigned int numAttributes, const char **attributes, unsigned int numUniforms, const char **uniforms)
```




Creates a shader. 
**Returns**:

[Shader](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **shaderText**: [in] Text of program.
* unsigned int **numAttributes**: [in] Number of attributes.
* const char ** **attributes**: [in] List of attributes in program.
* unsigned int **numUniforms**: [in] Number of uniforms.
* const char ** **uniforms**: [in] List of uniforms in program.

**Return type**: [Shader](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)