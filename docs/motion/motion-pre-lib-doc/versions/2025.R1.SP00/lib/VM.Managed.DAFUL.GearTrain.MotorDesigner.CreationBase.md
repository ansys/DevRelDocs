#  Class MotorDesigner.CreationBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Creation base class

```csharp
public abstract class MotorDesigner.CreationBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MotorDesigner.CreationBase](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md)

#### Derived

[MotorDesigner.StatorSection.CADImportCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.StatorSection.CADImportCreation.md), 
[MotorDesigner.StatorSection.MaxwellCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.StatorSection.MaxwellCreation.md), 
[MotorDesigner.RotorSection.MaxwellCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.RotorSection.MaxwellCreation.md), 
[MotorDesigner.RotorSection.UserDefinedCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.RotorSection.UserDefinedCreation.md), 
[MotorDesigner.StatorSection.UserDefinedCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.StatorSection.UserDefinedCreation.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase__ctor"></a> CreationBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CreationBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase_Depth"></a> Depth

Gets or sets the 2nd size factor.

```csharp
public ExpressionValueVariable Depth { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase_Material"></a> Material

Gets or sets the material.

```csharp
public IMaterial Material { get; set; }
```

#### Property Value

 IMaterial

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase_RotateAngle"></a> RotateAngle

Gets or sets the rotate angle.

```csharp
public ExpressionValueVariable RotateAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase_TypeOfGeometryCreation"></a> TypeOfGeometryCreation

Gets the geometry creation type.

```csharp
public abstract MotorDesigner.GeometryCreationType TypeOfGeometryCreation { get; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[GeometryCreationType](VM.Managed.DAFUL.GearTrain.MotorDesigner.GeometryCreationType.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase__Material"></a> \_Material

Gets or sets the material.

```csharp
public Linker<IMaterial> _Material { get; set; }
```

#### Property Value

 Linker<IMaterial\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_CreationBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

