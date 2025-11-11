# Class FEForceFunctionCLoad
<a id="VM_Managed_DAFUL_FE_Force_FEForceFunctionCLoad"></a>

Namespace: [VM.Managed.DAFUL.FE.Force](VM.Managed.DAFUL.FE.Force.md)  
Assembly: VMFE.dll  

This base class is to represent the concentrated load charactoristic properties.

```csharp
public abstract class FEForceFunctionCLoad : FEForceFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[FEForceFunction](VM.Managed.DAFUL.FE.Force.FEForceFunction.md) ← 
[FEForceFunctionCLoad](VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad.md)

#### Derived

[CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md), 
[CLoadUserSubroutine](VM.Managed.DAFUL.FE.Force.CLoadUserSubroutine.md)

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

[FEForceFunction.Type](VM.Managed.DAFUL.FE.Force.FEForceFunction.md\#VM\_Managed\_DAFUL\_FE\_Force\_FEForceFunction\_Type), 
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

### <a id="VM_Managed_DAFUL_FE_Force_FEForceFunctionCLoad__ctor_VM_Managed_DAFUL_FE_Force_PropertyFEForce_"></a> FEForceFunctionCLoad\(PropertyFEForce\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected FEForceFunctionCLoad(PropertyFEForce owner)
```

#### Parameters

`owner` [PropertyFEForce](VM.Managed.DAFUL.FE.Force.PropertyFEForce.md)

The owner property.

### <a id="VM_Managed_DAFUL_FE_Force_FEForceFunctionCLoad__ctor"></a> FEForceFunctionCLoad\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected FEForceFunctionCLoad()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_Force_FEForceFunctionCLoad_CLoadReferenceMarker"></a> CLoadReferenceMarker

Gets or sets the reference marker.

```csharp
public IMarker CLoadReferenceMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_FE_Force_FEForceFunctionCLoad_ReferenceMarker"></a> ReferenceMarker

Obsolete.

```csharp
[Obsolete]
public Marker ReferenceMarker { get; set; }
```

#### Property Value

 [Marker](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Marker.cs)

### <a id="VM_Managed_DAFUL_FE_Force_FEForceFunctionCLoad__CLoadReferenceMarker"></a> \_CLoadReferenceMarker

Gets or sets the reference marker.

```csharp
public LinkerFE<IMarker> _CLoadReferenceMarker { get; set; }
```

#### Property Value

 [LinkerFE](VM.Managed.DAFUL.FE.LinkerFE\-1.md)<IMarker\>

## Methods

### <a id="VM_Managed_DAFUL_FE_Force_FEForceFunctionCLoad_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

