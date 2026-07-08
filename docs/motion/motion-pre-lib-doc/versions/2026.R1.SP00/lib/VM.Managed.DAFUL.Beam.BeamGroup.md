# Class BeamGroup
<a id="VM_Managed_DAFUL_Beam_BeamGroup"></a>

Namespace: [VM.Managed.DAFUL.Beam](VM.Managed.DAFUL.Beam.md)  
Assembly: VMDBeamGroup.dll  

Beam Group Class

```csharp
[CanNotOpenWithNewPreprocessor]
public class BeamGroup : Group, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IVisible, IArgument, IMultiChangable, IDraw, ITransformable, IReportable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs) ← 
[Group](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs) ← 
[BeamGroup](VM.Managed.DAFUL.Beam.BeamGroup.md)

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
INavigatorItem, 
IVisible, 
IArgument, 
IMultiChangable, 
IDraw, 
ITransformable, 
IReportable

#### Inherited Members

[Group.OnLinkReserved\(ILink, object, EventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.GetSolidBody\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.AddObject\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.RemoveObject\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.AddAction\(GroupActionBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.ActionNames\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.ExcuteAction\(GroupActionBase, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.ExcuteAction\(string, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.StateAction\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.GetLayerImpl\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.SetLayerImpl\(Layer\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.Objects](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.ReferenceType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
[Group.ArgumentType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs), 
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

### <a id="VM_Managed_DAFUL_Beam_BeamGroup__ctor"></a> BeamGroup\(\)

Constructor of BeamGroup Class

```csharp
public BeamGroup()
```

### <a id="VM_Managed_DAFUL_Beam_BeamGroup__ctor_System_String_"></a> BeamGroup\(string\)

Constructor of BeamGroup Class with Name

```csharp
public BeamGroup(string strName)
```

#### Parameters

`strName` string

BeamGroup Name

## Properties

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_BeamInfos"></a> BeamInfos

List container of beam information objects

```csharp
public BeamInfo[] BeamInfos { get; set; }
```

#### Property Value

 [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_DefaultBodyPoints"></a> DefaultBodyPoints

Default body points when beam group is first created.

```csharp
public List<Vector> DefaultBodyPoints { get; }
```

#### Property Value

 List<Vector\>

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_Hide"></a> Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_RestoretoStraight"></a> RestoretoStraight

Whether maintain straight status

```csharp
public bool RestoretoStraight { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_SyncBeamBodyProp"></a> SyncBeamBodyProp

Whether syncronise beam and body properties

```csharp
public bool SyncBeamBodyProp { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_UseBeamForce"></a> UseBeamForce

Whether use beam force or matrix force

```csharp
public bool UseBeamForce { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_AddBeamInfo_VM_Managed_DAFUL_Beam_BeamInfo_"></a> AddBeamInfo\(BeamInfo\)

Add beam information

```csharp
public void AddBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Beam information to add

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_CreateSolidBody_System_String_VM_Managed_Vector_"></a> CreateSolidBody\(string, Vector\)

Create Solid Body

```csharp
public static SolidBody CreateSolidBody(string name, Vector vecPoint)
```

#### Parameters

`name` string

`vecPoint` Vector

#### Returns

 [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draw Beam information geometry

```csharp
public void Draw(Canvas canvas)
```

#### Parameters

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

Canvas to draw beam geometry

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_GetLayerImpl"></a> GetLayerImpl\(\)

Gets the layer impl.

```csharp
protected override Layer GetLayerImpl()
```

#### Returns

 Layer

#### Exceptions

 Exception

Document of Group object is null.

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_GetNextBeamInfo_VM_Managed_DAFUL_Beam_BeamInfo_"></a> GetNextBeamInfo\(BeamInfo\)

Get next beam information

```csharp
public BeamInfo GetNextBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Current beam information

#### Returns

 [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Next beam information

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_GetPrevBeamInfo_VM_Managed_DAFUL_Beam_BeamInfo_"></a> GetPrevBeamInfo\(BeamInfo\)

Get previous beam information

```csharp
public BeamInfo GetPrevBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Current beam information

#### Returns

 [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Previous beam information

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_IsFirstBeamInfo_VM_Managed_DAFUL_Beam_BeamInfo_"></a> IsFirstBeamInfo\(BeamInfo\)

Whether beam element is a first entity among current beam group

```csharp
public bool IsFirstBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Currnet beam information

#### Returns

 bool

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_IsFirstBody_VM_Managed_DAFUL_SolidBody_"></a> IsFirstBody\(SolidBody\)

Whether body is a first entity among all bodies

```csharp
public bool IsFirstBody(SolidBody solidBody)
```

#### Parameters

`solidBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

Body to check

#### Returns

 bool

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_IsLastBeamInfo_VM_Managed_DAFUL_Beam_BeamInfo_"></a> IsLastBeamInfo\(BeamInfo\)

Whether beam element is a last entity among current beam group

```csharp
public bool IsLastBeamInfo(BeamInfo beamInfo)
```

#### Parameters

`beamInfo` [BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

Currnet beam information

#### Returns

 bool

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_IsLastBody_VM_Managed_DAFUL_SolidBody_"></a> IsLastBody\(SolidBody\)

Whether body is a last entity among all bodies

```csharp
public bool IsLastBody(SolidBody solidBody)
```

#### Parameters

`solidBody` [SolidBody](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Body.cs)

Body to check

#### Returns

 bool

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request to update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_SetLayerImpl_VM_Managed_Layer_"></a> SetLayerImpl\(Layer\)

Implemented function to set layer

```csharp
protected override void SetLayerImpl(Layer layer)
```

#### Parameters

`layer` Layer

Layer Object

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_UpdateBeamElementsOfAll"></a> UpdateBeamElementsOfAll\(\)

Update beam elements of all

```csharp
public void UpdateBeamElementsOfAll()
```

### <a id="VM_Managed_DAFUL_Beam_BeamGroup_UpdateBeamNodesOfAll"></a> UpdateBeamNodesOfAll\(\)

Update beam nodes of all

```csharp
public void UpdateBeamNodesOfAll()
```

