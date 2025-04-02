#  Class ShiftMap

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class ShiftMap : ValidatableBase, IObservableObject, IDisposableObject, IValidatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ValidatableBase ← 
[ShiftMap](VM.Models.Pre.Drivetrain.VehicleSimulator.ShiftMap.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable

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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap__ctor"></a> ShiftMap\(\)

```csharp
public ShiftMap()
```

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap_GetAPSValues"></a> GetAPSValues\(\)

```csharp
public double[] GetAPSValues()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap_GetShiftProfileCount"></a> GetShiftProfileCount\(\)

```csharp
public int GetShiftProfileCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap_GetShiftValues_System_Int32_"></a> GetShiftValues\(int\)

```csharp
public IEnumerable<DataPoint> GetShiftValues(int shiftProfileIndex)
```

#### Parameters

`shiftProfileIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap_IsValidate_System_Int32_"></a> IsValidate\(int\)

```csharp
public bool IsValidate(int shiftProfileCount)
```

#### Parameters

`shiftProfileCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

