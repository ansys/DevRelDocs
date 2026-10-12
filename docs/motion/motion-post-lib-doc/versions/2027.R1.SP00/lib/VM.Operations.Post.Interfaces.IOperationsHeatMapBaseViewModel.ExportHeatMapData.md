# Method ExportHeatMapData
<a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportHeatMapData_System_String_"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsHeatMapBaseViewModel_ExportHeatMapData_System_String_"></a> ExportHeatMapData\(string\)

Exports the heat-map view's own X, Y, and Z grid values to a specified file path.

The heat-map view holds a single heat map, so the file always contains one X, Y, and Z table.

The column separator is chosen from the file extension of <code class="paramref">filepath</code>, so the created file takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
Time (sec),Frequency (Hz),Z
1.250000000003e-002,-3.051757812500e-002,2.119873428345e+001
3.750000000008e-002,-3.051757812500e-002,2.119873428345e+001
...
```

The header row holds the X-axis title, the Y-axis title, and `Z`.
```
        ┌─────┬─────┬─────┬─────┐
        │     │     │     │     │   ④
        ├─────┼─────┼─────┼─────┤
        │     │     │     │     │   ③
    Y ↑ ├─────┼─────┼─────┼─────┤
        │     │     │     │     │   ②
        ├─────┼─────┼─────┼─────┤
Start → │  →  │  →  │  →  │  →  │   ①
        └─────┴─────┴─────┴─────┘
                   X →
```

Starting from the bottommost row, the values are written in order along the X direction. After one row is filled, the output moves to the next row in the Y direction, and every row is written the same way.

Every numeric value is written in exponential notation with 12 fractional digits regardless of the file extension.

A `.txt` path is written as a tab-separated table.

```text
Time (sec)	Frequency (Hz)	Z
1.250000000003e-002	-3.051757812500e-002	2.119873428345e+001
3.750000000008e-002	-3.051757812500e-002	2.119873428345e+001
...
```

The columns and iteration order are identical to the `.csv` form, and only the separator differs, using a tab character between columns.

```csharp
void ExportHeatMapData(string filepath)
```

### Parameters

`filepath` string

Output file path used to store the exported heat-map grid. A `.csv` path writes a comma-separated file, and a `.txt` path writes a tab-separated file.

### Examples

For an example that includes this property, see the [Interface IOperationsHeatMapBaseViewModel](VM.Operations.Post.Interfaces.IOperationsHeatMapBaseViewModel.md).

### Remarks

The operation writes the heat-map data directly to <code class="paramref">filepath</code> without opening a file-save dialog.
