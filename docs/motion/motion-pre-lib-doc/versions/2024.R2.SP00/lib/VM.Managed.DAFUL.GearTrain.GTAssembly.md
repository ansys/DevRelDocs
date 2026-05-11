# Class GTAssembly

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Gear Train Assembly

```csharp
public class GTAssembly : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
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

### GTAssembly\(\)

Initializes a new instance of the <xref href="VM.Managed.Assembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GTAssembly()
```

### GTAssembly\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GTAssembly" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GTAssembly(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### BearingInfos

Gets or sets the bearing infos.

```csharp
public BearingInfoForAssembly[] BearingInfos { get; set; }
```

#### Property Value

 [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)\[\]

### ConnectorProp

Gets or sets the connector property.

```csharp
public PropertyBush ConnectorProp { get; set; }
```

#### Property Value

 PropertyBush

### CycloidPinInformation

Gets or sets the cycloid pin information.

```csharp
public CycloidPinInfoForAssembly[] CycloidPinInformation { get; set; }
```

#### Property Value

 [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)\[\]

### InputShaftSetInfos

Gets or sets the input shaft set infos.

```csharp
public GTAssemblyInfo[] InputShaftSetInfos { get; set; }
```

#### Property Value

 [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\[\]

### InputShaftSetList

Gets the input shaft set list.

```csharp
public IList<GTAssemblyInfo> InputShaftSetList { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\>

### OutputShaftSetInfos

Gets or sets the output shaft set infos.

```csharp
public GTAssemblyInfo[] OutputShaftSetInfos { get; set; }
```

#### Property Value

 [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\[\]

### OutputShaftSetList

Gets the output shaft set list.

```csharp
public IList<GTAssemblyInfo> OutputShaftSetList { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)\>

### ReferenceBody

Gets or sets the reference body.

```csharp
public IConnectable ReferenceBody { get; set; }
```

#### Property Value

 IConnectable

### ReferenceVector

Gets or sets the reference vector.

```csharp
public DirectionBase ReferenceVector { get; set; }
```

#### Property Value

 DirectionBase

### RevoluteProperty

Gets or sets the revolute property.

```csharp
public PropertyRevolute RevoluteProperty { get; set; }
```

#### Property Value

 PropertyRevolute

### \_ReferenceBody

Gets or sets the reference body.

```csharp
public Linker<IConnectable> _ReferenceBody { get; set; }
```

#### Property Value

 Linker<IConnectable\>

## Methods

### AddBearingInfo\(BearingInfoForAssembly\)

Adds the bearing information.

```csharp
public void AddBearingInfo(BearingInfoForAssembly info)
```

#### Parameters

`info` [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

The information.

### AddCycloidPinInformation\(CycloidPinInfoForAssembly\)

Adds the cycloid pin information.

```csharp
public void AddCycloidPinInformation(CycloidPinInfoForAssembly info)
```

#### Parameters

`info` [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

The information.

### CanBeDestroy\(object\)

Whether can be destroy or not.

```csharp
protected override bool CanBeDestroy(object objNotifier)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The destroy object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClearBearingInfo\(\)

Clear the bearing information.

```csharp
public void ClearBearingInfo()
```

### ClearCycloidPinInformation\(\)

Clear the cycloid pin information.

```csharp
public void ClearCycloidPinInformation()
```

### ClearIOShaftSetInfo\(\)

Clears the connector information.

```csharp
public void ClearIOShaftSetInfo()
```

### FindBearingInfo\(RacewayGeometryInfo\)

Finds the bearing information.

```csharp
public BearingInfoForAssembly FindBearingInfo(RacewayGeometryInfo race_info)
```

#### Parameters

`race_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The race_info.

#### Returns

 [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

### FindBearingInfo\(HDBGeometryInfo\)

Finds the bearing information.

```csharp
public BearingInfoForAssembly FindBearingInfo(HDBGeometryInfo hdbg_info)
```

#### Parameters

`hdbg_info` [HDBGeometryInfo](VM.Managed.DAFUL.GearTrain.HDBGeometryInfo.md)

The hdbg_info.

#### Returns

 [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

### FindGearInfo\(GearGeometryInfo\)

Finds the bearing information.

```csharp
public CycloidPinInfoForAssembly FindGearInfo(GearGeometryInfo gearInfo)
```

#### Parameters

`gearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The race_info.

#### Returns

 [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

### InputShaftSetAdd\(GTAssemblyInfo\)

Adds the specified information.

```csharp
public void InputShaftSetAdd(GTAssemblyInfo info)
```

#### Parameters

`info` [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)

The information.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### OutputShaftSetAdd\(GTAssemblyInfo\)

Outputs the shaft set add.

```csharp
public void OutputShaftSetAdd(GTAssemblyInfo info)
```

#### Parameters

`info` [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)

The information.

### Remove\(GTAssemblyInfo\)

Removes the specified information.

```csharp
public bool Remove(GTAssemblyInfo info)
```

#### Parameters

`info` [GTAssemblyInfo](VM.Managed.DAFUL.GearTrain.GTAssemblyInfo.md)

The information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remove\(BearingInfoForAssembly\)

Removes the specified information.

```csharp
public bool Remove(BearingInfoForAssembly info)
```

#### Parameters

`info` [BearingInfoForAssembly](VM.Managed.DAFUL.GearTrain.BearingInfoForAssembly.md)

The information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remove\(CycloidPinInfoForAssembly\)

Removes the specified information.

```csharp
public bool Remove(CycloidPinInfoForAssembly info)
```

#### Parameters

`info` [CycloidPinInfoForAssembly](VM.Managed.DAFUL.GearTrain.CycloidPinInfoForAssembly.md)

The information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remove\(RacewayGeometryInfo\)

Removes the specified race_info.

```csharp
public bool Remove(RacewayGeometryInfo race_info)
```

#### Parameters

`race_info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The race_info.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Remove\(GearGeometryInfo\)

Removes the specified gear information.

```csharp
public bool Remove(GearGeometryInfo gearInfo)
```

#### Parameters

`gearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The gear information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### initChild\(ConvertFactor\)

Initializes the child.

```csharp
public void initChild(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.


