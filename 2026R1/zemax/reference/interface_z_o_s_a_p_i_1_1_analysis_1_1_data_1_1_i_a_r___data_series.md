# Interface ZOSAPI::Analysis::Data::IAR\_DataSeries

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series"></a>

![][C#]
![][public]

**Definition**:


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

* [ConvertToRGB](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1ae05c830c2332bff629754e742a3d3116)
* [Description](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1ad7fd4acd6bd70abdb69741489d3188e0)
* [NumSeries](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1ac086af8710a8becef9ceac167adb511a)
* [SeriesLabels](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a7f371dc440fbd9ace5f1d4d8e0073448)
* [XData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a83aaff0e2b0dd0794b9c6f22e5c89f3d)
* [XLabel](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a6784c37a725a15e80d2c2cde413bd7c2)
* [YData](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a7724e43c32625fdb176d9130f20ce5ee)

## Properties

### Property Description

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1ad7fd4acd6bd70abdb69741489d3188e0"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.Data.IAR_DataSeries.Description
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_DataSeries.Description"}]}`
-->

### Property XLabel

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a6784c37a725a15e80d2c2cde413bd7c2"></a>

![][public]

**Definition**:


```csharp
String ZOSAPI.Analysis.Data.IAR_DataSeries.XLabel
```


**Return type**: String

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_DataSeries.XLabel"}]}`
-->

### Property XData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a83aaff0e2b0dd0794b9c6f22e5c89f3d"></a>

![][public]

**Definition**:


```csharp
IVectorData ZOSAPI.Analysis.Data.IAR_DataSeries.XData
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


**Return type**: [IVectorData](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_DataSeries.XData"}]}`
-->

### Property SeriesLabels

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a7f371dc440fbd9ace5f1d4d8e0073448"></a>

![][public]

**Definition**:


```csharp
String [] ZOSAPI.Analysis.Data.IAR_DataSeries.SeriesLabels
```


**Return type**: String[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_DataSeries.SeriesLabels"}]}`
-->

### Property NumSeries

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1ac086af8710a8becef9ceac167adb511a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Analysis.Data.IAR_DataSeries.NumSeries
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_DataSeries.NumSeries"}]}`
-->

### Property YData

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1a7724e43c32625fdb176d9130f20ce5ee"></a>

![][public]

**Definition**:


```csharp
IMatrixData ZOSAPI.Analysis.Data.IAR_DataSeries.YData
```


**Return type**: [IMatrixData](interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_matrix_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_DataSeries.YData"}]}`
-->

## Public functions

### Function ConvertToRGB

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_1ae05c830c2332bff629754e742a3d3116"></a>

![][public]


```csharp
IAR_DataSeriesRgb ZOSAPI.Analysis.Data.IAR_DataSeries.ConvertToRGB(IColorTranslator translator)
```


**Parameters**:

* [IColorTranslator](interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_i_color_translator) **translator**

**Return type**: [IAR\_DataSeriesRgb](interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_rgb.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_data_1_1_i_a_r___data_series_rgb)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Data.IAR_DataSeries.ConvertToRGB"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)