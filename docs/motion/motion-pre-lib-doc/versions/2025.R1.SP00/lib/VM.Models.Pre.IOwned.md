#  Interface IOwned

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the owner object in the object relationship.

```csharp
public interface IOwned
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_IOwned_Container"></a> Container

Gets or sets the owner object.

```csharp
IOwned Container { get; }
```

#### Property Value

 [IOwned](VM.Models.Pre.IOwned.md)

### <a id="VM_Models_Pre_IOwned_Document"></a> Document

Gets the document that contains the object.

```csharp
IDocument Document { get; }
```

#### Property Value

 [IDocument](VM.Models.Pre.IDocument.md)

### <a id="VM_Models_Pre_IOwned_Owner"></a> Owner

Gets the owner object.

```csharp
IObject Owner { get; }
```

#### Property Value

 [IObject](VM.Models.Pre.IObject.md)

## Methods

### <a id="VM_Models_Pre_IOwned_SetContainer_VM_Models_Pre_IOwned_System_Boolean_System_Boolean_"></a> SetContainer\(IOwned, bool, bool\)

Sets the owner object.

```csharp
void SetContainer(IOwned owner, bool backup, bool isFromLinkAttribute = false)
```

#### Parameters

`owner` [IOwned](VM.Models.Pre.IOwned.md)

`backup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`isFromLinkAttribute` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

