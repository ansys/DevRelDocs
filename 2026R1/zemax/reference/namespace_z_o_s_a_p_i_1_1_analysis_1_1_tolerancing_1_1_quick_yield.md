# Namespace ZOSAPI::Analysis::Tolerancing::QuickYield

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Analysis::Tolerancing::QuickYield::IAS\_QYField](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field)

## Enumeration types

### Enumeration type XYSymmetricField

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416"></a>

![][public]

**Definition**:


```csharp
enum XYSymmetricField {
  All = 0,
  Zero = 1,
  YPositive70Percent = 2,
  YNegative70Percent = 3,
  YPositive100Percent = 4,
  YNegative100Percent = 5,
  XPositive70Percent = 6,
  XNegative70Percent = 7,
  XPositive100Percent = 8,
  XNegative100Percent = 9
}
```


Specifies which field from the XY-symmetric set to use for a Quick Yield analysis.


#### Enumerator All

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416ab1c94ca2fbc3e78fc30069c8d0f01680"></a>

All XY-symmetric fields.


#### Enumerator Zero

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416ad7ed4ee1df437474d005188535f74875"></a>

The field whose (X, Y) coordinates are (0, 0).


#### Enumerator YPositive70Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416ac2f21d5130ce11df3582663bbffd8463"></a>

The field whose (X, Y) coordinates are (0, 0.7×MaximumField.Y).


#### Enumerator YNegative70Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416af60672ef999d6a4ac3ab8b8f2eeb56f7"></a>

The field whose (X, Y) coordinates are (0, -0.7×MaximumField.Y).


#### Enumerator YPositive100Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416a6cf6e25c6eba1c8a06cf62906c8670c4"></a>

The field whose (X, Y) coordinates are (0, MaximumField.Y).


#### Enumerator YNegative100Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416a2f12fe87cb9692d8110f44e50f8d07a1"></a>

The field whose (X, Y) coordinates are (0, -MaximumField.Y).


#### Enumerator XPositive70Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416a6a6b1d8f8129d4541c1d96c2d4d7a865"></a>

The field whose (X, Y) coordinates are (0.7×MaximumField.X, 0).


#### Enumerator XNegative70Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416aa8f3f5b1ed48a50ebd7341cc15068f00"></a>

The field whose (X, Y) coordinates are (-0.7×MaximumField.X, 0).


#### Enumerator XPositive100Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416a6d0213ee1cacc2fa181613060ffd22d8"></a>

The field whose (X, Y) coordinates are (MaximumField.X, 0).


#### Enumerator XNegative100Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8d210e359740b4ecadc3f6f01e8f8416adf70b670647006d2a59c644219b07e33"></a>

The field whose (X, Y) coordinates are (-MaximumField.X, 0).


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.XYSymmetricField"}]}`
-->

### Enumeration type YSymmetricField

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0"></a>

![][public]

**Definition**:


```csharp
enum YSymmetricField {
  All = 0,
  Zero = 1,
  Positive70Percent = 2,
  Negative70Percent = 3,
  Positive100Percent = 4,
  Negative100Percent = 5
}
```


Specifies which field from the Y-symmetric set to use for a Quick Yield analysis.


#### Enumerator All

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0ab1c94ca2fbc3e78fc30069c8d0f01680"></a>

All Y-symmetric fields.


#### Enumerator Zero

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0ad7ed4ee1df437474d005188535f74875"></a>

The field whose (X, Y) coordinates are (0, 0).


#### Enumerator Positive70Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0ade6bf69f5e574331ab28937780148511"></a>

The field whose (X, Y) coordinates are (0, 0.7×MaximumField.Y).


#### Enumerator Negative70Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0aab71fc49b19c5fec6123b67ceb930b78"></a>

The field whose (X, Y) coordinates are (0, -0.7×MaximumField.Y).


#### Enumerator Positive100Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0ac37b7043af087c2e5e135ceb47e988f1"></a>

The field whose (X, Y) coordinates are (0, MaximumField.Y).


#### Enumerator Negative100Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1a8e290455dcf6081dae5ecd8137a143d0a0711c363f453cc7d2fd917a5917c9590"></a>

The field whose (X, Y) coordinates are (0, -MaximumField.Y).


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QuickYield.YSymmetricField"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
