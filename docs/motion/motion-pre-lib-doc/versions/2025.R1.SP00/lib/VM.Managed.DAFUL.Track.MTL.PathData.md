#  Class MTL.PathData

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This class is to represent the path data.

```csharp
public class MTL.PathData : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MTL.PathData](VM.Managed.DAFUL.Track.MTL.PathData.md)

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

### <a id="VM_Managed_DAFUL_Track_MTL_PathData__ctor"></a> PathData\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.MTL.PathData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PathData()
```

### <a id="VM_Managed_DAFUL_Track_MTL_PathData__ctor_VM_Managed_DAFUL_Track_MTL_PathData_PathType_VM_Managed_IMarker_VM_Managed_Variable_"></a> PathData\(PathType, IMarker, Variable\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.MTL.PathData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PathData(MTL.PathData.PathType typePath, IMarker centerMarker, Variable varWindingRadius)
```

#### Parameters

`typePath` [MTL](VM.Managed.DAFUL.Track.MTL.md).[PathData](VM.Managed.DAFUL.Track.MTL.PathData.md).[PathType](VM.Managed.DAFUL.Track.MTL.PathData.PathType.md)

The path type.

`centerMarker` IMarker

The center marker.

`varWindingRadius` Variable

The winding radius.

## Properties

### <a id="VM_Managed_DAFUL_Track_MTL_PathData_CenterMarker"></a> CenterMarker

Gets or sets the center marker.

```csharp
public IMarker CenterMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_Track_MTL_PathData_TypeOfPath"></a> TypeOfPath

Gets or sets the path type.

```csharp
public MTL.PathData.PathType TypeOfPath { get; set; }
```

#### Property Value

 [MTL](VM.Managed.DAFUL.Track.MTL.md).[PathData](VM.Managed.DAFUL.Track.MTL.PathData.md).[PathType](VM.Managed.DAFUL.Track.MTL.PathData.PathType.md)

### <a id="VM_Managed_DAFUL_Track_MTL_PathData_WindingRadius"></a> WindingRadius

Gets or sets the winding radius.

```csharp
public ExpressionValueVariable WindingRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The winding radius is null.

### <a id="VM_Managed_DAFUL_Track_MTL_PathData__CenterMarker"></a> \_CenterMarker

Gets or sets the center marker.

```csharp
public Linker<IMarker> _CenterMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### <a id="VM_Managed_DAFUL_Track_MTL_PathData_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Track_MTL_PathData_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

