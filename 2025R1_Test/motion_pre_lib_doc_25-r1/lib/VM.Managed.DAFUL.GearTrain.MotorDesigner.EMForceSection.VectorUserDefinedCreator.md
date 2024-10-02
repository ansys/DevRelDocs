#  Class MotorDesigner.EMForceSection.VectorUserDefinedCreator

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

vector user-defined creator class

```csharp
public class MotorDesigner.EMForceSection.VectorUserDefinedCreator : MotorDesigner.EMForceSection.VectorCreator, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MotorDesigner.EMForceSection.VectorCreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorCreator.md) ← 
[MotorDesigner.EMForceSection.VectorUserDefinedCreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorUserDefinedCreator.md)

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

[MotorDesigner.EMForceSection.VectorCreator.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorCreator.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_VectorCreator\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[MotorDesigner.EMForceSection.VectorCreator.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorCreator.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_VectorCreator\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[MotorDesigner.EMForceSection.VectorCreator.IsExistAll\(\)](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorCreator.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_VectorCreator\_IsExistAll), 
[MotorDesigner.EMForceSection.VectorCreator.Delete\(\)](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorCreator.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_VectorCreator\_Delete), 
[MotorDesigner.EMForceSection.VectorCreator.Vector](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorCreator.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_VectorCreator\_Vector), 
[MotorDesigner.EMForceSection.VectorCreator.UserSubroutine](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorCreator.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_VectorCreator\_UserSubroutine), 
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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_VectorUserDefinedCreator__ctor"></a> VectorUserDefinedCreator\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorUserDefinedCreator" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VectorUserDefinedCreator()
```

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_VectorUserDefinedCreator__ctor_VM_Managed_DAFUL_Force_Vector_VM_Managed_DAFUL_UserSubroutine_VM_Managed_DAFUL_Array_"></a> VectorUserDefinedCreator\(Vector, UserSubroutine, Array\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorUserDefinedCreator" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VectorUserDefinedCreator(Vector vector, UserSubroutine usub, Array array)
```

#### Parameters

`vector` Vector

The vector.

`usub` UserSubroutine

The usub.

`array` Array

The array.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_VectorUserDefinedCreator_Array"></a> Array

Gets or sets the array.

```csharp
public Array Array { get; set; }
```

#### Property Value

 Array

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_VectorUserDefinedCreator_Delete"></a> Delete\(\)

```csharp
public override void Delete()
```

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_VectorUserDefinedCreator_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_VectorUserDefinedCreator_IsExistAll"></a> IsExistAll\(\)

Gets the state whether this instance exist all.

```csharp
public override bool IsExistAll()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_VectorUserDefinedCreator_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The destroy event information.

