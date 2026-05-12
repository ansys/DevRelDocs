#  Class SwitchableBody

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the switchable body.

```csharp
public class SwitchableBody : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IMarkerCreatable, IConnectable, IMarkerParent, IEntityRelation, IHasBody, ITemplateObject, IArgument, IContainer, ILinkContainer, IOwned, IHasID, IReferencable, IInterface, IMultiChangable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[SwitchableBody](VM.Managed.DAFUL.SwitchableBody.md)

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
[IMarkerCreatable](VM.Managed.DAFUL.IMarkerCreatable.md), 
[IConnectable](VM.Managed.DAFUL.IConnectable.md), 
[IMarkerParent](VM.Managed.DAFUL.IMarkerParent.md), 
IEntityRelation, 
IHasBody, 
ITemplateObject, 
IArgument, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IReferencable, 
IInterface, 
IMultiChangable

#### Inherited Members

SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
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

### <a id="VM_Managed_DAFUL_SwitchableBody__ctor"></a> SwitchableBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SwitchableBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SwitchableBody()
```

### <a id="VM_Managed_DAFUL_SwitchableBody__ctor_System_String_"></a> SwitchableBody\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SwitchableBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SwitchableBody(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Properties

### <a id="VM_Managed_DAFUL_SwitchableBody_ActiveConnectableObject"></a> ActiveConnectableObject

Gets or sets the active connectable object.

```csharp
public IConnectable ActiveConnectableObject { get; set; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_SwitchableBody_ActiveConnectableObjectName"></a> ActiveConnectableObjectName

Gets or sets the name of the active connectable object.

```csharp
public string ActiveConnectableObjectName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SwitchableBody_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_SwitchableBody_Body"></a> Body

Gets the body.

```csharp
public IBody Body { get; }
```

#### Property Value

 IBody

### <a id="VM_Managed_DAFUL_SwitchableBody_ConnectableBody"></a> ConnectableBody

Gets the connectable body.

```csharp
public ObjectBase ConnectableBody { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_SwitchableBody_ConnectableFullName"></a> ConnectableFullName

Gets the full name of the connectable.

```csharp
public string ConnectableFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SwitchableBody_ConnectableName"></a> ConnectableName

Gets the name of the connectable.

```csharp
public string ConnectableName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SwitchableBody_ConnectableObjectNames"></a> ConnectableObjectNames

Gets or sets the connectable object names.

```csharp
public string[] ConnectableObjectNames { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_SwitchableBody_ConnectablePosition"></a> ConnectablePosition

Sets the connectable position.

```csharp
public Vector ConnectablePosition { set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_SwitchableBody_ConnectablePostfixName"></a> ConnectablePostfixName

Sets the postfix name of the connectable.

```csharp
public string ConnectablePostfixName { set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SwitchableBody_Connectors"></a> Connectors

Gets or sets the connectors.

```csharp
public IConnectable[] Connectors { get; set; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)\[\]

### <a id="VM_Managed_DAFUL_SwitchableBody_Markers"></a> Markers

Gets or sets marker dictionary.

```csharp
public NamedObjectDictionary<Marker> Markers { get; set; }
```

#### Property Value

 NamedObjectDictionary<[Marker](VM.Managed.DAFUL.Marker.md)\>

### <a id="VM_Managed_DAFUL_SwitchableBody_ParentType"></a> ParentType

Gets the type of the marker's parent.

```csharp
public MarkerParentType ParentType { get; }
```

#### Property Value

 [MarkerParentType](VM.Managed.DAFUL.MarkerParentType.md)

### <a id="VM_Managed_DAFUL_SwitchableBody_ReferenceFrameType"></a> ReferenceFrameType

Gets the type of the marker's reference frame.

```csharp
public MarkerReferenceFrameType ReferenceFrameType { get; }
```

#### Property Value

 [MarkerReferenceFrameType](VM.Managed.DAFUL.MarkerReferenceFrameType.md)

### <a id="VM_Managed_DAFUL_SwitchableBody_ReferenceType"></a> ReferenceType

Gets the type of the array for argument.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_SwitchableBody_SymmetricManagers"></a> SymmetricManagers

Gets or sets the symmetric manager dictionary.

```csharp
public NamedObjectDictionary<SymmetricManager> SymmetricManagers { get; set; }
```

#### Property Value

 NamedObjectDictionary<SymmetricManager\>

## Methods

### <a id="VM_Managed_DAFUL_SwitchableBody_AddConnectableObject_VM_Managed_DAFUL_IConnectable_"></a> AddConnectableObject\(IConnectable\)

Adds the connectable object.

```csharp
public void AddConnectableObject(IConnectable ic)
```

#### Parameters

`ic` [IConnectable](VM.Managed.DAFUL.IConnectable.md)

The connectable object.

### <a id="VM_Managed_DAFUL_SwitchableBody_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SwitchableBody_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SwitchableBody_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_SwitchableBody_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_SwitchableBody_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_SwitchableBody_RemoveConnectableObject_VM_Managed_DAFUL_IConnectable_"></a> RemoveConnectableObject\(IConnectable\)

Removes the connectable object.

```csharp
public bool RemoveConnectableObject(IConnectable ic)
```

#### Parameters

`ic` [IConnectable](VM.Managed.DAFUL.IConnectable.md)

The connectable object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

