#  Class PropertyGeneralContact

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the General contact properties.

```csharp
public class PropertyGeneralContact : PropertyContact3D, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyContact](VM.Managed.DAFUL.Contact.PropertyContact.md) ← 
[PropertyContact3D](VM.Managed.DAFUL.Contact.PropertyContact3D.md) ← 
[PropertyGeneralContact](VM.Managed.DAFUL.Contact.PropertyGeneralContact.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

[PropertyContact3D.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[PropertyContact3D.LoadOldVersion\(bool\)](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_LoadOldVersion\_System\_Boolean\_), 
[PropertyContact3D.OnDeserialization\(object\)](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_OnDeserialization\_System\_Object\_), 
[PropertyContact3D.UseNodeOnlyOption](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_UseNodeOnlyOption), 
[PropertyContact3D.CrossCheck](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_CrossCheck), 
[PropertyContact3D.PointCheck](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_PointCheck), 
[PropertyContact3D.UseInternalPointFactor](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_UseInternalPointFactor), 
[PropertyContact3D.InternalPointFactor](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_InternalPointFactor), 
[PropertyContact3D.UseSlidingOnlyOption](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_UseSlidingOnlyOption), 
[PropertyContact3D.UseLimitIncrementInNR](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_UseLimitIncrementInNR), 
[PropertyContact3D.LimitIncrementInNR](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_LimitIncrementInNR), 
[PropertyContact3D.UseIncrementTime](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_UseIncrementTime), 
[PropertyContact3D.IncrementTime](VM.Managed.DAFUL.Contact.PropertyContact3D.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact3D\_IncrementTime), 
[PropertyContact.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[PropertyContact.Function](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_Function), 
[PropertyContact.IsBaseGeometryFrontDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsBaseGeometryFrontDirection), 
[PropertyContact.IsActionGeometryFrontDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsActionGeometryFrontDirection), 
[PropertyContact.IsBaseGeometryDisplayNormalDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsBaseGeometryDisplayNormalDirection), 
[PropertyContact.IsActionGeometryDisplayNormalDirection](VM.Managed.DAFUL.Contact.PropertyContact.md\#VM\_Managed\_DAFUL\_Contact\_PropertyContact\_IsActionGeometryDisplayNormalDirection), 
Property.Initialize\(Unit.ConvertFactor\), 
Property.PropertyRequestUpdate\(object, LinkEventArgs\), 
Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
Property.GetUnnamedObjectName\(object\), 
Property.FindLocal\(string\), 
Property.Draw\(Canvas, TMatrix, TMatrix, bool\), 
ContainerObject<PropertyEventCore\>.Find\(string\), 
ContainerObject<PropertyEventCore\>.FindLocal\(string\), 
ContainerObject<PropertyEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<PropertyEventCore\>.GetKey\(\), 
Object<PropertyEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<PropertyEventCore\>.SetIconColor\(Canvas\), 
Object<PropertyEventCore\>.OnDeserialization\(object\), 
Object<PropertyEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<PropertyEventCore\>.RollbackEvent\(\), 
Object<PropertyEventCore\>.OnDeserializedCore\(object\), 
Object<PropertyEventCore\>.Key, 
Object<PropertyEventCore\>.UntypedEventCore, 
Object<PropertyEventCore\>.EventCore, 
Object<PropertyEventCore\>.Attributes, 
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

### <a id="VM_Managed_DAFUL_Contact_PropertyGeneralContact__ctor"></a> PropertyGeneralContact\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.PropertyGeneralContact" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyGeneralContact()
```

## Properties

### <a id="VM_Managed_DAFUL_Contact_PropertyGeneralContact_TypeOfContact"></a> TypeOfContact

<p>Gets and sets the type of contact.</p>
<p>
        Type : VM.Managed.DAFUL.Contact.ContactType
        LinkRequestUpdate 시 처리 : N/A
        LinkRequestDestroy 시 처리 :
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Contact Type
        Control Type : ComboBox
        ToolTip : N/A
        Error Message : N/A
        Category : Characteristic
        Category Index : 1
        변경 시 DFS 재생성 여부 : No
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public PropertyGeneralContact.ContactType TypeOfContact { get; set; }
```

#### Property Value

 [PropertyGeneralContact](VM.Managed.DAFUL.Contact.PropertyGeneralContact.md).[ContactType](VM.Managed.DAFUL.Contact.PropertyGeneralContact.ContactType.md)

## Methods

### <a id="VM_Managed_DAFUL_Contact_PropertyGeneralContact_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Contact_PropertyGeneralContact_LoadOldVersion_System_Boolean_"></a> LoadOldVersion\(bool\)

Execute when load old version (lower and equal 6.1).

```csharp
public override PropertyContact3D.PointCheckType LoadOldVersion(bool bCrossCheck)
```

#### Parameters

`bCrossCheck` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The cross check flag.

#### Returns

 [PropertyContact3D](VM.Managed.DAFUL.Contact.PropertyContact3D.md).[PointCheckType](VM.Managed.DAFUL.Contact.PropertyContact3D.PointCheckType.md)

