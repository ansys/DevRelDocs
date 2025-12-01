# Interface IGenerable
<a id="VM_Managed_IGenerable"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the generable entity.

```csharp
public interface IGenerable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IGenerable_Generable"></a> Generable

<p> Gets a value indicating whether this instance is generable.</p>

```csharp
bool Generable { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_IGenerable_ReplaceEntity_VM_Managed_Document_VM_Managed_IGenerable_"></a> ReplaceEntity\(Document, IGenerable\)

Replace entity.

```csharp
void ReplaceEntity(Document doc, IGenerable generableNew)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document

`generableNew` [IGenerable](VM.Managed.IGenerable.md)

The new generable entity

