# <a id="VM_Models_Post_VisualizationImpl_GeometryModel_RoadGeometryModel"></a> Class RoadGeometryModel

Namespace: [VM.Models.Post.VisualizationImpl.GeometryModel](VM.Models.Post.VisualizationImpl.GeometryModel.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
[DependencyResolve(typeof(IRoadGeometryModel))]
public class RoadGeometryModel : GeometryModel, IRoadGeometryModel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
GeometryModel ← 
[RoadGeometryModel](VM.Models.Post.VisualizationImpl.GeometryModel.RoadGeometryModel.md)

#### Implements

IRoadGeometryModel

#### Inherited Members

GeometryModel.getCPtr\(GeometryModel\), 
GeometryModel.Dispose\(\), 
GeometryModel.ToString\(\), 
GeometryModel.update\(bool\), 
GeometryModel.partIndex\(Part\), 
GeometryModel.part\(uint\), 
GeometryModel.partById\(int\), 
GeometryModel.addPart\(Part\), 
GeometryModel.removePart\(Part\), 
GeometryModel.removeAllParts\(\), 
GeometryModel.hasPart\(Part\), 
GeometryModel.rayIntersect\(int, int, View, HitItem\), 
GeometryModel.regionIntersect\(int, int, uint, uint, View, bool, PartPtrArr\), 
GeometryModel.polygonIntersect\(Vec2fArr, View, bool, PartPtrArr\), 
GeometryModel.rayIntersect\(Ray, View, HitItem\), 
GeometryModel.renderedPartCount\(\), 
GeometryModel.internal\_exportGeometry\(Str\), 
GeometryModel.castFromBaseClass\(Model\), 
GeometryModel.Transformation, 
GeometryModel.PartCount, 
Model.getCPtr\(Model\), 
Model.Dispose\(\), 
Model.Name, 
Model.BoundingBox, 
Model.Use2dPixelProjection, 
Model.ModelInfo, 
RefCountedObject.swigCMemOwn, 
RefCountedObject.getCPtr\(RefCountedObject\), 
RefCountedObject.Dispose\(\), 
RefCountedObject.addRef\(\), 
RefCountedObject.release\(\), 
RefCountedObject.refCount\(\), 
RefCountedObject.setRefCountZero\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_RoadGeometryModel__ctor"></a> RoadGeometryModel\(\)

```csharp
public RoadGeometryModel()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_RoadGeometryModel_GeometryParts"></a> GeometryParts

```csharp
public IList<IDataRoadGeometryPart> GeometryParts { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataRoadGeometryPart\>

## Methods

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_RoadGeometryModel_AddPart_VM_Models_Post_IDataRoadGeometryPart_"></a> AddPart\(IDataRoadGeometryPart\)

```csharp
public void AddPart(IDataRoadGeometryPart part)
```

#### Parameters

`part` IDataRoadGeometryPart

