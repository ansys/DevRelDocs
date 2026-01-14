# Class ANSYS::AVZ::GLTFWriter::GLTF

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f"></a>

![][C++]
![][public]


This is the main class of the GLTFWriter.

It is required to create all other classes and it is responsible for writing the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) files. This is the first object that should be created.

## Members

* [Create](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a7cda2f2de4e31e6f0048af26e68bb3d6)
* [Destroy](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1acd18fb49263321727e33880688fb6c1d)
* [GetError](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a63295f8f31619517e94cf27d3a8b9ea8)
* [GLT\_ERROR\_MAX](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ad7cffe63d3c21d500fa206db2cf2404e)
* [GLTF\_ERROR\_DUPLICATE\_VALUE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ae6ae707e3c7740bb41560b5c67ac575b)
* [GLTF\_ERROR\_INCOMPATIBLE\_VALUE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a574601c24bf71754e08a070fea59a4cf)
* [GLTF\_ERROR\_INVALID\_PATH](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a599a5a8fb30f3c105dd718a0e2c8ce49)
* [GLTF\_ERROR\_INVALID\_TARGET](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a11d841e07888cb00645557120b8a1f45)
* [GLTF\_ERROR\_INVALID\_TYPE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4af3b8dac91a903167b889e6f8562d31f8)
* [GLTF\_ERROR\_INVALID\_VALUE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a3e236f59574d0988c1c963d8ab4cdea0)
* [GLTF\_ERROR\_MEMORY](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a3993d0160836fafa0e7c66ceca39c4be)
* [GLTF\_ERROR\_NONE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a6bb637f968acccc24ee2fee2b39f23e5)
* [GLTF\_ERROR\_RANGE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ad20acf50f0dc72fb1c25cea565cef8be)
* [GLTF\_ERROR\_READ](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a5bde666dc50ecc457172466644225908)
* [GLTF\_ERROR\_SIZE\_MISMATCH](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a7a986d06fe789cdf64c814bca7cb37fa)
* [GLTF\_ERROR\_VALUE\_NOT\_INITIALIZED](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a1917f255f8b610923c01754b828e0366)
* [GLTF\_ERROR\_WRITE](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ab4952a2b478d79748e74743099c2f3d6)
* [GLTFError](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4)
* [OT\_AVZ](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a557d9ef366cca7b05ff7c501a05ca577)
* [OT\_GLB1](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a3ee14f4b9417285b3785a0052498d5a1)
* [OT\_GLB2](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a2e7a8e3b6e452428a32366628302db55)
* [OT\_GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a20b38c0c93750658cfd62c552baa233c)
* [OT\_GLTF1](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720ab728887300b0810a30580d9a30511cf7)
* [OutputType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720)
* [SetDefaultScene](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a9201c02eb80171c47e40f2600b92ec6f)
* [Write](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a0bf3a4ec615dc8810776dd82a65eba91)
* [~GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a4c51fc061ec76a7831d22cec306a37fb)

## Public types

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4"></a>
### Enumeration type GLTFError

![][public]



```cpp
enum GLTFError {
  GLTF_ERROR_NONE = 0,
  GLTF_ERROR_DUPLICATE_VALUE,
  GLTF_ERROR_INCOMPATIBLE_VALUE,
  GLTF_ERROR_INVALID_PATH,
  GLTF_ERROR_INVALID_TARGET,
  GLTF_ERROR_INVALID_TYPE,
  GLTF_ERROR_INVALID_VALUE,
  GLTF_ERROR_MEMORY,
  GLTF_ERROR_RANGE,
  GLTF_ERROR_READ,
  GLTF_ERROR_SIZE_MISMATCH,
  GLTF_ERROR_VALUE_NOT_INITIALIZED,
  GLTF_ERROR_WRITE,
  GLT_ERROR_MAX
}
```




Returned by GetError



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a6bb637f968acccc24ee2fee2b39f23e5"></a>
#### Enumerator GLTF\_ERROR\_NONE

No Error.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ae6ae707e3c7740bb41560b5c67ac575b"></a>
#### Enumerator GLTF\_ERROR\_DUPLICATE\_VALUE

[Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value) is a duplicated.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a574601c24bf71754e08a070fea59a4cf"></a>
#### Enumerator GLTF\_ERROR\_INCOMPATIBLE\_VALUE

[Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value) not compatible with other properties.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a599a5a8fb30f3c105dd718a0e2c8ce49"></a>
#### Enumerator GLTF\_ERROR\_INVALID\_PATH

Path not valid.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a11d841e07888cb00645557120b8a1f45"></a>
#### Enumerator GLTF\_ERROR\_INVALID\_TARGET

[Animation](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation) target not valid.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4af3b8dac91a903167b889e6f8562d31f8"></a>
#### Enumerator GLTF\_ERROR\_INVALID\_TYPE

[Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value) type not valid for other properties.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a3e236f59574d0988c1c963d8ab4cdea0"></a>
#### Enumerator GLTF\_ERROR\_INVALID\_VALUE

[Value](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_value) is not valid.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a3993d0160836fafa0e7c66ceca39c4be"></a>
#### Enumerator GLTF\_ERROR\_MEMORY

Memory allocation error.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ad20acf50f0dc72fb1c25cea565cef8be"></a>
#### Enumerator GLTF\_ERROR\_RANGE

[Index](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_index) out of range.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a5bde666dc50ecc457172466644225908"></a>
#### Enumerator GLTF\_ERROR\_READ

Error reading file data.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a7a986d06fe789cdf64c814bca7cb37fa"></a>
#### Enumerator GLTF\_ERROR\_SIZE\_MISMATCH

[Animation](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_animation) input/output size mismatch.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4a1917f255f8b610923c01754b828e0366"></a>
#### Enumerator GLTF\_ERROR\_VALUE\_NOT\_INITIALIZED

Trying to animate value that was never initialized.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ab4952a2b478d79748e74743099c2f3d6"></a>
#### Enumerator GLTF\_ERROR\_WRITE

Error writing file data.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4ad7cffe63d3c21d500fa206db2cf2404e"></a>
#### Enumerator GLT\_ERROR\_MAX





<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720"></a>
### Enumeration type OutputType

![][public]



```cpp
enum OutputType {
  OT_AVZ,
  OT_GLTF,
  OT_GLB1,
  OT_GLTF1,
  OT_GLB2
}
```




Type of output to create.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a557d9ef366cca7b05ff7c501a05ca577"></a>
#### Enumerator OT\_AVZ

AVZ file for [ANSYS](namespace_a_n_s_y_s.md#namespace_a_n_s_y_s) Viewer.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a20b38c0c93750658cfd62c552baa233c"></a>
#### Enumerator OT\_GLTF

[GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) for [ANSYS](namespace_a_n_s_y_s.md#namespace_a_n_s_y_s) Viewer.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a3ee14f4b9417285b3785a0052498d5a1"></a>
#### Enumerator OT\_GLB1

GLB file in [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) 1.0 spec (may not be supported).



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720ab728887300b0810a30580d9a30511cf7"></a>
#### Enumerator OT\_GLTF1

[GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) 1.0 spec.



<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a2e7a8e3b6e452428a32366628302db55"></a>
#### Enumerator OT\_GLB2

GLB file in [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) 2.0 spec.



## Protected functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a4c51fc061ec76a7831d22cec306a37fb"></a>
### Function ~GLTF

![][protected]


```cpp
virtual ANSYS::AVZ::GLTFWriter::GLTF::~GLTF()
```








**Return type**: 

## Public static functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a7cda2f2de4e31e6f0048af26e68bb3d6"></a>
### Function Create

![][public]
![][static]


```cpp
static GLTF * ANSYS::AVZ::GLTFWriter::GLTF::Create(const char *application, const char *applicationVersion, const char *filePath, OutputType fileType=OT_AVZ)
```




Constructs a [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object.



**Parameters**:

* const char * **application**: [in] Name of application that is using GLTFWriter.
* const char * **applicationVersion**: [in] Version of application that is using GLTFWriter.
* const char * **filePath**: [in] Fully qualified path to AVZ file or main [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file. Any additional files that are required will be created in the folder of this path.
* [OutputType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720) **fileType** = [OT\_AVZ](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720a557d9ef366cca7b05ff7c501a05ca577) : [in] Optional, [GLTF::OutputType](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1ad551f06ce7377ce5e50901b2756e4720) defining type of output to create. Any extension of filePath will be ignored and replaced by the appropriate extension of the fileType.

**Return type**: [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) *

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1acd18fb49263321727e33880688fb6c1d"></a>
### Function Destroy

![][public]
![][static]


```cpp
static void ANSYS::AVZ::GLTFWriter::GLTF::Destroy(GLTF *gltf)
```




Destroys a [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object created by Create.



**Parameters**:

* [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) * **gltf**: [in] [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object return by Create

**Return type**: void

## Public functions

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a0bf3a4ec615dc8810776dd82a65eba91"></a>
### Function Write

![][public]


```cpp
virtual bool ANSYS::AVZ::GLTFWriter::GLTF::Write(bool formatJSON=false)=0
```




Completes the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file and writes out all data. This is the last call that should be made. Any additional [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) objects created after this call will be ignored. This call does nothing if called a second time.





This call is optional. If it has not been called when the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) object is destroyed it will be called. However, any errors in writing [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file will be ignored. 
**Returns**:

status of write.



**Parameters**:

* bool **formatJSON** = false : [in] Format the JSON file for easier readability

**Return type**: bool

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a9201c02eb80171c47e40f2600b92ec6f"></a>
### Function SetDefaultScene

![][public]


```cpp
virtual void ANSYS::AVZ::GLTFWriter::GLTF::SetDefaultScene(const Scene *scene)=0
```




Sets the main scene of the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file. If this call is not made, the first scene constructed for the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) file becomes the main scene. The default scene is the initial scene that is first displayed in the [GLTF](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f) Viewer.



**Parameters**:

* const [Scene](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene) * **scene**: [in] [Scene](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_scene) that is initially displayed

**Return type**: void

<a id="class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a63295f8f31619517e94cf27d3a8b9ea8"></a>
### Function GetError

![][public]


```cpp
virtual GLTFError ANSYS::AVZ::GLTFWriter::GLTF::GetError()=0
```




Returns the code for the last error. When an error occurs an error code is set. No further error is recorded until GetError is called. When GetError is called, the erorr code is reset to GLTF_ERROR_NONE. 
**Returns**:

[GLTFError](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4) code.



**Return type**: [GLTFError](class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f.md#class_a_n_s_y_s_1_1_a_v_z_1_1_g_l_t_f_writer_1_1_g_l_t_f_1a5b8141dc8536bc10d1a72996ad6f98b4)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)