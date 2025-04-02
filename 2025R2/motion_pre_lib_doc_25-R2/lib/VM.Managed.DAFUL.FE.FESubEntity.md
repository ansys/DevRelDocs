#  Class FESubEntity

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This base class is to represent the FE sub-entity.

```csharp
public abstract class FESubEntity : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IFEObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[FESubEntity](VM.Managed.DAFUL.FE.FESubEntity.md)

#### Derived

[FMass](VM.Managed.DAFUL.FE.FMass.md), 
[FMassBase](VM.Managed.DAFUL.FE.FMassBase.md), 
[FRBE](VM.Managed.DAFUL.FE.FRBE.md), 
[Mode](VM.Managed.DAFUL.FE.Mode.md), 
[ModeInterfacePoint](VM.Managed.DAFUL.FE.ModeInterfacePoint.md), 
[ModeMasterPoint](VM.Managed.DAFUL.FE.ModeMasterPoint.md), 
[PropertyBase](VM.Managed.DAFUL.FE.Property.PropertyBase.md), 
[SetBase](VM.Managed.DAFUL.FE.SetBase.md)

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
[IFEObject](VM.Managed.DAFUL.FE.IFEObject.md)

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

### <a id="VM_Managed_DAFUL_FE_FESubEntity__ctor_System_String_System_String_System_String_"></a> FESubEntity\(string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.FESubEntity" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected FESubEntity(string strName, string strProxyName, string strBuildInfo)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the FE sub entity.

`strProxyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the proxy.

`strBuildInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The build information.

### <a id="VM_Managed_DAFUL_FE_FESubEntity__ctor_System_String_System_String_"></a> FESubEntity\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.FESubEntity" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected FESubEntity(string strProxyName, string strBuildInfo)
```

#### Parameters

`strProxyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the proxy.

`strBuildInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The build information.

### <a id="VM_Managed_DAFUL_FE_FESubEntity__ctor_System_String_"></a> FESubEntity\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.FESubEntity" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected FESubEntity(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the FE sub entity.

### <a id="VM_Managed_DAFUL_FE_FESubEntity__ctor"></a> FESubEntity\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.FESubEntity" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected FESubEntity()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_FESubEntity_FEID"></a> FEID

Gets or sets the ID.

```csharp
public uint FEID { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_FESubEntity_OwnerMesh"></a> OwnerMesh

Gets the owner mesh.

```csharp
public Mesh OwnerMesh { get; }
```

#### Property Value

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

## Methods

### <a id="VM_Managed_DAFUL_FE_FESubEntity_GetNodalBodyForReference_VM_Managed_Reference_VM_Managed_DAFUL_FE_Mesh_"></a> GetNodalBodyForReference\(Reference, Mesh\)

Get nodal body from referece object.

```csharp
public static ObjectBase GetNodalBodyForReference(Reference refer, Mesh mesh)
```

#### Parameters

`refer` Reference

The reference object.

`mesh` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The mesh.

#### Returns

 ObjectBase

The nodal body.

### <a id="VM_Managed_DAFUL_FE_FESubEntity_GetNodalBodyForSubsystem_VM_Managed_DAFUL_SubSystem_VM_Managed_DAFUL_FE_Mesh_"></a> GetNodalBodyForSubsystem\(SubSystem, Mesh\)

Get nodal body from subsystem and mesh.

```csharp
public static ObjectBase GetNodalBodyForSubsystem(SubSystem subsystem, Mesh mesh)
```

#### Parameters

`subsystem` SubSystem

The sub system.

`mesh` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The mesh.

#### Returns

 ObjectBase

The nodal body.

