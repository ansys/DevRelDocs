# Class BearingStiffness

Namespace: [VM.Managed.DAFUL.Bearing.Force](VM.Managed.DAFUL.Bearing.Force.md)  
Assembly: VMDBearing.dll  

This class is to represent the Bearing Stiffness

```csharp
public class BearingStiffness : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[BearingStiffness](VM.Managed.DAFUL.Bearing.Force.BearingStiffness.md)

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

### BearingStiffness\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStiffness()
```

### BearingStiffness\(double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStiffness(double dDXFX, double dDYFX, double dDZFX, double dRXFX, double dRYFX, double dDXFY, double dDYFY, double dDZFY, double dRXFY, double dRYFY, double dDXFZ, double dDYFZ, double dDZFZ, double dRXFZ, double dRYFZ, double dDXMX, double dDYMX, double dDZMX, double dRXMX, double dRYMX, double dDXMY, double dDYMY, double dDZMY, double dRXMY, double dRYMY)
```

#### Parameters

`dDXFX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dx-fx.

`dDYFX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dy-fx.

`dDZFX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dz-fx.

`dRXFX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of rx-fx.

`dRYFX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of ry-fx.

`dDXFY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dx-fy.

`dDYFY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dy-fy.

`dDZFY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dz-fy.

`dRXFY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of rx-fy.

`dRYFY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of ry-fy.

`dDXFZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dx-fz.

`dDYFZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dy-fz.

`dDZFZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dz-fz.

`dRXFZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of rx-fz.

`dRYFZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of ry-fz.

`dDXMX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dx-mx.

`dDYMX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dy-mx.

`dDZMX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dz-mx.

`dRXMX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of rx-mx.

`dRYMX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of ry-mx.

`dDXMY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dx-my.

`dDYMY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dy-my.

`dDZMY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of dz-my.

`dRXMY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of rx-my.

`dRYMY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness value of ry-my.

### BearingStiffness\(Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStiffness(Variable varDXFX, Variable varDYFX, Variable varDZFX, Variable varRXFX, Variable varRYFX, Variable varDXFY, Variable varDYFY, Variable varDZFY, Variable varRXFY, Variable varRYFY, Variable varDXFZ, Variable varDYFZ, Variable varDZFZ, Variable varRXFZ, Variable varRYFZ, Variable varDXMX, Variable varDYMX, Variable varDZMX, Variable varRXMX, Variable varRYMX, Variable varDXMY, Variable varDYMY, Variable varDZMY, Variable varRXMY, Variable varRYMY)
```

#### Parameters

`varDXFX` Variable

The stiffness value of dx-fx.

`varDYFX` Variable

The stiffness value of dy-fx.

`varDZFX` Variable

The stiffness value of dz-fx.

`varRXFX` Variable

The stiffness value of rx-fx.

`varRYFX` Variable

The stiffness value of ry-fx.

`varDXFY` Variable

The stiffness value of dx-fy.

`varDYFY` Variable

The stiffness value of dy-fy.

`varDZFY` Variable

The stiffness value of dz-fy.

`varRXFY` Variable

The stiffness value of rx-fy.

`varRYFY` Variable

The stiffness value of ry-fy.

`varDXFZ` Variable

The stiffness value of dx-fz.

`varDYFZ` Variable

The stiffness value of dy-fz.

`varDZFZ` Variable

The stiffness value of dz-fz.

`varRXFZ` Variable

The stiffness value of rx-fz.

`varRYFZ` Variable

The stiffness value of ry-fz.

`varDXMX` Variable

The stiffness value of dx-mx.

`varDYMX` Variable

The stiffness value of dy-mx.

`varDZMX` Variable

The stiffness value of dz-mx.

`varRXMX` Variable

The stiffness value of rx-mx.

`varRYMX` Variable

The stiffness value of ry-mx.

`varDXMY` Variable

The stiffness value of dx-my.

`varDYMY` Variable

The stiffness value of dy-my.

`varDZMY` Variable

The stiffness value of dz-my.

`varRXMY` Variable

The stiffness value of rx-my.

`varRYMY` Variable

The stiffness value of ry-my.

## Properties

### DXFX

Gets or sets the stiffness value of dx-fx.

```csharp
public ExpressionValueVariable DXFX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DXFY

Gets or sets the stiffness value of dx-fy.

```csharp
public ExpressionValueVariable DXFY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DXFZ

Gets or sets the stiffness value of dx-fz.

```csharp
public ExpressionValueVariable DXFZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DXMX

Gets or sets the stiffness value of dx-mx.

```csharp
public ExpressionValueVariable DXMX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DXMY

Gets or sets the stiffness value of dx-my.

```csharp
public ExpressionValueVariable DXMY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DYFX

Gets or sets the stiffness value of dy-fx.

```csharp
public ExpressionValueVariable DYFX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DYFY

Gets or sets the stiffness value of dy-fy.

```csharp
public ExpressionValueVariable DYFY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DYFZ

Gets or sets the stiffness value of dy-fz.

```csharp
public ExpressionValueVariable DYFZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DYMX

Gets or sets the stiffness value of dy-mx.

```csharp
public ExpressionValueVariable DYMX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DYMY

Gets or sets the stiffness value of dy-my.

```csharp
public ExpressionValueVariable DYMY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DZFX

Gets or sets the stiffness value of dz-fx.

```csharp
public ExpressionValueVariable DZFX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DZFY

Gets or sets the stiffness value of dz-fy.

```csharp
public ExpressionValueVariable DZFY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DZFZ

Gets or sets the stiffness value of dz-fz.

```csharp
public ExpressionValueVariable DZFZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DZMX

Gets or sets the stiffness value of dz-mx.

```csharp
public ExpressionValueVariable DZMX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DZMY

Gets or sets the stiffness value of dz-my.

```csharp
public ExpressionValueVariable DZMY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RXFX

Gets or sets the stiffness value of rx-fx.

```csharp
public ExpressionValueVariable RXFX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RXFY

Gets or sets the stiffness value of rx-fy.

```csharp
public ExpressionValueVariable RXFY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RXFZ

Gets or sets the stiffness value of rx-fz.

```csharp
public ExpressionValueVariable RXFZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RXMX

Gets or sets the stiffness value of rx-mx.

```csharp
public ExpressionValueVariable RXMX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RXMY

Gets or sets the stiffness value of rx-my.

```csharp
public ExpressionValueVariable RXMY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RYFX

Gets or sets the stiffness value of ry-fx.

```csharp
public ExpressionValueVariable RYFX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RYFY

Gets or sets the stiffness value of ry-fy.

```csharp
public ExpressionValueVariable RYFY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RYFZ

Gets or sets the stiffness value of ry-fz.

```csharp
public ExpressionValueVariable RYFZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RYMX

Gets or sets the stiffness value of ry-mx.

```csharp
public ExpressionValueVariable RYMX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RYMY

Gets or sets the stiffness value of ry-my.

```csharp
public ExpressionValueVariable RYMY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Torque

Gets or sets the torque value.

```csharp
public ExpressionValueVariable Torque { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### SetDefaultValue\(\)

Set default value

```csharp
public void SetDefaultValue()
```


