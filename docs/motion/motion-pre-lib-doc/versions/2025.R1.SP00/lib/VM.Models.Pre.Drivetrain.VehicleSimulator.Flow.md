#  Class Flow

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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow__ctor_System_Guid_System_String_"></a> Flow\(Guid, string\)

```csharp
public Flow(Guid guid, string name)
```

#### Parameters

`guid` [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_CarrierGearRole"></a> CarrierGearRole

```csharp
public GearRoles CarrierGearRole { get; set; }
```

#### Property Value

 [GearRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.GearRoles.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_Guid"></a> Guid

```csharp
[JsonProperty]
public Guid Guid { get; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_IsValid"></a> IsValid

```csharp
public override bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_MotorMaxRPM"></a> MotorMaxRPM

```csharp
public int MotorMaxRPM { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_Pinion1ToothCount"></a> Pinion1ToothCount

```csharp
public int Pinion1ToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_Pinion2ToothCount"></a> Pinion2ToothCount

```csharp
public int Pinion2ToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_PlanetaryType"></a> PlanetaryType

```csharp
public PlanetaryTypes PlanetaryType { get; set; }
```

#### Property Value

 [PlanetaryTypes](VM.Models.Pre.Drivetrain.VehicleSimulator.PlanetaryTypes.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_PowerSplitMap"></a> PowerSplitMap

```csharp
public TorqueMap PowerSplitMap { get; set; }
```

#### Property Value

 [TorqueMap](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMap.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_Powers"></a> Powers

```csharp
[JsonIgnore]
public IObservableCollection<Power> Powers { get; }
```

#### Property Value

 IObservableCollection<[Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_RingGearRole"></a> RingGearRole

```csharp
public GearRoles RingGearRole { get; set; }
```

#### Property Value

 [GearRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.GearRoles.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_RingToothCount"></a> RingToothCount

```csharp
public int RingToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_SunGearRole"></a> SunGearRole

```csharp
public GearRoles SunGearRole { get; set; }
```

#### Property Value

 [GearRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.GearRoles.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_SunToothCount"></a> SunToothCount

```csharp
public int SunToothCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_UsePowerSplitModule"></a> UsePowerSplitModule

```csharp
public bool UsePowerSplitModule { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_GetPower_System_Int32_"></a> GetPower\(int\)

```csharp
public Power GetPower(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_GetPowerCount"></a> GetPowerCount\(\)

```csharp
public int GetPowerCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Flow_GetPowers"></a> GetPowers\(\)

```csharp
public IEnumerable<Power> GetPowers()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)\>

