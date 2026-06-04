# Class Power

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class Power : ValidatableBase, IObservableObject, IDisposableObject, IValidatable, IHasName, IHasGuid
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ValidatableBase ← 
[Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable, 
IHasName, 
IHasGuid

#### Inherited Members

ValidatableBase.RaisePropertyChanged\(string\), 
ValidatableBase.SuspendValidate\(\), 
ValidatableBase.Validate\(\), 
ValidatableBase.Validate\(ValidationContext\), 
ValidatableBase.CanValidate, 
ValidatableBase.Errors, 
ValidatableBase.HasValidationAttribute, 
ValidatableBase.HasValidator, 
ValidatableBase.IsValid, 
ValidatableBase.ValidateTrigger, 
ValidatableBase.ErrorsChanged, 
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

### Power\(Guid, string\)

```csharp
[JsonConstructor]
public Power(Guid guid, string name)
```

#### Parameters

`guid` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### ClutchStiffness

```csharp
public double ClutchStiffness { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DampingRatio

```csharp
public double DampingRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DisengageDuration

```csharp
public double DisengageDuration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DisengageShiftPattern

```csharp
public ObservableCollection<DataPoint> DisengageShiftPattern { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<DataPoint\>

### DisengageShiftPatternCount

```csharp
[JsonIgnore]
public int? DisengageShiftPatternCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DistributionRatios

```csharp
[JsonIgnore]
[Obsolete]
public ObservableCollection<DataPoint> DistributionRatios { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<DataPoint\>

### EnableClutch

```csharp
public bool EnableClutch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EngageDuration

```csharp
public double EngageDuration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### EngageShiftPattern

```csharp
public ObservableCollection<DataPoint> EngageShiftPattern { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<DataPoint\>

### EngageShiftPatternCount

```csharp
[JsonIgnore]
public int? EngageShiftPatternCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### FullName

```csharp
public string FullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GearRatio

```csharp
public ObservableCollection<double> GearRatio { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### Guid

```csharp
public Guid Guid { get; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### IsRegenerativeBrakeRole

```csharp
[JsonIgnore]
public bool IsRegenerativeBrakeRole { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValid

```csharp
public override bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MomentOfInertia

```csharp
public double MomentOfInertia { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RegenerativeBrakeRatio

```csharp
public ObservableCollection<DataPoint> RegenerativeBrakeRatio { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<DataPoint\>

### Role

```csharp
public PowerRoles Role { get; set; }
```

#### Property Value

 [PowerRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.PowerRoles.md)

### ShiftDuration

```csharp
public double ShiftDuration { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TorqueMap

```csharp
public TorqueMap TorqueMap { get; set; }
```

#### Property Value

 [TorqueMap](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMap.md)

## Methods

### DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```


