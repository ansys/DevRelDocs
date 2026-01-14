# Class ANSYS::AVZ::GLTFWriter::Buffer

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer"></a>

![][C++]
![][public]


Buffers define files that are used to contain attribute and index data.

The creation and use of Buffers is optional. If they are not created with this mechanism they will be automatically created,





If Buffers are created automatically, a unique buffer will be created for each attribute and index. This could result in a large number of files in the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file set.





If Buffers are created with the [Buffer::Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer_1a2071ee98db605662795557c01dc338aa) method and passed to [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) and [Index](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index) creation methods, the attribute and index data will be appended to the already existing buffer data.





Grouping an object's (meshes) attribute data into a single buffer, may provide an increase in performance.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer_1a2071ee98db605662795557c01dc338aa)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer_1a183979e48487f1396f63245e4c3ea213)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer_1a183979e48487f1396f63245e4c3ea213"></a>
### Function ~Buffer

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Buffer::~Buffer()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer_1a2071ee98db605662795557c01dc338aa"></a>
### Function Create

![][public]
![][static]


```cpp
static Buffer * ANSYS::AVZ::GLTFWriter::Buffer::Create(GLTF *gltf)
```




Creates a [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer). A [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) can be passed to some [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) and [Index](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index) methods. 
**Returns**:

[Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.

**Return type**: [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)