#  Class AddedGearBuilder

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

The added gear builder

```csharp
public class AddedGearBuilder : GearBuilder, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IGearBuilder, IGTBuilder, IAddOnBearing, IAddedBuilder
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
[GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md) ← 
[AddedGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.AddedGearBuilder.md)

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

[GearBuilder.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[GearBuilder.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[GearBuilder.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[GearBuilder.GetLengthAndHeight\(ref double, ref double\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_GetLengthAndHeight\_System\_Double\_\_System\_Double\_\_), 
[GearBuilder.UpdateGearGeometry\(Section, bool\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_UpdateGearGeometry\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_Section\_System\_Boolean\_), 
[GearBuilder.GetOMatrixWithTwoDirection\(VectorBase, VectorBase\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_GetOMatrixWithTwoDirection\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[GearBuilder.UpdateGeometry\(HiddenDocument, GearBuilder.ParentType, double, ReferencePointType, Vector\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_UpdateGeometry\_VM\_Managed\_DAFUL\_HiddenDocument\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_ParentType\_System\_Double\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_ReferencePointType\_VM\_Managed\_Vector\_), 
[GearBuilder.SetTypeOfParent\(GearBuilder.ParentType\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_SetTypeOfParent\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_ParentType\_), 
[GearBuilder.SetReferencePoint\(ReferencePointType\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_SetReferencePoint\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_ReferencePointType\_), 
[GearBuilder.SetReferenceOffset\(double\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_SetReferenceOffset\_System\_Double\_), 
[GearBuilder.SetDesigner\(bool\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_SetDesigner\_System\_Boolean\_), 
[GearBuilder.SetRotation\(OMatrix\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_SetRotation\_VM\_Managed\_OMatrix\_), 
[GearBuilder.SetMateAngle\(double\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_SetMateAngle\_System\_Double\_), 
[GearBuilder.CreateParameter\(\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_CreateParameter), 
[GearBuilder.FillParameter\(BuilderParamBase\)](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[GearBuilder.TypeOfParent](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_TypeOfParent), 
[GearBuilder.GearGeometryInformation](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_GearGeometryInformation), 
[GearBuilder.ReferencePoint](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_ReferencePoint), 
[GearBuilder.ReferenceOffset](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_ReferenceOffset), 
[GearBuilder.BearingPoint](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_BearingPoint), 
[GearBuilder.OffsetToAxisDirection](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_OffsetToAxisDirection), 
[GearBuilder.IsDesigner](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_IsDesigner), 
[GearBuilder.StartPoint](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_StartPoint), 
[GearBuilder.Rotation](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_Rotation), 
[GearBuilder.MateAngle](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_MateAngle), 
[GearBuilder.ConnectableEntity](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_ConnectableEntity), 
[GearBuilder.Position](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GearBuilder\_Position), 
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

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedGearBuilder__ctor"></a> AddedGearBuilder\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedGearBuilder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedGearBuilder()
```

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedGearBuilder__ctor_VM_Managed_DAFUL_GearTrain_CAD_GearGeometry_"></a> AddedGearBuilder\(GearGeometry\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedGearBuilder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedGearBuilder(GearGeometry geometry)
```

#### Parameters

`geometry` [GearGeometry](VM.Managed.DAFUL.GearTrain.CAD.GearGeometry.md)

The geometry.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedGearBuilder_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedGearBuilder_LinkRequestUpdating_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdating\(object, LinkEventArgs\)

Links the request updating.

```csharp
protected override void LinkRequestUpdating(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

