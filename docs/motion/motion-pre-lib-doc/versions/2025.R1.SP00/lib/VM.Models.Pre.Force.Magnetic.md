#  Class Magnetic

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

Magnetic force

```csharp
public class Magnetic : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IReportable, IMultiChangable, ILinkOwner, ILinkUpdateOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[Magnetic](VM.Models.Pre.Force.Magnetic.md)

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
IReportable, 
IMultiChangable, 
ILinkOwner, 
ILinkUpdateOwner

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

### <a id="VM_Models_Pre_Force_Magnetic__ctor"></a> Magnetic\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Magnetic" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Magnetic()
```

### <a id="VM_Models_Pre_Force_Magnetic__ctor_System_String_"></a> Magnetic\(string\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Magnetic" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Magnetic(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

## Fields

### <a id="VM_Models_Pre_Force_Magnetic___a__a_VM_Models_Pre_LinkAttribute"></a> \_\_a$\_a\_VM.Models.Pre.LinkAttribute

```csharp
protected LinkAttribute __a$_a_VM.Models.Pre.LinkAttribute
```

#### Field Value

 LinkAttribute

### <a id="VM_Models_Pre_Force_Magnetic___a__a_VM_Models_Pre_LinkUpdateAttribute"></a> \_\_a$\_a\_VM.Models.Pre.LinkUpdateAttribute

```csharp
protected LinkUpdateAttribute __a$_a_VM.Models.Pre.LinkUpdateAttribute
```

#### Field Value

 LinkUpdateAttribute

## Properties

### <a id="VM_Models_Pre_Force_Magnetic_Criterion"></a> Criterion

Gets or sets the criterion.

```csharp
public ExpressionValueVariable Criterion { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Magnetic_DesignName"></a> DesignName

Gets or sets the design name.

```csharp
public string DesignName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_Magnetic_GroupInformations"></a> GroupInformations

Gets or sets the path data.

```csharp
public Magnetic.GroupInformation[] GroupInformations { get; set; }
```

#### Property Value

 [Magnetic](VM.Models.Pre.Force.Magnetic.md).[GroupInformation](VM.Models.Pre.Force.Magnetic.GroupInformation.md)\[\]

### <a id="VM_Models_Pre_Force_Magnetic_InterfaceStepFactor"></a> InterfaceStepFactor

Gets or sets the interface step factor.

```csharp
public CompositeFieldUsable InterfaceStepFactor { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Models_Pre_Force_Magnetic_MeasurementType"></a> MeasurementType

Gets or sets the measurement type.

```csharp
public MeasurementType MeasurementType { get; set; }
```

#### Property Value

 [MeasurementType](VM.Models.Pre.Force.MeasurementType.md)

### <a id="VM_Models_Pre_Force_Magnetic_ProjectRelativeFilePath"></a> ProjectRelativeFilePath

Gets or sets the project relative file path.

```csharp
public string ProjectRelativeFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_Magnetic_StopAutomatically"></a> StopAutomatically

Gets or sets the stop automatically flag.

```csharp
public bool StopAutomatically { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Pre_Force_Magnetic_AddGroupInformation_VM_Managed_DAFUL_Group_"></a> AddGroupInformation\(Group\)

Add group information.

```csharp
public void AddGroupInformation(Group group)
```

#### Parameters

`group` Group

The group

### <a id="VM_Models_Pre_Force_Magnetic_AddGroupInformation_VM_Managed_DAFUL_Group_VM_Managed_IMarker_"></a> AddGroupInformation\(Group, IMarker\)

Add group information.

```csharp
public void AddGroupInformation(Group group, IMarker marker)
```

#### Parameters

`group` Group

The group

`marker` IMarker

The marker

### <a id="VM_Models_Pre_Force_Magnetic_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase objectBase)
```

#### Parameters

`objectBase` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Models_Pre_Force_Magnetic_GetDefaultMarkerInGroup_VM_Managed_DAFUL_Group_"></a> GetDefaultMarkerInGroup\(Group\)

Gets default marker in group

```csharp
public static IMarker GetDefaultMarkerInGroup(Group group)
```

#### Parameters

`group` Group

The group

#### Returns

 IMarker

The marker

### <a id="VM_Models_Pre_Force_Magnetic_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

### <a id="VM_Models_Pre_Force_Magnetic_GetTransformInGroup_VM_Managed_IMarker_VM_Managed_DAFUL_Group_"></a> GetTransformInGroup\(IMarker, Group\)

Getst transform in group.

```csharp
public static TMatrix GetTransformInGroup(IMarker marker, Group group)
```

#### Parameters

`marker` IMarker

The marker

`group` Group

The group

#### Returns

 TMatrix

The marker transform

### <a id="VM_Models_Pre_Force_Magnetic_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Models_Pre_Force_Magnetic_OnLinkReserved_VM_Managed_ILink_System_Object_System_EventArgs_"></a> OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected override void OnLinkReserved(ILink reserved, object objNotifier, EventArgs args)
```

#### Parameters

`reserved` ILink

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

