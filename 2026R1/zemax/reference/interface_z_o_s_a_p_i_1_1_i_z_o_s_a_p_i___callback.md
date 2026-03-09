# Interface ZOSAPI::IZOSAPI\_Callback

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback"></a>

![][C#]
![][public]

**Definition**:


**Inherits from**:

* IDisposable

**Inherited by**:

* [ZOSAPI.APINetCallback](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback)

## Members

* [Copy](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a620b29e3736b0d4f235e1af95237a656)
* [Execute](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a28060c02905b5cf2bb64ece4a853f005)
* [IsLocal](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1ab24da0ca3c25a474a01053be9c3d5779)
* [Name](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a995e9f7109d2e8d21376ecbe88bea2c8)
* [Settings](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a358024cdffde099d4e8ab8fdfde3b06f)
* [TheApp](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a9e5838b7ebb93934248801626e46a4d9)

## Properties

### Property Name

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a995e9f7109d2e8d21376ecbe88bea2c8"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.IZOSAPI_Callback.Name
```


**Return type**: string

**Referenced by**:

* [ZOSAPI.APINetCallback.LoadInServer](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a6ba27507386fe92cc77d0229a23c30f9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Callback.Name"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1aafb432fc05687bcb2cc4fbe23a2ac372"},"children":[{"type":"text","text":"Name"}]}`
-->

### Property IsLocal

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1ab24da0ca3c25a474a01053be9c3d5779"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.IZOSAPI_Callback.IsLocal
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Callback.IsLocal"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1af3358254e9a66961fc9d5244e3ecd1a4"},"children":[{"type":"text","text":"IsLocal"}]}`
-->

### Property Settings

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a358024cdffde099d4e8ab8fdfde3b06f"></a>

![][public]

**Definition**:


```csharp
ISettingsData ZOSAPI.IZOSAPI_Callback.Settings
```


**Return type**: [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Callback.Settings"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a5f3064e07b73e3b4bbcbac69b694d073"},"children":[{"type":"text","text":"Settings"}]}`
-->

### Property TheApp

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a9e5838b7ebb93934248801626e46a4d9"></a>

![][public]

**Definition**:


```csharp
IZOSAPI_Application ZOSAPI.IZOSAPI_Callback.TheApp
```


**Return type**: [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Callback.TheApp"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a571bded41e98978fd42cd691271daa12"},"children":[{"type":"text","text":"TheApp"}]}`
-->

## Public functions

### Function Execute

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a28060c02905b5cf2bb64ece4a853f005"></a>

![][public]


```csharp
int ZOSAPI.IZOSAPI_Callback.Execute()
```


**Return type**: int

**Reimplemented by**:

* [Execute](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a7181d3985332fa668d9e19ff01c2688c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Callback.Execute"}]}`
-->

### Function Copy

<a id="interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback_1a620b29e3736b0d4f235e1af95237a656"></a>

![][public]


```csharp
IZOSAPI_Callback ZOSAPI.IZOSAPI_Callback.Copy(IZOSAPI_Application app)
```


**Parameters**:

* [IZOSAPI\_Application](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application) **app**

**Return type**: [IZOSAPI\_Callback](interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___callback)

**Reimplemented by**:

* [Copy](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a490621bbd53873533492c8d7c001e8fd)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZOSAPI_Callback.Copy"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)