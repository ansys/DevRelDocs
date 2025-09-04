#  Class ShoeDataParametric

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The abstract class for parametric shoe data.

```csharp
public abstract class ShoeDataParametric : ShoeDataBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ShoeDataBase](VM.Managed.CAD.Track.ShoeDataBase.md) ← 
[ShoeDataParametric](VM.Managed.CAD.Track.ShoeDataParametric.md)

#### Derived

[ShoeDataDouble](VM.Managed.CAD.Track.ShoeDataDouble.md), 
[ShoeDataSingle](VM.Managed.CAD.Track.ShoeDataSingle.md), 
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

### <a id="VM_Managed_CAD_Track_ShoeDataParametric__ctor"></a> ShoeDataParametric\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataParametric" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataParametric()
```

### <a id="VM_Managed_CAD_Track_ShoeDataParametric__ctor_VM_Models_Pre_IOwned_"></a> ShoeDataParametric\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeDataParametric" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeDataParametric(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_FirstGH"></a> FirstGH

Gets and sets height of first grouser .

```csharp
public ExpressionValueVariable FirstGH { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_FirstGLW"></a> FirstGLW

Gets and sets lower width of first grouser.

```csharp
public ExpressionValueVariable FirstGLW { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_FirstGUW"></a> FirstGUW

Gets and sets upper width of first grouser

```csharp
public ExpressionValueVariable FirstGUW { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_LDP1"></a> LDP1

Gets and sets longitudinal distance from reference position to p1.

```csharp
public ExpressionValueVariable LDP1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_LDP2"></a> LDP2

Gets and sets longitudinal distance from reference position to p2.

```csharp
public ExpressionValueVariable LDP2 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_LDQ1"></a> LDQ1

Gets and sets longitudinal distance from reference position to q1.

```csharp
public ExpressionValueVariable LDQ1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_PlateHeight"></a> PlateHeight

Gets and sets plate thickness

```csharp
public ExpressionValueVariable PlateHeight { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_RP1"></a> RP1

Gets and sets arc radius with respect to p1.

```csharp
public ExpressionValueVariable RP1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_RP2"></a> RP2

Gets and sets arc radius with respect to p2.

```csharp
public ExpressionValueVariable RP2 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_RQ1"></a> RQ1

Gets and sets arc radius with respect to q1.

```csharp
public ExpressionValueVariable RQ1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_ShoeDistance1"></a> ShoeDistance1

Gets and sets longitudinal distance from reference position to first grouser center.

```csharp
public ExpressionValueVariable ShoeDistance1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_ShoeLength"></a> ShoeLength

Gets and sets shoe length from reference position to head.

```csharp
public ExpressionValueVariable ShoeLength { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_VDP1"></a> VDP1

Gets and sets vertical distance from reference position to p1.

```csharp
public ExpressionValueVariable VDP1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_VDP2"></a> VDP2

Gets and sets vertical distance from reference position to p2.

```csharp
public ExpressionValueVariable VDP2 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_VDQ1"></a> VDQ1

Gets and sets vertical distance from reference position to q1.

```csharp
public ExpressionValueVariable VDQ1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_GetPoints_XYPlane"></a> GetPoints\_XYPlane\(\)

Gets the profile data of shoe.

```csharp
public virtual List<VectorBase> GetPoints_XYPlane()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The Points

### <a id="VM_Managed_CAD_Track_ShoeDataParametric_Validation"></a> Validation\(\)

Checks the validation .

```csharp
public override void Validation()
```

