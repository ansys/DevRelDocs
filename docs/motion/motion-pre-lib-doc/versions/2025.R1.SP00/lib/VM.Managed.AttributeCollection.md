#  Class AttributeCollection

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the attribute collection.

```csharp
public sealed class AttributeCollection : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[AttributeCollection](VM.Managed.AttributeCollection.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md)

#### Inherited Members

[LinkContainer.SetModified\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetModified), 
[LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.GetTargetListForUpdate\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetTargetListForUpdate), 
[LinkContainer.SkipUpdateObjectImpl\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SkipUpdateObjectImpl), 
[LinkContainer.Initialize\(Unit.ConvertFactor\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[LinkContainer.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[LinkContainer.Container](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Container), 
[LinkContainer.Owner](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Owner), 
[LinkContainer.Document](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Document), 
[LinkContainer.ID](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ID), 
[LinkContainer.IsChildExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsChildExternable), 
[LinkContainer.IsExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsExternable), 
[LinkContainer.OnRemoved](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnRemoved), 
[LinkContainer.OnAdded](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnAdded), 
[LinkContainer.OnDestroy](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroy), 
[LinkContainer.OnDestroying](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroying), 
[LinkContainer.OnUpdate](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdate), 
[LinkContainer.OnUpdating](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdating), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Managed_AttributeCollection__ctor"></a> AttributeCollection\(\)

Initializes a new instance of the <xref href="VM.Managed.AttributeCollection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeCollection()
```

## Properties

### <a id="VM_Managed_AttributeCollection_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_AttributeCollection_IsExternable"></a> IsExternable

Gets a value indicating whether this instance is Externable.

```csharp
public override bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeCollection_Keys"></a> Keys

Gets an <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> containing the keys of the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public ICollection<string> Keys { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_AttributeCollection_Values"></a> Values

Gets an <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> containing the values in the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public ICollection<AttributeBase> Values { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[AttributeBase](VM.Managed.AttributeBase.md)\>

### <a id="VM_Managed_AttributeCollection_Item_System_String_"></a> this\[string\]

```csharp
public AttributeBase this[string key] { get; set; }
```

#### Property Value

 [AttributeBase](VM.Managed.AttributeBase.md)

## Methods

### <a id="VM_Managed_AttributeCollection_Add_System_String_VM_Managed_AttributeBase_"></a> Add\(string, AttributeBase\)

Adds an element with the provided key and value to the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Add(string strKey, AttributeBase attr)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The object to use as the key of the element to add.

`attr` [AttributeBase](VM.Managed.AttributeBase.md)

The object to use as the value of the element to add.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">strKey</code> is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

An element with the same key already exists in the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="VM_Managed_AttributeCollection_Clear"></a> Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="VM_Managed_AttributeCollection_ContainsKey_System_String_"></a> ContainsKey\(string\)

Determines whether the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> contains an element with the specified key.

```csharp
public bool ContainsKey(string strKey)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key to locate in the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> contains an element with the key; otherwise, false.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">strKey</code> is null.

### <a id="VM_Managed_AttributeCollection_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<KeyValuePair<string, AttributeBase>> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [AttributeBase](VM.Managed.AttributeBase.md)\>\>

A <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> that can be used to iterate through the collection.

### <a id="VM_Managed_AttributeCollection_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, 
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic) 
from this method, and instead, if specifying a custom schema is required, 
apply the XmlSchemaProviderAttribute to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_AttributeCollection_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override sealed void LinkRequestDestroy(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_AttributeCollection_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override sealed void LinkRequestUpdate(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_AttributeCollection_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_AttributeCollection_Remove_System_String_"></a> Remove\(string\)

Removes the element with the specified key from the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public bool Remove(string strKey)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key of the element to remove.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the element is successfully removed; otherwise, false.  This method also returns false if <code class="paramref">strKey</code> was not found in the original <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">strKey</code> is null.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="VM_Managed_AttributeCollection_TryGetValue_System_String_VM_Managed_AttributeBase__"></a> TryGetValue\(string, out AttributeBase\)

Gets the value associated with the specified key.

```csharp
public bool TryGetValue(string strKey, out AttributeBase value)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key whose value to get.

`value` [AttributeBase](VM.Managed.AttributeBase.md)

When this method returns, the value associated with the specified key, if the key is found; otherwise, the default value for the type of the <code class="paramref">value</code> parameter. This parameter is passed uninitialized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the object that implements <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> contains an element with the specified key; otherwise, false.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">strKey</code> is null.

### <a id="VM_Managed_AttributeCollection_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

