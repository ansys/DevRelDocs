# Interface ZOSAPI::ISTARSubsystem

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem"></a>

![][C#]
![][public]

**Definition**:

Controls the STAR module at the optical system level.


## Members

* [DoManualUpdate](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1a078e6290614d13520f7f074eaf43a2b4)
* [Materials](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1a721cce9b009fef6ad11b15a3f0d39ea6)
* [Tools](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1a88e4f64d105dc8d8845a7dd30422762a)
* [UpdateMode](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1ae78c78eb74dbeabfd3430efa5099b4ca)

## Properties

### Property UpdateMode

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1ae78c78eb74dbeabfd3430efa5099b4ca"></a>

![][public]

**Definition**:


```csharp
STARUpdateMode ZOSAPI.ISTARSubsystem.UpdateMode
```


Gets/sets the current STAR update mode. Suspended requires manual updates using the DoManualUpdate() function.

The STAR update mode. Normal means updates will happen automatically as the user changes the STAR configuration for a surface. Use Suspended to pause updates when making changes on multiple surfaces.


**Return type**: [STARUpdateMode](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1a55b9060ae2fffe30bd5c6cb28e8cd164)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARSubsystem.UpdateMode"}]}`
-->

### Property Materials

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1a721cce9b009fef6ad11b15a3f0d39ea6"></a>

![][public]

**Definition**:


```csharp
ISTARMaterials ZOSAPI.ISTARSubsystem.Materials
```


Access material properties used in STAR calculations.


**Return type**: [ISTARMaterials](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_materials)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARSubsystem.Materials"}]}`
-->

### Property Tools

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1a88e4f64d105dc8d8845a7dd30422762a"></a>

![][public]

**Definition**:


```csharp
ISTARTools ZOSAPI.ISTARSubsystem.Tools
```


Access STAR tools that do not interact with the current Optical System.


**Return type**: [ISTARTools](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARSubsystem.Tools"}]}`
-->

## Public functions

### Function DoManualUpdate

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_subsystem_1a078e6290614d13520f7f074eaf43a2b4"></a>

![][public]


```csharp
void ZOSAPI.ISTARSubsystem.DoManualUpdate()
```


Force a lens update to reflect the latest STAR configuration on all surfaces.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARSubsystem.DoManualUpdate"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
