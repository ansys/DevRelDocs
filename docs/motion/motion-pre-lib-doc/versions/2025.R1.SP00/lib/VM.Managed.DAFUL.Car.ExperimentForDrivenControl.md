#  Class ExperimentForDrivenControl

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The experiment information class

```csharp
public class ExperimentForDrivenControl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExperimentForDrivenControl](VM.Managed.DAFUL.Car.ExperimentForDrivenControl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl__ctor"></a> ExperimentForDrivenControl\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.ExperimentForDrivenControl" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ExperimentForDrivenControl()
```

## Properties

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_ClutchFallTime"></a> ClutchFallTime

Gets or sets the clutch fall time.

```csharp
public double ClutchFallTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_ClutchRaiseTime"></a> ClutchRaiseTime

Gets or sets the clutch raise time.

```csharp
public double ClutchRaiseTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_GearPosition"></a> GearPosition

Gets or sets the gear position.

```csharp
public int GearPosition { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_GearShiftTime"></a> GearShiftTime

Gets or sets the gear shift time.

```csharp
public double GearShiftTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_InitialVelocity"></a> InitialVelocity

Gets or sets the initial velocity.

```csharp
public double InitialVelocity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_MiniManeuvers"></a> MiniManeuvers

Gets or sets the mini maneuvers.

```csharp
public List<double> MiniManeuvers { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_ThrottleFallTime"></a> ThrottleFallTime

Gets or sets the throttle fall time.

```csharp
public double ThrottleFallTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_ThrottleOffDelay"></a> ThrottleOffDelay

Gets or sets the throttle off delay.

```csharp
public double ThrottleOffDelay { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_ThrottleOnDelay"></a> ThrottleOnDelay

Gets or sets the throttle on delay.

```csharp
public double ThrottleOnDelay { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_ThrottleRaiseTime"></a> ThrottleRaiseTime

Gets or sets the throttle raise time.

```csharp
public double ThrottleRaiseTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_Car_ExperimentForDrivenControl_GetUSUBArgumentForFileDriven_System_String___"></a> GetUSUBArgumentForFileDriven\(string\[\]\)

Gets the USUB argument for file driven.

```csharp
public void GetUSUBArgumentForFileDriven(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar parameter.

