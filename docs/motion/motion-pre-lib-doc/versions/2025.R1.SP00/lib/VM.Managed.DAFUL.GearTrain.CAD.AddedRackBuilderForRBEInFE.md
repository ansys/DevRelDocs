#  Class AddedRackBuilderForRBEInFE

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

The added rack builder for rbe in fe

```csharp
public class AddedRackBuilderForRBEInFE : RackBuilderForRBEInFE, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IGearBuilder, IGTBuilder, IAddOnBearing, IAddedBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Builder ← 
BuilderTransform ← 
BuilderColorGeom ← 
[GearBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md) ← 
[RackBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md) ← 
[AddedRackBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.AddedRackBuilderForRBEInFE.md)

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
IHistoryObjectSerializable, 
IAttributeContainer, 
[IGeometryBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGeometryBuilder.md), 
[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md), 
[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md), 
[IAddOnBearing](VM.Managed.DAFUL.GearTrain.CAD.IAddOnBearing.md), 
[IAddedBuilder](VM.Managed.DAFUL.GearTrain.CAD.IAddedBuilder.md)

#### Inherited Members

[RackBuilderForRBEInFE.UpdateGeometry\(HiddenDocument, string, string, bool, bool, VectorBase, double\)](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RackBuilderForRBEInFE\_UpdateGeometry\_VM\_Managed\_DAFUL\_HiddenDocument\_System\_String\_System\_String\_System\_Boolean\_System\_Boolean\_VM\_Managed\_VectorBase\_System\_Double\_), 
[RackBuilderForRBEInFE.EndParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RackBuilderForRBEInFE\_EndParentConnectable), 
[RackBuilderForRBEInFE.\_EndParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RackBuilderForRBEInFE\_\_EndParentConnectable), 
[RackBuilderForRBEInFE.EndPosition](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RackBuilderForRBEInFE\_EndPosition), 
[RackBuilderForRBEInFE.UseStartParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RackBuilderForRBEInFE\_UseStartParentConnectable), 
[RackBuilderForRBEInFE.UseEndParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RackBuilderForRBEInFE\_UseEndParentConnectable), 
[RackBuilderForRBEInFE.InitialAngle](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RackBuilderForRBEInFE\_InitialAngle), 
[GearBuilderForRBEInFE.SetTypeOfParent\(GearBuilder.ParentType\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_SetTypeOfParent\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_ParentType\_), 
[GearBuilderForRBEInFE.SetDesigner\(bool\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_SetDesigner\_System\_Boolean\_), 
[GearBuilderForRBEInFE.SetRotation\(OMatrix\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_SetRotation\_VM\_Managed\_OMatrix\_), 
[GearBuilderForRBEInFE.SetMateAngle\(double\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_SetMateAngle\_System\_Double\_), 
[GearBuilderForRBEInFE.SetReferencePoint\(ReferencePointType\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_SetReferencePoint\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_ReferencePointType\_), 
[GearBuilderForRBEInFE.SetReferenceOffset\(double\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_SetReferenceOffset\_System\_Double\_), 
[GearBuilderForRBEInFE.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[GearBuilderForRBEInFE.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[GearBuilderForRBEInFE.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[GearBuilderForRBEInFE.GetLengthAndHeight\(ref double, ref double\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_GetLengthAndHeight\_System\_Double\_\_System\_Double\_\_), 
[GearBuilderForRBEInFE.UpdateGearGeometry\(\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_UpdateGearGeometry), 
[GearBuilderForRBEInFE.UpdateGeometry\(HiddenDocument, GearBuilder.ParentType, string, double, ReferencePointType, VectorBase, VectorBase\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_UpdateGeometry\_VM\_Managed\_DAFUL\_HiddenDocument\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_ParentType\_System\_String\_System\_Double\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_ReferencePointType\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[GearBuilderForRBEInFE.CreateParameter\(\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_CreateParameter), 
[GearBuilderForRBEInFE.FillParameter\(BuilderParamBase\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[GearBuilderForRBEInFE.TypeOfParent](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_TypeOfParent), 
[GearBuilderForRBEInFE.BearingPoint](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_BearingPoint), 
[GearBuilderForRBEInFE.GearGeometryInformation](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_GearGeometryInformation), 
[GearBuilderForRBEInFE.ParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_ParentConnectable), 
[GearBuilderForRBEInFE.\_ParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_\_ParentConnectable), 
[GearBuilderForRBEInFE.ZAxis](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_ZAxis), 
[GearBuilderForRBEInFE.IsDesigner](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_IsDesigner), 
[GearBuilderForRBEInFE.Rotation](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_Rotation), 
[GearBuilderForRBEInFE.MateAngle](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_MateAngle), 
[GearBuilderForRBEInFE.ReferencePoint](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_ReferencePoint), 
[GearBuilderForRBEInFE.ReferenceOffset](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_ReferenceOffset), 
[GearBuilderForRBEInFE.Position](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_Position), 
[GearBuilderForRBEInFE.StartPoint](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_StartPoint), 
[GearBuilderForRBEInFE.OffsetToAxisDirection](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_OffsetToAxisDirection), 
[GearBuilderForRBEInFE.ConnectableEntity](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilderForRBEInFE\_ConnectableEntity), 
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

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRackBuilderForRBEInFE__ctor"></a> AddedRackBuilderForRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedRackBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedRackBuilderForRBEInFE()
```

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRackBuilderForRBEInFE__ctor_VM_Managed_DAFUL_GearTrain_CAD_RackGeometryForRBEInFE_"></a> AddedRackBuilderForRBEInFE\(RackGeometryForRBEInFE\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedRackBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedRackBuilderForRBEInFE(RackGeometryForRBEInFE geometry)
```

#### Parameters

`geometry` [RackGeometryForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.RackGeometryForRBEInFE.md)

The geometry.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRackBuilderForRBEInFE_LinkRequestUpdating_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdating\(object, LinkEventArgs\)

Links the request updating.

```csharp
protected override void LinkRequestUpdating(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

