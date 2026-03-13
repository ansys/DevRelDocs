# Interface ZOSAPI::SystemData::ISDAdvancedData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Advanced Data. This interface can be accessed via the ISystemData interface.


## Members

* [DontPrintCoordinateBreakData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a5dcd72c5edb07d9449d57ae47913d85c)
* [FNumMethod](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a21d14486155f63e11cd1e133e7ebeda3)
* [HuygensIntegralMethod](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a20bec63ef62922dbcd134ad41dcfd915)
* [IncludeCalculatedDataInSessionFile](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a3e9d53a6d54e4ca874f53669af981707)
* [IncludeToleranceDataInSessionFile](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a7927efe5c4aa38fbe7096d860ed82eeb)
* [OPDModulo2PI](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a8620948ed70d321fc52f02f372e4d454)
* [ParaxialRays](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1ac7ad86311ec2557009b53574e2ad28b0)
* [ReferenceOPD](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1ac59f1c90d8666801d283222389a8e141)
* [TurnOffThreading](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a77d999fc81dab2a601d1a7682e35bc4c)

## Properties

### Property ReferenceOPD

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1ac59f1c90d8666801d283222389a8e141"></a>

![][public]

**Definition**:


```csharp
ReferenceOPDSetting ZOSAPI.SystemData.ISDAdvancedData.ReferenceOPD
```


**Return type**: [ReferenceOPDSetting](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1ac785eb9bc009ab14b3151d30ffbc2814)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.ReferenceOPD"}]}`
-->

### Property ParaxialRays

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1ac7ad86311ec2557009b53574e2ad28b0"></a>

![][public]

**Definition**:


```csharp
ParaxialRaysSetting ZOSAPI.SystemData.ISDAdvancedData.ParaxialRays
```


**Return type**: [ParaxialRaysSetting](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1ad94330d5a774cac868576265094501b9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.ParaxialRays"}]}`
-->

### Property FNumMethod

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a21d14486155f63e11cd1e133e7ebeda3"></a>

![][public]

**Definition**:


```csharp
FNumberComputationType ZOSAPI.SystemData.ISDAdvancedData.FNumMethod
```


**Return type**: [FNumberComputationType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1ae75b21c589365893cc2e73447ea57165)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.FNumMethod"}]}`
-->

### Property DontPrintCoordinateBreakData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a5dcd72c5edb07d9449d57ae47913d85c"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDAdvancedData.DontPrintCoordinateBreakData
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.DontPrintCoordinateBreakData"}]}`
-->

### Property TurnOffThreading

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a77d999fc81dab2a601d1a7682e35bc4c"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDAdvancedData.TurnOffThreading
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.TurnOffThreading"}]}`
-->

### Property OPDModulo2PI

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a8620948ed70d321fc52f02f372e4d454"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDAdvancedData.OPDModulo2PI
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.OPDModulo2PI"}]}`
-->

### Property IncludeCalculatedDataInSessionFile

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a3e9d53a6d54e4ca874f53669af981707"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDAdvancedData.IncludeCalculatedDataInSessionFile
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.IncludeCalculatedDataInSessionFile"}]}`
-->

### Property IncludeToleranceDataInSessionFile

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a7927efe5c4aa38fbe7096d860ed82eeb"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDAdvancedData.IncludeToleranceDataInSessionFile
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.IncludeToleranceDataInSessionFile"}]}`
-->

### Property HuygensIntegralMethod

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data_1a20bec63ef62922dbcd134ad41dcfd915"></a>

![][public]

**Definition**:


```csharp
HuygensIntegralSettings ZOSAPI.SystemData.ISDAdvancedData.HuygensIntegralMethod
```


**Return type**: [HuygensIntegralSettings](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a09887aac1eb9e7c52855adf04a194ea2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDAdvancedData.HuygensIntegralMethod"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
