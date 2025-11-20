# Class Tool
<a id="VM_Managed_DAFUL_GearTrain_Tool"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Reference Profile

```csharp
public class Tool : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[Tool](VM.Managed.DAFUL.GearTrain.Tool.md)

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

[GearPropertyBase.InitChild\(int\)](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearPropertyBase\_InitChild\_System\_Int32\_), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Tool__ctor"></a> Tool\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Tool" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Tool()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Tool_AddendumInput"></a> AddendumInput

Gets or sets the addendum Input type.

```csharp
public Tool.AddendumInputType AddendumInput { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[AddendumInputType](VM.Managed.DAFUL.GearTrain.Tool.AddendumInputType.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_DataBaseGearArray"></a> DataBaseGearArray

Gets or sets the data base gear1.

```csharp
public Tool.ToolDataType[] DataBaseGearArray { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[ToolDataType](VM.Managed.DAFUL.GearTrain.Tool.ToolDataType.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_Tool_DedendumInput"></a> DedendumInput

Gets or sets the dedendum Input type.

```csharp
public Tool.DedendumInputType DedendumInput { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[DedendumInputType](VM.Managed.DAFUL.GearTrain.Tool.DedendumInputType.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairActualTipDiameter"></a> PairActualTipDiameter

Gets or sets the pair actual tip diameter.

```csharp
public GearPairValue PairActualTipDiameter { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairActualWholeDepth"></a> PairActualWholeDepth

Gets or sets the pair actual root diameter.

```csharp
public GearPairValue PairActualWholeDepth { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairAddendum"></a> PairAddendum

Gets or sets the pair addendum.

```csharp
public GearPairValue PairAddendum { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairAddendumCoefficient"></a> PairAddendumCoefficient

Gets or sets the pair addendum coefficient.

```csharp
public GearPairValue PairAddendumCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairDedendum"></a> PairDedendum

Gets or sets the pair dedendum.

```csharp
public GearPairValue PairDedendum { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairDedendumCoefficient"></a> PairDedendumCoefficient

Gets or sets the pair dedendum coefficient.

```csharp
public GearPairValue PairDedendumCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairModifyStartingPoint"></a> PairModifyStartingPoint

Gets or sets the pair modify starting point.

```csharp
public GearPairValue PairModifyStartingPoint { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairProfileShiftCoefficient"></a> PairProfileShiftCoefficient

Gets or sets the pair profile shift coefficient.

```csharp
public GearPairValue PairProfileShiftCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairRootDiameter"></a> PairRootDiameter

Gets or sets the pair root diameter.

```csharp
public GearPairValue PairRootDiameter { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairRootRadiusCoefficient"></a> PairRootRadiusCoefficient

Gets or sets the pair root radius coefficient.

```csharp
public GearPairValue PairRootRadiusCoefficient { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_PairToolTipRadius"></a> PairToolTipRadius

Gets or sets the pair tool tip radius.

```csharp
public GearPairValue PairToolTipRadius { get; set; }
```

#### Property Value

 [GearPairValue](VM.Managed.DAFUL.GearTrain.GearPairValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_Tool_RootRadiusInput"></a> RootRadiusInput

Gets or sets the root radius Input type.

```csharp
public Tool.RootRadiusInputType RootRadiusInput { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md).[RootRadiusInputType](VM.Managed.DAFUL.GearTrain.Tool.RootRadiusInputType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Tool_InitChild_System_Int32_"></a> InitChild\(int\)

Initializes the child.

```csharp
public override void InitChild(int nNum)
```

#### Parameters

`nNum` int

The n number.

### <a id="VM_Managed_DAFUL_GearTrain_Tool_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

