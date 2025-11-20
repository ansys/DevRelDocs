# Class HydroForce.ActionBodyData
<a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData"></a>

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This class is to represent the action geometry data.

```csharp
public class HydroForce.ActionBodyData : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[HydroForce.ActionBodyData](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.md)

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

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData__ctor"></a> ActionBodyData\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.HydroForce.ActionBodyData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ActionBodyData()
```

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData__ctor_VM_Managed_ObjectBase_"></a> ActionBodyData\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.HydroForce.ActionBodyData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ActionBodyData(ObjectBase objectBaseActionBody)
```

#### Parameters

`objectBaseActionBody` ObjectBase

The Action Body.

## Properties

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_ActionBody"></a> ActionBody

Gets or sets the Action body.

```csharp
public ObjectBase ActionBody { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_CoarseningFactor"></a> CoarseningFactor

Gets or sets the coarsening factor.

```csharp
public int CoarseningFactor { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_EndingTime"></a> EndingTime

Gets or sets the ending time.

```csharp
public ExpressionValueVariable EndingTime { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

The ending time is null.

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_ShearCoefficient"></a> ShearCoefficient

Gets or sets the shear coefficient.

```csharp
public ExpressionValueVariable ShearCoefficient { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

The shear coefficient is null.

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_ShearExponent"></a> ShearExponent

Gets or sets the shear exponent.

```csharp
public ExpressionValueVariable ShearExponent { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

The shear exponent is null.

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_StartingTime"></a> StartingTime

Gets or sets the starting time.

```csharp
public ExpressionValueVariable StartingTime { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

The starting time is null.

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_TypeOfSurface"></a> TypeOfSurface

Gets or sets the surface type.

```csharp
public HydroForce.ActionBodyData.SurfaceType TypeOfSurface { get; set; }
```

#### Property Value

 [HydroForce](VM.Managed.DAFUL.Track.HydroForce.md).[ActionBodyData](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.md).[SurfaceType](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.SurfaceType.md)

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_TypeOfWeightingFactor"></a> TypeOfWeightingFactor

Gets or sets the weighting factor type.

```csharp
public HydroForce.ActionBodyData.WeightingFactorType TypeOfWeightingFactor { get; set; }
```

#### Property Value

 [HydroForce](VM.Managed.DAFUL.Track.HydroForce.md).[ActionBodyData](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.md).[WeightingFactorType](VM.Managed.DAFUL.Track.HydroForce.ActionBodyData.WeightingFactorType.md)

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_VolumeRatio"></a> VolumeRatio

Gets or sets the volume ratio.

```csharp
public ExpressionValueVariable VolumeRatio { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

The volume ratio is null.

## Methods

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Track_HydroForce_ActionBodyData_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

