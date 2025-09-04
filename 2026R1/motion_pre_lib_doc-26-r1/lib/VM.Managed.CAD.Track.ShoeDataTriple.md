#  Class ShoeDataTriple

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The class for triple shoe data.

```csharp
public class ShoeDataTriple : ShoeDataParametric, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ShoeDataBase](VM.Managed.CAD.Track.ShoeDataBase.md) ← 
[ShoeDataParametric](VM.Managed.CAD.Track.ShoeDataParametric.md) ← 
[ShoeDataTriple](VM.Managed.CAD.Track.ShoeDataTriple.md)

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

[ShoeDataParametric.Validation\(\)](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_Validation), 
[ShoeDataParametric.GetPoints\_XYPlane\(\)](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_GetPoints\_XYPlane), 
[ShoeDataParametric.ShoeLength](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_ShoeLength), 
[ShoeDataParametric.PlateHeight](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_PlateHeight), 
[ShoeDataParametric.VDP1](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_VDP1), 
[ShoeDataParametric.LDP1](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_LDP1), 
[ShoeDataParametric.RP1](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_RP1), 
[ShoeDataParametric.VDP2](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_VDP2), 
[ShoeDataParametric.LDP2](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_LDP2), 
[ShoeDataParametric.RP2](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_RP2), 
[ShoeDataParametric.VDQ1](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_VDQ1), 
[ShoeDataParametric.LDQ1](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_LDQ1), 
[ShoeDataParametric.RQ1](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_RQ1), 
[ShoeDataParametric.ShoeDistance1](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_ShoeDistance1), 
[ShoeDataParametric.FirstGH](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_FirstGH), 
[ShoeDataParametric.FirstGUW](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_FirstGUW), 
[ShoeDataParametric.FirstGLW](VM.Managed.CAD.Track.ShoeDataParametric.md\#VM\_Managed\_CAD\_Track\_ShoeDataParametric\_FirstGLW), 
[ShoeDataBase.Update\_IDesignPointDataBecauseOfObjectControl\(TMatrix\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_Update\_IDesignPointDataBecauseOfObjectControl\_VM\_Managed\_TMatrix\_), 
[ShoeDataBase.Update\_DesignPointWhenUpdatedDV\(\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_Update\_DesignPointWhenUpdatedDV), 
[ShoeDataBase.Validation\(\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_Validation), 
[ShoeDataBase.GetFactorForLength\(\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_GetFactorForLength), 
[ShoeDataBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ShoeDataBase.ShoeWidth](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_ShoeWidth), 
[ShoeDataBase.StartNode](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_StartNode), 
[ShoeDataBase.EndNode](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_EndNode), 
[ShoeDataBase.LengthSegment](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_LengthSegment), 
[ShoeDataBase.DepthSegment](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_DepthSegment), 
[ShoeDataBase.IsApplyToFileProperty](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_IsApplyToFileProperty), 
[ShoeDataBase.LDForShoeCombination](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_LDForShoeCombination), 
[ShoeDataBase.PositionForShoeCombination](VM.Managed.CAD.Track.ShoeDataBase.md\#VM\_Managed\_CAD\_Track\_ShoeDataBase\_PositionForShoeCombination), 
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

### <a id="VM_Managed_CAD_Track_ShoeDataTriple__ctor"></a> ShoeDataTriple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataTriple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataTriple()
```

### <a id="VM_Managed_CAD_Track_ShoeDataTriple__ctor_VM_Models_Pre_IOwned_"></a> ShoeDataTriple\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataTriple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataTriple(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_SecondGH"></a> SecondGH

Gets and sets height of second grouser .

```csharp
public ExpressionValueVariable SecondGH { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_SecondGLW"></a> SecondGLW

Gets and sets lower width of second grouser.

```csharp
public ExpressionValueVariable SecondGLW { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_SecondGUW"></a> SecondGUW

Gets and sets upper width of second grouser

```csharp
public ExpressionValueVariable SecondGUW { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_ShoeDistance2"></a> ShoeDistance2

Gets and sets longitudinal distance from reference position to second grouser center.

```csharp
public ExpressionValueVariable ShoeDistance2 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_ShoeDistance3"></a> ShoeDistance3

Gets and sets longitudinal distance from reference position to third grouser center.

```csharp
public ExpressionValueVariable ShoeDistance3 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_TailHeight"></a> TailHeight

Gets and sets height for tail.

```csharp
public ExpressionValueVariable TailHeight { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_ThirdGH"></a> ThirdGH

Gets and sets height of third grouser .

```csharp
public ExpressionValueVariable ThirdGH { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_ThirdGLW"></a> ThirdGLW

Gets and sets lower width of third grouser.

```csharp
public ExpressionValueVariable ThirdGLW { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_ThirdGUW"></a> ThirdGUW

Gets and sets upper width of third grouser

```csharp
public ExpressionValueVariable ThirdGUW { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_GetPoints_XYPlane"></a> GetPoints\_XYPlane\(\)

Gets the profile data of shoe.

```csharp
public override List<VectorBase> GetPoints_XYPlane()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The Points

### <a id="VM_Managed_CAD_Track_ShoeDataTriple_Validation"></a> Validation\(\)

Checks the validation .

```csharp
public override void Validation()
```

