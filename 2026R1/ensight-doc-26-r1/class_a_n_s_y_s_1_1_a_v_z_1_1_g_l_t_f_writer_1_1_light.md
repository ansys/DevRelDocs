# Class ANSYS::AVZ::GLTFWriter::Light

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light"></a>

![][C++]
![][public]


Lights define the light objects that can be added to a light node.

Lights are only required for techniques that have auto-generated programs. For auto-generated programs, the programs contain lighting code for each light. Currently only Ambient and Directional lights are supported.





For non-auto-generated programs, it is the responsibility of the program writer to generate a program that performs lighting calculations.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [CreateAmbient](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light_1ab8b2ea52bef68e5ca3af3732a9acebce)
* [CreateDirectional](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light_1a11abbc8ea602057b62334b1c9e183c1f)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Light](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light_1a4202044c656bb4c51d23888249941991)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light_1a4202044c656bb4c51d23888249941991"></a>
### Function ~Light

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Light::~Light()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light_1a11abbc8ea602057b62334b1c9e183c1f"></a>
### Function CreateDirectional

![][public]
![][static]


```cpp
static Light * ANSYS::AVZ::GLTFWriter::Light::CreateDirectional(GLTF *gltf, float colR=1, float colG=1, float colB=1, float dirX=0, float dirY=0, float dirZ=-1, float specColR=1, float specColG=1, float specColB=1, float shininess=100)
```




Creates a Directional light. 
**Returns**:

[Light](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* float **colR** = 1 : [in] Optional, red component. Ranges from 0 to 1.
* float **colG** = 1 : [in] Optional, green component. Ranges from 0 to 1.
* float **colB** = 1 : [in] Optional, blue component. Ranges from 0 to 1.
* float **dirX** = 0 : [in] Optional, X component of direction.
* float **dirY** = 0 : [in] Optional, Y component of direction.
* float **dirZ** = -1 : [in] Optional, Z component of direction.
* float **specColR** = 1 : [in] Optional, red component of specular reflection. Ranges from 0 to 1.
* float **specColG** = 1 : [in] Optional, green component of specular reflection. Ranges from 0 to 1.
* float **specColB** = 1 : [in] Optional, blue component of specular reflection. Ranges from 0 to 1.
* float **shininess** = 100 : [in] Optional, shininess of specular reflection. Ranges from 0 to 128.

**Return type**: [Light](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light_1ab8b2ea52bef68e5ca3af3732a9acebce"></a>
### Function CreateAmbient

![][public]
![][static]


```cpp
static Light * ANSYS::AVZ::GLTFWriter::Light::CreateAmbient(GLTF *gltf, float colR=0.3, float colG=0.3, float colB=0.3)
```




Creates an Ambient light. 
**Returns**:

[Light](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* float **colR** = 0.3 : [in] Optional, red component. Ranges from 0 to 1.
* float **colG** = 0.3 : [in] Optional, green component. Ranges from 0 to 1.
* float **colB** = 0.3 : [in] Optional, blue component. Ranges from 0 to 1.

**Return type**: [Light](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)