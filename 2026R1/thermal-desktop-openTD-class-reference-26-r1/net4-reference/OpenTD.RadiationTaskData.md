# Class RadiationTaskData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data describing a radiation task.

```csharp
[DataContract]
public class RadiationTaskData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RadiationTaskData](OpenTD.RadiationTaskData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### RadiationTaskData\(\)

```csharp
public RadiationTaskData()
```

## Properties

### AddAnalPropList

```csharp
[DataMember]
public List<AdditionalRadiationTaskData> AddAnalPropList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)\>

### AddNoneOutputFileNameOrCaseNameToDatabaseName

```csharp
[DataMember]
public int AddNoneOutputFileNameOrCaseNameToDatabaseName { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AdditionalBijSum

```csharp
[DataMember]
public double AdditionalBijSum { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### AdditionalBijSumExp

```csharp
[DataMember]
public ExpressionData AdditionalBijSumExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### AnalGroup

```csharp
[DataMember]
public string AnalGroup { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ApplyReciprocity

```csharp
[DataMember]
public int ApplyReciprocity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AverageRayLengthFilename

```csharp
[DataMember]
public string AverageRayLengthFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BijCutoff

```csharp
[DataMember]
public double BijCutoff { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BijCutoffExp

```csharp
[DataMember]
public ExpressionData BijCutoffExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### BijSumRemainderNode

```csharp
[DataMember]
public string BijSumRemainderNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CalcNodesType

```csharp
[DataMember]
public int CalcNodesType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CalcPosType

```csharp
[DataMember]
public int CalcPosType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CellSubdivisions

```csharp
[DataMember]
public int CellSubdivisions { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CellSubdivisionsExp

```csharp
[DataMember]
public ExpressionData CellSubdivisionsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CellSurfaces

```csharp
[DataMember]
public int CellSurfaces { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CellSurfacesExp

```csharp
[DataMember]
public ExpressionData CellSurfacesExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### CombineArray

```csharp
[DataMember]
public int CombineArray { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DeleteDatabaseAfterOutputIsGenerated

```csharp
[DataMember]
public int DeleteDatabaseAfterOutputIsGenerated { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DisabledTrackerHandles

```csharp
[DataMember]
public List<string> DisabledTrackerHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### DoOverlapSurfaceCheck

```csharp
[DataMember]
public int DoOverlapSurfaceCheck { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EnableWaveLengthDepCalcs

```csharp
[DataMember]
public int EnableWaveLengthDepCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpin

```csharp
[DataMember]
public int FastSpin { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpinInclusive

```csharp
[DataMember]
public int FastSpinInclusive { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpinIncrement

```csharp
[DataMember]
public int FastSpinIncrement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastSpinIncrementExp

```csharp
[DataMember]
public ExpressionData FastSpinIncrementExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FastSpinStart

```csharp
[DataMember]
public double FastSpinStart { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FastSpinStartExp

```csharp
[DataMember]
public ExpressionData FastSpinStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FastSpinStop

```csharp
[DataMember]
public double FastSpinStop { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FastSpinStopExp

```csharp
[DataMember]
public ExpressionData FastSpinStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FastSpinSymbol

```csharp
[DataMember]
public string FastSpinSymbol { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FastSpinUserList

```csharp
[DataMember]
public List<double> FastSpinUserList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### FfFilename

```csharp
[DataMember]
public string FfFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FreeMolecularDataArray

```csharp
[DataMember]
public DimensionalList<CondPerArea> FreeMolecularDataArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### FreeMolecularDataArrayMult

```csharp
[DataMember]
public double FreeMolecularDataArrayMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FreeMolecularDataArrayMultExp

```csharp
[DataMember]
public ExpressionData FreeMolecularDataArrayMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FreeMolecularMult

```csharp
[DataMember]
public Dimensional<CondPerArea> FreeMolecularMult { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### FreeMolecularMultExp

```csharp
[DataMember]
public ExpressionData FreeMolecularMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### FreeMolecularOpticalProp

```csharp
[DataMember]
public string FreeMolecularOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FreeMolecularTimeArray

```csharp
[DataMember]
public DimensionalList<Time> FreeMolecularTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### FreeMolecularUseTimeVary

```csharp
[DataMember]
public int FreeMolecularUseTimeVary { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HeatrateAbsoluteOrFlux

```csharp
[DataMember]
public int HeatrateAbsoluteOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HeatrateSourceNode

```csharp
[DataMember]
public string HeatrateSourceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HeatrateTimeArray

```csharp
[DataMember]
public DimensionalList<Time> HeatrateTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HeatrateValue

```csharp
[DataMember]
public Dimensional<HeatRate> HeatrateValue { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### HeatrateValueArray

```csharp
[DataMember]
public DimensionalList<HeatRate> HeatrateValueArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### HeatrateValueExp

```csharp
[DataMember]
public ExpressionData HeatrateValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrAID

```csharp
[DataMember]
public int HrAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HrAIDExp

```csharp
[DataMember]
public ExpressionData HrAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrFilename

```csharp
[DataMember]
public string HrFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrPostLogic

```csharp
[DataMember]
public string HrPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrPreLogic

```csharp
[DataMember]
public string HrPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrSubmodel

```csharp
[DataMember]
public string HrSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HrTimeOffset

```csharp
[DataMember]
public Dimensional<Time> HrTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrTimeOffsetExp

```csharp
[DataMember]
public ExpressionData HrTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrTimeStart

```csharp
[DataMember]
public Dimensional<Time> HrTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrTimeStartExp

```csharp
[DataMember]
public ExpressionData HrTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrTimeStop

```csharp
[DataMember]
public Dimensional<Time> HrTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### HrTimeStopExp

```csharp
[DataMember]
public ExpressionData HrTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### HrUseTimeStartStop

```csharp
[DataMember]
public int HrUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ListSummary

```csharp
[DataMember]
public double ListSummary { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ListSummaryExp

```csharp
[DataMember]
public ExpressionData ListSummaryExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### LoadQHeatingRatesBinaryOrAscii

```csharp
[DataMember]
public int LoadQHeatingRatesBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LoadRadksBinaryOrAscii

```csharp
[DataMember]
public int LoadRadksBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LoadgsFileRelativeOrAbsolute

```csharp
[DataMember]
public int LoadgsFileRelativeOrAbsolute { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxRaysToPlot

```csharp
[DataMember]
public int MaxRaysToPlot { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MethodCalc

```csharp
[DataMember]
public RadiationTaskData.calcMethod MethodCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcMethod](OpenTD.RadiationTaskData.calcMethod.md)

### NodeNameMode

```csharp
[DataMember]
public RadiationTaskData.NodeNameTypes NodeNameMode { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[NodeNameTypes](OpenTD.RadiationTaskData.NodeNameTypes.md)

### OrbitName

```csharp
[DataMember]
public string OrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputAdditionalBij

```csharp
[DataMember]
public int OutputAdditionalBij { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputAfter

```csharp
[DataMember]
public int OutputAfter { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputAlbedo

```csharp
[DataMember]
public int OutputAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputAverageRayLength

```csharp
[DataMember]
public int OutputAverageRayLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputBijSumRemainder

```csharp
[DataMember]
public int OutputBijSumRemainder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDA11MCCalls

```csharp
[DataMember]
public int OutputDA11MCCalls { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDiffuseSkyAlbedo

```csharp
[DataMember]
public int OutputDiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDiffuseSkyIR

```csharp
[DataMember]
public int OutputDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputDiffuseSkySolar

```csharp
[DataMember]
public int OutputDiffuseSkySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputFlux

```csharp
[DataMember]
public int OutputFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputHrSymbolsToSinda

```csharp
[DataMember]
public int OutputHrSymbolsToSinda { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputPlanet

```csharp
[DataMember]
public int OutputPlanet { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputRadkAsHeatrate

```csharp
[DataMember]
public int OutputRadkAsHeatrate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputRadksAllSurfacesOnlySpaceOnly

```csharp
[DataMember]
public int OutputRadksAllSurfacesOnlySpaceOnly { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputSolar

```csharp
[DataMember]
public int OutputSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputTrackerData

```csharp
[DataMember]
public int OutputTrackerData { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputTrackerDataFile

```csharp
[DataMember]
public string OutputTrackerDataFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutputVarRadksBinOrAscii

```csharp
[DataMember]
public int OutputVarRadksBinOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OverlapIntegrationInterval

```csharp
[DataMember]
public int OverlapIntegrationInterval { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OverlapTolerance

```csharp
[DataMember]
public double OverlapTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OverlapWarnPer

```csharp
[DataMember]
public double OverlapWarnPer { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PlotHitRays

```csharp
[DataMember]
public int PlotHitRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlotRayLength

```csharp
[DataMember]
public double PlotRayLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PlotRaysHitSurface

```csharp
[DataMember]
public string PlotRaysHitSurface { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PlotSourceRays

```csharp
[DataMember]
public int PlotSourceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlotSpaceRays

```csharp
[DataMember]
public int PlotSpaceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlotWhichRays

```csharp
[DataMember]
public int PlotWhichRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RadkCalcSpectrum

```csharp
[DataMember]
public int RadkCalcSpectrum { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ResetSeed

```csharp
[DataMember]
public int ResetSeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RkAID

```csharp
[DataMember]
public int RkAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RkAIDExp

```csharp
[DataMember]
public ExpressionData RkAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkFilename

```csharp
[DataMember]
public string RkFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkGID

```csharp
[DataMember]
public int RkGID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RkGIDExp

```csharp
[DataMember]
public ExpressionData RkGIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkPostLogic

```csharp
[DataMember]
public string RkPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkPreLogic

```csharp
[DataMember]
public string RkPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkSubmodel

```csharp
[DataMember]
public string RkSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RkTimeOffset

```csharp
[DataMember]
public Dimensional<Time> RkTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### RkTimeOffsetExp

```csharp
[DataMember]
public ExpressionData RkTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkTimeStart

```csharp
[DataMember]
public Dimensional<Time> RkTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### RkTimeStartExp

```csharp
[DataMember]
public ExpressionData RkTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkTimeStop

```csharp
[DataMember]
public Dimensional<Time> RkTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### RkTimeStopExp

```csharp
[DataMember]
public ExpressionData RkTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### RkUseTimeStartStop

```csharp
[DataMember]
public int RkUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SaveHeatrateReceiveFile

```csharp
[DataMember]
public int SaveHeatrateReceiveFile { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolarDirectIncidentOutput

```csharp
[DataMember]
public int SolarDirectIncidentOutput { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolarDirectIncidentOutputArrayId

```csharp
[DataMember]
public int SolarDirectIncidentOutputArrayId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolarDirectIncidentOutputArraySubmodel

```csharp
[DataMember]
public string SolarDirectIncidentOutputArraySubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SolarDirectIncidentOutputNodeNames

```csharp
[DataMember]
public List<string> SolarDirectIncidentOutputNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### SpaceNode

```csharp
[DataMember]
public string SpaceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SpaceTemp

```csharp
[DataMember]
public Dimensional<Temp> SpaceTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### SpaceTempExp

```csharp
[DataMember]
public ExpressionData SpaceTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TempDepControlChange

```csharp
[DataMember]
public Dimensional<TempAbs> TempDepControlChange { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[TempAbs](OpenTD.Dimension.TempAbs.md)\>

### TempDepControlChangeExp

```csharp
[DataMember]
public ExpressionData TempDepControlChangeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TypeCalc

```csharp
[DataMember]
public RadiationTaskData.calcType TypeCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcType](OpenTD.RadiationTaskData.calcType.md)

### UseFastSpinIncrementOrList

```csharp
[DataMember]
public int UseFastSpinIncrementOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseHeatrateVsTime

```csharp
[DataMember]
public int UseHeatrateVsTime { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseOctCells

```csharp
[DataMember]
public int UseOctCells { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VarRadk

```csharp
[DataMember]
public double VarRadk { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VarRadkExp

```csharp
[DataMember]
public ExpressionData VarRadkExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### WaveLengthIncOrList

```csharp
[DataMember]
public int WaveLengthIncOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WaveLengthIncrements

```csharp
[DataMember]
public int WaveLengthIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WaveLengthIncrementsExp

```csharp
[DataMember]
public ExpressionData WaveLengthIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### WaveLengthList

```csharp
[DataMember]
public List<double> WaveLengthList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### WaveLengthMax

```csharp
[DataMember]
public double WaveLengthMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WaveLengthMaxExp

```csharp
[DataMember]
public ExpressionData WaveLengthMaxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### WaveLengthMin

```csharp
[DataMember]
public double WaveLengthMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WaveLengthMinExp

```csharp
[DataMember]
public ExpressionData WaveLengthMinExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### CheckData\(\)

```csharp
public void CheckData()
```


