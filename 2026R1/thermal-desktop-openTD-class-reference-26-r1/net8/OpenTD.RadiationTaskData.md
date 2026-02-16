# <a id="OpenTD_RadiationTaskData"></a> Class RadiationTaskData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data describing a radiation task.

```csharp
public class RadiationTaskData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RadiationTaskData](OpenTD.RadiationTaskData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadiationTaskData__ctor"></a> RadiationTaskData\(\)

```csharp
public RadiationTaskData()
```

## Properties

### <a id="OpenTD_RadiationTaskData_AddAnalPropList"></a> AddAnalPropList

```csharp
public List<AdditionalRadiationTaskData> AddAnalPropList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)\>

### <a id="OpenTD_RadiationTaskData_AddNoneOutputFileNameOrCaseNameToDatabaseName"></a> AddNoneOutputFileNameOrCaseNameToDatabaseName

```csharp
public int AddNoneOutputFileNameOrCaseNameToDatabaseName { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_AdditionalBijSum"></a> AdditionalBijSum

```csharp
public double AdditionalBijSum { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_AdditionalBijSumExp"></a> AdditionalBijSumExp

```csharp
public ExpressionData AdditionalBijSumExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_AnalGroup"></a> AnalGroup

```csharp
public string AnalGroup { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_ApplyReciprocity"></a> ApplyReciprocity

```csharp
public int ApplyReciprocity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_AverageRayLengthFilename"></a> AverageRayLengthFilename

```csharp
public string AverageRayLengthFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_BijCutoff"></a> BijCutoff

```csharp
public double BijCutoff { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_BijCutoffExp"></a> BijCutoffExp

```csharp
public ExpressionData BijCutoffExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_BijSumRemainderNode"></a> BijSumRemainderNode

```csharp
public string BijSumRemainderNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_CalcNodesType"></a> CalcNodesType

```csharp
public int CalcNodesType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CalcPosType"></a> CalcPosType

```csharp
public int CalcPosType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CellSubdivisions"></a> CellSubdivisions

```csharp
public int CellSubdivisions { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CellSubdivisionsExp"></a> CellSubdivisionsExp

```csharp
public ExpressionData CellSubdivisionsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_CellSurfaces"></a> CellSurfaces

```csharp
public int CellSurfaces { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CellSurfacesExp"></a> CellSurfacesExp

```csharp
public ExpressionData CellSurfacesExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_CombineArray"></a> CombineArray

```csharp
public int CombineArray { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_DeleteDatabaseAfterOutputIsGenerated"></a> DeleteDatabaseAfterOutputIsGenerated

```csharp
public int DeleteDatabaseAfterOutputIsGenerated { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_DisabledTrackerHandles"></a> DisabledTrackerHandles

```csharp
public List<string> DisabledTrackerHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadiationTaskData_DoOverlapSurfaceCheck"></a> DoOverlapSurfaceCheck

```csharp
public int DoOverlapSurfaceCheck { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_EnableWaveLengthDepCalcs"></a> EnableWaveLengthDepCalcs

```csharp
public int EnableWaveLengthDepCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpin"></a> FastSpin

```csharp
public int FastSpin { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpinInclusive"></a> FastSpinInclusive

```csharp
public int FastSpinInclusive { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpinIncrement"></a> FastSpinIncrement

```csharp
public int FastSpinIncrement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpinIncrementExp"></a> FastSpinIncrementExp

```csharp
public ExpressionData FastSpinIncrementExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FastSpinStart"></a> FastSpinStart

```csharp
public double FastSpinStart { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_FastSpinStartExp"></a> FastSpinStartExp

```csharp
public ExpressionData FastSpinStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FastSpinStop"></a> FastSpinStop

```csharp
public double FastSpinStop { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_FastSpinStopExp"></a> FastSpinStopExp

```csharp
public ExpressionData FastSpinStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FastSpinSymbol"></a> FastSpinSymbol

```csharp
public string FastSpinSymbol { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_FastSpinUserList"></a> FastSpinUserList

```csharp
public List<double> FastSpinUserList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadiationTaskData_FfFilename"></a> FfFilename

```csharp
public string FfFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_FreeMolecularDataArray"></a> FreeMolecularDataArray

```csharp
public DimensionalList<CondPerArea> FreeMolecularDataArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### <a id="OpenTD_RadiationTaskData_FreeMolecularDataArrayMult"></a> FreeMolecularDataArrayMult

```csharp
public double FreeMolecularDataArrayMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_FreeMolecularDataArrayMultExp"></a> FreeMolecularDataArrayMultExp

```csharp
public ExpressionData FreeMolecularDataArrayMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FreeMolecularMult"></a> FreeMolecularMult

```csharp
public Dimensional<CondPerArea> FreeMolecularMult { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### <a id="OpenTD_RadiationTaskData_FreeMolecularMultExp"></a> FreeMolecularMultExp

```csharp
public ExpressionData FreeMolecularMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FreeMolecularOpticalProp"></a> FreeMolecularOpticalProp

```csharp
public string FreeMolecularOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_FreeMolecularTimeArray"></a> FreeMolecularTimeArray

```csharp
public DimensionalList<Time> FreeMolecularTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_FreeMolecularUseTimeVary"></a> FreeMolecularUseTimeVary

```csharp
public int FreeMolecularUseTimeVary { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_HeatrateAbsoluteOrFlux"></a> HeatrateAbsoluteOrFlux

```csharp
public int HeatrateAbsoluteOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_HeatrateSourceNode"></a> HeatrateSourceNode

```csharp
public string HeatrateSourceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HeatrateTimeArray"></a> HeatrateTimeArray

```csharp
public DimensionalList<Time> HeatrateTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HeatrateValue"></a> HeatrateValue

```csharp
public Dimensional<HeatRate> HeatrateValue { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### <a id="OpenTD_RadiationTaskData_HeatrateValueArray"></a> HeatrateValueArray

```csharp
public DimensionalList<HeatRate> HeatrateValueArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### <a id="OpenTD_RadiationTaskData_HeatrateValueExp"></a> HeatrateValueExp

```csharp
public ExpressionData HeatrateValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrAID"></a> HrAID

```csharp
public int HrAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_HrAIDExp"></a> HrAIDExp

```csharp
public ExpressionData HrAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrFilename"></a> HrFilename

```csharp
public string HrFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrPostLogic"></a> HrPostLogic

```csharp
public string HrPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrPreLogic"></a> HrPreLogic

```csharp
public string HrPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrSubmodel"></a> HrSubmodel

```csharp
public string HrSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrTimeOffset"></a> HrTimeOffset

```csharp
public Dimensional<Time> HrTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HrTimeOffsetExp"></a> HrTimeOffsetExp

```csharp
public ExpressionData HrTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrTimeStart"></a> HrTimeStart

```csharp
public Dimensional<Time> HrTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HrTimeStartExp"></a> HrTimeStartExp

```csharp
public ExpressionData HrTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrTimeStop"></a> HrTimeStop

```csharp
public Dimensional<Time> HrTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HrTimeStopExp"></a> HrTimeStopExp

```csharp
public ExpressionData HrTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrUseTimeStartStop"></a> HrUseTimeStartStop

```csharp
public int HrUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_ListSummary"></a> ListSummary

```csharp
public double ListSummary { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_ListSummaryExp"></a> ListSummaryExp

```csharp
public ExpressionData ListSummaryExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_LoadQHeatingRatesBinaryOrAscii"></a> LoadQHeatingRatesBinaryOrAscii

```csharp
public int LoadQHeatingRatesBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_LoadRadksBinaryOrAscii"></a> LoadRadksBinaryOrAscii

```csharp
public int LoadRadksBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_LoadgsFileRelativeOrAbsolute"></a> LoadgsFileRelativeOrAbsolute

```csharp
public int LoadgsFileRelativeOrAbsolute { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_MaxRaysToPlot"></a> MaxRaysToPlot

```csharp
public int MaxRaysToPlot { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_MethodCalc"></a> MethodCalc

```csharp
public RadiationTaskData.calcMethod MethodCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcMethod](OpenTD.RadiationTaskData.calcMethod.md)

### <a id="OpenTD_RadiationTaskData_NodeNameMode"></a> NodeNameMode

```csharp
public RadiationTaskData.NodeNameTypes NodeNameMode { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[NodeNameTypes](OpenTD.RadiationTaskData.NodeNameTypes.md)

### <a id="OpenTD_RadiationTaskData_OrbitName"></a> OrbitName

```csharp
public string OrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_OutputAdditionalBij"></a> OutputAdditionalBij

```csharp
public int OutputAdditionalBij { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputAfter"></a> OutputAfter

```csharp
public int OutputAfter { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputAlbedo"></a> OutputAlbedo

```csharp
public int OutputAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputAverageRayLength"></a> OutputAverageRayLength

```csharp
public int OutputAverageRayLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputBijSumRemainder"></a> OutputBijSumRemainder

```csharp
public int OutputBijSumRemainder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDA11MCCalls"></a> OutputDA11MCCalls

```csharp
public int OutputDA11MCCalls { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDiffuseSkyAlbedo"></a> OutputDiffuseSkyAlbedo

```csharp
public int OutputDiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDiffuseSkyIR"></a> OutputDiffuseSkyIR

```csharp
public int OutputDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDiffuseSkySolar"></a> OutputDiffuseSkySolar

```csharp
public int OutputDiffuseSkySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputFlux"></a> OutputFlux

```csharp
public int OutputFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputHrSymbolsToSinda"></a> OutputHrSymbolsToSinda

```csharp
public int OutputHrSymbolsToSinda { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputPlanet"></a> OutputPlanet

```csharp
public int OutputPlanet { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputRadkAsHeatrate"></a> OutputRadkAsHeatrate

```csharp
public int OutputRadkAsHeatrate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputRadksAllSurfacesOnlySpaceOnly"></a> OutputRadksAllSurfacesOnlySpaceOnly

```csharp
public int OutputRadksAllSurfacesOnlySpaceOnly { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputSolar"></a> OutputSolar

```csharp
public int OutputSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputTrackerData"></a> OutputTrackerData

```csharp
public int OutputTrackerData { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputTrackerDataFile"></a> OutputTrackerDataFile

```csharp
public string OutputTrackerDataFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_OutputVarRadksBinOrAscii"></a> OutputVarRadksBinOrAscii

```csharp
public int OutputVarRadksBinOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OverlapIntegrationInterval"></a> OverlapIntegrationInterval

```csharp
public int OverlapIntegrationInterval { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OverlapTolerance"></a> OverlapTolerance

```csharp
public double OverlapTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_OverlapWarnPer"></a> OverlapWarnPer

```csharp
public double OverlapWarnPer { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_PlotHitRays"></a> PlotHitRays

```csharp
public int PlotHitRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_PlotRayLength"></a> PlotRayLength

```csharp
public double PlotRayLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_PlotRaysHitSurface"></a> PlotRaysHitSurface

```csharp
public string PlotRaysHitSurface { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_PlotSourceRays"></a> PlotSourceRays

```csharp
public int PlotSourceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_PlotSpaceRays"></a> PlotSpaceRays

```csharp
public int PlotSpaceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_PlotWhichRays"></a> PlotWhichRays

```csharp
public int PlotWhichRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RadkCalcSpectrum"></a> RadkCalcSpectrum

```csharp
public int RadkCalcSpectrum { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_ResetSeed"></a> ResetSeed

```csharp
public int ResetSeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RkAID"></a> RkAID

```csharp
public int RkAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RkAIDExp"></a> RkAIDExp

```csharp
public ExpressionData RkAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkFilename"></a> RkFilename

```csharp
public string RkFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkGID"></a> RkGID

```csharp
public int RkGID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RkGIDExp"></a> RkGIDExp

```csharp
public ExpressionData RkGIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkPostLogic"></a> RkPostLogic

```csharp
public string RkPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkPreLogic"></a> RkPreLogic

```csharp
public string RkPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkSubmodel"></a> RkSubmodel

```csharp
public string RkSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkTimeOffset"></a> RkTimeOffset

```csharp
public Dimensional<Time> RkTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_RkTimeOffsetExp"></a> RkTimeOffsetExp

```csharp
public ExpressionData RkTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkTimeStart"></a> RkTimeStart

```csharp
public Dimensional<Time> RkTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_RkTimeStartExp"></a> RkTimeStartExp

```csharp
public ExpressionData RkTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkTimeStop"></a> RkTimeStop

```csharp
public Dimensional<Time> RkTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_RkTimeStopExp"></a> RkTimeStopExp

```csharp
public ExpressionData RkTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkUseTimeStartStop"></a> RkUseTimeStartStop

```csharp
public int RkUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SaveHeatrateReceiveFile"></a> SaveHeatrateReceiveFile

```csharp
public int SaveHeatrateReceiveFile { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutput"></a> SolarDirectIncidentOutput

```csharp
public int SolarDirectIncidentOutput { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutputArrayId"></a> SolarDirectIncidentOutputArrayId

```csharp
public int SolarDirectIncidentOutputArrayId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutputArraySubmodel"></a> SolarDirectIncidentOutputArraySubmodel

```csharp
public string SolarDirectIncidentOutputArraySubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutputNodeNames"></a> SolarDirectIncidentOutputNodeNames

```csharp
public List<string> SolarDirectIncidentOutputNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadiationTaskData_SpaceNode"></a> SpaceNode

```csharp
public string SpaceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_SpaceTemp"></a> SpaceTemp

```csharp
public Dimensional<Temp> SpaceTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadiationTaskData_SpaceTempExp"></a> SpaceTempExp

```csharp
public ExpressionData SpaceTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_TempDepControlChange"></a> TempDepControlChange

```csharp
public Dimensional<TempAbs> TempDepControlChange { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[TempAbs](OpenTD.Dimension.TempAbs.md)\>

### <a id="OpenTD_RadiationTaskData_TempDepControlChangeExp"></a> TempDepControlChangeExp

```csharp
public ExpressionData TempDepControlChangeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_TypeCalc"></a> TypeCalc

```csharp
public RadiationTaskData.calcType TypeCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcType](OpenTD.RadiationTaskData.calcType.md)

### <a id="OpenTD_RadiationTaskData_UseFastSpinIncrementOrList"></a> UseFastSpinIncrementOrList

```csharp
public int UseFastSpinIncrementOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_UseHeatrateVsTime"></a> UseHeatrateVsTime

```csharp
public int UseHeatrateVsTime { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_UseOctCells"></a> UseOctCells

```csharp
public int UseOctCells { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_VarRadk"></a> VarRadk

```csharp
public double VarRadk { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_VarRadkExp"></a> VarRadkExp

```csharp
public ExpressionData VarRadkExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_WaveLengthIncOrList"></a> WaveLengthIncOrList

```csharp
public int WaveLengthIncOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_WaveLengthIncrements"></a> WaveLengthIncrements

```csharp
public int WaveLengthIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_WaveLengthIncrementsExp"></a> WaveLengthIncrementsExp

```csharp
public ExpressionData WaveLengthIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_WaveLengthList"></a> WaveLengthList

```csharp
public List<double> WaveLengthList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadiationTaskData_WaveLengthMax"></a> WaveLengthMax

```csharp
public double WaveLengthMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_WaveLengthMaxExp"></a> WaveLengthMaxExp

```csharp
public ExpressionData WaveLengthMaxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_WaveLengthMin"></a> WaveLengthMin

```csharp
public double WaveLengthMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_WaveLengthMinExp"></a> WaveLengthMinExp

```csharp
public ExpressionData WaveLengthMinExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### <a id="OpenTD_RadiationTaskData_CheckData"></a> CheckData\(\)

```csharp
public void CheckData()
```

