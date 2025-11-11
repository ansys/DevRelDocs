# Class PartDocument.MassProperty
<a id="VM_Managed_DAFUL_PartDocument_MassProperty"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the mass property for part document.

```csharp
public class PartDocument.MassProperty : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[PartDocument.MassProperty](VM.Managed.DAFUL.PartDocument.MassProperty.md)

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

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty__ctor"></a> MassProperty\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.PartDocument.MassProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MassProperty()
```

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty__ctor_VM_Unit_ConvertFactor_"></a> MassProperty\(ConvertFactor\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.PartDocument.MassProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MassProperty(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

## Properties

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_Density"></a> Density

Gets or sets the density.

```csharp
public ExpressionValueVariable Density { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_Mass"></a> Mass

Gets or sets the mass.

```csharp
public ExpressionValueVariable Mass { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_MassCenter"></a> MassCenter

Gets or sets the transformation.

```csharp
public TransformBase MassCenter { get; set; }
```

#### Property Value

 TransformBase

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_MassCenterOrientationValue"></a> MassCenterOrientationValue

Gets the orientation of mass center

```csharp
public OMatrix MassCenterOrientationValue { get; }
```

#### Property Value

 OMatrix

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_MassCenterPositionValue"></a> MassCenterPositionValue

Gets the position of mass center

```csharp
public VectorBase MassCenterPositionValue { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_MassValue"></a> MassValue

Gets or the mass.

```csharp
public double MassValue { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_MomentOfInertia"></a> MomentOfInertia

Gets or sets the moment of inertia.

```csharp
public Variable[] MomentOfInertia { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_MomentOfInertiaValue"></a> MomentOfInertiaValue

Gets the moment of inertia.

```csharp
public double[] MomentOfInertiaValue { get; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_SolidPropertyType"></a> SolidPropertyType

Gets or sets the type of the solid property.

```csharp
public PartDocument.MassPropertyType SolidPropertyType { get; set; }
```

#### Property Value

 [PartDocument](VM.Managed.DAFUL.PartDocument.md).[MassPropertyType](VM.Managed.DAFUL.PartDocument.MassPropertyType.md)

## Methods

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_PartDocument_MassProperty_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

