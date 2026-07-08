# Struct PowerFlowParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the power flow

```csharp
public struct PowerFlowParameters
```

## Constructors

### PowerFlowParameters\(\)

Default constructor

```csharp
public PowerFlowParameters()
```

## Properties

### Duration

The duration. The default value is 0.

```csharp
public ExpressionValueVariable Duration { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### EndTime

The end time. The default value is 1.

```csharp
public ExpressionValueVariable EndTime { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### GearPairs

The gear pairs.

```csharp
public IEnumerable<Obj> GearPairs { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

### InputEndSpeed

The input end speed. The default value is 100.

```csharp
public ExpressionValueVariable InputEndSpeed { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### InputPower

The input power. The default value is 1.

```csharp
public ExpressionValueVariable InputPower { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### InputPowerFilePath

The input power file path. The default value is "".

```csharp
public string InputPowerFilePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InputShaftSet

The input shaft set.

```csharp
public Obj InputShaftSet { readonly get; set; }
```

#### Property Value

 Obj

### InputShaftSetInfos

The input shaft set information.

```csharp
public IEnumerable<InputShaftSetParameters> InputShaftSetInfos { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[InputShaftSetParameters](VM.API.Pre.GearTrain.InputShaftSetParameters.md)\>

### InputSpeedFilePath

The input speed file path. The default value is "".

```csharp
public string InputSpeedFilePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InputStartSpeed

The input start speed. The default value is 100.

```csharp
public ExpressionValueVariable InputStartSpeed { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### IsUseCW

The flag whether using cw or not. The default value is false.

```csharp
public bool IsUseCW { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxTorque

The maximum torque. The default value is 100.

```csharp
public ExpressionValueVariable MaxTorque { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### NameOfResult

The name of result. The default value is "".

```csharp
public string NameOfResult { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NumberOfInterpolation

The number of interpolation. The default value is 100.

```csharp
public ExpressionValueVariable NumberOfInterpolation { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### OutputShaftSetInfos

The output shaft set information.

```csharp
public IEnumerable<OutputShaftSetParameters> OutputShaftSetInfos { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[OutputShaftSetParameters](VM.API.Pre.GearTrain.OutputShaftSetParameters.md)\>

### SamplingFrequency

The sampling frequency. The default value is 1000.

```csharp
public ExpressionValueVariable SamplingFrequency { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### TMScenarioFile

The TM scenario file. The default value is "".

```csharp
public string TMScenarioFile { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeOfSimulation

The simulation type. The default value is Acceleration.

```csharp
public PowerFlow.SimulationType TypeOfSimulation { readonly get; set; }
```

#### Property Value

 PowerFlow.SimulationType

### VehicleSimulatorResultFile

The vehicle simulator result file. The default value is "".

```csharp
public string VehicleSimulatorResultFile { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


