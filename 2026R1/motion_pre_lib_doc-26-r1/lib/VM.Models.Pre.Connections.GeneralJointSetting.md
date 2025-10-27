# Class GeneralJointSetting
<a id="VM_Models_Pre_Connections_GeneralJointSetting"></a>

Namespace: [VM.Models.Pre.Connections](VM.Models.Pre.Connections.md)  
Assembly: VM.Models.Pre.Connections.dll  

This class is to represent the toolkit setting for general joint.

```csharp
public class GeneralJointSetting : ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType>, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[ToolKitSettingBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolKitSettingBase.cs) ← 
[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs) ← 
[GeneralJointSetting](VM.Models.Pre.Connections.GeneralJointSetting.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>.Add\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs), 
[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>.Remove\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs), 
[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>.Contains\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs), 
[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>.Replace\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs), 
[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>.Add\(ObjectBase, PropertyGeneral.ConnectorType\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs), 
[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>.SetSelection\(ObjectBase, PropertyGeneral.ConnectorType\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs), 
[ToolkitMultiSelectionSettingBase<PropertyGeneral.ConnectorType\>.GetSelection\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolkitMultiSelectionSettingBase.cs), 
[ToolKitSettingBase.Add\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolKitSettingBase.cs), 
[ToolKitSettingBase.Remove\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolKitSettingBase.cs), 
[ToolKitSettingBase.Contains\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolKitSettingBase.cs), 
[ToolKitSettingBase.Replace\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolKitSettingBase.cs), 
[ToolKitSettingBase.PostDeserialize\(Configuration\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolKitSettingBase.cs), 
[ToolKitSettingBase.Clear\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/ToolKitSettingBase.cs), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### <a id="VM_Models_Pre_Connections_GeneralJointSetting__ctor"></a> GeneralJointSetting\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Connections.GeneralJointSetting" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GeneralJointSetting()
```

## Methods

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_Add_VM_Managed_ObjectBase_VM_Models_Pre_Connections_PropertyGeneral_ConnectorType_"></a> Add\(ObjectBase, ConnectorType\)

Adds the connector object.

```csharp
public override void Add(ObjectBase ob, PropertyGeneral.ConnectorType type)
```

#### Parameters

`ob` ObjectBase

The connector object to add.

`type` [PropertyGeneral](VM.Models.Pre.Connections.PropertyGeneral.md).[ConnectorType](VM.Models.Pre.Connections.PropertyGeneral.ConnectorType.md)

The ConnectorType of the Body object.

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_CheckData"></a> CheckData\(\)

Check data

```csharp
public bool CheckData()
```

#### Returns

 bool

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_Clear"></a> Clear\(\)

Clear

```csharp
public override void Clear()
```

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_Contains_VM_Managed_ObjectBase_"></a> Contains\(ObjectBase\)

Determines whether [contains] the connector object.

```csharp
public override bool Contains(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The connector object to find.

#### Returns

 bool

Whether it contains the connector object.

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_ContainsKey_System_UIntPtr_"></a> ContainsKey\(UIntPtr\)

```csharp
public bool ContainsKey(UIntPtr keyObject)
```

#### Parameters

`keyObject` UIntPtr

#### Returns

 bool

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_GetSelection_VM_Managed_ObjectBase_"></a> GetSelection\(ObjectBase\)

Gets the ConnectorType of the connector object.

```csharp
public override PropertyGeneral.ConnectorType GetSelection(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The connector object to get ConnectorType.

#### Returns

 [PropertyGeneral](VM.Models.Pre.Connections.PropertyGeneral.md).[ConnectorType](VM.Models.Pre.Connections.PropertyGeneral.ConnectorType.md)

The ConnectorType of the connector object.

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_Remove_VM_Managed_ObjectBase_"></a> Remove\(ObjectBase\)

Removes the connector object.

```csharp
public override bool Remove(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The connector object to remove.

#### Returns

 bool

Whether it is success to remove the connector object.

### <a id="VM_Models_Pre_Connections_GeneralJointSetting_SetSelection_VM_Managed_ObjectBase_VM_Models_Pre_Connections_PropertyGeneral_ConnectorType_"></a> SetSelection\(ObjectBase, ConnectorType\)

Sets the ConnectorType of the connector object.

```csharp
public override bool SetSelection(ObjectBase ob, PropertyGeneral.ConnectorType type)
```

#### Parameters

`ob` ObjectBase

The connector object to set ConnectorType.

`type` [PropertyGeneral](VM.Models.Pre.Connections.PropertyGeneral.md).[ConnectorType](VM.Models.Pre.Connections.PropertyGeneral.ConnectorType.md)

The ConnectorType of the connector object.

#### Returns

 bool

Whether it is success to set the ConnectorType.

