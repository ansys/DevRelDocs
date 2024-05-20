# Class ForceFunction

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This base class is to represent the force charactoristic properties.

```csharp
public abstract class ForceFunction : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ForceFunction](VM.Managed.DAFUL.Force.ForceFunction.md)

#### Derived

[ForceStandard](VM.Managed.DAFUL.Force.ForceStandard.md), 
[ForceUserSubroutine](VM.Managed.DAFUL.Force.ForceUserSubroutine.md)

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

### ForceFunction\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.ForceFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ForceFunction()
```

### ForceFunction\(PropertyForce\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.ForceFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ForceFunction(PropertyForce owner)
```

#### Parameters

`owner` PropertyForce

The owner force property.

## Properties

### IsUseApplyAction

Gets or sets a value indicating whether this instance use apply action.

```csharp
public bool IsUseApplyAction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Type

Gets the function type.

```csharp
public abstract ForceFunction.FunctionType Type { get; }
```

#### Property Value

 [ForceFunction](VM.Managed.DAFUL.Force.ForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.ForceFunction.FunctionType.md)

## Methods

### ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public virtual void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public virtual void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.


