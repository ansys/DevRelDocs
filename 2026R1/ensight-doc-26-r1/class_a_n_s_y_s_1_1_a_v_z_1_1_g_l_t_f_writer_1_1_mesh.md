# Class ANSYS::AVZ::GLTFWriter::Mesh

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh"></a>

![][C++]
![][public]


Meshes define the renderable objects that can be added to a node.

Meshes are required for all renderable objects.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [AppendPrimitive](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1afb99ec25e2eebb4390c17f8770e4c23b)
* [AppendValue](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1a323b2c8f0d6fbbdd7508f4898e4a679d)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1a9f325ebe1494b6ad46408e2662b4b3a9)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [Mirror](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1abc1d86f77217e6e69f1c46e0cad98dab)
* [NumPrimitives](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1a74f246801f130a94e799e47e9b3cf644)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Mesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1ae300183003c8cc862ae9601c1b3bfb3d)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1ae300183003c8cc862ae9601c1b3bfb3d"></a>
### Function ~Mesh

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Mesh::~Mesh()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1a9f325ebe1494b6ad46408e2662b4b3a9"></a>
### Function Create

![][public]
![][static]


```cpp
static Mesh * ANSYS::AVZ::GLTFWriter::Mesh::Create(GLTF *gltf)
```




Creates a mesh object. 
**Returns**:

[Mesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.

**Return type**: [Mesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh) *

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1abc1d86f77217e6e69f1c46e0cad98dab"></a>
### Function Mirror

![][public]


```cpp
virtual Mesh * ANSYS::AVZ::GLTFWriter::Mesh::Mirror()=0
```




Creates a mirrored [Mesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh). 
**Returns**:

[Mesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh) object. Do not delete this pointer.



**Return type**: [Mesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1afb99ec25e2eebb4390c17f8770e4c23b"></a>
### Function AppendPrimitive

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Mesh::AppendPrimitive(Primitive *primitive)=0
```




Appends a primitive object to a mesh. Primitives contain the renderable data of the mesh.



**Parameters**:

* [Primitive](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_primitive.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_primitive) * **primitive**: [in] [Primitive](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_primitive.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_primitive) object.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1a74f246801f130a94e799e47e9b3cf644"></a>
### Function NumPrimitives

![][public]
![][const]


```cpp
virtual unsigned int ANSYS::AVZ::GLTFWriter::Mesh::NumPrimitives() const =0
```




Returns number of primitives in mesh. 
**Returns**:

Number of primitives.



**Return type**: unsigned int

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_mesh_1a323b2c8f0d6fbbdd7508f4898e4a679d"></a>
### Function AppendValue

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Mesh::AppendValue(Value *value)=0
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