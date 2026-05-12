#  Class WongFormulation

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This abstract class is to represent the wong formulation.

```csharp
public class WongFormulation : ShearPressureFormulationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ShearPressureFormulationBase](VM.Managed.DAFUL.Track.ShearPressureFormulationBase.md) ← 
[WongFormulation](VM.Managed.DAFUL.Track.WongFormulation.md)

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

[ShearPressureFormulationBase.TypeOfShearPressureFormulation](VM.Managed.DAFUL.Track.ShearPressureFormulationBase.md\#VM\_Managed\_DAFUL\_Track\_ShearPressureFormulationBase\_TypeOfShearPressureFormulation), 
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

### <a id="VM_Managed_DAFUL_Track_WongFormulation__ctor"></a> WongFormulation\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.WongFormulation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WongFormulation()
```

## Properties

### <a id="VM_Managed_DAFUL_Track_WongFormulation_Cohesion"></a> Cohesion

Gets or sets the Cohesion.

```csharp
public ExpressionValueVariable Cohesion { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Cohesion is null.

### <a id="VM_Managed_DAFUL_Track_WongFormulation_FrictionAngle"></a> FrictionAngle

Gets or sets the Friction Angle.

```csharp
public ExpressionValueVariable FrictionAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Friction Angle is null.

### <a id="VM_Managed_DAFUL_Track_WongFormulation_MaxShearDisplacement"></a> MaxShearDisplacement

Gets or sets the Max. Shear Displacement.

```csharp
public ExpressionValueVariable MaxShearDisplacement { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Max. Shear Displacement is null.

### <a id="VM_Managed_DAFUL_Track_WongFormulation_Sensitivity"></a> Sensitivity

Gets or sets the Sensitivity.

```csharp
public ExpressionValueVariable Sensitivity { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Sensitivity is null.

### <a id="VM_Managed_DAFUL_Track_WongFormulation_TypeOfShearPressureFormulation"></a> TypeOfShearPressureFormulation

Gets the normal pressure formulation type.

```csharp
public override ShearPressureFormulationType TypeOfShearPressureFormulation { get; }
```

#### Property Value

 [ShearPressureFormulationType](VM.Managed.DAFUL.Track.ShearPressureFormulationType.md)

## Methods

### <a id="VM_Managed_DAFUL_Track_WongFormulation_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

