#  Class MotorDesigner.RotorSection

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Rotor Section

```csharp
public class MotorDesigner.RotorSection : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MotorDesigner.RotorSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.RotorSection.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection__ctor"></a> RotorSection\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.RotorSection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RotorSection()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_DummyBody"></a> DummyBody

Gets or sets the dummy body.

```csharp
public SolidBody DummyBody { get; set; }
```

#### Property Value

 SolidBody

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_GeometryCreation"></a> GeometryCreation

Gets or sets the geometry creation.

```csharp
public MotorDesigner.CreationBase GeometryCreation { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[CreationBase](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_MountRBEs"></a> MountRBEs

Gets or sets the rbe for mount.

```csharp
public MotorDesigner.RBECreator[] MountRBEs { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[RBECreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.RBECreator.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_Revolute"></a> Revolute

Gets or sets the revolute connector.

```csharp
public General Revolute { get; set; }
```

#### Property Value

 General

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_CanBeDestroy_System_Object_"></a> CanBeDestroy\(object\)

Whether can be destroy or not.

```csharp
protected override bool CanBeDestroy(object objNotifier)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The destroy object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_ChangeGeometryCreation_VM_Managed_DAFUL_GearTrain_MotorDesigner_GeometryCreationType_"></a> ChangeGeometryCreation\(GeometryCreationType\)

Change geometry creation

```csharp
public void ChangeGeometryCreation(MotorDesigner.GeometryCreationType geometryCreationType)
```

#### Parameters

`geometryCreationType` [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[GeometryCreationType](VM.Managed.DAFUL.GearTrain.MotorDesigner.GeometryCreationType.md)

The geometry creation type

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_CreateBuilder_VM_Managed_Document_"></a> CreateBuilder\(Document\)

Create builder

```csharp
public MotorRotorBuiler CreateBuilder(Document doc)
```

#### Parameters

`doc` Document

The document

#### Returns

 [MotorRotorBuiler](VM.Managed.DAFUL.GearTrain.MotorRotorBuiler.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_RotorSection_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The destroy event information.

