# Class GearShapeBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The gear shapeBase

```csharp
public abstract class GearShapeBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md)

#### Derived

[GearShapeCrossHelical](VM.Managed.DAFUL.GearTrain.GearShapeCrossHelical.md), 
[GearShapeCustomBase](VM.Managed.DAFUL.GearTrain.GearShapeCustomBase.md), 
[GearShapeHelical](VM.Managed.DAFUL.GearTrain.GearShapeHelical.md), 
[GearShapePin](VM.Managed.DAFUL.GearTrain.GearShapePin.md), 
[GearShapeRackBase](VM.Managed.DAFUL.GearTrain.GearShapeRackBase.md), 
[GearShapeSpur](VM.Managed.DAFUL.GearTrain.GearShapeSpur.md)

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

### GearShapeBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearShapeBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearShapeBase()
```

## Properties

### AddToProperty

Gets the flag whether this instance add to property or not.

```csharp
public virtual bool AddToProperty { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddToShaft

Gets the flag whether this instance add to shaft or not.

```csharp
public virtual bool AddToShaft { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExtraRotateAngle

Gets the extra rotate angle.

```csharp
public virtual double ExtraRotateAngle { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GearDepth

Gets the gear depth.

```csharp
public double GearDepth { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GraphicInvolutePointList

Gets or sets the graphic involute points.

```csharp
public List<GearShapeBase.InvolutePoint> GraphicInvolutePointList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[InvolutePoint](VM.Managed.DAFUL.GearTrain.GearShapeBase.InvolutePoint.md)\>

### InvolutePointList

Gets or sets the involute points.

```csharp
public List<GearShapeBase.InvolutePoint> InvolutePointList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[InvolutePoint](VM.Managed.DAFUL.GearTrain.GearShapeBase.InvolutePoint.md)\>

### IsHideBCD

Gets or sets a value indicating whether [hide BCD].

```csharp
public bool IsHideBCD { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHidePCD

Gets or sets a value indicating whether [hide PCD].

```csharp
public bool IsHidePCD { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHideRCD

Gets or sets a value indicating whether [hide RCD].

```csharp
public bool IsHideRCD { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHideTCD

Gets or sets a value indicating whether [hide TCD].

```csharp
public bool IsHideTCD { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MBCDList

Gets or sets the MBCD.

```csharp
public List<Vector> MBCDList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### ModificationGraphSplineValues

Gets or sets the modification graph spline values.

```csharp
public SplineValue[] ModificationGraphSplineValues { get; set; }
```

#### Property Value

 SplineValue\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

SplineValue list is null.
or
SplineValue list is null.
or
SplineValue is null.

### NodesetPointList

Gets or sets the nodeset points.

```csharp
public List<Vector> NodesetPointList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### ResultSpecification

Gets or sets the result spec.

```csharp
public GearShapeBase.Spec ResultSpecification { get; set; }
```

#### Property Value

 [GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[Spec](VM.Managed.DAFUL.GearTrain.GearShapeBase.Spec.md)

### SummaryOfResult

Gets or sets the result summary.

```csharp
public GearShapeBase.Summary SummaryOfResult { get; set; }
```

#### Property Value

 [GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[Summary](VM.Managed.DAFUL.GearTrain.GearShapeBase.Summary.md)

### ToleranceList

Gets or sets the tolerances.

```csharp
public List<GearShapeBase.Tolerance> ToleranceList { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[Tolerance](VM.Managed.DAFUL.GearTrain.GearShapeBase.Tolerance.md)\>

## Methods

### FillSpline\(IEnumerable<Vector\>, List<Vector\>, double, double\)

```csharp
protected void FillSpline(IEnumerable<Vector> source, List<Vector> target, double factorLength, double offset)
```

#### Parameters

`source` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Vector\>

`target` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

`factorLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`offset` [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetFactorForLength\(\)

Gets the length of the factor for.

```csharp
protected double GetFactorForLength()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetInvolutePointFor2D\(\)

Gets the involute point for2 d.

```csharp
public GearShapeBase.InvolutePoint GetInvolutePointFor2D()
```

#### Returns

 [GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[InvolutePoint](VM.Managed.DAFUL.GearTrain.GearShapeBase.InvolutePoint.md)

### GetLengthAndHeight\(ref double, ref double\)

Gets the height of the length and.

```csharp
public virtual void GetLengthAndHeight(ref double dLength, ref double dHeight)
```

#### Parameters

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

Length of the d.

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

Height of the d.

### GetPropertyOfGearSet\(\)

Gets the property of gear set.

```csharp
protected PropertyGearSetBase GetPropertyOfGearSet()
```

#### Returns

 [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### SetInvolutePoints\(List<XmlNode\[\]\>, bool\)

Sets the involute points.

```csharp
public virtual void SetInvolutePoints(List<XmlNode[]> lstPoint, bool bGraphic = false)
```

#### Parameters

`lstPoint` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)\[\]\>

The LST point.

`bGraphic` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The Graphic flag.

### SetInvolutePoints\(Vector\[\], Vector\[\], uint, uint\)

Sets the involute points.

```csharp
public virtual void SetInvolutePoints(Vector[] vecLeft, Vector[] vecRight, uint nTooth, uint nSlice)
```

#### Parameters

`vecLeft` Vector\[\]

The left point.

`vecRight` Vector\[\]

The right point.

`nTooth` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. tooth.

`nSlice` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. slice.

### SetNodesetPoints\(List<XmlNode\>\)

Sets the nodeset points.

```csharp
public virtual void SetNodesetPoints(List<XmlNode> lstPoint)
```

#### Parameters

`lstPoint` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)\>

The LST point.

### SetResultSpec\(XmlNode\)

Sets the result spec.

```csharp
public virtual void SetResultSpec(XmlNode node)
```

#### Parameters

`node` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The node.

### SetResultSpec\(GearData, uint, uint, uint, double, double, double\)

Sets the result spec.

```csharp
public void SetResultSpec(KissSoftInterface.GearData gearData, uint nNumInvolute, uint nNumTrochoid, uint nNumSlice, double dHelixAngle, double dCenterDistance, double dDensity)
```

#### Parameters

`gearData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[GearData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.GearData.md)

The gear data.

`nNumInvolute` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. Involute.

`nNumTrochoid` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. Trochoid.

`nNumSlice` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. Slice.

`dHelixAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The helix angle.

`dCenterDistance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The center distance.

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The density.

### SetResultSummary\(XmlNode\)

Sets the result summary.

```csharp
public void SetResultSummary(XmlNode node)
```

#### Parameters

`node` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The node.

### SetResultSummary\(GearData, double, double, double\)

Sets the result summary.

```csharp
public void SetResultSummary(KissSoftInterface.GearData gearData, double dNormalModule, double dNormalPressureAngle, double dHelixAngle)
```

#### Parameters

`gearData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[GearData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.GearData.md)

The gear data.

`dNormalModule` [double](https://learn.microsoft.com/dotnet/api/system.double)

The normal module.

`dNormalPressureAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The normal pressure angle.

`dHelixAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The helix angle.

### Show2D\(Canvas\)

Show2D.

```csharp
public virtual void Show2D(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas.

### Show2DCore\(Canvas, OMatrix\)

Show2D.

```csharp
protected void Show2DCore(Canvas canvas, OMatrix oMatrix)
```

#### Parameters

`canvas` Canvas

The canvas.

`oMatrix` OMatrix

The normal matrix.


