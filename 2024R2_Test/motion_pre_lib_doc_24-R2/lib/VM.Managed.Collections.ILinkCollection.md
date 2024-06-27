# Interface ILinkCollection

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public interface ILinkCollection
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Container

```csharp
ILinkContainer Container { get; }
```

#### Property Value

 ILinkContainer

### Count

Get the item count in the collection

```csharp
int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### Clear\(\)

Clear collection.

```csharp
void Clear()
```

### Contains\(object\)

```csharp
bool Contains(object @object)
```

#### Parameters

`object` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DestroyObject\(object, LinkEventArgs\)

Destroy this link

```csharp
void DestroyObject(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### DisposeCollection\(\)

Dispose this collection

```csharp
void DisposeCollection()
```

### GetAllLinks\(ICollection<ILink\>\)

```csharp
void GetAllLinks(ICollection<ILink> colLinks)
```

#### Parameters

`colLinks` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[ILink](VM.Managed.ILink.md)\>

### MakeNullLink\(object\)

```csharp
bool MakeNullLink(object @object)
```

#### Parameters

`object` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveLink\(ILink\)

Remove specific link from the collection.

```csharp
void RemoveLink(ILink link)
```

#### Parameters

`link` [ILink](VM.Managed.ILink.md)

The link to remove

### Reserve\(object, LinkEventArgs\)

```csharp
bool Reserve(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


