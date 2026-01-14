# Class ANSYS::AVZ::GLTFWriter::Index

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index"></a>

![][C++]
![][public]


Indexes define elements within primitives.

The element data is found in the attributes appended to the primitives. Every primitive requires an index. The indices define how the attributes are rendered.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index_1ae2b2f30fcecb46aee7ee983b826bf9bc)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Index](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index_1a4635a0b76e52e71f080484dfeecf967e)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index_1a4635a0b76e52e71f080484dfeecf967e"></a>
### Function ~Index

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Index::~Index()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index_1ae2b2f30fcecb46aee7ee983b826bf9bc"></a>
### Function Create

![][public]
![][static]


```cpp
static Index * ANSYS::AVZ::GLTFWriter::Index::Create(GLTF *gltf, unsigned int count, const unsigned short *indices, Buffer *buffer=0)
```




Creates a set of indices that define the renderable elements. 
**Returns**:

[Index](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* unsigned int **count**: [in] Number of indices.
* const unsigned short * **indices**: [in] Indexes into attributes for elements.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write indices. Indices are appended to buffer.

**Return type**: [Index](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)