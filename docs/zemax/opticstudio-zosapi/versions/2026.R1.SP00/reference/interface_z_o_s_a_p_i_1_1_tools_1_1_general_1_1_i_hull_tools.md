# Interface ZOSAPI::Tools::General::IHullTools

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools"></a>

![][C#]
![][public]

**Definition**:


## Members

* [Compute2DHull](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools_1ad78e86eb1e0318d4aca07bee4811639b)
* [ComputeCovData](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools_1a00654de227b414c11c927a1239a4d3e8)

## Public functions

### Function ComputeCovData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools_1a00654de227b414c11c927a1239a4d3e8"></a>

![][public]


```csharp
ICovarianceData ZOSAPI.Tools.General.IHullTools.ComputeCovData(IPointList3D points, IPoint3D center)
```


**Parameters**:

* [IPointList3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d) **points**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **center**

**Return type**: [ICovarianceData](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_covariance_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IHullTools.ComputeCovData"}]}`
-->

### Function Compute2DHull

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_hull_tools_1ad78e86eb1e0318d4aca07bee4811639b"></a>

![][public]


```csharp
IPointList3D ZOSAPI.Tools.General.IHullTools.Compute2DHull(IPointList3D points, IPoint3D planeOrigin, IPoint3D planeX, IPoint3D planeY)
```


**Parameters**:

* [IPointList3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d) **points**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **planeOrigin**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **planeX**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **planeY**

**Return type**: [IPointList3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IHullTools.Compute2DHull"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
