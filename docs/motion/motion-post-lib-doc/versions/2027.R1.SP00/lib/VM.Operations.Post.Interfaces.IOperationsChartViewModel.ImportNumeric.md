# Method ImportNumeric
<div align="right"><a href="/lib/VM.Operations.Post.Interfaces.IOperationsChartViewModel.ImportNumeric.md" download="VM.Operations.Post.Interfaces.IOperationsChartViewModel.ImportNumeric.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)

# Create the chart view.
# The name of the new chart view.
chart_name = "Chart"
# The chart view created on the page.
chart = page.CreateChart(chart_name)

# Prepare numeric curve parameters.
# The number of numeric parameters.
target_count = 1
# The numeric parameters that define the curves to create.
targets = List[INumericParameter](target_count)
# The parameter that defines the curve created from the file.
parameter = NumericParameter()
# The name of the curve.
curve_name = "ImportedCurve"
parameter.Name = curve_name
# The name of the X-axis data in the file.
x_target = "Time(sec)"
parameter.TargetX = x_target
# The name of the Y-axis data in the file.
y_target = "Value"
parameter.TargetY = y_target
targets.Add(parameter)

# Import numeric curve data.
# NUMERIC_INPUT_FILENAME : path to the numeric input file (e.g., D:\PostprocessorAPI\Input\numeric_data.csv)
chart.ImportNumeric(NUMERIC_INPUT_FILENAME, targets)
```

### Remarks

For each target, the operation reads the target name and X/Y source paths from the numeric file and adds the resulting curve to this chart.
