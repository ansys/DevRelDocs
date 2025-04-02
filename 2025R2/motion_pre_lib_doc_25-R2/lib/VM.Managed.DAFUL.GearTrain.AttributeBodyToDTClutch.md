#  Class AttributeBodyToDTClutch

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The attribute of body to dt for clutch

```csharp
public class AttributeBodyToDTClutch : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
[AttributeBodyToDTClutch](VM.Managed.DAFUL.GearTrain.AttributeBodyToDTClutch.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch__ctor"></a> AttributeBodyToDTClutch\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.AttributeBodyToDTClutch" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeBodyToDTClutch()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_ClutchName"></a> ClutchName

Gets or sets the clutch name.

```csharp
public string ClutchName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_DampingCoefficient"></a> DampingCoefficient

Gets or sets the damping coefficient.

```csharp
public ExpressionValueVariable DampingCoefficient { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_Direction"></a> Direction

Gets or sets the direction.

```csharp
public DirectionBase Direction { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_DisengageDuration"></a> DisengageDuration

Gets or sets the disengage duration.

```csharp
public ExpressionValueVariable DisengageDuration { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_DisengageSplineValue"></a> DisengageSplineValue

Gets or sets the disengage spline value.

```csharp
public SplineValue DisengageSplineValue { get; set; }
```

#### Property Value

 SplineValue

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_EngageDuration"></a> EngageDuration

Gets or sets the engage duration.

```csharp
public ExpressionValueVariable EngageDuration { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_EngageSplineValue"></a> EngageSplineValue

Gets or sets the engage spline value.

```csharp
public SplineValue EngageSplineValue { get; set; }
```

#### Property Value

 SplineValue

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_Position"></a> Position

Gets or sets the position.

```csharp
public PointBase Position { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_Stiffness"></a> Stiffness

Gets or sets the stiffness.

```csharp
public ExpressionValueVariable Stiffness { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_GetStiffnessDefaultValue_VM_Unit_ConvertFactor_"></a> GetStiffnessDefaultValue\(ConvertFactor\)

Gets the stiffness default value

```csharp
public static double GetStiffnessDefaultValue(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTClutch_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

