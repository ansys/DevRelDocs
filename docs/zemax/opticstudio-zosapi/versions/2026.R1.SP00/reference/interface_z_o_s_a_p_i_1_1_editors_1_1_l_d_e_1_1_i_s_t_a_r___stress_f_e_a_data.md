# Interface ZOSAPI::Editors::LDE::ISTAR_StressFEAData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data"></a>

![][C#]
![][public]

**Definition**:

Classes which implement this interface allow to handle stress FEA datasets.


## Members

* [Filename](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1acac500e09f1d84f50facc275731b86ca)
* [GetFEAPointsSafe](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1aba67e2556525591b54823b76d301f391)
* [GetTransformedFEAPointsNoImportRequired](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a1a913dc409d99b114cdd8a649542c8d6)
* [GetTransformedFEAPointsSafe](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a5d12b14abd110b7aeb5e3bf21d997533)
* [GetTransformValues](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1ade86331594db0d854e16deb52eacc74f)
* [ImportStress](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a50812de68099ff8854f31d94ef24b404)
* [ImportStress\_1](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1ac4e403f348e06d16d34f9d2d55b60178)
* [IsStressImported](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1afebb56d2ecf49db89dff17df8eb3b045)
* [IsStressTensorApplied](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a5707eb506cdfdaab091738cd42fae52f)
* [Name](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a62af47572747f4c136034241d18d8b7f)
* [NumberOfDataPoints](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1adcf5d544c32e0a127f920cdfe88695cf)
* [SurfaceNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1ad9c3f868f1c2e0e4beebde4dd4ee52a3)
* [UnloadData](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a2838c397fe411299046d737ecf64ea6a)
* [UnloadDataAndKeepFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1af65175c2725c4e332ef3b59cd370abc3)

## Properties

### Property SurfaceNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1ad9c3f868f1c2e0e4beebde4dd4ee52a3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ISTAR_StressFEAData.SurfaceNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.SurfaceNumber"}]}`
-->

### Property NumberOfDataPoints

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1adcf5d544c32e0a127f920cdfe88695cf"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ISTAR_StressFEAData.NumberOfDataPoints
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.NumberOfDataPoints"}]}`
-->

### Property Filename

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1acac500e09f1d84f50facc275731b86ca"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.LDE.ISTAR_StressFEAData.Filename
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.Filename"}]}`
-->

### Property Name

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a62af47572747f4c136034241d18d8b7f"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.LDE.ISTAR_StressFEAData.Name
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.Name"}]}`
-->

### Property IsStressImported

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1afebb56d2ecf49db89dff17df8eb3b045"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ISTAR_StressFEAData.IsStressImported
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.IsStressImported"}]}`
-->

## Public functions

### Function ImportStress

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a50812de68099ff8854f31d94ef24b404"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ISTAR_StressFEAData.ImportStress(string filename)
```


**Parameters**:

* string **filename**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.ImportStress"}]}`
-->

### Function ImportStress_1

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1ac4e403f348e06d16d34f9d2d55b60178"></a>

![][public]


```csharp
int ZOSAPI.Editors.LDE.ISTAR_StressFEAData.ImportStress_1(string filename)
```


Import Stress Tensor FEA data from a file.

**Parameters**:

* **filename**: Full path of the file containing the FEA data


**Returns**:

Returns an integer signalling the status of the operation according to the following: `table {"type":"element","name":"table","attributes":{"cols":"2","rows":"5"},"children":[{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Value "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Meaning "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"0 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The file has no header, or the file contains the correct type of data according to its header. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"1 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"OpticStudio was unable to open the file. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"2 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The file has a malformed header. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"3 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The file contains the wrong type of data according to its header. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* string **filename**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.ImportStress_1"}]}`
-->

### Function UnloadData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a2838c397fe411299046d737ecf64ea6a"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ISTAR_StressFEAData.UnloadData()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.UnloadData"}]}`
-->

### Function UnloadDataAndKeepFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1af65175c2725c4e332ef3b59cd370abc3"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ISTAR_StressFEAData.UnloadDataAndKeepFiles()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.UnloadDataAndKeepFiles"}]}`
-->

### Function GetFEAPointsSafe

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1aba67e2556525591b54823b76d301f391"></a>

![][public]


```csharp
ISTAR_PointWithStress[] ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetFEAPointsSafe()
```


**Return type**: [ISTAR\_PointWithStress](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetFEAPointsSafe"}]}`
-->

### Function GetTransformValues

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1ade86331594db0d854e16deb52eacc74f"></a>

![][public]


```csharp
ICoordinateTransform ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetTransformValues(int transformType)
```


Transform types are 0 - User coordinate adapter transform, 1 - GRSO to Local transform, 2 - Total transform (matrix product of 0 and 1)


**Parameters**:

* int **transformType**

**Return type**: [ICoordinateTransform](interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_coordinate_transform)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetTransformValues"}]}`
-->

### Function GetTransformedFEAPointsSafe

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a5d12b14abd110b7aeb5e3bf21d997533"></a>

![][public]


```csharp
ISTAR_PointWithStress[] ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetTransformedFEAPointsSafe(int coordinateOption)
```


Returns points after applying the selected transform. Option 0 returns local OpticStudio coordinates (surface-specific) and option 1 returns global OpticStudio coordinates referenced to the GRSO.


**Parameters**:

* int **coordinateOption**

**Return type**: [ISTAR\_PointWithStress](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetTransformedFEAPointsSafe"}]}`
-->

### Function GetTransformedFEAPointsNoImportRequired

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a1a913dc409d99b114cdd8a649542c8d6"></a>

![][public]


```csharp
ISTAR_PointWithStress[] ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetTransformedFEAPointsNoImportRequired(String filename, int adaptCase, double[,] adapterR, double[] adapterO, int coordinateOption)
```


Returns points after applying the selected transform. This version does not require a prior call to ImportStress and thus no lens update is issued. Option 0 returns local OpticStudio coordinates (surface-specific) and option 1 returns global OpticStudio coordinates referenced to the GRSO. adaptCase usage to indicate FEA data coord system in the file: 0-InOSLocal, 1-InOSGlobal, 2-ToOSLocalViaTransform, 3-ToOSGlobalViaTransform.


**Parameters**:

* [String](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a8fa5d9cef0bd6de958233758f1b103daa27118326006d3829667a400ad23d5d98) **filename**
* int **adaptCase**
* double **adapterR**<!--
**TODO**:

* `array {"type":"element","name":"array","attributes":{},"children":[{"type":"text","text":"[,]"}]}`
-->
* double[] **adapterO**
* int **coordinateOption**

**Return type**: [ISTAR\_PointWithStress](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.GetTransformedFEAPointsNoImportRequired"}]}`
-->

### Function IsStressTensorApplied

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___stress_f_e_a_data_1a5707eb506cdfdaab091738cd42fae52f"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ISTAR_StressFEAData.IsStressTensorApplied()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISTAR_StressFEAData.IsStressTensorApplied"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
