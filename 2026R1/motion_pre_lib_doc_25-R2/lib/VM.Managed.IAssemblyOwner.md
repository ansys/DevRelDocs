#  Interface IAssemblyOwner

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the owner of assembly.

```csharp
public interface IAssemblyOwner
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IAssemblyOwner_Owner"></a> Owner

Gets the owner.

```csharp
Document Owner { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

## Methods

### <a id="VM_Managed_IAssemblyOwner_ProcessDuplicateReference_VM_Managed_Reference_"></a> ProcessDuplicateReference\(Reference\)

Process for duplicated reference

```csharp
void ProcessDuplicateReference(Reference @ref)
```

#### Parameters

`ref` [Reference](VM.Managed.Reference.md)

The reference.

