# Interface IContactGeometry
<a id="VM_Managed_DAFUL_IContactGeometry"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the contact geometry.

```csharp
public interface IContactGeometry
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_IContactGeometry_GeometryParentKey"></a> GeometryParentKey

Get the key of geometry parent

```csharp
ObjectBase.ConvertKey GeometryParentKey { get; }
```

#### Property Value

 ObjectBase.ConvertKey

### <a id="VM_Managed_DAFUL_IContactGeometry_MaxPenetration"></a> MaxPenetration

Gets or sets the maximum penetration.

```csharp
ExpressionValueVariable MaxPenetration { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_IContactGeometry_ReferenceMarker"></a> ReferenceMarker

Gets the reference marker.

```csharp
InvisibleMarker ReferenceMarker { get; }
```

#### Property Value

 [InvisibleMarker](VM.Managed.DAFUL.InvisibleMarker.md)

### <a id="VM_Managed_DAFUL_IContactGeometry__Geometry"></a> \_Geometry

Gets or sets the geometry.

```csharp
Linker<IContactable> _Geometry { get; set; }
```

#### Property Value

 Linker<[IContactable](VM.Managed.DAFUL.IContactable.md)\>

## Methods

### <a id="VM_Managed_DAFUL_IContactGeometry_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointDirection\(ref VectorBase, ref VectorBase\)

Gets the point direction.

```csharp
bool GetPointDirection(ref VectorBase point, ref VectorBase direction)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

