# Class CycloidPinInfoForAssembly
<a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Cycloid Pin Info For Assembly

```csharp
public class CycloidPinInfoForAssembly : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly__ctor"></a> CycloidPinInfoForAssembly\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CycloidPinInfoForAssembly()
```

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly__ctor_VM_Models_Pre_IOwned_"></a> CycloidPinInfoForAssembly\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CycloidPinInfoForAssembly(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_CenterOfPinset"></a> CenterOfPinset

Gets or sets the center of pinset.

```csharp
public PointBase CenterOfPinset { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_GearInfo"></a> GearInfo

Gets or sets the gear information.

```csharp
public GearGeometryInfo GearInfo { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_Housing"></a> Housing

Gets or sets the housing.

```csharp
public IHasBuilder Housing { get; set; }
```

#### Property Value

 IHasBuilder

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_PinBodies"></a> PinBodies

Gets or sets the pin bodies.

```csharp
public Body[] PinBodies { get; set; }
```

#### Property Value

 Body\[\]

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_ReferenceGearInfo"></a> ReferenceGearInfo

Gets or sets the reference gear information.

```csharp
public GearGeometryInfo ReferenceGearInfo { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_UseReferenceBody"></a> UseReferenceBody

Gets or sets the revolute property.

```csharp
public bool UseReferenceBody { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly__Housing"></a> \_Housing

Gets or sets the housing.

```csharp
public Linker<IHasBuilder> _Housing { get; set; }
```

#### Property Value

 Linker<IHasBuilder\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_ClearPinBodies"></a> ClearPinBodies\(\)

Clear pin bodies.

```csharp
public void ClearPinBodies()
```

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_GetEccentricDirection"></a> GetEccentricDirection\(\)

Gets the eccentric direction.

```csharp
public VectorBase GetEccentricDirection()
```

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_GetEccentricValue"></a> GetEccentricValue\(\)

Gets the eccentric value.

```csharp
public double GetEccentricValue()
```

#### Returns

 double

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_GetShearingValue_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> GetShearingValue\(VectorBase, VectorBase\)

Gets shearing matrix

```csharp
public static VectorBase GetShearingValue(VectorBase vecZ, VectorBase vec)
```

#### Parameters

`vecZ` VectorBase

The z vector

`vec` VectorBase

The applied vector

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_Initialize"></a> Initialize\(\)

Initialize

```csharp
public void Initialize()
```

