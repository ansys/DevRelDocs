# Class RadiationTaskData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data describing a radiation task.

```csharp
[MessagePackObject(true)]
public class RadiationTaskData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RadiationTaskData](OpenTD.RadiationTaskData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### RadiationTaskData\(\)

```csharp
public RadiationTaskData()
```

## Properties

### AddAnalPropList

```csharp
public List<AdditionalRadiationTaskData> AddAnalPropList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)\>

### AddNoneOutputFileNameOrCaseNameToDatabaseName

```csharp
public int AddNoneOutputFileNameOrCaseNameToDatabaseName { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AdditionalBijSum

```csharp
public double AdditionalBijSum { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AdditionalBijSumExp

```csharp
public ExpressionData AdditionalBijSumExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### AnalGroup

```csharp
public string AnalGroup { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ApplyReciprocity

```csharp
public int ApplyReciprocity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AverageRayLengthFilename

```csharp
public string AverageRayLengthFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BijCutoff

```csharp
public double BijCutoff { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BijCutoffExp

```csharp
public ExpressionData BijCutoffExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### BijSumRemainderNode

```csharp
public string BijSumRemainderNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CalcNodesType

```csharp
public int CalcNodesType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcPosType

```csharp
public int CalcPosType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CellSubdivisions

```csharp
public int CellSubdivisions { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CellSubdivisionsExp

```csharp
public ExpressionData CellSubdivisionsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CellSurfaces

```csharp
public int CellSurfaces { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CellSurfacesExp

```csharp
public ExpressionData CellSurfacesExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CombineArray

```csharp
public int CombineArray { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DeleteDatabaseAfterOutputIsGenerated

```csharp
public int DeleteDatabaseAfterOutputIsGenerated { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DisabledTrackerHandles

```csharp
public List<string> DisabledTrackerHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### DoOverlapSurfaceCheck

```csharp
public int DoOverlapSurfaceCheck { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EnableWaveLengthDepCalcs

```csharp
public int EnableWaveLengthDepCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpin

```csharp
public int FastSpin { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpinInclusive

```csharp
public int FastSpinInclusive { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpinIncrement

```csharp
public int FastSpinIncrement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpinIncrementExp

```csharp
public ExpressionData FastSpinIncrementExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FastSpinStart

```csharp
public double FastSpinStart { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FastSpinStartExp

```csharp
public ExpressionData FastSpinStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FastSpinStop

```csharp
public double FastSpinStop { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FastSpinStopExp

```csharp
public ExpressionData FastSpinStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FastSpinSymbol

```csharp
public string FastSpinSymbol { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FastSpinUserList

```csharp
public List<double> FastSpinUserList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### FfFilename

```csharp
public string FfFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FreeMolecularDataArray

```csharp
public DimensionalList<CondPerArea> FreeMolecularDataArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### FreeMolecularDataArrayMult

```csharp
public double FreeMolecularDataArrayMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FreeMolecularDataArrayMultExp

```csharp
public ExpressionData FreeMolecularDataArrayMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FreeMolecularMult

```csharp
public Dimensional<CondPerArea> FreeMolecularMult { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### FreeMolecularMultExp

```csharp
public ExpressionData FreeMolecularMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FreeMolecularOpticalProp

```csharp
public string FreeMolecularOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FreeMolecularTimeArray

```csharp
public DimensionalList<Time> FreeMolecularTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### FreeMolecularUseTimeVary

```csharp
public int FreeMolecularUseTimeVary { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HeatrateAbsoluteOrFlux

```csharp
public int HeatrateAbsoluteOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HeatrateSourceNode

```csharp
public string HeatrateSourceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HeatrateTimeArray

```csharp
public DimensionalList<Time> HeatrateTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HeatrateValue

```csharp
public Dimensional<HeatRate> HeatrateValue { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### HeatrateValueArray

```csharp
public DimensionalList<HeatRate> HeatrateValueArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### HeatrateValueExp

```csharp
public ExpressionData HeatrateValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrAID

```csharp
public int HrAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HrAIDExp

```csharp
public ExpressionData HrAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrFilename

```csharp
public string HrFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrPostLogic

```csharp
public string HrPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrPreLogic

```csharp
public string HrPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrSubmodel

```csharp
public string HrSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrTimeOffset

```csharp
public Dimensional<Time> HrTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrTimeOffsetExp

```csharp
public ExpressionData HrTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrTimeStart

```csharp
public Dimensional<Time> HrTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrTimeStartExp

```csharp
public ExpressionData HrTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrTimeStop

```csharp
public Dimensional<Time> HrTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrTimeStopExp

```csharp
public ExpressionData HrTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrUseTimeStartStop

```csharp
public int HrUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ListSummary

```csharp
public double ListSummary { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ListSummaryExp

```csharp
public ExpressionData ListSummaryExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### LoadQHeatingRatesBinaryOrAscii

```csharp
public int LoadQHeatingRatesBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LoadRadksBinaryOrAscii

```csharp
public int LoadRadksBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LoadgsFileRelativeOrAbsolute

```csharp
public int LoadgsFileRelativeOrAbsolute { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxRaysToPlot

```csharp
public int MaxRaysToPlot { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MethodCalc

```csharp
public RadiationTaskData.calcMethod MethodCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcMethod](OpenTD.RadiationTaskData.calcMethod.md)

### NodeNameMode

```csharp
public RadiationTaskData.NodeNameTypes NodeNameMode { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[NodeNameTypes](OpenTD.RadiationTaskData.NodeNameTypes.md)

### OrbitName

```csharp
public string OrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputAdditionalBij

```csharp
public int OutputAdditionalBij { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputAfter

```csharp
public int OutputAfter { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputAlbedo

```csharp
public int OutputAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputAverageRayLength

```csharp
public int OutputAverageRayLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputBijSumRemainder

```csharp
public int OutputBijSumRemainder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDA11MCCalls

```csharp
public int OutputDA11MCCalls { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDiffuseSkyAlbedo

```csharp
public int OutputDiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDiffuseSkyIR

```csharp
public int OutputDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDiffuseSkySolar

```csharp
public int OutputDiffuseSkySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputFlux

```csharp
public int OutputFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputHrSymbolsToSinda

```csharp
public int OutputHrSymbolsToSinda { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputPlanet

```csharp
public int OutputPlanet { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputRadkAsHeatrate

```csharp
public int OutputRadkAsHeatrate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputRadksAllSurfacesOnlySpaceOnly

```csharp
public int OutputRadksAllSurfacesOnlySpaceOnly { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputSolar

```csharp
public int OutputSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputTrackerData

```csharp
public int OutputTrackerData { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputTrackerDataFile

```csharp
public string OutputTrackerDataFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputVarRadksBinOrAscii

```csharp
public int OutputVarRadksBinOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OverlapIntegrationInterval

```csharp
public int OverlapIntegrationInterval { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OverlapTolerance

```csharp
public double OverlapTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OverlapWarnPer

```csharp
public double OverlapWarnPer { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PlotHitRays

```csharp
public int PlotHitRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlotRayLength

```csharp
public double PlotRayLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PlotRaysHitSurface

```csharp
public string PlotRaysHitSurface { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PlotSourceRays

```csharp
public int PlotSourceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlotSpaceRays

```csharp
public int PlotSpaceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlotWhichRays

```csharp
public int PlotWhichRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RadkCalcSpectrum

```csharp
public int RadkCalcSpectrum { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ResetSeed

```csharp
public int ResetSeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RkAID

```csharp
public int RkAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RkAIDExp

```csharp
public ExpressionData RkAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkFilename

```csharp
public string RkFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkGID

```csharp
public int RkGID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RkGIDExp

```csharp
public ExpressionData RkGIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkPostLogic

```csharp
public string RkPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkPreLogic

```csharp
public string RkPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkSubmodel

```csharp
public string RkSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkTimeOffset

```csharp
public Dimensional<Time> RkTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### RkTimeOffsetExp

```csharp
public ExpressionData RkTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkTimeStart

```csharp
public Dimensional<Time> RkTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### RkTimeStartExp

```csharp
public ExpressionData RkTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkTimeStop

```csharp
public Dimensional<Time> RkTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### RkTimeStopExp

```csharp
public ExpressionData RkTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkUseTimeStartStop

```csharp
public int RkUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SaveHeatrateReceiveFile

```csharp
public int SaveHeatrateReceiveFile { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolarDirectIncidentOutput

```csharp
public int SolarDirectIncidentOutput { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolarDirectIncidentOutputArrayId

```csharp
public int SolarDirectIncidentOutputArrayId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolarDirectIncidentOutputArraySubmodel

```csharp
public string SolarDirectIncidentOutputArraySubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SolarDirectIncidentOutputNodeNames

```csharp
public List<string> SolarDirectIncidentOutputNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### SpaceNode

```csharp
public string SpaceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SpaceTemp

```csharp
public Dimensional<Temp> SpaceTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### SpaceTempExp

```csharp
public ExpressionData SpaceTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TempDepControlChange

```csharp
public Dimensional<TempAbs> TempDepControlChange { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[TempAbs](OpenTD.Dimension.TempAbs.md)\>

### TempDepControlChangeExp

```csharp
public ExpressionData TempDepControlChangeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TypeCalc

```csharp
public RadiationTaskData.calcType TypeCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcType](OpenTD.RadiationTaskData.calcType.md)

### UseFastSpinIncrementOrList

```csharp
public int UseFastSpinIncrementOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseHeatrateVsTime

```csharp
public int UseHeatrateVsTime { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseOctCells

```csharp
public int UseOctCells { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VarRadk

```csharp
public double VarRadk { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VarRadkExp

```csharp
public ExpressionData VarRadkExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### WaveLengthIncOrList

```csharp
public int WaveLengthIncOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WaveLengthIncrements

```csharp
public int WaveLengthIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WaveLengthIncrementsExp

```csharp
public ExpressionData WaveLengthIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### WaveLengthList

```csharp
public List<double> WaveLengthList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### WaveLengthMax

```csharp
public double WaveLengthMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WaveLengthMaxExp

```csharp
public ExpressionData WaveLengthMaxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### WaveLengthMin

```csharp
public double WaveLengthMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WaveLengthMinExp

```csharp
public ExpressionData WaveLengthMinExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### CheckData\(\)

```csharp
public void CheckData()
```


