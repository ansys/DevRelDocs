# Class TorqueMap
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class TorqueMap : ValidatableBase, IObservableObject, IDisposableObject, IValidatable
```

#### Inheritance

object ← 
ObservableObject ← 
[ValidatableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Extensions/Models/ValidatableBase.cs) ← 
[TorqueMap](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMap.md)

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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap__ctor_System_Boolean_"></a> TorqueMap\(bool\)

```csharp
public TorqueMap(bool isPowerSplitMap)
```

#### Parameters

`isPowerSplitMap` bool

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_IsPowerSplitMap"></a> IsPowerSplitMap

```csharp
public bool IsPowerSplitMap { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetDistinctXValues"></a> GetDistinctXValues\(\)

```csharp
public double[] GetDistinctXValues()
```

#### Returns

 double\[\]

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetMaximumY"></a> GetMaximumY\(\)

```csharp
public double GetMaximumY()
```

#### Returns

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetMinimumY"></a> GetMinimumY\(\)

```csharp
public double GetMinimumY()
```

#### Returns

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetXValues_System_Double_"></a> GetXValues\(double\)

```csharp
public double[] GetXValues(double z)
```

#### Parameters

`z` double

#### Returns

 double\[\]

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetXYPairs_System_Double_"></a> GetXYPairs\(double\)

```csharp
public IEnumerable<KeyValuePair<double, double>> GetXYPairs(double rpm)
```

#### Parameters

`rpm` double

#### Returns

 IEnumerable<KeyValuePair<double, double\>\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetYValue_System_Double_System_Double_"></a> GetYValue\(double, double\)

```csharp
public double GetYValue(double z, double x)
```

#### Parameters

`z` double

`x` double

#### Returns

 double

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetZAndLastYValues"></a> GetZAndLastYValues\(\)

```csharp
public IEnumerable<DataPoint> GetZAndLastYValues()
```

#### Returns

 IEnumerable<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetZValues"></a> GetZValues\(\)

```csharp
public double[] GetZValues()
```

#### Returns

 double\[\]

