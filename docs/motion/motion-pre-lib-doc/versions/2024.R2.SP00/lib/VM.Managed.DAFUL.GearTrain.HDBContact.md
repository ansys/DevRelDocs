# Class HDBContact

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Hydro Dynamic Bearing Contact Parameter

```csharp
public class HDBContact : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem

#### Inherited Members

SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### HDBContact\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HDBContact" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HDBContact()
```

## Properties

### BoundaryPenetration

Gets or sets the boundary penetration.
Use SetBoundaryPenetration() when this instance sets for undo/redo

```csharp
public double BoundaryPenetration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DampCoef

Gets or sets the damping coefficient.
Use SetDampCoef() when this instance sets for undo/redo

```csharp
public double DampCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DampingSpline

Gets or sets the damping spline path.
Use SetDampingSpline() when this instance sets for undo/redo

```csharp
public string DampingSpline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DampingType

Gets or sets the type of the damping.
Use SetDampingType() when this instance sets for undo/redo

```csharp
public HDBContact.InputType DampingType { get; set; }
```

#### Property Value

 [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

### DynFriCoef

Gets or sets the dynamic friction coefficient
Use SetDynFriCoef() when this instance sets for undo/redo

```csharp
public double DynFriCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DynThreshold

Gets or sets the dynamic threshold.
Use SetDynThreshold() when this instance sets for undo/redo

```csharp
public double DynThreshold { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FrictionSpline

Gets or sets the friction spline path.
Use SetFrictionSpline() when this instance sets for undo/redo

```csharp
public string FrictionSpline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FrictionType

Gets or sets the type of the friction.
Use SetFrictionType() when this instance sets for undo/redo

```csharp
public HDBContact.InputType FrictionType { get; set; }
```

#### Property Value

 [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

### NumOfAxial

Gets or sets the number of axial.
Use NumOfAxial() when this instance sets for undo/redo

```csharp
public double NumOfAxial { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### NumOfCircular

Gets or sets the number of circular.
Use SetNumOfCircular() when this instance sets for undo/redo

```csharp
public double NumOfCircular { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StaFriCoef

Gets or sets the static friction coefficient.
Use SetStaFriCoef() when this instance sets for undo/redo

```csharp
public double StaFriCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SticVel

Gets or sets the stiction velocity.
Use SetSticVel() when this instance sets for undo/redo

```csharp
public double SticVel { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StiffCoef

Gets or sets the stiffness coefficient.
Use SetStiffCoef() when this instance sets for undo/redo

```csharp
public double StiffCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StiffOrder

Gets or sets the stiffness order.
Use SetStiffOrder() when this instance sets for undo/redo

```csharp
public double StiffOrder { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StiffnessSpline

Gets or sets the stiffness spline path.
Use SetStiffnessSpline() when this instance sets for undo/redo

```csharp
public string StiffnessSpline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StiffnessType

Gets or sets the type of the stiffness.
Use SetStiffnessType() when this instance sets for undo/redo

```csharp
public HDBContact.InputType StiffnessType { get; set; }
```

#### Property Value

 [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

## Methods

### SetBoundaryPenetration\(double\)

Set boundary penetration.

```csharp
public void SetBoundaryPenetration(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The boundary penetration.

### SetDampCoef\(double\)

Set damping coefficient.

```csharp
public void SetDampCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The damping coefficient.

### SetDampingSpline\(string\)

Set damping spline path.

```csharp
public void SetDampingSpline(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The damping spline path.

### SetDampingType\(InputType\)

Set type of the damping.

```csharp
public void SetDampingType(HDBContact.InputType type)
```

#### Parameters

`type` [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

The type of the damping.

### SetDynFriCoef\(double\)

Set dynamic friction coefficient.

```csharp
public void SetDynFriCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The dynamic friction coefficient.

### SetDynThreshold\(double\)

Set dynamic threshold.

```csharp
public void SetDynThreshold(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The dynamic threshold.

### SetFrictionSpline\(string\)

Set friction spline path.

```csharp
public void SetFrictionSpline(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The friction spline path.

### SetFrictionType\(InputType\)

Set type of the friction.

```csharp
public void SetFrictionType(HDBContact.InputType type)
```

#### Parameters

`type` [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

The type of the friction.

### SetNumOfAxial\(double\)

Set number of axial.

```csharp
public void SetNumOfAxial(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The number of axial.

### SetNumOfCircular\(double\)

Set number of circular.

```csharp
public void SetNumOfCircular(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The number of circular.

### SetStaFriCoef\(double\)

Set static friction coefficient.

```csharp
public void SetStaFriCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The static friction coefficient.

### SetSticVel\(double\)

Set stiction velocity.

```csharp
public void SetSticVel(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiction velocity.

### SetStiffCoef\(double\)

Set stiffness coefficient.

```csharp
public void SetStiffCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness coefficient.

### SetStiffOrder\(double\)

Set stiffness order.

```csharp
public void SetStiffOrder(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness order.

### SetStiffnessSpline\(string\)

Set stiffness spline path.

```csharp
public void SetStiffnessSpline(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stiffness spline path.

### SetStiffnessType\(InputType\)

Set type of the stiffness.

```csharp
public void SetStiffnessType(HDBContact.InputType type)
```

#### Parameters

`type` [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

The type of the stiffness.


