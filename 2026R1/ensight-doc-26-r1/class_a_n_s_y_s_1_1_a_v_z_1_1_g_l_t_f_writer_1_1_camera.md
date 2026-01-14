# Class ANSYS::AVZ::GLTFWriter::Camera

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera"></a>

![][C++]
![][public]


Cameras define an orthographic or perspective projection of the scene.

At the moment, the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) Viewer only cares whether the camera is Orthographic or Perspective. No camera properties are used.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [CreateOrthographic](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera_1a561ce97254aba7c457ed8622c04a4163)
* [CreatePerspective](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera_1a484e2ff4f01c0ce3dabad549bd9befa3)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Camera](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera_1a975311c2857949b3bc5ebfcb44775eda)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera_1a975311c2857949b3bc5ebfcb44775eda"></a>
### Function ~Camera

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Camera::~Camera()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera_1a561ce97254aba7c457ed8622c04a4163"></a>
### Function CreateOrthographic

![][public]
![][static]


```cpp
static Camera * ANSYS::AVZ::GLTFWriter::Camera::CreateOrthographic(GLTF *gltf, const char *name=0, float xmag=1, float ymag=1, float zfar=1000, float znear=-1000)
```




Creates an orthographic camera. 
**Returns**:

[Camera](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **name** = 0 : [in] Optional, name of camera.
* float **xmag** = 1 : [in] Optional, magnification in x direction (not currently used).
* float **ymag** = 1 : [in] Optional, magnification in y direction (not currently used).
* float **zfar** = 1000 : [in] Optional, far clipping plane (not currently used).
* float **znear** = -1000 : [in] Optional, near clipping plane (not currently used).

**Return type**: [Camera](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera_1a484e2ff4f01c0ce3dabad549bd9befa3"></a>
### Function CreatePerspective

![][public]
![][static]


```cpp
static Camera * ANSYS::AVZ::GLTFWriter::Camera::CreatePerspective(GLTF *gltf, const char *name=0, float yfov=22.619864948, float aspectRatio=1, float zfar=100000, float znear=0.1)
```




Creates a perspective camera. 
**Returns**:

[Camera](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **name** = 0 : [in] Optional, name of camera.
* float **yfov** = 22.619864948 : [in] Optional, vertical field of view in degrees (not currently used).
* float **aspectRatio** = 1 : [in] Optional, aspect ratio of field of view (height to width)(not currently used).
* float **zfar** = 100000 : [in] Optional, far clipping plane (not currently used).
* float **znear** = 0.1 : [in] Optional, near clipping plane (not currently used).

**Return type**: [Camera](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)