# Interface ZOSAPI::Tools::General::IScale

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for Scaling the Currently active Lens System. This interface can be accessed via the IOpticalSystemTools interface.

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

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [FirstComponent](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1ace4c078d51fb894f2b051cf567dc0cc7)
* [GetComponentAt](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a75fc2d029470600bbcc51f979b51dc04)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [LastComponent](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1ab298fbcc0525e7876192eb18103a406e)
* [NumberOfComponents](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a518980f918d3476e62fb0a3a92bf5e95)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [ScaleByFactor](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1aee9974e54431bde44b88715da790a035)
* [ScaleByUnits](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a9d31712aa1779f15cef436e2331b530b)
* [ScaleFactor](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a3c0cd79542b9e880562e3e4624bc53de)
* [ScaleToUnit](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a51f41d26c38b7dc7200ec1b486c7f404)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property ScaleFactor

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a3c0cd79542b9e880562e3e4624bc53de"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.General.IScale.ScaleFactor
```


How much do we scale the System.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.ScaleFactor"}]}`
-->

### Property FirstComponent

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1ace4c078d51fb894f2b051cf567dc0cc7"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IScale.FirstComponent
```


Which is the First Surface/Object to Scale.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.FirstComponent"}]}`
-->

### Property LastComponent

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1ab298fbcc0525e7876192eb18103a406e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IScale.LastComponent
```


Which is the Last Surface/Object to Scale.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.LastComponent"}]}`
-->

### Property ScaleToUnit

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a51f41d26c38b7dc7200ec1b486c7f404"></a>

![][public]

**Definition**:


```csharp
ScaleToUnits ZOSAPI.Tools.General.IScale.ScaleToUnit
```


To which unit type are we Scaling.


**Return type**: [ScaleToUnits](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1a2bab2eb2ac3f633c7e800bb5d52595d6)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.ScaleToUnit"}]}`
-->

### Property ScaleByFactor

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1aee9974e54431bde44b88715da790a035"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IScale.ScaleByFactor
```


How much do we scale the System using 'ScaleFactor'.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.ScaleByFactor"}]}`
-->

### Property ScaleByUnits

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a9d31712aa1779f15cef436e2331b530b"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IScale.ScaleByUnits
```


Scale from the Current Unit to this new Unit. ScaleFactor comes from the coversion from one metric to another. If true, ScaleByUnits is set to false and vice versa.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.ScaleByUnits"}]}`
-->

### Property NumberOfComponents

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a518980f918d3476e62fb0a3a92bf5e95"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IScale.NumberOfComponents
```


How many components are in the 'Avaiable Component List'. If true, ScaleByFactor is set to false and vice versa.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.NumberOfComponents"}]}`
-->

## Public functions

### Function GetComponentAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_scale_1a75fc2d029470600bbcc51f979b51dc04"></a>

![][public]


```csharp
string ZOSAPI.Tools.General.IScale.GetComponentAt(int idx)
```


Get the 'Avaiable Component List' at index 'idx'.

**Parameters**:

* **idx**: Get the idx-th Component.


**Returns**:

The idx-th Component


**Parameters**:

* int **idx**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IScale.GetComponentAt"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
