# Class FrictionCylindrical
<a id="VM_Managed_Symmetric_Constraints_FrictionCylindrical"></a>

Namespace: [VM.Managed.Symmetric.Constraints](VM.Managed.Symmetric.Constraints.md)  
Assembly: VMSymCB.dll  

```csharp
public class FrictionCylindrical : ISymmetricBuilder
```

#### Inheritance

object ← 
[FrictionCylindrical](VM.Managed.Symmetric.Constraints.FrictionCylindrical.md)

#### Implements

ISymmetricBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Constraints_FrictionCylindrical__ctor"></a> FrictionCylindrical\(\)

```csharp
public FrictionCylindrical()
```

## Methods

### <a id="VM_Managed_Symmetric_Constraints_FrictionCylindrical_Build_System_Object_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Build\(object, SymmetricType, Plane, Document\)

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

