# Interface ZOSAPI::Tools::General::IPointList3D

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d"></a>

![][C#]
![][public]

**Definition**:


## Members

* [AddPoint](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1aa19aeb321a666757f78307ad76959f10)
* [AddPoint](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1a563acc331293b9bd6b82eef02254b825)
* [Clear](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1a715038a369958d46daf24018f4fe0ae4)
* [GetPoint](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1ac92f64573ec5a4258a55362b566bca60)
* [NumberOfPoints](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1ab51365d097544bdce7087d9c1cc49f49)
* [RemovePoint](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1a878ace534d178bf02024ab9c3ea30636)

## Properties

### Property NumberOfPoints

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1ab51365d097544bdce7087d9c1cc49f49"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IPointList3D.NumberOfPoints
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointList3D.NumberOfPoints"}]}`
-->

## Public functions

### Function GetPoint

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1ac92f64573ec5a4258a55362b566bca60"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointList3D.GetPoint(int Index)
```


**Parameters**:

* int **Index**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointList3D.GetPoint"}]}`
-->

### Function AddPoint

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1aa19aeb321a666757f78307ad76959f10"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IPointList3D.AddPoint(IPoint3D p)
```


**Parameters**:

* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointList3D.AddPoint"}]}`
-->

### Function AddPoint

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1a563acc331293b9bd6b82eef02254b825"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IPointList3D.AddPoint(double X, double Y, double Z)
```


**Parameters**:

* double **X**
* double **Y**
* double **Z**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointList3D.AddPoint"}]}`
-->

### Function RemovePoint

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1a878ace534d178bf02024ab9c3ea30636"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IPointList3D.RemovePoint(int Index)
```


**Parameters**:

* int **Index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointList3D.RemovePoint"}]}`
-->

### Function Clear

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d_1a715038a369958d46daf24018f4fe0ae4"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IPointList3D.Clear()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointList3D.Clear"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)