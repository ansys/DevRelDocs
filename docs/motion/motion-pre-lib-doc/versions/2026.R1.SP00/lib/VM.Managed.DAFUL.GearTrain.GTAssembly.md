# Class GTAssembly
<a id="VM_Managed_DAFUL_GearTrain_GTAssembly"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear Train Assembly

```csharp
public class GTAssembly : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[GTAssembly](VM.Managed.DAFUL.GearTrain.GTAssembly.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly__ctor"></a> GTAssembly\(\)

Initializes a new instance of the <xref href="VM.Managed.Assembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GTAssembly()
```

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly__ctor_VM_Models_Pre_IOwned_"></a> GTAssembly\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GTAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GTAssembly(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_BearingInfos"></a> BearingInfos

Gets or sets the bearing infos.

```csharp
public BearingInfoForAssembly[] BearingInfos { get; set; }
```

#### Property Value

 [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_ConnectorProp"></a> ConnectorProp

Gets or sets the connector property.

```csharp
public PropertyBush ConnectorProp { get; set; }
```

#### Property Value

 [PropertyBush](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/Bush.cs)

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_CycloidPinInformation"></a> CycloidPinInformation

Gets or sets the cycloid pin information.

```csharp
public CycloidPinInfoForAssembly[] CycloidPinInformation { get; set; }
```

#### Property Value

 [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_InputShaftSetInfos"></a> InputShaftSetInfos

Gets or sets the input shaft set infos.

```csharp
public GTAssemblyInfo[] InputShaftSetInfos { get; set; }
```

#### Property Value

 [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_InputShaftSetList"></a> InputShaftSetList

Gets the input shaft set list.

```csharp
public IList<GTAssemblyInfo> InputShaftSetList { get; }
```

#### Property Value

 IList<[GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_OutputShaftSetInfos"></a> OutputShaftSetInfos

Gets or sets the output shaft set infos.

```csharp
public GTAssemblyInfo[] OutputShaftSetInfos { get; set; }
```

#### Property Value

 [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_OutputShaftSetList"></a> OutputShaftSetList

Gets the output shaft set list.

```csharp
public IList<GTAssemblyInfo> OutputShaftSetList { get; }
```

#### Property Value

 IList<[GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\>

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_ReferenceBody"></a> ReferenceBody

Gets or sets the reference body.

```csharp
public IConnectable ReferenceBody { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_ReferenceVector"></a> ReferenceVector

Gets or sets the reference vector.

```csharp
public DirectionBase ReferenceVector { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_RevoluteProperty"></a> RevoluteProperty

Gets or sets the revolute property.

```csharp
public PropertyRevolute RevoluteProperty { get; set; }
```

#### Property Value

 [PropertyRevolute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Revolute.cs)

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly__ReferenceBody"></a> \_ReferenceBody

Gets or sets the reference body.

```csharp
public Linker<IConnectable> _ReferenceBody { get; set; }
```

#### Property Value

 Linker<IConnectable\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_AddBearingInfo_VM_Managed_DAFUL_GearTrain_BearingInfoForAssembly_"></a> AddBearingInfo\(BearingInfoForAssembly\)

Adds the bearing information.

```csharp
public void AddBearingInfo(BearingInfoForAssembly info)
```

#### Parameters

`info` [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

The information.

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_AddCycloidPinInformation_VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_"></a> AddCycloidPinInformation\(CycloidPinInfoForAssembly\)

Adds the cycloid pin information.

```csharp
public void AddCycloidPinInformation(CycloidPinInfoForAssembly info)
```

#### Parameters

`info` [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

The information.

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_CanBeDestroy_System_Object_"></a> CanBeDestroy\(object\)

Whether can be destroy or not.

```csharp
protected override bool CanBeDestroy(object objNotifier)
```

#### Parameters

`objNotifier` object

The destroy object.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_ClearBearingInfo"></a> ClearBearingInfo\(\)

Clear the bearing information.

```csharp
public void ClearBearingInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_ClearCycloidPinInformation"></a> ClearCycloidPinInformation\(\)

Clear the cycloid pin information.

```csharp
public void ClearCycloidPinInformation()
```

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_ClearIOShaftSetInfo"></a> ClearIOShaftSetInfo\(\)

Clears the connector information.

```csharp
public void ClearIOShaftSetInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_FindBearingInfo_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_"></a> FindBearingInfo\(RacewayGeometryInfo\)

Finds the bearing information.

```csharp
public BearingInfoForAssembly FindBearingInfo(RacewayGeometryInfo race_info)
```

#### Parameters

`race_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The race_info.

#### Returns

 [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_FindBearingInfo_VM_Managed_DAFUL_GearTrain_HDBGeometryInfo_"></a> FindBearingInfo\(HDBGeometryInfo\)

Finds the bearing information.

```csharp
public BearingInfoForAssembly FindBearingInfo(HDBGeometryInfo hdbg_info)
```

#### Parameters

`hdbg_info` [HDBGeometryInfo](VM.Managed.DAFUL.GearTrain.HDBGeometryInfo.md)

The hdbg_info.

#### Returns

 [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_FindGearInfo_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> FindGearInfo\(GearGeometryInfo\)

Finds the bearing information.

```csharp
public CycloidPinInfoForAssembly FindGearInfo(GearGeometryInfo gearInfo)
```

#### Parameters

`gearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The race_info.

#### Returns

 [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_InputShaftSetAdd_VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_"></a> InputShaftSetAdd\(GTAssemblyInfo\)

Adds the specified information.

```csharp
public void InputShaftSetAdd(GTAssemblyInfo info)
```

#### Parameters

`info` [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)

The information.

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_OutputShaftSetAdd_VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_"></a> OutputShaftSetAdd\(GTAssemblyInfo\)

Outputs the shaft set add.

```csharp
public void OutputShaftSetAdd(GTAssemblyInfo info)
```

#### Parameters

`info` [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)

The information.

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_Remove_VM_Managed_DAFUL_GearTrain_GTAssemblyInfo_"></a> Remove\(GTAssemblyInfo\)

Removes the specified information.

```csharp
public bool Remove(GTAssemblyInfo info)
```

#### Parameters

`info` [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)

The information.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_Remove_VM_Managed_DAFUL_GearTrain_BearingInfoForAssembly_"></a> Remove\(BearingInfoForAssembly\)

Removes the specified information.

```csharp
public bool Remove(BearingInfoForAssembly info)
```

#### Parameters

`info` [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

The information.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_Remove_VM_Managed_DAFUL_GearTrain_CycloidPinInfoForAssembly_"></a> Remove\(CycloidPinInfoForAssembly\)

Removes the specified information.

```csharp
public bool Remove(CycloidPinInfoForAssembly info)
```

#### Parameters

`info` [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

The information.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_Remove_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_"></a> Remove\(RacewayGeometryInfo\)

Removes the specified race_info.

```csharp
public bool Remove(RacewayGeometryInfo race_info)
```

#### Parameters

`race_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The race_info.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_Remove_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> Remove\(GearGeometryInfo\)

Removes the specified gear information.

```csharp
public bool Remove(GearGeometryInfo gearInfo)
```

#### Parameters

`gearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The gear information.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_GTAssembly_initChild_VM_Unit_ConvertFactor_"></a> initChild\(ConvertFactor\)

Initializes the child.

```csharp
public void initChild(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

