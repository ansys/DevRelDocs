# Method GetFlexibleBodyReferenceFrame
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetFlexibleBodyReferenceFrame.md" download="VM.Post.API.OutputReader.OutputReader.GetFlexibleBodyReferenceFrame.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the target finite-element body.
entity_name = "FEBody_01"
# The position and orientation values of the flexible body for each state.
reference_frames = output_reader.GetFlexibleBodyReferenceFrame(entity_name)
```

### Remarks

The method requests a reference frame for every state reported by [`OutputReader`](VM.Post.API.OutputReader.OutputReader.md).

<Danger>
`target` must identify a flexible body. An invalid target causes the body lookup or reference-frame read to fail.
</Danger>
