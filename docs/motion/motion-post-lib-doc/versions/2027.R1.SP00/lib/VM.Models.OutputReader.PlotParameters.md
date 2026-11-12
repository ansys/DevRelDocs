# Class PlotParameters
<div align="right"><a href="/lib/VM.Models.OutputReader.PlotParameters.md" download="VM.Models.OutputReader.PlotParameters.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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

Each value combines a characteristic and component with a slash, such as `Displacement/Magnitude`.

 [PlotDataType](VM.Models.OutputReader.PlotParameters.PlotDataType.md\#VM\_Models\_OutputReader\_PlotParameters\_PlotDataType)

Gets or sets the result data source used to read curve values.

`DEFAULT` reads the standard result data, while `PlotResult` reads data prepared for plotting.

 [Target](VM.Models.OutputReader.PlotParameters.Target.md\#VM\_Models\_OutputReader\_PlotParameters\_Target)

Gets or sets the full name of the entity whose curve data is read.

The value identifies an entity available in the opened result document, such as `Crank` or a body component path such as `FEBody_01/Node/1`.
