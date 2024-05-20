# Class LinkDataBase

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The abstract class for link data.

```csharp
public abstract class LinkDataBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[LinkDataBase](VM.Managed.CAD.Track.LinkDataBase.md)

#### Derived

[LinkDataSimple](VM.Managed.CAD.Track.LinkDataSimple.md), 
[LinkDataV](VM.Managed.CAD.Track.LinkDataV.md)

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

### LinkDataBase\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataBase()
```

### LinkDataBase\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataBase(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### BushBooleanType

Gets and sets bush boolean type.

```csharp
public BooleanType BushBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.Managed.CAD.Track.BooleanType.md)

### BushTransformLeft

Gets or sets the bush transform.

```csharp
public ObjectBase BushTransformLeft { get; set; }
```

#### Property Value

 ObjectBase

### BushTransformRight

Gets or sets the bush transform.

```csharp
public ObjectBase BushTransformRight { get; set; }
```

#### Property Value

 ObjectBase

### GeometryReference

Gets or sets the geometry reference.

```csharp
public ObjectBase GeometryReference { get; set; }
```

#### Property Value

 ObjectBase

### InnerGauge

Gets and sets inner gauge.

```csharp
public ExpressionValueVariable InnerGauge { get; set; }
```

#### Property Value

 ExpressionValueVariable

### IsApplyToFileProperty

Gets and sets boolean

```csharp
public bool IsApplyToFileProperty { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LDForLinkCombination

Gets and sets longitudinal distance from reference position.

```csharp
public Variable LDForLinkCombination { get; set; }
```

#### Property Value

 Variable

### LinkHeight1

Gets and sets link height1.

```csharp
public ExpressionValueVariable LinkHeight1 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### LinkHeight2

Gets and sets link height2.

```csharp
public ExpressionValueVariable LinkHeight2 { get; set; }
```

#### Property Value

 ExpressionValueVariable

### LinkPitch

Gets and sets link pitch.

```csharp
public ExpressionValueVariable LinkPitch { get; set; }
```

#### Property Value

 ExpressionValueVariable

### OuterGauge

Gets and sets outer gauge.

```csharp
public ExpressionValueVariable OuterGauge { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PinBooleanType

Gets and sets pin boolean type.

```csharp
public BooleanType PinBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.Managed.CAD.Track.BooleanType.md)

### PinDiameter

Gets and sets pin diameter.

```csharp
public ExpressionValueVariable PinDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PinTransformLeft

Gets or sets the pin transform.

```csharp
public ObjectBase PinTransformLeft { get; set; }
```

#### Property Value

 ObjectBase

### PinTransformRight

Gets or sets the pin transform.

```csharp
public ObjectBase PinTransformRight { get; set; }
```

#### Property Value

 ObjectBase

### PinWidth

Gets and sets pin width.

```csharp
public ExpressionValueVariable PinWidth { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PositionForLinkCombination

Gets and set position for link combination.

```csharp
public ObjectBase PositionForLinkCombination { get; set; }
```

#### Property Value

 ObjectBase

## Methods

### Calculation\_Gradient\_Bewteen\_ArbitraryPoint\_and\_Circle\(VectorBase, VectorBase, double\)

Called when the gradient calculate between arbitrary point and circle.

```csharp
protected double[] Calculation_Gradient_Bewteen_ArbitraryPoint_and_Circle(VectorBase _ptArbitrary, VectorBase ptCenterofCircle, double _dRadiusofCircle)
```

#### Parameters

`_ptArbitrary` VectorBase

The arbitrary point.

`ptCenterofCircle` VectorBase

The center point of circle.

`_dRadiusofCircle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius of circle.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of gradient.

### Calculation\_TangentPoint\_Through\_Line\_Circle\(double, VectorBase, VectorBase, double\)

Called when tangent points calculates through line to circle.

```csharp
protected List<VectorBase> Calculation_TangentPoint_Through_Line_Circle(double dGradient, VectorBase _ptArbitrary, VectorBase ptCenterofCircle, double _dRadiusofCircle)
```

#### Parameters

`dGradient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gradient.

`_ptArbitrary` VectorBase

The arbitrary point.

`ptCenterofCircle` VectorBase

The center point of circle.

`_dRadiusofCircle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius of circle.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The list of points

### CheckValidation\(\)

Check validation for member variables.

```csharp
public virtual void CheckValidation()
```

### CreateParameter\(\)

```csharp
protected abstract BuilderParamBase CreateParameter()
```

#### Returns

 BuilderParamBase

### FillParameter\(BuilderParamLink\)

```csharp
protected virtual void FillParameter(BuilderParamLink builderParam)
```

#### Parameters

`builderParam` BuilderParamLink

### GetFactorForLength\(\)

Gets the factor for length.

```csharp
protected double GetFactorForLength()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The factor.

### LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The obj notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### Update\_DesignPointWhenUpdatedDV\(\)

Call when "LDForLinkCombination" updated.

```csharp
public void Update_DesignPointWhenUpdatedDV()
```

### Update\_IDesignPointDataBecauseOfObjectControl\(TMatrix\)

Update tranformation of design point or design frame.

```csharp
public void Update_IDesignPointDataBecauseOfObjectControl(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The tramsformation matrix.

### Update\_Transforms\(\)

Update tranformation when geomerty changed.

```csharp
public void Update_Transforms()
```


