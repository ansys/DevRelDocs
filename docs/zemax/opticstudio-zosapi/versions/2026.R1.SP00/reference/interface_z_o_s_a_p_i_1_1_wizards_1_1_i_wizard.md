# Interface ZOSAPI::Wizards::IWizard

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard"></a>

![][C#]
![][public]

**Definition**:

Base interface for all the Wizards.

WizardType.MFENSCOptimization: Merit Function, Nonsequential Component, Optimization


WizardType.MFENSCBitmap: Merit Function, Nonsequential Component, Bitmap


WizardType.MFENSCRoadwayLighting: Merit Function, Nonsequential Component, Roadway Lighting

**Inherited by**:

* [ZOSAPI.Wizards.INSCRoadwayLightingWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_roadway_lighting_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_roadway_lighting_wizard)
* [ZOSAPI.Wizards.INSCWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_n_s_c_wizard)
* [ZOSAPI.Wizards.ISEQOptimizationWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard)
* [ZOSAPI.Wizards.ISEQOptimizationWizard2](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard2.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_s_e_q_optimization_wizard2)
* [ZOSAPI.Wizards.IToleranceWizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_tolerance_wizard)

## Members

* [Apply](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1ac93e0ac86221c90cf749832e6aa0167e)
* [Initialize](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a5fabc5be6af6f50a242960cd29131a96)
* [LoadSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3afc193985dfc928587494017e56e3a9)
* [OK](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a28e7e9235278fc9466072bada981041f)
* [ResetSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a0a958c3acdd9b52817994ae24e504a24)
* [SaveSettings](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3dea643798407dc67f41aeb26a11fd8a)
* [Wizard](interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard.md#interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a2d3034a83efbe3624e3d27d11e7f34f3)

## Properties

### Property Wizard

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a2d3034a83efbe3624e3d27d11e7f34f3"></a>

![][public]

**Definition**:


```csharp
WizardType ZOSAPI.Wizards.IWizard.Wizard
```


Gets the type of this wizard instance.

This wizard instance type.


**Return type**: [WizardType](namespace_z_o_s_a_p_i_1_1_wizards.md#namespace_z_o_s_a_p_i_1_1_wizards_1af319810e831cb4ba724732b486b90fc7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IWizard.Wizard"}]}`
-->

## Public functions

### Function OK

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a28e7e9235278fc9466072bada981041f"></a>

![][public]


```csharp
void ZOSAPI.Wizards.IWizard.OK()
```


Settings are set, perform the wizardry.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IWizard.OK"}]}`
-->

### Function Apply

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1ac93e0ac86221c90cf749832e6aa0167e"></a>

![][public]


```csharp
void ZOSAPI.Wizards.IWizard.Apply()
```


Settings are set, perform the wizardry.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IWizard.Apply"}]}`
-->

### Function SaveSettings

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3dea643798407dc67f41aeb26a11fd8a"></a>

![][public]


```csharp
void ZOSAPI.Wizards.IWizard.SaveSettings()
```


Save the Settings.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IWizard.SaveSettings"}]}`
-->

### Function LoadSettings

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a3afc193985dfc928587494017e56e3a9"></a>

![][public]


```csharp
void ZOSAPI.Wizards.IWizard.LoadSettings()
```


Load the Settings.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IWizard.LoadSettings"}]}`
-->

### Function ResetSettings

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a0a958c3acdd9b52817994ae24e504a24"></a>

![][public]


```csharp
void ZOSAPI.Wizards.IWizard.ResetSettings()
```


Reset the settings.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IWizard.ResetSettings"}]}`
-->

### Function Initialize

<a id="interface_z_o_s_a_p_i_1_1_wizards_1_1_i_wizard_1a5fabc5be6af6f50a242960cd29131a96"></a>

![][public]


```csharp
void ZOSAPI.Wizards.IWizard.Initialize()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Wizards.IWizard.Initialize"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
