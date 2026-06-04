#  Class LinkContainer

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the object container that has a relation with other object.

```csharp
public abstract class LinkContainer : LinkableBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md)

#### Derived

[AttributeBase](VM.Managed.AttributeBase.md), 
[AttributeCollection](VM.Managed.AttributeCollection.md), 
[Container](VM.Managed.Container.md), 
[DirectionBase](VM.Managed.DirectionBase.md), 
[Body.EdgeContainer](VM.Managed.CAD.Body.EdgeContainer.md), 
[Expression](VM.Managed.Expression.md), 
[Body.FaceContainer](VM.Managed.CAD.Body.FaceContainer.md), 
[Topology.IndexContainer](VM.Managed.CAD.Topology.IndexContainer.md), 
[Body.IndexContainer](VM.Managed.CAD.Body.IndexContainer.md), 
[LinkDictionaryCollectionBase<T, TValue, TValueWrapper, TValueConverter\>](VM.Managed.Collections.LinkDictionaryCollectionBase\-4.md), 
[MeshFreeAnalysisLevel](VM.Managed.MeshFreeAnalysisLevel.md), 
[MeshFreeAnalysisLevelGroup](VM.Managed.MeshFreeAnalysisLevelGroup.md), 
[PlaneBase](VM.Managed.PlaneBase.md), 
[PointBase](VM.Managed.PointBase.md), 
[Range](VM.Managed.Range.md), 
[Body.VertexContainer](VM.Managed.CAD.Body.VertexContainer.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md)

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

### <a id="VM_Managed_LinkContainer__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> LinkContainer\(SerializationInfo, StreamingContext\)

```csharp
protected LinkContainer(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### <a id="VM_Managed_LinkContainer__ctor_VM_Models_Pre_IOwned_"></a> LinkContainer\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.LinkContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkContainer(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

### <a id="VM_Managed_LinkContainer__ctor"></a> LinkContainer\(\)

Initializes a new instance of the <xref href="VM.Managed.LinkContainer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkContainer()
```

## Properties

### <a id="VM_Managed_LinkContainer_ClearChildInfoBeforeDeserialize"></a> ClearChildInfoBeforeDeserialize

Gets a value indicating whether [clear child info before deserialize].

```csharp
virtual bool ClearChildInfoBeforeDeserialize { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkContainer_Container"></a> Container

Gets or sets the owner object.

```csharp
public IOwned Container { get; }
```

#### Property Value

 IOwned

### <a id="VM_Managed_LinkContainer_Document"></a> Document

Gets the document that contains the object.

```csharp
public virtual Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_LinkContainer_ID"></a> ID

Gets or sets the id.

```csharp
virtual Identifier ID { get; }
```

#### Property Value

 Identifier

### <a id="VM_Managed_LinkContainer_IsChildExternable"></a> IsChildExternable

Gets a value indicating whether this instance's child is Externable.

```csharp
virtual bool IsChildExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkContainer_IsExternable"></a> IsExternable

Gets a value indicating whether this instance is Externable.

```csharp
virtual bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkContainer_Owner"></a> Owner

Gets the owner object.

```csharp
public virtual ObjectBase Owner { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

## Methods

### <a id="VM_Managed_LinkContainer_CanBeDestroy_System_Object_"></a> CanBeDestroy\(object\)

```csharp
protected virtual bool CanBeDestroy(object A_0)
```

#### Parameters

`A_0` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkContainer_CustomGetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> CustomGetObjectData\(SerializationInfo, StreamingContext\)

<p>Customize the GetObjectData function.</p>

```csharp
protected virtual void CustomGetObjectData(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

<p>The info.</p>

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

<p>The context.</p>

### <a id="VM_Managed_LinkContainer_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkContainer_DisposeManagedResources"></a> DisposeManagedResources\(\)

Dispose managed resources

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Managed_LinkContainer_GetCopy_System_Object_"></a> GetCopy\(object\)

Gets the copied object.

```csharp
protected object GetCopy(object original)
```

#### Parameters

`original` [object](https://learn.microsoft.com/dotnet/api/system.object)

The original object.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The copied object.

### <a id="VM_Managed_LinkContainer_GetSerializedData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetSerializedData\(SerializationInfo, StreamingContext\)

<p>Load Customized Data function.</p>

```csharp
protected void GetSerializedData(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

<p>The info.</p>

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

<p>The context.</p>

### <a id="VM_Managed_LinkContainer_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets a updated objects.

```csharp
virtual List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### <a id="VM_Managed_LinkContainer_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>

```csharp
public virtual void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>

### <a id="VM_Managed_LinkContainer_IsSerializableEvent_System_Delegate_"></a> IsSerializableEvent\(Delegate\)

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

### <a id="VM_Managed_LinkContainer_LinkAddedToDocument_System_Object_VM_Managed_AddToDocEventArgs_"></a> LinkAddedToDocument\(object, AddToDocEventArgs\)

The event that added to document occured from the linked object.

```csharp
protected virtual void LinkAddedToDocument(object objNotifier, AddToDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The added object.

`arg` [AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

The event information that added to document.

### <a id="VM_Managed_LinkContainer_LinkRemovedFromDocument_System_Object_VM_Managed_RemoveFromDocEventArgs_"></a> LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)

The event that removed from document occured from the linked object.

```csharp
protected virtual void LinkRemovedFromDocument(object objNotifier, RemoveFromDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The removed object.

`arg` [RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

The event information that removed to document.

### <a id="VM_Managed_LinkContainer_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

The destroy event occured from the linked object.

```csharp
protected virtual void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### <a id="VM_Managed_LinkContainer_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected virtual void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### <a id="VM_Managed_LinkContainer_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected virtual void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### <a id="VM_Managed_LinkContainer_LinkRequestUpdating_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdating\(object, LinkEventArgs\)

The updating event occured from the linked object.

```csharp
protected virtual void LinkRequestUpdating(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### <a id="VM_Managed_LinkContainer_OnChildUpdated_System_Object_VM_Managed_LinkEventArgs_"></a> OnChildUpdated\(object, LinkEventArgs\)

Called when [child updated].

```csharp
protected virtual void OnChildUpdated(object obj, LinkEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_LinkContainer_OnContainerDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> OnContainerDestroy\(object, LinkEventArgs\)

Called when [container destroy].

```csharp
protected virtual void OnContainerDestroy(object obj, LinkEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_LinkContainer_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_LinkContainer_OnLinkReserved_VM_Managed_ILink_System_Object_System_EventArgs_"></a> OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected virtual void OnLinkReserved(ILink A_0, object A_1, EventArgs A_2)
```

#### Parameters

`A_0` [ILink](VM.Managed.ILink.md)

`A_1` [object](https://learn.microsoft.com/dotnet/api/system.object)

`A_2` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="VM_Managed_LinkContainer_SetContainer_VM_Models_Pre_IOwned_System_Boolean_"></a> SetContainer\(IOwned, bool\)

```csharp
public virtual void SetContainer(IOwned owner, bool bBackup)
```

#### Parameters

`owner` IOwned

`bBackup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkContainer_SetFlagWhenXMLFile_System_String_System_Boolean_"></a> SetFlagWhenXMLFile\(string, bool\)

Set flag when xml file open

```csharp
public static void SetFlagWhenXMLFile(string strFilePath, bool bValue)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

`bValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag.

### <a id="VM_Managed_LinkContainer_SetModified"></a> SetModified\(\)

Called when object modified.

```csharp
public virtual void SetModified()
```

### <a id="VM_Managed_LinkContainer_SkipUpdateObjectImpl"></a> SkipUpdateObjectImpl\(\)

Skip the object that updated.

```csharp
virtual bool SkipUpdateObjectImpl()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_LinkContainer_Verify_VM_Managed_VerifiedResult_"></a> Verify\(VerifiedResult\)

Verify.

```csharp
protected virtual void Verify(VerifiedResult vr)
```

#### Parameters

`vr` [VerifiedResult](VM.Managed.VerifiedResult.md)

The Verified result.

### <a id="VM_Managed_LinkContainer_raise_OnAdded_System_Object_VM_Managed_AddToDocEventArgs_"></a> raise\_OnAdded\(object, AddToDocEventArgs\)

```csharp
public void raise_OnAdded(object objNotifier, AddToDocEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)

### <a id="VM_Managed_LinkContainer_raise_OnDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnDestroy\(object, LinkEventArgs\)

```csharp
public void raise_OnDestroy(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_LinkContainer_raise_OnDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnDestroying\(object, LinkEventArgs\)

```csharp
public void raise_OnDestroying(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_LinkContainer_raise_OnRemoved_System_Object_VM_Managed_RemoveFromDocEventArgs_"></a> raise\_OnRemoved\(object, RemoveFromDocEventArgs\)

```csharp
public void raise_OnRemoved(object obj, RemoveFromDocEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)

### <a id="VM_Managed_LinkContainer_raise_OnUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnUpdate\(object, LinkEventArgs\)

```csharp
public void raise_OnUpdate(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_LinkContainer_raise_OnUpdating_System_Object_VM_Managed_LinkEventArgs_"></a> raise\_OnUpdating\(object, LinkEventArgs\)

```csharp
public void raise_OnUpdating(object objNotifier, LinkEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

### <a id="VM_Managed_LinkContainer_OnAdded"></a> OnAdded

Occurs when [on add].

```csharp
public event EventHandler<AddToDocEventArgs> OnAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[AddToDocEventArgs](VM.Managed.AddToDocEventArgs.md)\>

### <a id="VM_Managed_LinkContainer_OnDestroy"></a> OnDestroy

Occurs when [on destroy].

```csharp
public event EventHandler<LinkEventArgs> OnDestroy
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### <a id="VM_Managed_LinkContainer_OnDestroying"></a> OnDestroying

Occurs when [on destroy].

```csharp
public event EventHandler<LinkEventArgs> OnDestroying
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### <a id="VM_Managed_LinkContainer_OnRemoved"></a> OnRemoved

Occurs when [on remove].

```csharp
public event EventHandler<RemoveFromDocEventArgs> OnRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[RemoveFromDocEventArgs](VM.Managed.RemoveFromDocEventArgs.md)\>

### <a id="VM_Managed_LinkContainer_OnUpdate"></a> OnUpdate

Occurs when [on update].

```csharp
public event EventHandler<LinkEventArgs> OnUpdate
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

### <a id="VM_Managed_LinkContainer_OnUpdating"></a> OnUpdating

Occurs when [on update].

```csharp
public event EventHandler<LinkEventArgs> OnUpdating
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[LinkEventArgs](VM.Managed.LinkEventArgs.md)\>

