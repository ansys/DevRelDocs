#  Class ArgumentLink

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

This class is to represent the link argument.

```csharp
public class ArgumentLink : ArgumentBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ArgumentBase](VM.Managed.DAFUL.ArgumentBase.md) ← 
[ArgumentLink](VM.Managed.DAFUL.ArgumentLink.md)

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
IVerifiable, 
IReservable

#### Inherited Members

[ArgumentBase.Name](VM.Managed.DAFUL.ArgumentBase.md\#VM\_Managed\_DAFUL\_ArgumentBase\_Name), 
[ArgumentBase.Expression](VM.Managed.DAFUL.ArgumentBase.md\#VM\_Managed\_DAFUL\_ArgumentBase\_Expression), 
[ArgumentBase.ArgumentType](VM.Managed.DAFUL.ArgumentBase.md\#VM\_Managed\_DAFUL\_ArgumentBase\_ArgumentType), 
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

### <a id="VM_Managed_DAFUL_ArgumentLink__ctor"></a> ArgumentLink\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ArgumentLink" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ArgumentLink()
```

### <a id="VM_Managed_DAFUL_ArgumentLink__ctor_VM_Models_Pre_IArgument_"></a> ArgumentLink\(IArgument\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ArgumentLink" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ArgumentLink(IArgument arg)
```

#### Parameters

`arg` IArgument

The argument.

### <a id="VM_Managed_DAFUL_ArgumentLink__ctor_System_String_VM_Models_Pre_IArgument_"></a> ArgumentLink\(string, IArgument\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ArgumentLink" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ArgumentLink(string name, IArgument arg)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of this argument.

`arg` IArgument

The argument.

### <a id="VM_Managed_DAFUL_ArgumentLink__ctor_VM_Managed_DAFUL_ArgumentListGeneral_"></a> ArgumentLink\(ArgumentListGeneral\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ArgumentLink" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ArgumentLink(ArgumentListGeneral owner)
```

#### Parameters

`owner` [ArgumentListGeneral](VM.Managed.DAFUL.ArgumentListGeneral.md)

The owner argument list.

### <a id="VM_Managed_DAFUL_ArgumentLink__ctor_VM_Managed_DAFUL_ArgumentListGeneral_VM_Models_Pre_IArgument_"></a> ArgumentLink\(ArgumentListGeneral, IArgument\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ArgumentLink" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ArgumentLink(ArgumentListGeneral owner, IArgument arg)
```

#### Parameters

`owner` [ArgumentListGeneral](VM.Managed.DAFUL.ArgumentListGeneral.md)

The owner argument list.

`arg` IArgument

The argument.

## Properties

### <a id="VM_Managed_DAFUL_ArgumentLink_Argument"></a> Argument

Gets or sets the <xref href="VM.Models.Pre.IArgument" data-throw-if-not-resolved="false"></xref>.

```csharp
public IArgument Argument { get; set; }
```

#### Property Value

 IArgument

### <a id="VM_Managed_DAFUL_ArgumentLink_ArgumentType"></a> ArgumentType

The type of the argument

```csharp
public override ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_ArgumentLink_Expression"></a> Expression

The argument expression

```csharp
public override string Expression { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_ArgumentLink_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_DAFUL_ArgumentLink_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_ArgumentLink_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_ArgumentLink_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

