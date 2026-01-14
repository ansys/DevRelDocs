# Class ANSYS::AVZ::GLTFWriter::Texture

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture"></a>

![][C++]
![][public]


Textures are images that can be used to color a primitive.



**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a371375ee6053e80e6977fdd9ce5be21b)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a9f5eb6e33bc36153297b3a8d1878436c)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a8c46bafffa13ab34499979ea6af0e82a)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [TextureFormat](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0)
* [TextureTarget](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a731d022c687a76ceb8e4813710e4b80a)
* [TF\_RGB](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0ad2d3f7c19b6b3dc31097082729d1ea42)
* [TF\_RGBA](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0a74ec6e31736f6a07eed7d43352e93579)
* [TT\_TEXTURE\_2D](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a731d022c687a76ceb8e4813710e4b80aab2bc887584b1b6af4ba056f3031def75)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)
* [~Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a21ea8ba8fc324dce157d034efb395f60)

## Public types

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0"></a>
### Enumeration type TextureFormat

![][public]



```cpp
enum TextureFormat {
  TF_RGB = 6407,
  TF_RGBA = 6408
}
```




Format of image data or color data



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0ad2d3f7c19b6b3dc31097082729d1ea42"></a>
#### Enumerator TF\_RGB

3 unsigned chars per pixel.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0a74ec6e31736f6a07eed7d43352e93579"></a>
#### Enumerator TF\_RGBA

4 unsigned chars per pixel.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a731d022c687a76ceb8e4813710e4b80a"></a>
### Enumeration type TextureTarget

![][public]



```cpp
enum TextureTarget {
  TT_TEXTURE_2D = 3553
}
```




[Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) targets



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a731d022c687a76ceb8e4813710e4b80aab2bc887584b1b6af4ba056f3031def75"></a>
#### Enumerator TT\_TEXTURE\_2D

texture is 2 dimensional.



## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a21ea8ba8fc324dce157d034efb395f60"></a>
### Function ~Texture

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Texture::~Texture()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a371375ee6053e80e6977fdd9ce5be21b"></a>
### Function Create

![][public]
![][static]


```cpp
static Texture * ANSYS::AVZ::GLTFWriter::Texture::Create(GLTF *gltf, TextureFormat format, TextureTarget target, Sampler *sampler, Image *image)
```




Creates a texture from an [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) and [Sampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler). 
**Returns**:

[Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* [TextureFormat](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0) **format**: [in] [Texture::TextureFormat](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0) describing image data.
* [TextureTarget](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a731d022c687a76ceb8e4813710e4b80a) **target**: [in] Must be [Texture::TextureTarget](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a731d022c687a76ceb8e4813710e4b80a) = TT_TEXTURE_2D.
* [Sampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler) * **sampler**: [in] [Sampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler) object.
* [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) * **image**: [in] [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) object.

**Return type**: [Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a9f5eb6e33bc36153297b3a8d1878436c"></a>
### Function Create

![][public]
![][static]


```cpp
static Texture * ANSYS::AVZ::GLTFWriter::Texture::Create(GLTF *gltf, TextureFormat format, unsigned int numColors, const unsigned char *colors, bool smooth=true, unsigned int numBands=0, const float *bandLocations=0)
```




Creates a texture from a 1D array of colors. Colors are linearly (not logaritmically) interpolated. The [Sampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler) and [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) are created internally. 
**Returns**:

[Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* [TextureFormat](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0) **format**: [in] [Texture::TextureFormat](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0) describing color data.
* unsigned int **numColors**: [in] Number of colors in colors.
* const unsigned char * **colors**: [in] 1D array of RGB or RGBA tuple of colors.
* bool **smooth** = true : [in] Optional, flag indicating whether to create banded texture or smooth gradient texture.
* unsigned int **numBands** = 0 : [in] Optional, If smooth is false, indicates number of bands to create from colors
* const float * **bandLocations** = 0 : [in] Optional, If smooth is false, indicates locations of start of band within texture, specified as fraction from 0 to 1. bandLocation size is specified by numBands.

**Return type**: [Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a8c46bafffa13ab34499979ea6af0e82a"></a>
### Function Create

![][public]
![][static]


```cpp
static Texture * ANSYS::AVZ::GLTFWriter::Texture::Create(GLTF *gltf, TextureFormat format, unsigned int width, unsigned int height, unsigned char *data)
```




Creates a texture from a 2D array of colors. The [Sampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_sampler) and [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) are created internally. 
**Returns**:

[Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* [TextureFormat](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0) **format**: [in] [Texture::TextureFormat](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture_1a7a15f61f5885a3e0a575d40125631ee0) describing color array data.
* unsigned int **width**: [in] Width of image data.
* unsigned int **height**: [in] Height of image data.
* unsigned char * **data**: [in] 2D array of RGB or RGBA tuple of colors

**Return type**: [Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)