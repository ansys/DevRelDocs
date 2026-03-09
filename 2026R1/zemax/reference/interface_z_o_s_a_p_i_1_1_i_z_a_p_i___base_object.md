# Interface ZOSAPI::IZAPI\_BaseObject

<a id="interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object"></a>

![][C#]
![][public]

**Definition**:


**Inherited by**:

* [ZOSAPI.APINetCallback](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback)

## Members

* [AddChild](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1a0061325019cda2247b5089459715d1c7)
* [Disconnect](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1ade8bc05dee163372eef49a9c0c8535a6)
* [Parent](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1a20e56bcb7d49f1d5535a4047f758ddee)
* [RemoveChild](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1a603afece28e1a008bb7d7e8e8efcedab)

## Properties

### Property Parent

<a id="interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1a20e56bcb7d49f1d5535a4047f758ddee"></a>

![][public]

**Definition**:


```csharp
IZAPI_BaseObject ZOSAPI.IZAPI_BaseObject.Parent
```


**Return type**: [IZAPI\_BaseObject](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZAPI_BaseObject.Parent"}]}`
* `reimplementedby {"type":"element","name":"reimplementedby","attributes":{"refid":"class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a16b19aaa1aded94838d3ffa12fe5d385"},"children":[{"type":"text","text":"Parent"}]}`
-->

## Public functions

### Function AddChild

<a id="interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1a0061325019cda2247b5089459715d1c7"></a>

![][public]


```csharp
void ZOSAPI.IZAPI_BaseObject.AddChild(IZAPI_BaseObject child)
```


**Parameters**:

* [IZAPI\_BaseObject](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object) **child**

**Return type**: void

**Reimplemented by**:

* [AddChild](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a605f9bf402fd6a99692b4c767126aae2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZAPI_BaseObject.AddChild"}]}`
-->

### Function RemoveChild

<a id="interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1a603afece28e1a008bb7d7e8e8efcedab"></a>

![][public]


```csharp
void ZOSAPI.IZAPI_BaseObject.RemoveChild(IZAPI_BaseObject child)
```


**Parameters**:

* [IZAPI\_BaseObject](interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object.md#interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object) **child**

**Return type**: void

**Reimplemented by**:

* [RemoveChild](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a9a598d3ba143b7e0837189ce65e19ebb)

**Referenced by**:

* [ZOSAPI.APINetCallback.Disconnect](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a6b347d13eb8dded6ed191474f11200f1)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZAPI_BaseObject.RemoveChild"}]}`
-->

### Function Disconnect

<a id="interface_z_o_s_a_p_i_1_1_i_z_a_p_i___base_object_1ade8bc05dee163372eef49a9c0c8535a6"></a>

![][public]


```csharp
void ZOSAPI.IZAPI_BaseObject.Disconnect()
```


**Return type**: void

**Reimplemented by**:

* [Disconnect](class_z_o_s_a_p_i_1_1_a_p_i_net_callback.md#class_z_o_s_a_p_i_1_1_a_p_i_net_callback_1a6b347d13eb8dded6ed191474f11200f1)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IZAPI_BaseObject.Disconnect"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)