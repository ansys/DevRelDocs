# Property CSYS
<div align="right"><a href="/lib/VM.Models.OutputReader.PlotParameters.CSYS.md" download="VM.Models.OutputReader.PlotParameters.CSYS.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_OutputReader_PlotParameters_CSYS"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_PlotParameters_CSYS"></a> CSYS

Gets or sets the coordinate-system data used when reading the selected paths.

Set a coordinate-system marker object to read the selected paths relative to that marker.

```csharp
public object CSYS { get; set; }
```

### Property Value

 object

### Remarks

The coordinate-system value is applied when the selected result paths require coordinate-based data. When the value is not a coordinate-system marker object, the global inertia coordinate system is used.
