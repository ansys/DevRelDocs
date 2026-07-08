# Class SolidBodyMulti
<a id="VM_Managed_Symmetric_CAD_SolidBodyMulti"></a>

Namespace: [VM.Managed.Symmetric.CAD](VM.Managed.Symmetric.CAD.md)  
Assembly: VMSymBase.dll  

```csharp
public class SolidBodyMulti : ISymmetricMultiBuilder
```

#### Inheritance

object ← 
[SolidBodyMulti](VM.Managed.Symmetric.CAD.SolidBodyMulti.md)

#### Derived

[SolidBodyMultiSubtract](VM.Managed.Symmetric.CAD.SolidBodyMultiSubtract.md), 
[SolidBodyMultiUnite](VM.Managed.Symmetric.CAD.SolidBodyMultiUnite.md), 
[SolidBodyPair](VM.Managed.Symmetric.CAD.SolidBodyPair.md)

#### Implements

ISymmetricMultiBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Symmetric_CAD_SolidBodyMulti__ctor"></a> SolidBodyMulti\(\)

```csharp
public SolidBodyMulti()
```

## Methods

### <a id="VM_Managed_Symmetric_CAD_SolidBodyMulti_UpdateBuild_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_VM_Managed_SymmetricType_VM_Plane_VM_Managed_Document_"></a> UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public virtual bool UpdateBuild(Builder tool, Builder target, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`tool` Builder

The reference object.

`target` Builder

The target object.

`sym_type` SymmetricType

Specifies type of symmetric.

`sym_plane` Plane

Plane of symmetric.

`doc` Document

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

