# Class Rack

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The gear rack information

```csharp
public class Rack : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[Rack](VM.Managed.DAFUL.GearTrain.Rack.md)

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

[GearPropertyBase.InitChild\(int\)](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearPropertyBase\_InitChild\_System\_Int32\_), 
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

### Rack\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Rack" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Rack()
```

## Properties

### ContactProperty

Gets or sets the contact property.

```csharp
public PropertyContact3D ContactProperty { get; set; }
```

#### Property Value

 PropertyContact3D

### Diameter

Gets or sets the diameter.

```csharp
public ExpressionValueVariable Diameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Height

Gets or sets the height.

```csharp
public ExpressionValueVariable Height { get; set; }
```

#### Property Value

 ExpressionValueVariable

### HelixAngle

Gets or sets the helix angle.

```csharp
public ExpressionValueVariable HelixAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### InputTypeOfBar

Gets or sets the type of bar.

```csharp
public Rack.BarType InputTypeOfBar { get; set; }
```

#### Property Value

 [Rack](VM.Managed.DAFUL.GearTrain.Rack.md).[BarType](VM.Managed.DAFUL.GearTrain.Rack.BarType.md)

### InputTypeOfSimulation

Gets or sets the type of the simulation.

```csharp
public Rack.SimulationType InputTypeOfSimulation { get; set; }
```

#### Property Value

 [Rack](VM.Managed.DAFUL.GearTrain.Rack.md).[SimulationType](VM.Managed.DAFUL.GearTrain.Rack.SimulationType.md)

### IsUseDifferentHelixAngle

Gets or sets a value indicating whether [use different helix angle].

```csharp
public bool IsUseDifferentHelixAngle { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SideLength

Gets or sets the length of the side.

```csharp
public ExpressionValueVariable SideLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ToothThickness

Gets or sets the tooth thickness.

```csharp
public ExpressionValueVariable ToothThickness { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### InitChild\(int, ConvertFactor\)

Initializes the child.

```csharp
public void InitChild(int nNum, Unit.ConvertFactor factor)
```

#### Parameters

`nNum` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

`factor` Unit.ConvertFactor

The factor.


