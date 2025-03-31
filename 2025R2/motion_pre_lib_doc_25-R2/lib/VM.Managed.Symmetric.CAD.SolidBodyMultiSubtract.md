# Class SolidBodyMultiSubtract

Namespace: [VM.Managed.Symmetric.CAD](VM.Managed.Symmetric.CAD.md)  
Assembly: VMSymBase.dll  

```csharp
public class SolidBodyMultiSubtract : SolidBodyMulti, ISymmetricMultiBuilder, ISymmetricUpdater
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolidBodyMulti](VM.Managed.Symmetric.CAD.SolidBodyMulti.md) ← 
[SolidBodyMultiSubtract](VM.Managed.Symmetric.CAD.SolidBodyMultiSubtract.md)

#### Implements

ISymmetricMultiBuilder, 
ISymmetricUpdater

#### Inherited Members

[SolidBodyMulti.UpdateBuild\(Builder, Builder, SymmetricType, Plane, Document\)](VM.Managed.Symmetric.CAD.SolidBodyMulti.md\#VM\_Managed\_Symmetric\_CAD\_SolidBodyMulti\_UpdateBuild\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_SymmetricType\_VM\_Plane\_VM\_Managed\_Document\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### SolidBodyMultiSubtract\(\)

```csharp
public SolidBodyMultiSubtract()
```

## Methods

### Initialize\(ISymmetricManager\)

Initialize the symmetric objects.

```csharp
public virtual bool Initialize(ISymmetricManager Manager)
```

#### Parameters

`Manager` ISymmetricManager

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### Update\(ObjectBase, ObjectBase, SymmetricType, Plane, Document\)

Updates the symmetric objects.

```csharp
public bool Update(ObjectBase tool, ObjectBase target, SymmetricType sym_type, Plane sym_plane, Document doc)
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


