# Class GearBuilderForRBEInFE
<a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

The gear builder for rbe in fe

```csharp
public class GearBuilderForRBEInFE : BuilderColorGeom, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IHasReplaceableEntity, IGeometryBuilder, IGearBuilder, IGTBuilder, IAddOnBearing
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
[GearBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE.md)

#### Derived

[AddedGearBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.AddedGearBuilderForRBEInFE.md), 
[GearBuilderForRBEInMeshFree](VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInMeshFree.md), 
[RackBuilderForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.RackBuilderForRBEInFE.md)

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
[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md), 
[IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md), 
[IAddOnBearing](VM.Managed.DAFUL.GearTrain.CAD.IAddOnBearing.md)

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE__ctor"></a> GearBuilderForRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.GearBuilderForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearBuilderForRBEInFE()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_BearingPoint"></a> BearingPoint

Gets or sets the bearing point.

```csharp
public PointBase BearingPoint { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_ConnectableEntity"></a> ConnectableEntity

Gets the ConnectableEntity.

```csharp
public IConnectable ConnectableEntity { get; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_GearGeometryInformation"></a> GearGeometryInformation

Gets or sets the geometry information.

```csharp
public GearGeometryInfo GearGeometryInformation { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_IsDesigner"></a> IsDesigner

Gets or sets a value indicating whether [zero setting].
Use SetDesigner() when this instance sets for undo/redo

```csharp
public bool IsDesigner { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_MateAngle"></a> MateAngle

Gets or sets the mate angle.
Use SetMateAngle() when this instance sets for undo/redo

```csharp
public double MateAngle { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_OffsetToAxisDirection"></a> OffsetToAxisDirection

Gets the offset to axis direction.

```csharp
public double OffsetToAxisDirection { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_ParentConnectable"></a> ParentConnectable

Gets or sets the parent connectable.

```csharp
public IConnectable ParentConnectable { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_Position"></a> Position

Gets the position.

```csharp
public VectorBase Position { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_ReferenceOffset"></a> ReferenceOffset

Gets or sets the reference offset on bearing.
Use SetReferenceOffset() when this instance sets for undo/redo

```csharp
public double ReferenceOffset { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_ReferencePoint"></a> ReferencePoint

Gets or sets the reference point on bearing.
Use SetReferencePoint() when this instance sets for undo/redo

```csharp
public ReferencePointType ReferencePoint { get; set; }
```

#### Property Value

 [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_Rotation"></a> Rotation

Gets or sets the rotation.
Use SetRotation() when this instance sets for undo/redo

```csharp
public OMatrix Rotation { get; set; }
```

#### Property Value

 OMatrix

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_StartPoint"></a> StartPoint

Gets the start point.

```csharp
public PointBase StartPoint { get; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_TypeOfParent"></a> TypeOfParent

Gets or sets the type of parent.
Use SetTypeOfParent() when this instance sets for undo/redo

```csharp
public GearBuilder.ParentType TypeOfParent { get; set; }
```

#### Property Value

 [GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md).[ParentType](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.ParentType.md)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_ZAxis"></a> ZAxis

Gets or sets the start axis.

```csharp
public DirectionBase ZAxis { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE__ParentConnectable"></a> \_ParentConnectable

Gets or sets the parent connectable.

```csharp
public Linker<IConnectable> _ParentConnectable { get; set; }
```

#### Property Value

 Linker<IConnectable\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_CreateParameter"></a> CreateParameter\(\)

```csharp
protected override BuilderParamBase CreateParameter()
```

#### Returns

 [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_FillParameter_VM_CAD_Builders_BuilderParamBase_"></a> FillParameter\(BuilderParamBase\)

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_GetLengthAndHeight_System_Double__System_Double__"></a> GetLengthAndHeight\(ref double, ref double\)

Gets the height of the length and.

```csharp
public void GetLengthAndHeight(ref double dLength, ref double dHeight)
```

#### Parameters

`dLength` double

Length of the d.

`dHeight` double

Height of the d.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Request for destroying the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_SetDesigner_System_Boolean_"></a> SetDesigner\(bool\)

Set designer flag.

```csharp
public void SetDesigner(bool bFlag)
```

#### Parameters

`bFlag` bool

The designer flag.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_SetMateAngle_System_Double_"></a> SetMateAngle\(double\)

Set mate angle.

```csharp
public void SetMateAngle(double dMateAngle)
```

#### Parameters

`dMateAngle` double

The mate angle.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_SetReferenceOffset_System_Double_"></a> SetReferenceOffset\(double\)

Set reference offset.

```csharp
public void SetReferenceOffset(double dOffset)
```

#### Parameters

`dOffset` double

The reference offset.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_SetReferencePoint_VM_Managed_DAFUL_GearTrain_CAD_ReferencePointType_"></a> SetReferencePoint\(ReferencePointType\)

Set reference point.

```csharp
public void SetReferencePoint(ReferencePointType type)
```

#### Parameters

`type` [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

The reference point.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_SetRotation_VM_Managed_OMatrix_"></a> SetRotation\(OMatrix\)

Set rotation.

```csharp
public void SetRotation(OMatrix mat)
```

#### Parameters

`mat` OMatrix

The matrix.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_SetTypeOfParent_VM_Managed_DAFUL_GearTrain_CAD_GearBuilder_ParentType_"></a> SetTypeOfParent\(ParentType\)

Set type of parent.

```csharp
public void SetTypeOfParent(GearBuilder.ParentType type)
```

#### Parameters

`type` [GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md).[ParentType](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.ParentType.md)

The type of parent.

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_UpdateGearGeometry"></a> UpdateGearGeometry\(\)

Updates the gear geometry.

```csharp
public void UpdateGearGeometry()
```

### <a id="VM_Managed_DAFUL_GearTrain_CAD_GearBuilderForRBEInFE_UpdateGeometry_VM_Managed_DAFUL_HiddenDocument_VM_Managed_DAFUL_GearTrain_CAD_GearBuilder_ParentType_System_String_System_Double_VM_Managed_DAFUL_GearTrain_CAD_ReferencePointType_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> UpdateGeometry\(HiddenDocument, ParentType, string, double, ReferencePointType, VectorBase, VectorBase\)

Updates the geometry.

```csharp
public void UpdateGeometry(HiddenDocument hiddenDoc, GearBuilder.ParentType typeP, string strRBE, double dReferenceOffset, ReferencePointType typeRP, VectorBase vecBearingPoint, VectorBase vecZAxis)
```

#### Parameters

`hiddenDoc` [HiddenDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs)

The hidden document.

`typeP` [GearBuilder](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.md).[ParentType](VM.Managed.DAFUL.GearTrain.CAD.GearBuilder.ParentType.md)

The type p.

`strRBE` string

The string rbe.

`dReferenceOffset` double

The d reference offset.

`typeRP` [ReferencePointType](VM.Managed.DAFUL.GearTrain.CAD.ReferencePointType.md)

The type rp.

`vecBearingPoint` VectorBase

The vec bearing point.

`vecZAxis` VectorBase

The vec Axis.

