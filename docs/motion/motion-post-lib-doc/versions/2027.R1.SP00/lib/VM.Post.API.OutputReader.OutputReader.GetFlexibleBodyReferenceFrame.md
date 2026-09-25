# Method GetFlexibleBodyReferenceFrame
<a id="VM_Post_API_OutputReader_OutputReader_GetFlexibleBodyReferenceFrame_System_String_System_Boolean_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetFlexibleBodyReferenceFrame_System_String_System_Boolean_"></a> GetFlexibleBodyReferenceFrame\(string, bool\)

Gets position and orientation values for a flexible body across result states.

```csharp
public IList<double[]> GetFlexibleBodyReferenceFrame(string target, bool recalculateOrientation = false)
```

### Parameters

`target` string

Full name of the flexible body.

`recalculateOrientation` bool

`true` to calculate orientation from the element reference frame. `false` uses the FE body reference frame.

### Returns

 IList<double\[\]\>

List containing position and orientation values for each state in the opened result file.

### Examples

```python
# Read the flexible-body reference frame for every result state.
entity_name = "FEBody_01"
reference_frames = output_reader.GetFlexibleBodyReferenceFrame(entity_name)
```

### Remarks

The method requests a reference frame for every state reported by [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

> [!IMPORTANT]
> `target` must identify a flexible body. An invalid target causes the body lookup or reference-frame read to fail.
