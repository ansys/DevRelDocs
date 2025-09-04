#  Class AnalysisLevel

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

This class is to represent Analysis Level for MeshFree.

```csharp
public class AnalysisLevel : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[AnalysisLevel](VM.Managed.DAFUL.MeshFree.AnalysisLevel.md)

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

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel__ctor"></a> AnalysisLevel\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.AnalysisLevel" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisLevel()
```

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel__ctor_System_UInt32_"></a> AnalysisLevel\(uint\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.AnalysisLevel" data-throw-if-not-resolved="false"></xref> class width level number.

```csharp
public AnalysisLevel(uint level)
```

#### Parameters

`level` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

Level Number.

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_Level"></a> Level

Gets the level number.

```csharp
public uint Level { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_LocalRefinementRatio"></a> LocalRefinementRatio

Gets or sets the ratio of local refinement.

```csharp
public double LocalRefinementRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeCount"></a> NodeCount

Gets or sets the node count.

```csharp
public uint NodeCount { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeDistance"></a> NodeDistance

Gets or sets the node distance.

```csharp
[Obsolete]
public double NodeDistance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The node distance should be same as 0 or bigger than 0.

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeDistanceOriginalX"></a> NodeDistanceOriginalX

Gets or sets the node distance origin X.

```csharp
public double NodeDistanceOriginalX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeDistanceOriginalY"></a> NodeDistanceOriginalY

Gets or sets the node distance origin Y.

```csharp
public double NodeDistanceOriginalY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The node distance should be same as 0 or bigger than 0.

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeDistanceOriginalZ"></a> NodeDistanceOriginalZ

Gets or sets the node distance origin Z.

```csharp
public double NodeDistanceOriginalZ { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeDistanceX"></a> NodeDistanceX

Gets or sets the node distance X.

```csharp
public double NodeDistanceX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeDistanceY"></a> NodeDistanceY

Gets or sets the node distance Y.

```csharp
public double NodeDistanceY { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The node distance should be same as 0 or bigger than 0.

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_NodeDistanceZ"></a> NodeDistanceZ

Gets or sets the node distance Z.

```csharp
public double NodeDistanceZ { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_UseThisLevel"></a> UseThisLevel

Gets or sets a value indicating whether use [this level].

```csharp
public bool UseThisLevel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevel_OnDeserializationAttribute"></a> OnDeserializationAttribute\(\)

Called when [deserialization attribute].

```csharp
public void OnDeserializationAttribute()
```

