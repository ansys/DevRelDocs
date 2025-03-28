# <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder"></a> Class AddedRacewayBuilder

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

Added Bearing Builder

```csharp
public class AddedRacewayBuilder : RacewayBuilder, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IRacewayBuilder, IGTBuilder, IAddedBuilderForBearing, IAddedBuilder
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
BuilderBoolean ← 
BuilderMulti ← 
BuilderMultiSubtract ← 
BuilderMultiSubtractSimple ← 
[RacewayBuilderBase](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilderBase.md) ← 
[RacewayBuilder](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md) ← 
[AddedRacewayBuilder](VM.Managed.DAFUL.GearTrain.CAD.AddedRacewayBuilder.md)

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
[IRacewayBuilder](VM.Managed.DAFUL.GearTrain.CAD.IRacewayBuilder.md), 
[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md), 
[IAddedBuilderForBearing](VM.Managed.DAFUL.GearTrain.CAD.IAddedBuilderForBearing.md), 
[IAddedBuilder](VM.Managed.DAFUL.GearTrain.CAD.IAddedBuilder.md)

#### Inherited Members

[RacewayBuilder.UpdateGeometry\(\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_UpdateGeometry), 
[RacewayBuilder.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[RacewayBuilder.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[RacewayBuilder.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[RacewayBuilder.GetTransform\(\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_GetTransform), 
[RacewayBuilder.SetReferencePoint\(ReferencePointType\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_SetReferencePoint\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_ReferencePointType\_), 
[RacewayBuilder.SetReferenceOffset\(double\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_SetReferenceOffset\_System\_Double\_), 
[RacewayBuilder.SetRotation\(OMatrix\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_SetRotation\_VM\_Managed\_OMatrix\_), 
[RacewayBuilder.SetReverse\(bool\)](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_SetReverse\_System\_Boolean\_), 
[RacewayBuilder.StartPoint](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_StartPoint), 
[RacewayBuilder.Rotation](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_Rotation), 
[RacewayBuilder.OffsetToAxisDirection](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_OffsetToAxisDirection), 
[RacewayBuilder.ConnectableEntity](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_ConnectableEntity), 
[RacewayBuilder.ReferencePoint](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_ReferencePoint), 
[RacewayBuilder.ReferenceOffset](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_ReferenceOffset), 
[RacewayBuilder.IsReverse](VM.Managed.DAFUL.GearTrain.CAD.RacewayBuilder.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_RacewayBuilder\_IsReverse), 
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

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder__ctor"></a> AddedRacewayBuilder\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedRacewayBuilder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedRacewayBuilder()
```

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder__ctor_VM_Managed_DAFUL_GearTrain_CAD_RacewayGeometry_"></a> AddedRacewayBuilder\(RacewayGeometry\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedRacewayBuilder" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedRacewayBuilder(RacewayGeometry bearing)
```

#### Parameters

`bearing` [RacewayGeometry](VM.Managed.DAFUL.GearTrain.CAD.RacewayGeometry.md)

The bearing.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder_GetCenterPosition"></a> GetCenterPosition\(\)

Gets center position.

```csharp
public VectorBase GetCenterPosition()
```

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder_GetTransform"></a> GetTransform\(\)

Gets the transform for the added raceway.

```csharp
public override TMatrix GetTransform()
```

#### Returns

 TMatrix

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder_GetTransformImpl_System_Boolean_"></a> GetTransformImpl\(bool\)

Gets the transform for the added raceway.

```csharp
public TMatrix GetTransformImpl(bool bSimulate)
```

#### Parameters

`bSimulate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The simulate.

#### Returns

 TMatrix

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Links the request destroying.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedRacewayBuilder_UpdateGeometry"></a> UpdateGeometry\(\)

Sets the shaft radius.

```csharp
public override void UpdateGeometry()
```

