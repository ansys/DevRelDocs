# Namespace ANSYS::AVZ::GLTFWriter::Utils

<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils"></a>

![][C++]


Set of functions and classes that perform often required tasks.



## Classes

* [ANSYS::AVZ::GLTFWriter::Utils::Repack](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack)

## Functions

<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1a0577a4549c5f1819d12668849229a6dc"></a>
### Function ComputeElementNormals3

![][public]


```cpp
void ANSYS::AVZ::GLTFWriter::Utils::ComputeElementNormals3(const unsigned int numVertices, const float *vertices, const unsigned int numElements, const unsigned int elementSize, const unsigned short *indices, float *normals)
```




Computes XYZ element normals from vertices and elements. unsigned int and unsigned short indices are supported.



**Parameters**:

* const unsigned int **numVertices**: [in] Number of vertices.
* const float * **vertices**: [in] XYZ vertex data.
* const unsigned int **numElements**: [in] Number of elements.
* const unsigned int **elementSize**: [in] Number of vertices in element.
* const unsigned short * **indices**: [in] Vertex indices of element.
* float * **normals**: [in] Memory into which element normals are inserted. This is preallocated to a size of 3 * numVertices floats.

**Return type**: void

<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1acb2012b094a30a5b6c1df2fa55b5f4d1"></a>
### Function ComputeElementNormals3

![][public]


```cpp
void ANSYS::AVZ::GLTFWriter::Utils::ComputeElementNormals3(const unsigned int numVertices, const float *vertices, const unsigned int numElements, const unsigned int elementSize, const unsigned int *indices, float *normals)
```




Computes XYZ element normals from vertices and elements. unsigned int and unsigned short indices are supported.



**Parameters**:

* const unsigned int **numVertices**: [in] Number of vertices.
* const float * **vertices**: [in] XYZ vertex data.
* const unsigned int **numElements**: [in] Number of elements.
* const unsigned int **elementSize**: [in] Number of vertices in element.
* const unsigned int * **indices**: [in] Vertex indices of element.
* float * **normals**: [in] Memory into which element normals are inserted. This is preallocated to a size of 3 * numVertices floats.

**Return type**: void

<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1afa344d6cb377a0f47fe35f3bb82343f7"></a>
### Function ComputeVertexNormals3

![][public]


```cpp
void ANSYS::AVZ::GLTFWriter::Utils::ComputeVertexNormals3(const unsigned int numVertices, const float *vertices, const unsigned int numElements, const unsigned int elementSize, const unsigned short *indices, float *normals)
```




Computes XYZ vertex normals from vertices and elements. The element normals for all elements adjacent to a vertex are combined to get the vertex normal. unsigned int and unsigned short indices are supported.



**Parameters**:

* const unsigned int **numVertices**: [in] Number of vertices.
* const float * **vertices**: [in] XYZ vertex data.
* const unsigned int **numElements**: [in] Number of elements.
* const unsigned int **elementSize**: [in] Number of vertices in element.
* const unsigned short * **indices**: [in] Vertex indices of element.
* float * **normals**: [in] Memory into which vertex normals are inserted. This is preallocated to a size of 3 * numElements floats.

**Return type**: void

<a id="namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1aa5e70ea966a4606e34c640e4ed1e0815"></a>
### Function ComputeVertexNormals3

![][public]


```cpp
void ANSYS::AVZ::GLTFWriter::Utils::ComputeVertexNormals3(const unsigned int numVertices, const float *vertices, const unsigned int numElements, const unsigned int elementSize, const unsigned int *indices, float *normals)
```




Computes XYZ vertex normals from vertices and elements. The element normals for all elements adjacent to a vertex are combined to get the vertex normal. unsigned int and unsigned short indices are supported.



**Parameters**:

* const unsigned int **numVertices**: [in] Number of vertices.
* const float * **vertices**: [in] XYZ vertex data.
* const unsigned int **numElements**: [in] Number of elements.
* const unsigned int **elementSize**: [in] Number of vertices in element.
* const unsigned int * **indices**: [in] Vertex indices of element.
* float * **normals**: [in] Memory into which vertex normals are inserted. This is preallocated to a size of 3 * numElements floats.

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)