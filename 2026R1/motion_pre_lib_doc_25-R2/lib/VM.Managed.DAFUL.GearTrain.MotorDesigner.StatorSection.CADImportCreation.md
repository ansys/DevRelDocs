#  Class MotorDesigner.StatorSection.CADImportCreation

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

CAD Import Creation

```csharp
public class MotorDesigner.StatorSection.CADImportCreation : MotorDesigner.CreationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[MotorDesigner.CreationBase](VM.Managed.DAFUL.GearTrain.MotorDesigner.CreationBase.md) ← 
[MotorDesigner.StatorSection.CADImportCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.StatorSection.CADImportCreation.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation__ctor"></a> CADImportCreation\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.StatorSection.CADImportCreation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CADImportCreation()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_FilePath"></a> FilePath

Gets or sets the file path.

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_MountingOuterRound"></a> MountingOuterRound

Gets or sets the mounting outer round.

```csharp
public ExpressionValueVariable MountingOuterRound { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_MountingRadius"></a> MountingRadius

Gets or sets the mounting radius.

```csharp
public ExpressionValueVariable MountingRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_NumberOfMounting"></a> NumberOfMounting

Gets or sets the number of mounting.

```csharp
public ExpressionValueVariable NumberOfMounting { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_NumberOfSlot"></a> NumberOfSlot

Gets or sets the number of slot.

```csharp
public ExpressionValueVariable NumberOfSlot { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_TiltedAngle"></a> TiltedAngle

Gets or sets the tilted angle.

```csharp
public ExpressionValueVariable TiltedAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_TypeOfGeometryCreation"></a> TypeOfGeometryCreation

Gets the geometry creation type.

```csharp
public override MotorDesigner.GeometryCreationType TypeOfGeometryCreation { get; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[GeometryCreationType](VM.Managed.DAFUL.GearTrain.MotorDesigner.GeometryCreationType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_AnalysisCAD_VM_Managed_Document3D_System_String_"></a> AnalysisCAD\(Document3D, string\)

Analysis CAD

```csharp
public static (double, int, int, double, double) AnalysisCAD(Document3D document, string strFilePath)
```

#### Parameters

`document` Document3D

The document

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double), [int](https://learn.microsoft.com/dotnet/api/system.int32), [int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double), [double](https://learn.microsoft.com/dotnet/api/system.double)\)

geometry paramter
            item1 : Depth
            item2 : NumberOfSlot
            item3 : NumberOfMounting
            item4 : MountingRadius
            item5 : MountingOuterRound

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorSection_CADImportCreation_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

