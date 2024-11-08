#  Class AttributeRotationalBushingForce

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFB.dll  

This class is to represent the attribute for rotational bushing force.

```csharp
public class AttributeRotationalBushingForce : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
[AttributeRotationalBushingForce](VM.Managed.DAFUL.Force.AttributeRotationalBushingForce.md)

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

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce__ctor"></a> AttributeRotationalBushingForce\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.AttributeRotationalBushingForce" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeRotationalBushingForce()
```

## Properties

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_LowerAngle"></a> LowerAngle

Gets or sets the lower angle.

```csharp
public ExpressionValueVariable LowerAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_LowerArm"></a> LowerArm

Gets or sets the lower arm.

```csharp
public ExpressionValueVariable LowerArm { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_TKX"></a> TKX

Gets or sets the translational kx.

```csharp
public double TKX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_TKY"></a> TKY

Gets or sets the translational ky.

```csharp
public double TKY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_TKZ"></a> TKZ

Gets or sets the translational kz.

```csharp
public double TKZ { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_TypeOfUser"></a> TypeOfUser

Gets or sets the user type.

```csharp
public AttributeRotationalBushingForce.UserType TypeOfUser { get; set; }
```

#### Property Value

 [AttributeRotationalBushingForce](VM.Managed.DAFUL.Force.AttributeRotationalBushingForce.md).[UserType](VM.Managed.DAFUL.Force.AttributeRotationalBushingForce.UserType.md)

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_UpperAngle"></a> UpperAngle

Gets or sets the upper angle.

```csharp
public ExpressionValueVariable UpperAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_UpperArm"></a> UpperArm

Gets or sets the upper arm.

```csharp
public ExpressionValueVariable UpperArm { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_GetKX_System_Double_"></a> GetKX\(double\)

Gets the KX

```csharp
public List<SplineValue.TwoPoint> GetKX(double dKX)
```

#### Parameters

`dKX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The rotational kx.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SplineValue.TwoPoint\>

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_GetKY_System_Double_"></a> GetKY\(double\)

Gets the KY

```csharp
public List<SplineValue.TwoPoint> GetKY(double dKY)
```

#### Parameters

`dKY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The rotational ky.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SplineValue.TwoPoint\>

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_GetKZ"></a> GetKZ\(\)

Gets the KZ

```csharp
public List<SplineValue.TwoPoint> GetKZ()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SplineValue.TwoPoint\>

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_GetKZ_System_Double_"></a> GetKZ\(double\)

Gets the KZ
<param name="dStiffness">The stifness.</param>

```csharp
public List<SplineValue.TwoPoint> GetKZ(double dStiffness)
```

#### Parameters

`dStiffness` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SplineValue.TwoPoint\>

### <a id="VM_Managed_DAFUL_Force_AttributeRotationalBushingForce_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

