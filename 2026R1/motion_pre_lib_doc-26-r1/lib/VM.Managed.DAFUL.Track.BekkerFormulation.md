# Class BekkerFormulation
<a id="VM_Managed_DAFUL_Track_BekkerFormulation"></a>

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This class is to represent the bekker formulation.

```csharp
public class BekkerFormulation : NormalPressureFormulationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[NormalPressureFormulationBase](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md) ← 
[BekkerFormulation](VM.Managed.DAFUL.Track.BekkerFormulation.md)

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

[NormalPressureFormulationBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md\#VM\_Managed\_DAFUL\_Track\_NormalPressureFormulationBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[NormalPressureFormulationBase.OnDeserialization\(object\)](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md\#VM\_Managed\_DAFUL\_Track\_NormalPressureFormulationBase\_OnDeserialization\_System\_Object\_), 
[NormalPressureFormulationBase.CohesiveCoefficient](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md\#VM\_Managed\_DAFUL\_Track\_NormalPressureFormulationBase\_CohesiveCoefficient), 
[NormalPressureFormulationBase.DampRatio](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md\#VM\_Managed\_DAFUL\_Track\_NormalPressureFormulationBase\_DampRatio), 
[NormalPressureFormulationBase.BoundarySinkage](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md\#VM\_Managed\_DAFUL\_Track\_NormalPressureFormulationBase\_BoundarySinkage), 
[NormalPressureFormulationBase.TypeOfNormalPressureFormulation](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md\#VM\_Managed\_DAFUL\_Track\_NormalPressureFormulationBase\_TypeOfNormalPressureFormulation), 
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

### <a id="VM_Managed_DAFUL_Track_BekkerFormulation__ctor"></a> BekkerFormulation\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.BekkerFormulation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BekkerFormulation()
```

## Properties

### <a id="VM_Managed_DAFUL_Track_BekkerFormulation_FrictionCoefficient"></a> FrictionCoefficient

Gets or sets the Friction Coefficient.

```csharp
public ExpressionValueVariable FrictionCoefficient { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

Friction Coefficient is null.

### <a id="VM_Managed_DAFUL_Track_BekkerFormulation_SinkageExponent"></a> SinkageExponent

Gets or sets the Sinkage Exponent.

```csharp
public ExpressionValueVariable SinkageExponent { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

Sinkage Exponent is null.

### <a id="VM_Managed_DAFUL_Track_BekkerFormulation_TypeOfNormalPressureFormulation"></a> TypeOfNormalPressureFormulation

Gets the normal pressure formulation type.

```csharp
public override NormalPressureFormulationType TypeOfNormalPressureFormulation { get; }
```

#### Property Value

 [NormalPressureFormulationType](VM.Managed.DAFUL.Track.NormalPressureFormulationType.md)

### <a id="VM_Managed_DAFUL_Track_BekkerFormulation_Width"></a> Width

Gets or sets the Width.

```csharp
public ExpressionValueVariable Width { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

Width is null.

## Methods

### <a id="VM_Managed_DAFUL_Track_BekkerFormulation_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

