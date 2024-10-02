#  Class BeamElement

Namespace: [VM.Managed.DAFUL.Beam](VM.Managed.DAFUL.Beam.md)  
Assembly: VMDBeamGroup.dll  

Beam Element Class

```csharp
public class BeamElement : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

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

### <a id="VM_Managed_DAFUL_Beam_BeamElement__ctor"></a> BeamElement\(\)

Constructor of BeamElement Class

```csharp
public BeamElement()
```

## Properties

### <a id="VM_Managed_DAFUL_Beam_BeamElement_ActionBody"></a> ActionBody

Action sphere body tp save

```csharp
public SolidBody ActionBody { get; set; }
```

#### Property Value

 SolidBody

### <a id="VM_Managed_DAFUL_Beam_BeamElement_ActionBodyMass"></a> ActionBodyMass

Mass of action sphere body

```csharp
public ExpressionValueVariable ActionBodyMass { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_ActionBodyMomentOfInertia"></a> ActionBodyMomentOfInertia

Moment of inertia of action sphere body

```csharp
public Variable[] ActionBodyMomentOfInertia { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamElement_ActionBodyOrientationArray"></a> ActionBodyOrientationArray

Orientation array of base sphere body

```csharp
public double[] ActionBodyOrientationArray { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamElement_ActionBodyPosition"></a> ActionBodyPosition

Point of action sphere body

```csharp
public VectorBase ActionBodyPosition { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_Beam_BeamElement_ActionBodyRadius"></a> ActionBodyRadius

Sphere radius of base sphere body

```csharp
public double ActionBodyRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamElement_ActionBodyTransformationMatrix"></a> ActionBodyTransformationMatrix

Transformation Matrix of action sphere body

```csharp
public double[] ActionBodyTransformationMatrix { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamElement_AngleArrayBetweenTwoBodies"></a> AngleArrayBetweenTwoBodies

Angle between two bodies (X, Y, Z | Roll, Pitch, Yaw)

```csharp
public double[] AngleArrayBetweenTwoBodies { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamElement_Area"></a> Area

Area of beam element

```csharp
public ExpressionValueVariable Area { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_Asy"></a> Asy

Shear moment of ratio of Asy

```csharp
public ExpressionValueVariable Asy { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_Asz"></a> Asz

Shear moment of ratio of Asz

```csharp
public ExpressionValueVariable Asz { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_BaseBody"></a> BaseBody

Base sphere body to use

```csharp
public SolidBody BaseBody { get; set; }
```

#### Property Value

 SolidBody

### <a id="VM_Managed_DAFUL_Beam_BeamElement_BaseBodyMass"></a> BaseBodyMass

Mass of base sphere body

```csharp
public ExpressionValueVariable BaseBodyMass { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_BaseBodyMomentOfInertia"></a> BaseBodyMomentOfInertia

Moment of inertia of base sphere body

```csharp
public Variable[] BaseBodyMomentOfInertia { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamElement_BaseBodyOrientationArray"></a> BaseBodyOrientationArray

Orientation array of base sphere body

```csharp
public double[] BaseBodyOrientationArray { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamElement_BaseBodyPosition"></a> BaseBodyPosition

Point of base sphere body

```csharp
public VectorBase BaseBodyPosition { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_Beam_BeamElement_BaseBodyRadius"></a> BaseBodyRadius

Sphere radius of base sphere body

```csharp
public double BaseBodyRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamElement_BaseBodyTransformationMatrix"></a> BaseBodyTransformationMatrix

Transformation Matrix of base sphere body

```csharp
public double[] BaseBodyTransformationMatrix { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamElement_IsFirstBeamElement"></a> IsFirstBeamElement

Whether this beam element is a first element

```csharp
public bool IsFirstBeamElement { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamElement_IsLastBeamElement"></a> IsLastBeamElement

Whether this beam element is a last element

```csharp
public bool IsLastBeamElement { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamElement_Ixx"></a> Ixx

Area moment of inertia of Ixx

```csharp
public ExpressionValueVariable Ixx { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_Iyy"></a> Iyy

Area moment of inertia of Iyy

```csharp
public ExpressionValueVariable Iyy { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_Iyz"></a> Iyz

Area moment of inertia of Iyz

```csharp
public ExpressionValueVariable Iyz { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_Izz"></a> Izz

Area moment of inertia of Izz

```csharp
public ExpressionValueVariable Izz { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Beam_BeamElement_LengthBetweenTwoBodies"></a> LengthBetweenTwoBodies

Length between two bodies

```csharp
public double LengthBetweenTwoBodies { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamElement__ActionBody"></a> \_ActionBody

Action sphere body to save

```csharp
public Linker<SolidBody> _ActionBody { get; set; }
```

#### Property Value

 Linker<SolidBody\>

### <a id="VM_Managed_DAFUL_Beam_BeamElement__BaseBody"></a> \_BaseBody

Base sphere body to save

```csharp
public Linker<SolidBody> _BaseBody { get; set; }
```

#### Property Value

 Linker<SolidBody\>

## Methods

### <a id="VM_Managed_DAFUL_Beam_BeamElement_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Beam_BeamElement_UpdateAreaProperties"></a> UpdateAreaProperties\(\)

Update area properties of beam elements

```csharp
public void UpdateAreaProperties()
```

