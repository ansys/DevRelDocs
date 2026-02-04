#  Class ObjectBase

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the objectbase.

```csharp
public abstract class ObjectBase : LinkableBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[ObjectBase](VM.Managed.ObjectBase.md)

#### Derived

[Object<TEventCore\>](VM.Managed.Object\-1.md)

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
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IHistoryObjectSerializable

#### Inherited Members

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

### <a id="VM_Managed_ObjectBase__ctor"></a> ObjectBase\(\)

Initializes a new instance of the <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ObjectBase()
```

### <a id="VM_Managed_ObjectBase__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> ObjectBase\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected ObjectBase(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`__unnamed001` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### <a id="VM_Managed_ObjectBase_ClearChildInfoBeforeDeserialize"></a> ClearChildInfoBeforeDeserialize

Gets a value indicating whether [clear child info before deserialize].

```csharp
virtual bool ClearChildInfoBeforeDeserialize { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_Container"></a> Container

Gets the container.

```csharp
public IOwned Container { get; }
```

#### Property Value

 IOwned

### <a id="VM_Managed_ObjectBase_Document"></a> Document

Gets the document.

```csharp
public Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_ObjectBase_ID"></a> ID

Get the object id

```csharp
virtual Identifier ID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Managed_ObjectBase_IsChildExternable"></a> IsChildExternable

Gets a value indicating whether this instance's child is Externable.

```csharp
virtual bool IsChildExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_IsExternable"></a> IsExternable

Gets a value indicating whether this instance is Externable.

```csharp
virtual bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_KernelKey"></a> KernelKey

Gets the kernelkey.

```csharp
public ObjectBase.ConvertKey KernelKey { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md).[ConvertKey](VM.Managed.ObjectBase.ConvertKey.md)

### <a id="VM_Managed_ObjectBase_Key"></a> Key

Gets or sets the convertkey.

```csharp
public virtual ObjectBase.ConvertKey Key { get; set; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md).[ConvertKey](VM.Managed.ObjectBase.ConvertKey.md)

### <a id="VM_Managed_ObjectBase_KeyImpl"></a> KeyImpl

```csharp
UIntPtr KeyImpl { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_Managed_ObjectBase_ObjectState"></a> ObjectState

Gets the object state.

```csharp
public ObjectStateType ObjectState { get; }
```

#### Property Value

 [ObjectStateType](VM.Managed.ObjectStateType.md)

### <a id="VM_Managed_ObjectBase_ObjectStateForCircularError"></a> ObjectStateForCircularError

Gets the object state for circular error.

```csharp
public ObjectStateType ObjectStateForCircularError { get; }
```

#### Property Value

 [ObjectStateType](VM.Managed.ObjectStateType.md)

### <a id="VM_Managed_ObjectBase_Owner"></a> Owner

Gets the owner.

```csharp
public ObjectBase Owner { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_ObjectBase_SkipModified"></a> SkipModified

Gets or sets a value indicating whether [skip modified flag].

```csharp
protected bool SkipModified { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_TopologyEntityTypeName"></a> TopologyEntityTypeName

Get the object type name

```csharp
public virtual string TopologyEntityTypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_ObjectBase_UntypedEventCore"></a> UntypedEventCore

Gets the untypedeventcore.

```csharp
public abstract ObjectEventCore UntypedEventCore { get; }
```

#### Property Value

 [ObjectEventCore](VM.Managed.ObjectEventCore.md)

## Methods

### <a id="VM_Managed_ObjectBase_AddPostDeserialize_System_Runtime_Serialization_StreamingContext_"></a> AddPostDeserialize\(StreamingContext\)

Add thi object to Post deserialize object list.

```csharp
protected void AddPostDeserialize(StreamingContext context)
```

#### Parameters

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The <xref href="System.Runtime.Serialization.StreamingContext" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_Managed_ObjectBase_CheckAndUpdateLink_System_Collections_Generic_HashSet_VM_Managed_ObjectBase__"></a> CheckAndUpdateLink\(HashSet<ObjectBase\>\)

```csharp
protected virtual void CheckAndUpdateLink(HashSet<ObjectBase> lstObj)
```

#### Parameters

`lstObj` [HashSet](https://learn.microsoft.com/dotnet/api/system.collections.generic.hashset\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_ObjectBase_ConnectProxy"></a> ConnectProxy\(\)

```csharp
protected virtual void ConnectProxy()
```

### <a id="VM_Managed_ObjectBase_CreateEntityWhenUpdateContents_System_Action_"></a> CreateEntityWhenUpdateContents\(Action\)

```csharp
protected void CreateEntityWhenUpdateContents(Action action)
```

#### Parameters

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Managed_ObjectBase_CustomGetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> CustomGetObjectData\(SerializationInfo, StreamingContext\)

Customize the GetObjectData function.

```csharp
protected virtual void CustomGetObjectData(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context.

### <a id="VM_Managed_ObjectBase_DestroyObject_System_Object_VM_Managed_LinkEventArgs_"></a> DestroyObject\(object, LinkEventArgs\)

Destroy object.

```csharp
public void DestroyObject(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The event notifier.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The event argument.

### <a id="VM_Managed_ObjectBase_DestroyObject_VM_Managed_DestroyEventArgs_"></a> DestroyObject\(DestroyEventArgs\)

Destroy object.

```csharp
public void DestroyObject(DestroyEventArgs arg)
```

#### Parameters

`arg` [DestroyEventArgs](VM.Managed.DestroyEventArgs.md)

The event argument.

### <a id="VM_Managed_ObjectBase_DestroyObject"></a> DestroyObject\(\)

Destroy object.

```csharp
public void DestroyObject()
```

### <a id="VM_Managed_ObjectBase_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_DisposeManagedResources"></a> DisposeManagedResources\(\)

Dispose managed resources

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Managed_ObjectBase_DoWorkAfterUpdateContents"></a> DoWorkAfterUpdateContents\(\)

After update contents, do work.

```csharp
public virtual void DoWorkAfterUpdateContents()
```

### <a id="VM_Managed_ObjectBase_FindObjectOnXmlDeserialize_System_String_"></a> FindObjectOnXmlDeserialize\(string\)

Get object by fullname.

```csharp
public static ObjectBase FindObjectOnXmlDeserialize(string strFullName)
```

#### Parameters

`strFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fullname.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The Object.

### <a id="VM_Managed_ObjectBase_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public virtual bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_ObjectBase_GetArgumentList_System_Collections_Generic_LinkedList_VM_Managed_ObjectBase__"></a> GetArgumentList\(LinkedList<ObjectBase\>\)

```csharp
public virtual void GetArgumentList(LinkedList<ObjectBase> lstObj)
```

#### Parameters

`lstObj` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_ObjectBase_GetDestroyEventExtraData"></a> GetDestroyEventExtraData\(\)

```csharp
protected virtual object GetDestroyEventExtraData()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_ObjectBase_GetObjectByKey_System_UIntPtr_"></a> GetObjectByKey\(UIntPtr\)

Get object by key.

```csharp
public static ObjectBase GetObjectByKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The Object.

### <a id="VM_Managed_ObjectBase_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets a updated objects.

```csharp
virtual List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### <a id="VM_Managed_ObjectBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public virtual void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_ObjectBase_IsEqualArray__1___0_____0___"></a> IsEqualArray<T\>\(T\[\], T\[\]\)

Equal two array

```csharp
public static bool IsEqualArray<T>(T[] arA, T[] arB)
```

#### Parameters

`arA` T\[\]

The array A.

`arB` T\[\]

The array B.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="VM_Managed_ObjectBase_IsEqualList_System_Collections_Generic_List_System_Double__System_Collections_Generic_List_System_Double__"></a> IsEqualList\(List<double\>, List<double\>\)

```csharp
public static bool IsEqualList(List<double> lstA, List<double> lstB)
```

#### Parameters

`lstA` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`lstB` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_IsSerializableEvent_System_Delegate_"></a> IsSerializableEvent\(Delegate\)

Determines whether is [serializable event] [the specified delegate].

```csharp
protected virtual bool IsSerializableEvent(Delegate del)
```

#### Parameters

`del` [Delegate](https://learn.microsoft.com/dotnet/api/system.delegate)

The delegate.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [serializable event] [the specified delegate]; otherwise, <code>false</code>.

### <a id="VM_Managed_ObjectBase_LinkAddedToDocument_System_Object_VM_Managed_AddToDocEventArgs_"></a> LinkAddedToDocument\(object, AddToDocEventArgs\)

Add linked object to a document.

```csharp
protected virtual void LinkAddedToDocument(object objNotifier, AddToDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

The <xref href="VM.Managed.AddToDocEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_ObjectBase_LinkAddedToDocumentCore_VM_Models_Pre_IOwned_System_Boolean_"></a> LinkAddedToDocumentCore\(IOwned, bool\)

```csharp
protected virtual void LinkAddedToDocumentCore(IOwned owner, bool bBackup)
```

#### Parameters

`owner` IOwned

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_LinkRemovedFromDocument_System_Object_VM_Managed_RemoveFromDocEventArgs_"></a> LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)

Remove linked object to a document.

```csharp
protected virtual void LinkRemovedFromDocument(object objNotifier, RemoveFromDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

The <xref href="VM.Managed.AddToDocEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_ObjectBase_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected virtual void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_ObjectBase_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Request for destroying the linked object.

```csharp
protected virtual void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_ObjectBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected virtual void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_ObjectBase_LinkRequestUpdating_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdating\(object, LinkEventArgs\)

Request for updating the linked object.

```csharp
protected virtual void LinkRequestUpdating(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_ObjectBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_ObjectBase_OnLinkReserved_VM_Managed_ILink_System_Object_System_EventArgs_"></a> OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected virtual void OnLinkReserved(ILink A_0, object A_1, EventArgs A_2)
```

#### Parameters

`A_0` [ILink](VM.Managed.ILink.md)

`A_1` [object](https://learn.microsoft.com/dotnet/api/system.object)

`A_2` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="VM_Managed_ObjectBase_PostAddToDocument"></a> PostAddToDocument\(\)

```csharp
public virtual void PostAddToDocument()
```

### <a id="VM_Managed_ObjectBase_PostRemoveFromDocument_VM_Managed_Document_"></a> PostRemoveFromDocument\(Document\)

```csharp
public virtual void PostRemoveFromDocument(Document document)
```

#### Parameters

`document` [Document](VM.Managed.Document.md)

### <a id="VM_Managed_ObjectBase_RemoveFromCreatedList"></a> RemoveFromCreatedList\(\)

```csharp
[Obsolete]
public virtual void RemoveFromCreatedList()
```

### <a id="VM_Managed_ObjectBase_ReplaceEventCore_VM_Managed_ObjectEventCore_"></a> ReplaceEventCore\(ObjectEventCore\)

Replace event core.

```csharp
protected void ReplaceEventCore(ObjectEventCore coreNew)
```

#### Parameters

`coreNew` [ObjectEventCore](VM.Managed.ObjectEventCore.md)

The object EventCore.

### <a id="VM_Managed_ObjectBase_ResetInvalidEntity"></a> ResetInvalidEntity\(\)

```csharp
public virtual void ResetInvalidEntity()
```

### <a id="VM_Managed_ObjectBase_RollbackEvent"></a> RollbackEvent\(\)

```csharp
virtual void RollbackEvent()
```

### <a id="VM_Managed_ObjectBase_SetContainer_VM_Models_Pre_IOwned_System_Boolean_"></a> SetContainer\(IOwned, bool\)

```csharp
public virtual void SetContainer(IOwned obOwner, bool bBackup)
```

#### Parameters

`obOwner` IOwned

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_SetFlagWhenXMLFile_System_String_System_Boolean_"></a> SetFlagWhenXMLFile\(string, bool\)

Set flag when property file open

```csharp
public static void SetFlagWhenXMLFile(string strFilePath, bool bValue)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

`bValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag.

### <a id="VM_Managed_ObjectBase_SetIconColor_VM_CAD_Kernel_Render_Canvas_"></a> SetIconColor\(Canvas\)

Set color for icon.

```csharp
public virtual void SetIconColor(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas.

### <a id="VM_Managed_ObjectBase_SetModified_VM_Managed_ModifiedResult_ModifiedType_"></a> SetModified\(ModifiedType\)

Called when object modified.

```csharp
protected virtual void SetModified(ModifiedResult.ModifiedType type)
```

#### Parameters

`type` [ModifiedResult](VM.Managed.ModifiedResult.md).[ModifiedType](VM.Managed.ModifiedResult.ModifiedType.md)

The modifed type.

### <a id="VM_Managed_ObjectBase_SetModified"></a> SetModified\(\)

Called when object modified.

```csharp
protected virtual void SetModified()
```

### <a id="VM_Managed_ObjectBase_SetModified_VM_Managed_ModifiedResult_ModifiedType_VM_Models_Pre_IDocument_"></a> SetModified\(ModifiedType, IDocument\)

```csharp
public void SetModified(ModifiedResult.ModifiedType type, IDocument doc)
```

#### Parameters

`type` [ModifiedResult](VM.Managed.ModifiedResult.md).[ModifiedType](VM.Managed.ModifiedResult.ModifiedType.md)

`doc` IDocument

### <a id="VM_Managed_ObjectBase_SetModifiedCore_VM_Managed_ModifiedResult_ModifiedType_"></a> SetModifiedCore\(ModifiedType\)

Called when object modified.

```csharp
protected void SetModifiedCore(ModifiedResult.ModifiedType type)
```

#### Parameters

`type` [ModifiedResult](VM.Managed.ModifiedResult.md).[ModifiedType](VM.Managed.ModifiedResult.ModifiedType.md)

The modified type

### <a id="VM_Managed_ObjectBase_SetOldNameWithNewEntity_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)

Change for the new name.

```csharp
public virtual void SetOldNameWithNewEntity(ObjectBase obNew, ObjectBase obOld)
```

#### Parameters

`obNew` [ObjectBase](VM.Managed.ObjectBase.md)

The new object.

`obOld` [ObjectBase](VM.Managed.ObjectBase.md)

The old object.

### <a id="VM_Managed_ObjectBase_SkipUpdateObjectImpl"></a> SkipUpdateObjectImpl\(\)

Skip the object that updated.

```csharp
virtual bool SkipUpdateObjectImpl()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_ObjectBase_UpdateContents_System_Xml_XmlReader_VM_Managed_ObjectBase_System_String_"></a> UpdateContents\(XmlReader, ObjectBase, string\)

Update object.

```csharp
public static ObjectBase UpdateContents(XmlReader reader, ObjectBase obOld, string strRootElement)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader for object information.

`obOld` [ObjectBase](VM.Managed.ObjectBase.md)

The old object.

`strRootElement` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root element name.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The Object.

### <a id="VM_Managed_ObjectBase_UpdateContents_System_Xml_XmlReader_VM_Managed_ObjectBase_"></a> UpdateContents\(XmlReader, ObjectBase\)

Update object.

```csharp
public static ObjectBase UpdateContents(XmlReader reader, ObjectBase obOld)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader for object information.

`obOld` [ObjectBase](VM.Managed.ObjectBase.md)

The old object.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The Object.

### <a id="VM_Managed_ObjectBase_UpdateContents_System_String_System_String_"></a> UpdateContents\(string, string\)

Update object.

```csharp
public static ObjectBase UpdateContents(string strXml, string strRootElement)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The xml for object information.

`strRootElement` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root element name.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The Object.

### <a id="VM_Managed_ObjectBase_UpdateContents_System_String_"></a> UpdateContents\(string\)

Update object.

```csharp
public static ObjectBase UpdateContents(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The xml for object information.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The Object.

### <a id="VM_Managed_ObjectBase_Verify_VM_Managed_VerifiedResult_"></a> Verify\(VerifiedResult\)

Verify.

```csharp
protected virtual void Verify(VerifiedResult vr)
```

#### Parameters

`vr` [VerifiedResult](VM.Managed.VerifiedResult.md)

The Verified result.

### <a id="VM_Managed_ObjectBase_raise_Destroying_System_Object_VM_Identifier_"></a> raise\_Destroying\(object, Identifier\)

```csharp
public void raise_Destroying(object sender, Identifier args)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` Identifier

### <a id="VM_Managed_ObjectBase_raise_OnAdded_System_Object_VM_Managed_AddToDocEventArgs_"></a> raise\_OnAdded\(object, AddToDocEventArgs\)

```csharp
public void raise_OnAdded(object objNotifier, AddToDocEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

### <a id="VM_Managed_ObjectBase_raise_OnContentsUpdated_System_Object_System_EventArgs_"></a> raise\_OnContentsUpdated\(object, EventArgs\)

```csharp
protected void raise_OnContentsUpdated(object value0, EventArgs value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="VM_Managed_ObjectBase_raise_OnDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnDestroy\(object, LinkEventArgs\)

```csharp
public void raise_OnDestroy(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_ObjectBase_raise_OnDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnDestroying\(object, LinkEventArgs\)

```csharp
public void raise_OnDestroying(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_ObjectBase_raise_OnRemoved_System_Object_VM_Managed_RemoveFromDocEventArgs_"></a> raise\_OnRemoved\(object, RemoveFromDocEventArgs\)

```csharp
public void raise_OnRemoved(object obj, RemoveFromDocEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

### <a id="VM_Managed_ObjectBase_raise_OnUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnUpdate\(object, LinkEventArgs\)

```csharp
public void raise_OnUpdate(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_ObjectBase_raise_OnUpdating_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnUpdating\(object, LinkEventArgs\)

```csharp
public void raise_OnUpdating(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_ObjectBase_Destroying"></a> Destroying

Occurs when [on destroying].

```csharp
public event EventHandler<Identifier> Destroying
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### <a id="VM_Managed_ObjectBase_OnAdded"></a> OnAdded

Occurs when [on add].

```csharp
public event EventHandler<AddToDocEventArgs> OnAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)\>

### <a id="VM_Managed_ObjectBase_OnContentsUpdated"></a> OnContentsUpdated

```csharp
public event EventHandler OnContentsUpdated
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="VM_Managed_ObjectBase_OnDestroy"></a> OnDestroy

Occurs when [on destroy].

```csharp
public event EventHandler<LinkEventArgs> OnDestroy
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### <a id="VM_Managed_ObjectBase_OnDestroying"></a> OnDestroying

Occurs when [on destroying].

```csharp
public event EventHandler<LinkEventArgs> OnDestroying
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### <a id="VM_Managed_ObjectBase_OnRemoved"></a> OnRemoved

Occurs when [on remove].

```csharp
public event EventHandler<RemoveFromDocEventArgs> OnRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)\>

### <a id="VM_Managed_ObjectBase_OnUpdate"></a> OnUpdate

Occurs when [on update].

```csharp
public event EventHandler<LinkEventArgs> OnUpdate
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### <a id="VM_Managed_ObjectBase_OnUpdating"></a> OnUpdating

Occurs when [on updating].

```csharp
public event EventHandler<LinkEventArgs> OnUpdating
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

## Operators

### <a id="VM_Managed_ObjectBase_op_Implicit_System_UIntPtr__VM_Managed_ObjectBase"></a> implicit operator ObjectBase\(UIntPtr\)

Cast operator.

```csharp
public static implicit operator ObjectBase(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_ObjectBase_op_Implicit_VM_Managed_ObjectBase__System_UIntPtr"></a> implicit operator UIntPtr\(ObjectBase\)

Cast operator.

```csharp
public static implicit operator UIntPtr(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

