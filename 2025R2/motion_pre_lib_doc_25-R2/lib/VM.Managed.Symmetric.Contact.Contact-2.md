#  Class Contact<T, TProp\>

Namespace: [VM.Managed.Symmetric.Contact](VM.Managed.Symmetric.Contact.md)  
Assembly: VMSymCt.dll  

```csharp
public class Contact<T, TProp> : Named<T>, ISymmetricUpdater where T : Contact<TProp>, new() where TProp : Property, new()
```

#### Type Parameters

`T` 

`TProp` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<T\> ← 
[Contact<T, TProp\>](VM.Managed.Symmetric.Contact.Contact\-2.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

Named<T\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<T\>.Initialize\(ISymmetricManager\), 
Named<T\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<T\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Contact_Contact_2__ctor"></a> Contact\(\)

```csharp
public Contact()
```

## Methods

### <a id="VM_Managed_Symmetric_Contact_Contact_2_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public override bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` ObjectBase

The reference object.

`target` ObjectBase

The target object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

