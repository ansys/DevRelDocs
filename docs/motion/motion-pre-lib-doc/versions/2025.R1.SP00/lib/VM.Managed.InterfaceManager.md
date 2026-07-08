#  Class InterfaceManager

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This interface is to represent interface manager.

```csharp
public class InterfaceManager : Object<ObjectEventCore>, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[InterfaceManager](VM.Managed.InterfaceManager.md)

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
IAttributeContainer

#### Inherited Members

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

### <a id="VM_Managed_InterfaceManager__ctor"></a> InterfaceManager\(\)

Initializes a new instance of the <xref href="VM.Managed.InterfaceManager" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InterfaceManager()
```

### <a id="VM_Managed_InterfaceManager__ctor_VM_Managed_InterfaceManager_"></a> InterfaceManager\(InterfaceManager\)

Initializes a new instance of the <xref href="VM.Managed.InterfaceManager" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InterfaceManager(InterfaceManager itfMgr)
```

#### Parameters

`itfMgr` [InterfaceManager](VM.Managed.InterfaceManager.md)

The itf MGR.

## Properties

### <a id="VM_Managed_InterfaceManager_InterfaceInfos"></a> InterfaceInfos

Gets or sets the interface info.

```csharp
protected List<InterfaceManager.InterfaceInfo> InterfaceInfos { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[InterfaceManager](VM.Managed.InterfaceManager.md).[InterfaceInfo](VM.Managed.InterfaceManager.InterfaceInfo.md)\>

### <a id="VM_Managed_InterfaceManager_Interfaces"></a> Interfaces

Gets or sets the interfaces.

```csharp
public IInterface[] Interfaces { get; set; }
```

#### Property Value

 [IInterface](VM.Managed.IInterface.md)\[\]

### <a id="VM_Managed_InterfaceManager_IsExternable"></a> IsExternable

Gets a value indicating whether this instance is externable.

```csharp
public override bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_InterfaceManager_Add_VM_Managed_IInterface_"></a> Add\(IInterface\)

Adds the specified itf.

```csharp
protected virtual void Add(IInterface itf)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The itf.

### <a id="VM_Managed_InterfaceManager_AddInterface_VM_Managed_IInterface_"></a> AddInterface\(IInterface\)

Adds the interface to interface manager.

```csharp
public void AddInterface(IInterface itf)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The interface.

### <a id="VM_Managed_InterfaceManager_GetInterfaceNames_VM_Managed_IInterface_"></a> GetInterfaceNames\(IInterface\)

Gets the interface names.

```csharp
public List<string> GetInterfaceNames(IInterface itf)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The interface.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The name container

### <a id="VM_Managed_InterfaceManager_GetInterfaceNames_System_String_"></a> GetInterfaceNames\(string\)

Gets the interface names.

```csharp
public List<string> GetInterfaceNames(string strFullName)
```

#### Parameters

`strFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The full name of the interface.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The name container

### <a id="VM_Managed_InterfaceManager_GetNumInterfaceObject"></a> GetNumInterfaceObject\(\)

Gets the number of interface object.

```csharp
public int GetNumInterfaceObject()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

number of interface object

### <a id="VM_Managed_InterfaceManager_IsInterface_VM_Managed_IInterface_"></a> IsInterface\(IInterface\)

Determines whether the specified interface is interface.

```csharp
public bool IsInterface(IInterface itf)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The interface.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified interface is interface; otherwise, <code>false</code>.

### <a id="VM_Managed_InterfaceManager_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_InterfaceManager_MakeXml_System_Object_"></a> MakeXml\(object\)

Makes the interface information.

```csharp
protected string MakeXml(object ob)
```

#### Parameters

`ob` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface information

### <a id="VM_Managed_InterfaceManager_RemoveInterface_VM_Managed_IInterface_"></a> RemoveInterface\(IInterface\)

Removes the interface to interface manager.

```csharp
public virtual void RemoveInterface(IInterface itf)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The interface.

### <a id="VM_Managed_InterfaceManager_SetInterfaceNames_VM_Managed_IInterface_System_Collections_Generic_ICollection_System_String__"></a> SetInterfaceNames\(IInterface, ICollection<string\>\)

Sets the interface names.

```csharp
public void SetInterfaceNames(IInterface itf, ICollection<string> strList)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The itf.

`strList` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The STR list.

### <a id="VM_Managed_InterfaceManager_SetInterfaceNames_VM_Managed_IInterface_System_ArraySegment_System_String__"></a> SetInterfaceNames\(IInterface, ArraySegment<string\>\)

Sets the interface names.

```csharp
public void SetInterfaceNames(IInterface itf, ArraySegment<string> strList)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The itf.

`strList` [ArraySegment](https://learn.microsoft.com/dotnet/api/system.arraysegment\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The STR list.

