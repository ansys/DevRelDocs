# Property Target
<div align="right"><a href="/lib/VM.Models.OutputReader.PlotParameters.Target.md" download="VM.Models.OutputReader.PlotParameters.Target.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_OutputReader_PlotParameters_Target"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_PlotParameters_Target"></a> Target

Gets or sets the full name of the entity whose curve data is read.

The value identifies an entity available in the opened result document, such as `Crank` or a body component path such as `FEBody_01/Node/1`.

```csharp
public string Target { get; set; }
```

### Property Value

 string

### Remarks

The value must identify an entity available in the opened result document.
