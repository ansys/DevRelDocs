# Class ChainedPlacing
<a id="VM_Managed_DAFUL_Chained_ChainedPlacing"></a>

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

The class defines all data for construction chained system.

```csharp
public class ChainedPlacing : ChainedPlacingBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, IEnabled, INavigatorItem, IHasPlacing, IReportable, IPostOpenDocumentForChainedSystem
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[ChainedPlacingBase](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md) ← 
[ChainedPlacing](VM.Managed.DAFUL.Chained.ChainedPlacing.md)

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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
INamed, 
IEnabled, 
INavigatorItem, 
IHasPlacing, 
IReportable, 
IPostOpenDocumentForChainedSystem

#### Inherited Members

[ChainedPlacingBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[ChainedPlacingBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_SetOldNameWithNewEntity\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[ChainedPlacingBase.FixUp\(ObjectBase\)](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_FixUp\_VM\_Managed\_ObjectBase\_), 
[ChainedPlacingBase.FullName](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_FullName), 
[ChainedPlacingBase.Name](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_Name), 
[ChainedPlacingBase.NonSymmetricName](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_NonSymmetricName), 
[ChainedPlacingBase.IsEnabled](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_IsEnabled), 
[ChainedPlacingBase.Comment](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_Comment), 
[ChainedPlacingBase.Paths](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md\#VM\_Managed\_DAFUL\_Chained\_ChainedPlacingBase\_Paths), 
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

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing__ctor"></a> ChainedPlacing\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ChainedPlacing()
```

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing__ctor_System_String_"></a> ChainedPlacing\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ChainedPlacing(string strName)
```

#### Parameters

`strName` string

Name of the <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref> class.

## Fields

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_m_Placing"></a> m\_Placing

This is the position data for construction chained system.

```csharp
protected Child<Placing, ObjectBase.Update> m_Placing
```

#### Field Value

 Child<[Placing](VM.Managed.DAFUL.Chained.Placing.md), ObjectBase.Update\>

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_m_dicConnectors"></a> m\_dicConnectors

This is connector dictionary.

```csharp
protected Child<NamedObjectDictionary<ChainedObject>, ObjectBase.Update> m_dicConnectors
```

#### Field Value

 Child<[NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[ChainedObject](VM.Managed.DAFUL.Chained.ChainedObject.md)\>, ObjectBase.Update\>

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_m_dicContacts"></a> m\_dicContacts

This is contact dictionary.

```csharp
protected Child<NamedObjectDictionary<ChainedObject>, ObjectBase.Update> m_dicContacts
```

#### Field Value

 Child<[NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[ChainedObject](VM.Managed.DAFUL.Chained.ChainedObject.md)\>, ObjectBase.Update\>

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_m_dicMtoNContacts"></a> m\_dicMtoNContacts

This is contact dictionary.

```csharp
protected Child<NamedObjectDictionary<ChainedObject>, ObjectBase.Update> m_dicMtoNContacts
```

#### Field Value

 Child<[NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[ChainedObject](VM.Managed.DAFUL.Chained.ChainedObject.md)\>, ObjectBase.Update\>

## Properties

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_BearingFrictionLossList"></a> BearingFrictionLossList

Gets or sets the bearing friction loss list.

```csharp
public BearingFrictionLoss[] BearingFrictionLossList { get; set; }
```

#### Property Value

 [BearingFrictionLoss](VM.Managed.DAFUL.Chained.BearingFrictionLoss.md)\[\]

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_Connectors"></a> Connectors

Gets or sets connector dictionary.

```csharp
public NamedObjectDictionary<ChainedObject> Connectors { get; set; }
```

#### Property Value

 [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[ChainedObject](VM.Managed.DAFUL.Chained.ChainedObject.md)\>

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_Contacts"></a> Contacts

Gets or sets contact dictionary.

```csharp
public NamedObjectDictionary<ChainedObject> Contacts { get; set; }
```

#### Property Value

 [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[ChainedObject](VM.Managed.DAFUL.Chained.ChainedObject.md)\>

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_MtoNContacts"></a> MtoNContacts

Gets or sets contact dictionary.

```csharp
public NamedObjectDictionary<ChainedObject> MtoNContacts { get; set; }
```

#### Property Value

 [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[ChainedObject](VM.Managed.DAFUL.Chained.ChainedObject.md)\>

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_Paths"></a> Paths

Gets the paths.

```csharp
protected override InstanceContainer[] Paths { get; }
```

#### Property Value

 [InstanceContainer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs)\[\]

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_Placing"></a> Placing

Gets or sets the position data for construction chained system

```csharp
public Placing Placing { get; set; }
```

#### Property Value

 [Placing](VM.Managed.DAFUL.Chained.Placing.md)

## Methods

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_AddBearingFrictionLoss_VM_Managed_DAFUL_Chained_BearingFrictionLoss_"></a> AddBearingFrictionLoss\(BearingFrictionLoss\)

Adds the bearing friction loss.

```csharp
public void AddBearingFrictionLoss(BearingFrictionLoss loss)
```

#### Parameters

`loss` [BearingFrictionLoss](VM.Managed.DAFUL.Chained.BearingFrictionLoss.md)

The loss.

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Chained_ChainedPlacing_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

