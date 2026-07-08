# Class GroundBodyProperty
<a id="VM_Managed_DAFUL_GroundBodyProperty"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the ground body property properties.

```csharp
public class GroundBodyProperty : BodyProperty, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, ICheckLinkForCircularReferenceBeforeDeserialize
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
[BodyPropertyBase](VM.Managed.DAFUL.BodyPropertyBase.md) ← 
[BodyProperty](VM.Managed.DAFUL.BodyProperty.md) ← 
[GroundBodyProperty](VM.Managed.DAFUL.GroundBodyProperty.md)

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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
ICheckLinkForCircularReferenceBeforeDeserialize

#### Inherited Members

[BodyProperty.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.BodyProperty.md\#VM\_Managed\_DAFUL\_BodyProperty\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BodyProperty.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.BodyProperty.md\#VM\_Managed\_DAFUL\_BodyProperty\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[BodyProperty.GeomUpdate\(GetRelationInfoEventArgs\)](VM.Managed.DAFUL.BodyProperty.md\#VM\_Managed\_DAFUL\_BodyProperty\_GeomUpdate\_VM\_Managed\_GetRelationInfoEventArgs\_), 
[BodyProperty.MassValue](VM.Managed.DAFUL.BodyProperty.md\#VM\_Managed\_DAFUL\_BodyProperty\_MassValue), 
[BodyProperty.MomentOfInertiaValue](VM.Managed.DAFUL.BodyProperty.md\#VM\_Managed\_DAFUL\_BodyProperty\_MomentOfInertiaValue), 
[BodyProperty.Mass](VM.Managed.DAFUL.BodyProperty.md\#VM\_Managed\_DAFUL\_BodyProperty\_Mass), 
[BodyProperty.MomentOfInertia](VM.Managed.DAFUL.BodyProperty.md\#VM\_Managed\_DAFUL\_BodyProperty\_MomentOfInertia), 
[BodyPropertyBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BodyPropertyBase.FindLocal\(string\)](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_FindLocal\_System\_String\_), 
[BodyPropertyBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[BodyPropertyBase.AddMarker\(Marker\)](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_AddMarker\_VM\_Managed\_DAFUL\_Marker\_), 
[BodyPropertyBase.OnDeserialization\(object\)](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_OnDeserialization\_System\_Object\_), 
[BodyPropertyBase.CenterMarker](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_CenterMarker), 
[BodyPropertyBase.Markers](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_Markers), 
[BodyPropertyBase.SymmetricManagers](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_SymmetricManagers), 
[BodyPropertyBase.InitVel](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_InitVel), 
[BodyPropertyBase.MassValue](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_MassValue), 
[BodyPropertyBase.MomentOfInertiaValue](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_MomentOfInertiaValue), 
[BodyPropertyBase.IsExternable](VM.Managed.DAFUL.BodyPropertyBase.md\#VM\_Managed\_DAFUL\_BodyPropertyBase\_IsExternable), 
[Property.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.Draw\(Canvas, TMatrix, TMatrix, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_GroundBodyProperty__ctor"></a> GroundBodyProperty\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GroundBodyProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GroundBodyProperty()
```

## Properties

### <a id="VM_Managed_DAFUL_GroundBodyProperty_Geom"></a> Geom

Gets or sets the geometry array.

```csharp
public Body[] Geom { get; set; }
```

#### Property Value

 Body\[\]

## Methods

### <a id="VM_Managed_DAFUL_GroundBodyProperty_AddGeom_VM_Managed_CAD_Body_"></a> AddGeom\(Body\)

Adds the geometry.

```csharp
public void AddGeom(Body body)
```

#### Parameters

`body` Body

The body.

### <a id="VM_Managed_DAFUL_GroundBodyProperty_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_GroundBodyProperty_GeomUpdate_VM_Managed_GetRelationInfoEventArgs_"></a> GeomUpdate\(GetRelationInfoEventArgs\)

Geoms the update.

```csharp
public override void GeomUpdate(GetRelationInfoEventArgs arg)
```

#### Parameters

`arg` GetRelationInfoEventArgs

The <xref href="VM.Managed.GetRelationInfoEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GroundBodyProperty_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

The unnamed object.

#### Returns

 string

The unnamed object name.

### <a id="VM_Managed_DAFUL_GroundBodyProperty_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GroundBodyProperty_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GroundBodyProperty_RemoveGeom_VM_Managed_CAD_Body_"></a> RemoveGeom\(Body\)

Removes the geometry.

```csharp
public bool RemoveGeom(Body body)
```

#### Parameters

`body` Body

The body.

#### Returns

 bool

Indicates whether this is a success or a fail.

