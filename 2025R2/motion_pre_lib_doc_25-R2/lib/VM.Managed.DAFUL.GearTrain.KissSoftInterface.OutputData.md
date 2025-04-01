# Class KissSoftInterface.OutputData

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Output data

```csharp
public class KissSoftInterface.OutputData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KissSoftInterface.OutputData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.OutputData.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OutputData\(\)

Constructor of outputData

```csharp
public OutputData()
```

### OutputData\(string, uint, uint, uint\)

Constructor of outputData

```csharp
public OutputData(string strFilePath, uint nNumberOfTrochoid, uint nNumberOfInvolute, uint nNumberOfSlice)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path

`nNumberOfTrochoid` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of trochoid

`nNumberOfInvolute` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of involute

`nNumberOfSlice` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of slice

## Properties

### AxialCrossingAngle

Gets or sets the axial crossing angle

```csharp
public double AxialCrossingAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### CenterDistancePair1

Gets or sets the center distance pair1

```csharp
public double CenterDistancePair1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### CenterDistancePair2

Gets or sets the center distance pair2

```csharp
public double CenterDistancePair2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### CenterDistancePair3

Gets or sets the center distance pair3

```csharp
public double CenterDistancePair3 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FilePath

Gets or sets the file path

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GearDataList

Gets or sets the gear data list

```csharp
public KissSoftInterface.GearData[] GearDataList { get; set; }
```

#### Property Value

 [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[GearData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.GearData.md)\[\]

### NormalModule

Gets or sets the normal module

```csharp
public double NormalModule { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NormalPressureAngle

Gets or sets the normal pressure angle

```csharp
public double NormalPressureAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NumberOfGear

Gets or sets the number of gear

```csharp
public uint NumberOfGear { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumberOfInvolute

Gets or sets the number of involute

```csharp
public uint NumberOfInvolute { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumberOfPlaneraryGear

Gets or sets the number of planerary gear

```csharp
public uint NumberOfPlaneraryGear { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumberOfSlice

Gets or sets the number of columns

```csharp
public uint NumberOfSlice { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumberOfTrochoid

Gets or sets the number of trochoid

```csharp
public uint NumberOfTrochoid { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TypeOfGear

Gets or sets the gear type

```csharp
public KissSoftInterface.GearType TypeOfGear { get; set; }
```

#### Property Value

 [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[GearType](VM.Managed.DAFUL.GearTrain.KissSoftInterface.GearType.md)

### TypeOfGearHelicalPair

Gets or sets the gear helical pair type

```csharp
public KissSoftInterface.GearHelicalPairType TypeOfGearHelicalPair { get; set; }
```

#### Property Value

 [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[GearHelicalPairType](VM.Managed.DAFUL.GearTrain.KissSoftInterface.GearHelicalPairType.md)


