# Class OutputReader

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

```csharp
public class OutputReader : IOutputReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OutputReader](VM.Post.API.OutputReader.OutputReader.md)

#### Implements

IOutputReader

## Constructors

### OutputReader\(string\)

This is also used to open the result file using the constructor.​

```csharp
public OutputReader(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of dfr file

### OutputReader\(ResultDocument\)

This is also used to open the result file using the constructor.​

```csharp
public OutputReader(ResultDocument document)
```

#### Parameters

`document` ResultDocument

The instance of document

## Properties

### Path

File path to the Ansys Motion result file (.dfr). This can be a relative or absolute path.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Version

The Product version

```csharp
public string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Close\(\)

Close result file.​

```csharp
public void Close()
```

### CreateCoordinateSystem\(string, string\)

Create marker.

```csharp
public GeneralMarker CreateCoordinateSystem(string newName, string parentFullName = "Ground")
```

#### Parameters

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the marker.

`parentFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of parent.

#### Returns

 GeneralMarker

### ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters, uint\[\]\)

Export acoustic raw data to a file.

```csharp
public void ExportAcousticRawDataToFile(string filepath, string fullName, BehaviorType behaviorType, FFTParameters parameters, uint[] nodeIDs)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.​

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.​

`behaviorType` BehaviorType

Specifies the type of the target for Displacement, Velocity, Acceleration.​

`parameters` FFTParameters

For a description of parameter, see FFTParameters in the API Reference.​

`nodeIDs` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

Specifies Id array of the node.​

### ExportAcousticRawDataToFile\(string, string, BehaviorType, FFTParameters\)

Export acoustic raw data to a file.​

```csharp
public void ExportAcousticRawDataToFile(string filepath, string fullName, BehaviorType behaviorType, FFTParameters parameters)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.​

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.​

`behaviorType` BehaviorType

Displacement, Velocity, Acceleration​.

`parameters` FFTParameters

For a description of parameter, see FFTParameters in the API Reference.​

### ExportContourResultToFile\(string, FileMode, IList<int\>, string, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Export contour results to a file.​

```csharp
public void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, string fullName, ContourMappingType type, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

#### Parameters

`resultpath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.​

`mode` [FileMode](https://learn.microsoft.com/dotnet/api/system.io.filemode)

Specifies how the operating system should open a file.​

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the id list of the states to time.​

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the names of the entities.​

`type` ContourMappingType

Specifies the type of the target for displaying contour.​

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the path of result to save.​

`analysisResultType` AnalysisResultType

Specifies the type of analysis result type for displaying contour.​

`formatType` FileFormatType

Specifies a file format type.​

### ExportContourResultToFile\(string, FileMode, IList<int\>, IList<string\>, ContourMappingType, string, AnalysisResultType, FileFormatType\)

Export contour results to a file.​

```csharp
public void ExportContourResultToFile(string resultpath, FileMode mode, IList<int> stateids, IList<string> fullNames, ContourMappingType type, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics, FileFormatType formatType = FileFormatType.BINARY)
```

#### Parameters

`resultpath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.​

`mode` [FileMode](https://learn.microsoft.com/dotnet/api/system.io.filemode)

Specifies how the operating system should open a file.​

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the id list of the states to time.​

`fullNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies The name of an entity.​

`type` ContourMappingType

Specifies the type of a target for displaying contour.​

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies The path of result to save.​

`analysisResultType` AnalysisResultType

Specifies the type of analysis result type for displaying contour.​

`formatType` FileFormatType

Specifies a file format type.​

### ExportMarkerToFile\(string, int\[\], IResultMarker\[\]\)

Export marker results to a file.

```csharp
public void ExportMarkerToFile(string filePath, int[] stateids, IResultMarker[] markers)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.​

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

Specifies the id list of the state to time.​

`markers` IResultMarker\[\]

Specifies the list of the entities.​

### ExportModalBodyRawDataToFile\(string, string, bool, bool\)

Export raw data about FE modal body to a file.​

```csharp
public void ExportModalBodyRawDataToFile(string filePath, string target, bool includeGeometry, bool includeModeShape)
```

#### Parameters

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.​

`includeGeometry` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Include geometry.​

`includeModeShape` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Include modeshape.​

### ExportVectorDisplayToFile\(string, int\[\], IEnumerable<object\>, bool, bool, bool, AnalysisResultType\)

Export vector results to a file.

```csharp
public void ExportVectorDisplayToFile(string filepath, int[] stateids, IEnumerable<object> targets, bool isIncludePosition, bool includeVector, bool includeMagnitude, AnalysisResultType analysisResultType)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the file path to export.​

`stateids` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

Specifies the id list of the state to time.​

`targets` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

Specifies the list of  the entity.​

`isIncludePosition` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

include position.​

`includeVector` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

include vector.​

`includeMagnitude` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

include magnitude.​

`analysisResultType` AnalysisResultType

Specifies the type of analysis result type.​

### GetBodies\(BodyType, bool\)

Get the types and the names of the bodies. ​

```csharp
public IEnumerable<(BodyType, string)> GetBodies(BodyType type, bool includeDuymmy = false)
```

#### Parameters

`type` BodyType

NODAL, EF_NODAL, EF_MODAL, MODAL, RIGID, GROUND​

`includeDuymmy` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

include dummy​

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\(BodyType, [string](https://learn.microsoft.com/dotnet/api/system.string)\)\>

In the list, the report value are types and names of the bodies.​

### GetBodiesNodeCount\(IList<string\>\)

Get the count of nodes for bodies

```csharp
public long GetBodiesNodeCount(IList<string> bodyNames)
```

#### Parameters

`bodyNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the name list of the entities.​

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

The report value is the count of nodes for bodies​

### GetConnectors\(string\)

Get the information of the connectors such as joint, force and contact

```csharp
public IList<(ConnectorType, ActionType, string)> GetConnectors(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the body.​

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<\(ConnectorType, ActionType, [string](https://learn.microsoft.com/dotnet/api/system.string)\)\>

In the list, the report value are connector type and action type and names of the connectors such as joint, force and contact.​

### GetContourResult\(IList<int\>, string, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)

Export contour results to a file.​

```csharp
public void GetContourResult(IList<int> stateids, string fullName, ContourMappingType type, string path, Action<int, IList<double[]>> fncallback, AnalysisResultType analysisType = AnalysisResultType.Dynamics)
```

#### Parameters

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the id list of the states to time.​

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies The name of an entity.​

`type` ContourMappingType

Specifies the type of a target for displaying contour.​

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies The path of result to save.​

`fncallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

Specifies the callback function for get contour result by report step.​

`analysisType` AnalysisResultType

Specifies the type of analysis result type for displaying contour.​

### GetContourResult\(IList<int\>, IList<string\>, ContourMappingType, string, Action<int, IList<double\[\]\>\>, AnalysisResultType\)

Export contour results to a file.​

```csharp
public void GetContourResult(IList<int> stateids, IList<string> fullNames, ContourMappingType type, string path, Action<int, IList<double[]>> fncallback, AnalysisResultType analysisType = AnalysisResultType.Dynamics)
```

#### Parameters

`stateids` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

Specifies the id list of the states to time.​

`fullNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies The name of an entity.​

`type` ContourMappingType

Specifies the type of a target for displaying contour.​

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies The path of result to save.​

`fncallback` [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

Specifies the callback function for get contour result by report step.​

`analysisType` AnalysisResultType

Specifies the type of analysis result type for displaying contour.​

### GetCurves\(PlotParameters\)

Get plot data.

```csharp
public IDictionary<string, Point2D[]> GetCurves(PlotParameters parameters)
```

#### Parameters

`parameters` PlotParameters

For a description of parameter, see PlotParameters in the API Reference.

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), Point2D\[\]\>

The name of plot, List of X and Y data point of plot

### GetFlexibleBodyReferenceFrame\(string\)

Get reference frame of FE body

```csharp
public IList<double[]> GetFlexibleBodyReferenceFrame(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

The flexible body name.

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

Postion and orientation array with the number of states

### GetFrequenciesInfoArray\(\)

```csharp
public IList<(string path, double time, double[] frequencies)> GetFrequenciesInfoArray()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string) [path](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double,system.double\[\]\-.path), [double](https://learn.microsoft.com/dotnet/api/system.double) [time](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double,system.double\[\]\-.time), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\] [frequencies](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,system.double,system.double\[\]\-.frequencies)\)\>

### GetGeometryInfo\(string\)

Get geometry information

```csharp
public IDataPart GetGeometryInfo(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of entity.​

#### Returns

 IDataPart

The report value is a geometry information.​

### GetGeometryInfoArray\(\)

Get geometry information Array

```csharp
public IEnumerable<BodyBase> GetGeometryInfoArray()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BodyBase\>

The report value is Enumerable.​

### GetGeometryNodes\(string\)

Get nodes of geometry

```csharp
public double[] GetGeometryNodes(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of entity.​

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

In the array, the report value is nodes of geometry​.

### GetMarkerInfo\(string\)

Get marker information
(position, orientation, velocity, angular velocity, acceleration, angular acceleration).

```csharp
public IList<double[]> GetMarkerInfo(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the marker.​

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

In the list, the report marker values from the start state to the end state are stored sequentially.​

### GetMarkerPosition\(IList<string\>\)

Get marker position.

```csharp
public IDictionary<string, IList<double[]>> GetMarkerPosition(IList<string> names)
```

#### Parameters

`names` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the list of the curve name to perform the operation.​

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

In the dictionary, the report marker positions value from the start state to the end state are stored sequentially.​

### GetModalModeCount\(string\)

Get the count of modes for FE modal body

```csharp
public int GetModalModeCount(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.​

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The report value is count of modes for FE modal body​

### GetNamedSelections\(\)

Get Named Selection Information

```csharp
public NamedSelection[] GetNamedSelections()
```

#### Returns

 NamedSelection\[\]

The report value is Enumerable.

### GetOuterface\(string\)

Get geometry connectivity of an outface

```csharp
public uint[] GetOuterface(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of entity.​

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

In the array, the report value is a geometry connectivity of an outface​

### GetPreviousBodiesNodeCount\(IList<string\>, string\)

Get the count of nodes for bodies.​

```csharp
public long GetPreviousBodiesNodeCount(IList<string> bodyNames, string target)
```

#### Parameters

`bodyNames` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Specifies the name list of the body.​

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of the entity.​

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

The report value is node count of the previous bodies.

### GetPrimaryAnalysisResultType\(\)

Get the type of primary analysis.

```csharp
public AnalysisResultType GetPrimaryAnalysisResultType()
```

#### Returns

 AnalysisResultType

Type of analysis.​

### GetReferenceTimeArray\(\)

Get report times of result.​

```csharp
public IList<double> GetReferenceTimeArray()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

In the list, the report time values from the start state to the end state are stored sequentially.​

### GetStateIDArray\(\)

Get id array of state

```csharp
public IList<int> GetStateIDArray()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

In the list, the report id values of state from the start state to the end state are stored sequentially.​

### GetUnits\(\)

Get units

```csharp
public Dictionary<string, KeyValuePair<string, double>> GetUnits()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

In the Dictionary, the units of result include type, unit and factor.​

### GetUnitsFromModeShapeFile\(string\)

Get unit information from dfmf file

```csharp
public Dictionary<string, KeyValuePair<string, double>> GetUnitsFromModeShapeFile(string target)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

Key is Dimension and Value is pair for unit string and scale factor

### GetVector\(string, string\)

Get vector results

```csharp
public IDictionary<string, IVectorDisplayAnimationData> GetVector(string target, string path)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of vector displayable entity

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies characteristc on vector display

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

Vector results

### GetVector\(string, string, AnalysisResultType\)

Get vector results

```csharp
public IDictionary<string, IVectorDisplayAnimationData> GetVector(string target, string path, AnalysisResultType analysisResultType = AnalysisResultType.Dynamics)
```

#### Parameters

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies the name of vector displayable entity

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

Specifies characteristc on vector display

`analysisResultType` AnalysisResultType

Specifies analysis result type on vector display

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), IVectorDisplayAnimationData\>

Vector results

### InterpolationAkimaSpline\(double\[\], double\[\], int, int, double, double\)

Get interpolate data series by using Akima spline method

```csharp
public (InterpolationErrorType, double[], double[]) InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt)
```

#### Parameters

`X` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

Specifies x array of plot data.​

`Y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

Specifies y array of plot data.​

`NoOfPnt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies the number of points.​

`NoOfDesiredPnt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Specifies the number of point desired.​

`StartPnt` [double](https://learn.microsoft.com/dotnet/api/system.double)

Specifies the start point for using curve on plot data.​

`EndPnt` [double](https://learn.microsoft.com/dotnet/api/system.double)

Specifies the end point for using curve on plot data.​

#### Returns

 \(InterpolationErrorType, [double](https://learn.microsoft.com/dotnet/api/system.double)\[\], [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\)

array of X and Y data point of plot​


