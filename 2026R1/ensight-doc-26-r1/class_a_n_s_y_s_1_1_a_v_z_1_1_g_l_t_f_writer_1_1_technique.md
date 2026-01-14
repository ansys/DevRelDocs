# Class ANSYS::AVZ::GLTFWriter::Technique

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique"></a>

![][C++]
![][public]


Techniques performs the rendering of primitives.



**Inherits from**:

* [ANSYS::AVZ::GLTFWriter::Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object)

## Members

* [AppendParameter](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1ae55c184b6165d5f1ea88e3db34522ba9)
* [AppendState](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1a8b2b0766157324d5a2093a3fca36379f)
* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1a97fb731bcd9a3f78ff1bc5ac1a83fe1b)
* [GetID](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1af3080f74ead5c7ad033fdba61cb54d35)
* [GetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ada6ed2f6abb80a6868e1762e2b9f67ca)
* [Mirror](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1af21efc235fe9ee2ba39cc80d1dd13898)
* [SetName](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1ab0e5063442e5cf0990dfa558dff82ac4)
* [~Object](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_object_1a93c29838fa92433126709880d2608f20)
* [~Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1a710070e0795fde12de60f2b66b254cac)

## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1a710070e0795fde12de60f2b66b254cac"></a>
### Function ~Technique

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::Technique::~Technique()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1a97fb731bcd9a3f78ff1bc5ac1a83fe1b"></a>
### Function Create

![][public]
![][static]


```cpp
static Technique * ANSYS::AVZ::GLTFWriter::Technique::Create(GLTF *gltf, Program *program=0, bool is2D=false)
```




Creates a [Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique). If program is not specified, a simple auto generated program is created. 
**Returns**:

[Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique) object. Do not delete this pointer.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.
* [Program](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program) * **program** = 0 : [in] Optional, [Program](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_program) object describing vertex and fragment shaders. If not specified a simple auto-generated shader is created.
* bool **is2D** = false : [in] Optional, flag indicating that the object is 2D. Indicates if technique renders overlay object. Overlay objects are drawn last and do not participate in probing and clipping. The projection matrix is configured as an orthographic matrix with the minimum sized viewport side ranging from -1 to 1

**Return type**: [Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique) *

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1af21efc235fe9ee2ba39cc80d1dd13898"></a>
### Function Mirror

![][public]


```cpp
virtual Technique * ANSYS::AVZ::GLTFWriter::Technique::Mirror()=0
```




Creates a mirrored [Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique). Mirroring simply flips the FRONTFACE state. 
**Returns**:

[Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique) object. Do not delete this pointer.



**Return type**: [Technique](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1ae55c184b6165d5f1ea88e3db34522ba9"></a>
### Function AppendParameter

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Technique::AppendParameter(Parameter *parameter)=0
```




Adds a parameter to a technique. Multiple parameters can be appended to a technique. Parameters describe how and from where program attributes and uniforms are derived. 
**Returns**:

Status of AppendParameter.



**Parameters**:

* [Parameter](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_parameter.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_parameter) * **parameter**: [in] [Parameter](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_parameter.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_parameter) object.

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_technique_1a8b2b0766157324d5a2093a3fca36379f"></a>
### Function AppendState

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::Technique::AppendState(State *state)=0
```




Adds a GL [State](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state) setting to a technique. Multiple states can be appended to a technique. States set GL [State](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state) values. 
**Returns**:

Status of AppendState.



**Parameters**:

* [State](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state) * **state**: [in] [State](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_state) object.

**Return type**: bool

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)