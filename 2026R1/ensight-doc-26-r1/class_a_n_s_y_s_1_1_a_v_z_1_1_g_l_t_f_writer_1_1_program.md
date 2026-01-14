# Class ANSYS::AVZ::GLTFWriter::Program

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program"></a>

![][C++]
![][public]


Programs are the GLSL executable code for rendering the primitives.

A program is comprised of a vertex shader and a fragment shader.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program_1adf7fe1836c19d37a608b2c4d908b1d15)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)
* [~Program](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program_1acf1145e477e328afbc2ad50f0a362e7e)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program_1acf1145e477e328afbc2ad50f0a362e7e"></a>
### Function ~Program

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Program::~Program()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program_1adf7fe1836c19d37a608b2c4d908b1d15"></a>
### Function Create

![][public]
![][static]


```cpp
static Program * ANSYS::AVZ::GLTFWriter::Program::Create(GLTF *gltf, Shader *vertexShader, Shader *fragmentShader)
```




Creates a program 
**Returns**:

[Program](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object
* [Shader](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader) * **vertexShader**: [in] [Shader](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader) object for handling vertices
* [Shader](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader) * **fragmentShader**: [in] [Shader](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_shader) object for handling fragments

**Return type**: [Program](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)