#  Class BearingStrength

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Bearing Strength

```csharp
public class BearingStrength : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength__ctor"></a> BearingStrength\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.BearingStrength" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStrength()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_AxialForce"></a> AxialForce

Gets or sets the axial force.

```csharp
public ExpressionValueVariable AxialForce { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_C0r"></a> C0r

Gets or sets the basic static load rating.

```csharp
public ExpressionValueVariable C0r { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_C0r_Lib"></a> C0r\_Lib

Gets or sets the basic static load rating.

```csharp
public ExpressionValueVariable C0r_Lib { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Cleanliness"></a> Cleanliness

Gets or sets the a1 type.

```csharp
public BearingStrength.enCleanlinessISOType Cleanliness { get; set; }
```

#### Property Value

 [BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md).[enCleanlinessISOType](VM.Managed.DAFUL.GearTrain.BearingStrength.enCleanlinessISOType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_CleanlinessGrease"></a> CleanlinessGrease

Gets or sets the CleanlinessGrease type.

```csharp
public BearingStrength.enCleanlinessGreaseType CleanlinessGrease { get; set; }
```

#### Property Value

 [BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md).[enCleanlinessGreaseType](VM.Managed.DAFUL.GearTrain.BearingStrength.enCleanlinessGreaseType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_CleanlinessNoFilter"></a> CleanlinessNoFilter

Gets or sets the m_CleanlinessNoFilter type.

```csharp
public BearingStrength.enCleanlinessISONoFilterType CleanlinessNoFilter { get; set; }
```

#### Property Value

 [BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md).[enCleanlinessISONoFilterType](VM.Managed.DAFUL.GearTrain.BearingStrength.enCleanlinessISONoFilterType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_ContactAngle"></a> ContactAngle

Gets or sets the factor for calculation.

```csharp
public ExpressionValueVariable ContactAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_ContactAngle_Lib"></a> ContactAngle\_Lib

Gets or sets the factor for calculation.

```csharp
public ExpressionValueVariable ContactAngle_Lib { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Cr"></a> Cr

Gets or sets the basic dynamic load rating.

```csharp
public ExpressionValueVariable Cr { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Cr_Lib"></a> Cr\_Lib

Gets or sets the basic dynamic load rating.

```csharp
public ExpressionValueVariable Cr_Lib { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_L10"></a> L10

Gets or sets the L10.

```csharp
public ExpressionValueVariable L10 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Lnm"></a> Lnm

Gets or sets the Lnm.

```csharp
public ExpressionValueVariable Lnm { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Lubricant"></a> Lubricant

Gets or sets the Lubricant type.

```csharp
public BearingStrength.enLubricantType Lubricant { get; set; }
```

#### Property Value

 [BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md).[enLubricantType](VM.Managed.DAFUL.GearTrain.BearingStrength.enLubricantType.md)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Pr"></a> Pr

Gets or sets the dynamic equivalent radial load.

```csharp
public ExpressionValueVariable Pr { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_RadialForce"></a> RadialForce

Gets or sets the radial force.

```csharp
public ExpressionValueVariable RadialForce { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Speed"></a> Speed

Gets or sets the speed.

```csharp
public ExpressionValueVariable Speed { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Temperature"></a> Temperature

Gets or sets the temperature.

```csharp
public ExpressionValueVariable Temperature { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_TireRadius"></a> TireRadius

Gets or sets the tire radius.

```csharp
public ExpressionValueVariable TireRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_UseLibrary"></a> UseLibrary

Gets or sets the FromLibrary flag.

```csharp
public bool UseLibrary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_UseUserInput"></a> UseUserInput

Gets or sets the UserInput flag.

```csharp
public bool UseUserInput { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Y"></a> Y

Gets or sets the factor for calculation.

```csharp
public ExpressionValueVariable Y { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_Y_Lib"></a> Y\_Lib

Gets or sets the factor for calculation.

```csharp
public ExpressionValueVariable Y_Lib { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_a1"></a> a1

Gets or sets the a1 type.

```csharp
public BearingStrength.ena1Type a1 { get; set; }
```

#### Property Value

 [BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md).[ena1Type](VM.Managed.DAFUL.GearTrain.BearingStrength.ena1Type.md)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_e"></a> e

Gets or sets the factor for calculation.

```csharp
public ExpressionValueVariable e { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_e_Lib"></a> e\_Lib

Gets or sets the factor for calculation.

```csharp
public ExpressionValueVariable e_Lib { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_f0"></a> f0

Gets or sets the factor for calculation of basic static load rating.

```csharp
public ExpressionValueVariable f0 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_f0_Lib"></a> f0\_Lib

Gets or sets the factor for calculation of basic static load rating.

```csharp
public ExpressionValueVariable f0_Lib { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingStrength_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

