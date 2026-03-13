# Interface ZOSAPI::Analysis::Settings::Spot::IAS_Spot

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Open Spot Diagram to See Result!
            IA_ newSpot = TheSystem.Analyses.New_StandardSpot();
            Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // True; no ModifySettings
            IAS_Spot spotSet = newSpot.GetSettings() as IAS_Spot;
            spotSet.RayDensity = 15;
            newSpot.ApplyAndWaitForCompletion();
```
 C++ 
```csharp
    // Open Spot Diagram to See Result!
    IA_Ptr newSpot = TheSystem->Analyses->New_StandardSpot();
    cout << "Spot has analysis specific settings? " << newSpot->HasAnalysisSpecificSettings << endl;  // True; no ModifySettings
    IAS_SpotPtr spotSet = newSpot->GetSettings();
    spotSet->RayDensity = 15;
    newSpot->ApplyAndWaitForCompletion();
```
 Matlab 
```csharp
    % Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot();
    fprintf('Spot has analysis specific settings? %i\n', newSpot.HasAnalysisSpecificSettings); % True; no ModifySettings
    %Console.WriteLine("Spot has analysis specific settings? " + newSpot.HasAnalysisSpecificSettings.ToString());  // 
    spotSet = newSpot.GetSettings();
    spotSet.RayDensity = 15;
    newSpot.ApplyAndWaitForCompletion();
```
 Python 
```csharp
    # Open Spot Diagram to See Result!
    newSpot = TheSystem.Analyses.New_StandardSpot()
    print("Spot has analysis specific settings? ", newSpot.HasAnalysisSpecificSettings)  # True; no ModifySettings
    newSettings = newSpot.GetSettings()
    newSettings.RayDensity = 15
    newSpot.ApplyAndWaitForCompletion()
```

**Inherits from**:

* [ZOSAPI.Analysis.Settings.IAS\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__)

## Members

* [ColorRaysBy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a4f7d11baced951242445b3013cfc91ff)
* [Configuration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1adf85f84cf046ba3810f8cede836c2c87)
* [DeltaFocus](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1af859f9aecefe53751bcc17b6afe222f0)
* [DirectionCosines](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1ae6261efeda3c3ef1de1ff5c9791f2ace)
* [Exaggerate](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a01977c08d13a7d8720332f59744d6b84)
* [Field](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a48f3e03fca527bd2ef081f3e8fe5b185)
* [IgnoreLateralColor](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a41ac085359c382bfd8fc0c4c774516c0)
* [Load](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a233390b15755feb10db900149fb97e76)
* [LoadFrom](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a62cf3f062ab2e3015ffca22e5173d650)
* [ModifySettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309)
* [Pattern](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1add0386cf95ec0df54f73577d4b73cd5e)
* [PlotScale](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a8fb327d1709acae2e68fbb6a8227e203)
* [RayDensity](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1afe69979aab626eeea9cb5ed8f2ed17e9)
* [ReferTo](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a5d874053da75956c4a3bf0d0ad895613)
* [Reset](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7928f2305168474181938609be36c277)
* [Save](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7e7874f49a22e3762c632821669532ca)
* [SaveTo](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a3c196d30f275d5d8e17363b3b702bed7)
* [ScatterRays](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a772e079e6f5e54a2f6cf63feaac4efa1)
* [ShowAiryDisk](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a331964616d2ffdc353d0a133d8fc7dde)
* [ShowScale](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1aec6e6c40a753cca712d3d4c917e74ccb)
* [Surface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a3b9e49b701b1d6a3b0ce8428261bbc43)
* [UsePolarization](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1af4435330d1b0c60c5f546d84d02d9f8b)
* [UseSymbols](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1ab184a912b248c533ba8d4a37fa2d941a)
* [Verify](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a2fe8bcba3de86b96ca2c2f6fa9e1f75e)
* [Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1af17353a5d59cf503f0f2d14109121979)

## Properties

### Property Field

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a48f3e03fca527bd2ef081f3e8fe5b185"></a>

![][public]

**Definition**:


```csharp
IAS_Field ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Field
```


**Return type**: [IAS\_Field](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Field"}]}`
-->

### Property Surface

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a3b9e49b701b1d6a3b0ce8428261bbc43"></a>

![][public]

**Definition**:


```csharp
IAS_Surface ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Surface
```


**Return type**: [IAS\_Surface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Surface"}]}`
-->

### Property Wavelength

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1af17353a5d59cf503f0f2d14109121979"></a>

![][public]

**Definition**:


```csharp
IAS_Wavelength ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Wavelength
```


**Return type**: [IAS\_Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Wavelength"}]}`
-->

### Property Pattern

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1add0386cf95ec0df54f73577d4b73cd5e"></a>

![][public]

**Definition**:


```csharp
Patterns ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Pattern
```


**Return type**: [Patterns](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1ad672fa8e12f7c99615e140313658fecc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Pattern"}]}`
-->

### Property ReferTo

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a5d874053da75956c4a3bf0d0ad895613"></a>

![][public]

**Definition**:


```csharp
Reference ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ReferTo
```


**Return type**: [Reference](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1a28207588bc7e48dc4458d977a9537eb8)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ReferTo"}]}`
-->

### Property ShowScale

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1aec6e6c40a753cca712d3d4c917e74ccb"></a>

![][public]

**Definition**:


```csharp
ShowScales ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ShowScale
```


**Return type**: [ShowScales](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1aa759247ed61af816146d4a1a82ff3c41)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ShowScale"}]}`
-->

### Property ColorRaysBy

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a4f7d11baced951242445b3013cfc91ff"></a>

![][public]

**Definition**:


```csharp
ColorRaysBy ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ColorRaysBy
```


**Return type**: [ColorRaysBy](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1a7db21c5f2dafc052b0a7ca352bd75707)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ColorRaysBy"}]}`
-->

### Property RayDensity

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1afe69979aab626eeea9cb5ed8f2ed17e9"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.Spot.IAS_Spot.RayDensity
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.RayDensity"}]}`
-->

### Property Configuration

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1adf85f84cf046ba3810f8cede836c2c87"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Configuration
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Configuration"}]}`
-->

### Property DirectionCosines

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1ae6261efeda3c3ef1de1ff5c9791f2ace"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Spot.IAS_Spot.DirectionCosines
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.DirectionCosines"}]}`
-->

### Property UseSymbols

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1ab184a912b248c533ba8d4a37fa2d941a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Spot.IAS_Spot.UseSymbols
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.UseSymbols"}]}`
-->

### Property UsePolarization

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1af4435330d1b0c60c5f546d84d02d9f8b"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Spot.IAS_Spot.UsePolarization
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.UsePolarization"}]}`
-->

### Property ScatterRays

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a772e079e6f5e54a2f6cf63feaac4efa1"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ScatterRays
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ScatterRays"}]}`
-->

### Property ShowAiryDisk

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a331964616d2ffdc353d0a133d8fc7dde"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ShowAiryDisk
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.ShowAiryDisk"}]}`
-->

### Property IgnoreLateralColor

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a41ac085359c382bfd8fc0c4c774516c0"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Spot.IAS_Spot.IgnoreLateralColor
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.IgnoreLateralColor"}]}`
-->

### Property PlotScale

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a8fb327d1709acae2e68fbb6a8227e203"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.Spot.IAS_Spot.PlotScale
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.PlotScale"}]}`
-->

### Property DeltaFocus

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1af859f9aecefe53751bcc17b6afe222f0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.Spot.IAS_Spot.DeltaFocus
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.DeltaFocus"}]}`
-->

### Property Exaggerate

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot_1a01977c08d13a7d8720332f59744d6b84"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Exaggerate
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Spot.IAS_Spot.Exaggerate"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
