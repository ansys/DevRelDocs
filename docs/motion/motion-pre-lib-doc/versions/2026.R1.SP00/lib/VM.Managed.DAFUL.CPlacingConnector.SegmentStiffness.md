# Class SegmentStiffness
<a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness"></a>

Namespace: [VM.Managed.DAFUL.CPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.md)  
Assembly: VMDCPlacingConnector.dll  

This class represents segment stiffness.

```csharp
public class SegmentStiffness : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[SegmentStiffness](VM.Managed.DAFUL.CPlacingConnector.SegmentStiffness.md)

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

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness__ctor"></a> SegmentStiffness\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.SegmentStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SegmentStiffness()
```

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_Name"></a> Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_Stiffness"></a> Stiffness

Gets the stiffness vector

```csharp
public VectorBase Stiffness { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_TKX"></a> TKX

Gets or sets the TKX.

```csharp
public ExpressionValueVariable TKX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

TKX is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_TKY"></a> TKY

Gets or sets the TKY.

```csharp
public ExpressionValueVariable TKY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

TKY is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_TKZ"></a> TKZ

Gets or sets the TKZ.

```csharp
public ExpressionValueVariable TKZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

#### Exceptions

 Exception

TKZ is null.

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_ContainsActionFilter_System_String_"></a> ContainsActionFilter\(string\)

Whether the name contains action filter or not.

```csharp
public static bool ContainsActionFilter(string strName)
```

#### Parameters

`strName` string

The name

#### Returns

 bool

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_ContainsBaseFilter_System_String_"></a> ContainsBaseFilter\(string\)

Whether the name contains base filter or not.

```csharp
public static bool ContainsBaseFilter(string strName)
```

#### Parameters

`strName` string

The name

#### Returns

 bool

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_CPlacingConnector_SegmentStiffness_MatchingFilterName_System_String_System_String_"></a> MatchingFilterName\(string, string\)

Whether base and action name is matching or not.

```csharp
public static bool MatchingFilterName(string strBaseName, string strActionName)
```

#### Parameters

`strBaseName` string

The base name

`strActionName` string

The action name

#### Returns

 bool

