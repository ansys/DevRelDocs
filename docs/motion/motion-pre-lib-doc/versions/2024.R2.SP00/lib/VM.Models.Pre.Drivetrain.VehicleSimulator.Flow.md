# Class Flow

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class Flow : ItemsContainerModelBase<Power>, IObservableObject, IDisposableObject, IValidatable, IHasName, IHasGuid
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ValidatableBase ← 
[ItemsContainerModelBase<Power\>](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md) ← 
[Flow](VM.Models.Pre.Drivetrain.VehicleSimulator.Flow.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable, 
IHasName, 
IHasGuid

#### Inherited Members

[ItemsContainerModelBase<Power\>.AddItem\(Power\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_AddItem\_\_0\_), 
[ItemsContainerModelBase<Power\>.Contains\(Guid\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_Contains\_System\_Guid\_), 
[ItemsContainerModelBase<Power\>.Contains\(Power\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_Contains\_\_0\_), 
[ItemsContainerModelBase<Power\>.RemoveItem\(Guid\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_RemoveItem\_System\_Guid\_), 
[ItemsContainerModelBase<Power\>.TryGetItem\(Guid, out Power\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_TryGetItem\_System\_Guid\_\_0\_\_), 
[ItemsContainerModelBase<Power\>.All](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_All), 
[ItemsContainerModelBase<Power\>.ItemsCount](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_ItemsCount), 
[ItemsContainerModelBase<Power\>.ObservableItems](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_ObservableItems), 
[ItemsContainerModelBase<Power\>.this\[int\]](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_Item\_System\_Int32\_), 
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

### Flow\(Guid, string\)

```csharp
public Flow(Guid guid, string name)
```

#### Parameters

`guid` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### CarrierGearRole

```csharp
public GearRoles CarrierGearRole { get; set; }
```

#### Property Value

 [GearRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.GearRoles.md)

### Guid

```csharp
[JsonProperty]
public Guid Guid { get; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### IsValid

```csharp
public override bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MotorMaxRPM

```csharp
public int MotorMaxRPM { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Pinion1ToothCount

```csharp
public int Pinion1ToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Pinion2ToothCount

```csharp
public int Pinion2ToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlanetaryType

```csharp
public PlanetaryTypes PlanetaryType { get; set; }
```

#### Property Value

 [PlanetaryTypes](VM.Models.Pre.Drivetrain.VehicleSimulator.PlanetaryTypes.md)

### PowerSplitMap

```csharp
public TorqueMap PowerSplitMap { get; set; }
```

#### Property Value

 [TorqueMap](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMap.md)

### Powers

```csharp
[JsonIgnore]
public IObservableCollection<Power> Powers { get; }
```

#### Property Value

 IObservableCollection<[Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)\>

### RingGearRole

```csharp
public GearRoles RingGearRole { get; set; }
```

#### Property Value

 [GearRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.GearRoles.md)

### RingToothCount

```csharp
public int RingToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SunGearRole

```csharp
public GearRoles SunGearRole { get; set; }
```

#### Property Value

 [GearRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.GearRoles.md)

### SunToothCount

```csharp
public int SunToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UsePowerSplitModule

```csharp
public bool UsePowerSplitModule { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetPower\(int\)

```csharp
public Power GetPower(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)

### GetPowerCount\(\)

```csharp
public int GetPowerCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetPowers\(\)

```csharp
public IEnumerable<Power> GetPowers()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)\>


