# Namespace ZOSAPI::Tools::Tolerancing

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Tools::Tolerancing::IMonteCarloData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_monte_carlo_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_monte_carlo_data)
* [ZOSAPI::Tools::Tolerancing::IQuickSensitivity](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_quick_sensitivity)
* [ZOSAPI::Tools::Tolerancing::ISensitivityCompensator](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_compensator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_compensator)
* [ZOSAPI::Tools::Tolerancing::ISensitivityCriterionMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_criterion_metadata)
* [ZOSAPI::Tools::Tolerancing::ISensitivityData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_data)
* [ZOSAPI::Tools::Tolerancing::ISensitivityOperandEffect](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_effect.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_effect)
* [ZOSAPI::Tools::Tolerancing::ISensitivityOperandMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_sensitivity_operand_metadata)
* [ZOSAPI::Tools::Tolerancing::ITeziData](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tezi_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tezi_data)
* [ZOSAPI::Tools::Tolerancing::IToleranceDataViewer](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_data_viewer)
* [ZOSAPI::Tools::Tolerancing::IToleranceNest](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerance_nest)
* [ZOSAPI::Tools::Tolerancing::ITolerancing](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing)
* [ZOSAPI::Tools::Tolerancing::ITolerancingColumnMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_column_metadata)
* [ZOSAPI::Tools::Tolerancing::ITolerancingHistogram](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_histogram.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_histogram)
* [ZOSAPI::Tools::Tolerancing::ITolerancingOperandMetadata](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_operand_metadata.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_operand_metadata)
* [ZOSAPI::Tools::Tolerancing::ITolerancingParameter](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_parameter.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_parameter)
* [ZOSAPI::Tools::Tolerancing::ITolerancingSummaryStatistics](interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_summary_statistics.md#interface_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1_1_i_tolerancing_summary_statistics)

## Enumeration types

### Enumeration type SetupModes

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a353903c47ffd3d71eb432008f520d3fa"></a>

![][public]

**Definition**:


```csharp
enum SetupModes {
  Sensitivity = 0,
  InverseLimit,
  InverseIncrement,
  SkipSensitivity
}
```


Tolerancing Tool 'Setup' Modes.


#### Enumerator Sensitivity

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a353903c47ffd3d71eb432008f520d3faa456ce8fc5315d26a3f7145a5228d8fd3"></a>


#### Enumerator InverseLimit

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a353903c47ffd3d71eb432008f520d3faaeccdfdee957176b6d75da2f20bf9ebd5"></a>


#### Enumerator InverseIncrement

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a353903c47ffd3d71eb432008f520d3faab298f5f93aefa092b49f85ccaf2c24d7"></a>


#### Enumerator SkipSensitivity

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a353903c47ffd3d71eb432008f520d3faaff216158a687e50dd644c414b1c3dc95"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.SetupModes"}]}`
-->

### Enumeration type SetupPolynomials

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ac9b3773a5e2196f6402806a87f1a0f46"></a>

![][public]

**Definition**:


```csharp
enum SetupPolynomials {
  None = 0,
  ThreeMinusTerm,
  FiveMinusTerm
}
```


Tolerancing Tool 'Setup' Polynomials.


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ac9b3773a5e2196f6402806a87f1a0f46a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator ThreeMinusTerm

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ac9b3773a5e2196f6402806a87f1a0f46a1fd895f1119ec0f8dfc5706cea152ad5"></a>


#### Enumerator FiveMinusTerm

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ac9b3773a5e2196f6402806a87f1a0f46ab72ff8f0140d958e63dab7f12fd21db7"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.SetupPolynomials"}]}`
-->

### Enumeration type SetupCaches

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a565194c99b7d6d7ef4f2ce836271e7c0"></a>

![][public]

**Definition**:


```csharp
enum SetupCaches {
  RecomputeAll = 0,
  RecomputeChanged,
  UsePolynomial
}
```


Tolerancing Tool 'Setup' Caches.


#### Enumerator RecomputeAll

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a565194c99b7d6d7ef4f2ce836271e7c0a730cfee6c0d4c3c2c42e091aaa262280"></a>


#### Enumerator RecomputeChanged

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a565194c99b7d6d7ef4f2ce836271e7c0a1500062261e1bcef6e50c6dae8e63518"></a>


#### Enumerator UsePolynomial

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a565194c99b7d6d7ef4f2ce836271e7c0afc58ef325a91c0b0b0a92af5ff4a03d7"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.SetupCaches"}]}`
-->

### Enumeration type SetupChanges

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a62b1feccf91f212f7d22ac0d8f72bab8"></a>

![][public]

**Definition**:


```csharp
enum SetupChanges {
  LinearDifference = 0,
  RSSDifference
}
```


Tolerancing Tool 'Setup' Changes.


#### Enumerator LinearDifference

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a62b1feccf91f212f7d22ac0d8f72bab8acfede7ff05eab634ee439ff8b9204e3d"></a>


#### Enumerator RSSDifference

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a62b1feccf91f212f7d22ac0d8f72bab8a9b0a3910e0336058ca22f1aa41e319dc"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.SetupChanges"}]}`
-->

### Enumeration type Criterions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3"></a>

![][public]

**Definition**:


```csharp
enum Criterions {
  NONSEQMeritFunction = 0,
  NONSEQUserScript,
  RMSSpotRadius = 0,
  RMSSpotX,
  RMSSpotY,
  RMSWavefront,
  MeritFunction,
  GeometricMTFAverage,
  GeometricMTFTan,
  GeometricMTFSag,
  DiffMTFAverage,
  DiffMTFTan,
  DiffMTFSag,
  BoresightError,
  RMSAngularRadius,
  RMSAngularX,
  RMSAngularY,
  UserScript
}
```


Tolerancing Tool 'Criterion'.


#### Enumerator NONSEQMeritFunction

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3aea8d92c49174e1df8754dc3cdc1dc8f3"></a>


#### Enumerator NONSEQUserScript

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a0e76522f0d4971cd79d111f783fbb26e"></a>


#### Enumerator RMSSpotRadius

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3ac36c5a32316afc2a6cf50711486f99df"></a>


#### Enumerator RMSSpotX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a12072afb8b9dbd3aa5eaab6173eed915"></a>


#### Enumerator RMSSpotY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a1634531d569413130a026bf1589ce1f7"></a>


#### Enumerator RMSWavefront

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a8b035a4c313addcad38e0994b9cc298b"></a>


#### Enumerator MeritFunction

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3ab63d5b2aeafc06c60e0a811803247777"></a>


#### Enumerator GeometricMTFAverage

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a8c722df468d9b6ae9774475a75253f25"></a>


#### Enumerator GeometricMTFTan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3add977decdd0e62c9be3a5c2329cd0086"></a>


#### Enumerator GeometricMTFSag

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a292107500d5ad0fdf533eea91be9ee2e"></a>


#### Enumerator DiffMTFAverage

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a66ff4e0cbc9e9b9afc59dc70e737bef6"></a>


#### Enumerator DiffMTFTan

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a116626a2a761d688edf81c82428a3d92"></a>


#### Enumerator DiffMTFSag

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a5a529343ace899fad9ca4791b0fb13f2"></a>


#### Enumerator BoresightError

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3ad45f3e0390d8b7bac25dba71ed68bf97"></a>


#### Enumerator RMSAngularRadius

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a2bafdf2f97ad4d44729805c630bf5bb5"></a>


#### Enumerator RMSAngularX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a6ffff53beb167337b19c328d17caab83"></a>


#### Enumerator RMSAngularY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a4a22812dc633d24a2a453cfeeea213bf"></a>


#### Enumerator UserScript

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1ae324fa6ed3f80cc18f2e1a746b8470e3a72e1bb98b2c20ea5e0f90b8f6081c03c"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.Criterions"}]}`
-->

### Enumeration type CriterionComps

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7"></a>

![][public]

**Definition**:


```csharp
enum CriterionComps {
  NONSEQOptimizeAll = 0,
  NONSEQNone,
  NONSEQOptimizeAll_OD,
  OptimizeAll_DLS = 0,
  ParaxialFocus,
  None,
  OptimizeAll_OD
}
```


Tolerancing Tool 'Criterion' Comps.


#### Enumerator NONSEQOptimizeAll

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7a9e16ee65c9ef26c92184b10e5aead8a5"></a>


#### Enumerator NONSEQNone

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7a9b285d3da2f07f7eb53444a8c27f5c5c"></a>


#### Enumerator NONSEQOptimizeAll_OD

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7a5d4175711c0e00f3d36fbb1cd8522feb"></a>


#### Enumerator OptimizeAll_DLS

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7a338c636f0cff320c35fd07aef1cedaad"></a>


#### Enumerator ParaxialFocus

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7aafc3308ff1824fd18e752acabecb6f6b"></a>


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator OptimizeAll_OD

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f04f76132ebfe9fe159f58a64fbacb7a1f03ef95b51dbaefc5a0f905df9b01af"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.CriterionComps"}]}`
-->

### Enumeration type CriterionFields

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a150df2a2f67d7bd3952818148e19d4ff"></a>

![][public]

**Definition**:


```csharp
enum CriterionFields {
  NONSEQUserDefined = 0,
  Y_Symmetric = 0,
  XY_Symmetric,
  UserDefined
}
```


Tolerancing Tool 'Criterion' Fields.


#### Enumerator NONSEQUserDefined

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a150df2a2f67d7bd3952818148e19d4ffa9f9ff6cbce248eb12b63119ce13b4aeb"></a>


#### Enumerator Y_Symmetric

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a150df2a2f67d7bd3952818148e19d4ffa55ce2cb01168a77ac562ef5a1a6ef688"></a>


#### Enumerator XY_Symmetric

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a150df2a2f67d7bd3952818148e19d4ffab1f17b4fe3decb76f0b16efbe87e130b"></a>


#### Enumerator UserDefined

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a150df2a2f67d7bd3952818148e19d4ffac90d702da275c4b81b75a6a0163bc2bf"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.CriterionFields"}]}`
-->

### Enumeration type MonteCarloStatistics

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1abda9c3ae2bb70a97a0df2a6ab66f2531"></a>

![][public]

**Definition**:


```csharp
enum MonteCarloStatistics {
  Normal = 0,
  Uniform,
  Parabolic
}
```


Tolerancing Tool 'Monte Carlo' Statistics.


#### Enumerator Normal

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1abda9c3ae2bb70a97a0df2a6ab66f2531a960b44c579bc2f6818d2daaf9e4c16f0"></a>


#### Enumerator Uniform

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1abda9c3ae2bb70a97a0df2a6ab66f2531af19516d11f2946f894070e92fcb56b6d"></a>


#### Enumerator Parabolic

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1abda9c3ae2bb70a97a0df2a6ab66f2531a49aa9675a92a9829bf26742941c9ab00"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.MonteCarloStatistics"}]}`
-->

### Enumeration type MPVTOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87"></a>

![][public]

**Definition**:


```csharp
enum MPVTOptions {
  FrontVertex = 0,
  RearVertex = 1,
  FrontMechanicalEdge = 2,
  RearMechanicalEdge = 3,
  UserDefined = 4
}
```


Tolerancing Tool 'MPVT Options' Statistics.


#### Enumerator FrontVertex

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87a7b9e9112c44f14a955b8a3276e1eeb60"></a>


#### Enumerator RearVertex

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87a4301e939aa3c49413335298ace98dcca"></a>


#### Enumerator FrontMechanicalEdge

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87a37a1302915d6d7c5712d01597e9dffc3"></a>


#### Enumerator RearMechanicalEdge

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87ab558f591035a270498e0a984159ce4df"></a>


#### Enumerator UserDefined

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a51c41988787907200bd810160c737a87ac90d702da275c4b81b75a6a0163bc2bf"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.MPVTOptions"}]}`
-->

### Enumeration type QSCriterions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61"></a>

![][public]

**Definition**:


```csharp
enum QSCriterions {
  RMSSpotRadius = 0,
  RMSSpotX = 1,
  RMSSpotY = 2,
  RMSWavefront = 3,
  BoresightError = 4,
  RMSAngularRadius = 5,
  RMSAngularX = 6,
  RMSAngularY = 7
}
```


#### Enumerator RMSSpotRadius

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61ac36c5a32316afc2a6cf50711486f99df"></a>


#### Enumerator RMSSpotX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61a12072afb8b9dbd3aa5eaab6173eed915"></a>


#### Enumerator RMSSpotY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61a1634531d569413130a026bf1589ce1f7"></a>


#### Enumerator RMSWavefront

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61a8b035a4c313addcad38e0994b9cc298b"></a>


#### Enumerator BoresightError

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61ad45f3e0390d8b7bac25dba71ed68bf97"></a>


#### Enumerator RMSAngularRadius

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61a2bafdf2f97ad4d44729805c630bf5bb5"></a>


#### Enumerator RMSAngularX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61a6ffff53beb167337b19c328d17caab83"></a>


#### Enumerator RMSAngularY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a2e4a8103c82dfe0d91eb559ed2a6fa61a4a22812dc633d24a2a453cfeeea213bf"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.QSCriterions"}]}`
-->

### Enumeration type TolerancingParameterName

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229"></a>

![][public]

**Definition**:


```csharp
enum TolerancingParameterName {
  Undefined = -1,
  AdjustSurface = 20572,
  Code = 20578,
  CommentField = 20004,
  CompensatorSetting = 11400,
  ConfigurationNumber = 16304,
  ConfigurationParameter = 20580,
  Data = 20586,
  FieldNumber = 20683,
  FieldSetting = 50027,
  Layer = 20574,
  MaximumNumber = 20576,
  MaximumValue = 20569,
  MinimumNumber = 20577,
  MinimumValue = 20568,
  NominalValue = 20566,
  Object = 20585,
  ParameterNumber = 20573,
  RowNumber = 20579,
  SamplingSetting = 20694,
  Surface = 20567,
  Surface1 = 20570,
  Surface2 = 20571,
  TdeRowNumber = 75418,
  Units = 20874,
  Statistics = 20875,
  PivotPointOption = 20876
}
```


#### Enumerator Undefined

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229aec0fc0100c4fc1ce4eea230c3dc10360"></a>


#### Enumerator AdjustSurface

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a1a0815b2b7eaa07c3c8d9118be0b9047"></a>


#### Enumerator Code

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229aca0dbad92a874b2f69b549293387925e"></a>


#### Enumerator CommentField

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a938fe9b932180bef6866d64465cd5409"></a>


#### Enumerator CompensatorSetting

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a4a1e64b8a2809c40f96d230b1cbcedaa"></a>


#### Enumerator ConfigurationNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a8060a12b320fd03568abb6489b900725"></a>


#### Enumerator ConfigurationParameter

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a147d5a9e6a1110c9cb564234a0b7eaaf"></a>


#### Enumerator Data

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229af6068daa29dbb05a7ead1e3b5a48bbee"></a>


#### Enumerator FieldNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229aa8efc51c78cdce9d013ac3904dc9d584"></a>


#### Enumerator FieldSetting

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a611f3b46614442bcabf91b5f9f19c9e2"></a>


#### Enumerator Layer

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a359b71e88f40029251366609358a302f"></a>


#### Enumerator MaximumNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a45f7d6270160b5e04801044b820b6e37"></a>


#### Enumerator MaximumValue

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a55a7238410862f8958a8f57b6daab822"></a>


#### Enumerator MinimumNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a968e1b134d4cb70dd292d030193628e1"></a>


#### Enumerator MinimumValue

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229acae48b5275b95ab3ae03e365b32f86b2"></a>


#### Enumerator NominalValue

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229ac45b46a93e86814f73f27b017d853aac"></a>


#### Enumerator Object

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a497031794414a552435f90151ac3b54b"></a>


#### Enumerator ParameterNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229ab3d547dc224249f9a61b6fc02c8999d9"></a>


#### Enumerator RowNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a01158d673c92dad977eeec527e969f83"></a>


#### Enumerator SamplingSetting

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a44336150cb361875d81c396880ec7988"></a>


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229aaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Surface1

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a6c4ed555a70d463f08be6c7dd75270ba"></a>


#### Enumerator Surface2

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a50ba23165f586b14ed916c6119b06129"></a>


#### Enumerator TdeRowNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229a14ed50329170fc6ddd0822c048a233df"></a>


#### Enumerator Units

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229ae5771a362d88a71a657bfcd21ca54b3f"></a>


#### Enumerator Statistics

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229ac33e404a441c6ba9648f88af3c68a1ca"></a>


#### Enumerator PivotPointOption

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a18ffc5c5c02195e015067483e4439229ae8e775bd9e0b0b8d23ae4fb98fb9510e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.TolerancingParameterName"}]}`
-->

### Enumeration type TolerancingColumnName

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894"></a>

![][public]

**Definition**:


```csharp
enum TolerancingColumnName {
  Unknown = -1,
  BackFocusChange = 75417,
  BoresightError = 11971,
  MtfDiffractionAverage = 11968,
  MtfDiffractionSagittal = 11970,
  MtfDiffractionTangential = 11969,
  MtfGeometricAverage = 11965,
  MtfGeometricSaggital = 11967,
  MtfGeometricTangential = 11966,
  RmsAngularRadius = 11972,
  RmsAngularX = 11973,
  RmsAngularY = 11974,
  RmsSpotRadius = 11961,
  RmsSpotX = 11962,
  RmsSpotY = 11963,
  RmsWavefrontError = 11964,
  UserMeritFunction = 11959,
  UserScript = 11960
}
```


#### Enumerator Unknown

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a88183b946cc5f0e8c96b2e66e1c74a7e"></a>

Indicates either that the column is named after an operand or that the name of the column is unknown.


#### Enumerator BackFocusChange

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a1d7398aab1c51b77392af17dc2176645"></a>


#### Enumerator BoresightError

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894ad45f3e0390d8b7bac25dba71ed68bf97"></a>


#### Enumerator MtfDiffractionAverage

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a5fc603cbbb2838a8e6a31eda6ef6243d"></a>


#### Enumerator MtfDiffractionSagittal

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894aabea12f3dfacca7e3a0713a71b50d11c"></a>


#### Enumerator MtfDiffractionTangential

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a1566ed1222ffb49b52bbe8cebc3bf134"></a>


#### Enumerator MtfGeometricAverage

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a1e65747f361b563e7efc39569c039127"></a>


#### Enumerator MtfGeometricSaggital

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a77c7686dcf1b75a2b6add88d44b75029"></a>


#### Enumerator MtfGeometricTangential

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894afb57bb9791ec95c883c40ae0d903d19e"></a>


#### Enumerator RmsAngularRadius

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a141ac0de6bd78c72c904abd4a309e65d"></a>


#### Enumerator RmsAngularX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a3363cda0a0d0afc1d02b30b3bedd51ec"></a>


#### Enumerator RmsAngularY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a7ba0f95791f92367f196297a10888501"></a>


#### Enumerator RmsSpotRadius

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894ae7939d5311e910d15f23838d6ea7c337"></a>


#### Enumerator RmsSpotX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a706bdece5f4a4530a99951ebc4d4d4e3"></a>


#### Enumerator RmsSpotY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a4f6eb450fa230f503fa7f92b77188129"></a>


#### Enumerator RmsWavefrontError

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a7739b212f12f54ed4f6b042b34b7888b"></a>


#### Enumerator UserMeritFunction

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a6d5f338a3121a8e5a3fc5f76842e4556"></a>


#### Enumerator UserScript

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a752d0e6a9139d481a618d17ff65ce894a72e1bb98b2c20ea5e0f90b8f6081c03c"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.TolerancingColumnName"}]}`
-->

### Enumeration type TolerancingOperand

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388a"></a>

![][public]

**Definition**:


```csharp
enum TolerancingOperand {
  Unknown = -1,
  CEDV = 32,
  CMCO = 33,
  CNPA = 47,
  CNPS = 48,
  COMM = 42,
  COMP = 30,
  CPAR = 31,
  NULL =  0,
  SAVE = 29,
  SEED = 41,
  STAT = 34,
  TABB = 27,
  TCEO = 45,
  TCIO = 44,
  TCMU = 40,
  TCON =  5,
  TCUR =  2,
  TEDV = 15,
  TEDX = 16,
  TEDY = 17,
  TEDR = 55,
  TETX = 18,
  TETY = 19,
  TETZ = 20,
  TEXI = 28,
  TEZI = 39,
  TFRN =  3,
  TIND = 26,
  TIRR = 13,
  TIRX = 11,
  TIRY = 12,
  TMCO = 38,
  TNMA = 46,
  TNPA = 37,
  TNPS = 36,
  TPAI = 43,
  TPAR = 14,
  TRAD =  1,
  TSDI =  6,
  TSDX =  7,
  TSDY =  8,
  TSDR = 56,
  TSTX =  9,
  TSTY = 10,
  TTHI =  4,
  TUDX = 21,
  TUDY = 22,
  TUTX = 23,
  TUTY = 24,
  TUTZ = 25,
  TWAV = 35,
  TRLX = 49,
  TRLY = 50,
  TRLR = 51,
  TARX = 52,
  TARY = 53,
  TARR = 54,
  ISOA = 57,
  ISOB = 58,
  ISOC = 59,
  ISOD = 60,
  MPVT = 61,
  NEST = 62
}
```


#### Enumerator Unknown

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa88183b946cc5f0e8c96b2e66e1c74a7e"></a>


#### Enumerator CEDV

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aab4d9477a3659b5a9d463f63e0788ffa8"></a>


#### Enumerator CMCO

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa1bbf98280767768f9e2bda24dbdb270a"></a>


#### Enumerator CNPA

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa4a2b7a6def900e336772d7b4a0d54270"></a>


#### Enumerator CNPS

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa2b982446a550c75097b70cedec8e2b5c"></a>


#### Enumerator COMM

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa70a7ffaabaee5fd9a89930ffa9127040"></a>


#### Enumerator COMP

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa85a1cdddc59cb89e6297acc2f2fc1755"></a>


#### Enumerator CPAR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aaedf4c88b09bc495c5b1787413345d6e7"></a>


#### Enumerator NULL

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa6c3e226b4d4795d518ab341b0824ec29"></a>


#### Enumerator SAVE

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aaf5cf47ab06d0d98b0d16d10c82d87953"></a>


#### Enumerator SEED

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aaace01ee43fda36bd62efc12035e693f6"></a>


#### Enumerator STAT

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa73f760f8a96d0acec3dec614a688ff79"></a>


#### Enumerator TABB

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aad05e1ec6199a3fec6ba289df965dc33c"></a>


#### Enumerator TCEO

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aaa5c751873ad89cb4397ce35cebd68cdd"></a>


#### Enumerator TCIO

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aac622fbec15f7a31978cc051652cf5ca0"></a>


#### Enumerator TCMU

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa8a12496687b965e342f546f4412eedae"></a>


#### Enumerator TCON

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aacabc729eebcbd02ffe653e953c15e23e"></a>


#### Enumerator TCUR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa7deff3c231e194485b620b4e5b345502"></a>


#### Enumerator TEDV

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aab92a56799e6e2c15dccadd823289a769"></a>


#### Enumerator TEDX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aab069ad60bf34debaf82c5eb54acb9f34"></a>


#### Enumerator TEDY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa12702a0fca7b75aa771f4a6a2f7e6621"></a>


#### Enumerator TEDR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aad28eacbb0fe9df004cd14846492bddf3"></a>


#### Enumerator TETX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa15f8bb77d8ef8a6a7201fbae46fd824a"></a>


#### Enumerator TETY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa5a17c1de88f244c2a800fc33c11a0e78"></a>


#### Enumerator TETZ

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa2a5c40741e6ebb86487a9ff39804742c"></a>


#### Enumerator TEXI

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa25982efb4ecdbd11b48d6414af4de241"></a>


#### Enumerator TEZI

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa51ee0c305d5c0fb46e06efd339487c27"></a>


#### Enumerator TFRN

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa142979266a84c86fc9458e3fb1e91296"></a>


#### Enumerator TIND

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa8673c3a3bffd3ff2549393ef248598da"></a>


#### Enumerator TIRR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aafcd174104394d0467f736403404d6fda"></a>


#### Enumerator TIRX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa6828f4de773a316dfdc505c8ad5eeab9"></a>


#### Enumerator TIRY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa3228f5376cc1cc373f660b64e8660aae"></a>


#### Enumerator TMCO

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa1698841696410c71c093aa67c794e1de"></a>


#### Enumerator TNMA

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa5794734af20306f67d819fb44590fcaf"></a>


#### Enumerator TNPA

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa91a5d05340538c2cf5bf71843921f069"></a>


#### Enumerator TNPS

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa20205240f9d9a440938d9f6b5677185c"></a>


#### Enumerator TPAI

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aae96b2e26e05703979c4c87d1bfebf0b0"></a>


#### Enumerator TPAR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa6ffe3c2f69df03f0381831a54489b250"></a>


#### Enumerator TRAD

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aab35bbbf46137381ad1a7d417d6cb68da"></a>


#### Enumerator TSDI

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa302832bf93683c429ad10c9e7ae27f5c"></a>


#### Enumerator TSDX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa350bb93b6a9850dd4242452ea067a0b2"></a>


#### Enumerator TSDY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa23f10492de4bddb6325271a43b245a30"></a>


#### Enumerator TSDR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa9a6fff76efc79d0211f0b0269c562327"></a>


#### Enumerator TSTX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa4ea64b0c55f48bfc1a759848d0072d91"></a>


#### Enumerator TSTY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aad87adc45e107f611b552d4c15162b487"></a>


#### Enumerator TTHI

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa910ede80bc0fefc5f008d5d72a699a5d"></a>


#### Enumerator TUDX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa4504592dafa99e5c7f6f5746b767807b"></a>


#### Enumerator TUDY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa2cfbf72db9edd6ae434d700aa0383cf6"></a>


#### Enumerator TUTX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa6aa6a74fbce8fdf0b43a6e28acc09309"></a>


#### Enumerator TUTY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa2434e2701dd8c3324a7b1d998cc1cc94"></a>


#### Enumerator TUTZ

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa7b0af02b0a515d59bb08597e999632ba"></a>


#### Enumerator TWAV

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa95b70866453ccb2c9e7d3186a0eef58f"></a>


#### Enumerator TRLX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa9a6131404ec552e9298c8f17badc957e"></a>


#### Enumerator TRLY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa2086f027b19a841bf4c8ffe03e4cf10d"></a>


#### Enumerator TRLR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa089f24e0cc0a1af56ffcb21ea42e8f9f"></a>


#### Enumerator TARX

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aafa7989913c68a58f87324b31e426a9f4"></a>


#### Enumerator TARY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aad8b640ad2aad2192ca27ee2b958e1a10"></a>


#### Enumerator TARR

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa42d5746ba6b3a9b6869658c642606168"></a>


#### Enumerator ISOA

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa62b54141065b5bfeedf514500dd40fd5"></a>


#### Enumerator ISOB

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aaf47bcf8f785ce0f852d1d5ea4cefae83"></a>


#### Enumerator ISOC

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa89ff93569b4bb4f132314031e2152ff0"></a>


#### Enumerator ISOD

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa32bca86bf1fc5cbc560d148fd3eeb9c0"></a>


#### Enumerator MPVT

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aa57cc8294091fbfb6cdace7d038f57603"></a>


#### Enumerator NEST

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_tolerancing_1a4f5d9b96a26f85d6e65ac743845f388aabe5abd115b783b87e5394a7f6bf9265d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Tolerancing.TolerancingOperand"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
