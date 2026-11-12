# Method GetCurves
<div align="right"><a href="/lib/VM.Post.API.OutputReader.OutputReader.GetCurves.md" download="VM.Post.API.OutputReader.OutputReader.GetCurves.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_Post_API_OutputReader_OutputReader_GetCurves_VM_Models_OutputReader_PlotParameters_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetCurves_VM_Models_OutputReader_PlotParameters_"></a> GetCurves\(PlotParameters\)

Gets curve samples described by [`PlotParameters`](VM.Models.OutputReader.PlotParameters.md).

For a complete operations, see [Result File Reader API Example - Get Curve](../document/result-file-reader/example/example_curve_for_result_file_reader_api.md#get-curve).

```csharp
public IDictionary<string, Point2D[]> GetCurves(PlotParameters parameter)
```

### Parameters

`parameter` [PlotParameters](VM.Models.OutputReader.PlotParameters.md)

Plot target, characteristic paths, plot type, and coordinate-system settings used to read curves.

### Returns

 IDictionary<string, [Point2D](VM.Point2D.md)\[\]\>

Dictionary mapping each curve key to its [`Point2D`](VM.Point2D.md) samples.

### Examples

```python
# Prepare a characteristic/component path for the curve target.
# The name of the target entity.
entity_name = "Crank"
# The characteristic/component path of the curve to add, in "Characteristic/Component" format.
curve_path = "Displacement/Magnitude"
# The characteristic/component paths of the curves to add, in "Characteristic/Component" format.
curve_paths = List[str]()
curve_paths.Add(curve_path)
# The parameters that specify the target and curve paths of the plot.
parameters = PlotParameters()
parameters.Target = entity_name
parameters.Paths = curve_paths

# Read the curve samples.
curves = output_reader.GetCurves(parameters)
```

### Remarks

<Danger>
`parameter` must contain valid target and path settings.
</Danger>
