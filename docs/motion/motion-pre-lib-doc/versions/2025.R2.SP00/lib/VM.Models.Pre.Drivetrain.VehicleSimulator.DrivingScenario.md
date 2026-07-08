#  Class DrivingScenario

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class DrivingScenario : ValidatableBase, IObservableObject, IDisposableObject, IValidatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ValidatableBase ← 
[DrivingScenario](VM.Models.Pre.Drivetrain.VehicleSimulator.DrivingScenario.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable

#### Inherited Members

ValidatableBase.RaisePropertyChanged\(string\), 
ValidatableBase.SuspendValidate\(\), 
ValidatableBase.Validate\(\), 
ValidatableBase.Validate\(ValidationContext\), 
ValidatableBase.DisposeManagedResources\(\), 
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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_DrivingScenario__ctor"></a> DrivingScenario\(\)

```csharp
public DrivingScenario()
```

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_DrivingScenario_AccelerationPedalScenario"></a> AccelerationPedalScenario

```csharp
public Signal AccelerationPedalScenario { get; set; }
```

#### Property Value

 [Signal](VM.Models.Pre.Drivetrain.VehicleSimulator.Signal.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_DrivingScenario_AccelerationPedalScenarioSignal"></a> AccelerationPedalScenarioSignal

```csharp
[Obsolete]
public ObservableCollection<DataPoint> AccelerationPedalScenarioSignal { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_DrivingScenario_BrakePedalScenario"></a> BrakePedalScenario

```csharp
public Signal BrakePedalScenario { get; set; }
```

#### Property Value

 [Signal](VM.Models.Pre.Drivetrain.VehicleSimulator.Signal.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_DrivingScenario_BrakePedalScenarioSignal"></a> BrakePedalScenarioSignal

```csharp
[Obsolete]
public ObservableCollection<DataPoint> BrakePedalScenarioSignal { get; }
```

#### Property Value

 [ObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1)<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_DrivingScenario_EndTime"></a> EndTime

```csharp
public double? EndTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_DrivingScenario_IsValid"></a> IsValid

```csharp
public override bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

