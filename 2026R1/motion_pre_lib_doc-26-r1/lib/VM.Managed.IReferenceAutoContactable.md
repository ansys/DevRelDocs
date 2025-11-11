# Interface IReferenceAutoContactable
<a id="VM_Managed_IReferenceAutoContactable"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the reference auto contactable.

```csharp
public interface IReferenceAutoContactable : IAutoContactable
```

#### Implements

[IAutoContactable](VM.Managed.IAutoContactable.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IReferenceAutoContactable_IsOwner_VM_Managed_Reference_"></a> IsOwner\(Reference\)

Determines whether the specified owner.

```csharp
bool IsOwner(Reference owner)
```

#### Parameters

`owner` [Reference](VM.Managed.Reference.md)

#### Returns

 bool

<code>true</code> if the specified owner; otherwise, <code>false</code>.

