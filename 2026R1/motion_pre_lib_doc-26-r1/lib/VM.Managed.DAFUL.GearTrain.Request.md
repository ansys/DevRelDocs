# Class Request
<a id="VM_Managed_DAFUL_GearTrain_Request"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Request in Assembly Manager

```csharp
public class Request : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Request__ctor"></a> Request\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Request" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Request()
```

### <a id="VM_Managed_DAFUL_GearTrain_Request__ctor_VM_Models_Pre_IOwned_"></a> Request\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Request" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Request(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Request_BaseMarker"></a> BaseMarker

Gets or sets the base marker.

```csharp
public IMarker BaseMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_GearTrain_Request_ForceActionEntitis"></a> ForceActionEntitis

Gets or sets the force action entitis.

```csharp
public IConnector[] ForceActionEntitis { get; set; }
```

#### Property Value

 IConnector\[\]

#### Exceptions

 Exception

IMarker list is null.
or
IMarker list is null.
or
IMarker is null.

### <a id="VM_Managed_DAFUL_GearTrain_Request_ForceActionEntityNames"></a> ForceActionEntityNames

Gets or sets the force action entity names.

```csharp
public string[] ForceActionEntityNames { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Request_ForceDisplayEndTime"></a> ForceDisplayEndTime

Gets or sets the force display end time.

```csharp
public ExpressionValueVariable ForceDisplayEndTime { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_Request_ForceDisplayStartTime"></a> ForceDisplayStartTime

Gets or sets the force display start time.

```csharp
public ExpressionValueVariable ForceDisplayStartTime { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_Request_KinematicActionEntitis"></a> KinematicActionEntitis

Gets or sets the kinematic action entities.

```csharp
public ObjectBase[] KinematicActionEntitis { get; set; }
```

#### Property Value

 ObjectBase\[\]

#### Exceptions

 Exception

ObjectBase list is null.
or
ObjectBase list is null.
or
ObjectBase is null.

### <a id="VM_Managed_DAFUL_GearTrain_Request_SamplingTime"></a> SamplingTime

Gets or sets the sampling time.

```csharp
[Obsolete]
public Variable SamplingTime { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_GearTrain_Request_SamplingTimes"></a> SamplingTimes

Gets or sets the array of sampling time.

```csharp
public Variable[] SamplingTimes { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Request_SynchronizeSimulationTime"></a> SynchronizeSimulationTime

Gets or sets the synchronize simulation time flag.

```csharp
public bool SynchronizeSimulationTime { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Request__BaseMarker"></a> \_BaseMarker

Gets or sets the base marker.

```csharp
public Linker<IMarker> _BaseMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

### <a id="VM_Managed_DAFUL_GearTrain_Request__ForceActionEntitis"></a> \_ForceActionEntitis

Gets or sets the force action entitis.

```csharp
public Linker<IConnector>[] _ForceActionEntitis { get; set; }
```

#### Property Value

 Linker<IConnector\>\[\]

#### Exceptions

 Exception

IMarker list is null.
or
IMarker list is null.
or
IMarker is null.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Request_AddForceActionEntity_VM_Managed_DAFUL_IConnector_"></a> AddForceActionEntity\(IConnector\)

Adds the force action entity.

```csharp
public void AddForceActionEntity(IConnector conn)
```

#### Parameters

`conn` IConnector

The connection.

### <a id="VM_Managed_DAFUL_GearTrain_Request_AddKinematicActionEntity_VM_Managed_ObjectBase_"></a> AddKinematicActionEntity\(ObjectBase\)

Adds the kinematic action entity.

```csharp
public void AddKinematicActionEntity(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The object.

### <a id="VM_Managed_DAFUL_GearTrain_Request_AddSamplingTime_VM_Managed_Variable_"></a> AddSamplingTime\(Variable\)

Adds the sampling time value.

```csharp
public void AddSamplingTime(Variable st)
```

#### Parameters

`st` Variable

sampling time value.

### <a id="VM_Managed_DAFUL_GearTrain_Request_ClearData"></a> ClearData\(\)

Clears the data.

```csharp
public void ClearData()
```

### <a id="VM_Managed_DAFUL_GearTrain_Request_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

