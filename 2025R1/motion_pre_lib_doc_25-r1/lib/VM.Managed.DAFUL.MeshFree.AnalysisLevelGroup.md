#  Class AnalysisLevelGroup

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

This class is to represent Simulation Group Info for MeshFree.

```csharp
public class AnalysisLevelGroup : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[AnalysisLevelGroup](VM.Managed.DAFUL.MeshFree.AnalysisLevelGroup.md)

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

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup__ctor"></a> AnalysisLevelGroup\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.AnalysisLevelGroup" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisLevelGroup()
```

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup__ctor_System_UInt32_"></a> AnalysisLevelGroup\(uint\)

Initializes a new instance of the <xref href="VM.Managed.MeshFreeAnalysisLevelGroup" data-throw-if-not-resolved="false"></xref> class whth level count.

```csharp
public AnalysisLevelGroup(uint levelCount)
```

#### Parameters

`levelCount` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_AnalysisLevels"></a> AnalysisLevels

Gets or sets the silmulation level container for MeshFree.

```csharp
public AnalysisLevel[] AnalysisLevels { get; set; }
```

#### Property Value

 [AnalysisLevel](VM.Managed.DAFUL.MeshFree.AnalysisLevel.md)\[\]

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_CheckedAnalysisLevels"></a> CheckedAnalysisLevels

Gets the checked analysis levels.

```csharp
public AnalysisLevel[] CheckedAnalysisLevels { get; }
```

#### Property Value

 [AnalysisLevel](VM.Managed.DAFUL.MeshFree.AnalysisLevel.md)\[\]

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_Count"></a> Count

Gets the count.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_IsUseLocalRefinement"></a> IsUseLocalRefinement

Gets or sets a value indicating whether use [local refinement].

```csharp
public bool IsUseLocalRefinement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_RefineSurface"></a> RefineSurface

Gets or sets the surface refinement.

```csharp
public int RefineSurface { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_Item_System_Int32_"></a> this\[int\]

Gets or sets the <xref href="VM.Managed.DAFUL.MeshFree.AnalysisLevel" data-throw-if-not-resolved="false"></xref> with the specified n index.

```csharp
public AnalysisLevel this[int nIndex] { get; set; }
```

#### Property Value

 [AnalysisLevel](VM.Managed.DAFUL.MeshFree.AnalysisLevel.md)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_MeshFree_AnalysisLevelGroup_OnDeserializationAttribute"></a> OnDeserializationAttribute\(\)

Called when [deserialization attribute].

```csharp
public void OnDeserializationAttribute()
```

