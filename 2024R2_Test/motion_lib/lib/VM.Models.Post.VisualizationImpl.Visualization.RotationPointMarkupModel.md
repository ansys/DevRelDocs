# <a id="VM_Models_Post_VisualizationImpl_Visualization_RotationPointMarkupModel"></a> Class RotationPointMarkupModel

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class RotationPointMarkupModel : MarkupModel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
MarkupModel ← 
[RotationPointMarkupModel](VM.Models.Post.VisualizationImpl.Visualization.RotationPointMarkupModel.md)

#### Inherited Members

MarkupModel.getCPtr\(MarkupModel\), 
MarkupModel.Dispose\(\), 
MarkupModel.ToString\(\), 
MarkupModel.partIndex\(MarkupPart\), 
MarkupModel.part\(uint\), 
MarkupModel.addPart\(MarkupPart\), 
MarkupModel.removePart\(MarkupPart\), 
MarkupModel.removeAllParts\(\), 
MarkupModel.rayIntersect\(Ray, View\), 
MarkupModel.rayIntersect\(Ray, View, MarkupModelHitItem\), 
MarkupModel.rayIntersectAllHits\(Ray, View, MarkupModelHitItemCollection\), 
MarkupModel.isViewClippingIgnored\(\), 
MarkupModel.setIgnoreViewClipping\(bool\), 
MarkupModel.castFromBaseClass\(Model\), 
MarkupModel.PartCount, 
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

### <a id="VM_Models_Post_VisualizationImpl_Visualization_RotationPointMarkupModel__ctor"></a> RotationPointMarkupModel\(\)

```csharp
public RotationPointMarkupModel()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_RotationPointMarkupModel_IsVisible"></a> IsVisible

```csharp
public bool IsVisible { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_RotationPointMarkupModel_SetPosition_Ceetron_CeetronDesktopComponents_Vec3d_"></a> SetPosition\(Vec3d\)

```csharp
public void SetPosition(Vec3d position)
```

#### Parameters

`position` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_RotationPointMarkupModel_SetVisible_System_Boolean_"></a> SetVisible\(bool\)

```csharp
public void SetVisible(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

