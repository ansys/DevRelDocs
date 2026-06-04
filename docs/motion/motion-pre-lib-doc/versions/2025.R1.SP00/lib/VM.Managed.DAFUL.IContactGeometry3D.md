#  Interface IContactGeometry3D

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the contact geometry 3 dimension.

```csharp
public interface IContactGeometry3D : IContactGeometry
```

#### Implements

[IContactGeometry](VM.Managed.DAFUL.IContactGeometry.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_IContactGeometry3D_HalfThickness"></a> HalfThickness

Gets or sets the half thickness.

```csharp
ExpressionValueVariable HalfThickness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_IContactGeometry3D_SurfaceSmoothingType"></a> SurfaceSmoothingType

Gets or sets the type of the surface smoothing.

```csharp
SurfaceSmoothing SurfaceSmoothingType { get; set; }
```

#### Property Value

 [SurfaceSmoothing](VM.Managed.DAFUL.SurfaceSmoothing.md)

## Methods

### <a id="VM_Managed_DAFUL_IContactGeometry3D_GetPointDirectionOnGeometry_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointDirectionOnGeometry\(ref VectorBase, ref VectorBase\)

Gets the point direction.

```csharp
bool GetPointDirectionOnGeometry(ref VectorBase point, ref VectorBase direction)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

