# Property Paths
<div align="right"><a href="/lib/VM.Models.OutputReader.PlotParameters.Paths.md" download="VM.Models.OutputReader.PlotParameters.Paths.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_OutputReader_PlotParameters_Paths"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_PlotParameters_Paths"></a> Paths

Gets or sets the characteristic and component paths to read from [`Target`](VM.Models.OutputReader.PlotParameters.Target.md).

Each value combines a characteristic and component with a slash, such as `Displacement/Magnitude`.

```csharp
public IEnumerable<string> Paths { get; set; }
```

### Property Value

 IEnumerable<string\>

### Remarks

Each path combines a characteristic with a component returned by the plot-characteristic lookup operations.
