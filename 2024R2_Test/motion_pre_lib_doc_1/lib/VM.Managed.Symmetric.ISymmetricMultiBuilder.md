# Interface ISymmetricMultiBuilder

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMAppCore.dll  

This interface is to represent the symmetric multi builder.

```csharp
public interface ISymmetricMultiBuilder
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
bool UpdateBuild(Builder tool, Builder target, SymmetricType sym_type, Plane sym_plane, Document docOwner)
```

#### Parameters

`tool` [Builder](VM.Managed.CAD.Builder.md)

The reference object.

`target` [Builder](VM.Managed.CAD.Builder.md)

The target object.

`sym_type` [SymmetricType](VM.Managed.SymmetricType.md)

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`docOwner` [Document](VM.Managed.Document.md)

update document.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.


