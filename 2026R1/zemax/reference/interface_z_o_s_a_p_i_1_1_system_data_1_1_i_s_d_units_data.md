# Interface ZOSAPI::SystemData::ISDUnitsData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Units Data. This interface can be accessed via the ISystemData interface.

Usage (see [Example 12](../apiexamples/example_12.md) for a full sample)


C# 
```csharp
            // Change Lens Units to Inches
            ZOSAPI.SystemData.ISDUnitsData sysUnits = TheSystem.SystemData.Units;
            sysUnits.LensUnits = ZOSAPI.SystemData.ZemaxSystemUnits.Inches;
```
 C++ 
```csharp
    // Change Lens Units to Inches
    ZOSAPI_Interfaces::ISDUnitsDataPtr sysUnits = TheSystem->SystemData->Units;
    sysUnits->LensUnits = ZOSAPI_Interfaces::ZemaxSystemUnits_Inches;
```
 Matlab 
```csharp
    % Change Lens Units to Inches
    sysUnits = TheSystem.SystemData.Units;
    sysUnits.LensUnits = ZOSAPI.SystemData.ZemaxSystemUnits.Inches;
```
 Python 
```csharp
    # Change lens units to inches
    sysUnits = TheSystem.SystemData.Units
    sysUnits.LensUnits = ZOSAPI.SystemData.ZemaxSystemUnits.Inches
```

## Members

* [AfocalModeUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a24310c4a0fa577c995f60b9e42716764)
* [AnalysisUnitPrefix](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a93649a3ec420b35037da1c4591ceea74)
* [AnalysisUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a358c2b7f3fd0ff9b8d76ecfe3987017b)
* [CADUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1af0a0978634de2e3a0e7f6cc1acbc4ae5)
* [LensUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a5b3a7c3db715f4a2a6891ed9a13d8afe)
* [MTFUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a69540d0d1e809a4ff07bb4ca5dec2dd1)
* [SourceUnitPrefix](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1aad84b33ecffe50698197a22800d66004)
* [SourceUnits](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1ac962522082b979c6b9361fb5b1ad2953)
* [UseLensUnitsForCAD](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1adc19da6f279965febc5bd71ed6e3bcb2)

## Properties

### Property LensUnits

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a5b3a7c3db715f4a2a6891ed9a13d8afe"></a>

![][public]

**Definition**:


```csharp
ZemaxSystemUnits ZOSAPI.SystemData.ISDUnitsData.LensUnits
```


Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Set system lens units to inches, scale all values with Scale Lens tool
            // For demonstration only. This file is new, so it has default units mm.
            ZemaxSystemUnits unit = TheSystemData.Units.LensUnits;
            // Open Scale Lens tool
            ScaleLens = TheSystem.Tools.OpenScale();
            // Apply Tool Settings
            ScaleLens.ScaleByUnits = true;
            ScaleLens.ScaleToUnit = ScaleToUnits.Inches;
            ScaleLens.RunAndWaitForCompletion();
            ScaleLens.Close();
```
 C++ 
```csharp
    // Set system lens units to inches, scale all values with Scale Lens tool
    // For demonstration only. This file is new, so it has default units mm.
    ZemaxSystemUnits unit = TheSystemData->Units->LensUnits;
    // Open Scale Lens tool
    IScalePtr ScaleLens = TheSystem->Tools->OpenScale();
    // Apply Tool Settings
    ScaleLens->ScaleByUnits = true;
    ScaleLens->ScaleToUnit = ScaleToUnits_Inches;
    ISystemToolPtr baseTool = ScaleLens;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits;  % For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale();  % Open Scale Lens tool
    % Apply Tool Settings
    ScaleLens.ScaleByUnits = true;
    ScaleLens.ScaleToUnit = ZOSAPI.Tools.General.ScaleToUnits.Inches;
    ScaleLens.RunAndWaitForCompletion();
    ScaleLens.Close();
```
 Python 
```csharp
    # Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits  # For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale()  # Open Scale Lens tool
    # Apply Tool Settings
    ScaleLens.ScaleByUnits = True
    ScaleLens.ScaleToUnit = 2  # 0=millimeters; 1=centimeters; 2=inches; 3=meters
    # Cast to ISystemTool interface to gain access to Run
    ScaleLens.RunAndWaitForCompletion()
    ScaleLens.Close()
```


**Return type**: [ZemaxSystemUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aa)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.LensUnits"}]}`
-->

### Property SourceUnitPrefix

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1aad84b33ecffe50698197a22800d66004"></a>

![][public]

**Definition**:


```csharp
ZemaxUnitPrefix ZOSAPI.SystemData.ISDUnitsData.SourceUnitPrefix
```


**Return type**: [ZemaxUnitPrefix](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.SourceUnitPrefix"}]}`
-->

### Property SourceUnits

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1ac962522082b979c6b9361fb5b1ad2953"></a>

![][public]

**Definition**:


```csharp
ZemaxSourceUnits ZOSAPI.SystemData.ISDUnitsData.SourceUnits
```


**Return type**: [ZemaxSourceUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a140a75572b2b9144c2929a8c0af928da)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.SourceUnits"}]}`
-->

### Property AnalysisUnitPrefix

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a93649a3ec420b35037da1c4591ceea74"></a>

![][public]

**Definition**:


```csharp
ZemaxUnitPrefix ZOSAPI.SystemData.ISDUnitsData.AnalysisUnitPrefix
```


**Return type**: [ZemaxUnitPrefix](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.AnalysisUnitPrefix"}]}`
-->

### Property AnalysisUnits

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a358c2b7f3fd0ff9b8d76ecfe3987017b"></a>

![][public]

**Definition**:


```csharp
ZemaxAnalysisUnits ZOSAPI.SystemData.ISDUnitsData.AnalysisUnits
```


**Return type**: [ZemaxAnalysisUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a8fcc51ff7eacc2e2fd0c1347adc2d9b0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.AnalysisUnits"}]}`
-->

### Property AfocalModeUnits

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a24310c4a0fa577c995f60b9e42716764"></a>

![][public]

**Definition**:


```csharp
ZemaxAfocalModeUnits ZOSAPI.SystemData.ISDUnitsData.AfocalModeUnits
```


**Return type**: [ZemaxAfocalModeUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.AfocalModeUnits"}]}`
-->

### Property MTFUnits

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1a69540d0d1e809a4ff07bb4ca5dec2dd1"></a>

![][public]

**Definition**:


```csharp
ZemaxMTFUnits ZOSAPI.SystemData.ISDUnitsData.MTFUnits
```


**Return type**: [ZemaxMTFUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1aec2d84a4137a22c3130246a6cf6eaeaf)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.MTFUnits"}]}`
-->

### Property UseLensUnitsForCAD

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1adc19da6f279965febc5bd71ed6e3bcb2"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDUnitsData.UseLensUnitsForCAD
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.UseLensUnitsForCAD"}]}`
-->

### Property CADUnits

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data_1af0a0978634de2e3a0e7f6cc1acbc4ae5"></a>

![][public]

**Definition**:


```csharp
ZemaxSystemUnits ZOSAPI.SystemData.ISDUnitsData.CADUnits
```


**Return type**: [ZemaxSystemUnits](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aa)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDUnitsData.CADUnits"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
