# Class ThermalStandard

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This class is to represent the thermal charactoristic properties of standard type.

```csharp
public sealed class ThermalStandard : ThermalFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReserved
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ThermalFunction](VM.Managed.DAFUL.Thermal.ThermalFunction.md) ← 
[ThermalStandard](VM.Managed.DAFUL.Thermal.ThermalStandard.md)

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

[ThermalFunction.Type](VM.Managed.DAFUL.Thermal.ThermalFunction.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalFunction\_Type), 
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

### ThermalStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ThermalStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ThermalStandard()
```

### ThermalStandard\(PropertyThermalBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ThermalStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ThermalStandard(PropertyThermalBase owner)
```

#### Parameters

`owner` [PropertyThermalBase](VM.Managed.DAFUL.Thermal.PropertyThermalBase.md)

The owner thermal propery.

## Properties

### ThermalFunctions

Get or set the thermal functions.

```csharp
public FunctionAndUnit[] ThermalFunctions { get; set; }
```

#### Property Value

 [FunctionAndUnit](VM.Managed.DAFUL.Thermal.FunctionAndUnit.md)\[\]

### Type

Gets the function type.

```csharp
public override ThermalFunction.FunctionType Type { get; }
```

#### Property Value

 [ThermalFunction](VM.Managed.DAFUL.Thermal.ThermalFunction.md).[FunctionType](VM.Managed.DAFUL.Thermal.ThermalFunction.FunctionType.md)

## Methods

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.


