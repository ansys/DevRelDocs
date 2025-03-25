# <a id="VM_Managed_IReferencable"></a> Interface IReferencable

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the reference.

```csharp
public interface IReferencable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IReferencable_Referencable"></a> Referencable

Gets the referencable data.

```csharp
bool Referencable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_IReferencable_Visible"></a> Visible

Gets the visible data.

```csharp
bool Visible { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_IReferencable_Instantiate_VM_Managed_Reference_VM_CAD_Kernel_Render_Canvas_"></a> Instantiate\(Reference, Canvas\)

Instantiates the specified reference.

```csharp
void Instantiate(Reference reference, Canvas canvas)
```

#### Parameters

`reference` [Reference](VM.Managed.Reference.md)

The reference.

`canvas` Canvas

The canvas.

### <a id="VM_Managed_IReferencable_MakeReference_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReference\(LinkedList<Reference\>\)

```csharp
void MakeReference(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<[Reference](VM.Managed.Reference.md)\>

