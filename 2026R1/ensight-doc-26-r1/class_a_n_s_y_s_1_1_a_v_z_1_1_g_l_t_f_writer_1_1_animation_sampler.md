# Class ANSYS::AVZ::GLTFWriter::AnimationSampler

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler"></a>

![][C++]
![][public]


[Animation](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation) samplers define mechanisms for defining how animation channels change over time.

The sampler defines a time sequence, a value sequence, and an interpolation type. The time sequence must be an increasing sequence that starts at or greater than 0. The time sequence is linearly interpolated between values.





The value sequence is interpolated between values based on the interpolation type. There is no restriction on the value, other than it must be appropriate for the channel.

**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [AnimationSamplerType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1a57c4f92a5ea8417ee8908c9929403f37)
* [AST\_LINEAR](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1a57c4f92a5ea8417ee8908c9929403f37a375135f27372c8fd48dbcc371a05e1d9)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1ab00b9f4628b9851dd44fb29f16960bdf)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~AnimationSampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1ac9bb3919e45b9cf0572b2634476442f2)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)

## Public types

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1a57c4f92a5ea8417ee8908c9929403f37"></a>
### Enumeration type AnimationSamplerType

![][public]



```cpp
enum AnimationSamplerType {
  AST_LINEAR
}
```




Type of interpolation to apply when changing output values.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1a57c4f92a5ea8417ee8908c9929403f37a375135f27372c8fd48dbcc371a05e1d9"></a>
#### Enumerator AST\_LINEAR

Linear interploation.



## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1ac9bb3919e45b9cf0572b2634476442f2"></a>
### Function ~AnimationSampler

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::AnimationSampler::~AnimationSampler()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1ab00b9f4628b9851dd44fb29f16960bdf"></a>
### Function Create

![][public]
![][static]


```cpp
static AnimationSampler * ANSYS::AVZ::GLTFWriter::AnimationSampler::Create(GLTF *gltf, Attribute *input, Attribute *output, AnimationSamplerType type=AST_LINEAR)
```




Creates an animation sampler. The number of values in the input attribute must match the number of values in the output attribute. 
**Returns**:

[AnimationSampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) * **input**: [in] [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) defining the time codes for the sampler. The time values are given in seconds. Must be a float.
* [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) * **output**: [in] [Attribute](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_attribute) defining the channel values at the given time codes.
* [AnimationSamplerType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1a57c4f92a5ea8417ee8908c9929403f37) **type** = [AST\_LINEAR](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1a57c4f92a5ea8417ee8908c9929403f37a375135f27372c8fd48dbcc371a05e1d9) : [in] Optional, [AnimationSampler::AnimationSamplerType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler_1a57c4f92a5ea8417ee8908c9929403f37) defining type of interpolation.

**Return type**: [AnimationSampler](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation_sampler) *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)