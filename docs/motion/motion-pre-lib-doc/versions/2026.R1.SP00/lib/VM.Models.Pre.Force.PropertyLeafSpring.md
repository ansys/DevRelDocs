# Class PropertyLeafSpring
<a id="VM_Models_Pre_Force_PropertyLeafSpring"></a>

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This class is to represent the <xref href="VM.Models.Pre.Force.LeafSpring" data-throw-if-not-resolved="false"></xref> properties.

```csharp
public class PropertyLeafSpring : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
[PropertyLeafSpring](VM.Models.Pre.Force.PropertyLeafSpring.md)

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
IHasID

#### Inherited Members

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

### <a id="VM_Models_Pre_Force_PropertyLeafSpring__ctor"></a> PropertyLeafSpring\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.PropertyLeafSpring" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyLeafSpring()
```

### <a id="VM_Models_Pre_Force_PropertyLeafSpring__ctor_System_String_System_String_"></a> PropertyLeafSpring\(string, string\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.PropertyLeafSpring" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected PropertyLeafSpring(string proxyName, string buildInfo)
```

#### Parameters

`proxyName` string

Name of the proxy.

`buildInfo` string

The build info.

## Properties

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_Axle"></a> Axle

Gets the axle.

```csharp
public Axle Axle { get; set; }
```

#### Property Value

 [Axle](VM.Models.Pre.Force.Axle.md)

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_Clips"></a> Clips

Gets the clips.

```csharp
public Clip[] Clips { get; set; }
```

#### Property Value

 [Clip](VM.Models.Pre.Force.Clip.md)\[\]

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_FrontEye"></a> FrontEye

Gets the front eye.

```csharp
public Eye FrontEye { get; set; }
```

#### Property Value

 [Eye](VM.Models.Pre.Force.Eye.md)

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_Leaves"></a> Leaves

Gets the leaves.

```csharp
public Leaf[] Leaves { get; set; }
```

#### Property Value

 [Leaf](VM.Models.Pre.Force.Leaf.md)\[\]

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_MainLeaf"></a> MainLeaf

Gets or sets the main leaf.

```csharp
public Leaf MainLeaf { get; }
```

#### Property Value

 [Leaf](VM.Models.Pre.Force.Leaf.md)

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_MainLeafIndex"></a> MainLeafIndex

Gets or sets the main leaf index.

```csharp
public uint MainLeafIndex { get; set; }
```

#### Property Value

 uint

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_RearEye"></a> RearEye

Gets the rear eye.

```csharp
public Eye RearEye { get; set; }
```

#### Property Value

 [Eye](VM.Models.Pre.Force.Eye.md)

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_Shackle"></a> Shackle

Gets the shackle.

```csharp
public Shackle Shackle { get; set; }
```

#### Property Value

 [Shackle](VM.Models.Pre.Force.Shackle.md)

## Methods

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_FindLocal_System_String_"></a> FindLocal\(string\)

Finds the specified string name.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name of the string.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_GetClipInfos"></a> GetClipInfos\(\)

Gets the clip info list.

```csharp
public List<ClipInfo> GetClipInfos()
```

#### Returns

 List<ClipInfo\>

The leaf clip list.

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_GetLeafInfos"></a> GetLeafInfos\(\)

Gets the leaf info list.

```csharp
public List<LeafInfo> GetLeafInfos()
```

#### Returns

 List<LeafInfo\>

The leaf info list.

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

The ob unnamed.

#### Returns

 string

The unnamed object name.

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_RaisePropertyChanged_System_String_"></a> RaisePropertyChanged\(string\)

```csharp
public override void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` string

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_SetContainer_VM_Models_Pre_IOwned_System_Boolean_"></a> SetContainer\(IOwned, bool\)

```csharp
public override void SetContainer(IOwned owner, bool bBackup)
```

#### Parameters

`owner` IOwned

`bBackup` bool

### <a id="VM_Models_Pre_Force_PropertyLeafSpring_UpdateComponent"></a> UpdateComponent\(\)

Update component

```csharp
public void UpdateComponent()
```

