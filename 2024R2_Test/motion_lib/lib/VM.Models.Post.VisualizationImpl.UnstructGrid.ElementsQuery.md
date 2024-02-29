# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ElementsQuery"></a> Class ElementsQuery

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class ElementsQuery : ElementsQuery, IElementsQuery
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ElementsQuery ← 
[ElementsQuery](VM.Models.Post.VisualizationImpl.UnstructGrid.ElementsQuery.md)

#### Implements

IElementsQuery

#### Inherited Members

ElementsQuery.swigCMemOwn, 
ElementsQuery.getCPtr\(ElementsQuery\), 
ElementsQuery.Dispose\(\), 
ElementsQuery.setDisplacements\(DataPartDisplacement\), 
ElementsQuery.nodeCoordinate\(uint\), 
ElementsQuery.elementCentroid\(uint\), 
ElementsQuery.elementCoordinates\(uint\), 
ElementsQuery.elementVertices\(uint\), 
ElementsQuery.elementContainingCoordinate\(Vec3d, out uint\), 
ElementsQuery.elementsContainingEdge\(uint, uint, SizeTArr\), 
ElementsQuery.elementEdges\(uint\), 
ElementsQuery.elementVolume\(uint\), 
ElementsQuery.elementVolumes\(\), 
ElementsQuery.allElementCentroids\(DoubleArr\), 
ElementsQuery.elementSurfaceCentroid\(uint, uint\), 
ElementsQuery.elementSurfaceCoordinates\(uint, uint\), 
ElementsQuery.elementSurfaceVertices\(uint, uint\), 
ElementsQuery.elementSurfaceTriangles\(uint, uint\), 
ElementsQuery.nodeIndexFromElementNodeIndex\(uint\), 
ElementsQuery.elementNodeFromElementAndNodeIndex\(uint, uint\), 
ElementsQuery.elementLocalNodeIndexFromElementAndNodeIndex\(uint, uint\), 
ElementsQuery.elementStartIndex\(uint\), 
ElementsQuery.elementAndSurfaceIndexFromElementSurfaceIndex\(uint, out uint, out uint\), 
ElementsQuery.elementSurfaceIndex\(uint, uint\), 
ElementsQuery.elementNeighbor\(uint, uint\), 
ElementsQuery.mapScalarResult\(uint, Vec3d, DataPartScalar, ResultMapping\), 
ElementsQuery.mapScalarResults\(Vec3dArr, DataPartScalar, ResultMapping, DoubleArr\), 
ElementsQuery.elementsContainingNode\(uint\), 
ElementsQuery.allElementCentroids\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ElementsQuery__ctor_Ceetron_CeetronDesktopComponents_UnstructGrid_DataElements_Ceetron_CeetronDesktopComponents_UnstructGrid_DataPartDisplacement_"></a> ElementsQuery\(DataElements, DataPartDisplacement\)

```csharp
public ElementsQuery(DataElements elements, DataPartDisplacement displacements)
```

#### Parameters

`elements` DataElements

`displacements` DataPartDisplacement

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ElementsQuery_GetAllElementCentroids"></a> GetAllElementCentroids\(\)

```csharp
public double[] GetAllElementCentroids()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_ElementsQuery_GetElementCentroid_System_UInt32_System_Double___"></a> GetElementCentroid\(uint, double\[\]\)

```csharp
public void GetElementCentroid(uint ielement, double[] point)
```

#### Parameters

`ielement` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

