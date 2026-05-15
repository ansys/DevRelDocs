# Interface ZOSAPI::Tools::IAPIUtilities

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities"></a>

![][C#]
![][public]

**Definition**:


## Members

* [ConvertToStringCust](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1ad00d91b973602f60b667d3a6670fa7e7)
* [ConvertToStringExp](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1abe587a9f9227476edc4033a24e16d5cc)
* [ConvertToStringExp](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1a5ccc0e4781f56736c647a8310dff43fe)
* [ConvertToStringFixed](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1a54d1acd63fe99073816faba4ab7f3042)
* [ConvertToStringFixed](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1a5913fcd62cac034cdc554cf540441068)
* [ConvertToStringPref](interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1af740fb2f6cb59ba28e13bfff88494e9b)

## Public functions

### Function ConvertToStringFixed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1a54d1acd63fe99073816faba4ab7f3042"></a>

![][public]


```csharp
string ZOSAPI.Tools.IAPIUtilities.ConvertToStringFixed(double x, int digits)
```


Format the value as decimal.

**Parameters**:

* **x**: The value to be formatted
* **digits**: The number of digits after the decimal point


**Returns**:

The formatted value


**Parameters**:

* double **x**
* int **digits**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IAPIUtilities.ConvertToStringFixed"}]}`
-->

### Function ConvertToStringFixed

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1a5913fcd62cac034cdc554cf540441068"></a>

![][public]


```csharp
string ZOSAPI.Tools.IAPIUtilities.ConvertToStringFixed(double x)
```


Format the value as decimal based on preferences.

**Parameters**:

* **x**: The value to be formatted


**Returns**:

The formatted value


**Parameters**:

* double **x**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IAPIUtilities.ConvertToStringFixed"}]}`
-->

### Function ConvertToStringExp

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1abe587a9f9227476edc4033a24e16d5cc"></a>

![][public]


```csharp
string ZOSAPI.Tools.IAPIUtilities.ConvertToStringExp(double x, int digits)
```


Format the value as exponential.

**Parameters**:

* **x**: The value to be formatted
* **digits**: The number of digits after the decimal point


**Returns**:

The formatted value


**Parameters**:

* double **x**
* int **digits**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IAPIUtilities.ConvertToStringExp"}]}`
-->

### Function ConvertToStringExp

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1a5ccc0e4781f56736c647a8310dff43fe"></a>

![][public]


```csharp
string ZOSAPI.Tools.IAPIUtilities.ConvertToStringExp(double x)
```


Format the value as exponential based on preferences.

**Parameters**:

* **x**: The value to be formatted


**Returns**:

The formatted value


**Parameters**:

* double **x**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IAPIUtilities.ConvertToStringExp"}]}`
-->

### Function ConvertToStringCust

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1ad00d91b973602f60b667d3a6670fa7e7"></a>

![][public]


```csharp
string ZOSAPI.Tools.IAPIUtilities.ConvertToStringCust(double x, int digits, double expBelow, double expAbove)
```


**Parameters**:

* double **x**
* int **digits**
* double **expBelow**
* double **expAbove**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IAPIUtilities.ConvertToStringCust"}]}`
-->

### Function ConvertToStringPref

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_a_p_i_utilities_1af740fb2f6cb59ba28e13bfff88494e9b"></a>

![][public]


```csharp
string ZOSAPI.Tools.IAPIUtilities.ConvertToStringPref(double x)
```


**Parameters**:

* double **x**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IAPIUtilities.ConvertToStringPref"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
