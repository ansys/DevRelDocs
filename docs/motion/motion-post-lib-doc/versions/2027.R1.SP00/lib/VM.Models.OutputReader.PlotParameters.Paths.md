# Property Paths
<a id="VM_Models_OutputReader_PlotParameters_Paths"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_PlotParameters_Paths"></a> Paths

Gets or sets the characteristic and component paths to read from [`Target`](VM.Models.OutputReader.PlotParameters.Target.md).

Each value combines a characteristic and component with a slash, such as <code>Displacement/Magnitude</code>.

```csharp
public IEnumerable<string> Paths { get; set; }
```

### Property Value

 IEnumerable<string\>

### Remarks

Each path combines a characteristic with a component returned by the plot-characteristic lookup operations.
