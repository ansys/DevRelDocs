#  Class FEFilm\_Pole

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFEFilm.dll  

```csharp
public class FEFilm_Pole : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IFEFilm_TabshapeHexagon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[FEFilm\_Pole](VM.Managed.DAFUL.FEFilm\_Pole.md)

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
IFEFilm\_TabshapeHexagon

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

### <a id="VM_Managed_DAFUL_FEFilm_Pole__ctor"></a> FEFilm\_Pole\(\)

```csharp
public FEFilm_Pole()
```

## Properties

### <a id="VM_Managed_DAFUL_FEFilm_Pole_ChamferOfLength"></a> ChamferOfLength

```csharp
public ExpressionValueVariable ChamferOfLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_ChamferOfLength_Bottom"></a> ChamferOfLength\_Bottom

```csharp
public ExpressionValueVariable ChamferOfLength_Bottom { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_ChamferOfWidth"></a> ChamferOfWidth

```csharp
public ExpressionValueVariable ChamferOfWidth { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_ChamferOfWidth_Bottom"></a> ChamferOfWidth\_Bottom

```csharp
public ExpressionValueVariable ChamferOfWidth_Bottom { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_EndOffset"></a> EndOffset

```csharp
public ExpressionValueVariable EndOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_IntervalPole"></a> IntervalPole

```csharp
public ExpressionValueVariable IntervalPole { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_LengthPole"></a> LengthPole

```csharp
public ExpressionValueVariable LengthPole { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_MaxWidthElementPole"></a> MaxWidthElementPole

```csharp
public ExpressionValueVariable MaxWidthElementPole { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_NoOfElements"></a> NoOfElements

```csharp
public int NoOfElements { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_Pole_NoOfElementsPerPole"></a> NoOfElementsPerPole

```csharp
public int NoOfElementsPerPole { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_Pole_NoOfElementsPerPole_Bottom"></a> NoOfElementsPerPole\_Bottom

```csharp
public int NoOfElementsPerPole_Bottom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_Pole_NoOfNodes"></a> NoOfNodes

```csharp
public int NoOfNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_Pole_NoOfNodesPerPole"></a> NoOfNodesPerPole

```csharp
public int NoOfNodesPerPole { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_Pole_NoOfNodesPerPole_Bottom"></a> NoOfNodesPerPole\_Bottom

```csharp
public int NoOfNodesPerPole_Bottom { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FEFilm_Pole_StartOffset"></a> StartOffset

```csharp
public ExpressionValueVariable StartOffset { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_TabLocation"></a> TabLocation

```csharp
public TabLocationType TabLocation { get; set; }
```

#### Property Value

 TabLocationType

### <a id="VM_Managed_DAFUL_FEFilm_Pole_ThicknessPole"></a> ThicknessPole

```csharp
public ExpressionValueVariable ThicknessPole { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_ThicknessPole_Bottom"></a> ThicknessPole\_Bottom

```csharp
public ExpressionValueVariable ThicknessPole_Bottom { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_WidthPole"></a> WidthPole

```csharp
public ExpressionValueVariable WidthPole { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_FEFilm_Pole_WidthPole_Bottom"></a> WidthPole\_Bottom

```csharp
public ExpressionValueVariable WidthPole_Bottom { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_FEFilm_Pole_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>

### <a id="VM_Managed_DAFUL_FEFilm_Pole_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

