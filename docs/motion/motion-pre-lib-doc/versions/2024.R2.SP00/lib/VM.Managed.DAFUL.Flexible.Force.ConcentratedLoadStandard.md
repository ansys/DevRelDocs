# Class ConcentratedLoadStandard

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

This class is to represent the characteristic properties of standard type.

```csharp
public sealed class ConcentratedLoadStandard : ConcentratedLoadFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReserved
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md) ← 
[ConcentratedLoadStandard](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.md)

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
IReserved

#### Inherited Members

[ConcentratedLoadFunction.ReferenceMarker](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_ConcentratedLoadFunction\_ReferenceMarker), 
[ConcentratedLoadFunction.\_ReferenceMarker](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_ConcentratedLoadFunction\_\_ReferenceMarker), 
[ConcentratedLoadFunction.Type](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_ConcentratedLoadFunction\_Type), 
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
LinkContainer.SetContainer\(IOwned, bool\), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### ConcentratedLoadStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConcentratedLoadStandard()
```

## Properties

### ForceFunction

Gets or sets the force function.

```csharp
public ElementFunction ForceFunction { get; set; }
```

#### Property Value

 [ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md)

### FunctionDirectionType

Gets or sets the type of the direction.

```csharp
public ConcentratedLoadStandard.DirectionType FunctionDirectionType { get; set; }
```

#### Property Value

 [ConcentratedLoadStandard](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.md).[DirectionType](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.DirectionType.md)

### TorqueFunction

Gets or sets the torque function.

```csharp
public ElementFunction TorqueFunction { get; set; }
```

#### Property Value

 [ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md)

### Type

Gets the function type.

```csharp
public override ConcentratedLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.FunctionType.md)

### UseForceFunction

Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.ForceFunction" data-throw-if-not-resolved="false"></xref> is use.

```csharp
public bool UseForceFunction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseTorqueFunction

Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.TorqueFunction" data-throw-if-not-resolved="false"></xref> is use.

```csharp
public bool UseTorqueFunction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.


