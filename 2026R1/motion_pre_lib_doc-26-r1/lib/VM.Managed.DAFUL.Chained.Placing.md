# Class Placing
<a id="VM_Managed_DAFUL_Chained_Placing"></a>

Namespace: [VM.Managed.DAFUL.Chained](VM.Managed.DAFUL.Chained.md)  
Assembly: VMDChainedBase.dll  

The class defines the position data for construction chained system.

```csharp
public class Placing : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[Placing](VM.Managed.DAFUL.Chained.Placing.md)

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

### <a id="VM_Managed_DAFUL_Chained_Placing__ctor"></a> Placing\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Placing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Placing()
```

### <a id="VM_Managed_DAFUL_Chained_Placing__ctor_VM_Managed_DAFUL_Chained_ChainedPlacingBase_"></a> Placing\(ChainedPlacingBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Placing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Placing(ChainedPlacingBase owner)
```

#### Parameters

`owner` [ChainedPlacingBase](VM.Managed.DAFUL.Chained.ChainedPlacingBase.md)

The owner.

## Properties

### <a id="VM_Managed_DAFUL_Chained_Placing_AssembleType"></a> AssembleType

Gets and sets assemble type.

```csharp
public AssembleType AssembleType { get; set; }
```

#### Property Value

 [AssembleType](VM.Managed.DAFUL.Chained.AssembleType.md)

### <a id="VM_Managed_DAFUL_Chained_Placing_ChainedPaths"></a> ChainedPaths

Gets or sets the object array

```csharp
public Placing_Paths[] ChainedPaths { get; set; }
```

#### Property Value

 [Placing\_Paths](VM.Managed.DAFUL.Chained.Placing\_Paths.md)\[\]

### <a id="VM_Managed_DAFUL_Chained_Placing_ChainedSegments"></a> ChainedSegments

Gets or sets the object array

```csharp
public InstanceContainer[] ChainedSegments { get; set; }
```

#### Property Value

 [InstanceContainer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InstanceContainer.cs)\[\]

### <a id="VM_Managed_DAFUL_Chained_Placing_ExternContacts"></a> ExternContacts

Gets or sets the object array

```csharp
public ObjectBase[] ExternContacts { get; set; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_DAFUL_Chained_Placing_FileSegments"></a> FileSegments

Gets or sets the string array.

```csharp
public Placing_File[] FileSegments { get; set; }
```

#### Property Value

 [Placing\_File](VM.Managed.DAFUL.Chained.Placing\_File.md)\[\]

### <a id="VM_Managed_DAFUL_Chained_Placing_IsFixNumberOfSegment"></a> IsFixNumberOfSegment

If you fix the number of segment, sets the true.

```csharp
public bool IsFixNumberOfSegment { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Chained_Placing_NumberOfSegment"></a> NumberOfSegment

This represents number of segment.

```csharp
public int NumberOfSegment { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_DAFUL_Chained_Placing_OpenLoop"></a> OpenLoop

If you make open loop system, sets the true.

```csharp
public bool OpenLoop { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Chained_Placing_PlacingAdditionalInfo"></a> PlacingAdditionalInfo

Gets and sets the information for placing.

```csharp
public PlacingInfoBase PlacingAdditionalInfo { get; set; }
```

#### Property Value

 [PlacingInfoBase](VM.Managed.DAFUL.Chained.PlacingInfoBase.md)

### <a id="VM_Managed_DAFUL_Chained_Placing_PlacingGap"></a> PlacingGap

This represents the gap between segment.

```csharp
public double PlacingGap { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Chained_Placing_ToolkitType"></a> ToolkitType

Gets and sets toolkit type.

```csharp
public ToolkitType ToolkitType { get; set; }
```

#### Property Value

 [ToolkitType](VM.Managed.DAFUL.Chained.ToolkitType.md)

### <a id="VM_Managed_DAFUL_Chained_Placing_UserDefinedArray"></a> UserDefinedArray

Gets and sets the user-defined array.

```csharp
public string[] UserDefinedArray { get; set; }
```

#### Property Value

 string\[\]

## Methods

### <a id="VM_Managed_DAFUL_Chained_Placing_Delete_ExternContacts_System_Object_"></a> Delete\_ExternContacts\(object\)

Called when external contact geometry is deleted.

```csharp
public void Delete_ExternContacts(object obj)
```

#### Parameters

`obj` object

Theexternal contact geometry.

### <a id="VM_Managed_DAFUL_Chained_Placing_Delete_Path_System_Object_"></a> Delete\_Path\(object\)

Called when path components is deleted.

```csharp
public void Delete_Path(object obj)
```

#### Parameters

`obj` object

The path component.

### <a id="VM_Managed_DAFUL_Chained_Placing_Delete_Segment_System_Object_"></a> Delete\_Segment\(object\)

Called when segment components is deleted.

```csharp
public void Delete_Segment(object obj)
```

#### Parameters

`obj` object

The segment component.

### <a id="VM_Managed_DAFUL_Chained_Placing_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

