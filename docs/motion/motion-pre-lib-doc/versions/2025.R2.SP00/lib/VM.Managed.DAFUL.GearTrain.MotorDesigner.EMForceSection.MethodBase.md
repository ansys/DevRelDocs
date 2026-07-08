#  Class MotorDesigner.EMForceSection.MethodBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

method base class

```csharp
public abstract class MotorDesigner.EMForceSection.MethodBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MotorDesigner.EMForceSection.MethodBase](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase.md)

#### Derived

[MotorDesigner.EMForceSection.MaxwellFileMethod](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MaxwellFileMethod.md), 
[MotorDesigner.EMForceSection.UserDefinedMethod](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.UserDefinedMethod.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_MethodBase__ctor"></a> MethodBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MethodBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_MethodBase_RadialSpline"></a> RadialSpline

Gets or sets the radial spline.

```csharp
public Spline RadialSpline { get; set; }
```

#### Property Value

 Spline

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_MethodBase_Scale"></a> Scale

Gets or sets the scale.

```csharp
public Scale Scale { get; set; }
```

#### Property Value

 [Scale](VM.Managed.DAFUL.GearTrain.Force.MoterEM.Scale.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_MethodBase_TangentialSpline"></a> TangentialSpline

Gets or sets the tangential spline.

```csharp
public Spline TangentialSpline { get; set; }
```

#### Property Value

 Spline

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_MethodBase_TypeOfGeometryCreation"></a> TypeOfGeometryCreation

Gets the geometry creation type.

```csharp
public abstract MotorDesigner.GeometryCreationType TypeOfGeometryCreation { get; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[GeometryCreationType](VM.Managed.DAFUL.GearTrain.MotorDesigner.GeometryCreationType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_MethodBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

