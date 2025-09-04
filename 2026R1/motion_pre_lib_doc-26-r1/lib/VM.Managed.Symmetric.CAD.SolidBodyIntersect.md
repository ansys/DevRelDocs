#  Class SolidBodyIntersect

Namespace: [VM.Managed.Symmetric.CAD](VM.Managed.Symmetric.CAD.md)  
Assembly: VMSymBase.dll  

```csharp
public class SolidBodyIntersect : SolidBodyPair, ISymmetricMultiBuilder, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolidBodyMulti](VM.Managed.Symmetric.CAD.SolidBodyMulti.md) ← 
[SolidBodyPair](VM.Managed.Symmetric.CAD.SolidBodyPair.md) ← 
[SolidBodyIntersect](VM.Managed.Symmetric.CAD.SolidBodyIntersect.md)

#### Implements

ISymmetricMultiBuilder, 
ISymmetricUpdater

#### Inherited Members

[SolidBodyPair.Initialize\(ISymmetricManager\)](VM.Managed.Symmetric.CAD.SolidBodyPair.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyPair\_Initialize\_VM\_Managed\_Symmetric\_ISymmetricManager\_), 
[SolidBodyPair.Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.CAD.SolidBodyPair.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyPair\_Update\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[SolidBodyPair.UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.CAD.SolidBodyPair.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyPair\_UpdateBuild\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_), 
[SolidBodyMulti.UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.CAD.SolidBodyMulti.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyMulti\_UpdateBuild\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_CAD_SolidBodyIntersect__ctor"></a> SolidBodyIntersect\(\)

```csharp
public SolidBodyIntersect()
```

## Methods

### <a id="VM_Managed_Symmetric_CAD_SolidBodyIntersect_Update_VM_Managed_ObjectBase_VM_Managed_ObjectBase_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

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

