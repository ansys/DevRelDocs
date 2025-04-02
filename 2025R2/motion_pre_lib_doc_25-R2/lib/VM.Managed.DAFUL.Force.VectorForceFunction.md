#  Class VectorForceFunction

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This base class is to represent the vector force charactoristic properties.

```csharp
public abstract class VectorForceFunction : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[VectorForceFunction](VM.Managed.DAFUL.Force.VectorForceFunction.md)

#### Derived

[VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md), 
[VectorForceUserSubroutine](VM.Managed.DAFUL.Force.VectorForceUserSubroutine.md)

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

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction__ctor"></a> VectorForceFunction\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.VectorForceFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected VectorForceFunction()
```

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction__ctor_VM_Managed_DAFUL_Force_PropertyVector_"></a> VectorForceFunction\(PropertyVector\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.VectorForceFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected VectorForceFunction(PropertyVector owner)
```

#### Parameters

`owner` [PropertyVector](VM.Managed.DAFUL.Force.PropertyVector.md)

The owner vector force property.

## Properties

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction_IsUseRM"></a> IsUseRM

Gets or sets a value indicating whether this instance use reference marker.

```csharp
public bool IsUseRM { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction_ReferenceMarker"></a> ReferenceMarker

Gets or sets the reference marker.

```csharp
public IMarker ReferenceMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction_Type"></a> Type

Gets the function type.

```csharp
public abstract VectorForceFunction.FunctionType Type { get; }
```

#### Property Value

 [VectorForceFunction](VM.Managed.DAFUL.Force.VectorForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.VectorForceFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction__ReferenceMarker"></a> \_ReferenceMarker

Gets or sets the reference marker.

```csharp
public Linker<IMarker> _ReferenceMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction_OnLinkReserved_VM_Managed_ILink_System_Object_System_EventArgs_"></a> OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected override void OnLinkReserved(ILink link, object objNotifier, EventArgs args)
```

#### Parameters

`link` ILink

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public virtual void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Force_VectorForceFunction_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public virtual void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

