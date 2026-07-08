#  Class PulleyContent

Namespace: [VM.Managed.DAFUL.CPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.md)  
Assembly: VMDCPlacingConnector.dll  

This class is to represent the content of pulley.

```csharp
public class PulleyContent : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[PulleyContent](VM.Managed.DAFUL.CPlacingConnector.PulleyContent.md)

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

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent__ctor"></a> PulleyContent\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.SegmentStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PulleyContent()
```

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_AxialRadius"></a> AxialRadius

Gets or sets the axial radius.

```csharp
public ExpressionValueVariable AxialRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The axial radius is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_InnerRadius"></a> InnerRadius

Gets or sets the inner radius.

```csharp
public ExpressionValueVariable InnerRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The inner radius is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_Offset"></a> Offset

Gets or sets the offset.

```csharp
public ExpressionValueVariable Offset { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The offset is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_OuterRadius"></a> OuterRadius

Gets or sets the outer radius.

```csharp
public ExpressionValueVariable OuterRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The outer radius is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_SheaveAngle"></a> SheaveAngle

Gets or sets the sheave angle.

```csharp
public ExpressionValueVariable SheaveAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The sheave angle is null.

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_GetSplineValue_VM_Managed_TMatrix_"></a> GetSplineValue\(TMatrix\)

Gets the shape value for spline creation

```csharp
public List<SplineValue.TwoPoint> GetSplineValue(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The transform matrix.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SplineValue.TwoPoint\>

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_GetStartAndEndPoint_VM_Managed_TMatrix_"></a> GetStartAndEndPoint\(TMatrix\)

```csharp
public (VectorBase vecStartPoint, VectorBase vecEndPoint) GetStartAndEndPoint(TMatrix matT)
```

#### Parameters

`matT` TMatrix

#### Returns

 \(VectorBase [vecStartPoint](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.managed.vectorbase,vm.managed.vectorbase\-.vecstartpoint), VectorBase [vecEndPoint](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.managed.vectorbase,vm.managed.vectorbase\-.vecendpoint)\)

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyContent_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

