# Class ToolkitMultiSelectionSettingBase<T\>
<a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the toolkit setting that has multi-item.

```csharp
public abstract class ToolkitMultiSelectionSettingBase<T> : ToolKitSettingBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Type Parameters

`T` 

Multi-item enumerator, class, etc...

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[ToolKitSettingBase](VM.Managed.DAFUL.ToolKitSettingBase.md) ← 
[ToolkitMultiSelectionSettingBase<T\>](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md)

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

[ToolKitSettingBase.Add\(ObjectBase\)](VM.Managed.DAFUL.ToolKitSettingBase.md\#VM\_Managed\_DAFUL\_ToolKitSettingBase\_Add\_VM\_Managed\_ObjectBase\_), 
[ToolKitSettingBase.Remove\(ObjectBase\)](VM.Managed.DAFUL.ToolKitSettingBase.md\#VM\_Managed\_DAFUL\_ToolKitSettingBase\_Remove\_VM\_Managed\_ObjectBase\_), 
[ToolKitSettingBase.Contains\(ObjectBase\)](VM.Managed.DAFUL.ToolKitSettingBase.md\#VM\_Managed\_DAFUL\_ToolKitSettingBase\_Contains\_VM\_Managed\_ObjectBase\_), 
[ToolKitSettingBase.Replace\(ObjectBase, ObjectBase\)](VM.Managed.DAFUL.ToolKitSettingBase.md\#VM\_Managed\_DAFUL\_ToolKitSettingBase\_Replace\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[ToolKitSettingBase.PostDeserialize\(Configuration\)](VM.Managed.DAFUL.ToolKitSettingBase.md\#VM\_Managed\_DAFUL\_ToolKitSettingBase\_PostDeserialize\_VM\_Managed\_Simulation\_Configuration\_), 
[ToolKitSettingBase.Clear\(\)](VM.Managed.DAFUL.ToolKitSettingBase.md\#VM\_Managed\_DAFUL\_ToolKitSettingBase\_Clear), 
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

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1__ctor"></a> ToolkitMultiSelectionSettingBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ToolkitMultiSelectionSettingBase()
```

## Methods

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1_Add_VM_Managed_ObjectBase_"></a> Add\(ObjectBase\)

Adds the object.

```csharp
public override void Add(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object to add.

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1_Add_VM_Managed_ObjectBase__0_"></a> Add\(ObjectBase, T\)

Adds both the object and item.

```csharp
public virtual void Add(ObjectBase ob, T selection)
```

#### Parameters

`ob` ObjectBase

The object to add.

`selection` T

The selection of the object.

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1_Contains_VM_Managed_ObjectBase_"></a> Contains\(ObjectBase\)

Determines whether [contains] the object.

```csharp
public override bool Contains(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object to find.

#### Returns

 bool

Whether it contains the object.

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1_GetSelection_VM_Managed_ObjectBase_"></a> GetSelection\(ObjectBase\)

Gets the selection of the object.

```csharp
public virtual T GetSelection(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object to get selection.

#### Returns

 T

The selection of the object.

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1_Remove_VM_Managed_ObjectBase_"></a> Remove\(ObjectBase\)

Removes the object.

```csharp
public override bool Remove(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object to remove.

#### Returns

 bool

Whether it is success to remove the object.

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1_Replace_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> Replace\(ObjectBase, ObjectBase\)

Replaces the object.

```csharp
public override void Replace(ObjectBase obOld, ObjectBase obNew)
```

#### Parameters

`obOld` ObjectBase

The old object.

`obNew` ObjectBase

The new object.

### <a id="VM_Managed_DAFUL_ToolkitMultiSelectionSettingBase_1_SetSelection_VM_Managed_ObjectBase__0_"></a> SetSelection\(ObjectBase, T\)

Sets the selection of the object.

```csharp
public virtual bool SetSelection(ObjectBase ob, T selection)
```

#### Parameters

`ob` ObjectBase

The object to set selection.

`selection` T

The selection of the object.

#### Returns

 bool

Whether it is success to set the selection.

