# Interface ZOSAPI::Preferences::IPreferencesEditor

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor"></a>

![][C#]
![][public]

**Definition**:

Allows configuration of settings from the OpticStudio Preferences -> Editor tab in OpticStudio. <br/>

Note - every time a setting is changed the Preference file in use will be automatically saved, but only if a valid file name is defined for IZOSAPI_Connection.PreferencesFile prior to connecting to the ZOS-API.

## Members

* [Decimals](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor_1a092ad5430fa9992f9b5d144ad4ea2530)
* [ExponentialAbove](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor_1a886b2b1c343c8a4cd25fd70ea7036596)
* [ExponentialBelow](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor_1a1c8295758e2c86134699310c995a2cbd)

## Properties

### Property Decimals

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor_1a092ad5430fa9992f9b5d144ad4ea2530"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Preferences.IPreferencesEditor.Decimals
```


Get or sets the decimals index.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesEditor.Decimals"}]}`
-->

### Property ExponentialAbove

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor_1a886b2b1c343c8a4cd25fd70ea7036596"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Preferences.IPreferencesEditor.ExponentialAbove
```


Get or sets the upper bound to switch between decimal and exponential format.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesEditor.ExponentialAbove"}]}`
-->

### Property ExponentialBelow

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor_1a1c8295758e2c86134699310c995a2cbd"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Preferences.IPreferencesEditor.ExponentialBelow
```


Get or sets the lower bound to switch between decimal and exponential format.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesEditor.ExponentialBelow"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)