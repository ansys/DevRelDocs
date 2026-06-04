# Class ArgumentListGeneral

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

This class is to represent the general argument list.

```csharp
public class ArgumentListGeneral : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ArgumentListGeneral](VM.Managed.DAFUL.ArgumentListGeneral.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

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

### ArgumentListGeneral\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ArgumentListGeneral" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ArgumentListGeneral()
```

### ArgumentListGeneral\(SubEntity\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ArgumentListGeneral" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ArgumentListGeneral(SubEntity owner)
```

#### Parameters

`owner` SubEntity

The owner subentity.

## Properties

### Arguments

Gets or sets the argument's link list.

```csharp
public ArgumentBase[] Arguments { get; set; }
```

#### Property Value

 [ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)\[\]

### Count

Gets the count of argument's link list.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsReadOnly

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReservedArguments

```csharp
public static List<string> ReservedArguments { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### ValidationArguments

Get argument informations for validation

```csharp
public IEnumerable<(string Name, ArgumentTypes Type)> ValidationArguments { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string) [Name](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,vm.argumenttypes\-.name), ArgumentTypes [Type](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.string,vm.argumenttypes\-.type)\)\>

### this\[int\]

Gets or sets the <xref href="VM.Models.Pre.IArgument" data-throw-if-not-resolved="false"></xref> with the specified index.

```csharp
public IArgument this[int nIndex] { get; set; }
```

#### Property Value

 IArgument

## Methods

### Add\(ArgumentBase\)

Add argument.

```csharp
public void Add(ArgumentBase argumentBase)
```

#### Parameters

`argumentBase` [ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)

The argumentBase.

### Clear\(\)

Clear argument collection.

```csharp
public void Clear()
```

### Contains\(IArgument\)

Determines whether [contains] [the specified arg].

```csharp
public bool Contains(IArgument arg)
```

#### Parameters

`arg` IArgument

The arg.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [contains] [the specified arg]; otherwise, <code>false</code>.

### Contains\(ArgumentBase\)

Contains

```csharp
public bool Contains(ArgumentBase item)
```

#### Parameters

`item` [ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ContainsReservedArgument\(\)

Determines whether [contains] [the reserved arg].

```csharp
public bool ContainsReservedArgument()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [contains] [the reserved arg]; otherwise, <code>false</code>.

### CopyTo\(ArgumentBase\[\], int\)

Copy to

```csharp
public void CopyTo(ArgumentBase[] array, int arrayIndex)
```

#### Parameters

`array` [ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetACTION\(IConnector\)

```csharp
public static object GetACTION(IConnector connector)
```

#### Parameters

`connector` IConnector

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetACTIONDOC\(IConnector\)

```csharp
public static object GetACTIONDOC(IConnector connector)
```

#### Parameters

`connector` IConnector

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetAM\(IConnector\)

```csharp
public static object GetAM(IConnector connector)
```

#### Parameters

`connector` IConnector

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetArgument\(string, IDocument\)

Get argument

```csharp
public static IArgument GetArgument(string strArgument, IDocument doc)
```

#### Parameters

`strArgument` [string](https://learn.microsoft.com/dotnet/api/system.string)

`doc` IDocument

#### Returns

 IArgument

### GetArgument\(string, IConnector\)

Get argument

```csharp
public static IArgument GetArgument(string strArgument, IConnector connector)
```

#### Parameters

`strArgument` [string](https://learn.microsoft.com/dotnet/api/system.string)

`connector` IConnector

#### Returns

 IArgument

### GetBASE\(IConnector\)

```csharp
public static object GetBASE(IConnector connector)
```

#### Parameters

`connector` IConnector

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetBASEDOC\(IConnector\)

```csharp
public static object GetBASEDOC(IConnector connector)
```

#### Parameters

`connector` IConnector

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetBM\(IConnector\)

```csharp
public static object GetBM(IConnector connector)
```

#### Parameters

`connector` IConnector

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetEnumerator\(\)

Get enumerator for argument.

```csharp
public IEnumerator<ArgumentBase> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)\>

### GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### IndexOf\(ArgumentBase\)

Index of

```csharp
public int IndexOf(ArgumentBase item)
```

#### Parameters

`item` [ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Insert\(int, ArgumentBase\)

Insert argument.

```csharp
public void Insert(int nIndex, ArgumentBase argumentBase)
```

#### Parameters

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

`argumentBase` [ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)

The argumentBase.

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

### ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### Remove\(ArgumentBase\)

Remove argument.

```csharp
public bool Remove(ArgumentBase argumentBase)
```

#### Parameters

`argumentBase` [ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md)

The argumentBase.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAt\(int\)

remove at

```csharp
public void RemoveAt(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.


