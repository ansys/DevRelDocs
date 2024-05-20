# Class Scale

Namespace: [VM.Managed.DAFUL.Tire](VM.Managed.DAFUL.Tire.md)  
Assembly: VMDTire.dll  

This class is to represent the scale.

```csharp
public class Scale : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Scale](VM.Managed.DAFUL.Tire.Scale.md)

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

### Scale\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Tire.Scale" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Scale()
```

## Properties

### AligningTorqueScaleFactor

Gets or sets the aligning torque scale factor.

```csharp
public ExpressionValueVariable AligningTorqueScaleFactor { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ConicityForceOffset

Gets or sets the conicity force offset.

```csharp
public ExpressionValueVariable ConicityForceOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ConicityTorqueOffset

Gets or sets the conicity torque offset.

```csharp
public ExpressionValueVariable ConicityTorqueOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### LateralForceScaleFactor

Gets or sets the lateral force scale factor.

```csharp
public ExpressionValueVariable LateralForceScaleFactor { get; set; }
```

#### Property Value

 ExpressionValueVariable

### OverturningMomentScaleFactor

Gets or sets the overturning moment scale factor.

```csharp
public ExpressionValueVariable OverturningMomentScaleFactor { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PlysteerForceOffset

Gets or sets the plysteer force offset.

```csharp
public ExpressionValueVariable PlysteerForceOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PlysteerTorqueOffset

Gets or sets the plysteer torque offset.

```csharp
public ExpressionValueVariable PlysteerTorqueOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### UnloadedRadiusOffset

Gets or sets the unloaded radius offset.

```csharp
public ExpressionValueVariable UnloadedRadiusOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable


