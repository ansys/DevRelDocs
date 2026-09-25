# Property CSYS
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
