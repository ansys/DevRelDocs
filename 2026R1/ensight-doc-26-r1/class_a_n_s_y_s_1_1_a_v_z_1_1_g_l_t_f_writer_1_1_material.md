# Class ANSYS::AVZ::GLTFWriter::Material

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material"></a>

![][C++]
![][public]


Materials describe how primitives are rendered.

An important part of materials is the values that override a corresponding value in the technique. This allows for techniques to be reused.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [AppendValue](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1a2f8a41e41af7d9b8cd498506f6510dd7)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1a79c18f25f8eea91838d931624f6139fb)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [Mirror](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1ac3d53ec70598e2dae2d68c3727bfe6ed)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1abe6c9acc2fce8ea598d9671af9b7a8ce)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1abe6c9acc2fce8ea598d9671af9b7a8ce"></a>
### Function ~Material

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Material::~Material()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1a79c18f25f8eea91838d931624f6139fb"></a>
### Function Create

![][public]
![][static]


```cpp
static Material * ANSYS::AVZ::GLTFWriter::Material::Create(GLTF *gltf, Technique *technique)
```




Creates a material. 
**Returns**:

[Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* [Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique) * **technique**: [in] [Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique) object describing how to render primitive.

**Return type**: [Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material) *

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1ac3d53ec70598e2dae2d68c3727bfe6ed"></a>
### Function Mirror

![][public]


```cpp
virtual Material * ANSYS::AVZ::GLTFWriter::Material::Mirror()=0
```




Creates a mirrored [Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material). 
**Returns**:

[Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material) object. Do not delete this pointer.



**Return type**: [Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1a2f8a41e41af7d9b8cd498506f6510dd7"></a>
### Function AppendValue

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Material::AppendValue(Value *value)=0
```




Adds a value to a material. Multiple values can be appended to a material. Values are generally Optional, and are used to override default values of techniques parameters. [Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value) with name "texture0" is reserved for color of scalar that is used in probing. 
**Returns**:

Status of AppendValue.



**Parameters**:

* [Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value) * **value**: [in] [Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value) object.

**Return type**: bool

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)