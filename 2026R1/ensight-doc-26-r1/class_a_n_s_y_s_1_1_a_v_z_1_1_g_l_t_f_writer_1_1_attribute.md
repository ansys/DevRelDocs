# Class ANSYS::AVZ::GLTFWriter::Attribute

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute"></a>

![][C++]
![][public]


Attributes define the per element index values for elements defined by [Index](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index).

There must be an attributes that defines the vertices to use for the element indices. Other attributes defining colors, normals, texture coordinates, etc., may be defined.





Attributes are part of the primitive and are eventually passed to the vertex shader. All attributes of the vertex shader must have a corresponding attribute defined in the primitive.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [AT\_FLOAT](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a3d1b024141a9c7de7ffd096701addb85)
* [AT\_FLOAT\_MAT4](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a04fcf6d039fbcf4c7cadfe33cf81d0c3)
* [AT\_FLOAT\_VEC2](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a9eab3991f35ae7fb67b3378f9218d0ed)
* [AT\_FLOAT\_VEC3](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a2239bf25cc747ce3d3c58688e1289158)
* [AT\_FLOAT\_VEC4](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a70cacdf17684e1b3a9fcf16e76dfe0af)
* [AT\_INT](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3aede267b3d98098971964943e31579d32)
* [AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a037b156e83bd7013027f7d15fc00f5dc)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a4e4e5cafbefd3c7f34c4c5a133943ace)
* [CreateColor](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1af7c14f176b8211050c16bae1712b2755)
* [CreateDisplacementScale](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1ab72fdf4102cc88a758dabbcda1af2021)
* [CreateNormal](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a3d834f30e044fb8155197f9de012cf66)
* [CreatePointSize](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a86d67ad8a1a3c7d5b30b6e07af10c32e)
* [CreatePosition](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1add9bba2965ecc82b29fbe20609a288e4)
* [CreateTextureCoord](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1abfafcbcdc778bed87620a01798a98f6b)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetLogarithmic](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a795c8d57e0534017a267ca9511f788ce)
* [SetMinMax](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1ac7d2ab8c33ae471917966f920524fad1)
* [SetMinMax](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1ae1fbcbb6aad40e3275a39db380ba3192)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1abb0798664d0fb79ccff4444fcc0408e9)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Public types

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3"></a>
### Enumeration type AttributeType

![][public]



```cpp
enum AttributeType {
  AT_INT = 5124,
  AT_FLOAT = 5126,
  AT_FLOAT_VEC2 = 35664,
  AT_FLOAT_VEC3 = 35665,
  AT_FLOAT_VEC4 = 35666,
  AT_FLOAT_MAT4 = 35676
}
```




Type of attribute.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3aede267b3d98098971964943e31579d32"></a>
#### Enumerator AT\_INT

4 byte integer



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a3d1b024141a9c7de7ffd096701addb85"></a>
#### Enumerator AT\_FLOAT

4 byte float



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a9eab3991f35ae7fb67b3378f9218d0ed"></a>
#### Enumerator AT\_FLOAT\_VEC2

2 AT_FLOATs



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a2239bf25cc747ce3d3c58688e1289158"></a>
#### Enumerator AT\_FLOAT\_VEC3

3 AT_FLOATs



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a70cacdf17684e1b3a9fcf16e76dfe0af"></a>
#### Enumerator AT\_FLOAT\_VEC4

4 AT_FLOATs



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3a04fcf6d039fbcf4c7cadfe33cf81d0c3"></a>
#### Enumerator AT\_FLOAT\_MAT4

4x4 (16) AT_FLOATs



## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1abb0798664d0fb79ccff4444fcc0408e9"></a>
### Function ~Attribute

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Attribute::~Attribute()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a037b156e83bd7013027f7d15fc00f5dc"></a>
### Function Create

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::Create(GLTF *gltf, const char *name, AttributeType type, unsigned int count, const int *data, Buffer *buffer=0)
```




Creates an attribute of the given type and name. There are several names that are reserved for special use: 
* POSITION - vertices of element index, this attribute must be defined 

* TEXCOORD0 - variable value at element index


**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **name**: [in] Name of attribute.
* [AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) **type**: [in] [Attribute::AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) defining type of attribute.
* unsigned int **count**: [in] Number of attributes. Number is relative to sizeof type.
* const int * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a4e4e5cafbefd3c7f34c4c5a133943ace"></a>
### Function Create

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::Create(GLTF *gltf, const char *name, AttributeType type, unsigned int count, const float *data, Buffer *buffer=0)
```




Creates an attribute of the given type and name. There are several names that are reserved for special use: 
* POSITION - vertices of element index, this attribute must be defined 

* TEXCOORD0 - variable value at element index


**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **name**: [in] Name of attribute.
* [AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) **type**: [in] [Attribute::AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) defining type of attribute.
* unsigned int **count**: [in] Number of attributes. Number is relative to sizeof type.
* const float * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1add9bba2965ecc82b29fbe20609a288e4"></a>
### Function CreatePosition

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::CreatePosition(GLTF *gltf, unsigned int count, const float *data, Buffer *buffer=0)
```




Creates an attribute of type AT_FLOAT_VEC3 and name "POSITION". Every primitive must have an attribute with the name "POSITION". The [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) Viewer uses the "POSITION" to perform hit detection and probing. 
**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* unsigned int **count**: [in] Number of attributes. Number is relative to sizeof type.
* const float * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1af7c14f176b8211050c16bae1712b2755"></a>
### Function CreateColor

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::CreateColor(GLTF *gltf, AttributeType type, unsigned int count, const float *data, Buffer *buffer=0)
```




Creates an attribute of name "COLOR". The "COLOR" attribute is usually optional. 
**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* [AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) **type**: [in] [Attribute::AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) defining type of attribute.
* unsigned int **count**: [in] Number of attributes.
* const float * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a86d67ad8a1a3c7d5b30b6e07af10c32e"></a>
### Function CreatePointSize

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::CreatePointSize(GLTF *gltf, unsigned int count, const float *data, Buffer *buffer=0)
```




Creates an attribute of type AT_FLOAT and name "POINTSIZE". The "POINTSIZE" attribute is usually optional. 
**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* unsigned int **count**: [in] Number of attributes. Number is relative to sizeof type.
* const float * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1ab72fdf4102cc88a758dabbcda1af2021"></a>
### Function CreateDisplacementScale

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::CreateDisplacementScale(GLTF *gltf, unsigned int count, const float *data, Buffer *buffer=0)
```




Creates an attribute of type AT_FLOAT_VEC4 and name "DISPLACEMENTSCALE". The "DISPLACEMENTSCALE" attribute is usually optional. It specifies a translation XYZ and a uniform scale S as a four float tuple XYZS 
**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* unsigned int **count**: [in] Number of attributes. Number is relative to sizeof type.
* const float * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a3d834f30e044fb8155197f9de012cf66"></a>
### Function CreateNormal

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::CreateNormal(GLTF *gltf, unsigned int count, const float *data, Buffer *buffer=0)
```




Creates an attribute of type AT_FLOAT_VEC3 and name "NORMAL". The normal data must be normalized. The "NORMAL" attribute is usually optional. It is required for lighting calculations and spherical texture coordinate mapping. 
**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* unsigned int **count**: [in] Number of attributes. Number is relative to sizeof type.
* const float * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1abfafcbcdc778bed87620a01798a98f6b"></a>
### Function CreateTextureCoord

![][public]
![][static]


```cpp
static Attribute * ANSYS::AVZ::GLTFWriter::Attribute::CreateTextureCoord(GLTF *gltf, unsigned int num, unsigned int count, const float *data, Buffer *buffer=0)
```




Creates an attribute of type AT_FLOAT_VEC and name "TEXCOORDnum". This creates a texture coordinate of type AT_FLOAT. Use Create to create texture coordinates into 2D textures. [Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) coordinates are optional, but generally required for texture mapped materials. If the primitive has a "TEXCOORD0", the texture coordinate must be a 1D texture coordinate, as in the value of results variable. The [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) Viewer will use this texture coordinate to perform probing. The value at the probe point will be the value of the texture coordinate. 
**Returns**:

[Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* unsigned int **num**: [in] [Texture](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_texture) coordinate number.
* unsigned int **count**: [in] Number of attributes. Number is relative to sizeof type.
* const float * **data**: [in] Data for attribute. data type is base type of attribute.
* [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) * **buffer** = 0 : [in] Optional, [Buffer](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_buffer) into which to write attribute data. Data is appended to buffer.

**Return type**: [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) *

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1ac7d2ab8c33ae471917966f920524fad1"></a>
### Function SetMinMax

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Attribute::SetMinMax(AttributeType type, const int *mn, const int *mx)=0
```




Sets the min and max value of an attribute. The min and max value is required for all attributes. If SetMinMax is not called, the min and max values are automatically calculated from the attribute. Under some situations this is not the desired value. When programs are auto-generated, and the primitive has a "TEXCOORD0", the generated program will use the min/max of the texture coordinate to normalize the texture coordinate value for use as a texture lookup value. 
**Returns**:

Status of SetMinMax.



**Parameters**:

* [AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) **type**: [in] [Attribute::AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) defining type of attribute.
* const int * **mn**: [in] Minimum value of attribute.
* const int * **mx**: [in] Maximum value of attribute.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1ae1fbcbb6aad40e3275a39db380ba3192"></a>
### Function SetMinMax

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Attribute::SetMinMax(AttributeType type, const float *mn, const float *mx)=0
```




Sets the min and max value of an attribute. The min and max value is required for all attributes. If SetMinMax is not called, the min and max values are automatically calculated from the attribute. Under some situations this is not the desired value. When programs are auto-generated, and the primitive has a "TEXCOORD0", the generated program will use the min/max of the texture coordinate to normalize the texture coordinate value for use as a texture lookup value. 
**Returns**:

Status of SetMinMax.



**Parameters**:

* [AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) **type**: [in] [Attribute::AttributeType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a046f86686637a52f18e250a00d5687d3) defining type of attribute.
* const float * **mn**: [in] Minimum value of attribute.
* const float * **mx**: [in] Maximum value of attribute.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute_1a795c8d57e0534017a267ca9511f788ce"></a>
### Function SetLogarithmic

![][public]


```cpp
virtual void ANSYS::AVZ::GLTFWriter::Attribute::SetLogarithmic(bool log)=0
```




Sets a flag indicating whether to log the data values. Only used for results type data.



**Parameters**:

* bool **log**: [in] log flag.

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)