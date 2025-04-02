#  Interface IContactable3D

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the connetable 3 dimension object.

```csharp
public interface IContactable3D : IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody
```

#### Implements

[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IEntityRelation, 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IHasBody

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_IContactable3D_HalfThickness"></a> HalfThickness

Gets or sets the half thickness.

```csharp
ExpressionValueVariable HalfThickness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_IContactable3D_MaxPenetration"></a> MaxPenetration

Gets the maximum penetration.

```csharp
ExpressionValueVariable MaxPenetration { get; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_IContactable3D_SurfaceSmoothingType"></a> SurfaceSmoothingType

Gets or sets the type of the surface smoothing.

```csharp
SurfaceSmoothing SurfaceSmoothingType { get; set; }
```

#### Property Value

 [SurfaceSmoothing](VM.Managed.DAFUL.SurfaceSmoothing.md)

