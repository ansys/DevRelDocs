# <a id="VM_Managed_DAFUL_CoSim_CoSimBase"></a> Class CoSimBase

Namespace: [VM.Managed.DAFUL.CoSim](VM.Managed.DAFUL.CoSim.md)  
Assembly: VMDCoSimCore.dll  

The base class for all CoSim related classes

```csharp
[CanNotOpenWithNewPreprocessor]
public abstract class CoSimBase : Object<ObjectEventCore>, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, IEnabled, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[CoSimBase](VM.Managed.DAFUL.CoSim.CoSimBase.md)

#### Derived

[CoSimSettingsBase](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md)

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
INamed, 
IEnabled, 
INavigatorItem

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

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase__ctor"></a> CoSimBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected CoSimBase()
```

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase__ctor_System_String_System_String_"></a> CoSimBase\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected CoSimBase(string strProxyName, string strBuildInfo)
```

#### Parameters

`strProxyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR proxy.

`strBuildInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR build info.

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase__ctor_System_String_"></a> CoSimBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected CoSimBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Properties

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_Comment"></a> Comment

Gets or sets the comment.

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_FullName"></a> FullName

Gets the object full name.

```csharp
public string FullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_IsEnabled"></a> IsEnabled

Gets or sets a value indicating whether this is enabled.

```csharp
public bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_Name"></a> Name

Gets or sets the object name.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_NonSymmetricName"></a> NonSymmetricName

Gets the non-symmetric object name.

```csharp
public string NonSymmetricName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

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

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the model navigator information impl.

```csharp
protected virtual bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML DOM.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XML ele.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_CoSim_CoSimBase_SetOldNameWithNewEntity_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)

Change for the new name.

```csharp
public override sealed void SetOldNameWithNewEntity(ObjectBase obNew, ObjectBase obOld)
```

#### Parameters

`obNew` ObjectBase

The new object.

`obOld` ObjectBase

The old object.

