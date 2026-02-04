# Class Power
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class Power : ValidatableBase, IObservableObject, IDisposableObject, IValidatable, IHasName, IHasGuid
```

#### Inheritance

object ← 
ObservableObject ← 
[ValidatableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs) ← 
[Power](VM.Models.Pre.Drivetrain.VehicleSimulator.Power.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable, 
IHasName, 
IHasGuid

#### Inherited Members

[ValidatableBase.RaisePropertyChanged\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.SuspendValidate\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.Validate\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.Validate\(ValidationContext\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.CanValidate](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.Errors](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.HasValidationAttribute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.HasValidator](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.IsValid](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.ValidateTrigger](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
[ValidatableBase.ErrorsChanged](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs), 
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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power__ctor_System_Guid_System_String_"></a> Power\(Guid, string\)

```csharp
[JsonConstructor]
public Power(Guid guid, string name)
```

#### Parameters

`guid` Guid

`name` string

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_ClutchStiffness"></a> ClutchStiffness

```csharp
public double ClutchStiffness { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_DampingRatio"></a> DampingRatio

```csharp
public double DampingRatio { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_DisengageDuration"></a> DisengageDuration

```csharp
public double DisengageDuration { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_DisengageShiftPattern"></a> DisengageShiftPattern

```csharp
public ObservableCollection<DataPoint> DisengageShiftPattern { get; }
```

#### Property Value

 ObservableCollection<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_DisengageShiftPatternCount"></a> DisengageShiftPatternCount

```csharp
[JsonIgnore]
public int? DisengageShiftPatternCount { get; }
```

#### Property Value

 int?

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_DisplayName"></a> DisplayName

```csharp
public string DisplayName { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_DistributionRatios"></a> DistributionRatios

```csharp
[JsonIgnore]
[Obsolete]
public ObservableCollection<DataPoint> DistributionRatios { get; }
```

#### Property Value

 ObservableCollection<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_EnableClutch"></a> EnableClutch

```csharp
public bool EnableClutch { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_EngageDuration"></a> EngageDuration

```csharp
public double EngageDuration { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_EngageShiftPattern"></a> EngageShiftPattern

```csharp
public ObservableCollection<DataPoint> EngageShiftPattern { get; }
```

#### Property Value

 ObservableCollection<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_EngageShiftPatternCount"></a> EngageShiftPatternCount

```csharp
[JsonIgnore]
public int? EngageShiftPatternCount { get; }
```

#### Property Value

 int?

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_FullName"></a> FullName

```csharp
public string FullName { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_GearRatio"></a> GearRatio

```csharp
public ObservableCollection<double> GearRatio { get; }
```

#### Property Value

 ObservableCollection<double\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_Guid"></a> Guid

```csharp
public Guid Guid { get; }
```

#### Property Value

 Guid

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_IsRegenerativeBrakeRole"></a> IsRegenerativeBrakeRole

```csharp
[JsonIgnore]
public bool IsRegenerativeBrakeRole { get; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_IsValid"></a> IsValid

```csharp
public override bool IsValid { get; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_MomentOfInertia"></a> MomentOfInertia

```csharp
public double MomentOfInertia { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_RegenerativeBrakeRatio"></a> RegenerativeBrakeRatio

```csharp
public ObservableCollection<DataPoint> RegenerativeBrakeRatio { get; }
```

#### Property Value

 ObservableCollection<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_Role"></a> Role

```csharp
public PowerRoles Role { get; set; }
```

#### Property Value

 [PowerRoles](VM.Models.Pre.Drivetrain.VehicleSimulator.PowerRoles.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_ShiftDuration"></a> ShiftDuration

```csharp
public double ShiftDuration { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_TorqueMap"></a> TorqueMap

```csharp
public TorqueMap TorqueMap { get; set; }
```

#### Property Value

 [TorqueMap](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMap.md)

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Power_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

