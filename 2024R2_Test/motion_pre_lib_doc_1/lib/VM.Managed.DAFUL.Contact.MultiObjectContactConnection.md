# Class MultiObjectContactConnection

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent multi object connection for contact object.

```csharp
public class MultiObjectContactConnection : MultiObjectConnection, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
MultiObjectConnection ← 
[MultiObjectContactConnection](VM.Managed.DAFUL.Contact.MultiObjectContactConnection.md)

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

MultiObjectConnection.GetConnection\(object, object\), 
MultiObjectConnection.Reset\(\), 
MultiObjectConnection.Connection, 
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

### MultiObjectContactConnection\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.MultiObjectContactConnection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContactConnection()
```

### MultiObjectContactConnection\(IContact\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.MultiObjectContactConnection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectContactConnection(IContact ob)
```

#### Parameters

`ob` [IContact](VM.Managed.DAFUL.Contact.IContact.md)

The contact object.

## Properties

### ActionGeometryFinder

Gets or sets the action geometry finder.

```csharp
public MultiObjectContactGeometryFinderBase ActionGeometryFinder { get; set; }
```

#### Property Value

 [MultiObjectContactGeometryFinderBase](VM.Managed.DAFUL.Contact.MultiObjectContactGeometryFinderBase.md)

### BaseGeometryFinder

Gets or sets the base geometry finder.

```csharp
public MultiObjectContactGeometryFinderBase BaseGeometryFinder { get; set; }
```

#### Property Value

 [MultiObjectContactGeometryFinderBase](VM.Managed.DAFUL.Contact.MultiObjectContactGeometryFinderBase.md)

## Methods

### GetConnection\(object, object\)

Gets the connection object with base-action connection information.

```csharp
public override ObjectBase GetConnection(object obBase, object obAction)
```

#### Parameters

`obBase` [object](https://learn.microsoft.com/dotnet/api/system.object)

The base object for the connection object.

`obAction` [object](https://learn.microsoft.com/dotnet/api/system.object)

The action object for the connection object.

#### Returns

 ObjectBase

### Reset\(\)

Initializes the connection object with base-action connection information..

```csharp
public override void Reset()
```


