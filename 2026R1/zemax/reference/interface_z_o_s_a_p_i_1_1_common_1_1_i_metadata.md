# Interface ZOSAPI::Common::IMetadata

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata"></a>

![][C#]
![][public]

**Definition**:


## Members

* [ConvertFromBinary](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a8e5bfb94239493967af4c7be65cc53a0)
* [ConvertToBinary](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aba4dfbe8b303bde26bee078a851f2bc7)
* [CreateGuid](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a2375480900846e8847e4aa5e711f73c0)
* [GetData](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a9af7c6589e6bdb6be447e58222780077)
* [GetKeyName](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aad12ddcc6951c2ba774e36e118be36c5)
* [NumberOfKeys](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aface6bd1c89bc51c13fdc53f7db764f3)
* [RemoveData](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aff5188a0436eaaf0ebd8a5b6257bb2ea)
* [SetData](interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a7f47c708fd816e2cab402d995b5e09bf)

## Properties

### Property NumberOfKeys

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aface6bd1c89bc51c13fdc53f7db764f3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Common.IMetadata.NumberOfKeys
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.NumberOfKeys"}]}`
-->

## Public functions

### Function GetKeyName

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aad12ddcc6951c2ba774e36e118be36c5"></a>

![][public]


```csharp
string ZOSAPI.Common.IMetadata.GetKeyName(int keyNumber)
```


**Parameters**:

* **keyNumber**: A 1-based key number (i.e., valid values are 1..NumberOfKeys (inclusive)).


**Parameters**:

* int **keyNumber**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.GetKeyName"}]}`
-->

### Function GetData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a9af7c6589e6bdb6be447e58222780077"></a>

![][public]


```csharp
string ZOSAPI.Common.IMetadata.GetData(string key)
```


**Parameters**:

* string **key**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.GetData"}]}`
-->

### Function SetData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a7f47c708fd816e2cab402d995b5e09bf"></a>

![][public]


```csharp
void ZOSAPI.Common.IMetadata.SetData(string key, string value)
```


**Parameters**:

* string **key**
* string **value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.SetData"}]}`
-->

### Function RemoveData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aff5188a0436eaaf0ebd8a5b6257bb2ea"></a>

![][public]


```csharp
bool ZOSAPI.Common.IMetadata.RemoveData(string key)
```


**Parameters**:

* string **key**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.RemoveData"}]}`
-->

### Function ConvertFromBinary

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a8e5bfb94239493967af4c7be65cc53a0"></a>

![][public]


```csharp
string ZOSAPI.Common.IMetadata.ConvertFromBinary(byte[] data)
```


**Parameters**:

* byte[] **data**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.ConvertFromBinary"}]}`
-->

### Function ConvertToBinary

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1aba4dfbe8b303bde26bee078a851f2bc7"></a>

![][public]


```csharp
byte[] ZOSAPI.Common.IMetadata.ConvertToBinary(string s)
```


**Parameters**:

* string **s**

**Return type**: byte[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.ConvertToBinary"}]}`
-->

### Function CreateGuid

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_metadata_1a2375480900846e8847e4aa5e711f73c0"></a>

![][public]


```csharp
string ZOSAPI.Common.IMetadata.CreateGuid()
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMetadata.CreateGuid"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)