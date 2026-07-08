# Class ReferencePatchset
<a id="VM_Managed_DAFUL_FE_ReferencePatchset"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the reference for patch set.

```csharp
public class ReferencePatchset : Reference, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, INamed, INavigatorItem, IVisible, IReferenceAutoContactable, IAutoContactable, IBody, IContactableFlex3D, ITieContactable, IContactable3D, INTSFContactable, IContactable, IEntityRelation, IBodyAnalysisType, IHasBody, IPLoadComponent, IChainedSegmentConnector, IChainedSegmentContact, IArgument, INodalOutputCandidate, IFaceSetComponent, ITopologyset, ITemperatureComponent, IConvectionComponent, IHeatFlowComponent, IHeatFluxComponent, IGeometricalComponent, IPatchSetInformation, IFaceInformation, IGapTarget
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Reference ← 
[ReferencePatchset](VM.Managed.DAFUL.FE.ReferencePatchset.md)

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
IReferencable, 
INamed, 
INavigatorItem, 
IVisible, 
IReferenceAutoContactable, 
IAutoContactable, 
IBody, 
IContactableFlex3D, 
ITieContactable, 
IContactable3D, 
INTSFContactable, 
IContactable, 
IEntityRelation, 
IBodyAnalysisType, 
IHasBody, 
IPLoadComponent, 
IChainedSegmentConnector, 
IChainedSegmentContact, 
IArgument, 
INodalOutputCandidate, 
IFaceSetComponent, 
ITopologyset, 
ITemperatureComponent, 
IConvectionComponent, 
IHeatFlowComponent, 
IHeatFluxComponent, 
IGeometricalComponent, 
IPatchSetInformation, 
IFaceInformation, 
IGapTarget

#### Inherited Members

Reference.LinkAddedToDocument\(object, AddToDocEventArgs\), 
Reference.SetModified\(ModifiedResult.ModifiedType\), 
Reference.SetModified\(\), 
Reference.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Reference.GetContactables\(\), 
Reference.IsAutoContactable\(\), 
Reference.IsOwner\(Reference\), 
Reference.LinkRequestUpdate\(object, LinkEventArgs\), 
Reference.LinkRequestDestroy\(object, LinkEventArgs\), 
Reference.GetTransform\(Unit\), 
Reference.GetFullTransform\(Unit\), 
Reference.GetTotalSubSystemName\(Document3D, ObjectBase\), 
Reference.GetTotalSubSystemNameCore\(Document3D, Document3D, ref Stack<string\>, ref ValueType\), 
Reference.IsVisible, 
Reference.Layer, 
Reference.FullTransformationInKernel, 
Reference.FullTransformation, 
Reference.Transformation, 
Reference.Prototype, 
Reference.Object, 
Reference.OwnerInstance, 
Reference.ClearChildInfoBeforeDeserialize, 
Reference.NonSymmetricName, 
Reference.FullName, 
Reference.Name, 
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

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset__ctor_VM_Managed_ObjectBase_"></a> ReferencePatchset\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.ReferencePatchset" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReferencePatchset(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The reference's object.

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ReferencePatchset\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.ReferencePatchset" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ReferencePatchset(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` SerializationInfo

The info.

`context` StreamingContext

The context.

## Properties

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public virtual ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_FullName"></a> FullName

Gets the full name.

```csharp
public override sealed string FullName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_Gap"></a> Gap

The gap

```csharp
public virtual ExpressionValueVariable Gap { get; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_GeometryFullName"></a> GeometryFullName

Gets the geometry full name

```csharp
public string GeometryFullName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_GeometryNameForMultiContact"></a> GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
public string GeometryNameForMultiContact { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_HalfThickness"></a> HalfThickness

Gets or sets the half thickness.

```csharp
public virtual ExpressionValueVariable HalfThickness { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_MaxPenetration"></a> MaxPenetration

Gets the maximum penetation.

```csharp
public virtual ExpressionValueVariable MaxPenetration { get; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public virtual string ReferenceType { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_SurfaceSmoothingType"></a> SurfaceSmoothingType

Gets or sets the surface smoothing.

```csharp
public virtual SurfaceSmoothing SurfaceSmoothingType { get; set; }
```

#### Property Value

 SurfaceSmoothing

## Methods

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_GetCenterPositionDirection_System_UInt32_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetCenterPositionDirection\(uint, ref VectorBase, ref VectorBase, IReferencable\)

Gets the center position and direction.

```csharp
public virtual void GetCenterPositionDirection(uint index, ref VectorBase center, ref VectorBase direction, IReferencable __unnamed003)
```

#### Parameters

`index` uint

The index.

`center` VectorBase

The center position.

`direction` VectorBase

The direction.

`__unnamed003` IReferencable

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public virtual bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument information.

`xmlEle` XmlElement

The XmlElement information.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool __unnamed002)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument for object.

`xmlEle` XmlElement

The XmlElement for object.

`__unnamed002` bool

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_GetPatchCount"></a> GetPatchCount\(\)

Gets the count of patch.

```csharp
public virtual uint GetPatchCount()
```

#### Returns

 uint

The count of patch.

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the point direction.

```csharp
public virtual bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_IsOwner_VM_Managed_Reference_"></a> IsOwner\(Reference\)

Determines whether the specified owner.

```csharp
public override bool IsOwner(Reference owner)
```

#### Parameters

`owner` Reference

#### Returns

 bool

<code>true</code> if the specified owner; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_FE_ReferencePatchset_SetGap_System_String_"></a> SetGap\(string\)

Sets the gap

```csharp
public virtual void SetGap(string strValue)
```

#### Parameters

`strValue` string

The value

