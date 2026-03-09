# Interface ZOSAPI::Tools::General::IPointTools

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools"></a>

![][C#]
![][public]

**Definition**:


## Members

* [Add](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ac318a11e5524f319c6023171694b68ae)
* [ComputeCentroid](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1afe449cfeea9ef81e059e9dbf01f6f2f6)
* [CreatePoint](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a8646ccf522569b2621c11dc662ffe238)
* [CreatePointList](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a56daa1325b286e9d4ea9682fcaa9138f)
* [Cross](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ad0bd4d99df5253327e55bc4291aed144)
* [Divide](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a9c52d97db52d4986d73b349cbcda6dee)
* [Dot](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a6490816035bd27a04fa0ea59b6d71e66)
* [Multiply](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ad1f44469f160da343721519918637d57)
* [Subtract](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ae206a6e7cb859856e9c6167773cb177c)

## Public functions

### Function CreatePointList

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a56daa1325b286e9d4ea9682fcaa9138f"></a>

![][public]


```csharp
IPointList3D ZOSAPI.Tools.General.IPointTools.CreatePointList()
```


**Return type**: [IPointList3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.CreatePointList"}]}`
-->

### Function CreatePoint

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a8646ccf522569b2621c11dc662ffe238"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointTools.CreatePoint(double x, double y, double z)
```


**Parameters**:

* double **x**
* double **y**
* double **z**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.CreatePoint"}]}`
-->

### Function Add

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ac318a11e5524f319c6023171694b68ae"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointTools.Add(IPoint3D p1, IPoint3D p2)
```


**Parameters**:

* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p1**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p2**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.Add"}]}`
-->

### Function Subtract

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ae206a6e7cb859856e9c6167773cb177c"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointTools.Subtract(IPoint3D p1, IPoint3D p2)
```


**Parameters**:

* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p1**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p2**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.Subtract"}]}`
-->

### Function Cross

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ad0bd4d99df5253327e55bc4291aed144"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointTools.Cross(IPoint3D p1, IPoint3D p2)
```


**Parameters**:

* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p1**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p2**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.Cross"}]}`
-->

### Function Multiply

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1ad1f44469f160da343721519918637d57"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointTools.Multiply(IPoint3D p, double s)
```


**Parameters**:

* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p**
* double **s**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.Multiply"}]}`
-->

### Function Divide

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a9c52d97db52d4986d73b349cbcda6dee"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointTools.Divide(IPoint3D p, double s)
```


**Parameters**:

* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p**
* double **s**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.Divide"}]}`
-->

### Function Dot

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1a6490816035bd27a04fa0ea59b6d71e66"></a>

![][public]


```csharp
double ZOSAPI.Tools.General.IPointTools.Dot(IPoint3D p1, IPoint3D p2)
```


**Parameters**:

* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p1**
* [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d) **p2**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.Dot"}]}`
-->

### Function ComputeCentroid

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_tools_1afe449cfeea9ef81e059e9dbf01f6f2f6"></a>

![][public]


```csharp
IPoint3D ZOSAPI.Tools.General.IPointTools.ComputeCentroid(IPointList3D points)
```


**Parameters**:

* [IPointList3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point_list3_d) **points**

**Return type**: [IPoint3D](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_point3_d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IPointTools.ComputeCentroid"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)