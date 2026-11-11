# Interface ISymmetricBuilder
<a id="VM_Managed_Symmetric_ISymmetricBuilder"></a>

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMAppCore.dll  

This interface is to represent the symmetric builder.

```csharp
public interface ISymmetricBuilder
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_Symmetric_ISymmetricBuilder_Build_System_Object_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Build\(object, SymmetricType, Plane, Document\)

Build the symmetric objects.

```csharp
object Build(object tool, SymmetricType sym_type, Plane sym_plane, Document docOwner)
```

#### Parameters

`tool` object

The object.

`sym_type` [SymmetricType](VM.Managed.SymmetricType.md)

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`docOwner` [Document](VM.Managed.Document.md)

update document.

#### Returns

 object

The new object of symmetric.

