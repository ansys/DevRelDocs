# Interface ILink

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the linked object.

```csharp
public interface ILink
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### FieldHasValue

Gets the status of field.

```csharp
bool FieldHasValue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinkedObject

Gets the object container that has a relation with this.

```csharp
ILinkContainer LinkedObject { get; }
```

#### Property Value

 ILinkContainer

### Owner

Gets the object that has this link.

```csharp
ILinkContainer Owner { get; }
```

#### Property Value

 ILinkContainer

## Methods

### Clear\(bool\)

Clear the link relation.
<param name="bBackup">The backup flag.</param>

```csharp
void Clear(bool bBackup)
```

#### Parameters

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClearBeforeDeserialize\(\)

Disconnect the link relation before deserialize.

```csharp
void ClearBeforeDeserialize()
```

### ClearBeforeSwap\(\)

Disconnect the link relation before undo/redo.

```csharp
void ClearBeforeSwap()
```

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

### DisposeLink\(\)

Dispose this link.

```csharp
void DisposeLink()
```

### GetChilds\(HashSet<ILinkContainer\>\)

```csharp
void GetChilds(HashSet<ILinkContainer> lstObjs)
```

#### Parameters

`lstObjs` [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<ILinkContainer\>

### GetFirstDesignEntities\(\)

Get first design entities.

```csharp
IEnumerable<IObject> GetFirstDesignEntities()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObject\>

### Reserve\(LinkEventArgs\)

Reserve link.

```csharp
bool Reserve(LinkEventArgs args)
```

#### Parameters

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The event argument.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if succeess to reserve, otherwise false.

### SetModified\(\)

set modified link for undo/redo

```csharp
void SetModified()
```

### Verify\(VerifiedResult\)

Verify the link.
<param name="vr">The verified result.</param>

```csharp
void Verify(VerifiedResult vr)
```

#### Parameters

`vr` [VerifiedResult](VM.Managed.VerifiedResult.md)


