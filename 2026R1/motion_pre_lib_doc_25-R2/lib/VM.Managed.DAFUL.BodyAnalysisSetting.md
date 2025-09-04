#  Class BodyAnalysisSetting

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the toolkit multi-item setting for SolidBody.

```csharp
public class BodyAnalysisSetting : ToolkitMultiSelectionSettingBase<BodyAnalysisType>, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IPostDeserialized
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ToolKitSettingBase](VM.Managed.DAFUL.ToolKitSettingBase.md) ← 
[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md) ← 
[BodyAnalysisSetting](VM.Managed.DAFUL.BodyAnalysisSetting.md)

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
IVerifiable, 
IPostDeserialized

#### Inherited Members

[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>.Add\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Add\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>.Remove\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Remove\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>.Contains\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Contains\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>.Replace\(ObjectBase, ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Replace\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>.Add\(ObjectBase, BodyAnalysisType\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Add\_VM\_Managed\_ObjectBase\_\_0\_), 
[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>.SetSelection\(ObjectBase, BodyAnalysisType\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_SetSelection\_VM\_Managed\_ObjectBase\_\_0\_), 
[ToolkitMultiSelectionSettingBase<BodyAnalysisType\>.GetSelection\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_GetSelection\_VM\_Managed\_ObjectBase\_), 
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

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting__ctor"></a> BodyAnalysisSetting\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.BodyAnalysisSetting" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BodyAnalysisSetting()
```

## Properties

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_BodyAnalysisArray"></a> BodyAnalysisArray

It must use to clone SimulationConfiguration.

```csharp
public string[] BodyAnalysisArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_IsNullBodyAnalysisType"></a> IsNullBodyAnalysisType

Gets the whether body analysis type is null or not

```csharp
public bool IsNullBodyAnalysisType { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_Add_VM_Managed_ObjectBase_VM_Managed_DAFUL_BodyAnalysisType_"></a> Add\(ObjectBase, BodyAnalysisType\)

Adds the Body object.

```csharp
public override void Add(ObjectBase ob, BodyAnalysisType type)
```

#### Parameters

`ob` ObjectBase

The Body object to add.

`type` [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

The BodyAnalysisType of the Body object.

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_CheckData"></a> CheckData\(\)

Check data

```csharp
public bool CheckData()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_Clear"></a> Clear\(\)

Clear

```csharp
public override void Clear()
```

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_Contains_VM_Managed_ObjectBase_"></a> Contains\(ObjectBase\)

Determines whether [contains] the Body object.

```csharp
public override bool Contains(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The Body object to find.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it contains the Body object.

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_ContainsKey_System_UIntPtr_"></a> ContainsKey\(UIntPtr\)

Determines whether contains the Body object.

```csharp
public bool ContainsKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key of the Body object to find.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it contains the Body object.

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_GetSelection_VM_Managed_ObjectBase_"></a> GetSelection\(ObjectBase\)

Gets the BodyAnalysisType of the Body object.

```csharp
public override BodyAnalysisType GetSelection(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The Body object to get BodyAnalysisType.

#### Returns

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

The BodyAnalysisType of the Body object.

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_Remove_VM_Managed_ObjectBase_"></a> Remove\(ObjectBase\)

Removes the Body object.

```csharp
public override bool Remove(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The Body object to remove.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it is success to remove the Body object.

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_SetAnalysisTypeForAllBody_VM_Managed_DAFUL_BodyAnalysisType_"></a> SetAnalysisTypeForAllBody\(BodyAnalysisType\)

Set analysis type for all Bodies

```csharp
public bool SetAnalysisTypeForAllBody(BodyAnalysisType type)
```

#### Parameters

`type` [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

Analysis type to set

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it's success.

### <a id="VM_Managed_DAFUL_BodyAnalysisSetting_SetSelection_VM_Managed_ObjectBase_VM_Managed_DAFUL_BodyAnalysisType_"></a> SetSelection\(ObjectBase, BodyAnalysisType\)

Sets the BodyAnalysisType of the Body object.

```csharp
public override bool SetSelection(ObjectBase ob, BodyAnalysisType type)
```

#### Parameters

`ob` ObjectBase

The Body object to set BodyAnalysisType.

`type` [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

The BodyAnalysisType of the Body object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it is success to set the BodyAnalysisType.

