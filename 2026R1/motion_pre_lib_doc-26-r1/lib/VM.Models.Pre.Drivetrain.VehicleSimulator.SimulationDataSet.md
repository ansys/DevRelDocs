#  Class SimulationDataSet

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class SimulationDataSet : ItemsContainerModelBase<Flow>, IObservableObject, IDisposableObject, IValidatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ValidatableBase ← 
[ItemsContainerModelBase<Flow\>](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md) ← 
[SimulationDataSet](VM.Models.Pre.Drivetrain.VehicleSimulator.SimulationDataSet.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable

#### Inherited Members

[ItemsContainerModelBase<Flow\>.AddItem\(Flow\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_AddItem\_\_0\_), 
[ItemsContainerModelBase<Flow\>.Contains\(Guid\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_Contains\_System\_Guid\_), 
[ItemsContainerModelBase<Flow\>.Contains\(Flow\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_Contains\_\_0\_), 
[ItemsContainerModelBase<Flow\>.RemoveItem\(Guid\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_RemoveItem\_System\_Guid\_), 
[ItemsContainerModelBase<Flow\>.TryGetItem\(Guid, out Flow\)](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_TryGetItem\_System\_Guid\_\_0\_\_), 
[ItemsContainerModelBase<Flow\>.All](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_All), 
[ItemsContainerModelBase<Flow\>.ItemsCount](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_ItemsCount), 
[ItemsContainerModelBase<Flow\>.ObservableItems](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_ObservableItems), 
[ItemsContainerModelBase<Flow\>.this\[int\]](VM.Models.Pre.Drivetrain.VehicleSimulator.ItemsContainerModelBase\-1.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_ItemsContainerModelBase\_1\_Item\_System\_Int32\_), 
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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[SimulationDataSetExtensions.Save\(SimulationDataSet\)](VM.Models.Pre.Drivetrain.VehicleSimulator.SimulationDataSetExtensions.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_SimulationDataSetExtensions\_Save\_VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_SimulationDataSet\_), 
[SimulationDataSetExtensions.Save\(SimulationDataSet, string\)](VM.Models.Pre.Drivetrain.VehicleSimulator.SimulationDataSetExtensions.md\#VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_SimulationDataSetExtensions\_Save\_VM\_Models\_Pre\_Drivetrain\_VehicleSimulator\_SimulationDataSet\_System\_String\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet__ctor"></a> SimulationDataSet\(\)

```csharp
public SimulationDataSet()
```

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_Brake"></a> Brake

```csharp
public Brake Brake { get; }
```

#### Property Value

 [Brake](VM.Models.Pre.Drivetrain.VehicleSimulator.Brake.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_DocumentPath"></a> DocumentPath

```csharp
[JsonIgnore]
public string DocumentPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_DrivingScenario"></a> DrivingScenario

```csharp
public DrivingScenario DrivingScenario { get; }
```

#### Property Value

 [DrivingScenario](VM.Models.Pre.Drivetrain.VehicleSimulator.DrivingScenario.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_Flows"></a> Flows

```csharp
public IObservableCollection<Flow> Flows { get; }
```

#### Property Value

 IObservableCollection<[Flow](VM.Models.Pre.Drivetrain.VehicleSimulator.Flow.md)\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_IsAllValid"></a> IsAllValid

```csharp
[JsonIgnore]
public bool IsAllValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_IsValid"></a> IsValid

```csharp
public override bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_ResultPath"></a> ResultPath

```csharp
public string ResultPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_Transmission"></a> Transmission

```csharp
public Transmission Transmission { get; }
```

#### Property Value

 [Transmission](VM.Models.Pre.Drivetrain.VehicleSimulator.Transmission.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_Vehicle"></a> Vehicle

```csharp
public Vehicle Vehicle { get; }
```

#### Property Value

 [Vehicle](VM.Models.Pre.Drivetrain.VehicleSimulator.Vehicle.md)

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_GetFlowCount"></a> GetFlowCount\(\)

```csharp
public int GetFlowCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_GetFlows"></a> GetFlows\(\)

```csharp
public IEnumerable<Flow> GetFlows()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Flow](VM.Models.Pre.Drivetrain.VehicleSimulator.Flow.md)\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_LoadFromFile_System_String_"></a> LoadFromFile\(string\)

```csharp
public static SimulationDataSet LoadFromFile(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SimulationDataSet](VM.Models.Pre.Drivetrain.VehicleSimulator.SimulationDataSet.md)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_SimulationDataSet_LoadFromJSON_System_String_"></a> LoadFromJSON\(string\)

```csharp
public static SimulationDataSet LoadFromJSON(string json)
```

#### Parameters

`json` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [SimulationDataSet](VM.Models.Pre.Drivetrain.VehicleSimulator.SimulationDataSet.md)

