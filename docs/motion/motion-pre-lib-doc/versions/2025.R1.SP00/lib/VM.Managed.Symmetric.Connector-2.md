#  Class Connector<T, TProp\>

Namespace: [VM.Managed.Symmetric](VM.Managed.Symmetric.md)  
Assembly: VMSymBase.dll  

```csharp
public class Connector<T, TProp> : Named<T>, ISymmetricUpdater where T : Connector<TProp>, new() where TProp : Property, IArgument, new()
```

#### Type Parameters

`T` 

`TProp` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Named<T\>](VM.Managed.Symmetric.Named\-1.md) ← 
[Connector<T, TProp\>](VM.Managed.Symmetric.Connector\-2.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

[Named<T\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[Named<T\>.Initialize\(ISymmetricManager\)](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_Initialize\_VM\_Managed\_Symmetric\_ISymmetricManager\_), 
[Named<T\>.FindObject\(string, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_FindObject\_System\_String\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[Named<T\>.SymmetricManager](VM.Managed.Symmetric.Named\-1.md\#VM\_Managed\_Symmetric\_Named\_1\_SymmetricManager)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Connector_2__ctor"></a> Connector\(\)

```csharp
public Connector()
```

## Methods

### <a id="VM_Managed_Symmetric_Connector_2_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

