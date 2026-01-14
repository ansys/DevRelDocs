# Class ANSYS::AVZ::GLTFWriter::Image

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image"></a>

![][C++]
![][public]


Images define texture data.

Every texture must have a corresponding image.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image_1a7f4a065be89b1b0d65c4f6b158553729)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image_1afee9bb9958839cbd828a9424bda8d72d)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image_1aa018cfe0bdb60228dad1ab7d622fa498)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image_1aa018cfe0bdb60228dad1ab7d622fa498"></a>
### Function ~Image

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Image::~Image()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image_1a7f4a065be89b1b0d65c4f6b158553729"></a>
### Function Create

![][public]
![][static]


```cpp
static Image * ANSYS::AVZ::GLTFWriter::Image::Create(GLTF *gltf, const char *filePath, bool generateMipmap=false, bool isProxy=false)
```




Creates a image from a "PNG" file. 
**Returns**:

[Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **filePath**: [in] Path to local file system "PNG" file.
* bool **generateMipmap** = false : [in] Optional, flag indicating whether or not to generate mipmaps.
* bool **isProxy** = false : [in] Optional, flag indicating whether this is a proxy image for a scene. The internal file name will end with "Proxy.png" for easier external tool processing.

**Return type**: [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image_1afee9bb9958839cbd828a9424bda8d72d"></a>
### Function Create

![][public]
![][static]


```cpp
static Image * ANSYS::AVZ::GLTFWriter::Image::Create(GLTF *gltf, unsigned int dataSize, const unsigned char *data, bool generateMipmap=false, bool isProxy=false)
```




Creates a image from in memory "PNG" data. 
**Returns**:

[Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* unsigned int **dataSize**: [in] Size of PNG data in bytes.
* const unsigned char * **data**: [in] Memory mapped PNG file.
* bool **generateMipmap** = false : [in] Optional, flag indicating whether or not to generate mipmaps.
* bool **isProxy** = false : [in] Optional, flag indicating whether this is a proxy image for a scene. The internal file name will end with "Proxy.png" for easier external tool processing.

**Return type**: [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)