#  Class DesignDimensionSingleHorizontal

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The single design dimension for horizontal

```csharp
public class DesignDimensionSingleHorizontal : DesignDimensionSingle, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, INavigatorItem, IDesignSubEntity, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IInterface, ITemplateObject, IEntityRelation, IDraw, IDrawIcon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
DesignSubEntity ← 
[DesignDimensionBase](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md) ← 
[DesignDimensionSingle](VM.Managed.DAFUL.GearTrain.DesignDimensionSingle.md) ← 
[DesignDimensionSingleHorizontal](VM.Managed.DAFUL.GearTrain.DesignDimensionSingleHorizontal.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
INamed, 
INavigatorItem, 
IDesignSubEntity, 
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
IInterface, 
ITemplateObject, 
IEntityRelation, 
IDraw, 
IDrawIcon

#### Inherited Members

[DesignDimensionSingle.FindTargetObject\(Section\)](VM.Managed.DAFUL.GearTrain.DesignDimensionSingle.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionSingle\_FindTargetObject\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_Section\_), 
[DesignDimensionSingle.TargetObject](VM.Managed.DAFUL.GearTrain.DesignDimensionSingle.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionSingle\_TargetObject), 
[DesignDimensionSingle.\_TargetObject](VM.Managed.DAFUL.GearTrain.DesignDimensionSingle.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionSingle\_\_TargetObject), 
[DesignDimensionBase.FindTargetObject\(Section\)](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_FindTargetObject\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_Section\_), 
[DesignDimensionBase.Draw\(Canvas\)](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[DesignDimensionBase.ReDraw\(\)](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_ReDraw), 
[DesignDimensionBase.IsExternable](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_IsExternable), 
[DesignDimensionBase.Gap](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_Gap), 
[DesignDimensionBase.StartPoint](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_StartPoint), 
[DesignDimensionBase.EndPoint](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_EndPoint), 
[DesignDimensionBase.Color](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_Color), 
[DesignDimensionBase.Hide](VM.Managed.DAFUL.GearTrain.DesignDimensionBase.md\#VM\_Managed\_DAFUL\_GearTrain\_DesignDimensionBase\_Hide), 
DesignSubEntity.m\_bSkipToUpdateSymmetric, 
DesignSubEntity.g\_dicUpdatedDesignSubEntity, 
DesignSubEntity.FixUp\(ObjectBase\), 
DesignSubEntity.CheckCircularReference\(\), 
DesignSubEntity.BindInterfaceImpl\(TMatrix, TMatrix, IInterface\), 
DesignSubEntity.IsInterface, 
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

### <a id="VM_Managed_DAFUL_GearTrain_DesignDimensionSingleHorizontal__ctor"></a> DesignDimensionSingleHorizontal\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.DesignDimensionSingleHorizontal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DesignDimensionSingleHorizontal()
```

### <a id="VM_Managed_DAFUL_GearTrain_DesignDimensionSingleHorizontal__ctor_System_String_"></a> DesignDimensionSingleHorizontal\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.DesignDimensionSingleHorizontal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DesignDimensionSingleHorizontal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the design subentity.

