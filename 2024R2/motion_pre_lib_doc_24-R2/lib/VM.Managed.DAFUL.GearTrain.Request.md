# Class Request

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Request in Assembly Manager

```csharp
public class Request : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Request](VM.Managed.DAFUL.GearTrain.Request.md)

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

### Request\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Request" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Request()
```

### Request\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Request" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Request(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### BaseMarker

Gets or sets the base marker.

```csharp
public IMarker BaseMarker { get; set; }
```

#### Property Value

 IMarker

### ForceActionEntitis

Gets or sets the force action entitis.

```csharp
public IConnector[] ForceActionEntitis { get; set; }
```

#### Property Value

 IConnector\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

IMarker list is null.
or
IMarker list is null.
or
IMarker is null.

### ForceActionEntityNames

Gets or sets the force action entity names.

```csharp
public string[] ForceActionEntityNames { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### ForceDisplayEndTime

Gets or sets the force display end time.

```csharp
public ExpressionValueVariable ForceDisplayEndTime { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ForceDisplayStartTime

Gets or sets the force display start time.

```csharp
public ExpressionValueVariable ForceDisplayStartTime { get; set; }
```

#### Property Value

 ExpressionValueVariable

### KinematicActionEntitis

Gets or sets the kinematic action entities.

```csharp
public ObjectBase[] KinematicActionEntitis { get; set; }
```

#### Property Value

 ObjectBase\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

ObjectBase list is null.
or
ObjectBase list is null.
or
ObjectBase is null.

### SamplingTime

Gets or sets the sampling time.

```csharp
[Obsolete]
public Variable SamplingTime { get; set; }
```

#### Property Value

 Variable

### SamplingTimes

Gets or sets the array of sampling time.

```csharp
public Variable[] SamplingTimes { get; set; }
```

#### Property Value

 Variable\[\]

### SynchronizeSimulationTime

Gets or sets the synchronize simulation time flag.

```csharp
public bool SynchronizeSimulationTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### \_BaseMarker

Gets or sets the base marker.

```csharp
public Linker<IMarker> _BaseMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

### \_ForceActionEntitis

Gets or sets the force action entitis.

```csharp
public Linker<IConnector>[] _ForceActionEntitis { get; set; }
```

#### Property Value

 Linker<IConnector\>\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

IMarker list is null.
or
IMarker list is null.
or
IMarker is null.

## Methods

### AddForceActionEntity\(IConnector\)

Adds the force action entity.

```csharp
public void AddForceActionEntity(IConnector conn)
```

#### Parameters

`conn` IConnector

The connection.

### AddKinematicActionEntity\(ObjectBase\)

Adds the kinematic action entity.

```csharp
public void AddKinematicActionEntity(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The object.

### AddSamplingTime\(Variable\)

Adds the sampling time value.

```csharp
public void AddSamplingTime(Variable st)
```

#### Parameters

`st` Variable

sampling time value.

### ClearData\(\)

Clears the data.

```csharp
public void ClearData()
```

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.


