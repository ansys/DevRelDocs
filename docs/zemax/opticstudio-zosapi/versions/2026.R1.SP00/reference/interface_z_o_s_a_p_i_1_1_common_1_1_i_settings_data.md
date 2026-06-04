# Interface ZOSAPI::Common::ISettingsData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data"></a>

![][C#]
![][public]

**Definition**:

Methods and interfaces for storing and retrieving user-defined settings. <br/>
 All settings are referenced via a user-defined string key, and has a specific type associated with it (e.g. a single integer, array of doubles, etc.).


## Members

* [GetBooleanArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a04a84e34ce2d28e9da06c79d8cdc9f58)
* [GetBooleanValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a51eb4c5189c542a8ac713f814c37055e)
* [GetByteArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aec2ae3a4767e914299cb34ce23ae0c4a)
* [GetByteValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1adbb9ba498995b71e5f31863842e3b552)
* [GetDoubleArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ad93ecca28b80be664d1a481287811629)
* [GetDoubleValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a87b44470a1d47cd7284e3bc6271aef66)
* [GetEntryType](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ac5fabbf3a3538c4bf6ea63678cf6952c)
* [GetFloatArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a91187448b53b6b0c354007c14b84c812)
* [GetFloatValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a7d5ed85d48e3e2555888dbde7bbbf4a0)
* [GetIntegerArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a2597c233bc38d24d6ac5651d056648d1)
* [GetIntegerValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1afc98759cdbdc5bc872dacd187dceedb5)
* [GetKeys](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ad6401bf2735e47db327e1bf9d9cd7585)
* [GetStringValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a8dacf19f3f3548278e55de72de4962db)
* [NumberOfSettings](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ac1d157e801f9ea841bf1351f231a16fb)
* [SetBooleanArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a737fa1eec2c3da8b183b45ece66ee0f1)
* [SetBooleanValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a799878c0318edec3e0dd754dd8b40fc0)
* [SetByteArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aaf7be7f38f6f46ed5b066d4c1008a2d0)
* [SetByteValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a834cd8a5086fe60291df94711431e37e)
* [SetDoubleArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aa63db0c55a455d70d0582148990d4b66)
* [SetDoubleValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a58296e811161615742dff1e7bfebd0a7)
* [SetFloatArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a2d3b3e06bc951eabace2fc77fe74f177)
* [SetFloatValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aecb35ff8c5df08e50e0d4643fe8371d6)
* [SetIntegerArray](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ac22b47ff85e79901e9b984b5112ad87b)
* [SetIntegerValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a46de0b3671e5f287477ee6f80e0373b5)
* [SetStringValue](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a719c9e828d8578031934d890acb67bf1)

## Properties

### Property NumberOfSettings

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ac1d157e801f9ea841bf1351f231a16fb"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Common.ISettingsData.NumberOfSettings
```


Gets the total number of settings currently stored via the API.

The number of settings.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.NumberOfSettings"}]}`
-->

## Public functions

### Function GetKeys

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ad6401bf2735e47db327e1bf9d9cd7585"></a>

![][public]


```csharp
string[] ZOSAPI.Common.ISettingsData.GetKeys()
```


Gets an array of all keys currently stored.

**Returns**:


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetKeys"}]}`
-->

### Function GetEntryType

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ac5fabbf3a3538c4bf6ea63678cf6952c"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetEntryType(string key, [Out]out SettingsDataType type, [Out]out bool isArray, [Out]out int arraySize)
```


Gets information about the data associated with the specified key.

**Parameters**:

* **key**: The key.
* **type**: The of data associated with the key.
* **isArray**: If set to <code>true</code>, the data is stored as an array of SettingsDataType.
* **arraySize**: The number of elements of the array, or 1 if it is a single element.


**Returns**:

<code>true</code> if the key exists; otherwise, <code>false</code>.


**Parameters**:

* string **key**
* _[Out]_ out [SettingsDataType](namespace_z_o_s_a_p_i_1_1_common.md#namespace_z_o_s_a_p_i_1_1_common_1a3f54742c5ea7ea3449f67a65dea61289) **type**
* _[Out]_ out bool **isArray**
* _[Out]_ out int **arraySize**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetEntryType"}]}`
-->

### Function GetDoubleValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a87b44470a1d47cd7284e3bc6271aef66"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetDoubleValue(string key, [Out]out double val)
```


**Parameters**:

* string **key**
* _[Out]_ out double **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetDoubleValue"}]}`
-->

### Function GetIntegerValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1afc98759cdbdc5bc872dacd187dceedb5"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetIntegerValue(string key, [Out]out int val)
```


**Parameters**:

* string **key**
* _[Out]_ out int **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetIntegerValue"}]}`
-->

### Function GetFloatValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a7d5ed85d48e3e2555888dbde7bbbf4a0"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetFloatValue(string key, [Out]out float val)
```


**Parameters**:

* string **key**
* _[Out]_ out float **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetFloatValue"}]}`
-->

### Function GetStringValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a8dacf19f3f3548278e55de72de4962db"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetStringValue(string key, [Out]out string val)
```


**Parameters**:

* string **key**
* _[Out]_ out string **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetStringValue"}]}`
-->

### Function GetByteValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1adbb9ba498995b71e5f31863842e3b552"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetByteValue(string key, [Out]out byte val)
```


**Parameters**:

* string **key**
* _[Out]_ out byte **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetByteValue"}]}`
-->

### Function GetBooleanValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a51eb4c5189c542a8ac713f814c37055e"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetBooleanValue(string key, [Out]out bool val)
```


**Parameters**:

* string **key**
* _[Out]_ out bool **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetBooleanValue"}]}`
-->

### Function SetDoubleValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a58296e811161615742dff1e7bfebd0a7"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetDoubleValue(string key, [In]double val)
```


**Parameters**:

* string **key**
* _[In]_ double **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetDoubleValue"}]}`
-->

### Function SetIntegerValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a46de0b3671e5f287477ee6f80e0373b5"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetIntegerValue(string key, [In]int val)
```


**Parameters**:

* string **key**
* _[In]_ int **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetIntegerValue"}]}`
-->

### Function SetFloatValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aecb35ff8c5df08e50e0d4643fe8371d6"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetFloatValue(string key, [In]float val)
```


**Parameters**:

* string **key**
* _[In]_ float **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetFloatValue"}]}`
-->

### Function SetStringValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a719c9e828d8578031934d890acb67bf1"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetStringValue(string key, [In]string val)
```


**Parameters**:

* string **key**
* _[In]_ string **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetStringValue"}]}`
-->

### Function SetByteValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a834cd8a5086fe60291df94711431e37e"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetByteValue(string key, [In]byte val)
```


**Parameters**:

* string **key**
* _[In]_ byte **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetByteValue"}]}`
-->

### Function SetBooleanValue

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a799878c0318edec3e0dd754dd8b40fc0"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetBooleanValue(string key, [In]bool val)
```


**Parameters**:

* string **key**
* _[In]_ bool **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetBooleanValue"}]}`
-->

### Function GetDoubleArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ad93ecca28b80be664d1a481287811629"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetDoubleArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In, Out]double[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In, Out]_ double[] **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetDoubleArray"}]}`
-->

### Function GetIntegerArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a2597c233bc38d24d6ac5651d056648d1"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetIntegerArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In, Out]int[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In, Out]_ int[] **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetIntegerArray"}]}`
-->

### Function GetFloatArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a91187448b53b6b0c354007c14b84c812"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetFloatArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In, Out]float[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In, Out]_ float[] **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetFloatArray"}]}`
-->

### Function GetByteArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aec2ae3a4767e914299cb34ce23ae0c4a"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetByteArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In, Out]byte[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In, Out]_ byte[] **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetByteArray"}]}`
-->

### Function GetBooleanArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a04a84e34ce2d28e9da06c79d8cdc9f58"></a>

![][public]


```csharp
bool ZOSAPI.Common.ISettingsData.GetBooleanArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In, Out]bool[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In, Out]_ bool[] **val**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.GetBooleanArray"}]}`
-->

### Function SetDoubleArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aa63db0c55a455d70d0582148990d4b66"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetDoubleArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In]double[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In]_ double[] **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetDoubleArray"}]}`
-->

### Function SetIntegerArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1ac22b47ff85e79901e9b984b5112ad87b"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetIntegerArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In]int[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In]_ int[] **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetIntegerArray"}]}`
-->

### Function SetFloatArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a2d3b3e06bc951eabace2fc77fe74f177"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetFloatArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In]float[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In]_ float[] **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetFloatArray"}]}`
-->

### Function SetByteArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1aaf7be7f38f6f46ed5b066d4c1008a2d0"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetByteArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In]byte[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In]_ byte[] **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetByteArray"}]}`
-->

### Function SetBooleanArray

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data_1a737fa1eec2c3da8b183b45ece66ee0f1"></a>

![][public]


```csharp
void ZOSAPI.Common.ISettingsData.SetBooleanArray(string key, int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In]bool[] val)
```


**Parameters**:

* string **key**
* int **Size**
* _[In]_ bool[] **val**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.ISettingsData.SetBooleanArray"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
