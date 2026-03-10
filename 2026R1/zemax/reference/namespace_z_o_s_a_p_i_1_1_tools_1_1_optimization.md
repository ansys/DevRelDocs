# Namespace ZOSAPI::Tools::Optimization

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Tools::Optimization::IGlobalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_global_optimization)
* [ZOSAPI::Tools::Optimization::IHammerOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_hammer_optimization)
* [ZOSAPI::Tools::Optimization::ILocalOptimization](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_local_optimization)
* [ZOSAPI::Tools::Optimization::INSCQuickFocus](interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus.md#interface_z_o_s_a_p_i_1_1_tools_1_1_optimization_1_1_i_n_s_c_quick_focus)

## Enumeration types

### Enumeration type NSCQuickFocusCriterion

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67792f65e697590a8bc22c34a1288588"></a>

![][public]

**Definition**:


```csharp
enum NSCQuickFocusCriterion {
  SpotSizeRadial = 0,
  SpotSizeXOnly,
  SpotSizeYOnly
}
```


#### Enumerator SpotSizeRadial

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67792f65e697590a8bc22c34a1288588ae5f2aeaa878cb7ff398785fb4d61b6f2"></a>


#### Enumerator SpotSizeXOnly

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67792f65e697590a8bc22c34a1288588a4121dc858e8659339ef879a99ec6e830"></a>


#### Enumerator SpotSizeYOnly

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67792f65e697590a8bc22c34a1288588a5db6fcda730ee8039ddfbe226154ebe3"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.NSCQuickFocusCriterion"}]}`
-->

### Enumeration type NSCQuickFocusSampling

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25"></a>

![][public]

**Definition**:


```csharp
enum NSCQuickFocusSampling {
  S_257 = 0,
  S_513,
  S_1025,
  S_2049,
  S_4097,
  S_8193,
  S_16385,
  S_32769,
  S_65537,
  S_131073
}
```


#### Enumerator S\_257

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25abe4edffbbcd5b08d1150d7caf12ab4a5"></a>


#### Enumerator S\_513

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25aac677de1227ed2796fc38555fa0977d7"></a>


#### Enumerator S\_1025

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25a2eb1a981e1e2efa5febabd1266a98517"></a>


#### Enumerator S\_2049

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25a968cd0c44f09be8c7fac0ed1a56d4fe2"></a>


#### Enumerator S\_4097

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25a26400f4cd9d5edef2d466b94be58cf69"></a>


#### Enumerator S\_8193

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25a287577805ff17425920266e657db603e"></a>


#### Enumerator S\_16385

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25a486c41ff14a761b407eef74535a141b5"></a>


#### Enumerator S\_32769

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25aaeb8c48ceee32cd05e40b22b616d8778"></a>


#### Enumerator S\_65537

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25a90f65afe6740738be55ad5bc3fa13e82"></a>


#### Enumerator S\_131073

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a3d35edb03745fcd677c8179fcfa7cf25a8f87ab83702b0cbc4e435fb16f8d070a"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.NSCQuickFocusSampling"}]}`
-->

### Enumeration type OptimizationAlgorithm

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1abdfc45ae891097832d05ef1853e36917"></a>

![][public]

**Definition**:


```csharp
enum OptimizationAlgorithm {
  DampedLeastSquares = 0,
  OrthogonalDescent
}
```


#### Enumerator DampedLeastSquares

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1abdfc45ae891097832d05ef1853e36917ad092b140557f3e3aaf7bc0a3ae61bcba"></a>


#### Enumerator OrthogonalDescent

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1abdfc45ae891097832d05ef1853e36917a113dc3f15832252be9c583180849c5b1"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.OptimizationAlgorithm"}]}`
-->

### Enumeration type OptimizationCycles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68b"></a>

![][public]

**Definition**:


```csharp
enum OptimizationCycles {
  Automatic = 0,
  Fixed_1_Cycle,
  Fixed_5_Cycles,
  Fixed_10_Cycles,
  Fixed_50_Cycles,
  Infinite
}
```


#### Enumerator Automatic

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68ba086247a9b57fde6eefee2a0c4752242d"></a>


#### Enumerator Fixed\_1\_Cycle

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68ba18a88fdb4c1475e18b258b6d045cc382"></a>


#### Enumerator Fixed\_5\_Cycles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68ba43aa554952d267329600680a4e192383"></a>


#### Enumerator Fixed\_10\_Cycles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68ba43874f73048fe37172dfa25c06a98dce"></a>


#### Enumerator Fixed\_50\_Cycles

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68ba928c4bf60db8715f8c1319fe01bcf60c"></a>


#### Enumerator Infinite

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1a67304d58fe61f0276971736aa671f68bab10e24496ff8fec66189548a92a67045"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.OptimizationCycles"}]}`
-->

### Enumeration type OptimizationSaveCount

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57dd"></a>

![][public]

**Definition**:


```csharp
enum OptimizationSaveCount {
  Save_10 = 0,
  Save_20,
  Save_30,
  Save_40,
  Save_50,
  Save_60,
  Save_70,
  Save_80,
  Save_90,
  Save_100
}
```


#### Enumerator Save\_10

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57ddaa398d1cab69b21b046c9bec16e5b88eb"></a>


#### Enumerator Save\_20

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57ddadbd95bede1c51dfcc1fed66e8df84368"></a>


#### Enumerator Save\_30

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57ddaf71d8b51d056eec4a443e5fd3f734b7c"></a>


#### Enumerator Save\_40

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57ddaab777b83882257a8dfccc2bf73e38e16"></a>


#### Enumerator Save\_50

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57dda64395b23ecc17b5c946a75c01c6d7da6"></a>


#### Enumerator Save\_60

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57ddabb6c3c131daa3f4d53373aa38c2feaf1"></a>


#### Enumerator Save\_70

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57dda980313b346f2185783144fff6843b62e"></a>


#### Enumerator Save\_80

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57dda6206295484faec5bae7d57380f26672c"></a>


#### Enumerator Save\_90

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57dda69ec999377759d48628af672c54f9c8f"></a>


#### Enumerator Save\_100

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_optimization_1ae05f9d5326e70144f9f2b9bc0c1b57dda3f828ba2b40212142ddd16bd062b2b67"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Optimization.OptimizationSaveCount"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)