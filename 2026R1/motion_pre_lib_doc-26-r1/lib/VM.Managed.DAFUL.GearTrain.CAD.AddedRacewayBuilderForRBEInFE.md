# Class AddedRacewayBuilderForRBEInFE
<a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilderForRBEInFE"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

The added raceway builder for rbe in fe

```csharp
public class AddedRacewayBuilderForRBEInFE : RacewayBuilderForRBEInFE, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IHasReplaceableEntity, IGeometryBuilder, IRacewayBuilder, IGTBuilder, IAddedBuilderForBearing, IAddedBuilder
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Builder ← 
BuilderTransform ← 
BuilderColorGeom ← 
BuilderBoolean ← 
BuilderMulti ← 
BuilderMultiSubtract ← 
BuilderMultiSubtractSimple ← 
[RacewayBuilderBase](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderBase.md) ← 
[RacewayBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md) ← 
[AddedRacewayBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.AddedRacewayBuilderForRBEInFE.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IHasReplaceableEntity, 
[IGeometryBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGeometryBuilder.md), 
[IRacewayBuilder](VM.Managed.DAFUL.GearTrain.CAD.IRacewayBuilder.md), 
[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md), 
[IAddedBuilderForBearing](VM.Managed.DAFUL.GearTrain.CAD.IAddedBuilderForBearing.md), 
[IAddedBuilder](VM.Managed.DAFUL.GearTrain.CAD.IAddedBuilder.md)

#### Inherited Members

[RacewayBuilderForRBEInFE.UpdateGeometry\(\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_UpdateGeometry), 
[RacewayBuilderForRBEInFE.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[RacewayBuilderForRBEInFE.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[RacewayBuilderForRBEInFE.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[RacewayBuilderForRBEInFE.GetTransform\(\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_GetTransform), 
[RacewayBuilderForRBEInFE.GetCenterPosition\(\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_GetCenterPosition), 
[RacewayBuilderForRBEInFE.StartPoint](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_StartPoint), 
[RacewayBuilderForRBEInFE.Rotation](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_Rotation), 
[RacewayBuilderForRBEInFE.OffsetToAxisDirection](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_OffsetToAxisDirection), 
[RacewayBuilderForRBEInFE.ConnectableEntity](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_ConnectableEntity), 
[RacewayBuilderForRBEInFE.ParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_ParentConnectable), 
[RacewayBuilderForRBEInFE.\_ParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_\_ParentConnectable), 
[RacewayBuilderForRBEInFE.ZAxis](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_ZAxis), 
[RacewayBuilderForRBEInFE.UseDesigner](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_UseDesigner), 
[RacewayBuilderForRBEInFE.MatedAngle](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_MatedAngle), 
[RacewayBuilderForRBEInFE.Position](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderForRBEInFE\_Position), 
[RacewayBuilderBase.GetTransform\(\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderBase\_GetTransform), 
[RacewayBuilderBase.RacewayGeomInfo](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderBase\_RacewayGeomInfo), 
[RacewayBuilderBase.OffsetToAxisDirection](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilderBase\_OffsetToAxisDirection), 
BuilderMultiSubtractSimple.GetSchema\(\), 
BuilderMultiSubtractSimple.ReadXml\(XmlReader\), 
BuilderMultiSubtractSimple.WriteXml\(XmlWriter\), 
BuilderMultiSubtractSimple.OnDeserialization\(object\), 
BuilderMultiSubtract.CreateParameter\(\), 
BuilderMultiSubtract.FillParameter\(BuilderParamBase\), 
BuilderMulti.AddBuilder\(ICollection<Builder\>\), 
BuilderMulti.AddBuilder\(Builder\), 
BuilderMulti.Clear\(\), 
BuilderMulti.CheckValidationAboutBuild\(\), 
BuilderMulti.SetTransform\(TMatrix\), 
BuilderMulti.GetBodyType\(\), 
BuilderMulti.GetUnnamedObjectName\(object\), 
BuilderMulti.FindLocal\(string\), 
BuilderMulti.Contains\(Type\), 
BuilderMulti.CopyFilePathWhenImportBuilder\(Builder\), 
BuilderMulti.HasReplaceableEntity\(IObjectBase\), 
BuilderMulti.ReplaceEntity\(IObjectBase, IObjectBase\), 
BuilderMulti.FillParameter\(BuilderParamBase\), 
BuilderMulti.OnDeserializationImpl\(ref List<Child<Builder, ObjectBase.Update\>\>\), 
BuilderMulti.ReadXmlImpl\(XmlReader\), 
BuilderMulti.WriteXmlImpl\(XmlWriter\), 
BuilderMulti.MultiType, 
BuilderMulti.Builders, 
BuilderBoolean.ReplaceBuild\(Builder, Builder\), 
BuilderColorGeom.m\_color, 
BuilderColorGeom.CheckValidationAboutBuild\(\), 
BuilderColorGeom.OnDeserialization\(object\), 
BuilderColorGeom.FillParameter\(BuilderParamBase\), 
BuilderColorGeom.Color, 
BuilderColorGeom.DrawingColor, 
BuilderTransform.SetTransform\(TMatrix\), 
BuilderTransform.IsParameterized, 
Builder.CheckValidationAboutBuild\(\), 
Builder.CheckCircularReference\(ObjectBase\), 
Builder.ChangeDataForCircularReference\(\), 
Builder.GetUnnamedObjectName\(object\), 
Builder.FindLocal\(string\), 
Builder.CopyFilePathWhenImportBuilder\(Builder\), 
Builder.Contains\(Type\), 
Builder.GetBodyType\(\), 
Builder.ReplaceData\(string, object\), 
Builder.GetNameAttribute\(string, ref List<string\>\), 
Builder.AddUneditableAttribute\(\), 
Builder.GetParentBody\(\), 
Builder.Clone\(\), 
Builder.Initialize\(Unit.ConvertFactor\), 
Builder.OnDeserialization\(object\), 
Builder.CreateParameter\(\), 
Builder.FillParameter\(BuilderParamBase\), 
Builder.LinkRequestUpdate\(object, LinkEventArgs\), 
Builder.PostWorkWhenFailedToGetXmlString\(\), 
Builder.GetFilledParameter\(\), 
Builder.GetXmlString\(\), 
Builder.HasReplaceableEntity\(IObjectBase\), 
Builder.ReplaceEntity\(IObjectBase, IObjectBase\), 
Builder.GetFactorForLength\(\), 
Builder.CheckCircularReferenceForPoint\(PointBase, ObjectBase\), 
Builder.CheckCircularReferenceForDirection\(DirectionBase, ObjectBase\), 
Builder.CheckCircularReferenceForOrientation\(OrientationBase, ObjectBase\), 
Builder.CheckCircularReferenceForTransform\(TransformBase, ObjectBase\), 
Builder.GetUnitScale\(\), 
Builder.InitialKernelLengthUnit, 
Builder.IsExternable, 
Builder.Uneditable, 
Builder.TypeOfBuilder, 
Builder.Transparency, 
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

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilderForRBEInFE__ctor"></a> AddedRacewayBuilderForRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedRacewayBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedRacewayBuilderForRBEInFE()
```

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilderForRBEInFE__ctor_VM_Managed_DAFUL_GearTrain_CAD_RacewayGeometryForRBEInFE_"></a> AddedRacewayBuilderForRBEInFE\(RacewayGeometryForRBEInFE\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedRacewayBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedRacewayBuilderForRBEInFE(RacewayGeometryForRBEInFE geometry)
```

#### Parameters

`geometry` [RacewayGeometryForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.RacewayGeometryForRBEInFE.md)

The geometry.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilderForRBEInFE_GetTransform"></a> GetTransform\(\)

Gets the transform the added raceway in FE designer.

```csharp
public override TMatrix GetTransform()
```

#### Returns

 TMatrix

The transform.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilderForRBEInFE_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Links the request destroying.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilderForRBEInFE_UpdateGeometry"></a> UpdateGeometry\(\)

Sets the shaft radius.

```csharp
public override void UpdateGeometry()
```

