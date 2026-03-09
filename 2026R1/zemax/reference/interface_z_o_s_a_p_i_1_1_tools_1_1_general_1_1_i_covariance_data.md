# Interface ZOSAPI::Tools::General::ICovarianceData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [Cov](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1aeee166a7bc5a70dd2f1bdeb074085203)
* [GetCovariance](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a41bc5a50d473ad1ca30ca8adaf6c2ba4)
* [GetValues](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1ac21515c629536a5fa07263a2147ba72b)
* [GetVectors](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a2cfe50ebfb18ea8ea41fe3c8beba7f8c)
* [V](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a7be4fa06985131519987a0cc2a5ead74)
* [W](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a556c437c22abd2efed1d8208abc2c557)

## Properties

### Property Cov

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1aeee166a7bc5a70dd2f1bdeb074085203"></a>

![][public]

**Definition**:


```csharp
double [,] ZOSAPI.Tools.General.ICovarianceData.Cov
```


**Return type**: double[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICovarianceData.Cov"}]}`
-->

### Property V

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a7be4fa06985131519987a0cc2a5ead74"></a>

![][public]

**Definition**:


```csharp
double [,] ZOSAPI.Tools.General.ICovarianceData.V
```


**Return type**: double[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICovarianceData.V"}]}`
-->

### Property W

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a556c437c22abd2efed1d8208abc2c557"></a>

![][public]

**Definition**:


```csharp
double [] ZOSAPI.Tools.General.ICovarianceData.W
```


**Return type**: double[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICovarianceData.W"}]}`
-->

## Public functions

### Function GetCovariance

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a41bc5a50d473ad1ca30ca8adaf6c2ba4"></a>

![][public]


```csharp
IMatrixData ZOSAPI.Tools.General.ICovarianceData.GetCovariance()
```


**Return type**: [IMatrixData](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICovarianceData.GetCovariance"}]}`
-->

### Function GetVectors

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1a2cfe50ebfb18ea8ea41fe3c8beba7f8c"></a>

![][public]


```csharp
IMatrixData ZOSAPI.Tools.General.ICovarianceData.GetVectors()
```


**Return type**: [IMatrixData](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICovarianceData.GetVectors"}]}`
-->

### Function GetValues

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data_1ac21515c629536a5fa07263a2147ba72b"></a>

![][public]


```csharp
IVectorData ZOSAPI.Tools.General.ICovarianceData.GetValues()
```


**Return type**: [IVectorData](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICovarianceData.GetValues"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)