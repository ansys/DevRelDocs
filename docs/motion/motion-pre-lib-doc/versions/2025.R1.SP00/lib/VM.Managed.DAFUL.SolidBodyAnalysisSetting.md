#  Class SolidBodyAnalysisSetting

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the toolkit multi-item setting for SolidBody.

```csharp
[Obsolete]
public class SolidBodyAnalysisSetting : ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType>, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ToolKitSettingBase](VM.Managed.DAFUL.ToolKitSettingBase.md) ← 
[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md) ← 
[SolidBodyAnalysisSetting](VM.Managed.DAFUL.SolidBodyAnalysisSetting.md)

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

[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>.Add\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Add\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>.Remove\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Remove\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>.Contains\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Contains\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>.Replace\(ObjectBase, ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Replace\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>.Add\(ObjectBase, SolidBodyAnalysisType\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_Add\_VM\_Managed\_ObjectBase\_\_0\_), 
[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>.SetSelection\(ObjectBase, SolidBodyAnalysisType\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_SetSelection\_VM\_Managed\_ObjectBase\_\_0\_), 
[ToolkitMultiSelectionSettingBase<SolidBodyAnalysisType\>.GetSelection\(ObjectBase\)](VM.Managed.DAFUL.ToolkitMultiSelectionSettingBase\-1.md\#VM\_Managed\_DAFUL\_ToolkitMultiSelectionSettingBase\_1\_GetSelection\_VM\_Managed\_ObjectBase\_), 
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

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting__ctor"></a> SolidBodyAnalysisSetting\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SolidBodyAnalysisSetting" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SolidBodyAnalysisSetting()
```

## Properties

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_SolidBodyAnalysisArray"></a> SolidBodyAnalysisArray

It must use to clone SimulationConfiguration.

```csharp
public string[] SolidBodyAnalysisArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_Add_VM_Managed_ObjectBase_VM_Managed_SolidBodyAnalysisType_"></a> Add\(ObjectBase, SolidBodyAnalysisType\)

Adds the SolidBody object.

```csharp
public override void Add(ObjectBase ob, SolidBodyAnalysisType type)
```

#### Parameters

`ob` ObjectBase

The SolidBody object to add.

`type` SolidBodyAnalysisType

The SolidBodyAnalysisType of the SolidBody object.

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_Contains_VM_Managed_ObjectBase_"></a> Contains\(ObjectBase\)

Determines whether [contains] the SolidBody object.

```csharp
public override bool Contains(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The SolidBody object to find.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it contains the SolidBody object.

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_GetSelection_VM_Managed_ObjectBase_"></a> GetSelection\(ObjectBase\)

Gets the SolidBodyAnalysisType of the SolidBody object.

```csharp
public override SolidBodyAnalysisType GetSelection(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The SolidBody object to get SolidBodyAnalysisType.

#### Returns

 SolidBodyAnalysisType

The SolidBodyAnalysisType of the SolidBody object.

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_PostDeserialize_VM_Managed_Simulation_Configuration_"></a> PostDeserialize\(Configuration\)

Posts the deserialize.

```csharp
public override void PostDeserialize(Configuration config)
```

#### Parameters

`config` [Configuration](VM.Managed.Simulation.Configuration.md)

The config.

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_Remove_VM_Managed_ObjectBase_"></a> Remove\(ObjectBase\)

Removes the SolidBody object.

```csharp
public override bool Remove(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The SolidBody object to remove.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it is success to remove the SolidBody object.

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_SetAnalysisTypeForAllSolidBody_VM_Managed_SolidBodyAnalysisType_"></a> SetAnalysisTypeForAllSolidBody\(SolidBodyAnalysisType\)

Set analysis type for all SolidBodies

```csharp
public bool SetAnalysisTypeForAllSolidBody(SolidBodyAnalysisType type)
```

#### Parameters

`type` SolidBodyAnalysisType

Analysis type to set

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it's success.

### <a id="VM_Managed_DAFUL_SolidBodyAnalysisSetting_SetSelection_VM_Managed_ObjectBase_VM_Managed_SolidBodyAnalysisType_"></a> SetSelection\(ObjectBase, SolidBodyAnalysisType\)

Sets the SolidBodyAnalysisType of the SolidBody object.

```csharp
public override bool SetSelection(ObjectBase ob, SolidBodyAnalysisType type)
```

#### Parameters

`ob` ObjectBase

The SolidBody object to set SolidBodyAnalysisType.

`type` SolidBodyAnalysisType

The SolidBodyAnalysisType of the SolidBody object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether it is success to set the SolidBodyAnalysisType.

