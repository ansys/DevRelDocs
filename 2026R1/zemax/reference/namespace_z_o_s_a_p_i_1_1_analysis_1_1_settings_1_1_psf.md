# Namespace ZOSAPI::Analysis::Settings::Psf

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Analysis::Settings::Psf::IAS\_FftPsf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf)
* [ZOSAPI::Analysis::Settings::Psf::IAS\_FftPsfCrossSection](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_cross_section.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_cross_section)
* [ZOSAPI::Analysis::Settings::Psf::IAS\_FftPsfLineEdgeSpread](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_line_edge_spread.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_line_edge_spread)
* [ZOSAPI::Analysis::Settings::Psf::IAS\_HuygensPsf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf)
* [ZOSAPI::Analysis::Settings::Psf::IAS\_HuygensPsfCrossSection](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf_cross_section.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf_cross_section)

## Enumeration types

### Enumeration type PsfSampling

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6"></a>

![][public]

**Definition**:


```csharp
enum PsfSampling {
  PsfS_32x32 = 1,
  PsfS_64x64 = 2,
  PsfS_128x128 = 3,
  PsfS_256x256 = 4,
  PsfS_512x512 = 5,
  PsfS_1024x1024 = 6,
  PsfS_2048x2048 = 7,
  PsfS_4096x4096 = 8,
  PsfS_8192x8192 = 9,
  PsfS_16384x16384 = 10
}
```


#### Enumerator PsfS\_32x32

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6a3e42513372d580d890552f0e517593bc"></a>


#### Enumerator PsfS\_64x64

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6ac9a69fb1759117b9f07ec92da73547a3"></a>


#### Enumerator PsfS\_128x128

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6ab770602b79fe85a56bb6d662803afde2"></a>


#### Enumerator PsfS\_256x256

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6a5905d4f190667753974bab2687dd1489"></a>


#### Enumerator PsfS\_512x512

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6a017d3d4bba2f585124a28deedd3e64d7"></a>


#### Enumerator PsfS\_1024x1024

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6ac8531cad46ed0bc939e9eb0473fa055b"></a>


#### Enumerator PsfS\_2048x2048

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6a171b022224fa87576fa6dcac89540fe3"></a>


#### Enumerator PsfS\_4096x4096

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6aa918b8256ab877d969e22fceaf62325e"></a>


#### Enumerator PsfS\_8192x8192

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6a13f40064b64dfc4b7f94344dc6038d54"></a>


#### Enumerator PsfS\_16384x16384

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a6c2424d511ddc42e2f3c0ff769ecfeb6a3963dd3331ae3892b145f5d9eba9c2fc"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Psf.PsfSampling"}]}`
-->

### Enumeration type PsfRotation

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1aee46c772b4a9c1ae0267dfbadf1a4055"></a>

![][public]

**Definition**:


```csharp
enum PsfRotation {
  CW0,
  CW90,
  CW180,
  CW270
}
```


#### Enumerator CW0

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1aee46c772b4a9c1ae0267dfbadf1a4055a6e456378cca4a720dc63ab74cb6f4a77"></a>


#### Enumerator CW90

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1aee46c772b4a9c1ae0267dfbadf1a4055a0b3887cd843657b455f103b3a39eb737"></a>


#### Enumerator CW180

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1aee46c772b4a9c1ae0267dfbadf1a4055a198c9bc6e146f23ef4ea1d6de1e18942"></a>


#### Enumerator CW270

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1aee46c772b4a9c1ae0267dfbadf1a4055a0f2943cf32193da076cc4fc36878007a"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Psf.PsfRotation"}]}`
-->

### Enumeration type FftPsfType

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a4a8ae7cf8b5469234ebacbcc62de259b"></a>

![][public]

**Definition**:


```csharp
enum FftPsfType {
  Linear,
  Log,
  Phase,
  Real,
  Imaginary
}
```


#### Enumerator Linear

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a4a8ae7cf8b5469234ebacbcc62de259ba32a843da6ea40ab3b17a3421ccdf671b"></a>


#### Enumerator Log

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a4a8ae7cf8b5469234ebacbcc62de259bace0be71e33226e4c1db2bcea5959f16b"></a>


#### Enumerator Phase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a4a8ae7cf8b5469234ebacbcc62de259ba5e35d7fff7b903516cba242ff68fc6d3"></a>


#### Enumerator Real

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a4a8ae7cf8b5469234ebacbcc62de259ba7f80fcc452c2f1ed2bb51b39d0864df1"></a>


#### Enumerator Imaginary

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1a4a8ae7cf8b5469234ebacbcc62de259baf19f497d4c860d252cc1e055d0362ccc"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Psf.FftPsfType"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)