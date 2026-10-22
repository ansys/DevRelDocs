# Class Export
<a id="VM_API_Post_Operations_Export"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

Provides operations for exporting result data from the active Postprocessor view.

```csharp
public static class Export
```

## Methods

 [ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.API.Post.Operations.Export.ExportContourResultToFile.md\#VM\_API\_Post\_Operations\_Export\_ExportContourResultToFile\_System\_String\_System\_String\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Boolean\_VM\_Models\_ContourMappingType\_System\_String\_VM\_Models\_AnalysisResultType\_VM\_Models\_FileFormatType\_)

Exports contour results for selected entities from an active [`IOperationsAnimation`](VM.Operations.Post.Interfaces.IOperationsAnimation.md) to a file.

For a complete operations, see [Operation API Example - Export Contour Result To File](../document/operation-api/example/example_export_for_operation_api.md#export-contour-result-to-file).

With `TXT`, the created file is a text table whose column separator is chosen from the file extension of <code class="paramref">resultFilePath</code>. It takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27,1
! Number of Step
251
! Number of Targets
1
! FEBody_01/Top Stress/X
! Node ID
1,2,3,4,5,...
0
-9.82423831175083E-09,-5.87715014432888E-08,9.87900534710207E-08,...
0.0021
-9.82423831175083E-09,-5.87715014432888E-08,9.87900534710207E-08,...
...
```

The first two header lines report the product title and the `! File Version` label, and the row under that label holds the exported assembly's major and minor version numbers separated by the same column separator. `! Number of Step` is followed by the exported frame count, and `! Number of Targets` is followed by the exported entity count.

For each target, `! {target}/{characteristic}/{component}` names the exported data, and the label line and rows that follow it depend on <code class="paramref">contourMappingType</code>.

- `FENode` writes `! Node ID` followed by one row listing every node ID of the target.
- `FEElement` writes `! Element ID` followed by one row listing every element ID of the target.
- `FEElementNode` writes `! Element Node ID` followed by one row listing every element ID of the target, then `! Nodes per Element` followed by one row listing the node count of each of those elements in the same order.
- `FEMaterial` has no dedicated identifier-row branch in this method.
- `BeamGroup`, `Contact`, `ChainedSystem`, `Usersubroutine` writes `! Body ID` followed by one comment line holding the target's index, with no separate identifier row.

Each following group of rows repeats for one exported frame. The first row is that frame's time, followed by one row per target named in <code class="paramref">targetEntities</code>, and each of those rows holds one contour value per identifier in the same column order.

A `.txt` extension is written as a tab-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27	1
! Number of Step
251
! Number of Targets
1
! FEBody_01/Top Stress/X
! Node ID
1	2	3	4	5	...
0
-9.82423831175083E-09	-5.87715014432888E-08	9.87900534710207E-08	...
0.0021
-9.82423831175083E-09	-5.87715014432888E-08	9.87900534710207E-08	...
...
```

With `BINARY`, the file has none of the header, identifier, or time rows. It stores only the contour values as consecutive raw 8-byte doubles, written frame by frame in the same identifier order used by the text table.

<a href="/lib/VM.API.Post.Operations.Export.md" download="VM.API.Post.Operations.Export.md">Download this page as Markdown</a>
