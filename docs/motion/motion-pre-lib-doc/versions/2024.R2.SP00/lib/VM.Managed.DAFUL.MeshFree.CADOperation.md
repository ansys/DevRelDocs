# Class CADOperation

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

CADOperation

```csharp
public class CADOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CADOperation](VM.Managed.DAFUL.MeshFree.CADOperation.md)

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

### GetWeldPoint\(Weld, Body, Body, Range, ref VectorBase\[\], ref VectorBase\[\]\)

Get weld point.

```csharp
public static bool GetWeldPoint(Weld weld, Body bBase, Body bAct, Range par, ref VectorBase[] vecUpper, ref VectorBase[] vecLower)
```

#### Parameters

`weld` [Weld](VM.Managed.DAFUL.MeshFree.Weld.md)

The weld.

`bBase` Body

The base body.

`bAct` Body

The action body.

`par` Range

The range.

`vecUpper` VectorBase\[\]

The upper point.

`vecLower` VectorBase\[\]

The lower point.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateMeshFreeNodePropertyAndMaxFacetSize\(IAttributeContainer\)

Update meshfree node property and max facet size.

```csharp
public static bool UpdateMeshFreeNodePropertyAndMaxFacetSize(IAttributeContainer container)
```

#### Parameters

`container` IAttributeContainer

The container.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


