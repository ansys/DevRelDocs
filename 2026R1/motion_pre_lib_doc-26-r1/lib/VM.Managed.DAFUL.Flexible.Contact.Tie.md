#  Class Tie

Namespace: [VM.Managed.DAFUL.Flexible.Contact](VM.Managed.DAFUL.Flexible.Contact.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the tie.</p>
<p>이 클래스는 타이를 나타냅니다.</p>
<p>
        Symmetric Modeling : No
        Reference : Yes
        Reference Type : VM.Managed.Reference
        삭제시 Reservable한 Link 변수 : N/A
        Generic Collection에 담겨있는 Link 변수 : N/A
        </p>

```csharp
public class Tie : TieBase<PropertyTie>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IDrawChangeFacet, IEntityRelation, IGenerable, IReportable, IFlip, IHasReplaceableEntity, IArgument
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyTie\> ← 
[TieBase<PropertyTie\>](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md) ← 
[Tie](VM.Managed.DAFUL.Flexible.Contact.Tie.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
IEntity, 
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
IVisible, 
IDocumentOwner, 
INamed, 
INavigatorItem, 
IVisible, 
IMultiChangable, 
IHasProperty, 
IGroup, 
IDraw, 
IDrawIcon, 
IDrawChangeFacet, 
IEntityRelation, 
IGenerable, 
IReportable, 
IFlip, 
IHasReplaceableEntity, 
IArgument

#### Inherited Members

[TieBase<PropertyTie\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[TieBase<PropertyTie\>.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_GetUnnamedObjectName\_System\_Object\_), 
[TieBase<PropertyTie\>.FindLocal\(string\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_FindLocal\_System\_String\_), 
[TieBase<PropertyTie\>.OnDeserialization\(object\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_OnDeserialization\_System\_Object\_), 
[TieBase<PropertyTie\>.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[TieBase<PropertyTie\>.Draw\(Canvas\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[TieBase<PropertyTie\>.ReDraw\(\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_ReDraw), 
[TieBase<PropertyTie\>.ReplaceEntityImpl\(Document, IGenerable\)](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_ReplaceEntityImpl\_VM\_Managed\_Document\_VM\_Managed\_IGenerable\_), 
[TieBase<PropertyTie\>.BaseGeom](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_BaseGeom), 
[TieBase<PropertyTie\>.ActionGeom](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_ActionGeom), 
[TieBase<PropertyTie\>.NameOfBaseBody](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_NameOfBaseBody), 
[TieBase<PropertyTie\>.NameOfActionBody](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_NameOfActionBody), 
[TieBase<PropertyTie\>.HasLayerExplicitly](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_HasLayerExplicitly), 
[TieBase<PropertyTie\>.Hide](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_Hide), 
[TieBase<PropertyTie\>.GenerableImpl](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_GenerableImpl), 
[TieBase<PropertyTie\>.CanSwitchImpl](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md\#VM\_Managed\_DAFUL\_Flexible\_Contact\_TieBase\_1\_CanSwitchImpl), 
Entity<PropertyTie\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyTie\>.GetUnnamedObjectName\(object\), 
Entity<PropertyTie\>.FindLocal\(string\), 
Entity<PropertyTie\>.Property, 
EntityBase.Initialize\(Unit.ConvertFactor\), 
EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\), 
EntityBase.OnDeserializationForAttribute\(\), 
EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
EntityBase.LinkRequestDestroying\(object, LinkEventArgs\), 
EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
EntityBase.FixUp\(ObjectBase\), 
EntityBase.FindLocal\(string\), 
EntityBase.WriteTemplateImpl\(XmlWriter\), 
EntityBase.ReadTemplateImpl\(XmlReader\), 
EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
EntityBase.OnDeserialization\(object\), 
EntityBase.Name, 
EntityBase.FullName, 
EntityBase.NonSymmetricName, 
EntityBase.DisplayName, 
EntityBase.IsEnabled, 
EntityBase.Comment, 
EntityBase.HasLayerExplicitly, 
EntityBase.UntypedProperty, 
EntityBase.IsFileProperty, 
EntityBase.Layer, 
EntityBase.IsVisible, 
ContainerObject<EntityEventCore\>.Find\(string\), 
ContainerObject<EntityEventCore\>.FindLocal\(string\), 
ContainerObject<EntityEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<EntityEventCore\>.GetKey\(\), 
Object<EntityEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<EntityEventCore\>.SetIconColor\(Canvas\), 
Object<EntityEventCore\>.OnDeserialization\(object\), 
Object<EntityEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<EntityEventCore\>.RollbackEvent\(\), 
Object<EntityEventCore\>.OnDeserializedCore\(object\), 
Object<EntityEventCore\>.Key, 
Object<EntityEventCore\>.UntypedEventCore, 
Object<EntityEventCore\>.EventCore, 
Object<EntityEventCore\>.Attributes, 
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

### <a id="VM_Managed_DAFUL_Flexible_Contact_Tie__ctor"></a> Tie\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Contact.Tie" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Contact.Tie" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public Tie()
```

### <a id="VM_Managed_DAFUL_Flexible_Contact_Tie__ctor_System_String_"></a> Tie\(string\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Contact.Tie" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Contact.Tie" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public Tie(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

<p>Name of the STR.</p>
<p>이름</p>

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Contact_Tie_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_Flexible_Contact_Tie_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Contact_Tie_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

if set to <code>true</code> the tie has child.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Flexible_Contact_Tie_InitializeEvent_VM_Managed_Document3D_"></a> InitializeEvent\(Document3D\)

<p>Initializes event.</p>
<p>로드시 예전 데이터를 새로운 데이터로 이전합니다.</p>

```csharp
public static void InitializeEvent(Document3D doc)
```

#### Parameters

`doc` Document3D

