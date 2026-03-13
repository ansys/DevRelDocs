# Interface ZOSAPI::Analysis::IUserAnalysisData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data"></a>

![][C#]
![][public]

**Definition**:

Properties and methods used to generate a User Analysis. This interface can be accessed via the IZOSAPI_Application interface. Note that this interface is only available when creating a User Analysis plugin application.


## Members

* [AnalysisNumber](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1af4aab5e6ff243d9897b349272aa27b6d)
* [FeatureDescription](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a7d259a3242d3ab83fddc902ccd959225)
* [HeaderData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a9e99af28b532b16118772f7670baec86)
* [Make2DLinePlot](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1ae47500b70ceb79e2ff493915ae025b55)
* [Make2DLinePlotSafe](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a9e649ae0baddc08009923d56507e8de5)
* [MakeGridPlot](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1aa48feb3384d32b370751ebfe2940f686)
* [MakeGridRGBPlot](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a29b5814146ad65bd2fa792901e9058f2)
* [MakeText](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a54d356d36dfb4b3c14609b81a55e0541)
* [PlotType](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1ab206a2a82d3caeda11848c0d39f45ab7)
* [RunAnalysisOnSettingsClosed](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a9a04c065e2f3ff7ec7c42cfc2712da5e)
* [ShowLegend](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a78ace628ebb50c2b10f63b7e7ab54b51)
* [UserSettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1ad65598e3b904e128dfc92664e6450399)
* [WindowTitle](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a5efb32eb83b8cbe9c7fd8533b7b49c82)

## Properties

### Property AnalysisNumber

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1af4aab5e6ff243d9897b349272aa27b6d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.IUserAnalysisData.AnalysisNumber
```


Gets the position of this user analysis in the primary IOpticalSystem. Note that this number may change when other analyses are opened or closed.

The analysis number.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.AnalysisNumber"}]}`
-->

### Property PlotType

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1ab206a2a82d3caeda11848c0d39f45ab7"></a>

![][public]

**Definition**:


```csharp
UserAnalysisDataType ZOSAPI.Analysis.IUserAnalysisData.PlotType
```


Gets the type of this plot window.

The type of the plot.


**Return type**: [UserAnalysisDataType](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1a062a68cc7315f8722f4c05849fb0de8e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.PlotType"}]}`
-->

### Property WindowTitle

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a5efb32eb83b8cbe9c7fd8533b7b49c82"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Analysis.IUserAnalysisData.WindowTitle
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.WindowTitle"}]}`
-->

### Property FeatureDescription

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a7d259a3242d3ab83fddc902ccd959225"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Analysis.IUserAnalysisData.FeatureDescription
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.FeatureDescription"}]}`
-->

### Property HeaderData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a9e99af28b532b16118772f7670baec86"></a>

![][public]

**Definition**:


```csharp
string [] ZOSAPI.Analysis.IUserAnalysisData.HeaderData
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.HeaderData"}]}`
-->

### Property ShowLegend

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a78ace628ebb50c2b10f63b7e7ab54b51"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.IUserAnalysisData.ShowLegend
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.ShowLegend"}]}`
-->

### Property UserSettings

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1ad65598e3b904e128dfc92664e6450399"></a>

![][public]

**Definition**:


```csharp
ISettingsData ZOSAPI.Analysis.IUserAnalysisData.UserSettings
```


**Return type**: [ISettingsData](interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_settings_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.UserSettings"}]}`
-->

### Property RunAnalysisOnSettingsClosed

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a9a04c065e2f3ff7ec7c42cfc2712da5e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.IUserAnalysisData.RunAnalysisOnSettingsClosed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.RunAnalysisOnSettingsClosed"}]}`
-->

## Public functions

### Function Make2DLinePlot

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1ae47500b70ceb79e2ff493915ae025b55"></a>

![][public]


```csharp
IUser2DLineData ZOSAPI.Analysis.IUserAnalysisData.Make2DLinePlot(String PlotDescription, uint numValues, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=1)][In]double[] xValues)
```


Gets an interface used to configure a 2D line plot.

**Parameters**:

* **PlotDescription**: The plot description.
* **numValues**: The number of x-values. Note that multiple series are supported, but they all must share the same x data.
* **xValues**: The x values.


**Returns**:


**Parameters**:

* String **PlotDescription**
* uint **numValues**
* _[In]_ double[] **xValues**

**Return type**: [IUser2DLineData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.Make2DLinePlot"}]}`
-->

### Function Make2DLinePlotSafe

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a9e649ae0baddc08009923d56507e8de5"></a>

![][public]


```csharp
IUser2DLineData ZOSAPI.Analysis.IUserAnalysisData.Make2DLinePlotSafe(String PlotDescription, [In]double[] xValues)
```


Gets an interface used to configure a 2D line plot.

**Parameters**:

* **PlotDescription**: The plot description.
* **xValues**: The x values.


**Returns**:


**Parameters**:

* String **PlotDescription**
* _[In]_ double[] **xValues**

**Return type**: [IUser2DLineData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user2_d_line_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.Make2DLinePlotSafe"}]}`
-->

### Function MakeGridPlot

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1aa48feb3384d32b370751ebfe2940f686"></a>

![][public]


```csharp
IUserGridData ZOSAPI.Analysis.IUserAnalysisData.MakeGridPlot(String PlotDescription)
```


Gets an interface used to configure a 2D grid plot.

**Parameters**:

* **PlotDescription**: The plot description.


**Returns**:


**Parameters**:

* String **PlotDescription**

**Return type**: [IUserGridData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.MakeGridPlot"}]}`
-->

### Function MakeGridRGBPlot

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a29b5814146ad65bd2fa792901e9058f2"></a>

![][public]


```csharp
IUserGridRGBData ZOSAPI.Analysis.IUserAnalysisData.MakeGridRGBPlot(String PlotDescription)
```


Gets an interface used to configure a 2D RGB grid plot.

**Parameters**:

* **PlotDescription**: The plot description.


**Returns**:


**Parameters**:

* String **PlotDescription**

**Return type**: [IUserGridRGBData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_r_g_b_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_grid_r_g_b_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.MakeGridRGBPlot"}]}`
-->

### Function MakeText

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_analysis_data_1a54d356d36dfb4b3c14609b81a55e0541"></a>

![][public]


```csharp
IUserTextData ZOSAPI.Analysis.IUserAnalysisData.MakeText()
```


Gets an interface used to configure a simple text window.

**Returns**:


**Return type**: [IUserTextData](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_text_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_user_text_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.IUserAnalysisData.MakeText"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
