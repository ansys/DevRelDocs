#  Class MotorDesigner.StatorSection

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Stator Section

```csharp
public class MotorDesigner.StatorSection : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MotorDesigner.StatorSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.StatorSection.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection__ctor"></a> StatorSection\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.StatorSection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StatorSection()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_GeometryCreation"></a> GeometryCreation

Gets or sets the geometry creation.

```csharp
public MotorDesigner.CreationBase GeometryCreation { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[CreationBase](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_MountRBEs"></a> MountRBEs

Gets or sets the rbe for mount.

```csharp
public MotorDesigner.RBECreator[] MountRBEs { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[RBECreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.RBECreator.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_ToothRBEs"></a> ToothRBEs

Gets or sets the rbe for tooth.

```csharp
public MotorDesigner.RBECreator[] ToothRBEs { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[RBECreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.RBECreator.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_ApplyLocationForCADImport_VM_Managed_CAD_Body_VM_Managed_CAD_Builder_"></a> ApplyLocationForCADImport\(Body, Builder\)

Apply location for CAD Import.

```csharp
public void ApplyLocationForCADImport(Body body, Builder builder)
```

#### Parameters

`body` Body

The body

`builder` Builder

The builder

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_ChangeGeometryCreation_VM_Managed_DAFUL_GearTrain_MotorDesigner_GeometryCreationType_"></a> ChangeGeometryCreation\(GeometryCreationType\)

Change geometry creation

```csharp
public void ChangeGeometryCreation(MotorDesigner.GeometryCreationType geometryCreationType)
```

#### Parameters

`geometryCreationType` [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[GeometryCreationType](VM.Managed.DAFUL.GearTrain.MotorDesigner.GeometryCreationType.md)

The geometry creation type

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CreateBuilder_VM_Managed_Document_"></a> CreateBuilder\(Document\)

Create builder

```csharp
public MotorStatorBuiler CreateBuilder(Document doc)
```

#### Parameters

`doc` Document

#### Returns

 [MotorStatorBuiler](VM.Managed.DAFUL.GearTrain.MotorStatorBuiler.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_GetRelatedHousingBuilderInfo_VM_Vector__System_Double__System_Boolean__System_Int32__System_Int32__System_Double__System_Double__System_Double__"></a> GetRelatedHousingBuilderInfo\(out Vector, out double, out bool, out int, out int, out double, out double, out double\)

Gets the related housing builder information.

```csharp
public void GetRelatedHousingBuilderInfo(out Vector StartPosition, out double Depth, out bool IsExistMounting, out int NumberOfSlot, out int NumberOfMounting, out double MPCR, out double Rmo, out double RotateAngle)
```

#### Parameters

`StartPosition` Vector

The start position

`Depth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The depth

`IsExistMounting` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The mounting exist flag

`NumberOfSlot` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of slot

`NumberOfMounting` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of mounting

`MPCR` [double](https://learn.microsoft.com/dotnet/api/system.double)

The MPCR

`Rmo` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Rmo

`RotateAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Rotate angle

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

