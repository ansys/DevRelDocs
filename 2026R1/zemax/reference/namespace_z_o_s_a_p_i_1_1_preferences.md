# Namespace ZOSAPI::Preferences

<a id="namespace_z_o_s_a_p_i_1_1_preferences"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Preferences::IPreferencesEditor](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_editor)
* [ZOSAPI::Preferences::IPreferencesFolders](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders)
* [ZOSAPI::Preferences::IPreferencesGeneral](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_general)

## Enumeration types

### Enumeration type ShowLineAsType

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a141d74cc029faf333d7dba3e6ddc1822"></a>

![][public]

**Definition**:


```csharp
enum ShowLineAsType {
  TextAbove = 0,
  FileName = 1,
  ConfigurationNumber = 2
}
```


#### Enumerator TextAbove

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a141d74cc029faf333d7dba3e6ddc1822aea85e1956c7e02417a1d01332d0d8a4e"></a>


#### Enumerator FileName

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a141d74cc029faf333d7dba3e6ddc1822a1e621df39e053ff6bc7db7bb1c616cc1"></a>


#### Enumerator ConfigurationNumber

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a141d74cc029faf333d7dba3e6ddc1822a8060a12b320fd03568abb6489b900725"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.ShowLineAsType"}]}`
-->

### Enumeration type DateTimeType

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1ab048650ed5ceba4b5e6ec8cd71ff4c71"></a>

![][public]

**Definition**:


```csharp
enum DateTimeType {
  None = 0,
  Date = 1,
  DateTime = 2
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1ab048650ed5ceba4b5e6ec8cd71ff4c71a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator Date

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1ab048650ed5ceba4b5e6ec8cd71ff4c71a44749712dbec183e983dcd78a7736c41"></a>


#### Enumerator DateTime

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1ab048650ed5ceba4b5e6ec8cd71ff4c71a8cf10d2341ed01492506085688270c1e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.DateTimeType"}]}`
-->

### Enumeration type LanguageType

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a429970572226aa6bca915255fa519b01"></a>

![][public]

**Definition**:


```csharp
enum LanguageType {
  Chinese = 0,
  English = 1,
  Japanese = 4
}
```


#### Enumerator Chinese

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a429970572226aa6bca915255fa519b01a3b261136e3c33f35e0a58611b1f344cb"></a>


#### Enumerator English

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a429970572226aa6bca915255fa519b01a78463a384a5aa4fad5fa73e2f506ecfc"></a>


#### Enumerator Japanese

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a429970572226aa6bca915255fa519b01af32ced6a9ba164c4b3c047fd1d7c882e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.LanguageType"}]}`
-->

### Enumeration type EncodingType

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a93a22c90b7e52910935c4656489ae476"></a>

![][public]

**Definition**:


```csharp
enum EncodingType {
  ANSI = 0,
  Unicode = 1
}
```


#### Enumerator ANSI

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a93a22c90b7e52910935c4656489ae476ad403321c965e6b83c88e6d3b1eca5270"></a>


#### Enumerator Unicode

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a93a22c90b7e52910935c4656489ae476a7f6c02d96265dd1d37b1101de1101541"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.EncodingType"}]}`
-->

### Enumeration type ZemaxThemes

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1af08b094a06a7ef90ee7f3521da55b55a"></a>

![][public]

**Definition**:


```csharp
enum ZemaxThemes {
  Classic = 0,
  Dark = 1
}
```


#### Enumerator Classic

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1af08b094a06a7ef90ee7f3521da55b55aad35b51b639528d580362ca7042de6a0e"></a>


#### Enumerator Dark

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1af08b094a06a7ef90ee7f3521da55b55aaa18366b217ebf811ad1886e4f4f865b2"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.ZemaxThemes"}]}`
-->

### Enumeration type BackgroundColors

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0"></a>

![][public]

**Definition**:


```csharp
enum BackgroundColors {
  Default = 0,
  White = 1,
  LightGray = 2,
  Gray = 3,
  DarkGray = 4,
  Black = 5
}
```


#### Enumerator Default

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0a7a1920d61156abc05a60135aefe8bc67"></a>


#### Enumerator White

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0a25a81701fbfa4a1efdf660a950c1d006"></a>


#### Enumerator LightGray

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0afb55202637692de4a494e9ade4cff2dd"></a>


#### Enumerator Gray

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0a994ae1d9731cebe455aff211bcb25b93"></a>


#### Enumerator DarkGray

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0a91e93fc984985226ad4d319a4e4134ab"></a>


#### Enumerator Black

<a id="namespace_z_o_s_a_p_i_1_1_preferences_1a88ab1a7c6fee2806d8bf21696ed47dc0ae90dfb84e30edf611e326eeb04d680de"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.BackgroundColors"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
