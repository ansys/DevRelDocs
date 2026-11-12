# Class ArgumentListGeneral
<a id="VM_Managed_Symmetric_ArgumentListGeneral"></a>

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMSymSB.dll  

```csharp
public class ArgumentListGeneral : ISymmetricBuilder
```

#### Inheritance

object ← 
[ArgumentListGeneral](VM.Managed.Symmetric.ArgumentListGeneral.md)

#### Implements

ISymmetricBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_ArgumentListGeneral__ctor"></a> ArgumentListGeneral\(\)

```csharp
public ArgumentListGeneral()
```

## Methods

### <a id="VM_Managed_Symmetric_ArgumentListGeneral_Build_System_Object_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Build\(object, SymmetricType, Plane, Document\)

Build the symmetric objects.

```csharp
public object Build(object tool, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` object

The object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 object

The new object of symmetric.

