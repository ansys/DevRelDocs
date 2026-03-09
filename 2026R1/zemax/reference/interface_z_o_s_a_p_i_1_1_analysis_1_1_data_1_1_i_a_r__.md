# Interface ZOSAPI::Analysis::Data::IAR\_

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__"></a>

![][C#]
![][public]

**Definition**:

Properties and methods for retrieving analysis window data. This interface can be accessed via the IA_ interface. Note that not all analysis types currently return detailed results via this interface, however all analyses that support text output should support the GetTextFile method. See the OpticStudio manual for more information.


## Members

* [CriticalRayData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a24e4732a9e6f9fbc45762e3b976ece0d)
* [DataGrids](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ab954f0b8094e64ca03996cc04aac07dd)
* [DataGridsRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a98ab553c2bfcb644e0050c6b8e239277)
* [DataScatterPoints](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1abc7988d4205d02e0ff563997afc93eba)
* [DataScatterPointsRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1adbb93744ef4fbaf04bc81c63dff2ff65)
* [DataSeries](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a9412e7e789091546b4e0e568cf8839da)
* [DataSeriesRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a63566957764acb728f31c5ab5d1b60d0)
* [GetDataGrid](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1aa4eaa3586fe8be4dab9eea0c4ed80575)
* [GetDataGridRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a7914890beda30de981931b39c0823eb5)
* [GetDataScatterPoint](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a0d1e6c1b61602791ebddb97b0d0727ca)
* [GetDataScatterPointRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a06fe4c209b855776e23ead1e3a8a5f6b)
* [GetDataSeries](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ad3e069c5493976ca2654839e7bc23d7f)
* [GetDataSeriesRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a78de4aa03e610b07cf6e8e9dae927abe)
* [GetMessageAt](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac16039a0a3249835fae653ec639681f1)
* [GetRayData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a7e8dff4919c7c5cebd27cd75d26932b8)
* [GetTextFile](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a44406a1a4b2bd9d16129e54bb64ba1ca)
* [HeaderData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a25177c064a5e66170f8344f01f48c787)
* [Messages](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1af07772dfe08ba19377f96cf724aa4e5f)
* [MetaData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ae7434963795fade2974badb96c0e8c09)
* [NSCSingleRayTraceData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a3f0fe0a3a9a8e2b90b67dd8f0efe7bcc)
* [NSCSpotData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac0a350bef682a2f7fc0efbd4aa0f1ff6)
* [NumberOfDataGrids](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ae3cd175372244ab19115b3ea98001120)
* [NumberOfDataGridsRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac367603f2dc5cdd8d074066fc92c6636)
* [NumberOfDataScatterPoints](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a418277260149c73bd03e9bdb8cb63cec)
* [NumberOfDataScatterPointsRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac7ff21dce8a4058eec529e4c9cdeb1d3)
* [NumberOfDataSeries](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a9927f175c0167aefcb103b77f255ad80)
* [NumberOfDataSeriesRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ad89a61978716428cf8f004aa11dee98e)
* [NumberOfMessages](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a713a727ccc09d86d793baa870d5b8407)
* [NumberOfRayData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ad9ff74593155f9b1d14b69baf8a25a23)
* [PathAnalysisData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a793167125722f06641bbced672d59bc7)
* [RayData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a2bb52a0762b3543994a1fa1afdc3f230)
* [SpotData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a2e52480086bc2854c1bc9d7c7888123f)

## Properties

### Property MetaData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ae7434963795fade2974badb96c0e8c09"></a>

![][public]

**Definition**:


```csharp
IAR_MetaData ZOSAPI.Analysis.Data.IAR_.MetaData
```


**Return type**: [IAR\_MetaData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___meta_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___meta_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.MetaData"}]}`
-->

### Property HeaderData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a25177c064a5e66170f8344f01f48c787"></a>

![][public]

**Definition**:


```csharp
IAR_HeaderData ZOSAPI.Analysis.Data.IAR_.HeaderData
```


**Return type**: [IAR\_HeaderData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___header_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___header_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.HeaderData"}]}`
-->

### Property NumberOfDataGrids

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ae3cd175372244ab19115b3ea98001120"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfDataGrids
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfDataGrids"}]}`
-->

### Property DataGrids

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ab954f0b8094e64ca03996cc04aac07dd"></a>

![][public]

**Definition**:


```csharp
IAR_DataGrid [] ZOSAPI.Analysis.Data.IAR_.DataGrids
```


**Return type**: [IAR\_DataGrid](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.DataGrids"}]}`
-->

### Property NumberOfDataGridsRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac367603f2dc5cdd8d074066fc92c6636"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfDataGridsRgb
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfDataGridsRgb"}]}`
-->

### Property DataGridsRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a98ab553c2bfcb644e0050c6b8e239277"></a>

![][public]

**Definition**:


```csharp
IAR_DataGridRgb [] ZOSAPI.Analysis.Data.IAR_.DataGridsRgb
```


**Return type**: [IAR\_DataGridRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid_rgb.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid_rgb)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.DataGridsRgb"}]}`
-->

### Property NumberOfDataSeries

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a9927f175c0167aefcb103b77f255ad80"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfDataSeries
```


Usage (see [Example 04](page_ex04.md#page_ex04) for a full sample)


C# 
```csharp
            // Read data series
            System.Text.StringBuilder sbReport = new System.Text.StringBuilder();
            sbReport.Append("X Data\t");
            for (int i = 0; i < newWin_Results.NumberOfDataSeries; i++)
            {
                sbReport.Append("Series " + i + "\t\t");
            }
            sbReport.AppendLine("");

            for (int k = 0; k < newWin_Results.GetDataSeries(0).XData.Length; k++)
            {
                sbReport.Append(newWin_Results.GetDataSeries(0).XData.GetValueAt(k) + "\t");
                for (int i = 0; i < newWin_Results.NumberOfDataSeries; i++)
                {
                    for (int j = 0; j < newWin_Results.GetDataSeries(i).NumSeries; j++)
                    {
                        sbReport.Append(newWin_Results.GetDataSeries(i).YData.GetValueAt(k, j) + "\t");
                    }
                }
                sbReport.AppendLine("");
            }

            string resFile = TheApplication.SamplesDir + "\\API\\CS\\e04_pull_data_from_FFTMT.txt";
            System.IO.File.WriteAllText(resFile, sbReport.ToString());

```
 C++ 
```csharp
    // Export the data series to a text file
    fstream textfile;
    string filepath = sampleDir + "\\API\\CPP\\e04_pull_data_from_FFTMTF.txt";
    textfile.open(filepath, fstream::trunc | ios::out);
    for (int i = 0; i < newWin_Results->NumberOfDataSeries; i++) {
        IAR_DataSeriesPtr dataseries = newWin_Results->GetDataSeries(i);
        for (int j = 0; j < dataseries->NumSeries; j++) {
            textfile << "\nSeries " << i << " - " << j << " : (X, Y)" << endl;
            for (int k = 0; k < dataseries->GetXData()->Length; k++) {
                textfile << dataseries->GetXData()->GetValueAt(k) << "\t";
                textfile << dataseries->GetYData()->GetValueAt(k, j) << endl;
            }
        }
    }
```
 Matlab 
```csharp
    % Read and plot data series
    dataSeries = newWin_Results.DataSeries;
    cc=lines(double(newWin_Results.NumberOfDataSeries));
    for gridN=1:newWin_Results.NumberOfDataSeries
        data = dataSeries(gridN);
        y = data.YData.Data.double;
        x = data.XData.Data.double;
        plot(x,y(:,1),'-','color',cc(gridN,:));
        plot(x,y(:,2),':','color',cc(gridN,:));
    end
```
 Python 
```csharp
    # Read and plot data series
    # NOTE: numpy functions are used to unpack and plot the 2D tuple for Sagittal & Tangential MTF
    # You will need to import the numpy module to get this part of the code to work
    colors = ('b','g','r','c', 'm', 'y', 'k')
    for seriesNum in range(0,newWin_Results.NumberOfDataSeries, 1):
        data = newWin_Results.GetDataSeries(seriesNum)
        
        # get raw .NET data into numpy array
        xRaw = data.XData.Data
        yRaw = data.YData.Data

        x = list(xRaw)
        y = zos.reshape(yRaw, yRaw.GetLength(0), yRaw.GetLength(1), True)
        
        plt.plot(x,y[0],color=colors[seriesNum])
        plt.plot(x,y[1],linestyle='--',color=colors[seriesNum])        
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfDataSeries"}]}`
-->

### Property DataSeries

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a9412e7e789091546b4e0e568cf8839da"></a>

![][public]

**Definition**:


```csharp
IAR_DataSeries [] ZOSAPI.Analysis.Data.IAR_.DataSeries
```


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


**Return type**: [IAR\_DataSeries](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.DataSeries"}]}`
-->

### Property NumberOfDataSeriesRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ad89a61978716428cf8f004aa11dee98e"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfDataSeriesRgb
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfDataSeriesRgb"}]}`
-->

### Property DataSeriesRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a63566957764acb728f31c5ab5d1b60d0"></a>

![][public]

**Definition**:


```csharp
IAR_DataSeriesRgb [] ZOSAPI.Analysis.Data.IAR_.DataSeriesRgb
```


**Return type**: [IAR\_DataSeriesRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_rgb.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_rgb)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.DataSeriesRgb"}]}`
-->

### Property NumberOfDataScatterPoints

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a418277260149c73bd03e9bdb8cb63cec"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfDataScatterPoints
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfDataScatterPoints"}]}`
-->

### Property DataScatterPoints

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1abc7988d4205d02e0ff563997afc93eba"></a>

![][public]

**Definition**:


```csharp
IAR_DataScatterPoints [] ZOSAPI.Analysis.Data.IAR_.DataScatterPoints
```


**Return type**: [IAR\_DataScatterPoints](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.DataScatterPoints"}]}`
-->

### Property NumberOfDataScatterPointsRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac7ff21dce8a4058eec529e4c9cdeb1d3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfDataScatterPointsRgb
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfDataScatterPointsRgb"}]}`
-->

### Property DataScatterPointsRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1adbb93744ef4fbaf04bc81c63dff2ff65"></a>

![][public]

**Definition**:


```csharp
IAR_DataScatterPointsRgb [] ZOSAPI.Analysis.Data.IAR_.DataScatterPointsRgb
```


**Return type**: [IAR\_DataScatterPointsRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points_rgb.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points_rgb)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.DataScatterPointsRgb"}]}`
-->

### Property NumberOfRayData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ad9ff74593155f9b1d14b69baf8a25a23"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfRayData
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfRayData"}]}`
-->

### Property RayData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a2bb52a0762b3543994a1fa1afdc3f230"></a>

![][public]

**Definition**:


```csharp
IAR_RayData [] ZOSAPI.Analysis.Data.IAR_.RayData
```


**Return type**: [IAR\_RayData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.RayData"}]}`
-->

### Property CriticalRayData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a24e4732a9e6f9fbc45762e3b976ece0d"></a>

![][public]

**Definition**:


```csharp
IAR_CriticalRayData ZOSAPI.Analysis.Data.IAR_.CriticalRayData
```


**Return type**: [IAR\_CriticalRayData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___critical_ray_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.CriticalRayData"}]}`
-->

### Property PathAnalysisData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a793167125722f06641bbced672d59bc7"></a>

![][public]

**Definition**:


```csharp
IAR_PathAnalysisData ZOSAPI.Analysis.Data.IAR_.PathAnalysisData
```


**Return type**: [IAR\_PathAnalysisData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___path_analysis_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___path_analysis_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.PathAnalysisData"}]}`
-->

### Property SpotData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a2e52480086bc2854c1bc9d7c7888123f"></a>

![][public]

**Definition**:


```csharp
IAR_SpotDataResultMatrix ZOSAPI.Analysis.Data.IAR_.SpotData
```


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


**Return type**: [IAR\_SpotDataResultMatrix](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___spot_data_result_matrix)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.SpotData"}]}`
-->

### Property NSCSpotData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac0a350bef682a2f7fc0efbd4aa0f1ff6"></a>

![][public]

**Definition**:


```csharp
IAR_NSCSpotResults ZOSAPI.Analysis.Data.IAR_.NSCSpotData
```


**Return type**: [IAR\_NSCSpotResults](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_spot_results.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_spot_results)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NSCSpotData"}]}`
-->

### Property NSCSingleRayTraceData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a3f0fe0a3a9a8e2b90b67dd8f0efe7bcc"></a>

![][public]

**Definition**:


```csharp
IAR_NSCSingleRayTraceData ZOSAPI.Analysis.Data.IAR_.NSCSingleRayTraceData
```


**Return type**: [IAR\_NSCSingleRayTraceData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___n_s_c_single_ray_trace_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NSCSingleRayTraceData"}]}`
-->

### Property NumberOfMessages

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a713a727ccc09d86d793baa870d5b8407"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_.NumberOfMessages
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.NumberOfMessages"}]}`
-->

### Property Messages

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1af07772dfe08ba19377f96cf724aa4e5f"></a>

![][public]

**Definition**:


```csharp
IMessage [] ZOSAPI.Analysis.Data.IAR_.Messages
```


**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.Messages"}]}`
-->

## Public functions

### Function GetDataGrid

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1aa4eaa3586fe8be4dab9eea0c4ed80575"></a>

![][public]


```csharp
IAR_DataGrid ZOSAPI.Analysis.Data.IAR_.GetDataGrid(int index)
```


**Parameters**:

* int **index**

**Return type**: [IAR\_DataGrid](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetDataGrid"}]}`
-->

### Function GetDataGridRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a7914890beda30de981931b39c0823eb5"></a>

![][public]


```csharp
IAR_DataGridRgb ZOSAPI.Analysis.Data.IAR_.GetDataGridRgb(int index)
```


Usage (see [Example 24](page_ex24.md#page_ex24) for a full sample)


C# 
```csharp
            // Creates a new detector viewer analysis reference
            ZOSAPI.Analysis.IA_ d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);

            ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer d4_settings = d4.GetSettings() as ZOSAPI.Analysis.Settings.RayTracing.IAS_DetectorViewer;
            d4_settings.Detector.SetDetectorNumber(4);
            d4_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
            d4.ApplyAndWaitForCompletion();

            ZOSAPI.Analysis.Data.IAR_ d4_Results = d4.GetResults();
            ZOSAPI.Analysis.Data.IAR_DataGridRgb d4_raw = d4_Results.GetDataGridRgb(0) as ZOSAPI.Analysis.Data.IAR_DataGridRgb;
```
 C++ 
```csharp
    // Creates a new detector viewer analysis reference
    IA_Ptr d4 = TheSystem->Analyses->New_Analysis(AnalysisIDM::AnalysisIDM_DetectorViewer);

    IAS_DetectorViewerPtr d4_settings = d4->GetSettings();
    d4_settings->Detector->SetDetectorNumber(4);
    d4_settings->ShowAs = DetectorViewerShowAsTypes_TrueColor;
    d4->ApplyAndWaitForCompletion();

    IAR_Ptr d4_results = d4->GetResults();
    IAR_DataGridRgbPtr d4_raw = d4_results->GetDataGridRgb(0);
```
 Matlab 
```csharp
    % Creates a new detector viewer analysis reference, changes to TrueColor for RGB extraction
    d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer);
    d4_settings = d4.GetSettings();
    d4_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor;
    d4_settings.Detector.SetDetectorNumber(4);
    d4.ApplyAndWaitForCompletion();
    d4_Results = d4.GetResults();
    d4_raw =  d4_Results.DataGridsRgb.Get(0);
```
 Python 
```csharp
    # Creates a new detector viewer analysis reference, changes to TrueColor for RGB extraction
    d4 = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.DetectorViewer)
    det_settings = d4.GetSettings()
    det_settings.ShowAs = ZOSAPI.Analysis.DetectorViewerShowAsTypes.TrueColor
    det_settings.Detector.SetDetectorNumber(4);
    d4.ApplyAndWaitForCompletion()
    d4_Results = d4.GetResults()
    d4_raw = d4_Results.GetDataGridRgb(0)
```


**Parameters**:

* int **index**

**Return type**: [IAR\_DataGridRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid_rgb.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_grid_rgb)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetDataGridRgb"}]}`
-->

### Function GetDataSeries

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ad3e069c5493976ca2654839e7bc23d7f"></a>

![][public]


```csharp
IAR_DataSeries ZOSAPI.Analysis.Data.IAR_.GetDataSeries(int index)
```


**Parameters**:

* int **index**

**Return type**: [IAR\_DataSeries](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetDataSeries"}]}`
-->

### Function GetDataSeriesRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a78de4aa03e610b07cf6e8e9dae927abe"></a>

![][public]


```csharp
IAR_DataSeriesRgb ZOSAPI.Analysis.Data.IAR_.GetDataSeriesRgb(int index)
```


**Parameters**:

* int **index**

**Return type**: [IAR\_DataSeriesRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_rgb.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_rgb)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetDataSeriesRgb"}]}`
-->

### Function GetDataScatterPoint

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a0d1e6c1b61602791ebddb97b0d0727ca"></a>

![][public]


```csharp
IAR_DataScatterPoints ZOSAPI.Analysis.Data.IAR_.GetDataScatterPoint(int index)
```


**Parameters**:

* int **index**

**Return type**: [IAR\_DataScatterPoints](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetDataScatterPoint"}]}`
-->

### Function GetDataScatterPointRgb

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a06fe4c209b855776e23ead1e3a8a5f6b"></a>

![][public]


```csharp
IAR_DataScatterPointsRgb ZOSAPI.Analysis.Data.IAR_.GetDataScatterPointRgb(int index)
```


**Parameters**:

* int **index**

**Return type**: [IAR\_DataScatterPointsRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points_rgb.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_scatter_points_rgb)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetDataScatterPointRgb"}]}`
-->

### Function GetRayData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a7e8dff4919c7c5cebd27cd75d26932b8"></a>

![][public]


```csharp
IAR_RayData ZOSAPI.Analysis.Data.IAR_.GetRayData(int index)
```


**Parameters**:

* int **index**

**Return type**: [IAR\_RayData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___ray_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetRayData"}]}`
-->

### Function GetMessageAt

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1ac16039a0a3249835fae653ec639681f1"></a>

![][public]


```csharp
IMessage ZOSAPI.Analysis.Data.IAR_.GetMessageAt(int index)
```


**Parameters**:

* int **index**

**Return type**: [IMessage](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_message)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetMessageAt"}]}`
-->

### Function GetTextFile

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___1a44406a1a4b2bd9d16129e54bb64ba1ca"></a>

![][public]


```csharp
bool ZOSAPI.Analysis.Data.IAR_.GetTextFile(String Filename)
```


This function provides similar functionality to the DDE and ZPL commands GETTEXTFILE.

Usage (see [Example 10](page_ex10.md#page_ex10) for a full sample)


C# 
```csharp
            // Save Ray Path Analysis to Text File
            if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition)
            {
                IA_ RayPath = TheSystem.Analyses.New_Analysis(AnalysisIDM.PathAnalysis);
                ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis RayPath_settings = RayPath.GetSettings() as ZOSAPI.Analysis.RayTracing.IAS_PathAnalysis;
                RayPath_settings.RayDatabaseFile = "e10_API_RayTrace.ZRD";
                RayPath.ApplyAndWaitForCompletion();
                IAR_ Rays = RayPath.GetResults();
                Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\CS\\e10_RayPathAnalysis.txt");
            }
            else
            {
                Console.Write("\nThe RayPathAnalysis is a premium feature only\n\nPress any key to continue\n");
                Console.ReadKey();
            }
```
 C++ 
```csharp
    // Save Ray Path Analysis to Text File
    if (TheApplication->LicenseStatus == ZOSAPI_Interfaces::LicenseStatusType::LicenseStatusType_PremiumEdition) {
        IA_Ptr RayPath = TheSystem->Analyses->New_Analysis(AnalysisIDM_PathAnalysis);
        ZOSAPI_Interfaces::IAS_PathAnalysisPtr RayPath_settings = RayPath->GetSettings();
        RayPath_settings->RayDatabaseFile = "e10_API_RayTrace.ZRD";
        RayPath->ApplyAndWaitForCompletion();

        IAR_Ptr Rays = RayPath->GetResults();
        Rays->GetTextFile(TheApplication->SamplesDir + "\\API\\CPP\\e10_RayPathAnalysis.txt");
    }
```
 Matlab 
```csharp
    % Save Ray Path Analysis to Text File
    if TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis);
        RayPath_settings = RayPath.GetSettings();
        RayPath_settings.RayDatabaseFile = 'e10_API_Raytrace.ZRD';
        RayPath.ApplyAndWaitForCompletion();
        Rays = RayPath.GetResults();
        Rays.GetTextFile(System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e10_RayPathAnalysis.txt'));
    else
        fprintf('\nThe RayPathAnalysis is a premium feature only\n');
    end
```
 Python 
```csharp
    # Save Ray Path Analysis to Text File
    if (TheApplication.LicenseStatus == ZOSAPI.LicenseStatusType.PremiumEdition):
        # there is a bug in ZOS16.5 SP4 with COM; need to use ZOS16.5 SP5 or higher to run this code successfully
        RayPath = TheSystem.Analyses.New_Analysis(ZOSAPI.Analysis.AnalysisIDM.PathAnalysis)
        RayPath_settings = RayPath.GetSettings()
        zrd = "e10_API_RayTrace.ZRD"
        RayPath_settings.RayDatabaseFile = zrd
        RayPath.ApplyAndWaitForCompletion()

        Rays = RayPath.GetResults()
        Rays.GetTextFile(TheApplication.SamplesDir + "\\API\\Python\\e10_RayPathAnalysis.txt")
```
 


**Parameters**:

* **Filename**: The output filename to store the text results data.


**Returns**:

<code>true</code> if the output file was successfully created; otherwise, <code>false</code>.


**Parameters**:

* String **Filename**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_.GetTextFile"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)