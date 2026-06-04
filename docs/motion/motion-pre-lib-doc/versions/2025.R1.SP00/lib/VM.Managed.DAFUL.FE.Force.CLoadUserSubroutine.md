#  Class CLoadUserSubroutine

Namespace: [VM.Managed.DAFUL.FE.Force](VM.Managed.DAFUL.FE.Force.md)  
Assembly: VMFE.dll  

This class is to represent the concentrated load charactoristic properties of user-subroutine type.

```csharp
public class CLoadUserSubroutine : FEForceFunctionCLoad, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[FEForceFunction](VM.Managed.DAFUL.FE.Force.FEForceFunction.md) ← 
[FEForceFunctionCLoad](VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad.md) ← 
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
IVerifiable, 
IReservable

#### Inherited Members

[FEForceFunctionCLoad.OnDeserialization\(object\)](VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad.md\#VM\_Managed\_DAFUL\_FE\_Force\_FEForceFunctionCLoad\_OnDeserialization\_System\_Object\_), 
[FEForceFunctionCLoad.\_CLoadReferenceMarker](VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad.md\#VM\_Managed\_DAFUL\_FE\_Force\_FEForceFunctionCLoad\_\_CLoadReferenceMarker), 
[FEForceFunctionCLoad.CLoadReferenceMarker](VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad.md\#VM\_Managed\_DAFUL\_FE\_Force\_FEForceFunctionCLoad\_CLoadReferenceMarker), 
[FEForceFunctionCLoad.ReferenceMarker](VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad.md\#VM\_Managed\_DAFUL\_FE\_Force\_FEForceFunctionCLoad\_ReferenceMarker), 
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

### <a id="VM_Managed_DAFUL_FE_Force_CLoadUserSubroutine__ctor_VM_Managed_DAFUL_FE_Force_PropertyCLoad_"></a> CLoadUserSubroutine\(PropertyCLoad\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Force.CLoadUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CLoadUserSubroutine(PropertyCLoad objParent)
```

#### Parameters

`objParent` [PropertyCLoad](VM.Managed.DAFUL.FE.Force.PropertyCLoad.md)

The owner property.

## Properties

### <a id="VM_Managed_DAFUL_FE_Force_CLoadUserSubroutine_Type"></a> Type

Gets the type of function.

```csharp
public override FEForceFunction.FunctionType Type { get; }
```

#### Property Value

 [FEForceFunction](VM.Managed.DAFUL.FE.Force.FEForceFunction.md).[FunctionType](VM.Managed.DAFUL.FE.Force.FEForceFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user-subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 UserSubroutine

