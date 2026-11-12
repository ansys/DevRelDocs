# Interface ZOSAPI::Tools::Layouts::IImageExportData

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data"></a>

![][C#]
![][public]

**Definition**:


## Members

* [FillValues](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a71ba9fbf613fa375f5a93811ca68b144)
* [GetImagePixel](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1aeaf68fe06fd8637036166fa7ab982c57)
* [GetImagePixel](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1aceffafaed1b4ad76cc1f9abc6f4ad7d3)
* [Height](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a0fc50fddbbc38c662a683fd0e8dd8537)
* [Values](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a32e37579266cf926cbe0eaf5f07c7ec5)
* [Width](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a3b155b5e37e3c97e2174e3ce8f064e7c)

## Properties

### Property Width

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a3b155b5e37e3c97e2174e3ce8f064e7c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Layouts.IImageExportData.Width
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.IImageExportData.Width"}]}`
-->

### Property Height

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a0fc50fddbbc38c662a683fd0e8dd8537"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Layouts.IImageExportData.Height
```


**Return type**: [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.IImageExportData.Height"}]}`
-->

### Property Values

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a32e37579266cf926cbe0eaf5f07c7ec5"></a>

![][public]

**Definition**:


```csharp
IImagePixel [,] ZOSAPI.Tools.Layouts.IImageExportData.Values
```


**Return type**: [IImagePixel](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel)[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.IImageExportData.Values"}]}`
-->

## Public functions

### Function GetImagePixel

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1aeaf68fe06fd8637036166fa7ab982c57"></a>

![][public]


```csharp
IImagePixel ZOSAPI.Tools.Layouts.IImageExportData.GetImagePixel(int x, int y)
```


**Parameters**:

* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **x**
* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **y**

**Return type**: [IImagePixel](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.IImageExportData.GetImagePixel"}]}`
-->

### Function GetImagePixel

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1aceffafaed1b4ad76cc1f9abc6f4ad7d3"></a>

![][public]


```csharp
IImagePixel ZOSAPI.Tools.Layouts.IImageExportData.GetImagePixel(int index)
```


**Parameters**:

* [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **index**

**Return type**: [IImagePixel](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.IImageExportData.GetImagePixel"}]}`
-->

### Function FillValues

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data_1a71ba9fbf613fa375f5a93811ca68b144"></a>

![][public]


```csharp
void ZOSAPI.Tools.Layouts.IImageExportData.FillValues(uint fullSize, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out] int[] rData, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out] int[] gData, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In][Out] int[] bData)
```


**Parameters**:

* [uint](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135) **fullSize**
* _[Out]_ [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)[] **rData**
* _[Out]_ [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)[] **gData**
* _[Out]_ [int](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)[] **bData**

**Return type**: [void](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.IImageExportData.FillValues"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
