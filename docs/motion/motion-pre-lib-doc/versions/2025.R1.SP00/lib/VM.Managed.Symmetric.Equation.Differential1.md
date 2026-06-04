#  Class Differential1

Namespace: [VM.Managed.Symmetric.Equation](VM.Managed.Symmetric.Equation.md)  
Assembly: VMSymEq.dll  

```csharp
public class Differential1 : SubEntity, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Named<SubEntity\> ← 
SubEntity ← 
[Differential1](VM.Managed.Symmetric.Equation.Differential1.md)

#### Derived

[Differential2](VM.Managed.Symmetric.Equation.Differential2.md)

#### Implements

ISymmetricUpdater

#### Inherited Members

SubEntity.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<SubEntity\>.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\), 
Named<SubEntity\>.Initialize\(ISymmetricManager\), 
Named<SubEntity\>.FindObject\(string, SymmetricType, Plane, Document\), 
Named<SubEntity\>.SymmetricManager

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_Equation_Differential1__ctor"></a> Differential1\(\)

```csharp
public Differential1()
```

## Methods

### <a id="VM_Managed_Symmetric_Equation_Differential1_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

