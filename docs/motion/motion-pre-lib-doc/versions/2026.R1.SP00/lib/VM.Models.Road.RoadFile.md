# Class RoadFile
<a id="VM_Models_Road_RoadFile"></a>

Namespace: [VM.Models.Road](VM.Models.Road.md)  
Assembly: VM.Models.Road.dll  

```csharp
public class RoadFile
```

#### Inheritance

object ← 
[RoadFile](VM.Models.Road.RoadFile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Road_RoadFile_DefaultUIncrement"></a> DefaultUIncrement

```csharp
public double DefaultUIncrement { get; }
```

#### Property Value

 double

### <a id="VM_Models_Road_RoadFile_DefaultVIncrement"></a> DefaultVIncrement

```csharp
public double DefaultVIncrement { get; }
```

#### Property Value

 double

### <a id="VM_Models_Road_RoadFile_NumUPoints"></a> NumUPoints

```csharp
public ulong NumUPoints { get; }
```

#### Property Value

 ulong

### <a id="VM_Models_Road_RoadFile_NumVPoints"></a> NumVPoints

```csharp
public ulong NumVPoints { get; }
```

#### Property Value

 ulong

### <a id="VM_Models_Road_RoadFile_NumberOfNodes"></a> NumberOfNodes

```csharp
public ulong NumberOfNodes { get; }
```

#### Property Value

 ulong

### <a id="VM_Models_Road_RoadFile_NumberOfQuadElements"></a> NumberOfQuadElements

```csharp
public ulong NumberOfQuadElements { get; }
```

#### Property Value

 ulong

### <a id="VM_Models_Road_RoadFile_NumberOfTriElements"></a> NumberOfTriElements

```csharp
public ulong NumberOfTriElements { get; }
```

#### Property Value

 ulong

### <a id="VM_Models_Road_RoadFile_RoadLength"></a> RoadLength

```csharp
public double RoadLength { get; }
```

#### Property Value

 double

### <a id="VM_Models_Road_RoadFile_Type"></a> Type

```csharp
public RoadType Type { get; }
```

#### Property Value

 [RoadType](VM.Models.Road.RoadType.md)

### <a id="VM_Models_Road_RoadFile_UEnd"></a> UEnd

```csharp
public double UEnd { get; }
```

#### Property Value

 double

### <a id="VM_Models_Road_RoadFile_UStart"></a> UStart

```csharp
public double UStart { get; }
```

#### Property Value

 double

### <a id="VM_Models_Road_RoadFile_VEnd"></a> VEnd

```csharp
public double VEnd { get; }
```

#### Property Value

 double

### <a id="VM_Models_Road_RoadFile_VStart"></a> VStart

```csharp
public double VStart { get; }
```

#### Property Value

 double

## Methods

### <a id="VM_Models_Road_RoadFile_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_Models_Road_RoadFile_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` bool

### <a id="VM_Models_Road_RoadFile_Finalize"></a> \~RoadFile\(\)

```csharp
protected ~RoadFile()
```

### <a id="VM_Models_Road_RoadFile_GetDefaultUVPointsCount"></a> GetDefaultUVPointsCount\(\)

```csharp
public (ulong U, ulong V) GetDefaultUVPointsCount()
```

#### Returns

 \(ulong U, ulong V\)

### <a id="VM_Models_Road_RoadFile_GetNodeDistanceAndUVByTargetNodeCount_System_UInt64_"></a> GetNodeDistanceAndUVByTargetNodeCount\(ulong\)

```csharp
public (ulong U, ulong V, double Distance) GetNodeDistanceAndUVByTargetNodeCount(ulong dTargetNodeCount)
```

#### Parameters

`dTargetNodeCount` ulong

#### Returns

 \(ulong U, ulong V, double Distance\)

### <a id="VM_Models_Road_RoadFile_GetRoadMesh_System_Double_System_Boolean_System_Boolean_VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMesh\(double, bool, bool, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, int[] Connectivities) GetRoadMesh(double dTargetMeshSize = -1, bool bPreferQuadMesh = false, bool bIncludeElementSizeInConnectivity = false, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`dTargetMeshSize` double

`bPreferQuadMesh` bool

`bIncludeElementSizeInConnectivity` bool

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] MeshPoints, int\[\] Connectivities\)

### <a id="VM_Models_Road_RoadFile_GetRoadMeshPointsAndDeltaZsByTargetElementSize_System_UInt64__System_UInt64__System_Double_VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMeshPointsAndDeltaZsByTargetElementSize\(out ulong, out ulong, double, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, double[] DeltaZs) GetRoadMeshPointsAndDeltaZsByTargetElementSize(out ulong nU, out ulong nV, double targetDelta = -1, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` ulong

`nV` ulong

`targetDelta` double

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] MeshPoints, double\[\] DeltaZs\)

### <a id="VM_Models_Road_RoadFile_GetRoadMeshPointsAndDeltaZsByUVCount_System_UInt64__System_UInt64__VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMeshPointsAndDeltaZsByUVCount\(ref ulong, ref ulong, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, double[] DeltaZs) GetRoadMeshPointsAndDeltaZsByUVCount(ref ulong nU, ref ulong nV, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` ulong

`nV` ulong

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] MeshPoints, double\[\] DeltaZs\)

### <a id="VM_Models_Road_RoadFile_GetRoadMeshPointsAnsDeltsaZsByTargetNodeCount_System_UInt64__System_UInt64__System_UInt64_VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMeshPointsAnsDeltsaZsByTargetNodeCount\(out ulong, out ulong, ulong, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, double[] DeltaZs) GetRoadMeshPointsAnsDeltsaZsByTargetNodeCount(out ulong nU, out ulong nV, ulong targetNodeCount = 0, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` ulong

`nV` ulong

`targetNodeCount` ulong

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] MeshPoints, double\[\] DeltaZs\)

### <a id="VM_Models_Road_RoadFile_GetRoadMeshPointsByTargetElementSize_System_UInt64__System_UInt64__System_Double_VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMeshPointsByTargetElementSize\(out ulong, out ulong, double, RoadProgressCalllback\)

```csharp
public Vector[] GetRoadMeshPointsByTargetElementSize(out ulong nU, out ulong nV, double targetDelta = -1, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` ulong

`nV` ulong

`targetDelta` double

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 Vector\[\]

### <a id="VM_Models_Road_RoadFile_GetRoadMeshPointsByTargetNodeCount_System_UInt64__System_UInt64__System_UInt64_VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMeshPointsByTargetNodeCount\(out ulong, out ulong, ulong, RoadProgressCalllback\)

```csharp
public Vector[] GetRoadMeshPointsByTargetNodeCount(out ulong nU, out ulong nV, ulong targetNodeCount = 0, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` ulong

`nV` ulong

`targetNodeCount` ulong

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 Vector\[\]

### <a id="VM_Models_Road_RoadFile_GetRoadMeshPointsByUVCount_System_UInt64__System_UInt64__VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMeshPointsByUVCount\(ref ulong, ref ulong, RoadProgressCalllback\)

```csharp
public Vector[] GetRoadMeshPointsByUVCount(ref ulong nU, ref ulong nV, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`nU` ulong

`nV` ulong

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 Vector\[\]

### <a id="VM_Models_Road_RoadFile_GetRoadMeshWithDeltaZ_System_Double_System_Boolean_System_Boolean_VM_Models_Road_RoadFile_RoadProgressCalllback_"></a> GetRoadMeshWithDeltaZ\(double, bool, bool, RoadProgressCalllback\)

```csharp
public (Vector[] MeshPoints, int[] Connectivities, double[] DeltaZs) GetRoadMeshWithDeltaZ(double dTargetMeshSize = -1, bool bPreferQuadMesh = false, bool bIncludeElementSizeInConnectivity = false, RoadFile.RoadProgressCalllback progressCalllback = null)
```

#### Parameters

`dTargetMeshSize` double

`bPreferQuadMesh` bool

`bIncludeElementSizeInConnectivity` bool

`progressCalllback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadProgressCalllback](VM.Models.Road.RoadFile.RoadProgressCalllback.md)

#### Returns

 \(Vector\[\] MeshPoints, int\[\] Connectivities, double\[\] DeltaZs\)

### <a id="VM_Models_Road_RoadFile_GetUVPointsCountByTargetPointDistance_System_Double_"></a> GetUVPointsCountByTargetPointDistance\(double\)

```csharp
public (ulong U, ulong V) GetUVPointsCountByTargetPointDistance(double targetDistanceBetweenPoints)
```

#### Parameters

`targetDistanceBetweenPoints` double

#### Returns

 \(ulong U, ulong V\)

### <a id="VM_Models_Road_RoadFile_Initialize_VM_Models_Road_RoadFile_RoadMessageCalllback_VM_Models_Road_MessageSeverity_System_Boolean_"></a> Initialize\(RoadMessageCalllback, MessageSeverity, bool\)

```csharp
public static void Initialize(RoadFile.RoadMessageCalllback callback, MessageSeverity severity, bool bDoNotUseCosinLib = false)
```

#### Parameters

`callback` [RoadFile](VM.Models.Road.RoadFile.md).[RoadMessageCalllback](VM.Models.Road.RoadFile.RoadMessageCalllback.md)

`severity` [MessageSeverity](VM.Models.Road.MessageSeverity.md)

`bDoNotUseCosinLib` bool

### <a id="VM_Models_Road_RoadFile_Open_System_String_System_Double_"></a> Open\(string, double\)

```csharp
public static RoadFile Open(string pathRoadFile, double dLengthFactor = 1)
```

#### Parameters

`pathRoadFile` string

`dLengthFactor` double

#### Returns

 [RoadFile](VM.Models.Road.RoadFile.md)

### <a id="VM_Models_Road_RoadFile_SetCriLibPath_System_String_"></a> SetCriLibPath\(string\)

```csharp
public static void SetCriLibPath(string pathLibCri)
```

#### Parameters

`pathLibCri` string

### <a id="VM_Models_Road_RoadFile_Uninitialize"></a> Uninitialize\(\)

```csharp
public static void Uninitialize()
```

