# Class NamedObjectDictionary<T\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMObjBase.dll  

This class is to represent dictionary of [named object].

```csharp
public class NamedObjectDictionary<T> : Container, IObservableObject, IDisposableObject, ILinkable, IObject, IEventProvider, ILinkContainerEvent, IVerifiable, IContainer, ILinkContainer, IOwned, IHasID, ICunstomLink, IPostDeserialized, ILinkCollection where T : ObjectBase, INamed
```

#### Type Parameters

`T` 

T has name

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
Container ← 
[NamedObjectDictionary<T\>](VM.Managed.Collections.NamedObjectDictionary\-1.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
ICunstomLink, 
IPostDeserialized, 
ILinkCollection

#### Inherited Members

Container.Find\(string\), 
Container.FindLocal\(string\), 
Container.GetUnnamedObjectName\(object\), 
Container.GetNewEntityName\(string, bool, int, int\), 
Container.GetNewEntityName\(string, bool, int\), 
Container.GetNewEntityName\(string\), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
LinkableBase.OnDeserialization\(object\), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### NamedObjectDictionary\(\)

Initializes a new instance of the <xref href="VM.Managed.Collections.NamedObjectDictionary%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NamedObjectDictionary()
```

### NamedObjectDictionary\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.Collections.NamedObjectDictionary%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NamedObjectDictionary(IOwned obParent)
```

#### Parameters

`obParent` IOwned

The parent object.

## Properties

### Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsExternable

Gets a value indicating whether this instance is externable.

```csharp
public override bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReadOnly

Gets a value indicating whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### this\[string\]

Gets the T with the specified name.

```csharp
public T this[string strName] { get; }
```

#### Property Value

 T

## Methods

### Add\(T\)

Adds an item to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Add(T item)
```

#### Parameters

`item` T

The object to add to the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### ChangeName\(string, T\)

Changes the name.

```csharp
public void ChangeName(string strOldName, T obj)
```

#### Parameters

`strOldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old name.

`obj` T

The new object.

### Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### Contains\(T\)

Determines whether the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> contains a specific value.

```csharp
public bool Contains(T item)
```

#### Parameters

`item` T

The object to locate in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if <code class="paramref">item</code> is found in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, false.

### CopyTo\(T\[\], int\)

Copies the elements of the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> to an <xref href="System.Array" data-throw-if-not-resolved="false"></xref>, starting at a particular <xref href="System.Array" data-throw-if-not-resolved="false"></xref> index.

```csharp
public void CopyTo(T[] array, int arrayIndex)
```

#### Parameters

`array` T\[\]

The one-dimensional <xref href="System.Array" data-throw-if-not-resolved="false"></xref> that is the destination of the elements copied from <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>. The <xref href="System.Array" data-throw-if-not-resolved="false"></xref> must have zero-based indexing.

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The zero-based index in <code class="paramref">array</code> at which copying begins.

### FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<T\>

A <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> that can be used to iterate through the collection.

### GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### GetSortedEntity\(\)

Gets the sorted entity.

```csharp
public SortedList<string, T> GetSortedEntity()
```

#### Returns

 [SortedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.sortedlist\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), T\>

### IsSerializableEvent\(Delegate\)

Determines whether [is serializable event] [the specified del].

```csharp
protected override bool IsSerializableEvent(Delegate del)
```

#### Parameters

`del` [Delegate](https://learn.microsoft.com/dotnet/api/system.delegate)

The del.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is serializable event] [the specified del]; otherwise, <code>false</code>.

### LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnChildUpdated\(object, LinkEventArgs\)

Called when [child updated].

```csharp
protected override void OnChildUpdated(object obj, LinkEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### Remove\(string\)

Removes the specified name.

```csharp
public bool Remove(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### Remove\(T\)

Removes the first occurrence of a specific object from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool Remove(T item)
```

#### Parameters

`item` T

The object to remove from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if <code class="paramref">item</code> was successfully removed from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>; otherwise, false. This method also returns false if <code class="paramref">item</code> is not found in the original <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.


