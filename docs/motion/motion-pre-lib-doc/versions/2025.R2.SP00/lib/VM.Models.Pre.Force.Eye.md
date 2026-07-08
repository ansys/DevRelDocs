#  Class Eye

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This class is to represent the Eye.

```csharp
public class Eye : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Eye](VM.Models.Pre.Force.Eye.md)

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

### <a id="VM_Models_Pre_Force_Eye__ctor"></a> Eye\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Eye" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Eye()
```

### <a id="VM_Models_Pre_Force_Eye__ctor_VM_Models_Pre_IOwned_"></a> Eye\(IOwned\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Eye" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Eye(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### <a id="VM_Models_Pre_Force_Eye_ConnectionType"></a> ConnectionType

Gets or sets the connection type.

```csharp
public ConnectionType ConnectionType { get; set; }
```

#### Property Value

 [ConnectionType](VM.Models.Pre.Force.ConnectionType.md)

### <a id="VM_Models_Pre_Force_Eye_ConnectorProperty"></a> ConnectorProperty

Gets or sets the connector property.

```csharp
public PropertyBush ConnectorProperty { get; set; }
```

#### Property Value

 PropertyBush

### <a id="VM_Models_Pre_Force_Eye_InnerDiameter"></a> InnerDiameter

Gets or sets the inner diameter.

```csharp
public ExpressionValueVariable InnerDiameter { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Eye_Location"></a> Location

Gets the location.

```csharp
public (double X, double Z) Location { get; set; }
```

#### Property Value

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

### <a id="VM_Models_Pre_Force_Eye_PositionType"></a> PositionType

Gets or sets the position type.

```csharp
public EyePositionType PositionType { get; set; }
```

#### Property Value

 EyePositionType

### <a id="VM_Models_Pre_Force_Eye_ShapeType"></a> ShapeType

Gets or sets the shape type.

```csharp
public EyeShapeType ShapeType { get; set; }
```

#### Property Value

 EyeShapeType

## Methods

### <a id="VM_Models_Pre_Force_Eye_GetEyeBodyPosition_VM_Vector_System_Double_VM_TMatrix_"></a> GetEyeBodyPosition\(Vector, double, TMatrix\)

Gets the top, bottom position.

```csharp
public static (Vector Top, Vector Bottom) GetEyeBodyPosition(Vector centerPosition, double mainLeafWidth, TMatrix repositionMatrix)
```

#### Parameters

`centerPosition` Vector

The center position

`mainLeafWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The main leaf width.

`repositionMatrix` TMatrix

the reposition matrix.

#### Returns

 \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

The top, bottom position.

### <a id="VM_Models_Pre_Force_Eye_GetEyeBodyPosition_System_Double_System_Nullable_VM_TMatrix__"></a> GetEyeBodyPosition\(double, TMatrix?\)

Get the top, bottom position of the cylindrical eye body.

```csharp
public (Vector Top, Vector Bottom) GetEyeBodyPosition(double mainLeafWidth, TMatrix? repositionMatrix = null)
```

#### Parameters

`mainLeafWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The main leaf width.

`repositionMatrix` TMatrix?

The reposition matrix.

#### Returns

 \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

The top, bottom position

### <a id="VM_Models_Pre_Force_Eye_GetEyeBodyRadius_VM_Models_Pre_Force_Leaf_"></a> GetEyeBodyRadius\(Leaf\)

Get the outer, inner radius of the cylindrical eye body.

```csharp
public (double OuterRadius, double InnerRadius) GetEyeBodyRadius(Leaf mainLeaf)
```

#### Parameters

`mainLeaf` [Leaf](VM.Models.Pre.Force.Leaf.md)

The main leaf.

#### Returns

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [OuterRadius](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.outerradius), [double](https://learn.microsoft.com/dotnet/api/system.double) [InnerRadius](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.innerradius)\)

The outer, inner radius

### <a id="VM_Models_Pre_Force_Eye_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>

### <a id="VM_Models_Pre_Force_Eye_RaisePropertyChanged_System_String_"></a> RaisePropertyChanged\(string\)

```csharp
public override void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

