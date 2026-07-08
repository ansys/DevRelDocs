# Interface ILinkCollection
<a id="VM_Managed_Collections_ILinkCollection"></a>

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

### <a id="VM_Managed_Collections_ILinkCollection_Container"></a> Container

```csharp
ILinkContainer Container { get; }
```

#### Property Value

 ILinkContainer

### <a id="VM_Managed_Collections_ILinkCollection_Count"></a> Count

Get the item count in the collection

```csharp
int Count { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_Collections_ILinkCollection_Clear"></a> Clear\(\)

Clear collection.

```csharp
void Clear()
```

### <a id="VM_Managed_Collections_ILinkCollection_Contains_System_Object_"></a> Contains\(object\)

```csharp
bool Contains(object @object)
```

#### Parameters

`object` object

#### Returns

 bool

### <a id="VM_Managed_Collections_ILinkCollection_DestroyObject_System_Object_VM_Managed_LinkEventArgs_"></a> DestroyObject\(object, LinkEventArgs\)

Destroy this link

```csharp
void DestroyObject(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

<p>The linked object.</p>

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

<p>The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.</p>

### <a id="VM_Managed_Collections_ILinkCollection_DisposeCollection"></a> DisposeCollection\(\)

Dispose this collection

```csharp
void DisposeCollection()
```

### <a id="VM_Managed_Collections_ILinkCollection_GetAllLinks_System_Collections_Generic_ICollection_VM_Managed_ILink__"></a> GetAllLinks\(ICollection<ILink\>\)

```csharp
void GetAllLinks(ICollection<ILink> colLinks)
```

#### Parameters

`colLinks` ICollection<[ILink](VM.Managed.ILink.md)\>

### <a id="VM_Managed_Collections_ILinkCollection_MakeNullLink_System_Object_"></a> MakeNullLink\(object\)

```csharp
bool MakeNullLink(object @object)
```

#### Parameters

`object` object

#### Returns

 bool

### <a id="VM_Managed_Collections_ILinkCollection_RemoveLink_VM_Managed_ILink_"></a> RemoveLink\(ILink\)

Remove specific link from the collection.

```csharp
void RemoveLink(ILink link)
```

#### Parameters

`link` [ILink](VM.Managed.ILink.md)

The link to remove

### <a id="VM_Managed_Collections_ILinkCollection_Reserve_System_Object_VM_Managed_LinkEventArgs_"></a> Reserve\(object, LinkEventArgs\)

```csharp
bool Reserve(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

#### Returns

 bool

