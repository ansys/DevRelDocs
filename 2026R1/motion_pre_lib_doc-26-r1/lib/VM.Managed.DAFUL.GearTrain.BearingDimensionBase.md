#  Class BearingDimensionBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the bearing dimension.

```csharp
public abstract class BearingDimensionBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[BearingDimensionBase](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md)

#### Derived

[BearingDimensionCylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDimensionCylindricalRoller.md), 
[BearingDimensionRadialBall](VM.Managed.DAFUL.GearTrain.BearingDimensionRadialBall.md), 
[BearingDimensionTaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDimensionTaperedRoller.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionBase__ctor"></a> BearingDimensionBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.BearingDimensionBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingDimensionBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionBase_Bore"></a> Bore

Gets or sets the bore.

```csharp
public ExpressionValueVariable Bore { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionBase_EstimateDetails"></a> EstimateDetails

Gets or sets a value indicating whether use [Estimate Details].

```csharp
public bool EstimateDetails { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionBase_OuterDiameter"></a> OuterDiameter

Gets or sets the outer diameter.

```csharp
public ExpressionValueVariable OuterDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionBase_Width"></a> Width

Gets or sets the width.

```csharp
public ExpressionValueVariable Width { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionBase_GetBuilder_VM_Managed_DAFUL_GearTrain_Bearing_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_Managed_TMatrix_System_Boolean_System_Boolean_VM_Managed_CAD_BuilderMultiSubtractSimple__"></a> GetBuilder\(Bearing, RacewayType, TMatrix, bool, bool, ref BuilderMultiSubtractSimple\)

Gets the builder.

```csharp
public abstract void GetBuilder(Bearing bearing, RacewayGeometryInfo.RacewayType type, TMatrix matTransf, bool bTruncated, bool bReverse, ref BuilderMultiSubtractSimple builder)
```

#### Parameters

`bearing` [Bearing](VM.Managed.DAFUL.GearTrain.Bearing.md)

The owner bearing.

`type` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md).[RacewayType](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.RacewayType.md)

The raceway type.

`matTransf` TMatrix

The transformation.

`bTruncated` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The truncated falg.

`bReverse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The reverse direction falg.

`builder` BuilderMultiSubtractSimple

The builder.

### <a id="VM_Managed_DAFUL_GearTrain_BearingDimensionBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The update event information.

