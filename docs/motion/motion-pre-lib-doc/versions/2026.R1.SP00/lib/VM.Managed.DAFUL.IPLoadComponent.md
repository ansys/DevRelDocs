# Interface IPLoadComponent
<a id="VM_Managed_DAFUL_IPLoadComponent"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the pressure component.

```csharp
public interface IPLoadComponent : IGeometricalComponent
```

#### Implements

[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_IPLoadComponent_GetCenterPositionDirection_System_UInt32_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetCenterPositionDirection\(uint, ref VectorBase, ref VectorBase, IReferencable\)

Gets the center position and direction.

```csharp
void GetCenterPositionDirection(uint index, ref VectorBase center, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`index` uint

The index.

`center` VectorBase

The center position.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference.

### <a id="VM_Managed_DAFUL_IPLoadComponent_GetPatchCount"></a> GetPatchCount\(\)

Gets the count of patch.

```csharp
uint GetPatchCount()
```

#### Returns

 uint

The count of patch.

