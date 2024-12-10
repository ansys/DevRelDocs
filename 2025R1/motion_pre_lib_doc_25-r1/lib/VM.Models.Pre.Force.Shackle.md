#  Class Shackle

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This class is to represent the Shackle.

```csharp
public class Shackle : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Shackle](VM.Models.Pre.Force.Shackle.md)

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

### <a id="VM_Models_Pre_Force_Shackle__ctor"></a> Shackle\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.Shackle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Shackle()
```

## Properties

### <a id="VM_Models_Pre_Force_Shackle_ConnectionType"></a> ConnectionType

Gets or sets the connection type.

```csharp
public ConnectionType ConnectionType { get; set; }
```

#### Property Value

 [ConnectionType](VM.Models.Pre.Force.ConnectionType.md)

### <a id="VM_Models_Pre_Force_Shackle_ConnectorProperty"></a> ConnectorProperty

Gets or sets the connector property.

```csharp
public PropertyBush ConnectorProperty { get; set; }
```

#### Property Value

 PropertyBush

### <a id="VM_Models_Pre_Force_Shackle_Length"></a> Length

Gets the length.

```csharp
public double Length { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_Force_Shackle_Location"></a> Location

Gets the location.

```csharp
public ShackleLocationType Location { get; set; }
```

#### Property Value

 ShackleLocationType

### <a id="VM_Models_Pre_Force_Shackle_MassProperty"></a> MassProperty

Gets or sets the mass property.

```csharp
public ShackleMass MassProperty { get; set; }
```

#### Property Value

 [ShackleMass](VM.Models.Pre.Force.ShackleMass.md)

### <a id="VM_Models_Pre_Force_Shackle_OffsetX"></a> OffsetX

Gets the offset X to eye.

```csharp
public double OffsetX { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_Force_Shackle_OuterRadius"></a> OuterRadius

Gets or sets the outer radius.

```csharp
public ExpressionValueVariable OuterRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Shackle_PinRadius"></a> PinRadius

Gets or sets the pin radius.

```csharp
public ExpressionValueVariable PinRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Models_Pre_Force_Shackle_PositioningType"></a> PositioningType

Gets the positioning type.

```csharp
public ShacklePositonType PositioningType { get; set; }
```

#### Property Value

 ShacklePositonType

### <a id="VM_Models_Pre_Force_Shackle_ShackleToFramePosition"></a> ShackleToFramePosition

Gets the shackle to frame position.

```csharp
public (double X, double Z) ShackleToFramePosition { get; set; }
```

#### Property Value

 \([double](https://learn.microsoft.com/dotnet/api/system.double) [X](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.x), [double](https://learn.microsoft.com/dotnet/api/system.double) [Z](https://learn.microsoft.com/dotnet/api/system.valuetuple\-system.double,system.double\-.z)\)

## Methods

### <a id="VM_Models_Pre_Force_Shackle_GetEyeHolePosition_VM_Models_Pre_Force_Eye_System_Double_System_Nullable_VM_TMatrix__"></a> GetEyeHolePosition\(Eye, double, TMatrix?\)

Get the top, bottom position of the cylindrical eye hole body.

```csharp
public static (Vector Top, Vector Bottom) GetEyeHolePosition(Eye eye, double mainLeafWidth, TMatrix? repositionMatrix = null)
```

#### Parameters

`eye` [Eye](VM.Models.Pre.Force.Eye.md)

The eye.

`mainLeafWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The main leaf width.

`repositionMatrix` TMatrix?

The reposition matrix.

#### Returns

 \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

The top, bottom position

### <a id="VM_Models_Pre_Force_Shackle_GetShackleHolePosition_VM_Vector_System_Double_System_Nullable_VM_TMatrix__"></a> GetShackleHolePosition\(Vector, double, TMatrix?\)

Get the top, bottom position of the cylindrical shackle hole body.

```csharp
public static (Vector Top, Vector Bottom) GetShackleHolePosition(Vector centerPosition, double mainLeafWidth, TMatrix? repositionMatrix = null)
```

#### Parameters

`centerPosition` Vector

The center position

`mainLeafWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The main leaf width.

`repositionMatrix` TMatrix?

The reposition matrix.

#### Returns

 \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

The top, bottom position

### <a id="VM_Models_Pre_Force_Shackle_GetShackleHolePosition_System_Double_System_Nullable_VM_TMatrix__"></a> GetShackleHolePosition\(double, TMatrix?\)

Get the top, bottom position of the cylindrical shackle hole body.

```csharp
public (Vector Top, Vector Bottom) GetShackleHolePosition(double mainLeafWidth, TMatrix? repositionMatrix = null)
```

#### Parameters

`mainLeafWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The main leaf width.

`repositionMatrix` TMatrix?

The reposition matrix.

#### Returns

 \(Vector [Top](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.top), Vector [Bottom](https://learn.microsoft.com/dotnet/api/system.valuetuple\-vm.vector,vm.vector\-.bottom)\)

The top, bottom position

### <a id="VM_Models_Pre_Force_Shackle_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>

### <a id="VM_Models_Pre_Force_Shackle_InitializeMassProperty"></a> InitializeMassProperty\(\)

Initialize mass property.

```csharp
public void InitializeMassProperty()
```

