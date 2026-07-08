# Class BodyPropertyBase.InitialVelocity
<a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the initial velocity

```csharp
public class BodyPropertyBase.InitialVelocity : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[BodyPropertyBase.InitialVelocity](VM.Managed.DAFUL.BodyPropertyBase.InitialVelocity.md)

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

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity__ctor"></a> InitialVelocity\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.BodyPropertyBase.InitialVelocity" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InitialVelocity()
```

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity__ctor_VM_Managed_DAFUL_BodyPropertyBase_"></a> InitialVelocity\(BodyPropertyBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.BodyPropertyBase.InitialVelocity" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InitialVelocity(BodyPropertyBase owner)
```

#### Parameters

`owner` [BodyPropertyBase](VM.Managed.DAFUL.BodyPropertyBase.md)

The owner body property base.

## Properties

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_IsUseRotRM"></a> IsUseRotRM

Gets or sets a value indicating whether this instance use rotational reference marker.

```csharp
public bool IsUseRotRM { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_IsUseRotVelocity"></a> IsUseRotVelocity

Gets or sets a value indicating whether this instance use rotational velocity.

```csharp
public bool IsUseRotVelocity { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_IsUseTraRM"></a> IsUseTraRM

Gets or sets a value indicating whether this instance use translational reference marker.

```csharp
public bool IsUseTraRM { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_IsUseTraVelocity"></a> IsUseTraVelocity

Gets or sets a value indicating whether this instance use translational velocity.

```csharp
public bool IsUseTraVelocity { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_RotReferenceMarker"></a> RotReferenceMarker

Obsolete

```csharp
[Obsolete]
public Marker RotReferenceMarker { get; set; }
```

#### Property Value

 [Marker](VM.Managed.DAFUL.Marker.md)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_RotX"></a> RotX

Gets or sets the rotational x direction.

```csharp
public ExpressionValueVariable RotX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_RotY"></a> RotY

Gets or sets the rotational y direction.

```csharp
public ExpressionValueVariable RotY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_RotZ"></a> RotZ

Gets or sets the rotational z direction.

```csharp
public ExpressionValueVariable RotZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_RotationnalReferenceMarker"></a> RotationnalReferenceMarker

Gets or sets the rotational reference marker.

```csharp
public IMarker RotationnalReferenceMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_TraReferenceMarker"></a> TraReferenceMarker

Obsolete

```csharp
[Obsolete]
public Marker TraReferenceMarker { get; set; }
```

#### Property Value

 [Marker](VM.Managed.DAFUL.Marker.md)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_TraX"></a> TraX

Gets or sets the translational x direction.

```csharp
public ExpressionValueVariable TraX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_TraY"></a> TraY

Gets or sets the translational y direction.

```csharp
public ExpressionValueVariable TraY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_TraZ"></a> TraZ

Gets or sets the translational z direction.

```csharp
public ExpressionValueVariable TraZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_TranslationalReferenceMarker"></a> TranslationalReferenceMarker

Gets or sets the translational reference marker.

```csharp
public IMarker TranslationalReferenceMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity__RotationnalReferenceMarker"></a> \_RotationnalReferenceMarker

Gets or sets the rotational reference marker.

```csharp
public Linker<IMarker> _RotationnalReferenceMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity__TranslationalReferenceMarker"></a> \_TranslationalReferenceMarker

Gets or sets the translational reference marker.

```csharp
public Linker<IMarker> _TranslationalReferenceMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

## Methods

### <a id="VM_Managed_DAFUL_BodyPropertyBase_InitialVelocity_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

