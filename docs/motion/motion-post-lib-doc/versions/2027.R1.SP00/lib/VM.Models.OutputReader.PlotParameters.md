# Class PlotParameters
<a id="VM_Models_OutputReader_PlotParameters"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

Defines the result data source, target, paths, and coordinate system used to read curve data.

```csharp
public class PlotParameters
```

## Properties

 [CSYS](VM.Models.OutputReader.PlotParameters.CSYS.md\#VM\_Models\_OutputReader\_PlotParameters\_CSYS)

Gets or sets the coordinate-system data used when reading the selected paths.

Set a coordinate-system marker object to read the selected paths relative to that marker.

 [Paths](VM.Models.OutputReader.PlotParameters.Paths.md\#VM\_Models\_OutputReader\_PlotParameters\_Paths)

Gets or sets the characteristic and component paths to read from [`Target`](VM.Models.OutputReader.PlotParameters.Target.md).

Each value combines a characteristic and component with a slash, such as <code>Displacement/Magnitude</code>.

 [PlotDataType](VM.Models.OutputReader.PlotParameters.PlotDataType.md\#VM\_Models\_OutputReader\_PlotParameters\_PlotDataType)

Gets or sets the result data source used to read curve values.

`DEFAULT` reads the standard result data, while `PlotResult` reads data prepared for plotting.

 [Target](VM.Models.OutputReader.PlotParameters.Target.md\#VM\_Models\_OutputReader\_PlotParameters\_Target)

Gets or sets the full name of the entity whose curve data is read.

The value identifies an entity available in the opened result document, such as <code>Crank</code> or a body component path such as <code>FEBody_01/Node/1</code>.

For a complete operations, see [Result File Reader API Example - Plot](../document/result-file-reader/example/example_result_file_reader.md#plot).
