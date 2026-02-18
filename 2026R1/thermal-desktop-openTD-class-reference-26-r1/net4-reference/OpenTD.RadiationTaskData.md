# <a id="OpenTD_RadiationTaskData"></a> Class RadiationTaskData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data describing a radiation task.

```csharp
[DataContract]
public class RadiationTaskData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RadiationTaskData](OpenTD.RadiationTaskData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RadiationTaskData__ctor"></a> RadiationTaskData\(\)

```csharp
public RadiationTaskData()
```

## Properties

### <a id="OpenTD_RadiationTaskData_AddAnalPropList"></a> AddAnalPropList

```csharp
[DataMember]
public List<AdditionalRadiationTaskData> AddAnalPropList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[AdditionalRadiationTaskData](OpenTD.AdditionalRadiationTaskData.md)\>

### <a id="OpenTD_RadiationTaskData_AddNoneOutputFileNameOrCaseNameToDatabaseName"></a> AddNoneOutputFileNameOrCaseNameToDatabaseName

```csharp
[DataMember]
public int AddNoneOutputFileNameOrCaseNameToDatabaseName { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_AdditionalBijSum"></a> AdditionalBijSum

```csharp
[DataMember]
public double AdditionalBijSum { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_AdditionalBijSumExp"></a> AdditionalBijSumExp

```csharp
[DataMember]
public ExpressionData AdditionalBijSumExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_AnalGroup"></a> AnalGroup

```csharp
[DataMember]
public string AnalGroup { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_ApplyReciprocity"></a> ApplyReciprocity

```csharp
[DataMember]
public int ApplyReciprocity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_AverageRayLengthFilename"></a> AverageRayLengthFilename

```csharp
[DataMember]
public string AverageRayLengthFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_BijCutoff"></a> BijCutoff

```csharp
[DataMember]
public double BijCutoff { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_BijCutoffExp"></a> BijCutoffExp

```csharp
[DataMember]
public ExpressionData BijCutoffExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_BijSumRemainderNode"></a> BijSumRemainderNode

```csharp
[DataMember]
public string BijSumRemainderNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_CalcNodesType"></a> CalcNodesType

```csharp
[DataMember]
public int CalcNodesType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CalcPosType"></a> CalcPosType

```csharp
[DataMember]
public int CalcPosType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CellSubdivisions"></a> CellSubdivisions

```csharp
[DataMember]
public int CellSubdivisions { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CellSubdivisionsExp"></a> CellSubdivisionsExp

```csharp
[DataMember]
public ExpressionData CellSubdivisionsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_CellSurfaces"></a> CellSurfaces

```csharp
[DataMember]
public int CellSurfaces { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_CellSurfacesExp"></a> CellSurfacesExp

```csharp
[DataMember]
public ExpressionData CellSurfacesExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_CombineArray"></a> CombineArray

```csharp
[DataMember]
public int CombineArray { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_DeleteDatabaseAfterOutputIsGenerated"></a> DeleteDatabaseAfterOutputIsGenerated

```csharp
[DataMember]
public int DeleteDatabaseAfterOutputIsGenerated { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_DisabledTrackerHandles"></a> DisabledTrackerHandles

```csharp
[DataMember]
public List<string> DisabledTrackerHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadiationTaskData_DoOverlapSurfaceCheck"></a> DoOverlapSurfaceCheck

```csharp
[DataMember]
public int DoOverlapSurfaceCheck { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_EnableWaveLengthDepCalcs"></a> EnableWaveLengthDepCalcs

```csharp
[DataMember]
public int EnableWaveLengthDepCalcs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpin"></a> FastSpin

```csharp
[DataMember]
public int FastSpin { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpinInclusive"></a> FastSpinInclusive

```csharp
[DataMember]
public int FastSpinInclusive { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpinIncrement"></a> FastSpinIncrement

```csharp
[DataMember]
public int FastSpinIncrement { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_FastSpinIncrementExp"></a> FastSpinIncrementExp

```csharp
[DataMember]
public ExpressionData FastSpinIncrementExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FastSpinStart"></a> FastSpinStart

```csharp
[DataMember]
public double FastSpinStart { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_FastSpinStartExp"></a> FastSpinStartExp

```csharp
[DataMember]
public ExpressionData FastSpinStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FastSpinStop"></a> FastSpinStop

```csharp
[DataMember]
public double FastSpinStop { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_FastSpinStopExp"></a> FastSpinStopExp

```csharp
[DataMember]
public ExpressionData FastSpinStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FastSpinSymbol"></a> FastSpinSymbol

```csharp
[DataMember]
public string FastSpinSymbol { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_FastSpinUserList"></a> FastSpinUserList

```csharp
[DataMember]
public List<double> FastSpinUserList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadiationTaskData_FfFilename"></a> FfFilename

```csharp
[DataMember]
public string FfFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_FreeMolecularDataArray"></a> FreeMolecularDataArray

```csharp
[DataMember]
public DimensionalList<CondPerArea> FreeMolecularDataArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### <a id="OpenTD_RadiationTaskData_FreeMolecularDataArrayMult"></a> FreeMolecularDataArrayMult

```csharp
[DataMember]
public double FreeMolecularDataArrayMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_FreeMolecularDataArrayMultExp"></a> FreeMolecularDataArrayMultExp

```csharp
[DataMember]
public ExpressionData FreeMolecularDataArrayMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FreeMolecularMult"></a> FreeMolecularMult

```csharp
[DataMember]
public Dimensional<CondPerArea> FreeMolecularMult { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### <a id="OpenTD_RadiationTaskData_FreeMolecularMultExp"></a> FreeMolecularMultExp

```csharp
[DataMember]
public ExpressionData FreeMolecularMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_FreeMolecularOpticalProp"></a> FreeMolecularOpticalProp

```csharp
[DataMember]
public string FreeMolecularOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_FreeMolecularTimeArray"></a> FreeMolecularTimeArray

```csharp
[DataMember]
public DimensionalList<Time> FreeMolecularTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_FreeMolecularUseTimeVary"></a> FreeMolecularUseTimeVary

```csharp
[DataMember]
public int FreeMolecularUseTimeVary { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_HeatrateAbsoluteOrFlux"></a> HeatrateAbsoluteOrFlux

```csharp
[DataMember]
public int HeatrateAbsoluteOrFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_HeatrateSourceNode"></a> HeatrateSourceNode

```csharp
[DataMember]
public string HeatrateSourceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HeatrateTimeArray"></a> HeatrateTimeArray

```csharp
[DataMember]
public DimensionalList<Time> HeatrateTimeArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HeatrateValue"></a> HeatrateValue

```csharp
[DataMember]
public Dimensional<HeatRate> HeatrateValue { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### <a id="OpenTD_RadiationTaskData_HeatrateValueArray"></a> HeatrateValueArray

```csharp
[DataMember]
public DimensionalList<HeatRate> HeatrateValueArray { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[HeatRate](OpenTD.Dimension.HeatRate.md)\>

### <a id="OpenTD_RadiationTaskData_HeatrateValueExp"></a> HeatrateValueExp

```csharp
[DataMember]
public ExpressionData HeatrateValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrAID"></a> HrAID

```csharp
[DataMember]
public int HrAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_HrAIDExp"></a> HrAIDExp

```csharp
[DataMember]
public ExpressionData HrAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrFilename"></a> HrFilename

```csharp
[DataMember]
public string HrFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrPostLogic"></a> HrPostLogic

```csharp
[DataMember]
public string HrPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrPreLogic"></a> HrPreLogic

```csharp
[DataMember]
public string HrPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrSubmodel"></a> HrSubmodel

```csharp
[DataMember]
public string HrSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_HrTimeOffset"></a> HrTimeOffset

```csharp
[DataMember]
public Dimensional<Time> HrTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HrTimeOffsetExp"></a> HrTimeOffsetExp

```csharp
[DataMember]
public ExpressionData HrTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrTimeStart"></a> HrTimeStart

```csharp
[DataMember]
public Dimensional<Time> HrTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HrTimeStartExp"></a> HrTimeStartExp

```csharp
[DataMember]
public ExpressionData HrTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrTimeStop"></a> HrTimeStop

```csharp
[DataMember]
public Dimensional<Time> HrTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_HrTimeStopExp"></a> HrTimeStopExp

```csharp
[DataMember]
public ExpressionData HrTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_HrUseTimeStartStop"></a> HrUseTimeStartStop

```csharp
[DataMember]
public int HrUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_ListSummary"></a> ListSummary

```csharp
[DataMember]
public double ListSummary { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_ListSummaryExp"></a> ListSummaryExp

```csharp
[DataMember]
public ExpressionData ListSummaryExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_LoadQHeatingRatesBinaryOrAscii"></a> LoadQHeatingRatesBinaryOrAscii

```csharp
[DataMember]
public int LoadQHeatingRatesBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_LoadRadksBinaryOrAscii"></a> LoadRadksBinaryOrAscii

```csharp
[DataMember]
public int LoadRadksBinaryOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_LoadgsFileRelativeOrAbsolute"></a> LoadgsFileRelativeOrAbsolute

```csharp
[DataMember]
public int LoadgsFileRelativeOrAbsolute { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_MaxRaysToPlot"></a> MaxRaysToPlot

```csharp
[DataMember]
public int MaxRaysToPlot { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_MethodCalc"></a> MethodCalc

```csharp
[DataMember]
public RadiationTaskData.calcMethod MethodCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcMethod](OpenTD.RadiationTaskData.calcMethod.md)

### <a id="OpenTD_RadiationTaskData_NodeNameMode"></a> NodeNameMode

```csharp
[DataMember]
public RadiationTaskData.NodeNameTypes NodeNameMode { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[NodeNameTypes](OpenTD.RadiationTaskData.NodeNameTypes.md)

### <a id="OpenTD_RadiationTaskData_OrbitName"></a> OrbitName

```csharp
[DataMember]
public string OrbitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_OutputAdditionalBij"></a> OutputAdditionalBij

```csharp
[DataMember]
public int OutputAdditionalBij { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputAfter"></a> OutputAfter

```csharp
[DataMember]
public int OutputAfter { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputAlbedo"></a> OutputAlbedo

```csharp
[DataMember]
public int OutputAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputAverageRayLength"></a> OutputAverageRayLength

```csharp
[DataMember]
public int OutputAverageRayLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputBijSumRemainder"></a> OutputBijSumRemainder

```csharp
[DataMember]
public int OutputBijSumRemainder { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDA11MCCalls"></a> OutputDA11MCCalls

```csharp
[DataMember]
public int OutputDA11MCCalls { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDiffuseSkyAlbedo"></a> OutputDiffuseSkyAlbedo

```csharp
[DataMember]
public int OutputDiffuseSkyAlbedo { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDiffuseSkyIR"></a> OutputDiffuseSkyIR

```csharp
[DataMember]
public int OutputDiffuseSkyIR { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputDiffuseSkySolar"></a> OutputDiffuseSkySolar

```csharp
[DataMember]
public int OutputDiffuseSkySolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputFlux"></a> OutputFlux

```csharp
[DataMember]
public int OutputFlux { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputHrSymbolsToSinda"></a> OutputHrSymbolsToSinda

```csharp
[DataMember]
public int OutputHrSymbolsToSinda { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputPlanet"></a> OutputPlanet

```csharp
[DataMember]
public int OutputPlanet { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputRadkAsHeatrate"></a> OutputRadkAsHeatrate

```csharp
[DataMember]
public int OutputRadkAsHeatrate { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputRadksAllSurfacesOnlySpaceOnly"></a> OutputRadksAllSurfacesOnlySpaceOnly

```csharp
[DataMember]
public int OutputRadksAllSurfacesOnlySpaceOnly { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputSolar"></a> OutputSolar

```csharp
[DataMember]
public int OutputSolar { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputTrackerData"></a> OutputTrackerData

```csharp
[DataMember]
public int OutputTrackerData { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OutputTrackerDataFile"></a> OutputTrackerDataFile

```csharp
[DataMember]
public string OutputTrackerDataFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_OutputVarRadksBinOrAscii"></a> OutputVarRadksBinOrAscii

```csharp
[DataMember]
public int OutputVarRadksBinOrAscii { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OverlapIntegrationInterval"></a> OverlapIntegrationInterval

```csharp
[DataMember]
public int OverlapIntegrationInterval { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_OverlapTolerance"></a> OverlapTolerance

```csharp
[DataMember]
public double OverlapTolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_OverlapWarnPer"></a> OverlapWarnPer

```csharp
[DataMember]
public double OverlapWarnPer { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_PlotHitRays"></a> PlotHitRays

```csharp
[DataMember]
public int PlotHitRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_PlotRayLength"></a> PlotRayLength

```csharp
[DataMember]
public double PlotRayLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_PlotRaysHitSurface"></a> PlotRaysHitSurface

```csharp
[DataMember]
public string PlotRaysHitSurface { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_PlotSourceRays"></a> PlotSourceRays

```csharp
[DataMember]
public int PlotSourceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_PlotSpaceRays"></a> PlotSpaceRays

```csharp
[DataMember]
public int PlotSpaceRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_PlotWhichRays"></a> PlotWhichRays

```csharp
[DataMember]
public int PlotWhichRays { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RadkCalcSpectrum"></a> RadkCalcSpectrum

```csharp
[DataMember]
public int RadkCalcSpectrum { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_ResetSeed"></a> ResetSeed

```csharp
[DataMember]
public int ResetSeed { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RkAID"></a> RkAID

```csharp
[DataMember]
public int RkAID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RkAIDExp"></a> RkAIDExp

```csharp
[DataMember]
public ExpressionData RkAIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkFilename"></a> RkFilename

```csharp
[DataMember]
public string RkFilename { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkGID"></a> RkGID

```csharp
[DataMember]
public int RkGID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_RkGIDExp"></a> RkGIDExp

```csharp
[DataMember]
public ExpressionData RkGIDExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkPostLogic"></a> RkPostLogic

```csharp
[DataMember]
public string RkPostLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkPreLogic"></a> RkPreLogic

```csharp
[DataMember]
public string RkPreLogic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkSubmodel"></a> RkSubmodel

```csharp
[DataMember]
public string RkSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_RkTimeOffset"></a> RkTimeOffset

```csharp
[DataMember]
public Dimensional<Time> RkTimeOffset { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_RkTimeOffsetExp"></a> RkTimeOffsetExp

```csharp
[DataMember]
public ExpressionData RkTimeOffsetExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkTimeStart"></a> RkTimeStart

```csharp
[DataMember]
public Dimensional<Time> RkTimeStart { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_RkTimeStartExp"></a> RkTimeStartExp

```csharp
[DataMember]
public ExpressionData RkTimeStartExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkTimeStop"></a> RkTimeStop

```csharp
[DataMember]
public Dimensional<Time> RkTimeStop { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_RadiationTaskData_RkTimeStopExp"></a> RkTimeStopExp

```csharp
[DataMember]
public ExpressionData RkTimeStopExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_RkUseTimeStartStop"></a> RkUseTimeStartStop

```csharp
[DataMember]
public int RkUseTimeStartStop { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SaveHeatrateReceiveFile"></a> SaveHeatrateReceiveFile

```csharp
[DataMember]
public int SaveHeatrateReceiveFile { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutput"></a> SolarDirectIncidentOutput

```csharp
[DataMember]
public int SolarDirectIncidentOutput { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutputArrayId"></a> SolarDirectIncidentOutputArrayId

```csharp
[DataMember]
public int SolarDirectIncidentOutputArrayId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutputArraySubmodel"></a> SolarDirectIncidentOutputArraySubmodel

```csharp
[DataMember]
public string SolarDirectIncidentOutputArraySubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_SolarDirectIncidentOutputNodeNames"></a> SolarDirectIncidentOutputNodeNames

```csharp
[DataMember]
public List<string> SolarDirectIncidentOutputNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadiationTaskData_SpaceNode"></a> SpaceNode

```csharp
[DataMember]
public string SpaceNode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadiationTaskData_SpaceTemp"></a> SpaceTemp

```csharp
[DataMember]
public Dimensional<Temp> SpaceTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadiationTaskData_SpaceTempExp"></a> SpaceTempExp

```csharp
[DataMember]
public ExpressionData SpaceTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_TempDepControlChange"></a> TempDepControlChange

```csharp
[DataMember]
public Dimensional<TempAbs> TempDepControlChange { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[TempAbs](OpenTD.Dimension.TempAbs.md)\>

### <a id="OpenTD_RadiationTaskData_TempDepControlChangeExp"></a> TempDepControlChangeExp

```csharp
[DataMember]
public ExpressionData TempDepControlChangeExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_TypeCalc"></a> TypeCalc

```csharp
[DataMember]
public RadiationTaskData.calcType TypeCalc { get; set; }
```

#### Property Value

 [RadiationTaskData](OpenTD.RadiationTaskData.md).[calcType](OpenTD.RadiationTaskData.calcType.md)

### <a id="OpenTD_RadiationTaskData_UseFastSpinIncrementOrList"></a> UseFastSpinIncrementOrList

```csharp
[DataMember]
public int UseFastSpinIncrementOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_UseHeatrateVsTime"></a> UseHeatrateVsTime

```csharp
[DataMember]
public int UseHeatrateVsTime { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_UseOctCells"></a> UseOctCells

```csharp
[DataMember]
public int UseOctCells { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_VarRadk"></a> VarRadk

```csharp
[DataMember]
public double VarRadk { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_VarRadkExp"></a> VarRadkExp

```csharp
[DataMember]
public ExpressionData VarRadkExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_WaveLengthIncOrList"></a> WaveLengthIncOrList

```csharp
[DataMember]
public int WaveLengthIncOrList { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_WaveLengthIncrements"></a> WaveLengthIncrements

```csharp
[DataMember]
public int WaveLengthIncrements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadiationTaskData_WaveLengthIncrementsExp"></a> WaveLengthIncrementsExp

```csharp
[DataMember]
public ExpressionData WaveLengthIncrementsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_WaveLengthList"></a> WaveLengthList

```csharp
[DataMember]
public List<double> WaveLengthList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="OpenTD_RadiationTaskData_WaveLengthMax"></a> WaveLengthMax

```csharp
[DataMember]
public double WaveLengthMax { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_WaveLengthMaxExp"></a> WaveLengthMaxExp

```csharp
[DataMember]
public ExpressionData WaveLengthMaxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadiationTaskData_WaveLengthMin"></a> WaveLengthMin

```csharp
[DataMember]
public double WaveLengthMin { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadiationTaskData_WaveLengthMinExp"></a> WaveLengthMinExp

```csharp
[DataMember]
public ExpressionData WaveLengthMinExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### <a id="OpenTD_RadiationTaskData_CheckData"></a> CheckData\(\)

```csharp
public void CheckData()
```

