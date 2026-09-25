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

 [CreateVector\(string, string, string\)](VM.Post.API.OutputReader.OutputReader.CreateVector.md\#VM\_Post\_API\_OutputReader\_OutputReader\_CreateVector\_System\_String\_System\_String\_System\_String\_)

Creates a vector definition for a vector-displayable entity and characteristic path.

 [ExecuteSoundPressureAnalysis\(IList<string\>, IList<double\[\]\>, double, double, double, double, double, double, double, double, bool\)](VM.Post.API.OutputReader.OutputReader.ExecuteSoundPressureAnalysis.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExecuteSoundPressureAnalysis\_System\_Collections\_Generic\_IList\_System\_String\_\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_System\_Boolean\_)

Calculates sound-pressure curves for selected finite-element bodies and microphone positions.

 [ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters, uint\[\]\)](VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportAcousticRawDataToFile\_System\_String\_System\_String\_VM\_Models\_Post\_BehaviorType\_VM\_Models\_Post\_ChartMathLib\_FFTParameters\_System\_UInt32\_\_\_)

Exports acoustic raw data to a file.

 [ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters\)](VM.Post.API.OutputReader.OutputReader.ExportAcousticRawDataToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportAcousticRawDataToFile\_System\_String\_System\_String\_VM\_Models\_Post\_BehaviorType\_VM\_Models\_Post\_ChartMathLib\_FFTParameters\_)

Exports acoustic raw data to a file.

 [ExportContourResultToFile\(string, FileMode, IList<int\>, string, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportContourResultToFile\_System\_String\_System\_IO\_FileMode\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_String\_VM\_Models\_ContourMappingType\_System\_String\_VM\_Models\_AnalysisResultType\_VM\_Models\_FileFormatType\_)

Exports contour results to a file.

 [ExportContourResultToFile\(string, FileMode, IList<int\>, IList<string\>, ContourMappingType, string, AnalysisResultType, FileFormatType\)](VM.Post.API.OutputReader.OutputReader.ExportContourResultToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportContourResultToFile\_System\_String\_System\_IO\_FileMode\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_String\_\_VM\_Models\_ContourMappingType\_System\_String\_VM\_Models\_AnalysisResultType\_VM\_Models\_FileFormatType\_)

Exports contour results to a file.

 [ExportMarkerToFile\(string, int\[\], IResultMarker\[\]\)](VM.Post.API.OutputReader.OutputReader.ExportMarkerToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportMarkerToFile\_System\_String\_System\_Int32\_\_\_VM\_Models\_Post\_IResultMarker\_\_\_)

Exports marker results to a file.

 [ExportModalBodyRawDataToFile\(string, string, bool, bool\)](VM.Post.API.OutputReader.OutputReader.ExportModalBodyRawDataToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportModalBodyRawDataToFile\_System\_String\_System\_String\_System\_Boolean\_System\_Boolean\_)

Exports raw data about the FE modal body to a file.

 [ExportVectorDisplayToFile\(string, int\[\], IEnumerable<object\>, bool, bool, bool, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.ExportVectorDisplayToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportVectorDisplayToFile\_System\_String\_System\_Int32\_\_\_System\_Collections\_Generic\_IEnumerable\_System\_Object\_\_System\_Boolean\_System\_Boolean\_System\_Boolean\_VM\_Models\_AnalysisResultType\_)

Exports vector results to a file.

 [ExportVectorDisplayToFile\(string, int\[\], string, string, bool, bool, bool, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.ExportVectorDisplayToFile.md\#VM\_Post\_API\_OutputReader\_OutputReader\_ExportVectorDisplayToFile\_System\_String\_System\_Int32\_\_\_System\_String\_System\_String\_System\_Boolean\_System\_Boolean\_System\_Boolean\_VM\_Models\_AnalysisResultType\_)

Exports vector results to a file.

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

 [GetContourResult\(IList<int\>, IList<string\>, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.GetContourResult.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetContourResult\_System\_Collections\_Generic\_IList\_System\_Int32\_\_System\_Collections\_Generic\_IList\_System\_String\_\_VM\_Models\_ContourMappingType\_System\_String\_System\_Action\_System\_Int32\_System\_Collections\_Generic\_IList\_System\_Double\_\_\_\_\_VM\_Models\_AnalysisResultType\_)

Reads contour values for multiple entities and invokes a callback for each requested state.

 [GetCurves\(PlotParameters\)](VM.Post.API.OutputReader.OutputReader.GetCurves.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetCurves\_VM\_Models\_OutputReader\_PlotParameters\_)

Gets curve samples described by [`PlotParameters`](VM.Models.OutputReader.PlotParameters.md).

For a complete operations, see [Result File Reader API Example - Get Curve](../document/result-file-reader/example/example_result_file_reader.md#get-curve).

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

 [GetVector\(string, string, AnalysisResultType\)](VM.Post.API.OutputReader.OutputReader.GetVector.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetVector\_System\_String\_System\_String\_VM\_Models\_AnalysisResultType\_)

Gets vector results for a target entity, characteristic path, and analysis result type.

 [GetVectorDisplayCharacteristics\(string\)](VM.Post.API.OutputReader.OutputReader.GetVectorDisplayCharacteristics.md\#VM\_Post\_API\_OutputReader\_OutputReader\_GetVectorDisplayCharacteristics\_System\_String\_)

Gets vector-display characteristic names available for an entity identified by `entityName`.

 [InterpolationAkimaSpline\(double\[\], double\[\], int, int, double, double\)](VM.Post.API.OutputReader.OutputReader.InterpolationAkimaSpline.md\#VM\_Post\_API\_OutputReader\_OutputReader\_InterpolationAkimaSpline\_System\_Double\_\_\_System\_Double\_\_\_System\_Int32\_System\_Int32\_System\_Double\_System\_Double\_)

Builds interpolated points from X and Y arrays with the Akima spline method.

 [RemoveCoordinateSystem\(string\)](VM.Post.API.OutputReader.OutputReader.RemoveCoordinateSystem.md\#VM\_Post\_API\_OutputReader\_OutputReader\_RemoveCoordinateSystem\_System\_String\_)

Removes a user-created coordinate-system marker identified by `name`.
