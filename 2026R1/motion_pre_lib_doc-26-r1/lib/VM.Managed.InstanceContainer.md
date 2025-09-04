#  Class InstanceContainer

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This base class is to represent the instance container.

```csharp
[CanNotOpenWithNewPreprocessor]
public abstract class InstanceContainer : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IReferencable, ITransformable, IVisible, IAssemblyOwner, IInterfaceTable, IGroup, IMultiChangable, IInstanceContainer, IEntityRelation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](VM.Managed.SubEntity.md) ← 
[InstanceContainer](VM.Managed.InstanceContainer.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IDocumentOwner, 
IReferencable, 
ITransformable, 
IVisible, 
IAssemblyOwner, 
[IInterfaceTable](VM.Managed.IInterfaceTable.md), 
IGroup, 
IMultiChangable, 
IInstanceContainer, 
IEntityRelation

#### Inherited Members

[SubEntity.Initialize\(Unit.ConvertFactor\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[SubEntity.FixUp\(ObjectBase\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_FixUp\_VM\_Managed\_ObjectBase\_), 
[SubEntity.WriteTemplateImpl\(XmlWriter\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[SubEntity.ReadTemplateImpl\(XmlReader\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[SubEntity.Name](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Name), 
[SubEntity.FullName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_FullName), 
[SubEntity.NonSymmetricName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_NonSymmetricName), 
[SubEntity.DisplayName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_DisplayName), 
[SubEntity.IsEnabled](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_IsEnabled), 
[SubEntity.Comment](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Comment), 
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

### <a id="VM_Managed_InstanceContainer__ctor"></a> InstanceContainer\(\)

Initializes a new instance of the <xref href="VM.Managed.InstanceContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InstanceContainer()
```

### <a id="VM_Managed_InstanceContainer__ctor_System_String_VM_Managed_Instance_"></a> InstanceContainer\(string, Instance\)

Initializes a new instance of the <xref href="VM.Managed.InstanceContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InstanceContainer(string strName, Instance instance)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the instance container.

`instance` Instance

The instance.

### <a id="VM_Managed_InstanceContainer__ctor_System_String_System_String_VM_Managed_TransformBase_"></a> InstanceContainer\(string, string, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.InstanceContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InstanceContainer(string strName, string strDocumentFilePath, TransformBase transf)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the instance container.

`strDocumentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The document file path.

`transf` TransformBase

The transformation matrix.

## Properties

### <a id="VM_Managed_InstanceContainer_Instance"></a> Instance

Gets or sets the instance.

```csharp
public Instance Instance { get; set; }
```

#### Property Value

 Instance

### <a id="VM_Managed_InstanceContainer_InterfaceTableList"></a> InterfaceTableList

Gets the interface table list.

```csharp
protected IList<InstanceContainer.InterfaceTable> InterfaceTableList { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[InstanceContainer](VM.Managed.InstanceContainer.md).[InterfaceTable](VM.Managed.InstanceContainer.InterfaceTable.md)\>

### <a id="VM_Managed_InstanceContainer_InterfaceTables"></a> InterfaceTables

Gets or sets the interface tables.

```csharp
public InstanceContainer.InterfaceTable[] InterfaceTables { get; set; }
```

#### Property Value

 [InstanceContainer](VM.Managed.InstanceContainer.md).[InterfaceTable](VM.Managed.InstanceContainer.InterfaceTable.md)\[\]

### <a id="VM_Managed_InstanceContainer_IsVisible"></a> IsVisible

Gets or sets the visible state.

```csharp
public virtual bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_InstanceContainer_Layer"></a> Layer

Gets or sets the layer.

```csharp
public Layer Layer { get; set; }
```

#### Property Value

 Layer

## Methods

### <a id="VM_Managed_InstanceContainer_BindInterface"></a> BindInterface\(\)

Binds the interface.

```csharp
public void BindInterface()
```

### <a id="VM_Managed_InstanceContainer_BindInterface_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> BindInterface\(ObjectBase, ObjectBase\)

Binds the interface.

```csharp
protected virtual bool BindInterface(ObjectBase obFrom, ObjectBase obTo)
```

#### Parameters

`obFrom` ObjectBase

The [from object].

`obTo` ObjectBase

The [to object].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_InstanceContainer_BindInterface_VM_Managed_InstanceContainer_InterfaceTable_"></a> BindInterface\(InterfaceTable\)

Binds the interface.

```csharp
protected void BindInterface(InstanceContainer.InterfaceTable table)
```

#### Parameters

`table` [InstanceContainer](VM.Managed.InstanceContainer.md).[InterfaceTable](VM.Managed.InstanceContainer.InterfaceTable.md)

The interface table.

### <a id="VM_Managed_InstanceContainer_Find_System_String_"></a> Find\(string\)

Finds an object that matches a specified name

```csharp
public IObjectBase Find(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_InstanceContainer_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public virtual IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_InstanceContainer_GetChildListImpl"></a> GetChildListImpl\(\)

Gets the child list.

```csharp
protected virtual IEnumerable<ObjectBase> GetChildListImpl()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ObjectBase\>

The child list.

### <a id="VM_Managed_InstanceContainer_GetLayerImpl"></a> GetLayerImpl\(\)

Gets the layer [implementation].

```csharp
protected virtual Layer GetLayerImpl()
```

#### Returns

 Layer

The layer

### <a id="VM_Managed_InstanceContainer_GetNewEntityName_System_String_"></a> GetNewEntityName\(string\)

Gets the new name of the entity [Not Implemented].

```csharp
public virtual string GetNewEntityName(string strPrefix)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The prefix.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The new name

### <a id="VM_Managed_InstanceContainer_GetNewEntityName_System_String_System_Boolean_System_Int32_"></a> GetNewEntityName\(string, bool, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public string GetNewEntityName(string strPrefix, bool bUseUnderLine, int nNumFigure)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Managed_InstanceContainer_GetNewEntityName_System_String_System_Boolean_System_Int32_System_Int32_"></a> GetNewEntityName\(string, bool, int, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public string GetNewEntityName(string strPrefix, bool bUseUnderLine, int nNumFigure, int nStartIndex)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Managed_InstanceContainer_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets the update objects.

```csharp
public override List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### <a id="VM_Managed_InstanceContainer_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public virtual string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The unnamed object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### <a id="VM_Managed_InstanceContainer_InitInterfaceTable"></a> InitInterfaceTable\(\)

Initialize the interface table.

```csharp
public virtual void InitInterfaceTable()
```

### <a id="VM_Managed_InstanceContainer_IsDestroyContainer"></a> IsDestroyContainer\(\)

Determines whether is [destroy container].

```csharp
public virtual bool IsDestroyContainer()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [destroy container]; otherwise, <code>false</code>.

### <a id="VM_Managed_InstanceContainer_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_InstanceContainer_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_InstanceContainer_MakeReferenceImpl_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReferenceImpl\(LinkedList<Reference\>\)

Makes the reference [implementation].

```csharp
protected virtual void MakeReferenceImpl(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<Reference\>

The container.

### <a id="VM_Managed_InstanceContainer_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_InstanceContainer_PostAddToDocument"></a> PostAddToDocument\(\)

Call when post [add to document].

```csharp
public override void PostAddToDocument()
```

### <a id="VM_Managed_InstanceContainer_PostOpenDocumentAfterHookEvent"></a> PostOpenDocumentAfterHookEvent\(\)

Call when post [open document].

```csharp
public virtual void PostOpenDocumentAfterHookEvent()
```

### <a id="VM_Managed_InstanceContainer_ProcessDuplicateReferenceImpl_VM_Managed_Reference_"></a> ProcessDuplicateReferenceImpl\(Reference\)

Process for duplicated reference

```csharp
protected virtual void ProcessDuplicateReferenceImpl(Reference refer)
```

#### Parameters

`refer` Reference

The reference.

### <a id="VM_Managed_InstanceContainer_Redraw"></a> Redraw\(\)

Redraw.

```csharp
public virtual void Redraw()
```

### <a id="VM_Managed_InstanceContainer_SetLayerImpl_VM_Managed_Layer_"></a> SetLayerImpl\(Layer\)

Sets the layer [implementation].

```csharp
protected virtual void SetLayerImpl(Layer layer)
```

#### Parameters

`layer` Layer

The layer.

### <a id="VM_Managed_InstanceContainer_TransformImpl_VM_Managed_TMatrix_"></a> TransformImpl\(TMatrix\)

Transforms [implementation].

```csharp
protected virtual void TransformImpl(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The mat T.

