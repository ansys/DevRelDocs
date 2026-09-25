# Property PlotDataType
<a id="VM_Models_OutputReader_PlotParameters_PlotDataType"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_PlotParameters_PlotDataType"></a> PlotDataType

Gets or sets the result data source used to read curve values.

`DEFAULT` reads the standard result data, while `PlotResult` reads data prepared for plotting.

```csharp
public PlotDataType PlotDataType { get; set; }
```

### Property Value

 [PlotDataType](VM.Models.PlotDataType.md)

### Remarks

The selected source determines which time and result data are used when the paths are read.
