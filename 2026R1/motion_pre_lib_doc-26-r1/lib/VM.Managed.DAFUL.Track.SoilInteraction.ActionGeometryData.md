#  Class SoilInteraction.ActionGeometryData

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This class is to represent the action geometry data.

```csharp
public class SoilInteraction.ActionGeometryData : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[SoilInteraction.ActionGeometryData](VM.Managed.DAFUL.Track.SoilInteraction.ActionGeometryData.md)

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

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData__ctor"></a> ActionGeometryData\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.SoilInteraction.ActionGeometryData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ActionGeometryData()
```

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData__ctor_VM_Managed_ObjectBase_"></a> ActionGeometryData\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.SoilInteraction.ActionGeometryData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ActionGeometryData(ObjectBase objectBaseActionGeometry)
```

#### Parameters

`objectBaseActionGeometry` ObjectBase

The Action Geometry.

## Properties

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_ActionGeometry"></a> ActionGeometry

Gets or sets the Action geometry.

```csharp
public ObjectBase ActionGeometry { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_ActionOrientation"></a> ActionOrientation

Gets the action orientation.

```csharp
public OMatrix ActionOrientation { get; }
```

#### Property Value

 OMatrix

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_ActionPosition"></a> ActionPosition

Gets the action position.

```csharp
public VectorBase ActionPosition { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_ContactAreaLengthOrRadius"></a> ContactAreaLengthOrRadius

Gets or sets the Contact Area Length or Radius.

```csharp
public double ContactAreaLengthOrRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_ContactAreaWidth"></a> ContactAreaWidth

Gets or sets the Contact Area Width.

```csharp
public double ContactAreaWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_ContactPointOfLengthOrRadius"></a> ContactPointOfLengthOrRadius

Gets or sets the Contact Point of Length Or Radius.

```csharp
public uint ContactPointOfLengthOrRadius { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_ContactPointOfWidth"></a> ContactPointOfWidth

Gets or sets the Contact Point of Width.

```csharp
public uint ContactPointOfWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_Track_SoilInteraction_ActionGeometryData_TypeOfContactShape"></a> TypeOfContactShape

Gets or sets the Contact Shape Type.

```csharp
public SoilInteraction.ActionGeometryData.ContactShapeType TypeOfContactShape { get; set; }
```

#### Property Value

 [SoilInteraction](VM.Managed.DAFUL.Track.SoilInteraction.md).[ActionGeometryData](VM.Managed.DAFUL.Track.SoilInteraction.ActionGeometryData.md).[ContactShapeType](VM.Managed.DAFUL.Track.SoilInteraction.ActionGeometryData.ContactShapeType.md)

