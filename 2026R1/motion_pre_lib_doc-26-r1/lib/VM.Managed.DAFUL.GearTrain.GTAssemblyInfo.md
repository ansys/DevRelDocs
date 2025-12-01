# Class GTAssemblyInfo
<a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

This class is to represent assembly Info.

```csharp
public class GTAssemblyInfo : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IPostDeserialized
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)

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
IPostDeserialized

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

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo__ctor"></a> GTAssemblyInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GTAssemblyInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GTAssemblyInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo__ctor_VM_Models_Pre_IOwned_"></a> GTAssemblyInfo\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GTAssemblyInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GTAssemblyInfo(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_ActionBody"></a> ActionBody

Gets or sets the action body.

```csharp
public IConnectable ActionBody { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_BaseBody"></a> BaseBody

Gets or sets the base body.

```csharp
public IConnectable BaseBody { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_Position"></a> Position

Gets the position.

```csharp
public VectorBase Position { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_ReferencePoint"></a> ReferencePoint

Gets or sets the reference point.

```csharp
public IPowerLoad ReferencePoint { get; set; }
```

#### Property Value

 [IPowerLoad](VM.Managed.DAFUL.GearTrain.IPowerLoad.md)

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_User"></a> User

Gets or sets a value indicating whether this instance is user.

```csharp
public bool User { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo__ActionBody"></a> \_ActionBody

Gets or sets the action body.

```csharp
public Linker<IConnectable> _ActionBody { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo__BaseBody"></a> \_BaseBody

Gets or sets the base body.

```csharp
public Linker<IConnectable> _BaseBody { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Managed_DAFUL_GearTrain_GTAssemblyInfo__ReferencePoint"></a> \_ReferencePoint

Gets or sets the reference point.

```csharp
public Linker<IPowerLoad> _ReferencePoint { get; set; }
```

#### Property Value

 Linker<[IPowerLoad](VM.Managed.DAFUL.GearTrain.IPowerLoad.md)\>

