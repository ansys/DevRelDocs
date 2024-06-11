# Class SuspensionSimulationConfiguration

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The suspension simulation configuration class

```csharp
public class SuspensionSimulationConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SuspensionSimulationConfiguration](VM.Managed.DAFUL.Car.SuspensionSimulationConfiguration.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SuspensionSimulationConfiguration\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.SuspensionSimulationConfiguration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SuspensionSimulationConfiguration()
```

## Properties

### EndTime

Gets or sets the end time.

```csharp
public double EndTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ExternFiles

Gets or sets the extern files.

```csharp
public AnalysisExternFiles ExternFiles { get; set; }
```

#### Property Value

 [AnalysisExternFiles](VM.Managed.DAFUL.Car.AnalysisExternFiles.md)

### NumofSteps

Gets or sets the number of steps.

```csharp
public int NumofSteps { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OppositeTravelParameter

Gets or sets the opposite travel parameter.

```csharp
public AnalysisOppositeTravel OppositeTravelParameter { get; set; }
```

#### Property Value

 [AnalysisOppositeTravel](VM.Managed.DAFUL.Car.AnalysisOppositeTravel.md)

### ParallelTravelParameter

Gets or sets the parallel travel parameter.

```csharp
public AnalysisParallelTravel ParallelTravelParameter { get; set; }
```

#### Property Value

 [AnalysisParallelTravel](VM.Managed.DAFUL.Car.AnalysisParallelTravel.md)

### RandomTravel

Gets or sets the random travel.

```csharp
public AnalysisRandomMotion RandomTravel { get; set; }
```

#### Property Value

 [AnalysisRandomMotion](VM.Managed.DAFUL.Car.AnalysisRandomMotion.md)

### ResultFile

Gets or sets the result file.

```csharp
public string ResultFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RollVerticalParameter

Gets or sets the roll vertical parameter.

```csharp
public AnalysisRollVertical RollVerticalParameter { get; set; }
```

#### Property Value

 [AnalysisRollVertical](VM.Managed.DAFUL.Car.AnalysisRollVertical.md)

### SimulationType

Gets or sets the type of the simulation.

```csharp
public int SimulationType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SingleTravelParameter

Gets or sets the single travel parameter.

```csharp
public AnalysisSingleTravel SingleTravelParameter { get; set; }
```

#### Property Value

 [AnalysisSingleTravel](VM.Managed.DAFUL.Car.AnalysisSingleTravel.md)

### StaticLoad

Gets or sets the static load.

```csharp
public AnalysisStaticLoad StaticLoad { get; set; }
```

#### Property Value

 [AnalysisStaticLoad](VM.Managed.DAFUL.Car.AnalysisStaticLoad.md)

### SteeringParameter

Gets or sets the steering parameter.

```csharp
public AnalysisSteering SteeringParameter { get; set; }
```

#### Property Value

 [AnalysisSteering](VM.Managed.DAFUL.Car.AnalysisSteering.md)


