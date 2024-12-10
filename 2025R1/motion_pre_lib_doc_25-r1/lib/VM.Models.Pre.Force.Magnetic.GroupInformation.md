#  Class Magnetic.GroupInformation

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This class is to represent the group information.

```csharp
public class Magnetic.GroupInformation : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Magnetic.GroupInformation](VM.Models.Pre.Force.Magnetic.GroupInformation.md)

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

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformation__ctor"></a> GroupInformation\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Magnetic.GroupInformation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GroupInformation()
```

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformation__ctor_VM_Managed_DAFUL_Group_"></a> GroupInformation\(Group\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Magnetic.GroupInformation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GroupInformation(Group group)
```

#### Parameters

`group` Group

The group.

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformation__ctor_VM_Managed_DAFUL_Group_VM_Managed_IMarker_"></a> GroupInformation\(Group, IMarker\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Magnetic.GroupInformation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GroupInformation(Group group, IMarker coordinateSystem)
```

#### Parameters

`group` Group

The group.

`coordinateSystem` IMarker

The coordinate system.

## Properties

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformation_CoordinateSystem"></a> CoordinateSystem

Gets or sets the center marker.

```csharp
public IMarker CoordinateSystem { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformation_Group"></a> Group

Gets or sets the group.

```csharp
public Group Group { get; set; }
```

#### Property Value

 Group

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformation__CoordinateSystem"></a> \_CoordinateSystem

Gets or sets the coordinate system.

```csharp
public Linker<IMarker> _CoordinateSystem { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformation_CheckCoordinateWithGroup"></a> CheckCoordinateWithGroup\(\)

Check coordinate system with group.

```csharp
public bool CheckCoordinateWithGroup()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The success flag

