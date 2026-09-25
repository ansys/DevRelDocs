# Property Target
<a id="VM_Models_OutputReader_PlotParameters_Target"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_PlotParameters_Target"></a> Target

Gets or sets the full name of the entity whose curve data is read.

The value identifies an entity available in the opened result document, such as <code>Crank</code> or a body component path such as <code>FEBody_01/Node/1</code>.

For a complete operations, see [Result File Reader API Example - Plot](../document/result-file-reader/example/example_result_file_reader.md#plot).

```csharp
public string Target { get; set; }
```

### Property Value

 string

### Remarks

The value must identify an entity available in the opened result document.
