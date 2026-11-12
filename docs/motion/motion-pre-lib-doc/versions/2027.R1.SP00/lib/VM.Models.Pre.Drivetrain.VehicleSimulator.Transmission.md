# Class Transmission
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Transmission"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class Transmission : ValidatableBase, IObservableObject, IDisposableObject, IValidatable
```

#### Inheritance

object ← 
ObservableObject ← 
ValidatableBase ← 
[Transmission](VM.Models.Pre.Drivetrain.VehicleSimulator.Transmission.md)

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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Transmission__ctor"></a> Transmission\(\)

```csharp
public Transmission()
```

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Transmission_FinalGearRatio"></a> FinalGearRatio

```csharp
public double FinalGearRatio { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Transmission_GearRatioTable"></a> GearRatioTable

```csharp
public DataTable GearRatioTable { get; set; }
```

#### Property Value

 DataTable

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Transmission_IsValid"></a> IsValid

유효성 검사의 성공 여부를 나타내는 값을 가져옵니다.

```csharp
public override bool IsValid { get; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Transmission_ShiftMap"></a> ShiftMap

```csharp
public ShiftMap ShiftMap { get; set; }
```

#### Property Value

 [ShiftMap](VM.Models.Pre.Drivetrain.VehicleSimulator.ShiftMap.md)

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_Transmission_GetStepCount"></a> GetStepCount\(\)

```csharp
public int GetStepCount()
```

#### Returns

 int

