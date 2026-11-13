# Interface ZOSAPI::Tools::IHPCRPR_RT

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t"></a>

![][C#]
![][public]

**Definition**:


## Members

* [ErrorEnergy](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a98a0f7584c8c4302b4173e5d407d2492)
* [GetZNDFile](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1ac002aa0cec618546fe8b45560dee14d2)
* [LostEnergy](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a837eba63fd08302115e41ef1e3a30fc0)
* [NumberOfZNDFiles](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a76884a1ef497953ba3f84be94261b689)
* [ZNDFiles](interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a42332fb6fadb50af97aa732fe0fe77ea)

## Properties

### Property LostEnergy

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a837eba63fd08302115e41ef1e3a30fc0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IHPCRPR_RT.LostEnergy
```


**Return type**: [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCRPR_RT.LostEnergy"}]}`
-->

### Property ErrorEnergy

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a98a0f7584c8c4302b4173e5d407d2492"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.IHPCRPR_RT.ErrorEnergy
```


**Return type**: [double](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCRPR_RT.ErrorEnergy"}]}`
-->

### Property ZNDFiles

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a42332fb6fadb50af97aa732fe0fe77ea"></a>

![][public]

**Definition**:


```csharp
string [] ZOSAPI.Tools.IHPCRPR_RT.ZNDFiles
```


**Return type**: [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCRPR_RT.ZNDFiles"}]}`
-->

### Property NumberOfZNDFiles

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1a76884a1ef497953ba3f84be94261b689"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.IHPCRPR_RT.NumberOfZNDFiles
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCRPR_RT.NumberOfZNDFiles"}]}`
-->

## Public functions

### Function GetZNDFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_i_h_p_c_r_p_r___r_t_1ac002aa0cec618546fe8b45560dee14d2"></a>

![][public]


```csharp
string ZOSAPI.Tools.IHPCRPR_RT.GetZNDFile(int index)
```


**Parameters**:

* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **index**

**Return type**: [string](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.IHPCRPR_RT.GetZNDFile"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
