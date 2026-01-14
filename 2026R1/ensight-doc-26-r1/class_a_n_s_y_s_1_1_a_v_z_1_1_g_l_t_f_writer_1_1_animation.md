# Class ANSYS::AVZ::GLTFWriter::Animation

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation"></a>

![][C++]
![][public]


Animations define mechanisms for changing over time, node properties and material values.

Currently, only the node matrix, node visibility, and all material values can be changed. The initial node matrix and node visibility are passed to the [Node::CreateMesh](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node_1a535949949764a2fad5dd1510573a84f1) method and must be specified if their values are to be changed in the [Animation](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation). Similarly, for a material value to be animated, it must first be added to the material with the [Material::AppendValue](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material_1a2f8a41e41af7d9b8cd498506f6510dd7) method.





It is possible for a GLTF/AVZ file to have more than one animation. Currently, only a single animation is shown in the viewer. If multiple animations are created, they are all played as a single animation. So it might be wise to only create a single animation at present until this limitation is removed.

## Members

* [AppendChannel](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1a3963dbc5049f56224031b9d748f5ecfa)
* [AppendChannel](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1a83b5ab732cef515bb687a46b062cb98e)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1a41da064e3a9c9d690d951287bb4760f6)
* [~Animation](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1af0aa63242a11f5196f46901f99a34319)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1af0aa63242a11f5196f46901f99a34319"></a>
### Function ~Animation

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Animation::~Animation()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1a41da064e3a9c9d690d951287bb4760f6"></a>
### Function Create

![][public]
![][static]


```cpp
static Animation * ANSYS::AVZ::GLTFWriter::Animation::Create(GLTF *gltf, const char *name=0)
```




Creates an animation with the given name. 
**Returns**:

[Animation](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* const char * **name** = 0 : [in] Optional, name of animation (not currently used).

**Return type**: [Animation](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation) *

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1a3963dbc5049f56224031b9d748f5ecfa"></a>
### Function AppendChannel

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Animation::AppendChannel(AnimationSampler *sampler, Node *target, const char *path)=0
```




Adds a channel to an animation. The channel changes the target/path using the sampler. Only some properties can be animated: 
* node - matrix

* node - visible

* material - Any value 
**Returns**:

Status of AppendChannel.



**Parameters**:

* [AnimationSampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler) * **sampler**: [in] [AnimationSampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler) object.
* [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) * **target**: [in] [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) of which to animate a property, or [Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material) of which to animate a value.
* const char * **path**: [in] Name of property or name of value to animate.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_1a83b5ab732cef515bb687a46b062cb98e"></a>
### Function AppendChannel

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Animation::AppendChannel(AnimationSampler *sampler, Material *target, const char *path)=0
```




Adds a channel to an animation. The channel changes the target/path using the sampler. Only some properties can be animated: 
* node - matrix

* node - visible

* material - Any value 
**Returns**:

Status of AppendChannel.



**Parameters**:

* [AnimationSampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler) * **sampler**: [in] [AnimationSampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler) object.
* [Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material) * **target**: [in] [Node](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_node) of which to animate a property, or [Material](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_material) of which to animate a value.
* const char * **path**: [in] Name of property or name of value to animate.

**Return type**: bool

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)