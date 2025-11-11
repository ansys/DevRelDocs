# Class RacewayGeometryInfo
<a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Bearing Raceway

```csharp
public class RacewayGeometryInfo : GeometryInfoBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs) ← 
[GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md) ← 
[RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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
[SubEntity.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo__ctor"></a> RacewayGeometryInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RacewayGeometryInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo__ctor_System_String_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_"></a> RacewayGeometryInfo\(string, RacewayType\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RacewayGeometryInfo(string strName, RacewayGeometryInfo.RacewayType type)
```

#### Parameters

`strName` string

Name of the sub entity.

`type` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md).[RacewayType](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.RacewayType.md)

The type.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_GeometryDepth"></a> GeometryDepth

Gets the geometry depth.

```csharp
public override double GeometryDepth { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_InnerRadius"></a> InnerRadius

Gets or sets the inner radius.
Use SetInnerRadius() when this instance sets for undo/redo

```csharp
public double InnerRadius { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_OuterRadius"></a> OuterRadius

Gets or sets the outer radius.
Use SetOuterRadius() when this instance sets for undo/redo

```csharp
public double OuterRadius { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_Type"></a> Type

Gets or sets the type.
Use SetType() when this instance sets for undo/redo

```csharp
public RacewayGeometryInfo.RacewayType Type { get; set; }
```

#### Property Value

 [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md).[RacewayType](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.RacewayType.md)

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_TypeOfGeometry"></a> TypeOfGeometry

Gets the type of geometry.

```csharp
public override GeometryInfoBase.GeometryType TypeOfGeometry { get; }
```

#### Property Value

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.GeometryType.md)

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_Width"></a> Width

Gets or sets the width.
Use SetWidth() when this instance sets for undo/redo

```csharp
public double Width { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_CreateRacewayInHiddenDocument_VM_Managed_DAFUL_GearTrain_HiddenBearingDocument_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_"></a> CreateRacewayInHiddenDocument\(HiddenBearingDocument, RacewayGeometryInfo, RacewayGeometryInfo\)

Creates the raceway in hidden document.

```csharp
public static void CreateRacewayInHiddenDocument(HiddenBearingDocument doc, RacewayGeometryInfo outer_info, RacewayGeometryInfo inner_info)
```

#### Parameters

`doc` [HiddenBearingDocument](VM.Managed.DAFUL.GearTrain.HiddenBearingDocument.md)

The document.

`outer_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The outer_info.

`inner_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The inner_info.

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_CreateRacewayInStiffnessDocument_VM_Managed_DAFUL_SubSystemDocument_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_VM_Managed_DAFUL_GearTrain_Bearing_"></a> CreateRacewayInStiffnessDocument\(SubSystemDocument, RacewayGeometryInfo, RacewayGeometryInfo, Bearing\)

Creates the raceway in stiffness document.

```csharp
public static void CreateRacewayInStiffnessDocument(SubSystemDocument doc, RacewayGeometryInfo outer_info, RacewayGeometryInfo inner_info, Bearing bearing)
```

#### Parameters

`doc` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document.

`outer_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The outer_info.

`inner_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The inner_info.

`bearing` [Bearing](VM.Managed.DAFUL.GearTrain.Bearing.md)

The bearing.

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_GetBuilder_VM_Managed_CAD_BuilderMultiSubtractSimple_VM_Managed_DAFUL_GearTrain_Bearing_"></a> GetBuilder\(BuilderMultiSubtractSimple, Bearing\)

Gets the builder.

```csharp
public virtual Builder GetBuilder(BuilderMultiSubtractSimple builder, Bearing bearing)
```

#### Parameters

`builder` BuilderMultiSubtractSimple

The builder.

`bearing` [Bearing](VM.Managed.DAFUL.GearTrain.Bearing.md)

The owner bearing.

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_GetBuilder_VM_Managed_CAD_BuilderMultiSubtractSimple_VM_Managed_DAFUL_GearTrain_Bearing_VM_Managed_TMatrix_System_Boolean_"></a> GetBuilder\(BuilderMultiSubtractSimple, Bearing, TMatrix, bool\)

Gets the builder.

```csharp
public virtual Builder GetBuilder(BuilderMultiSubtractSimple builder, Bearing bearing, TMatrix matTransf, bool IsReverse)
```

#### Parameters

`builder` BuilderMultiSubtractSimple

The builder.

`bearing` [Bearing](VM.Managed.DAFUL.GearTrain.Bearing.md)

The owner bearing.

`matTransf` TMatrix

The transformation.

`IsReverse` bool

The flag of reverse direction.

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_GetTruncatedBuilder_VM_Managed_CAD_BuilderMultiSubtractSimple_VM_Managed_DAFUL_GearTrain_Bearing_VM_Managed_TMatrix_"></a> GetTruncatedBuilder\(BuilderMultiSubtractSimple, Bearing, TMatrix\)

Gets the builder.

```csharp
public virtual Builder GetTruncatedBuilder(BuilderMultiSubtractSimple builder, Bearing bearing, TMatrix matTransf)
```

#### Parameters

`builder` BuilderMultiSubtractSimple

The builder.

`bearing` [Bearing](VM.Managed.DAFUL.GearTrain.Bearing.md)

The owner bearing.

`matTransf` TMatrix

The transformation.

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_SetInnerRadius_System_Double_"></a> SetInnerRadius\(double\)

Set inner radius.

```csharp
public void SetInnerRadius(double dRadius)
```

#### Parameters

`dRadius` double

The inner radius.

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_SetOuterRadius_System_Double_"></a> SetOuterRadius\(double\)

Set outer radius.

```csharp
public void SetOuterRadius(double dRadius)
```

#### Parameters

`dRadius` double

The outer radius.

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_SetType_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_"></a> SetType\(RacewayType\)

Set raceway type.

```csharp
public void SetType(RacewayGeometryInfo.RacewayType type)
```

#### Parameters

`type` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md).[RacewayType](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.RacewayType.md)

The raceway type.

### <a id="VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_SetWidth_System_Double_"></a> SetWidth\(double\)

Set width.

```csharp
public void SetWidth(double dWidth)
```

#### Parameters

`dWidth` double

The width.

