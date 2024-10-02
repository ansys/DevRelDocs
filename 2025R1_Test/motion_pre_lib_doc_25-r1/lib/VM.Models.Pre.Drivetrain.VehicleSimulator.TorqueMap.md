#  Class TorqueMap

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public sealed class TorqueMap : ValidatableBase, IObservableObject, IDisposableObject, IValidatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ValidatableBase ← 
[TorqueMap](VM.Models.Pre.Drivetrain.VehicleSimulator.TorqueMap.md)

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

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap__ctor_System_Boolean_"></a> TorqueMap\(bool\)

```csharp
public TorqueMap(bool isPowerSplitMap)
```

#### Parameters

`isPowerSplitMap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_IsPowerSplitMap"></a> IsPowerSplitMap

```csharp
public bool IsPowerSplitMap { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetDistinctXValues"></a> GetDistinctXValues\(\)

```csharp
public double[] GetDistinctXValues()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetMaximumY"></a> GetMaximumY\(\)

```csharp
public double GetMaximumY()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetMinimumY"></a> GetMinimumY\(\)

```csharp
public double GetMinimumY()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetXValues_System_Double_"></a> GetXValues\(double\)

```csharp
public double[] GetXValues(double z)
```

#### Parameters

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetXYPairs_System_Double_"></a> GetXYPairs\(double\)

```csharp
public IEnumerable<KeyValuePair<double, double>> GetXYPairs(double rpm)
```

#### Parameters

`rpm` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[double](https://learn.microsoft.com/dotnet/api/system.double), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetYValue_System_Double_System_Double_"></a> GetYValue\(double, double\)

```csharp
public double GetYValue(double z, double x)
```

#### Parameters

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetZAndLastYValues"></a> GetZAndLastYValues\(\)

```csharp
public IEnumerable<DataPoint> GetZAndLastYValues()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<DataPoint\>

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_TorqueMap_GetZValues"></a> GetZValues\(\)

```csharp
public double[] GetZValues()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

