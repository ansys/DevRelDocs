# Class CADOperation
<a id="VM_Managed_CAD_CADOperation"></a>

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the CAD Operation.

```csharp
public class CADOperation
```

#### Inheritance

object ← 
[CADOperation](VM.Managed.CAD.CADOperation.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_CADOperation__ctor"></a> CADOperation\(\)

```csharp
public CADOperation()
```

## Methods

### <a id="VM_Managed_CAD_CADOperation_BuildBody_VM_Managed_CAD_Body_"></a> BuildBody\(Body\)

```csharp
public static void BuildBody(Body body)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

### <a id="VM_Managed_CAD_CADOperation_CheckValidationAboutBuild_VM_Managed_CAD_Body_System_String_"></a> CheckValidationAboutBuild\(Body, string\)

```csharp
public static bool CheckValidationAboutBuild(Body body, string strXml)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`strXml` string

#### Returns

 bool

### <a id="VM_Managed_CAD_CADOperation_DeleteBuilder_System_Collections_Generic_List_VM_Managed_ObjectBase__VM_Managed_Document_System_Boolean_"></a> DeleteBuilder\(List<ObjectBase\>, Document, bool\)

```csharp
public static void DeleteBuilder(List<ObjectBase> lstDeletedBuilder, Document doc, bool bModified)
```

#### Parameters

`lstDeletedBuilder` List<[ObjectBase](VM.Managed.ObjectBase.md)\>

`doc` [Document](VM.Managed.Document.md)

`bModified` bool

### <a id="VM_Managed_CAD_CADOperation_GetBodyFaces_VM_Managed_CAD_Body_System_Collections_Generic_ICollection_System_Int32__"></a> GetBodyFaces\(Body, ICollection<int\>\)

```csharp
public static List<Face> GetBodyFaces(Body bd, ICollection<int> Colors)
```

#### Parameters

`bd` [Body](VM.Managed.CAD.Body.md)

`Colors` ICollection<int\>

#### Returns

 List<[Face](VM.Managed.CAD.Face.md)\>

### <a id="VM_Managed_CAD_CADOperation_GetBodyFaces_VM_Managed_CAD_Body_"></a> GetBodyFaces\(Body\)

```csharp
public static List<Face> GetBodyFaces(Body bd)
```

#### Parameters

`bd` [Body](VM.Managed.CAD.Body.md)

#### Returns

 List<[Face](VM.Managed.CAD.Face.md)\>

### <a id="VM_Managed_CAD_CADOperation_GetBodyNameAttribute_VM_Managed_CAD_Body_"></a> GetBodyNameAttribute\(Body\)

```csharp
public static string GetBodyNameAttribute(Body body)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

#### Returns

 string

### <a id="VM_Managed_CAD_CADOperation_GetBoundingBox_VM_Managed_CAD_Body_VM_TMatrix_VM_Vector__VM_Vector__VM_Managed_CAD_BoxingMode_"></a> GetBoundingBox\(Body, TMatrix, ref Vector, ref Vector, BoxingMode\)

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

 bool

### <a id="VM_Managed_CAD_CADOperation_GetDefaultMaxPenetration_VM_Managed_CAD_Face_System_Double__"></a> GetDefaultMaxPenetration\(Face, ref double\)

```csharp
public static bool GetDefaultMaxPenetration(Face face, ref double dMaxPenetration)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

`dMaxPenetration` double

#### Returns

 bool

### <a id="VM_Managed_CAD_CADOperation_GetEdgeLength_VM_Managed_CAD_Edge_"></a> GetEdgeLength\(Edge\)

```csharp
public static double GetEdgeLength(Edge edge)
```

#### Parameters

`edge` [Edge](VM.Managed.CAD.Edge.md)

#### Returns

 double

### <a id="VM_Managed_CAD_CADOperation_GetFaceArea_VM_Managed_CAD_Face_"></a> GetFaceArea\(Face\)

```csharp
public static double GetFaceArea(Face face)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

#### Returns

 double

### <a id="VM_Managed_CAD_CADOperation_GetFacetInformationForFace_VM_Managed_CAD_Face_VM_Models_Pre_FacetOption_VM_Managed_VectorBase____System_Int32____"></a> GetFacetInformationForFace\(Face, FacetOption, ref VectorBase\[\], ref int\[\]\)

```csharp
public static void GetFacetInformationForFace(Face face, FacetOption options, ref VectorBase[] arPt, ref int[] arConnectivity)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

`options` [FacetOption](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/FacetOption.cs)

`arPt` [VectorBase](VM.Managed.VectorBase.md)\[\]

`arConnectivity` int\[\]

### <a id="VM_Managed_CAD_CADOperation_GetManyTopologyColor_System_Collections_Generic_IEnumerable_VM_Managed_CAD_Topology__"></a> GetManyTopologyColor\(IEnumerable<Topology\>\)

```csharp
public static Dictionary<UIntPtr, Color> GetManyTopologyColor(IEnumerable<Topology> topologies)
```

#### Parameters

`topologies` IEnumerable<[Topology](VM.Managed.CAD.Topology.md)\>

#### Returns

 Dictionary<UIntPtr, Color\>

### <a id="VM_Managed_CAD_CADOperation_GetPiecewiseCurve_System_Collections_Generic_List_VM_Managed_CAD_Edge__System_Double_System_Double_System_Double_System_Boolean__"></a> GetPiecewiseCurve\(List<Edge\>, double, double, double, ref bool\)

```csharp
public static List<VectorBase> GetPiecewiseCurve(List<Edge> lstEdges, double dTol, double dLen, double dAngle, ref bool bCloseLoop)
```

#### Parameters

`lstEdges` List<[Edge](VM.Managed.CAD.Edge.md)\>

`dTol` double

`dLen` double

`dAngle` double

`bCloseLoop` bool

#### Returns

 List<[VectorBase](VM.Managed.VectorBase.md)\>

### <a id="VM_Managed_CAD_CADOperation_GetPointAndDirectionFromFacet_VM_Managed_CAD_Face_VM_Models_Pre_FacetOption_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> GetPointAndDirectionFromFacet\(Face, FacetOption, VectorBase, VectorBase\)

```csharp
public static bool GetPointAndDirectionFromFacet(Face face, FacetOption options, VectorBase vecPoint, VectorBase vecDirection)
```

#### Parameters

`face` [Face](VM.Managed.CAD.Face.md)

`options` [FacetOption](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/FacetOption.cs)

`vecPoint` [VectorBase](VM.Managed.VectorBase.md)

`vecDirection` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 bool

### <a id="VM_Managed_CAD_CADOperation_GetTopologyColor_VM_Managed_CAD_Topology_System_Drawing_Color__"></a> GetTopologyColor\(Topology, ref Color\)

```csharp
public static bool GetTopologyColor(Topology topol, ref Color color)
```

#### Parameters

`topol` [Topology](VM.Managed.CAD.Topology.md)

`color` Color

#### Returns

 bool

### <a id="VM_Managed_CAD_CADOperation_GetVoidCount_VM_Managed_CAD_Body_"></a> GetVoidCount\(Body\)

```csharp
public static int GetVoidCount(Body body)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

#### Returns

 int

### <a id="VM_Managed_CAD_CADOperation_GetVoidPoints_VM_Managed_CAD_Body_System_Double___VM_Managed_VectorBase____"></a> GetVoidPoints\(Body, double\[\], ref VectorBase\[\]\)

```csharp
public static int GetVoidPoints(Body body, double[] ardScale, ref VectorBase[] arPoints)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`ardScale` double\[\]

`arPoints` [VectorBase](VM.Managed.VectorBase.md)\[\]

#### Returns

 int

### <a id="VM_Managed_CAD_CADOperation_ReDrawForHistory_VM_Managed_Render_IDrawIcon_"></a> ReDrawForHistory\(IDrawIcon\)

```csharp
public static void ReDrawForHistory(IDrawIcon itfDrawIcon)
```

#### Parameters

`itfDrawIcon` [IDrawIcon](VM.Managed.Render.IDrawIcon.md)

### <a id="VM_Managed_CAD_CADOperation_RemoveDuplicatedEvent_VM_Managed_Document_"></a> RemoveDuplicatedEvent\(Document\)

```csharp
public static void RemoveDuplicatedEvent(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

### <a id="VM_Managed_CAD_CADOperation_SetNameAttribute_VM_Managed_CAD_Body_System_String_System_Boolean_System_String_"></a> SetNameAttribute\(Body, string, bool, string\)

```csharp
public static void SetNameAttribute(Body body, string strName, bool bUseAttribute, string strOldName)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`strName` string

`bUseAttribute` bool

`strOldName` string

### <a id="VM_Managed_CAD_CADOperation_SetSelectionObject_VM_Managed_Document3D_"></a> SetSelectionObject\(Document3D\)

```csharp
public static void SetSelectionObject(Document3D doc)
```

#### Parameters

`doc` [Document3D](VM.Managed.Document3D.md)

