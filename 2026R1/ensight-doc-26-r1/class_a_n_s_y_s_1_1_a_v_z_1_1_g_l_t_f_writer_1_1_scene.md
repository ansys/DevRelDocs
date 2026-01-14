# Class ANSYS::AVZ::GLTFWriter::Scene

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene"></a>

![][C++]
![][public]


Scenes are the GLTFWriter class that create the view of the data that is defined in the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file.

Multiple scene can be defined, but only one is visible at a time. The initial scene displayed is defined by SetDefaultScene

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [Add2DText](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a4d7cac02889c439d22def05a361dab49)
* [Add3DText](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a4d9685d84f8b3fed30f4c2362fb39d66)
* [AppendMesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a76e34d4c05fe34dde0fcc4913ad63981)
* [AppendValue](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1ab033cebb1eab40cc7bb86fa1ad092b97)
* [BackgroundType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8)
* [BT\_LR](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8ab184284c27b0c77ef5df71e77d4d340c)
* [BT\_NONE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8ae8d061617eb1ce45fb866f0fe30ec807)
* [BT\_SOLID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8a4c72b14a6d37ecf0b5b819fcbb51c2e9)
* [BT\_TB](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8adee3d83b670d153540179591d75e0b8a)
* [BT\_TLBR](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8a606c17e6f3713cc10246561dc28c817a)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a97646b749a04d267d08b748fec27cf4a)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetCamera](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1ae84fba7ea3c00159c2eae7adbfbfa61d)
* [SetClipPlane](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a7a367018efd6a51a6c96f7aa482b8b7f)
* [SetLight](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1ac92acb916999693ccaaefe8a81962c67)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [SetProxyImage](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a4f02c1b6ff4c656ad44b583a76e95e42)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)
* [~Scene](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1aa1cf4c7eed54940b393ce8e4d1b53c16)

## Public types

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8"></a>
### Enumeration type BackgroundType

![][public]



```cpp
enum BackgroundType {
  BT_NONE = -1,
  BT_SOLID = 0,
  BT_TB,
  BT_LR,
  BT_TLBR
}
```




Type of background.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8ae8d061617eb1ce45fb866f0fe30ec807"></a>
#### Enumerator BT\_NONE

Use viewer default background.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8a4c72b14a6d37ecf0b5b819fcbb51c2e9"></a>
#### Enumerator BT\_SOLID

Make solid color from color 1.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8adee3d83b670d153540179591d75e0b8a"></a>
#### Enumerator BT\_TB

Make gradient from color 1 top to color 2 bottom.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8ab184284c27b0c77ef5df71e77d4d340c"></a>
#### Enumerator BT\_LR

Make gradient from color 1 left to color 2 right.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8a606c17e6f3713cc10246561dc28c817a"></a>
#### Enumerator BT\_TLBR

Make gradient from color 1 top/left to color 2 bottom/right.



## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1aa1cf4c7eed54940b393ce8e4d1b53c16"></a>
### Function ~Scene

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Scene::~Scene()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a97646b749a04d267d08b748fec27cf4a"></a>
### Function Create

![][public]
![][static]


```cpp
static Scene * ANSYS::AVZ::GLTFWriter::Scene::Create(GLTF *gltf, const char *name=0, const char *units=0, float scale=1, Scene::BackgroundType backgroundType=Scene::BT_NONE, float r1=0, float g1=0, float b1=0, float r2=0, float g2=0, float b2=0)
```




Creates a [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) scene. The scene node is automatically added to the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file. 
**Returns**:

[Scene](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **name** = 0 : [in] Optional, name of scene.
* const char * **units** = 0 : [in] Optional, units to display with ruler.
* float **scale** = 1 : [in] Optional, scale factor that converts displayed units to scene mesh units.
* [Scene::BackgroundType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8) **backgroundType** = [Scene::BT\_NONE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8ae8d061617eb1ce45fb866f0fe30ec807) : [in] Optional, [Scene::BackgroundType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a30ee8a815efbf58933da80142fdd62f8) defining type of background to create.
* float **r1** = 0 : [in] Optional, red component of solid color or first color of gradient.
* float **g1** = 0 : [in] Optional, green component of solid color or first color of gradient.
* float **b1** = 0 : [in] Optional, blue component of solid color or first color of gradient.
* float **r2** = 0 : [in] Optional, red component of second color of gradient.
* float **g2** = 0 : [in] Optional, green component of second color of gradient.
* float **b2** = 0 : [in] Optional, blue component of second color of gradient.

**Return type**: [Scene](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene) *

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1ae84fba7ea3c00159c2eae7adbfbfa61d"></a>
### Function SetCamera

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Scene::SetCamera(Node *camera)=0
```




Sets the camera node for the scene. Only a single camera can be set to a scene. If this is called a second time the second camera will be attached to the scene. The camera node is optional. By default, an orthographic camera is created with an isometric orientation that encompasses the entire scene. 
**Returns**:

Status of SetCamera.



**Parameters**:

* [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) * **camera**: [in] [Camera](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_camera) node.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1ac92acb916999693ccaaefe8a81962c67"></a>
### Function SetLight

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Scene::SetLight(Node *light)=0
```




Sets the light node for the scene. This node is only required for techniques that have auto-generated programs. All lighting calculations must be done in shader programs. 
**Returns**:

Status of SetLight.



**Parameters**:

* [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) * **light**: [in] [Light](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_light) node.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a4f02c1b6ff4c656ad44b583a76e95e42"></a>
### Function SetProxyImage

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Scene::SetProxyImage(Node *image)=0
```




Sets the proxy image node for the scene. A proxy image can be used while loading or on a system that does not support WebGL. The proxy image node is optional. 
**Returns**:

Status of SetProxyImage.



**Parameters**:

* [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) * **image**: [in] [Image](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_image) node.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a7a367018efd6a51a6c96f7aa482b8b7f"></a>
### Function SetClipPlane

![][public]


```cpp
virtual void ANSYS::AVZ::GLTFWriter::Scene::SetClipPlane(float p0x, float p0y, float p0z, float p1x, float p1y, float p1z, float p2x, float p2y, float p2z)=0
```




Sets a clip plane based on the three points given. Clipping plane is based on right hand rule, where normal is given by thumb direction when fingers follow direction of three points.





The part of the object above the plane (normal direction) is clipped



**Parameters**:

* float **p0x**: [in] x coordinate of first point of plane.
* float **p0y**: [in] y coordinate of first point of plane.
* float **p0z**: [in] z coordinate of first point of plane.
* float **p1x**: [in] x coordinate of second point of plane.
* float **p1y**: [in] y coordinate of second point of plane.
* float **p1z**: [in] z coordinate of second point of plane.
* float **p2x**: [in] x coordinate of third point of plane.
* float **p2y**: [in] y coordinate of third point of plane.
* float **p2z**: [in] z coordinate of third point of plane.

**Return type**: void

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a76e34d4c05fe34dde0fcc4913ad63981"></a>
### Function AppendMesh

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Scene::AppendMesh(Node *mesh)=0
```




Adds a mesh node to the scene. Multiple mesh nodes can be appended to a scene. 
**Returns**:

Status of AppendMesh.



**Parameters**:

* [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) * **mesh**: [in] [Mesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh) node.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a4d7cac02889c439d22def05a361dab49"></a>
### Function Add2DText

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Scene::Add2DText(GLTF *gltf, const char *text, float x, float y, Markup::MarkupTextAttachmentType textAttach=Markup::MTAT_CENTER, float textSize=20, const char *textFont=0, float textR=0, float textG=0, float textB=0, float bgR=1, float bgG=1, float bgB=1, float bgA=0, const char *path=0)=0
```




Adds a 2D text label to the scene. 2D text labels remain stationary when the viewer is transformed. 
**Returns**:

Status of Add2DText.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **text**: [in] Text label.
* float **x**: [in] Horizontal offset from left. Ranges from 0 to 1.
* float **y**: [in] Vertical offset from top. Ranges from 0 to 1.
* [Markup::MarkupTextAttachmentType](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eac) **textAttach** = [Markup::MTAT\_CENTER](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eacacd1cb140f1aa52d23a2e6377f449ed3f) : [in] Optional, [Markup::MarkupTextAttachmentType](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eac) describing how label is positioned relative to x,y.
* float **textSize** = 20 : [in] Optional, height of label font in pixels.
* const char * **textFont** = 0 : [in] Optional, label font. Good choices are "serif" and "sans-serif".
* float **textR** = 0 : [in] Optional, red component of text color. Ranges from 0 to 1.
* float **textG** = 0 : [in] Optional, green component of text color. Ranges from 0 to 1.
* float **textB** = 0 : [in] Optional, blue component of text color. Ranges from 0 to 1.
* float **bgR** = 1 : [in] Optional, red component of text background. Ranges from 0 to 1.
* float **bgG** = 1 : [in] Optional, green component of text background. Ranges from 0 to 1.
* float **bgB** = 1 : [in] Optional, blue component of text background. Ranges from 0 to 1.
* float **bgA** = 0 : [in] Optional, alpha component of text background. Ranges from 0 to 1.
* const char * **path** = 0 : [in] Optional full path to node to which this markup is attached. If not specified, markup is attached to scene. If specified, the markup does not appear in the visibility selector under annotations. The visibility is controlled by the node's visibility. For a node that is directly under the scene, this is simply the [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) ID of the node. For a [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) that is a child of another node, the path is "NodeIDParent;NodeID". The path is simply a concatenation of nodeIDs that lead to the node to which the markup is attached. The concatenation is with the ';' character.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1a4d9685d84f8b3fed30f4c2362fb39d66"></a>
### Function Add3DText

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Scene::Add3DText(GLTF *gltf, const char *text, float x, float y, float z, Markup::MarkupTextAttachmentType textAttach=Markup::MTAT_AUTO, float textSize=12, const char *textFont=0, float textOffX=0, float textOffY=0, Markup::MarkupLineType lineShape=Markup::MLT_LINE, float lineR=0, float lineG=0, float lineB=0, float textR=0, float textG=0, float textB=0, float bgR=1, float bgG=1, float bgB=1, float bgA=0.5, const char *path=0)=0
```




Adds a 3D text label to the scene. 3D text labels change position when the viewer is transformed. 
**Returns**:

Status of Add3DText.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **text**: [in] Text label.
* float **x**: [in] X location in mesh space.
* float **y**: [in] Y location in mesh space.
* float **z**: [in] Z location in mesh space.
* [Markup::MarkupTextAttachmentType](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eac) **textAttach** = [Markup::MTAT\_AUTO](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eaca794db9a54ba5791e985e7bd26c82679e) : [in] Optional, [Markup::MarkupTextAttachmentType](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a9c4ded09ea91c096d1bba1515e7f2eac) describing how label is positioned relative to x,y,z + textOffX,textOffY.
* float **textSize** = 12 : [in] Optional, height of label font in pixels.
* const char * **textFont** = 0 : [in] Optional, label font. Good choices are "serif" and "sans-serif".
* float **textOffX** = 0 : [in] Optional amount label is offset, in pixels, from x,y,z in screen X direction.
* float **textOffY** = 0 : [in] Optional amount label is offset, in pixels, from x,y,z in screen Y direction.
* [Markup::MarkupLineType](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a794f1c879ddc0e820c70c59337f7cddb) **lineShape** = [Markup::MLT\_LINE](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a794f1c879ddc0e820c70c59337f7cddba75ad730298aa90acc284f97d220b2229) : [in] Optional, [Markup::MarkupLineType](namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup.md#namespace_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_markup_1a794f1c879ddc0e820c70c59337f7cddb) defining symbol at end of line.
* float **lineR** = 0 : [in] Optional red component of line color. Ranges from 0 to 1.
* float **lineG** = 0 : [in] Optional green component of line color. Ranges from 0 to 1.
* float **lineB** = 0 : [in] Optional blue component of line color. Ranges from 0 to 1.
* float **textR** = 0 : [in] Optional red component of text color. Ranges from 0 to 1.
* float **textG** = 0 : [in] Optional green component of text color. Ranges from 0 to 1.
* float **textB** = 0 : [in] Optional blue component of text color. Ranges from 0 to 1.
* float **bgR** = 1 : [in] Optional red component of text background. Ranges from 0 to 1.
* float **bgG** = 1 : [in] Optional green component of text background. Ranges from 0 to 1.
* float **bgB** = 1 : [in] Optional blue component of text background. Ranges from 0 to 1.
* float **bgA** = 0.5 : [in] Optional alpha component of text background. Ranges from 0 to 1.
* const char * **path** = 0 : [in] Optional full path to node to which this markup is attached. If not specified, markup is attached to scene. If specified, the markup moves with node and visibility is controlled by node, as well as the Annotations entry under the visibility selector. For a node that is directly under the scene, this is simply the [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) ID of the node. For a [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) that is a child of another node, the path is "NodeIDParent;NodeID". The path is simply a concatenation of nodeIDs that lead to the node to which the markup is attached. The concatenation is with the ';' character.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene_1ab033cebb1eab40cc7bb86fa1ad092b97"></a>
### Function AppendValue

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Scene::AppendValue(Value *value)=0
```




Adds a value to a material. Multiple values can be appended to a scene. Values are generally Optional, and are used to override default values of techniques parameters. 
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