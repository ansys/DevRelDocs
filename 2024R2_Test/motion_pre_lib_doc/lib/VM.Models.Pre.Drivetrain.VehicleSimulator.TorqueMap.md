# Class TorqueMap

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

### TorqueMap\(bool\)

```csharp
public TorqueMap(bool isPowerSplitMap)
```

#### Parameters

`isPowerSplitMap` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### IsPowerSplitMap

```csharp
public bool IsPowerSplitMap { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetDistinctXValues\(\)

```csharp
public double[] GetDistinctXValues()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetMaximumY\(\)

```csharp
public double GetMaximumY()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetMinimumY\(\)

```csharp
public double GetMinimumY()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetXValues\(double\)

```csharp
public double[] GetXValues(double z)
```

#### Parameters

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetXYPairs\(double\)

```csharp
public IEnumerable<KeyValuePair<double, double>> GetXYPairs(double rpm)
```

#### Parameters

`rpm` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[double](https://learn.microsoft.com/dotnet/api/system.double), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

### GetYValue\(double, double\)

```csharp
public double GetYValue(double z, double x)
```

#### Parameters

`z` [double](https://learn.microsoft.com/dotnet/api/system.double)

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetZAndLastYValues\(\)

```csharp
public IEnumerable<DataPoint> GetZAndLastYValues()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<DataPoint\>

### GetZValues\(\)

```csharp
public double[] GetZValues()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]


