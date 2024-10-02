#  Class ConfigurationExtraCollection

Namespace: [VM.Managed.Simulation](VM.Managed.Simulation.md)  
Assembly: VMDFBase.dll  

This class is to represent the extra simulation configuration collection.

```csharp
public class ConfigurationExtraCollection : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ConfigurationExtraCollection](VM.Managed.Simulation.ConfigurationExtraCollection.md)

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

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection__ctor"></a> ConfigurationExtraCollection\(\)

Initializes a new instance of the <xref href="VM.Managed.Simulation.ConfigurationExtraCollection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConfigurationExtraCollection()
```

## Properties

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_Count"></a> Count

Gets the number of elements contained in the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public virtual int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_Keys"></a> Keys

Gets an <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> containing the keys of the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public virtual ICollection<string> Keys { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_Values"></a> Values

Gets an <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> containing the values in the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public virtual ICollection<SimulationConfigurationExtraBase> Values { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<SimulationConfigurationExtraBase\>

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_Item_System_String_"></a> this\[string\]

Gets or sets the <xref href="VM.Managed.SimulationConfigurationExtraBase" data-throw-if-not-resolved="false"></xref> with the specified key.

```csharp
public virtual SimulationConfigurationExtraBase this[string strKey] { get; set; }
```

#### Property Value

 SimulationConfigurationExtraBase

## Methods

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_Add_System_String_VM_Managed_SimulationConfigurationExtraBase_"></a> Add\(string, SimulationConfigurationExtraBase\)

Adds an element with the provided key and value to the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public virtual void Add(string key, SimulationConfigurationExtraBase value)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The object to use as the key of the element to add.

`value` SimulationConfigurationExtraBase

The object to use as the value of the element to add.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">key</code> is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

An element with the same key already exists in the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_Clear"></a> Clear\(\)

Removes all items from the <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public virtual void Clear()
```

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.ICollection%601" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_ContainsKey_System_String_"></a> ContainsKey\(string\)

Determines whether the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> contains an element with the specified key.

```csharp
public virtual bool ContainsKey(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key to locate in the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> contains an element with the key; otherwise, false.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">key</code> is null.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public virtual IEnumerator<KeyValuePair<string, SimulationConfigurationExtraBase>> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), SimulationConfigurationExtraBase\>\>

A <xref href="System.Collections.Generic.IEnumerator%601" data-throw-if-not-resolved="false"></xref> that can be used to iterate through the collection.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_Remove_System_String_"></a> Remove\(string\)

Removes the element with the specified key from the <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

```csharp
public virtual bool Remove(string key)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key of the element to remove.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the element is successfully removed; otherwise, false.  This method also returns false if <code class="paramref">key</code> was not found in the original <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">key</code> is null.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> is read-only.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_TryGetValue_System_String_VM_Managed_SimulationConfigurationExtraBase__"></a> TryGetValue\(string, out SimulationConfigurationExtraBase\)

Gets the value associated with the specified key.

```csharp
public virtual bool TryGetValue(string key, out SimulationConfigurationExtraBase value)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key whose value to get.

`value` SimulationConfigurationExtraBase

When this method returns, the value associated with the specified key, if the key is found; otherwise, the default value for the type of the <code class="paramref">value</code> parameter. This parameter is passed uninitialized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the object that implements <xref href="System.Collections.Generic.IDictionary%602" data-throw-if-not-resolved="false"></xref> contains an element with the specified key; otherwise, false.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

<code class="paramref">key</code> is null.

### <a id="VM_Managed_Simulation_ConfigurationExtraCollection_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

