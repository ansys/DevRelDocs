# <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder"></a> Class GeometryBuilder

Namespace: [VM.Models.Post.Geometrybuilder](VM.Models.Post.Geometrybuilder.md)  
Assembly: VM.Models.Post.Geometrybuilder.dll  

```csharp
public class GeometryBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GeometryBuilder](VM.Models.Post.Geometrybuilder.GeometryBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder__ctor"></a> GeometryBuilder\(\)

```csharp
public GeometryBuilder()
```

## Methods

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GenerateBeamGroupDisplacement_System_String_System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_"></a> GenerateBeamGroupDisplacement\(string, double\[\], double\[\], double\[\], double\[\], double\[\], int\)

```csharp
public static double[] GenerateBeamGroupDisplacement(string beamSectionType, double[] param, double[] startPt, double[] endPt, double[] smat, double[] omat, int renderingType)
```

#### Parameters

`beamSectionType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`param` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`startPt` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`endPt` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`smat` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`omat` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`renderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GenerateBeamGroupGeometry_VM_Models_Post_IRigidBeamGroup_System_Collections_Generic_Dictionary_System_Int32_VM_Vector__System_Int32__"></a> GenerateBeamGroupGeometry\(IRigidBeamGroup, Dictionary<int, Vector\>, ref int\)

```csharp
public static void GenerateBeamGroupGeometry(IRigidBeamGroup rigidBeamGroup, Dictionary<int, Vector> markers, ref int partCount)
```

#### Parameters

`rigidBeamGroup` IRigidBeamGroup

`markers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), Vector\>

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GenerateFEBeamGroupDisplacement_System_String_System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_"></a> GenerateFEBeamGroupDisplacement\(string, double\[\], double\[\], double\[\], double\[\], double\[\], int\)

```csharp
public static double[] GenerateFEBeamGroupDisplacement(string beamSectionType, double[] param, double[] startPt, double[] endPt, double[] smat, double[] omat, int renderingType)
```

#### Parameters

`beamSectionType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`param` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`startPt` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`endPt` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`smat` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`omat` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`renderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GenerateFEBeamGroupGeometry_VM_Models_Post_BeamGroups_FEBeamGroup_VM_Models_Post_IBodyBase___System_Int32__"></a> GenerateFEBeamGroupGeometry\(FEBeamGroup, IBodyBase\[\], ref int\)

```csharp
public static void GenerateFEBeamGroupGeometry(FEBeamGroup febeamGroup, IBodyBase[] parts, ref int partCount)
```

#### Parameters

`febeamGroup` FEBeamGroup

`parts` IBodyBase\[\]

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GenerateSeaLevelGeometry_VM_Models_Post_SeaLevel_System_Int32__"></a> GenerateSeaLevelGeometry\(SeaLevel, ref int\)

```csharp
public static void GenerateSeaLevelGeometry(SeaLevel sealevel, ref int partCount)
```

#### Parameters

`sealevel` SeaLevel

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GenerateSpringForceDisplacement_VM_Models_Post_Forces_TSpringDamper_VM_Vector_VM_Vector_System_Double___"></a> GenerateSpringForceDisplacement\(TSpringDamper, Vector, Vector, double\[\]\)

```csharp
public static double[] GenerateSpringForceDisplacement(TSpringDamper springInfo, Vector orgBaseMarkerPt, Vector orgActionMarkerPt, double[] initialnodes)
```

#### Parameters

`springInfo` TSpringDamper

`orgBaseMarkerPt` Vector

`orgActionMarkerPt` Vector

`initialnodes` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GenerateSpringGeometry_VM_Models_Post_Forces_TSpringDamper_VM_Vector_VM_Vector_System_Int32__"></a> GenerateSpringGeometry\(TSpringDamper, Vector, Vector, ref int\)

```csharp
public static void GenerateSpringGeometry(TSpringDamper springInfo, Vector baseMarkerPt, Vector actionMarkerPt, ref int partCount)
```

#### Parameters

`springInfo` TSpringDamper

`baseMarkerPt` Vector

`actionMarkerPt` Vector

`partCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Geometrybuilder_GeometryBuilder_GetBeamGroupReneringType_VM_Models_Post_RenderingType_"></a> GetBeamGroupReneringType\(RenderingType\)

```csharp
public static int GetBeamGroupReneringType(RenderingType type)
```

#### Parameters

`type` RenderingType

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

