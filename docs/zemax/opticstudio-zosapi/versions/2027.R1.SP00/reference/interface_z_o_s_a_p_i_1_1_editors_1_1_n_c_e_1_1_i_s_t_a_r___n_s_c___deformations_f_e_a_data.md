# Interface ZOSAPI::Editors::NCE::ISTAR_NSC_DeformationsFEAData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data"></a>

![][C#]
![][public]

**Definition**:

Provides access to FEA deformation data, including file assignment, data naming, importing from file, and retrieving transformed deformation results.


## Members

* [AreDeformationsImported](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a67d867eebe9f293967ac560ee9fa474e)
* [Filename](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1aac782bca57f63b0a80a2f0aa1307e867)
* [GetFEAPoints](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a305825b66d3133c7a3ea870e42b47081)
* [GetTransformedFEAPointsNoImportRequired](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a0a511562b86e830a4dd0184408f8049a)
* [ImportDeformations](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a934623c4d630274030cc15bb9fb421e9)
* [Name](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1afaebf3cd385ae0e855d7e289e4e4aac3)
* [NumberOfDataPoints](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1afcda51528696eec5a3c0cfb10280794c)
* [ObjectNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1ad8b1a9f93f32288327daaa40e0af2fa3)
* [UnloadData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a5f0c8030fc75259196d94ad8cf8754f5)
* [UnloadDataAndKeepFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a615cfc8ce83ce642502245b78032091f)

## Properties

### Property ObjectNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1ad8b1a9f93f32288327daaa40e0af2fa3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.ObjectNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.ObjectNumber"}]}`
-->

### Property AreDeformationsImported

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a67d867eebe9f293967ac560ee9fa474e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.AreDeformationsImported
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.AreDeformationsImported"}]}`
-->

### Property NumberOfDataPoints

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1afcda51528696eec5a3c0cfb10280794c"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.NumberOfDataPoints
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.NumberOfDataPoints"}]}`
-->

### Property Filename

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1aac782bca57f63b0a80a2f0aa1307e867"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.Filename
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.Filename"}]}`
-->

### Property Name

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1afaebf3cd385ae0e855d7e289e4e4aac3"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.Name
```


The display name of the FEA data, as shown in the user interface.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.Name"}]}`
-->

## Public functions

### Function ImportDeformations

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a934623c4d630274030cc15bb9fb421e9"></a>

![][public]


```csharp
int ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.ImportDeformations(string filename)
```


Imports deformation FEA data from the specified file.

**Parameters**:

* **filename**: Full path of the file containing the FEA data.


**Returns**:

A status code: `table {"type":"element","name":"table","attributes":{"cols":"2","rows":"5"},"children":[{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Value"}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Meaning "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"0"}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Success: the file has no header, or its header correctly describes the data. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"1"}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The file could not be opened. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"2"}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The file has a malformed header. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"},{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"3"}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"no"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The file header indicates that the file does not contain deformation data and is therefore incompatible with this call. "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* string **filename**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.ImportDeformations"}]}`
-->

### Function GetFEAPoints

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a305825b66d3133c7a3ea870e42b47081"></a>

![][public]


```csharp
ISTAR_NSC_PointWithDeformationAndWeight[] ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.GetFEAPoints(CoordinateOption coordinateOption)
```


Returns the deformation data points from the imported file. Files may optionally include per-point weights; if no weights are present in the file, all weight values are reported as zero.

**Parameters**:

* **coordinateOption**: Controls whether points are returned in their original coordinate system (CoordinateOption.Unmodified) or transformed to global (CoordinateOption.Global) or local (CoordinateOption.Local) coordinates.


**Returns**:

An array of data points with position, deformation, and weight.


**Parameters**:

* [CoordinateOption](namespace_z_o_s_a_p_i_1_1_s_t_a_r.md#namespace_z_o_s_a_p_i_1_1_s_t_a_r_1a1a64f800a80ef0e4e99cc6422eb1047e) **coordinateOption**

**Return type**: [ISTAR\_NSC\_PointWithDeformationAndWeight](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___point_with_deformation_and_weight.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___point_with_deformation_and_weight)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.GetFEAPoints"}]}`
-->

### Function UnloadData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a5f0c8030fc75259196d94ad8cf8754f5"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.UnloadData()
```


Unloads the deformation data and clears the calculated RBM results.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.UnloadData"}]}`
-->

### Function UnloadDataAndKeepFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a615cfc8ce83ce642502245b78032091f"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.UnloadDataAndKeepFiles()
```


Unloads the deformation data while retaining the associated files in OpticStudio's internal folder.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.UnloadDataAndKeepFiles"}]}`
-->

### Function GetTransformedFEAPointsNoImportRequired

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___deformations_f_e_a_data_1a0a511562b86e830a4dd0184408f8049a"></a>

![][public]


```csharp
ISTAR_NSC_PointWithDeformationAndWeight[] ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.GetTransformedFEAPointsNoImportRequired(String filename, int adaptCase, double[,] adapterR, double[] adapterO, CoordinateOption coordinateOption)
```


**Parameters**:

* [String](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a8fa5d9cef0bd6de958233758f1b103daa27118326006d3829667a400ad23d5d98) **filename**
* int **adaptCase**
* double **adapterR**<!--
**TODO**:

* `array {"type":"element","name":"array","attributes":{},"children":[{"type":"text","text":"[,]"}]}`
-->
* double[] **adapterO**
* [CoordinateOption](namespace_z_o_s_a_p_i_1_1_s_t_a_r.md#namespace_z_o_s_a_p_i_1_1_s_t_a_r_1a1a64f800a80ef0e4e99cc6422eb1047e) **coordinateOption**

**Return type**: [ISTAR\_NSC\_PointWithDeformationAndWeight](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___point_with_deformation_and_weight.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_t_a_r___n_s_c___point_with_deformation_and_weight)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISTAR_NSC_DeformationsFEAData.GetTransformedFEAPointsNoImportRequired"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
