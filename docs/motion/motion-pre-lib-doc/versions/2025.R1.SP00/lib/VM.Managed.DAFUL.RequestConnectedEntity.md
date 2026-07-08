#  Class RequestConnectedEntity

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

This class is to represent the connected entity request.

```csharp
public class RequestConnectedEntity : RequestBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IMultiChangable, IRequestEntity
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[RequestBase](VM.Managed.DAFUL.RequestBase.md) ← 
[RequestConnectedEntity](VM.Managed.DAFUL.RequestConnectedEntity.md)

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
IMultiChangable, 
IRequestEntity

#### Inherited Members

[RequestBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.RequestBase.md\#VM\_Managed\_DAFUL\_RequestBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[RequestBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.RequestBase.md\#VM\_Managed\_DAFUL\_RequestBase\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[RequestBase.AddNavigatorInfo\(XmlDocument, XmlElement, string, ObjectBase, string, bool\)](VM.Managed.DAFUL.RequestBase.md\#VM\_Managed\_DAFUL\_RequestBase\_AddNavigatorInfo\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_String\_VM\_Managed\_ObjectBase\_System\_String\_System\_Boolean\_), 
[RequestBase.AddNavigatorInfoForRequestEntity\(XmlDocument, XmlElement, string, ObjectBase, string, bool\)](VM.Managed.DAFUL.RequestBase.md\#VM\_Managed\_DAFUL\_RequestBase\_AddNavigatorInfoForRequestEntity\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_String\_VM\_Managed\_ObjectBase\_System\_String\_System\_Boolean\_), 
[RequestBase.FixUp\(ObjectBase\)](VM.Managed.DAFUL.RequestBase.md\#VM\_Managed\_DAFUL\_RequestBase\_FixUp\_VM\_Managed\_ObjectBase\_), 
[RequestBase.ActionEntity](VM.Managed.DAFUL.RequestBase.md\#VM\_Managed\_DAFUL\_RequestBase\_ActionEntity), 
[RequestBase.NavigatorEntityName](VM.Managed.DAFUL.RequestBase.md\#VM\_Managed\_DAFUL\_RequestBase\_NavigatorEntityName), 
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

### <a id="VM_Managed_DAFUL_RequestConnectedEntity__ctor"></a> RequestConnectedEntity\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.RequestConnectedEntity" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RequestConnectedEntity()
```

### <a id="VM_Managed_DAFUL_RequestConnectedEntity__ctor_System_String_"></a> RequestConnectedEntity\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.RequestConnectedEntity" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RequestConnectedEntity(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the sub entity.

## Properties

### <a id="VM_Managed_DAFUL_RequestConnectedEntity_NavigatorEntityName"></a> NavigatorEntityName

```csharp
protected override string NavigatorEntityName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_RequestConnectedEntity_WriteToOutFile"></a> WriteToOutFile

Gets or sets the [Write to out file] flag.

```csharp
public bool WriteToOutFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_RequestConnectedEntity_AddNavigatorInfo_System_Xml_XmlDocument_System_Xml_XmlElement_System_String_VM_Managed_ObjectBase_System_String_System_Boolean_"></a> AddNavigatorInfo\(XmlDocument, XmlElement, string, ObjectBase, string, bool\)

Gets the object information for Add Navigator

```csharp
protected override void AddNavigatorInfo(XmlDocument xmlDom, XmlElement xmlEle, string strGroupName, ObjectBase obj, string strType, bool bAddMarker)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`strGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Group Name

`obj` ObjectBase

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bAddMarker` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_RequestConnectedEntity_EntityFiltering_System_Object_VM_Managed_Picker_Core_FilterArgs_"></a> EntityFiltering\(object, FilterArgs\)

Entity filtering function

```csharp
public static void EntityFiltering(object sender, FilterArgs args)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender

`args` FilterArgs

The argument

### <a id="VM_Managed_DAFUL_RequestConnectedEntity_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

