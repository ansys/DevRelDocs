# Class RoadFile

Namespace: [VM.Models.Road](VM.Models.Road.md)  
Assembly: VM.Models.Road.dll  

```csharp
public class RoadFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RoadFile](VM.Models.Road.RoadFile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### DefaultUIncrement

```csharp
public double DefaultUIncrement { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DefaultVIncrement

```csharp
public double DefaultVIncrement { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NumUPoints

```csharp
public ulong NumUPoints { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### NumVPoints

```csharp
public ulong NumVPoints { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### NumberOfNodes

```csharp
public ulong NumberOfNodes { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### NumberOfQuadElements

```csharp
public ulong NumberOfQuadElements { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### NumberOfTriElements

```csharp
public ulong NumberOfTriElements { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### RoadLength

```csharp
public double RoadLength { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Type

```csharp
public RoadType Type { get; }
```

#### Property Value

 [RoadType](VM.Models.Road.RoadType.md)

### UEnd

```csharp
public double UEnd { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UStart

```csharp
public double UStart { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VEnd

```csharp
public double VEnd { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VStart

```csharp
public double VStart { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Dispose\(\)

```csharp
public void Dispose()
```

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### \~RoadFile\(\)

```csharp
protected ~RoadFile()
```

### GetDefaultUVPointsCount\(\)

```csharp
public (ulong U, ulong V) GetDefaultUVPointsCount()
```

#### Returns

 \([ulong](https://learn.microsoft.com/dotnet/api/system.uint64) [U](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint64,system.uint64\-.u), [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) [V](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint64,system.uint64\-.v)\)

### GetNodeDistanceAndUVByTargetNodeCount\(ulong\)

```csharp
public (ulong U, ulong V, double Distance) GetNodeDistanceAndUVByTargetNodeCount(ulong dTargetNodeCount)
```

#### Parameters

`dTargetNodeCount` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Returns

 \([ulong](https://learn.microsoft.com/dotnet/api/system.uint64) [U](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint64,system.uint64,system.double\-.u), [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) [V](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint64,system.uint64,system.double\-.v), [double](https://learn.microsoft.com/dotnet/api/system.double) [Distance](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint64,system.uint64,system.double\-.distance)\)

### GetRoadMesh\(double, bool, bool, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, int[] Connectivities) GetRoadMesh(double dTargetMeshSize = -1, bool bPreferQuadMesh = false, bool bIncludeElementSizeInConnectivity = false, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`dTargetMeshSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bPreferQuadMesh` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bIncludeElementSizeInConnectivity` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] [MeshPoints](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.int32\[\]\-.meshpoints), [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\] [Connectivities](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.int32\[\]\-.connectivities)\)

### GetRoadMeshPointsAndDeltaZsByTargetElementSize\(out ulong, out ulong, double, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, double[] DeltaZs) GetRoadMeshPointsAndDeltaZsByTargetElementSize(out ulong nU, out ulong nV, double targetDelta = -1, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`targetDelta` [double](https://learn.microsoft.com/dotnet/api/system.double)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] [MeshPoints](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.double\[\]\-.meshpoints), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\] [DeltaZs](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.double\[\]\-.deltazs)\)

### GetRoadMeshPointsAndDeltaZsByUVCount\(ref ulong, ref ulong, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, double[] DeltaZs) GetRoadMeshPointsAndDeltaZsByUVCount(ref ulong nU, ref ulong nV, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] [MeshPoints](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.double\[\]\-.meshpoints), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\] [DeltaZs](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.double\[\]\-.deltazs)\)

### GetRoadMeshPointsAnsDeltsaZsByTargetNodeCount\(out ulong, out ulong, ulong, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, double[] DeltaZs) GetRoadMeshPointsAnsDeltsaZsByTargetNodeCount(out ulong nU, out ulong nV, ulong targetNodeCount = 0, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`targetNodeCount` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] [MeshPoints](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.double\[\]\-.meshpoints), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\] [DeltaZs](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.double\[\]\-.deltazs)\)

### GetRoadMeshPointsByTargetElementSize\(out ulong, out ulong, double, RoadProgressCalllback\)

```csharp
public Vector[] GetRoadMeshPointsByTargetElementSize(out ulong nU, out ulong nV, double targetDelta = -1, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`targetDelta` [double](https://learn.microsoft.com/dotnet/api/system.double)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 Vector\[\]

### GetRoadMeshPointsByTargetNodeCount\(out ulong, out ulong, ulong, RoadProgressCalllback\)

```csharp
public Vector[] GetRoadMeshPointsByTargetNodeCount(out ulong nU, out ulong nV, ulong targetNodeCount = 0, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`targetNodeCount` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 Vector\[\]

### GetRoadMeshPointsByUVCount\(ref ulong, ref ulong, RoadProgressCalllback\)

```csharp
public Vector[] GetRoadMeshPointsByUVCount(ref ulong nU, ref ulong nV, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`nV` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 Vector\[\]

### GetRoadMeshWithDeltaZ\(double, bool, bool, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, int[] Connectivities, double[] DeltaZs) GetRoadMeshWithDeltaZ(double dTargetMeshSize = -1, bool bPreferQuadMesh = false, bool bIncludeElementSizeInConnectivity = false, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`dTargetMeshSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bPreferQuadMesh` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bIncludeElementSizeInConnectivity` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] [MeshPoints](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.int32\[\],system.double\[\]\-.meshpoints), [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\] [Connectivities](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.int32\[\],system.double\[\]\-.connectivities), [double](https://learn.microsoft.com/dotnet/api/system.double)\[\] [DeltaZs](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector\[\],system.int32\[\],system.double\[\]\-.deltazs)\)

### GetUVPointsCountByTargetPointDistance\(double\)

```csharp
public (ulong U, ulong V) GetUVPointsCountByTargetPointDistance(double targetDistanceBetweenPoints)
```

#### Parameters

`targetDistanceBetweenPoints` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 \([ulong](https://learn.microsoft.com/dotnet/api/system.uint64) [U](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint64,system.uint64\-.u), [ulong](https://learn.microsoft.com/dotnet/api/system.uint64) [V](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.uint64,system.uint64\-.v)\)

### Initialize\(RoadMessageCalllback, MessageSeverity, bool\)

```csharp
public static void Initialize(RoadFile.RoadMessageCalllback callback, MessageSeverity severity, bool bDoNotUseCosinLib = false)
```

#### Parameters

`callback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadMessageCalllback](VM.Models.Road.RoadFile.RoadMessageCalllback.md)

`severity` [MessageSeverity](VM.Models.Road.MessageSeverity.md)

`bDoNotUseCosinLib` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Open\(string, double\)

```csharp
public static RoadFile Open(string pathRoadFile, double dLengthFactor = 1)
```

#### Parameters

`pathRoadFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [RoadFile](VM.Models.Road.RoadFile.md)

### SetCriLibPath\(string\)

```csharp
public static void SetCriLibPath(string pathLibCri)
```

#### Parameters

`pathLibCri` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Uninitialize\(\)

```csharp
public static void Uninitialize()
```


