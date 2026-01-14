# Class ANSYS::AVZ::GLTFWriter::Utils::Repack

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack"></a>

![][C++]
![][public]


Manages repacking of indices from unsigned int type to unsigned short type. This only works for POINTS, LINES, or TRIANGLES.

---

 **How it works** <br/>
Suppose you have 20 vertices that are used to form 13 triangles. <br/>
Suppose the indices are: <br/>
[ 0, 7, 17, 9, 5, 19, 1, 12, 15, 8, 18, 17, 19, 5, 13, 2, 5, 13, 4, 5, 16, 4, 9, 7, 18, 14, 4, 11, 18, 13, 8, 5, 9, 2, 1, 19, 3, 0, 4] <br/>
To facilitate this example, suppose we want a maximum index of 8 instead of the maximum unsigned short of 65535. <br/>
The repacking algorithm could regroup the indices as: <br/>
[ 9, 5, 19, 19, 5, 13, 2, 5, 13, 4, 5, 16, 8, 5, 9, 2, 1, 19] <br/>
[ 0, 7, 17, 8, 18, 17, 4, 9, 7, 18, 14, 4, 3, 0, 4] <br/>
[ 1, 12, 15, 11, 18, 13] <br/>
The index values are changed to: <br/>
[ 1, 0, 2, 2, 0, 3, 4, 0, 3, 5, 0, 6, 7, 0, 1, 4, 8, 2] <br/>
[ 5, 3, 4, 6, 1, 4, 0, 7, 3, 1, 2, 0, 8, 5, 0] <br/>
[ 0, 1, 2, 3, 4, 5] ---

## Members

* [ConstructRepackAttribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a1487b86e5090019cf7565e144fe11e4f)
* [ConstructRepackAttribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1ad414f449c9db7ed809688409ca2481d1)
* [ConstructRepackIndex](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1ab3bd7bca7382f17a0c08e144b67d22f2)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1aac5034c27c24bb12676c465abf4163ab)
* [Destroy](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1ad07982f15ab3f57fd454d7e2c7f621a0)
* [NumAttributes](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a43a74d90484a85856103c33969eb7107)
* [NumElements](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a50e2eaf986369c115fe9cae008187cc0)
* [NumPacks](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a69a383562c62ca71c8a785c96f773fb3)
* [~Repack](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1acb624fcd6a4f3227c208c12f0a9cc0c1)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1acb624fcd6a4f3227c208c12f0a9cc0c1"></a>
### Function ~Repack

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Utils::Repack::~Repack()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1aac5034c27c24bb12676c465abf4163ab"></a>
### Function Create

![][public]
![][static]


```cpp
static Repack * ANSYS::AVZ::GLTFWriter::Utils::Repack::Create(unsigned int elementCount, unsigned int elementSize, const unsigned int *indices)
```




Constructs a repacking object for repacking indices from unsigned int to unsigned short.



**Parameters**:

* unsigned int **elementCount**: [in] Number of elements to repack.
* unsigned int **elementSize**: [in] Number of attributes per element.
* const unsigned int * **indices**: [in] Indexes into attributes of size elementSize * elementCount.

**Return type**: [Repack](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1ad07982f15ab3f57fd454d7e2c7f621a0"></a>
### Function Destroy

![][public]
![][static]


```cpp
static void ANSYS::AVZ::GLTFWriter::Utils::Repack::Destroy(Repack *packer)
```




Deallocates all storage owned by [Repack](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack) object.



**Parameters**:

* [Repack](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack) * **packer**

**Return type**: void

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a69a383562c62ca71c8a785c96f773fb3"></a>
### Function NumPacks

![][public]
![][const]


```cpp
virtual unsigned int ANSYS::AVZ::GLTFWriter::Utils::Repack::NumPacks() const =0
```




Number of packings required to repack unsigned int indices into unsigned short indices. 
**Returns**:

Number of packings.



**Return type**: unsigned int

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a43a74d90484a85856103c33969eb7107"></a>
### Function NumAttributes

![][public]
![][const]


```cpp
virtual unsigned int ANSYS::AVZ::GLTFWriter::Utils::Repack::NumAttributes(unsigned int packNum) const =0
```




**Returns**:

Number of attributes in packing given by packNum.



**Parameters**:

* unsigned int **packNum**: [in] Packing index.

**Return type**: unsigned int

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a1487b86e5090019cf7565e144fe11e4f"></a>
### Function ConstructRepackAttribute

![][public]


```cpp
virtual const int * ANSYS::AVZ::GLTFWriter::Utils::Repack::ConstructRepackAttribute(const unsigned int *indices, unsigned int attributeSize, const int *attributeData, unsigned int packNum)=0
```




Creates packing of attribute data for packing packNum. 
**Returns**:

packed attribute. Do not delete this pointer.



**Parameters**:

* const unsigned int * **indices**: [in] Indexes into attribute.
* unsigned int **attributeSize**: [in] Number of typename T per attribute.
* const int * **attributeData**: [in] attribute data.
* unsigned int **packNum**: [in] Packing index.

**Return type**: const int *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1ad414f449c9db7ed809688409ca2481d1"></a>
### Function ConstructRepackAttribute

![][public]


```cpp
virtual const float * ANSYS::AVZ::GLTFWriter::Utils::Repack::ConstructRepackAttribute(const unsigned int *indices, unsigned int attributeSize, const float *attributeData, unsigned int packNum)=0
```




Creates packing of attribute data for packing packNum. 
**Returns**:

packed attribute. Do not delete this pointer.



**Parameters**:

* const unsigned int * **indices**: [in] Indexes into attribute.
* unsigned int **attributeSize**: [in] Number of typename T per attribute.
* const float * **attributeData**: [in] attribute data.
* unsigned int **packNum**: [in] Packing index.

**Return type**: const float *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1a50e2eaf986369c115fe9cae008187cc0"></a>
### Function NumElements

![][public]
![][const]


```cpp
virtual unsigned int ANSYS::AVZ::GLTFWriter::Utils::Repack::NumElements(unsigned int packNum) const =0
```




Number of elements in packing given by packNum. 
**Returns**:

Number of elements.



**Parameters**:

* unsigned int **packNum**: [in] Packing index.

**Return type**: unsigned int

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_utils_1_1_repack_1ab3bd7bca7382f17a0c08e144b67d22f2"></a>
### Function ConstructRepackIndex

![][public]


```cpp
virtual const unsigned short * ANSYS::AVZ::GLTFWriter::Utils::Repack::ConstructRepackIndex(const unsigned int *indices, unsigned int packNum)=0
```




Creates packing of indices for packing packNum. 
**Returns**:

packed index. Do not delete this pointer.



**Parameters**:

* const unsigned int * **indices**: [in] Indexes into attributes.
* unsigned int **packNum**: [in] Packing index.

**Return type**: const unsigned short *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)