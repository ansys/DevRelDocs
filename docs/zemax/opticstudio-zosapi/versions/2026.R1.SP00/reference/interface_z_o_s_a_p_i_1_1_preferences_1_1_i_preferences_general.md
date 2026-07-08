# Interface ZOSAPI::Preferences::IPreferencesGeneral

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general"></a>

![][C#]
![][public]

**Definition**:

Allows configuration of settings from the OpticStudio Preferences -> General tab in OpticStudio. Only a subset of preferences can be configured via the ZOS-API as most settings do not have any effect.

Note - every time a setting is changed the Preference file in use will be automatically saved, but only if a valid file name is defined for IZOSAPI_Connection.PreferencesFile prior to connecting to the ZOS-API.

## Members

* [DateTimeFormat](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a08c9851a5c9e95249e247964f4d8246c)
* [GetIsGPUEnabled](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a14b08279de18f91f67baf7e7e8a40d93)
* [GetUseACIS](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a715a2a6538d171c4a7e89ace47297066)
* [GetUseParasolid](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a0bc47bc9f705df21784ffc0c5b00755b)
* [GraphicsBackground](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a93364e67224d38831668ced733c8c50a)
* [IncludeCalculatedDataInSession](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a5dedeeb661115644cc06de1688cf5c95)
* [IncludeToleranceDataInSession](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1ada277e7ee51fe6001913a54ae78f4b6f)
* [Language](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1acdb183b72e7c6d518ab2498266d96120)
* [SetIsGPUEnabled](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a67cdd1f0e7d3bb6ba09101224db6ec89)
* [SetUseACIS](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a712281ee279ce2780ee4d3e53bee9a3b)
* [SetUseParasolid](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1aafdfb86e0a067da09618a648ab88b362)
* [TXTFileEncoding](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a32c4bdb3c87442c8e25f1b3fff721c68)
* [UITheme](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a4db3f8d651ffc8676273f905926fc0cd)
* [UpdateMostRecentlyUsedList](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a2efa6ee6fe4db0f5cc839ab473462272)
* [UserPreferences](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1ac46784a53f375871f7050942ea3ef76b)
* [UseSessionFiles](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a05297c825e3d5db4b61b39f312fd0e07)
* [ZMXFileEncoding](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a00b869844d613fba6402c2e08433eb7a)

## Properties

### Property DateTimeFormat

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a08c9851a5c9e95249e247964f4d8246c"></a>

![][public]

**Definition**:


```csharp
DateTimeType ZOSAPI.Preferences.IPreferencesGeneral.DateTimeFormat
```


**Return type**: [DateTimeType](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences_1ab048650ed5ceba4b5e6ec8cd71ff4c71)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.DateTimeFormat"}]}`
-->

### Property Language

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1acdb183b72e7c6d518ab2498266d96120"></a>

![][public]

**Definition**:


```csharp
LanguageType ZOSAPI.Preferences.IPreferencesGeneral.Language
```


**Return type**: [LanguageType](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences_1a429970572226aa6bca915255fa519b01)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.Language"}]}`
-->

### Property ZMXFileEncoding

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a00b869844d613fba6402c2e08433eb7a"></a>

![][public]

**Definition**:


```csharp
EncodingType ZOSAPI.Preferences.IPreferencesGeneral.ZMXFileEncoding
```


**Return type**: [EncodingType](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences_1a93a22c90b7e52910935c4656489ae476)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.ZMXFileEncoding"}]}`
-->

### Property TXTFileEncoding

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a32c4bdb3c87442c8e25f1b3fff721c68"></a>

![][public]

**Definition**:


```csharp
EncodingType ZOSAPI.Preferences.IPreferencesGeneral.TXTFileEncoding
```


**Return type**: [EncodingType](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences_1a93a22c90b7e52910935c4656489ae476)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.TXTFileEncoding"}]}`
-->

### Property UseSessionFiles

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a05297c825e3d5db4b61b39f312fd0e07"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.UseSessionFiles
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.UseSessionFiles"}]}`
-->

### Property IncludeCalculatedDataInSession

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a5dedeeb661115644cc06de1688cf5c95"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.IncludeCalculatedDataInSession
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.IncludeCalculatedDataInSession"}]}`
-->

### Property IncludeToleranceDataInSession

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1ada277e7ee51fe6001913a54ae78f4b6f"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.IncludeToleranceDataInSession
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.IncludeToleranceDataInSession"}]}`
-->

### Property UpdateMostRecentlyUsedList

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a2efa6ee6fe4db0f5cc839ab473462272"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.UpdateMostRecentlyUsedList
```


This setting can be used to turn updating of the most recently used lens files in File > Open on or off.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.UpdateMostRecentlyUsedList"}]}`
-->

### Property UserPreferences

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1ac46784a53f375871f7050942ea3ef76b"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesGeneral.UserPreferences
```


This is a single string in which you can store anything you want. It is saved in your Preferences configuration file together with all of the regular settings. As an example, this can be used to store a flag for you to keep track whether you have configured all of the Preferences you want or not.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.UserPreferences"}]}`
-->

### Property UITheme

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a4db3f8d651ffc8676273f905926fc0cd"></a>

![][public]

**Definition**:


```csharp
ZemaxThemes ZOSAPI.Preferences.IPreferencesGeneral.UITheme
```


**Return type**: [ZemaxThemes](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences_1af08b094a06a7ef90ee7f3521da55b55a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.UITheme"}]}`
-->

### Property GraphicsBackground

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a93364e67224d38831668ced733c8c50a"></a>

![][public]

**Definition**:


```csharp
BackgroundColors ZOSAPI.Preferences.IPreferencesGeneral.GraphicsBackground
```


**Return type**: [BackgroundColors](namespace_z_o_s_a_p_i_1_1_preferences.md#namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.GraphicsBackground"}]}`
-->

## Public functions

### Function GetIsGPUEnabled

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a14b08279de18f91f67baf7e7e8a40d93"></a>

![][public]


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.GetIsGPUEnabled()
```


Check if GPU calculates are enabled.

**Returns**:


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.GetIsGPUEnabled"}]}`
-->

### Function SetIsGPUEnabled

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a67cdd1f0e7d3bb6ba09101224db6ec89"></a>

![][public]


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.SetIsGPUEnabled(bool isEnabled)
```


Set whether or not to enable use of the GPU in calculations.

**Parameters**:

* **isEnabled**:


**Returns**:

<code>true</code> if the setting was successfully updated; otherwise <code>false</code>.


**Parameters**:

* bool **isEnabled**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.SetIsGPUEnabled"}]}`
-->

### Function GetUseACIS

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a715a2a6538d171c4a7e89ace47297066"></a>

![][public]


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.GetUseACIS()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.GetUseACIS"}]}`
-->

### Function SetUseACIS

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a712281ee279ce2780ee4d3e53bee9a3b"></a>

![][public]


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.SetUseACIS(bool use)
```


**Parameters**:

* bool **use**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.SetUseACIS"}]}`
-->

### Function GetUseParasolid

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1a0bc47bc9f705df21784ffc0c5b00755b"></a>

![][public]


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.GetUseParasolid()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.GetUseParasolid"}]}`
-->

### Function SetUseParasolid

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general_1aafdfb86e0a067da09618a648ab88b362"></a>

![][public]


```csharp
bool ZOSAPI.Preferences.IPreferencesGeneral.SetUseParasolid(bool use)
```


**Parameters**:

* bool **use**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesGeneral.SetUseParasolid"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
