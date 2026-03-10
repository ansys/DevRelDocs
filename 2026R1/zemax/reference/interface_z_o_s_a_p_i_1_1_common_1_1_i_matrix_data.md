# Interface ZOSAPI::Common::IMatrixData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data"></a>

![][C#]
![][public]

**Definition**:

Methods and properties for retrieving and/or setting a 2D array of double precision data.

Usage (see [Example 23](page_ex23.md#page_ex23) for a full sample)


C# 
```csharp
            // runs a ray fan analysis and extracts 
            ZOSAPI.Analysis.IA_ ray = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.RayFan);
            ZOSAPI.Analysis.Settings.Fans.IAS_Fan ray_settings = (ZOSAPI.Analysis.Settings.Fans.IAS_Fan)ray.GetSettings();
            ray_settings.NumberOfRays = max_rays / 2;
            ray_settings.Field.UseAllFields();
            ray_settings.Wavelength.UseAllWavelengths();

            ray.ApplyAndWaitForCompletion();
            ZOSAPI.Analysis.Data.IAR_ ray_results = ray.GetResults();
```
 C++ 
```csharp
    // Set up Ray Fan analysis
    IA_Ptr ray = TheSystem->Analyses->New_Analysis(AnalysisIDM_RayFan);
    IAS_Ptr ray_set = ray->GetSettings();
    IAS_FanPtr ray_fanset = ray_set;
    ray_fanset->NumberOfRays = max_rays / 2;
    ray_fanset->Field->UseAllFields();
    ray_fanset->Wavelength->UseAllWavelengths();
    ray->ApplyAndWaitForCompletion();
    IAR_Ptr ray_results = ray->GetResults();
```
 Matlab 
```csharp
    % runs a ray fan analysis and extracts
    ray = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.RayFan);
    ray_settings = ray.GetSettings();
    ray_settings.NumberOfRays = max_rays / 2;
    ray_settings.Field.UseAllFields();
    ray_settings.Wavelength.UseAllWavelengths();
    
    ray.ApplyAndWaitForCompletion();
    ray_results = ray.GetResults();
```
 Python 
```csharp
    ray = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.RayFan)
    ray_settings = ray.GetSettings()
    ray_settings.NumberOfRays = max_rays / 2
    ray_settings.Field.UseAllFields()
    ray_settings.Wavelength.UseAllWavelengths()

    ray.ApplyAndWaitForCompletion()
    ray_results = ray.GetResults()
```

## Members

* [Cols](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a10eadfeda08264d57ed5a1571d46eb1d)
* [Data](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1ac67e94012c9a0c71e0a07b4f840df945)
* [GetValueAt](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a4ef9bd3d9a8d524557429f6a52a7015f)
* [IsReadOnly](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a39a99cc331e4a39fbf67aaffb778efd9)
* [ReadData](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1aa49c89d261a4efe69ff44f7bf33535ee)
* [Rows](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1aeb197859118e7e78c28f88292df17079)
* [SetValueAt](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a426beefccb6f8def701be9846bd01af5)
* [TotalLength](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a3c7eadfbaab39467be5daa3fc12a4625)
* [WriteData](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1ac3f6ad4254a30411d5b2c24ef768d7e2)

## Properties

### Property IsReadOnly

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a39a99cc331e4a39fbf67aaffb778efd9"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Common.IMatrixData.IsReadOnly
```


Gets a value indicating whether the data in this matrix can be modified.

<code>true</code> if this instance is read only; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.IsReadOnly"}]}`
-->

### Property Rows

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1aeb197859118e7e78c28f88292df17079"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Common.IMatrixData.Rows
```


Gets the number of rows in the 2D array.

The number of rows.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.Rows"}]}`
-->

### Property Cols

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a10eadfeda08264d57ed5a1571d46eb1d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Common.IMatrixData.Cols
```


Gets the number of cols in the 2D array.

The number of cols.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.Cols"}]}`
-->

### Property TotalLength

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a3c7eadfbaab39467be5daa3fc12a4625"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Common.IMatrixData.TotalLength
```


Gets the total size of the 2D array (Rows * Cols).

The total length.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.TotalLength"}]}`
-->

### Property Data

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1ac67e94012c9a0c71e0a07b4f840df945"></a>

![][public]

**Definition**:


```csharp
double [,] ZOSAPI.Common.IMatrixData.Data
```


Gets or sets (if IsReadOnly is <code>false</code>) the data. Note that making changes to the returned array does not change the underlying data source. <br/>
 Use this property to replace the entire data, or use WriteData to update the data source.

The raw array of data. <br/>


**Return type**: double[,]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.Data"}]}`
-->

## Public functions

### Function ReadData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1aa49c89d261a4efe69ff44f7bf33535ee"></a>

![][public]


```csharp
void ZOSAPI.Common.IMatrixData.ReadData(int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In, Out]double[] Data)
```


Retrieve the entire data set. This method is functionally identical to using Data, however it may be easier to use from some languages.

**Parameters**:

* **Size**: The size of the input array &ndash this must be the same as TotalLength.
* **Data**: The array to fill. Note that this must be allocated prior to calling ReadData.


**Parameters**:

* int **Size**
* _[In, Out]_ double[] **Data**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.ReadData"}]}`
-->

### Function WriteData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1ac3f6ad4254a30411d5b2c24ef768d7e2"></a>

![][public]


```csharp
void ZOSAPI.Common.IMatrixData.WriteData(int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In]double[] Data)
```


Update the entire data set. This method is functionally identical to using Data, however it may be easier to use from some languages. <br/>
 Note that calling this method will have no effect if IsReadOnly is <code>true</code>.

**Parameters**:

* **Size**: The size of the input array.
* **Data**: The new array data.


**Parameters**:

* int **Size**
* _[In]_ double[] **Data**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.WriteData"}]}`
-->

### Function GetValueAt

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a4ef9bd3d9a8d524557429f6a52a7015f"></a>

![][public]


```csharp
double ZOSAPI.Common.IMatrixData.GetValueAt(int Row, int Col)
```


Retrieves a single value from the 2D array. Note that accessing the data one element at a time may be much slower than retrieving the entire array at once.

**Parameters**:

* **Row**: The row.
* **Col**: The col.


**Returns**:


**Parameters**:

* int **Row**
* int **Col**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.GetValueAt"}]}`
-->

### Function SetValueAt

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data_1a426beefccb6f8def701be9846bd01af5"></a>

![][public]


```csharp
void ZOSAPI.Common.IMatrixData.SetValueAt(int Row, int Col, double Value)
```


Set a single value from the 2D array. Note that accessing the data one element at a time may be much slower than updating the entire array at once.

**Parameters**:

* **Row**: The row.
* **Col**: The col.
* **Value**: The value.


**Parameters**:

* int **Row**
* int **Col**
* double **Value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IMatrixData.SetValueAt"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)