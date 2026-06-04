# Namespace ZOSAPI::Analysis::Tolerancing

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing"></a>

![][C#]

**Definition**:


## Child namespaces

* [ZOSAPI::Analysis::Tolerancing::QuickYield](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield)

## Classes

* [ZOSAPI::Analysis::Tolerancing::IAS\_ISOElementDrawing](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___i_s_o_element_drawing)
* [ZOSAPI::Analysis::Tolerancing::IAS\_QuickYield](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___quick_yield.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___quick_yield)
* [ZOSAPI::Analysis::Tolerancing::IAS\_TolerancingHistogram](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_histogram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_histogram)
* [ZOSAPI::Analysis::Tolerancing::IAS\_TolerancingYield](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_yield.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_yield)
* [ZOSAPI::Analysis::Tolerancing::ITolerancingOperand](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand)
* [ZOSAPI::Analysis::Tolerancing::ITolerancingOperands](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands)

## Enumeration types

### Enumeration type ShowAsISO

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a42fca77bdbe3ceefdef063d0ee74031a"></a>

![][public]

**Definition**:


```csharp
enum ShowAsISO {
  Surface =0,
  Singlet =1,
  Doublet =2
}
```


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a42fca77bdbe3ceefdef063d0ee74031aaaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Singlet

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a42fca77bdbe3ceefdef063d0ee74031aa0d1191428c8efa8d36c550be55148e4b"></a>


#### Enumerator Doublet

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a42fca77bdbe3ceefdef063d0ee74031aab9857a0adcbf5adc81356dba5c7ff355"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.ShowAsISO"}]}`
-->

### Enumeration type QYPrecisions

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a3683df03bcee18082ad87352290bdd53"></a>

![][public]

**Definition**:


```csharp
enum QYPrecisions {
  Standard = 0,
  High,
  VeryHigh
}
```


#### Enumerator Standard

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a3683df03bcee18082ad87352290bdd53aeb6d8ae6f20283755b339c0dc273988b"></a>


#### Enumerator High

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a3683df03bcee18082ad87352290bdd53a655d20c1ca69519ca647684edbb2db35"></a>


#### Enumerator VeryHigh

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a3683df03bcee18082ad87352290bdd53af0b44f10edcd3bdee6720430ac4111cd"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QYPrecisions"}]}`
-->

### Enumeration type QYCompensations

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a16eda2a0319cc9c5c5455ae6f9546b7b"></a>

![][public]

**Definition**:


```csharp
enum QYCompensations {
  Standard = 0,
  High,
  VeryHigh
}
```


#### Enumerator Standard

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a16eda2a0319cc9c5c5455ae6f9546b7baeb6d8ae6f20283755b339c0dc273988b"></a>


#### Enumerator High

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a16eda2a0319cc9c5c5455ae6f9546b7ba655d20c1ca69519ca647684edbb2db35"></a>


#### Enumerator VeryHigh

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1a16eda2a0319cc9c5c5455ae6f9546b7baf0b44f10edcd3bdee6720430ac4111cd"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QYCompensations"}]}`
-->

### Enumeration type QYCompensatorStrategy

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1ad3f308e5daed7a29e380d182c41c6812"></a>

![][public]

**Definition**:


```csharp
enum QYCompensatorStrategy {
  OptimizeAllDampedLeastSquares = 0,
  ParaxialFocus = 1,
  Ignore = 2,
  OptimizeAllOrthogonalDescent = 3
}
```


Specifies which strategy to use to optimize the compensators in a Quick Yield analysis.


#### Enumerator OptimizeAllDampedLeastSquares

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1ad3f308e5daed7a29e380d182c41c6812a475583f65711d765baff2e5ce9e55f95"></a>

All compensators will be optimized using Damped Least Squares.


#### Enumerator ParaxialFocus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1ad3f308e5daed7a29e380d182c41c6812aafc3308ff1824fd18e752acabecb6f6b"></a>

Paraxial Focus compensation only.


#### Enumerator Ignore

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1ad3f308e5daed7a29e380d182c41c6812afd038fc7f319e48f3115d92bf5bdbef9"></a>

All compensators will be ignored.


#### Enumerator OptimizeAllOrthogonalDescent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1ad3f308e5daed7a29e380d182c41c6812a86f3faf35f3b6057e5f1e670107d2c48"></a>

All compensators will be optimized using Orthogonal Descent.


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Tolerancing.QYCompensatorStrategy"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
