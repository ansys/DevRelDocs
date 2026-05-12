#  Class GearGeometryInfo

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear geometry Info

```csharp
public class GearGeometryInfo : GeometryInfoBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md) ← 
[GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

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

[GeometryInfoBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[GeometryInfoBase.GeometryDepth](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_GeometryDepth), 
[GeometryInfoBase.ClearanceInformation](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_ClearanceInformation), 
[GeometryInfoBase.TypeOfGeometry](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_TypeOfGeometry), 
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

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo__ctor"></a> GearGeometryInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearGeometryInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearGeometryInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo__ctor_System_String_"></a> GearGeometryInfo\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearGeometryInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearGeometryInfo(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the sub entity.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_GearShape"></a> GearShape

Gets or sets the gear geometry.

```csharp
public GearShapeBase GearShape { get; set; }
```

#### Property Value

 [GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md)

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_GeometryDepth"></a> GeometryDepth

Gets the geometry depth.

```csharp
public override double GeometryDepth { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_IsInternal"></a> IsInternal

Gets or sets a value indicating whether this instance is designer.
Use SetInternal() when this instance sets for undo/redo

```csharp
public bool IsInternal { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_ModifiedParam"></a> ModifiedParam

Gets or sets the whether this instance's parameter is modified or not.

```csharp
public bool ModifiedParam { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_PredefinedPIs"></a> PredefinedPIs

Gets the array of predefined performance index.

```csharp
public PerformanceIndexInformation[] PredefinedPIs { get; }
```

#### Property Value

 [PerformanceIndexInformation](VM.Managed.DAFUL.GearTrain.PerformanceIndexInformation.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_TypeOfGeometry"></a> TypeOfGeometry

Gets the type of geometry.

```csharp
public override GeometryInfoBase.GeometryType TypeOfGeometry { get; }
```

#### Property Value

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.GeometryType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_GetCenterPosition_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder_"></a> GetCenterPosition\(IGearBuilder\)

Gets the center position

```csharp
public VectorBase[] GetCenterPosition(IGearBuilder addGB)
```

#### Parameters

`addGB` [IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)

The Gear builder

#### Returns

 VectorBase\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_GetLengthAndHeight_System_Double__System_Double__"></a> GetLengthAndHeight\(ref double, ref double\)

Gets the height of the length and.

```csharp
public void GetLengthAndHeight(ref double dLength, ref double dHeight)
```

#### Parameters

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d.

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

Height of the d.

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Request for destroying the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_SetInternal_System_Boolean_"></a> SetInternal\(bool\)

Set internal flag.

```csharp
public void SetInternal(bool bFlag)
```

#### Parameters

`bFlag` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The internal flag.

### <a id="VM_Managed_DAFUL_GearTrain_GearGeometryInfo_SetModified"></a> SetModified\(\)

Sets modified flag.

```csharp
protected override void SetModified()
```

