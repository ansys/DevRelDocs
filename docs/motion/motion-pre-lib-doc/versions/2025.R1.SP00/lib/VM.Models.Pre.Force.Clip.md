#  Class Clip

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This class is to represent the Clip.

```csharp
public class Clip : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Clip](VM.Models.Pre.Force.Clip.md)

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

### <a id="VM_Models_Pre_Force_Clip__ctor"></a> Clip\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Clip" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Clip()
```

## Properties

### <a id="VM_Models_Pre_Force_Clip_BottomLeafNumber"></a> BottomLeafNumber

Gets or sets the leaf number at bottom of clip.

```csharp
public int BottomLeafNumber { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Force_Clip_DampingCoefficient"></a> DampingCoefficient

Gets or sets the damping coefficient.

```csharp
public ExpressionValueVariable DampingCoefficient { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Clip_DistanceToCenterBolt"></a> DistanceToCenterBolt

Gets or sets the distance to center bolt.

```csharp
public ExpressionValueVariable DistanceToCenterBolt { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Clip_Height"></a> Height

Gets or sets the height of clip.

```csharp
public ExpressionValueVariable Height { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Clip_HorizontalCoverStiffness"></a> HorizontalCoverStiffness

Gets or sets the horizontal cover stiffness.

```csharp
public ExpressionValueVariable HorizontalCoverStiffness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Clip_TopLeafNumber"></a> TopLeafNumber

Gets or sets the leaf number at top of clip.

```csharp
public int TopLeafNumber { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Force_Clip_VerticalCoverStiffness"></a> VerticalCoverStiffness

Gets or sets the vertical cover stiffness.

```csharp
public ExpressionValueVariable VerticalCoverStiffness { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Clip_Width"></a> Width

Gets or sets the width of clip.

```csharp
public ExpressionValueVariable Width { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Models_Pre_Force_Clip_GetClipInfo"></a> GetClipInfo\(\)

Convert to <xref href="VM.Models.Pre.Force.ClipInfo" data-throw-if-not-resolved="false"></xref> from current <xref href="VM.Models.Pre.Force.Clip" data-throw-if-not-resolved="false"></xref>.

```csharp
public ClipInfo GetClipInfo()
```

#### Returns

 ClipInfo

The ClipInfo instance.

### <a id="VM_Models_Pre_Force_Clip_GetInitialDistanceToCenterBolt_VM_Models_Pre_Force_LeafInfo___VM_Models_Pre_Force_Clip___VM_Models_Pre_Force_Clip_VM_Models_Pre_Force_Axle_"></a> GetInitialDistanceToCenterBolt\(LeafInfo\[\], Clip\[\], Clip, Axle\)

Get the initial distance to center bolt value.

```csharp
public static double GetInitialDistanceToCenterBolt(LeafInfo[] leafInfos, Clip[] clips, Clip currentClip, Axle axle)
```

#### Parameters

`leafInfos` LeafInfo\[\]

The LeafInfo array.

`clips` [Clip](VM.Models.Pre.Force.Clip.md)\[\]

The Clip array.

`currentClip` [Clip](VM.Models.Pre.Force.Clip.md)

The current clip

`axle` [Axle](VM.Models.Pre.Force.Axle.md)

The Axle.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial distance to center bolt value.

### <a id="VM_Models_Pre_Force_Clip_GetInitialHeight_VM_Models_Pre_Force_LeafInfo___System_Double_"></a> GetInitialHeight\(LeafInfo\[\], double\)

Get the initial height value.

```csharp
public static double GetInitialHeight(LeafInfo[] leafInfos, double distanceToCenterBolt)
```

#### Parameters

`leafInfos` LeafInfo\[\]

The LeafInfo array.

`distanceToCenterBolt` [double](https://learn.microsoft.com/dotnet/api/system.double)

The distance to center bolt.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial height value.

### <a id="VM_Models_Pre_Force_Clip_GetInitialWidth_VM_Models_Pre_Force_LeafInfo___"></a> GetInitialWidth\(LeafInfo\[\]\)

Get the initial width value.

```csharp
public static double GetInitialWidth(LeafInfo[] leafInfos)
```

#### Parameters

`leafInfos` LeafInfo\[\]

The LeafInfo array.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial width value.

### <a id="VM_Models_Pre_Force_Clip_Initialize"></a> Initialize\(\)

Initialize clip.

```csharp
public void Initialize()
```

### <a id="VM_Models_Pre_Force_Clip_Initialize_VM_Models_Pre_Force_Leaf___VM_Models_Pre_Force_Clip___VM_Models_Pre_Force_Axle_"></a> Initialize\(Leaf\[\], Clip\[\], Axle\)

Initialize clip.

```csharp
public void Initialize(Leaf[] leaves, Clip[] clips, Axle axle)
```

#### Parameters

`leaves` [Leaf](VM.Models.Pre.Force.Leaf.md)\[\]

The leaf array.

`clips` [Clip](VM.Models.Pre.Force.Clip.md)\[\]

The clip array.

`axle` [Axle](VM.Models.Pre.Force.Axle.md)

The axle

