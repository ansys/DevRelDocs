# <a id="VM_Managed_DAFUL_FE_RBEInfo"></a> Class RBEInfo

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent rbe information.

```csharp
public class RBEInfo : EigenvalueInfo, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[EigenvalueInfo](VM.Managed.DAFUL.FE.EigenvalueInfo.md) ← 
[RBEInfo](VM.Managed.DAFUL.FE.RBEInfo.md)

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

[EigenvalueInfo.ImposeRotationalUnitDisplacement](VM.Managed.DAFUL.FE.EigenvalueInfo.md\#VM\_Managed\_DAFUL\_FE\_EigenvalueInfo\_ImposeRotationalUnitDisplacement), 
[EigenvalueInfo.UseStaticCorrectionMode](VM.Managed.DAFUL.FE.EigenvalueInfo.md\#VM\_Managed\_DAFUL\_FE\_EigenvalueInfo\_UseStaticCorrectionMode), 
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

### <a id="VM_Managed_DAFUL_FE_RBEInfo__ctor_System_Boolean_System_Boolean_VM_Managed_VectorBase_"></a> RBEInfo\(bool, bool, VectorBase\)

```csharp
public RBEInfo(bool bTreatRBE, bool bUseStaticCorrectionMode, VectorBase vecMasterPoint)
```

#### Parameters

`bTreatRBE` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bUseStaticCorrectionMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`vecMasterPoint` VectorBase

### <a id="VM_Managed_DAFUL_FE_RBEInfo__ctor_System_Boolean_"></a> RBEInfo\(bool\)

```csharp
public RBEInfo(bool bUseStaticCorrectionMode)
```

#### Parameters

`bUseStaticCorrectionMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_RBEInfo__ctor"></a> RBEInfo\(\)

```csharp
public RBEInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_RBEInfo_MasterNodePosition"></a> MasterNodePosition

Gets or sets the position of master node.

```csharp
public PointBase MasterNodePosition { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_FE_RBEInfo_TreatRBE"></a> TreatRBE

Gets or sets a value indicating whether it treat like RBE or not.

```csharp
public bool TreatRBE { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_RBEInfo_TypeOfRBE"></a> TypeOfRBE

Gets or sets the rbe3 flag.

```csharp
public RBEInfo.RBEType TypeOfRBE { get; set; }
```

#### Property Value

 [RBEInfo](VM.Managed.DAFUL.FE.RBEInfo.md).[RBEType](VM.Managed.DAFUL.FE.RBEInfo.RBEType.md)

