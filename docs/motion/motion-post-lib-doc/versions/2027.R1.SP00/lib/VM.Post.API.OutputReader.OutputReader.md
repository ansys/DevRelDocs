# Class OutputReader
<a id="VM_Post_API_OutputReader_OutputReader"></a>

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

Opens Motion result files and provides access to their result data.

```csharp
public class OutputReader : MarshalByRefObject
```

## Constructors

 [OutputReader\(string\)](VM.Post.API.OutputReader.OutputReader.\-ctor.md\#VM\_Post\_API\_OutputReader\_OutputReader\_\_ctor\_System\_String\_)

Initializes a new instance of the `OutputReader` class, used to open the result file.

## Properties

 [Path](VM.Post.API.OutputReader.OutputReader.Path.md\#VM\_Post\_API\_OutputReader\_OutputReader\_Path)

Gets the file path to the Ansys Motion result file (`.dfr`).

 [Version](VM.Post.API.OutputReader.OutputReader.Version.md\#VM\_Post\_API\_OutputReader\_OutputReader\_Version)

Gets the product version.

## Methods

 [Close\(\)](VM.Post.API.OutputReader.OutputReader.Close.md\#VM\_Post\_API\_OutputReader\_OutputReader\_Close)

Closes `OutputReader`.

 [CreateCoordinateSystem\(string, string\)](VM.Post.API.OutputReader.OutputReader.CreateCoordinateSystem.md\#VM\_Post\_API\_OutputReader\_OutputReader\_CreateCoordinateSystem\_System\_String\_System\_String\_)

Creates a coordinate-system marker in the Dynamics analysis result.

For a complete operations, see [Result File Reader API Example - Create a Coordinate System](../document/result-file-reader/example/example_coordinate_system_for_result_file_reader_api.md#create-a-coordinate-system).

 [CreateVector\(string, string, string\)](VM.Post.API.OutputReader.OutputReader.CreateVector.md\#VM\_Post\_API\_OutputReader\_OutputReader\_CreateVector\_System\_String\_System\_String\_System\_String\_)

Creates a vector definition for a vector-displayable entity and characteristic path.

For a complete operations, see [Result File Reader API Example - Export Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#export-vector).

 [ExecuteSoundPressureAnalysis\(IList<string\>, IList<double\[\]\>, double, double, double, double, double, double, double, double, bool\)](VM.Post.API.OutputReader.OutputReader.ExecuteSoundPressureAnalysis.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExecuteSoundPressureAnalysis\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Boolean\_)

Calculates sound-pressure curves for selected finite-element bodies and microphone positions.

 [ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters, uint\[\]\)](VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportAcousticRawDataToFile\_System\_String\_System\_String\_VM\_Models\_Post\_BehaviorType\_VM\_Models\_Post\_ChartMathLib\_FFTParameters\_System\_UInt32\_\_\_)

Exports acoustic raw data to a file.

The created file is a binary layout with a header block, a frequency array, then one data block per selected node.

The header holds:
- the selected node count as a 4-byte integer
- the frequency bin count as a 4-byte integer

The frequency array follows next, with one 8-byte value per frequency bin.

Each node block holds:
- the node ID as a 4-byte integer
- its X, Y, and Z position as three 8-byte values
- the X, Y, and Z axis Fast Fourier Transform (FFT) spectrum, in that order, with one real and one imaginary 8-byte value pair per frequency bin

The FFT spectrum for each node is calculated from <code class="paramref">behaviorType</code> using the settings in <code class="paramref">parameters</code>.

 [ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters\)](VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportAcousticRawDataToFile\_System\_String\_System\_String\_VM\_Models\_Post\_BehaviorType\_VM\_Models\_Post\_ChartMathLib\_FFTParameters\_)

Exports acoustic raw data to a file.

The created file uses the same binary layout as [`ExportAcousticRawDataToFile(string, string, BehaviorType, FFTParameters, uint[])`](VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md).

 [ExportContourResultToFile\(string, FileMode, IList<int\>, string, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportContourResultToFile\_System\_String\_System\_IO\_FileMode\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_String\_VM\_Models\_ContourMappingType\_System\_String\_VM\_Models\_AnalysisResultType\_VM\_Models\_FileFormatType\_)

Exports contour results to a file.

For a complete operations, see [Result File Reader API Example - Export Contour](../document/result-file-reader/example/example_contour_for_result_file_reader_api.md#export-contour).

This overload defaults <code class="paramref">formatType</code> to `BINARY`, unlike the Operation API export, which defaults to text. The exported text and binary formats are the same as the Operation API's contour export. For the file format, see [ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.API.Post.Operations.Export.ExportContourResultToFile.md).

 [ExportContourResultToFile\(string, FileMode, IList<int\>, IList<string\>, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportContourResultToFile\_System\_String\_System\_IO\_FileMode\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_String\_\_VM\_Models\_ContourMappingType\_System\_String\_VM\_Models\_AnalysisResultType\_VM\_Models\_FileFormatType\_)

Exports contour results to a file.

This overload defaults <code class="paramref">formatType</code> to `BINARY`, unlike the Operation API export, which defaults to text. The exported text and binary formats are the same as the Operation API's contour export. For the file format, see [ExportContourResultToFile\(string, string, IList<string\>, bool, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.API.Post.Operations.Export.ExportContourResultToFile.md).

 [ExportMarkerToFile\(string, int\[\], IResultMarker\[\]\)](VM.Post.API.OutputReader.OutputReader.ExportMarkerToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportMarkerToFile\_System\_String\_System\_Int32\_\_\_VM\_Models\_Post\_IResultMarker\_\_\_)

Exports marker results to a file.

The created file is always a text table, and its column separator is chosen from the file extension of <code class="paramref">filePath</code>. It takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
25,0
! Number of Step
251
! Number of Targets
1
! ^INITIALMARKER
! Components
! X,Y,Z,f[3],g[3],h[3]
0
0,0,0,1,0,0,0,1,0,0,0,1
0.0021
...
```

The first two header lines report the product title and the `! File Version` label. They are followed by the version-number line, then `! Number of Step` with the exported state count, and then `! Number of Targets` with the exported marker count.

For each marker, `! {FullName}` names the exported data, and `! Components` precedes the column-name row `! X,Y,Z,f[3],g[3],h[3]`. `X`, `Y`, and `Z` are the marker's position, and `f`, `g`, and `h` are its three orientation axes, each written as 3 values.

After the header, the file repeats one block per exported state. Each state block begins with a single line that holds the state's time value, and that time line is followed by one value line per marker, listing the 12 values named after `! Components`, in the same order, for that marker at that state.

A `.txt` path, or a path with no extension, is written as a tab-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
25	0
! Number of Step
251
! Number of Targets
1
! ^INITIALMARKER
! Components
! X	Y	Z	f[3]	g[3]	h[3]
0
0	0	0	1	0	0	0	1	0	0	0	1
0.0021
...
```

The header block and per-state result rows are identical to the `.csv` form, and only the separator differs, using a tab character between columns. A path with no extension is saved without adding `.txt` to the file name.

 [ExportModalBodyRawDataToFile\(string, string, bool, bool\)](VM.Post.API.OutputReader.OutputReader.ExportModalBodyRawDataToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportModalBodyRawDataToFile\_System\_String\_System\_String\_System\_Boolean\_System\_Boolean\_)

Exports raw data about the FE modal body to a file.

 [ExportVectorDisplayToFile\(string, int\[\], IEnumerable<object\>, bool, bool, bool, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.ExportVectorDisplayToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportVectorDisplayToFile\_System\_String\_System\_Int32\_\_\_System\_Collections\_Generic\_IEnumerable\_System\_Object\_\_System\_Boolean\_System\_Boolean\_System\_Boolean\_VM\_Models\_AnalysisResultType\_)

Exports vector results to a file.

For a complete operations, see [Result File Reader API Example - Export Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#export-vector).

The created file is always a text table, and its column separator is chosen from the file extension of <code class="paramref">filepath</code>. It takes one of the following forms.

A `.csv` path is written as a comma-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27,1
! Number of Step
251
! Number of Targets
1
! TJ_01/Base Force
! Components
! Position X,Position Y,Position Z,Vector Magnitude,Vector X,Vector Y,Vector Z
0
1
0,214.28284,12.5,0.00768469731232557,-0.00767627450122671,0,0.000359697878615526
0.0021
...
```

The first two header lines report the product title and the `! File Version` label. They are followed by the version-number line, then `! Number of Step` with the exported state count, and then `! Number of Targets` with the exported target count.

For each target, `! {target}/{characteristic}` names the exported data, and `! Components` precedes the column-name row. That column-name row lists the columns selected by <code class="paramref">isIncludePosition</code>, <code class="paramref">includeMagnitude</code>, and <code class="paramref">includeVector</code>, in the order `Position X/Y/Z`, then `Vector Magnitude`, then `Vector X/Y/Z`.

After the header, the file repeats one block per exported state.

Each state block begins with a single line that holds the state's time value.

The time line is then followed by one sub-block per target. A target sub-block begins with a single line that holds the number of data points for that target at that state, and that count line is followed by exactly that many value lines. Each value line holds one data point, with one value per column listed after `! Components`, in the same order.

In the example above, the time line `0` is followed by the count line `1`, which means the target has one data point at that state, so exactly one value line follows before the next state's time line `0.0021`.

A `.txt` path is written as a tab-separated table.

```text
! Ansys Motion Postprocessor [Version]
! File Version
27	1
! Number of Step
251
...
```

The header block, component rows, and per-state result rows are identical to the `.csv` form, and only the separator differs, using a tab character between columns.

 [ExportVectorDisplayToFile\(string, int\[\], string, string, bool, bool, bool, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.ExportVectorDisplayToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportVectorDisplayToFile\_System\_String\_System\_Int32\_\_\_System\_String\_System\_String\_System\_Boolean\_System\_Boolean\_System\_Boolean\_VM\_Models\_AnalysisResultType\_)

Exports vector results to a file.

For a complete operations, see [Result File Reader API Example - Export Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#export-vector).

The created file uses the same text table format as [`ExportVectorDisplayToFile(string, int[], IEnumerable<object>, bool, bool, bool, AnalysisResultType)`](VM.Post.API.OutputReader.OutputReader.ExportVectorDisplayToFile.md).

 [GetAssemblyInfo\(AssemblyType\)](VM.Post.API.OutputReader.OutputReader.GetAssemblyInfo.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetAssemblyInfo\_VM\_Enums\_Post\_AssemblyType\_)

Gets assembly information filtered by [`AssemblyType`](VM.Enums.Post.AssemblyType.md).

 [GetBodies\(BodyType, bool\)](VM.Post.API.OutputReader.OutputReader.GetBodies.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetBodies\_VM\_Models\_Post\_BodyType\_System\_Boolean\_)

Gets body types and names matching the selected [`BodyType`](VM.Models.Post.BodyType.md).

 [GetBodiesNodeCount\(IList<string\>\)](VM.Post.API.OutputReader.OutputReader.GetBodiesNodeCount.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetBodiesNodeCount\_System\_Collections\_Generic\_IList\_System\_String\_\_)

Gets the total node count for body names selected in `OutputReader`.

 [GetConnectors\(string\)](VM.Post.API.OutputReader.OutputReader.GetConnectors.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetConnectors\_System\_String\_)

Gets connector type, action type, and name information associated with a body.

 [GetContourCharacteristics\(string, ContourMappingType, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.GetContourCharacteristics.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetContourCharacteristics\_System\_String\_VM\_Models\_ContourMappingType\_VM\_Models\_AnalysisResultType\_)

Gets contour characteristic names available for an entity and mapping type.

 [GetContourComponents\(string, ContourMappingType, string, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.GetContourComponents.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetContourComponents\_System\_String\_VM\_Models\_ContourMappingType\_System\_String\_VM\_Models\_AnalysisResultType\_)

Gets contour component names available for an entity, mapping type, characteristic, and analysis result type.

 [GetContourResult\(IList<int\>, string, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.GetContourResult.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetContourResult\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_String\_VM\_Models\_ContourMappingType\_System\_String\_System\_Action\_System\_Int32\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_VM\_Models\_AnalysisResultType\_)

Reads contour values for one entity and invokes a callback for each requested state.

For a complete operations, see [Result File Reader API Example - Get Contour](../document/result-file-reader/example/example_contour_for_result_file_reader_api.md#get-contour).

 [GetContourResult\(IList<int\>, IList<string\>, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.GetContourResult.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetContourResult\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_String\_\_VM\_Models\_ContourMappingType\_System\_String\_System\_Action\_System\_Int32\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_VM\_Models\_AnalysisResultType\_)

Reads contour values for multiple entities and invokes a callback for each requested state.

 [GetCurves\(PlotParameters\)](VM.Post.API.OutputReader.OutputReader.GetCurves.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetCurves\_VM\_Models\_OutputReader\_PlotParameters\_)

Gets curve samples described by [`PlotParameters`](VM.Models.OutputReader.PlotParameters.md).

For a complete operations, see [Result File Reader API Example - Get Curve](../document/result-file-reader/example/example_curve_for_result_file_reader_api.md#get-curve).

 [GetEntities\(EntityType\)](VM.Post.API.OutputReader.OutputReader.GetEntities.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetEntities\_VM\_Models\_Post\_EntityType\_)

Gets result entities classified by [`EntityType`](VM.Models.Post.EntityType.md).

 [GetFlexibleBodyReferenceFrame\(string, bool\)](VM.Post.API.OutputReader.OutputReader.GetFlexibleBodyReferenceFrame.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetFlexibleBodyReferenceFrame\_System\_String\_System\_Boolean\_)

Gets position and orientation values for a flexible body across result states.

 [GetFrequenciesInfoArray\(\)](VM.Post.API.OutputReader.OutputReader.GetFrequenciesInfoArray.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetFrequenciesInfoArray)

Gets frequency information for eigenvalue result data.

 [GetGeometryInfo\(string\)](VM.Post.API.OutputReader.OutputReader.GetGeometryInfo.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetGeometryInfo\_System\_String\_)

Gets the primary geometry data for the body identified by `target` with `OutputReader`.

 [GetGeometryInfoArray\(\)](VM.Post.API.OutputReader.OutputReader.GetGeometryInfoArray.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetGeometryInfoArray)

Gets the body entities that contain geometry data with `OutputReader`.

 [GetGeometryNodes\(string\)](VM.Post.API.OutputReader.OutputReader.GetGeometryNodes.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetGeometryNodes\_System\_String\_)

Gets node coordinate values for the body identified by `target` with `OutputReader`.

 [GetMarkerInfo\(string\)](VM.Post.API.OutputReader.OutputReader.GetMarkerInfo.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetMarkerInfo\_System\_String\_)

Gets marker values for the marker identified by `name` across the available result states.

 [GetMarkerPosition\(IList<string\>\)](VM.Post.API.OutputReader.OutputReader.GetMarkerPosition.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetMarkerPosition\_System\_Collections\_Generic\_IList\_System\_String\_\_)

Gets position values for markers identified by `names`.

 [GetModalModeCount\(string\)](VM.Post.API.OutputReader.OutputReader.GetModalModeCount.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetModalModeCount\_System\_String\_)

Gets the selected mode count for a modal body identified by `target`.

 [GetNamedSelections\(\)](VM.Post.API.OutputReader.OutputReader.GetNamedSelections.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetNamedSelections)

Gets named selections available through `OutputReader`.

 [GetOuterface\(string\)](VM.Post.API.OutputReader.OutputReader.GetOuterface.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetOuterface\_System\_String\_)

Gets visible outer-face triangle connectivity for the body identified by `target` with `OutputReader`.

 [GetPlotCharacteristics\(string\)](VM.Post.API.OutputReader.OutputReader.GetPlotCharacteristics.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetPlotCharacteristics\_System\_String\_)

Gets characteristic names available for an entity identified by `entityName`.

 [GetPlotComponents\(string, string\)](VM.Post.API.OutputReader.OutputReader.GetPlotComponents.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetPlotComponents\_System\_String\_System\_String\_)

Gets component names available for an entity and characteristic.

 [GetPreviousBodiesNodeCount\(IList<string\>, string\)](VM.Post.API.OutputReader.OutputReader.GetPreviousBodiesNodeCount.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetPreviousBodiesNodeCount\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_String\_)

Gets the node count for selected bodies that occur before `target` with `OutputReader`.

 [GetPrimaryAnalysisResultType\(\)](VM.Post.API.OutputReader.OutputReader.GetPrimaryAnalysisResultType.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetPrimaryAnalysisResultType)

Gets the type of the primary analysis result in the opened result file.

 [GetReferenceTimeArray\(\)](VM.Post.API.OutputReader.OutputReader.GetReferenceTimeArray.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetReferenceTimeArray)

Gets reference times in the order reported by the opened result file.

 [GetStateIDArray\(\)](VM.Post.API.OutputReader.OutputReader.GetStateIDArray.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetStateIDArray)

Gets state identifiers in the order reported by the opened result file.

 [GetUnits\(\)](VM.Post.API.OutputReader.OutputReader.GetUnits.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetUnits)

Gets the unit name and scale factor for each result dimension.

 [GetUnitsFromModeShapeFile\(string\)](VM.Post.API.OutputReader.OutputReader.GetUnitsFromModeShapeFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetUnitsFromModeShapeFile\_System\_String\_)

Gets unit information stored in the mode-shape file for a modal body.

 [GetVector\(string, string\)](VM.Post.API.OutputReader.OutputReader.GetVector.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetVector\_System\_String\_System\_String\_)

Gets vector results for a target entity and characteristic path using Dynamics analysis data.

For a complete operations, see [Result File Reader API Example - Get Vector](../document/result-file-reader/example/example_vector_for_result_file_reader_api.md#get-vector).

 [GetVector\(string, string, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.GetVector.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetVector\_System\_String\_System\_String\_VM\_Models\_AnalysisResultType\_)

Gets vector results for a target entity, characteristic path, and analysis result type.

 [GetVectorDisplayCharacteristics\(string\)](VM.Post.API.OutputReader.OutputReader.GetVectorDisplayCharacteristics.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetVectorDisplayCharacteristics\_System\_String\_)

Gets vector-display characteristic names available for an entity identified by `entityName`.

 [InterpolationAkimaSpline\(double\[\], double\[\], int, int, double, double\)](VM.Post.API.OutputReader.OutputReader.InterpolationAkimaSpline.md\#VM\_Post\_API\_OutputReader\_OutputReader\_InterpolationAkimaSpline\_System\_Double\_\_\_System\_Double\_\_\_System\_Int32\_System\_Int32\_System\_Double\_System\_Double\_)

Builds interpolated points from X and Y arrays with the Akima spline method.

 [RemoveCoordinateSystem\(string\)](VM.Post.API.OutputReader.OutputReader.RemoveCoordinateSystem.md\#VM\_Post\_API\_OutputReader\_OutputReader\_RemoveCoordinateSystem\_System\_String\_)

Removes a user-created coordinate-system marker identified by `name`.
