# Class CLoadStandard
<a id="VM_Managed_DAFUL_FE_Force_CLoadStandard"></a>

Namespace: [VM.Managed.DAFUL.FE.Force](VM.Managed.DAFUL.FE.Force.md)  
Assembly: VMFE.dll  

This class is to represent the concentrated load charactoristic properties of standard type.

```csharp
public class CLoadStandard : FEForceFunctionCLoad, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[FEForceFunction](VM.Managed.DAFUL.FE.Force.FEForceFunction.md) ← 
[FEForceFunctionCLoad](VM.Managed.DAFUL.FE.Force.FEForceFunctionCLoad.md) ← 
[CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md)

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

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard__ctor_VM_Managed_DAFUL_FE_Force_PropertyCLoad_"></a> CLoadStandard\(PropertyCLoad\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Force.CLoadStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CLoadStandard(PropertyCLoad objParent)
```

#### Parameters

`objParent` [PropertyCLoad](VM.Managed.DAFUL.FE.Force.PropertyCLoad.md)

The owner propery.

## Properties

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_CLoadDirectionType"></a> CLoadDirectionType

Gets or sets the type of direction.

```csharp
public CLoadStandard.DirectionType CLoadDirectionType { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[DirectionType](VM.Managed.DAFUL.FE.Force.CLoadStandard.DirectionType.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_CLoadFunctionFX"></a> CLoadFunctionFX

Gets or sets the translational X coordinate among the concentrated load functions.

```csharp
public CLoadStandard.CLoadFunction CLoadFunctionFX { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_CLoadFunctionFY"></a> CLoadFunctionFY

Gets or sets the translational Y coordinate among the concentrated load functions.

```csharp
public CLoadStandard.CLoadFunction CLoadFunctionFY { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_CLoadFunctionFZ"></a> CLoadFunctionFZ

Gets or sets the translational Z coordinate among the concentrated load functions.

```csharp
public CLoadStandard.CLoadFunction CLoadFunctionFZ { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_CLoadFunctionTX"></a> CLoadFunctionTX

Gets or sets the rotational X coordinate among the concentrated load functions.

```csharp
public CLoadStandard.CLoadFunction CLoadFunctionTX { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_CLoadFunctionTY"></a> CLoadFunctionTY

Gets or sets the rotational Y coordinate among the concentrated load functions.

```csharp
public CLoadStandard.CLoadFunction CLoadFunctionTY { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_CLoadFunctionTZ"></a> CLoadFunctionTZ

Gets or sets the rotational Z coordinate among the concentrated load functions.

```csharp
public CLoadStandard.CLoadFunction CLoadFunctionTZ { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_FunctionFX"></a> FunctionFX

Obsolete.

```csharp
[Obsolete]
public CLoadStandard.CLoadFunction FunctionFX { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_FunctionFY"></a> FunctionFY

Obsolete.

```csharp
[Obsolete]
public CLoadStandard.CLoadFunction FunctionFY { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_FunctionFZ"></a> FunctionFZ

Obsolete.

```csharp
[Obsolete]
public CLoadStandard.CLoadFunction FunctionFZ { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_FunctionTX"></a> FunctionTX

Obsolete.

```csharp
[Obsolete]
public CLoadStandard.CLoadFunction FunctionTX { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_FunctionTY"></a> FunctionTY

Obsolete.

```csharp
[Obsolete]
public CLoadStandard.CLoadFunction FunctionTY { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_FunctionTZ"></a> FunctionTZ

Obsolete.

```csharp
[Obsolete]
public CLoadStandard.CLoadFunction FunctionTZ { get; set; }
```

#### Property Value

 [CLoadStandard](VM.Managed.DAFUL.FE.Force.CLoadStandard.md).[CLoadFunction](VM.Managed.DAFUL.FE.Force.CLoadStandard.CLoadFunction.md)

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_Type"></a> Type

Gets the type of function.

```csharp
public override FEForceFunction.FunctionType Type { get; }
```

#### Property Value

 [FEForceFunction](VM.Managed.DAFUL.FE.Force.FEForceFunction.md).[FunctionType](VM.Managed.DAFUL.FE.Force.FEForceFunction.FunctionType.md)

## Methods

### <a id="VM_Managed_DAFUL_FE_Force_CLoadStandard_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

