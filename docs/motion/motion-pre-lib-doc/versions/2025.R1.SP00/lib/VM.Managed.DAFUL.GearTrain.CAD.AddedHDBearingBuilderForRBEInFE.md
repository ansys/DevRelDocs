#  Class AddedHDBearingBuilderForRBEInFE

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

Added Hydro Dynamic Bearing Builder For RBE In FE

```csharp
public class AddedHDBearingBuilderForRBEInFE : HDBearingBuilderForRBEInFE, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IGeometryBuilder, IAddedBuilderForBearing, IAddedBuilder
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
BuilderMultiUnite ← 
BuilderMultiUniteSimple ← 
[HDBearingBuilderBase](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderBase.md) ← 
[HDBearingBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md) ← 
[AddedHDBearingBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.AddedHDBearingBuilderForRBEInFE.md)

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
[IAddedBuilderForBearing](VM.Managed.DAFUL.GearTrain.CAD.IAddedBuilderForBearing.md), 
[IAddedBuilder](VM.Managed.DAFUL.GearTrain.CAD.IAddedBuilder.md)

#### Inherited Members

[HDBearingBuilderForRBEInFE.StartPoint](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_StartPoint), 
[HDBearingBuilderForRBEInFE.Rotation](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_Rotation), 
[HDBearingBuilderForRBEInFE.ParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_ParentConnectable), 
[HDBearingBuilderForRBEInFE.\_ParentConnectable](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_\_ParentConnectable), 
[HDBearingBuilderForRBEInFE.ZAxis](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_ZAxis), 
[HDBearingBuilderForRBEInFE.UseDesigner](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_UseDesigner), 
[HDBearingBuilderForRBEInFE.MatedAngle](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_MatedAngle), 
[HDBearingBuilderForRBEInFE.Position](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderForRBEInFE.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderForRBEInFE\_Position), 
[HDBearingBuilderBase.GetTransform\(\)](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderBase\_GetTransform), 
[HDBearingBuilderBase.GeomInfo](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderBase\_GeomInfo), 
[HDBearingBuilderBase.OffsetToAxisDirection](VM.Managed.DAFUL.GearTrain.CAD.HDBearingBuilderBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_HDBearingBuilderBase\_OffsetToAxisDirection), 
BuilderMultiUniteSimple.GetSchema\(\), 
BuilderMultiUniteSimple.ReadXml\(XmlReader\), 
BuilderMultiUniteSimple.WriteXml\(XmlWriter\), 
BuilderMultiUniteSimple.OnDeserialization\(object\), 
BuilderMultiUnite.CreateParameter\(\), 
BuilderMultiUnite.FillParameter\(BuilderParamBase\), 
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

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedHDBearingBuilderForRBEInFE__ctor"></a> AddedHDBearingBuilderForRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedHDBearingBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedHDBearingBuilderForRBEInFE()
```

### <a id="VM_Managed_DAFUL_GearTrain_CAD_AddedHDBearingBuilderForRBEInFE__ctor_VM_Managed_DAFUL_GearTrain_CAD_HDBearingGeometryForRBEInFE_"></a> AddedHDBearingBuilderForRBEInFE\(HDBearingGeometryForRBEInFE\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.AddedHDBearingBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddedHDBearingBuilderForRBEInFE(HDBearingGeometryForRBEInFE geometry)
```

#### Parameters

`geometry` [HDBearingGeometryForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.HDBearingGeometryForRBEInFE.md)

The geometry.

