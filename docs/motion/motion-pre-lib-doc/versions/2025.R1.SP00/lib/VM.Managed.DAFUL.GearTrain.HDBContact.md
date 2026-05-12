#  Class HDBContact

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

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact__ctor"></a> HDBContact\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HDBContact" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HDBContact()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_BoundaryPenetration"></a> BoundaryPenetration

Gets or sets the boundary penetration.
Use SetBoundaryPenetration() when this instance sets for undo/redo

```csharp
public double BoundaryPenetration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_DampCoef"></a> DampCoef

Gets or sets the damping coefficient.
Use SetDampCoef() when this instance sets for undo/redo

```csharp
public double DampCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_DampingSpline"></a> DampingSpline

Gets or sets the damping spline path.
Use SetDampingSpline() when this instance sets for undo/redo

```csharp
public string DampingSpline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_DampingType"></a> DampingType

Gets or sets the type of the damping.
Use SetDampingType() when this instance sets for undo/redo

```csharp
public HDBContact.InputType DampingType { get; set; }
```

#### Property Value

 [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_DynFriCoef"></a> DynFriCoef

Gets or sets the dynamic friction coefficient
Use SetDynFriCoef() when this instance sets for undo/redo

```csharp
public double DynFriCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_DynThreshold"></a> DynThreshold

Gets or sets the dynamic threshold.
Use SetDynThreshold() when this instance sets for undo/redo

```csharp
public double DynThreshold { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_FrictionSpline"></a> FrictionSpline

Gets or sets the friction spline path.
Use SetFrictionSpline() when this instance sets for undo/redo

```csharp
public string FrictionSpline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_FrictionType"></a> FrictionType

Gets or sets the type of the friction.
Use SetFrictionType() when this instance sets for undo/redo

```csharp
public HDBContact.InputType FrictionType { get; set; }
```

#### Property Value

 [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_NumOfAxial"></a> NumOfAxial

Gets or sets the number of axial.
Use NumOfAxial() when this instance sets for undo/redo

```csharp
public double NumOfAxial { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_NumOfCircular"></a> NumOfCircular

Gets or sets the number of circular.
Use SetNumOfCircular() when this instance sets for undo/redo

```csharp
public double NumOfCircular { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_StaFriCoef"></a> StaFriCoef

Gets or sets the static friction coefficient.
Use SetStaFriCoef() when this instance sets for undo/redo

```csharp
public double StaFriCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SticVel"></a> SticVel

Gets or sets the stiction velocity.
Use SetSticVel() when this instance sets for undo/redo

```csharp
public double SticVel { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_StiffCoef"></a> StiffCoef

Gets or sets the stiffness coefficient.
Use SetStiffCoef() when this instance sets for undo/redo

```csharp
public double StiffCoef { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_StiffOrder"></a> StiffOrder

Gets or sets the stiffness order.
Use SetStiffOrder() when this instance sets for undo/redo

```csharp
public double StiffOrder { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_StiffnessSpline"></a> StiffnessSpline

Gets or sets the stiffness spline path.
Use SetStiffnessSpline() when this instance sets for undo/redo

```csharp
public string StiffnessSpline { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_StiffnessType"></a> StiffnessType

Gets or sets the type of the stiffness.
Use SetStiffnessType() when this instance sets for undo/redo

```csharp
public HDBContact.InputType StiffnessType { get; set; }
```

#### Property Value

 [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetBoundaryPenetration_System_Double_"></a> SetBoundaryPenetration\(double\)

Set boundary penetration.

```csharp
public void SetBoundaryPenetration(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The boundary penetration.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetDampCoef_System_Double_"></a> SetDampCoef\(double\)

Set damping coefficient.

```csharp
public void SetDampCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The damping coefficient.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetDampingSpline_System_String_"></a> SetDampingSpline\(string\)

Set damping spline path.

```csharp
public void SetDampingSpline(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The damping spline path.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetDampingType_VM_Managed_DAFUL_GearTrain_HDBContact_InputType_"></a> SetDampingType\(InputType\)

Set type of the damping.

```csharp
public void SetDampingType(HDBContact.InputType type)
```

#### Parameters

`type` [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

The type of the damping.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetDynFriCoef_System_Double_"></a> SetDynFriCoef\(double\)

Set dynamic friction coefficient.

```csharp
public void SetDynFriCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The dynamic friction coefficient.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetDynThreshold_System_Double_"></a> SetDynThreshold\(double\)

Set dynamic threshold.

```csharp
public void SetDynThreshold(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The dynamic threshold.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetFrictionSpline_System_String_"></a> SetFrictionSpline\(string\)

Set friction spline path.

```csharp
public void SetFrictionSpline(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The friction spline path.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetFrictionType_VM_Managed_DAFUL_GearTrain_HDBContact_InputType_"></a> SetFrictionType\(InputType\)

Set type of the friction.

```csharp
public void SetFrictionType(HDBContact.InputType type)
```

#### Parameters

`type` [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

The type of the friction.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetNumOfAxial_System_Double_"></a> SetNumOfAxial\(double\)

Set number of axial.

```csharp
public void SetNumOfAxial(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The number of axial.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetNumOfCircular_System_Double_"></a> SetNumOfCircular\(double\)

Set number of circular.

```csharp
public void SetNumOfCircular(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The number of circular.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetStaFriCoef_System_Double_"></a> SetStaFriCoef\(double\)

Set static friction coefficient.

```csharp
public void SetStaFriCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The static friction coefficient.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetSticVel_System_Double_"></a> SetSticVel\(double\)

Set stiction velocity.

```csharp
public void SetSticVel(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiction velocity.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetStiffCoef_System_Double_"></a> SetStiffCoef\(double\)

Set stiffness coefficient.

```csharp
public void SetStiffCoef(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness coefficient.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetStiffOrder_System_Double_"></a> SetStiffOrder\(double\)

Set stiffness order.

```csharp
public void SetStiffOrder(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness order.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetStiffnessSpline_System_String_"></a> SetStiffnessSpline\(string\)

Set stiffness spline path.

```csharp
public void SetStiffnessSpline(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stiffness spline path.

### <a id="VM_Managed_DAFUL_GearTrain_HDBContact_SetStiffnessType_VM_Managed_DAFUL_GearTrain_HDBContact_InputType_"></a> SetStiffnessType\(InputType\)

Set type of the stiffness.

```csharp
public void SetStiffnessType(HDBContact.InputType type)
```

#### Parameters

`type` [HDBContact](VM.Managed.DAFUL.GearTrain.HDBContact.md).[InputType](VM.Managed.DAFUL.GearTrain.HDBContact.InputType.md)

The type of the stiffness.

