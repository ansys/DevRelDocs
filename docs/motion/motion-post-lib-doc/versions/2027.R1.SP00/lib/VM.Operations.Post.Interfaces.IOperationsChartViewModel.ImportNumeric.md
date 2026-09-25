# Method ImportNumeric
<a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_ImportNumeric_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

## <a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel_ImportNumeric_System_String_System_Collections_Generic_List_VM_ViewModels_Post_INumericParameter__"></a> ImportNumeric\(string, List<INumericParameter\>\)

Imports curve data from a numeric file and adds the resulting curves to the chart.

```csharp
void ImportNumeric(string filepath, List<INumericParameter> targets)
```

### Parameters

`filepath` string

Path to a supported numeric file. Supported extensions are `.txt`, `.csv`, `.out`, and `.rsp`.

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
# PATH : path to the folder where exported files are written
# NUMERIC_INPUT_FILENAME : input filename for the numeric curve data
numeric_file_path = os.path.join(PATH, NUMERIC_INPUT_FILENAME)
chart.ImportNumeric(numeric_file_path, targets)
```

### Remarks

For each target, the operation reads the target name and X/Y source paths from the numeric file and adds the resulting curve to this chart.
