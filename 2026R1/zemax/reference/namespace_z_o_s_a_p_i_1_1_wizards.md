# Namespace ZOSAPI::Wizards

<a id="namespace_z_o_s_a_p_i_1_1_wizards"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Wizards::IImageData](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_image_data.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_image_data)
* [ZOSAPI::Wizards::INSCBitmapWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_bitmap_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_bitmap_wizard)
* [ZOSAPI::Wizards::INSCOptimizationWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_optimization_wizard)
* [ZOSAPI::Wizards::INSCRoadwayLightingWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_roadway_lighting_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_roadway_lighting_wizard)
* [ZOSAPI::Wizards::INSCToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_tolerance_wizard)
* [ZOSAPI::Wizards::INSCWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_wizard)
* [ZOSAPI::Wizards::ISEQOptimizationWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard)
* [ZOSAPI::Wizards::ISEQOptimizationWizard2](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard2.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard2)
* [ZOSAPI::Wizards::ISEQToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_tolerance_wizard)
* [ZOSAPI::Wizards::IToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard)
* [ZOSAPI::Wizards::IWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard)

## Enumeration types

### Enumeration type WizardType

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7"></a>

![][public]

**Definition**:


```csharp
enum WizardType {
  NSCOptimization,
  NSCBitmap,
  NSCRoadwayLighting,
  SEQOptimization,
  NSCTolerance,
  SEQTolerance
}
```


#### Enumerator NSCOptimization

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7aa9d6b2b9b95fd8bbd0f1a5df580fd2fd"></a>

Nensequential Component, Optimization Wizard (MFE)


#### Enumerator NSCBitmap

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7ac733cd56930571b7f7573bd41f456ae0"></a>

Bitmap Wizard (MFE/NSC)


#### Enumerator NSCRoadwayLighting

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7a63342da4c8c6b436b747eecd2ca496c6"></a>

Roadway Lighting Wizard (MFE/NSC)


#### Enumerator SEQOptimization

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7af1749f03fc4769f4056e2fbb890488ef"></a>

Sequential, Optimization Wizard (MFE)


#### Enumerator NSCTolerance

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7a47db636a96a0dc9132aaa94066931b6b"></a>

NSC Tolerance Wizard.


#### Enumerator SEQTolerance

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7ace6208c92f669939e6408b3bd9cf2282"></a>

SEQ Tolerance Wizard.


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.WizardType"}]}`
-->

### Enumeration type DefaultAndDegrees

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1acbea7d4a77afeb8f7329bd8b8755151c"></a>

![][public]

**Definition**:


```csharp
enum DefaultAndDegrees {
  Default = 0,
  Degrees = 1
}
```


#### Enumerator Default

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1acbea7d4a77afeb8f7329bd8b8755151ca7a1920d61156abc05a60135aefe8bc67"></a>


#### Enumerator Degrees

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1acbea7d4a77afeb8f7329bd8b8755151ca9ef125630442bb42e2e367e0cf70d892"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.DefaultAndDegrees"}]}`
-->

### Enumeration type DefaultAndFringes

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a46295afdaf6c765ca13b7965665ea6d2"></a>

![][public]

**Definition**:


```csharp
enum DefaultAndFringes {
  Default = 0,
  Fringes = 1,
  Percent = 2
}
```


#### Enumerator Default

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a46295afdaf6c765ca13b7965665ea6d2a7a1920d61156abc05a60135aefe8bc67"></a>


#### Enumerator Fringes

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a46295afdaf6c765ca13b7965665ea6d2a862fbe753d976963503e9379fdb03fd0"></a>


#### Enumerator Percent

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a46295afdaf6c765ca13b7965665ea6d2aadaaee4b22041c27198d410c68d952c9"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.DefaultAndFringes"}]}`
-->

### Enumeration type CriterionTypes

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ae51f9391c47ad71ad47628ab4fd127ca"></a>

![][public]

**Definition**:


```csharp
enum CriterionTypes {
  Wavefront = 0,
  Contrast = 1,
  Spot = 2,
  Angular = 3
}
```


#### Enumerator Wavefront

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ae51f9391c47ad71ad47628ab4fd127caab295476c2494efa8710503a40562b365"></a>


#### Enumerator Contrast

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ae51f9391c47ad71ad47628ab4fd127caac63ecd19a0ca74c22dfcf3063c9805d2"></a>


#### Enumerator Spot

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ae51f9391c47ad71ad47628ab4fd127caa6c9d6b8aea6f3d16847bdebe05878a2d"></a>


#### Enumerator Angular

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ae51f9391c47ad71ad47628ab4fd127caac31c335ef37283c451b18ba0dd317de1"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.CriterionTypes"}]}`
-->

### Enumeration type OptimizationTypes

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a4a582159c6e678163aad6082f2f848f8"></a>

![][public]

**Definition**:


```csharp
enum OptimizationTypes {
  RMS = 0,
  PTV = 1
}
```


#### Enumerator RMS

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a4a582159c6e678163aad6082f2f848f8a6a04f9e9b7a0c60c00fe0daa2e12eca0"></a>


#### Enumerator PTV

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a4a582159c6e678163aad6082f2f848f8a88f161dc7f4ad31d3581b147edd76791"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.OptimizationTypes"}]}`
-->

### Enumeration type ReferenceTypes

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7ccfa5f862f3927fbaf8eec506092310"></a>

![][public]

**Definition**:


```csharp
enum ReferenceTypes {
  Centroid = 0,
  ChiefRay = 1,
  Unreferenced = 2
}
```


#### Enumerator Centroid

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7ccfa5f862f3927fbaf8eec506092310a9b49197cf2fea5efc68ef8a88489e1b6"></a>


#### Enumerator ChiefRay

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7ccfa5f862f3927fbaf8eec506092310ab67fb49a78858076df25bdcc64755c34"></a>


#### Enumerator Unreferenced

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7ccfa5f862f3927fbaf8eec506092310a4d3fb2d3806b70025e639f86fc36c6cb"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ReferenceTypes"}]}`
-->

### Enumeration type PupilArmsCount

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af829f590cfa48258a75ca3b619027d69"></a>

![][public]

**Definition**:


```csharp
enum PupilArmsCount {
  Arms_6 = 0,
  Arms_8 = 1,
  Arms_10 = 2,
  Arms_12 = 3
}
```


#### Enumerator Arms\_6

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af829f590cfa48258a75ca3b619027d69a9d3c1d17b91ae375fdaca18345921a49"></a>


#### Enumerator Arms\_8

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af829f590cfa48258a75ca3b619027d69a789cd69c7c4272ff15fc94ba2de5f69e"></a>


#### Enumerator Arms\_10

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af829f590cfa48258a75ca3b619027d69ae02e760b251d688ae952d75b974b125c"></a>


#### Enumerator Arms\_12

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1af829f590cfa48258a75ca3b619027d69a563b9ed4292f3986149e93bbb6ab46a6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.PupilArmsCount"}]}`
-->

### Enumeration type ToleranceVendor

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ade6abd295e7419b547427f53c99fa7e1"></a>

![][public]

**Definition**:


```csharp
enum ToleranceVendor {
  Asphericon = 0,
  EdmundOptics = 1,
  Generic = 2,
  LaCroix = 3,
  Optimax = 4
}
```


#### Enumerator Asphericon

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ade6abd295e7419b547427f53c99fa7e1ab9c40bba9e0eca7a125e64d0d82737f0"></a>


#### Enumerator EdmundOptics

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ade6abd295e7419b547427f53c99fa7e1a714ff9069af003141464f6417a3182c2"></a>


#### Enumerator Generic

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ade6abd295e7419b547427f53c99fa7e1a8045a0a6c688b0635e3caccc408a1446"></a>


#### Enumerator LaCroix

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ade6abd295e7419b547427f53c99fa7e1aca137a1eb57f1039faf2108e62902085"></a>


#### Enumerator Optimax

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1ade6abd295e7419b547427f53c99fa7e1a59567ee9b36cf93787784552f9310243"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ToleranceVendor"}]}`
-->

### Enumeration type ToleranceGrade

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7fc80092876c2ba7d4d8e85f2f87416e"></a>

![][public]

**Definition**:


```csharp
enum ToleranceGrade {
  Commercial = 0,
  Precision = 1,
  HighPrecision = 2,
  CellPhoneLens = 3
}
```


#### Enumerator Commercial

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7fc80092876c2ba7d4d8e85f2f87416eab2788e1ab6be65f1c38bf7d23cd081f1"></a>


#### Enumerator Precision

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7fc80092876c2ba7d4d8e85f2f87416eabe5edab59de4ea30531374e506b03822"></a>


#### Enumerator HighPrecision

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7fc80092876c2ba7d4d8e85f2f87416ea3a48c0c030980db3e8a7268e7d5edf35"></a>


#### Enumerator CellPhoneLens

<a id="namespace_z_o_s_a_p_i_1_1_wizards_1a7fc80092876c2ba7d4d8e85f2f87416eabcde2d52e22e8ff70b5c2d851691ee9c"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.ToleranceGrade"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)