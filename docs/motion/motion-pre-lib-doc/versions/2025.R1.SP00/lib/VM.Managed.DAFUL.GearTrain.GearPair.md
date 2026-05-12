#  Class GearPair

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear pair class

```csharp
public class GearPair : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_GearPair__ctor"></a> GearPair\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearPair" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearPair()
```

### <a id="VM_Managed_DAFUL_GearTrain_GearPair__ctor_System_String_"></a> GearPair\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearPair" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearPair(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the sub entity.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_DrivenGeometryInformation"></a> DrivenGeometryInformation

Gets or sets the driven geometry information.

```csharp
public GearGeometryInfo DrivenGeometryInformation { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_DrivingGeometryInformation"></a> DrivingGeometryInformation

Gets or sets the driving geometry information.

```csharp
public GearGeometryInfo DrivingGeometryInformation { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_PredefinedPIs"></a> PredefinedPIs

Gets the array of predefined performance index.

```csharp
public PerformanceIndexInformation[] PredefinedPIs { get; }
```

#### Property Value

 [PerformanceIndexInformation](VM.Managed.DAFUL.GearTrain.PerformanceIndexInformation.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_ResultSummary"></a> ResultSummary

Gets or sets the result summary.
Use SetResultSummary() when this instance sets for undo/redo

```csharp
public GearPair.Summary ResultSummary { get; set; }
```

#### Property Value

 [GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md).[Summary](VM.Managed.DAFUL.GearTrain.GearPair.Summary.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_Contains_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> Contains\(GearGeometryInfo\)

Determines whether [contains] [the specified information].

```csharp
public bool Contains(GearGeometryInfo info)
```

#### Parameters

`info` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_GetGearPair_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> GetGearPair\(GearGeometryInfo\)

Gets the gear pair.

```csharp
public GearGeometryInfo GetGearPair(GearGeometryInfo info)
```

#### Parameters

`info` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The information.

#### Returns

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_SetResultSummary_System_Xml_XmlNode_"></a> SetResultSummary\(XmlNode\)

Sets the result summary.

```csharp
public void SetResultSummary(XmlNode node)
```

#### Parameters

`node` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The node.

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_SetResultSummary_System_Double_"></a> SetResultSummary\(double\)

Sets the result summary.

```csharp
public void SetResultSummary(double dCenterDIstance)
```

#### Parameters

`dCenterDIstance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The center distance.

### <a id="VM_Managed_DAFUL_GearTrain_GearPair_SetResultSummary_VM_Managed_DAFUL_GearTrain_GearPair_Summary_"></a> SetResultSummary\(Summary\)

Set result summary.

```csharp
public void SetResultSummary(GearPair.Summary summary)
```

#### Parameters

`summary` [GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md).[Summary](VM.Managed.DAFUL.GearTrain.GearPair.Summary.md)

The result summary.

