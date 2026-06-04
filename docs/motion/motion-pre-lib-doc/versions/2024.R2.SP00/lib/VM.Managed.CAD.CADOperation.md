# Class CADOperation

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the CAD Operation.

```csharp
public class CADOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CADOperation](VM.Managed.CAD.CADOperation.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CADOperation\(\)

```csharp
public CADOperation()
```

## Methods

### BuildBody\(Body\)

```csharp
public static void BuildBody(Body body)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

### CheckValidationAboutBuild\(Body, string\)

```csharp
public static bool CheckValidationAboutBuild(Body body, string strXml)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeleteBuilder\(List<ObjectBase\>, Document, bool\)

```csharp
public static void DeleteBuilder(List<ObjectBase> lstDeletedBuilder, Document doc, bool bModified)
```

#### Parameters

`lstDeletedBuilder` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

`doc` [Document](VM.Managed.Document.md)

`bModified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetBodyFaces\(Body, ICollection<int\>\)

```csharp
public static List<Face> GetBodyFaces(Body bd, ICollection<int> Colors)
```

#### Parameters

`bd` [Body](VM.Managed.CAD.Body.md)

`Colors` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Face](VM.Managed.CAD.Face.md)\>

### GetBodyFaces\(Body\)

```csharp
public static List<Face> GetBodyFaces(Body bd)
```

#### Parameters

`bd` [Body](VM.Managed.CAD.Body.md)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Face](VM.Managed.CAD.Face.md)\>

### GetBodyNameAttribute\(Body\)

```csharp
public static string GetBodyNameAttribute(Body body)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetBoundingBox\(Body, TMatrix, ref Vector, ref Vector, BoxingMode\)

```csharp
public static bool GetBoundingBox(Body body, TMatrix matT, ref Vector vecMinPt, ref Vector vecMaxPt, BoxingMode boxingMode)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`matT` TMatrix

`vecMinPt` Vector

`vecMaxPt` Vector

`boxingMode` [BoxingMode](VM.Managed.CAD.BoxingMode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetDefaultMaxPenetration\(Face, ref double\)

```csharp
public static bool GetDefaultMaxPenetration(Face face, ref double dMaxPenetration)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEdgeLength\(Edge\)

```csharp
public static double GetEdgeLength(Edge edge)
```

#### Parameters

`edge` [Edge](VM.Managed.CAD.Edge.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetFaceArea\(Face\)

```csharp
public static double GetFaceArea(Face face)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetFacetInformationForFace\(Face, ref VectorBase\[\], ref int\[\]\)

```csharp
public static void GetFacetInformationForFace(Face face, ref VectorBase[] arPt, ref int[] arConnectivity)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

`arPt` [VectorBase](VM.Managed.VectorBase.md)\[\]

`arConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### GetManyTopologyColor\(IEnumerable<Topology\>\)

```csharp
public static Dictionary<UIntPtr, Color> GetManyTopologyColor(IEnumerable<Topology> topologies)
```

#### Parameters

`topologies` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Topology](VM.Managed.CAD.Topology.md)\>

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr), [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

### GetPiecewiseCurve\(List<Edge\>, double, double, double, ref bool\)

```csharp
public static List<VectorBase> GetPiecewiseCurve(List<Edge> lstEdges, double dTol, double dLen, double dAngle, ref bool bCloseLoop)
```

#### Parameters

`lstEdges` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Edge](VM.Managed.CAD.Edge.md)\>

`dTol` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLen` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bCloseLoop` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

### GetPointAndDirectionFromFacet\(Face, VectorBase, VectorBase\)

```csharp
public static bool GetPointAndDirectionFromFacet(Face face, VectorBase vecPoint, VectorBase vecDirection)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

`vecPoint` [VectorBase](VM.Managed.VectorBase.md)

`vecDirection` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetTopologyColor\(Topology, ref Color\)

```csharp
public static bool GetTopologyColor(Topology topol, ref Color color)
```

#### Parameters

`topol` [Topology](VM.Managed.CAD.Topology.md)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetVoidCount\(Body\)

```csharp
public static int GetVoidCount(Body body)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetVoidPoints\(Body, double\[\], ref VectorBase\[\]\)

```csharp
public static int GetVoidPoints(Body body, double[] ardScale, ref VectorBase[] arPoints)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`ardScale` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`arPoints` [VectorBase](VM.Managed.VectorBase.md)\[\]

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveDuplicatedEvent\(Document\)

```csharp
public static void RemoveDuplicatedEvent(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

### SetGeometryRepresentation\(IDrawFacet, string, string, bool\)

```csharp
public static bool SetGeometryRepresentation(IDrawFacet facet, string strGeom, string strDefaultGeom, bool bUseRedraw)
```

#### Parameters

`facet` [IDrawFacet](VM.Managed.IDrawFacet.md)

`strGeom` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strDefaultGeom` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bUseRedraw` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetNameAttribute\(Body, string, bool, string\)

```csharp
public static void SetNameAttribute(Body body, string strName, bool bUseAttribute, string strOldName)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bUseAttribute` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`strOldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetSelectionObject\(Document3D\)

```csharp
public static void SetSelectionObject(Document3D doc)
```

#### Parameters

`doc` [Document3D](VM.Managed.Document3D.md)


