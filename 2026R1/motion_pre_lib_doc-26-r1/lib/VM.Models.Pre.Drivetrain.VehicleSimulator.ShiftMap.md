# Class ShiftMap
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class ShiftMap : ValidatableBase, IObservableObject, IDisposableObject, IValidatable
```

#### Inheritance

object ← 
ObservableObject ← 
[ValidatableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs) ← 
[ShiftMap](VM.Models.Pre.Drivetrain.VehicleSimulator.ShiftMap.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IValidatable

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

 double\[\]

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap_GetShiftProfileCount"></a> GetShiftProfileCount\(\)

```csharp
public int GetShiftProfileCount()
```

#### Returns

 int

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap_GetShiftValues_System_Int32_"></a> GetShiftValues\(int\)

```csharp
public IEnumerable<DataPoint> GetShiftValues(int shiftProfileIndex)
```

#### Parameters

`shiftProfileIndex` int

#### Returns

 IEnumerable<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_ShiftMap_IsValidate_System_Int32_"></a> IsValidate\(int\)

```csharp
public bool IsValidate(int shiftProfileCount)
```

#### Parameters

`shiftProfileCount` int

#### Returns

 bool

