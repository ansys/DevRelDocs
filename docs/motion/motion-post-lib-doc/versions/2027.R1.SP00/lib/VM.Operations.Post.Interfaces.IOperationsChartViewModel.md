# Interface IOperationsChartViewModel
<a id="VM_Operations_Post_Interfaces_IOperationsChartViewModel"></a>

Namespace: [VM.Operations.Post.Interfaces](VM.Operations.Post.Interfaces.md)  
Assembly: VM.Operations.Post.dll  

Provides legend access and numeric-file import operations for a chart view.

```csharp
public interface IOperationsChartViewModel : IView, IHasGuid
```

## Properties

 [Legend](VM.Operations.Post.Interfaces.IOperationsChartViewModel.Legend.md\#VM\_Operations\_Post\_Interfaces\_IOperationsChartViewModel\_Legend)

Gets [`IOperationsLegendModifier`](VM.Operations.Post.Interfaces.IOperationsLegendModifier.md) used by this chart.

## Methods

 [ImportNumeric\(string, List<INumericParameter\>\)](VM.Operations.Post.Interfaces.IOperationsChartViewModel.ImportNumeric.md\#VM\_Operations\_Post\_Interfaces\_IOperationsChartViewModel\_ImportNumeric\_System\_String\_System\_Collections\_Generic\_List\_VM\_ViewModels\_Post\_INumericParameter\_\_)

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

<a href="/lib/VM.Operations.Post.Interfaces.IOperationsChartViewModel.md" download="VM.Operations.Post.Interfaces.IOperationsChartViewModel.md">Download this page as Markdown</a>
