#  Class MotorDesigner.RotorSection.UserDefinedCreation

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

User defined Creation

```csharp
public class MotorDesigner.RotorSection.UserDefinedCreation : MotorDesigner.CreationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MotorDesigner.CreationBase](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md) ← 
[MotorDesigner.RotorSection.UserDefinedCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.RotorSection.UserDefinedCreation.md)

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

[MotorDesigner.CreationBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_CreationBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[MotorDesigner.CreationBase.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_CreationBase\_OnDeserialization\_System\_Object\_), 
[MotorDesigner.CreationBase.Depth](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_CreationBase\_Depth), 
[MotorDesigner.CreationBase.RotateAngle](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_CreationBase\_RotateAngle), 
[MotorDesigner.CreationBase.Material](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_CreationBase\_Material), 
[MotorDesigner.CreationBase.\_Material](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_CreationBase\_\_Material), 
[MotorDesigner.CreationBase.TypeOfGeometryCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_CreationBase\_TypeOfGeometryCreation), 
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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_UserDefinedCreation__ctor"></a> UserDefinedCreation\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.RotorSection.UserDefinedCreation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UserDefinedCreation()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_UserDefinedCreation_InnerDiameter"></a> InnerDiameter

Gets or sets the inner diameter.

```csharp
public ExpressionValueVariable InnerDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_UserDefinedCreation_OuterDiameter"></a> OuterDiameter

Gets or sets the outer diameter.

```csharp
public ExpressionValueVariable OuterDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_UserDefinedCreation_TypeOfGeometryCreation"></a> TypeOfGeometryCreation

Gets the geometry creation type.

```csharp
public override MotorDesigner.GeometryCreationType TypeOfGeometryCreation { get; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[GeometryCreationType](VM.Managed.DAFUL.GearTrain.MotorDesigner.GeometryCreationType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_UserDefinedCreation_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

