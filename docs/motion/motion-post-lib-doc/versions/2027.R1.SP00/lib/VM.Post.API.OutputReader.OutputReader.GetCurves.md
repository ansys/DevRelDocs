# Method GetCurves
<a id="VM_Post_API_OutputReader_OutputReader_GetCurves_VM_Models_OutputReader_PlotParameters_"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

## <a id="VM_Post_API_OutputReader_OutputReader_GetCurves_VM_Models_OutputReader_PlotParameters_"></a> GetCurves\(PlotParameters\)

Gets curve samples described by [`PlotParameters`](VM.Models.OutputReader.PlotParameters.md).

For a complete operations, see [Result File Reader API Example - Get Curve](../document/result-file-reader/example/example_result_file_reader.md#get-curve).

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
target_name = "Crank"
curve_path = "Displacement/Magnitude"
curve_paths = List[str]()
curve_paths.Add(curve_path)
parameters = PlotParameters()
parameters.Target = target_name
parameters.Paths = curve_paths

# Read the curve samples.
curves = output_reader.GetCurves(parameters)
```

### Remarks

> [!IMPORTANT]
> `parameter` must contain valid target and path settings.
