# Interface ZOSAPI::Common::IVectorData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data"></a>

![][C#]
![][public]

**Definition**:

Methods and properties for retrieving and/or setting a 1D array of double precision data.

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

* [Data](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae561394dfc06829df23e9b24e7dd372b)
* [GetValueAt](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae26b2475213518b96d2df77bab09454e)
* [IsReadOnly](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1a93686a7c8e0675b009368f6ff59e0de2)
* [Length](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1a644ecf5fba0fb36d0e6bf8a713f44a6b)
* [ReadData](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae24fc04be8720029c71452f288028d98)
* [SetValueAt](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae23366bfc461083fba8f52933b34d0ed)
* [WriteData](interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data.md#interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1a49ecd2d49d5cf7566cd5e7321fb8d852)

## Properties

### Property IsReadOnly

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1a93686a7c8e0675b009368f6ff59e0de2"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Common.IVectorData.IsReadOnly
```


Gets a value indicating whether the data in this vector can be modified.

<code>true</code> if this instance is read only; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IVectorData.IsReadOnly"}]}`
-->

### Property Length

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1a644ecf5fba0fb36d0e6bf8a713f44a6b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Common.IVectorData.Length
```


Gets the length of this data vector.

The length.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IVectorData.Length"}]}`
-->

### Property Data

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae561394dfc06829df23e9b24e7dd372b"></a>

![][public]

**Definition**:


```csharp
double [] ZOSAPI.Common.IVectorData.Data
```


Gets or sets the data for this vector.

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
 


The data.


**Return type**: double[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IVectorData.Data"}]}`
-->

## Public functions

### Function ReadData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae24fc04be8720029c71452f288028d98"></a>

![][public]


```csharp
void ZOSAPI.Common.IVectorData.ReadData(int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In, Out]double[] Data)
```


Populates the specified array with the data vector. Note that this is the same as using the Data property, however it may be easier to use for COM-based clients.

**Parameters**:

* **Size**: The size of the input array.
* **Data**: The array to fill.


**Parameters**:

* int **Size**
* _[In, Out]_ double[] **Data**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IVectorData.ReadData"}]}`
-->

### Function WriteData

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1a49ecd2d49d5cf7566cd5e7321fb8d852"></a>

![][public]


```csharp
void ZOSAPI.Common.IVectorData.WriteData(int Size, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In]double[] Data)
```


Stores the specified array in the vector. Note that this is the same as using the Data property, however it may be easier to use for COM-based clients. This method will not do anything if IsReadOnly is <code>true</code>.

**Parameters**:

* **Size**: The size of the input array.
* **Data**: The data to store.


**Parameters**:

* int **Size**
* _[In]_ double[] **Data**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IVectorData.WriteData"}]}`
-->

### Function GetValueAt

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae26b2475213518b96d2df77bab09454e"></a>

![][public]


```csharp
double ZOSAPI.Common.IVectorData.GetValueAt(int position)
```


Gets the value at the specified index. Note that this may be much slower than retrieving all of the data at once via the Data property or ReadData method.

**Parameters**:

* **position**: The position (0 to Length-1).


**Returns**:


**Parameters**:

* int **position**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IVectorData.GetValueAt"}]}`
-->

### Function SetValueAt

<a id="interface_z_o_s_a_p_i_1_1_common_1_1_i_vector_data_1ae23366bfc461083fba8f52933b34d0ed"></a>

![][public]


```csharp
void ZOSAPI.Common.IVectorData.SetValueAt(int position, double Value)
```


Sets the value at the specified position. Note that this may be much slower than setting all of the data at once via the Data property or WriteData method.

**Parameters**:

* **position**: The position (0 to Length-1).
* **Value**: The new value.


**Parameters**:

* int **position**
* double **Value**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Common.IVectorData.SetValueAt"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)