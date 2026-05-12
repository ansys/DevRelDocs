#  Class AttributeMotorAssembly

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The attribute of motor assembly

```csharp
public class AttributeMotorAssembly : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
[AttributeMotorAssembly](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.md)

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

AttributeBase.OnDeserializationAttribute\(\), 
AttributeBase.LinkRequestUpdate\(object, LinkEventArgs\), 
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

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly__ctor"></a> AttributeMotorAssembly\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMotorAssembly()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_Bushing"></a> Bushing

Gets or sets the bushing.

```csharp
public General Bushing { get; set; }
```

#### Property Value

 General

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_EndRPM"></a> EndRPM

Gets or sets the end rpm.

```csharp
public ExpressionValueVariable EndRPM { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_FrontBearingSet"></a> FrontBearingSet

Gets or sets the front bearing set.

```csharp
public AttributeMotorAssembly.MountInfo[] FrontBearingSet { get; set; }
```

#### Property Value

 [AttributeMotorAssembly](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.md).[MountInfo](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.MountInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_HousingMountSet"></a> HousingMountSet

Gets or sets the housing mount set.

```csharp
public AttributeMotorAssembly.MountInfo[] HousingMountSet { get; set; }
```

#### Property Value

 [AttributeMotorAssembly](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.md).[MountInfo](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.MountInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_RearBearingSet"></a> RearBearingSet

Gets or sets the rear bearing set.

```csharp
public AttributeMotorAssembly.MountInfo[] RearBearingSet { get; set; }
```

#### Property Value

 [AttributeMotorAssembly](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.md).[MountInfo](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.MountInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_RotorSet"></a> RotorSet

Gets or sets the rotor set.

```csharp
public AttributeMotorAssembly.MountInfo[] RotorSet { get; set; }
```

#### Property Value

 [AttributeMotorAssembly](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.md).[MountInfo](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.MountInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_StartRPM"></a> StartRPM

Gets or sets the start rpm.

```csharp
public ExpressionValueVariable StartRPM { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_StatorMountSet"></a> StatorMountSet

Gets or sets the stator mount set.

```csharp
public AttributeMotorAssembly.MountInfo[] StatorMountSet { get; set; }
```

#### Property Value

 [AttributeMotorAssembly](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.md).[MountInfo](VM.Managed.DAFUL.GearTrain.AttributeMotorAssembly.MountInfo.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_GetFrontBearingOffset_VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_"></a> GetFrontBearingOffset\(HousingSection\)

Gets the front bearing offset

```csharp
public static double GetFrontBearingOffset(MotorDesigner.HousingSection housing)
```

#### Parameters

`housing` [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[HousingSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection.md)

The housing section

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_GetRearBearingOffset_VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_"></a> GetRearBearingOffset\(HousingSection\)

Gets the rear bearing offset

```csharp
public static double GetRearBearingOffset(MotorDesigner.HousingSection housing)
```

#### Parameters

`housing` [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[HousingSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection.md)

The housing section

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeMotorAssembly_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

