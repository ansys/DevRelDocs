#  Interface INodeSet

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the set of nodes.

```csharp
public interface INodeSet : IGeometricalComponent
```

#### Implements

[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_INodeSet_GetPointCount"></a> GetPointCount\(\)

Gets the count of node point.

```csharp
uint GetPointCount()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The count of node point.

### <a id="VM_Managed_DAFUL_INodeSet_GetPointPosition_System_UInt32_VM_Managed_IReferencable_"></a> GetPointPosition\(uint, IReferencable\)

Gets the node point position.

```csharp
VectorBase GetPointPosition(uint index, IReferencable reference)
```

#### Parameters

`index` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The index.

`reference` IReferencable

The reference.

#### Returns

 VectorBase

The node point position.

