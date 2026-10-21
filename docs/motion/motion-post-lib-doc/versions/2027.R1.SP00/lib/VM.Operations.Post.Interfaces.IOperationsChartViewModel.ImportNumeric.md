# Method ImportNumeric
<a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_ImportNumeric_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_ImportNumeric_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(string, List<INumericParameter\>\)

Imports curve data from a numeric file and adds the resulting curves to the chart.

For a complete operations, see [Operation API Example - Numeric Import](../document/operation-api/example/example_Import_for_operation_api.md#numeric-import).

A `.csv` file must be a comma-separated table.

```text
Time(sec),Value
0.00,0.000000
0.01,0.062791
...
```

The first row is a header that names each column. When that row already holds numbers, the columns are read as unnamed data named `Column1`, `Column2`, and so on.

Each later row holds one sample, and each named column supplies the X or Y values selected by `targets`.

A `.txt` file must be a tab-separated table. It follows the same header and sample rules as the `.csv` file, but columns are split by a tab character instead of a comma.

```text
Time(sec)	Value
0.00	0.000000
0.01	0.062791
...
```

A `.out` file must be a solver output table whose columns are separated by whitespace.

```text
Time(sec)   Value
0.00   0.000000
0.01   0.062791
...
```

Each row is trimmed, and every run of spaces or tabs is read as a single column break, so the row is handled like the comma-separated `.csv` row. The first row is a header unless it already holds numbers, and each later row holds one sample.

A `.rsp` file must be a binary RPC III file, so it cannot be read as a text table. The file stores one named channel for each data column, and each channel holds the ordered sample values used as the X or Y source selected by `targets`.

```csharp
void ImportNumeric(string filepath, List<INumericParameter> targets)
```

### Parameters

`filepath` string

Path to a numeric file with a supported extension. A `.csv`, `.txt`, or `.out` file is read as a text table, and a `.rsp` file is read as a binary RPC III file.

`targets` List<[INumericParameter](VM.ViewModels.Post.INumericParameter.md)\>

Numeric-curve parameters whose names and X/Y source paths define the curves added to this chart.

### Examples

```python
# Get the chart page.
page_name = "Page"
page = application_handler.GetPage(page_name)

# Create the chart view.
chart_name = "Chart"
chart = page.CreateChart(chart_name)

# Prepare numeric curve parameters.
target_count = 1
targets = List[INumericParameter](target_count)
parameter = NumericParameter()
curve_name = "ImportedCurve"
parameter.Name = curve_name
x_target = "Time(sec)"
parameter.TargetX = x_target
y_target = "Value"
parameter.TargetY = y_target
targets.Add(parameter)

# Import numeric curve data.
# NUMERIC_INPUT_FILENAME : path to the numeric input file
chart.ImportNumeric(NUMERIC_INPUT_FILENAME, targets)
```

### Remarks

For each target, the operation reads the target name and X/Y source paths from the numeric file and adds the resulting curve to this chart.
