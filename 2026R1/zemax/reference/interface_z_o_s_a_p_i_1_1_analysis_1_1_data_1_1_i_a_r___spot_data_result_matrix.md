# Interface ZOSAPI::Analysis::Data::IAR\_SpotDataResultMatrix

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 22](page_ex22.md#page_ex22) for a full sample)


C# 
```csharp
            // Extract RMS & Geo spot size for field points
            spot.ApplyAndWaitForCompletion();
            ZOSAPI.Analysis.Data.IAR_ spot_results = spot.GetResults();
            Console.WriteLine("RMS radius: {0:F3}  {1:F3}  {2:F3}", spot_results.SpotData.GetRMSSpotSizeFor(1, 1), spot_results.SpotData.GetRMSSpotSizeFor(2, 1), spot_results.SpotData.GetRMSSpotSizeFor(3, 1));
            Console.WriteLine("GEO radius: {0:F3}  {1:F3}  {2:F3}", spot_results.SpotData.GetGeoSpotSizeFor(1, 1), spot_results.SpotData.GetGeoSpotSizeFor(2, 1), spot_results.SpotData.GetGeoSpotSizeFor(3, 1));
```
 C++ 
```csharp
    // Extract RMS & Geo spot size for field points
    spot->ApplyAndWaitForCompletion();
    IAR_Ptr spot_results = spot->GetResults();
    cout.precision(3);
    cout << fixed << "RMS radius: \t" << spot_results->SpotData->GetRMSSpotSizeFor(1, 1) << "\t" << spot_results->SpotData->GetRMSSpotSizeFor(2, 1) << "\t" << spot_results->SpotData->GetRMSSpotSizeFor(3, 1) << endl;
    cout << fixed << "GEO radius: \t" << spot_results->SpotData->GetGeoSpotSizeFor(1, 1) << "\t" << spot_results->SpotData->GetGeoSpotSizeFor(2, 1) << "\t" << spot_results->SpotData->GetGeoSpotSizeFor(3, 1) << endl;
```
 Matlab 
```csharp
    % extract RMS & Geo spot size for field points
    spot.ApplyAndWaitForCompletion();
    spot_results = spot.GetResults();
    fprintf('RMS radius: %6.3f  %6.3f  %6.3f\n',spot_results.SpotData.GetRMSSpotSizeFor(1,1),spot_results.SpotData.GetRMSSpotSizeFor(2,1),spot_results.SpotData.GetRMSSpotSizeFor(3,1))
    fprintf('GEO radius: %6.3f  %6.3f  %6.3f\n',spot_results.SpotData.GetGeoSpotSizeFor(1,1),spot_results.SpotData.GetGeoSpotSizeFor(2,1),spot_results.SpotData.GetGeoSpotSizeFor(3,1))
```
 Python 
```csharp
    # extract RMS & Geo spot size for field points
    spot.ApplyAndWaitForCompletion()
    #spot_results = spot.GetResults()
    spot_results = spot.GetResults()
    print('RMS radius: %6.3f  %6.3f  %6.3f' % (spot_results.SpotData.GetRMSSpotSizeFor(1, 1), spot_results.SpotData.GetRMSSpotSizeFor(2, 1), spot_results.SpotData.GetRMSSpotSizeFor(3, 1)))
    print('GEO radius: %6.3f  %6.3f  %6.3f' % (spot_results.SpotData.GetGeoSpotSizeFor(1, 1), spot_results.SpotData.GetGeoSpotSizeFor(2, 1), spot_results.SpotData.GetGeoSpotSizeFor(3, 1)))
```

## Members

* [Get\_L\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a06f02c650f93c01d22d27a892c5aa626)
* [Get\_M\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a503be120281c92a80d9f387ed6189360)
* [Get\_N\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a5378d3194dcfb1d8c5648d35f9f9cbdb)
* [Get\_X\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a53795bec468cba047de51102fef220a3)
* [Get\_Y\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a6987af3229e3660e0c05dbcc93307fb7)
* [Get\_Z\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a5df3a20b72eb26993d0c930b896d62b5)
* [GetDetector\_X\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a00e391168df46ae3a77b2fa5e6cb3344)
* [GetDetector\_Y\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1ac007c1b96bbc9404b977d2ab8bd7e0d1)
* [GetDetector\_Z\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a96ee006b470e8b3519f0232310b84ae0)
* [GetGeoSpotSizeFor](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a8f205893bdd60f4ad12c126bbfd80a22)
* [GetReferenceCoordinate\_X\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a004786cf813690810a86888693d57a55)
* [GetReferenceCoordinate\_Y\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a482a8e632cea66e76c41838b7ea05ede)
* [GetRMSSpot\_X\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1ac96eadb3714eb91a03bbdc1f81ea1296)
* [GetRMSSpot\_Y\_For](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a05f198465b35adc8283b100f32be2ebb)
* [GetRMSSpotSizeFor](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a17359801dacfb1ac80570e2eca07a95a)
* [HalfWidth\_X](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1aa966a5b20155f447a5d7b52c85c673dd)
* [HalfWidth\_Y](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a552087d90581efb1a96561abe21a5e64)
* [MaxRadius](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a8900f0b8207156fd0789ae65bee14e65)
* [MeanRadius](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1afda4c12fa95b434fe657b0826a51b914)
* [NumberOfFields](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a67e3cdd799a7e2f6d11d324a9253b387)
* [NumberOfWavelengths](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a43c64a17b185a101c554cabb7455a11e)

## Properties

### Property HalfWidth\_X

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1aa966a5b20155f447a5d7b52c85c673dd"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.HalfWidth_X
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.HalfWidth_X"}]}`
-->

### Property HalfWidth\_Y

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a552087d90581efb1a96561abe21a5e64"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.HalfWidth_Y
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.HalfWidth_Y"}]}`
-->

### Property MaxRadius

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a8900f0b8207156fd0789ae65bee14e65"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.MaxRadius
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.MaxRadius"}]}`
-->

### Property MeanRadius

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1afda4c12fa95b434fe657b0826a51b914"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.MeanRadius
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.MeanRadius"}]}`
-->

### Property NumberOfFields

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a67e3cdd799a7e2f6d11d324a9253b387"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.NumberOfFields
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.NumberOfFields"}]}`
-->

### Property NumberOfWavelengths

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a43c64a17b185a101c554cabb7455a11e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.NumberOfWavelengths
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.NumberOfWavelengths"}]}`
-->

## Public functions

### Function Get\_X\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a53795bec468cba047de51102fef220a3"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_X_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_X_For"}]}`
-->

### Function Get\_Y\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a6987af3229e3660e0c05dbcc93307fb7"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_Y_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_Y_For"}]}`
-->

### Function Get\_Z\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a5df3a20b72eb26993d0c930b896d62b5"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_Z_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_Z_For"}]}`
-->

### Function Get\_L\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a06f02c650f93c01d22d27a892c5aa626"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_L_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_L_For"}]}`
-->

### Function Get\_M\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a503be120281c92a80d9f387ed6189360"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_M_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_M_For"}]}`
-->

### Function Get\_N\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a5378d3194dcfb1d8c5648d35f9f9cbdb"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_N_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.Get_N_For"}]}`
-->

### Function GetDetector\_X\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a00e391168df46ae3a77b2fa5e6cb3344"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetDetector_X_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetDetector_X_For"}]}`
-->

### Function GetDetector\_Y\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1ac007c1b96bbc9404b977d2ab8bd7e0d1"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetDetector_Y_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetDetector_Y_For"}]}`
-->

### Function GetDetector\_Z\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a96ee006b470e8b3519f0232310b84ae0"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetDetector_Z_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetDetector_Z_For"}]}`
-->

### Function GetGeoSpotSizeFor

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a8f205893bdd60f4ad12c126bbfd80a22"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetGeoSpotSizeFor(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetGeoSpotSizeFor"}]}`
-->

### Function GetRMSSpotSizeFor

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a17359801dacfb1ac80570e2eca07a95a"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetRMSSpotSizeFor(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetRMSSpotSizeFor"}]}`
-->

### Function GetRMSSpot\_X\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1ac96eadb3714eb91a03bbdc1f81ea1296"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetRMSSpot_X_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetRMSSpot_X_For"}]}`
-->

### Function GetRMSSpot\_Y\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a05f198465b35adc8283b100f32be2ebb"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetRMSSpot_Y_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetRMSSpot_Y_For"}]}`
-->

### Function GetReferenceCoordinate\_X\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a004786cf813690810a86888693d57a55"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetReferenceCoordinate_X_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetReferenceCoordinate_X_For"}]}`
-->

### Function GetReferenceCoordinate\_Y\_For

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix_1a482a8e632cea66e76c41838b7ea05ede"></a>

![][public]


```csharp
double ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetReferenceCoordinate_Y_For(int fieldN, int waveN)
```


**Parameters**:

* int **fieldN**
* int **waveN**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_SpotDataResultMatrix.GetReferenceCoordinate_Y_For"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)