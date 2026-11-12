# Property Positions
<div align="right"><a href="/lib/VM.Models.OutputReader.IVectorDisplayAnimationData.Positions.md" download="VM.Models.OutputReader.IVectorDisplayAnimationData.Positions.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Positions"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

## <a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Positions"></a> Positions

Gets or sets the position or start point of each display item for each frame.

```csharp
List<List<double[]>> Positions { get; set; }
```

### Property Value

 List<List<double\[\]\>\>

### Remarks

The outer list index is the frame count, the inner list index is the vector count, and each array holds the x, y, and z components.

vector type:position, position type:point, line type:start point
