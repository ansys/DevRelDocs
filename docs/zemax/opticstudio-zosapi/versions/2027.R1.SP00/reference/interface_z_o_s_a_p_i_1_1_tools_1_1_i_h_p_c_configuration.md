# Interface ZOSAPI::Tools::IHPCConfiguration

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration"></a>

![][C#]
![][public]

**Definition**:


## Members

* [AreSettingsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a10bee46297a7d664255580168407944d)
* [ClusterSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a332d779a0d6aaa36c3c25364a1f876ce)
* [IsReadOnly](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a6777902db0b2419eff8d43715e39b8ff)
* [LoadSettingsFromFile](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1ab2d435aacc988fb3e16b0500f8292d12)
* [SaveSettingsToFile](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a6ead9b17bdf31390e72da5df55b75ffd)
* [ScriptSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1aac08c69a411dea7c793cc65090ee3303)
* [ValidateSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a8916f1221452b5408cc06a79773aec95)

## Properties

### Property IsReadOnly

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a6777902db0b2419eff8d43715e39b8ff"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IHPCConfiguration.IsReadOnly
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCConfiguration.IsReadOnly"}]}`
-->

### Property ClusterSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a332d779a0d6aaa36c3c25364a1f876ce"></a>

![][public]

**Definition**:


```csharp
IHPCClusterSettings ZOSAPI.Tools.IHPCConfiguration.ClusterSettings
```


**Return type**: [IHPCClusterSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_cluster_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_cluster_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCConfiguration.ClusterSettings"}]}`
-->

### Property ScriptSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1aac08c69a411dea7c793cc65090ee3303"></a>

![][public]

**Definition**:


```csharp
IHPCScriptSettings ZOSAPI.Tools.IHPCConfiguration.ScriptSettings
```


**Return type**: [IHPCScriptSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_script_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_script_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCConfiguration.ScriptSettings"}]}`
-->

### Property AreSettingsValid

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a10bee46297a7d664255580168407944d"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.IHPCConfiguration.AreSettingsValid
```


**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCConfiguration.AreSettingsValid"}]}`
-->

## Public functions

### Function ValidateSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a8916f1221452b5408cc06a79773aec95"></a>

![][public]


```csharp
IMessage ZOSAPI.Tools.IHPCConfiguration.ValidateSettings()
```


**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCConfiguration.ValidateSettings"}]}`
-->

### Function LoadSettingsFromFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1ab2d435aacc988fb3e16b0500f8292d12"></a>

![][public]


```csharp
bool ZOSAPI.Tools.IHPCConfiguration.LoadSettingsFromFile(string file)
```


**Parameters**:

* [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **file**

**Return type**: [bool](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCConfiguration.LoadSettingsFromFile"}]}`
-->

### Function SaveSettingsToFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_configuration_1a6ead9b17bdf31390e72da5df55b75ffd"></a>

![][public]


```csharp
void ZOSAPI.Tools.IHPCConfiguration.SaveSettingsToFile(string file)
```


**Parameters**:

* [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **file**

**Return type**: [void](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCConfiguration.SaveSettingsToFile"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
