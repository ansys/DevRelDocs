# Class LeafSpringExtensions

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

```csharp
public static class LeafSpringExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LeafSpringExtensions](VM.Models.Pre.Force.LeafSpringExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### GetLeafBeamElementPositions\(IOutputReader, int, int, \(int A, int B\), double\)

```csharp
public static Vector[] GetLeafBeamElementPositions(IOutputReader outputReader, int beamProfilesCount, int leafIndex, (int A, int B) loadIndex, double variation)
```

#### Parameters

`outputReader` IOutputReader

`beamProfilesCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`leafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`loadIndex` \([int](https://learn.microsoft.com/dotnet/api/system.int32) [A](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.a), [int](https://learn.microsoft.com/dotnet/api/system.int32) [B](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.b)\)

`variation` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 Vector\[\]

### GetLoadIndex\(\(double Time, double Force\)\[\], double\)

```csharp
public static (int A, int B) GetLoadIndex((double Time, double Force)[] loadResult, double designLoad)
```

#### Parameters

`loadResult` \([double](https://learn.microsoft.com/dotnet/api/system.double) [Time](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.time), [double](https://learn.microsoft.com/dotnet/api/system.double) [Force](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.force)\)\[\]

`designLoad` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 \([int](https://learn.microsoft.com/dotnet/api/system.int32) [A](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.a), [int](https://learn.microsoft.com/dotnet/api/system.int32) [B](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.b)\)

### GetLoadResult\(IOutputReader\)

```csharp
public static (double Time, double Force)[] GetLoadResult(IOutputReader outputReader)
```

#### Parameters

`outputReader` IOutputReader

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [Time](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.time), [double](https://learn.microsoft.com/dotnet/api/system.double) [Force](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.force)\)\[\]

### GetLoadVariation\(IOutputReader, double, \(int A, int B\)\)

```csharp
public static double GetLoadVariation(IOutputReader outputReader, double designLoad, (int A, int B) loadIndex)
```

#### Parameters

`outputReader` IOutputReader

`designLoad` [double](https://learn.microsoft.com/dotnet/api/system.double)

`loadIndex` \([int](https://learn.microsoft.com/dotnet/api/system.int32) [A](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.a), [int](https://learn.microsoft.com/dotnet/api/system.int32) [B](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.b)\)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetOutputReader\(string\)

```csharp
public static IOutputReader GetOutputReader(string resultPath)
```

#### Parameters

`resultPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 IOutputReader

### GetResult\(IOutputReader, string, params string\[\]\)

```csharp
public static (double Time, double Value)[] GetResult(IOutputReader outputReader, string target, params string[] paths)
```

#### Parameters

`outputReader` IOutputReader

`target` [string](https://learn.microsoft.com/dotnet/api/system.string)

`paths` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [Time](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.time), [double](https://learn.microsoft.com/dotnet/api/system.double) [Value](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.value)\)\[\]

### GetTransformMatrix\(IOutputReader, string, \(int A, int B\), double, TMatrix?\)

```csharp
public static TMatrix GetTransformMatrix(IOutputReader outputReader, string targetName, (int A, int B) loadIndex, double variation, TMatrix? repositionMatrix = null)
```

#### Parameters

`outputReader` IOutputReader

`targetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`loadIndex` \([int](https://learn.microsoft.com/dotnet/api/system.int32) [A](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.a), [int](https://learn.microsoft.com/dotnet/api/system.int32) [B](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.int32,system.int32\-.b)\)

`variation` [double](https://learn.microsoft.com/dotnet/api/system.double)

`repositionMatrix` TMatrix?

#### Returns

 TMatrix

### IsTestSimulationCompleted\(IOutputReader, double\)

```csharp
public static bool IsTestSimulationCompleted(IOutputReader outputReader, double endTime)
```

#### Parameters

`outputReader` IOutputReader

`endTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


