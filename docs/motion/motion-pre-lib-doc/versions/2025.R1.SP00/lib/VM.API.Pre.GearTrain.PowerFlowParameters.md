#  Struct PowerFlowParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the power flow

```csharp
public struct PowerFlowParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters__ctor"></a> PowerFlowParameters\(\)

Default constructor

```csharp
public PowerFlowParameters()
```

## Properties

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_Duration"></a> Duration

The duration. The default value is 0.

```csharp
public ExpressionValueVariable Duration { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_EndTime"></a> EndTime

The end time. The default value is 1.

```csharp
public ExpressionValueVariable EndTime { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_GearPairs"></a> GearPairs

The gear pairs.

```csharp
public IEnumerable<Obj> GearPairs { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_InputEndSpeed"></a> InputEndSpeed

The input end speed. The default value is 100.

```csharp
public ExpressionValueVariable InputEndSpeed { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_InputPower"></a> InputPower

The input power. The default value is 1.

```csharp
public ExpressionValueVariable InputPower { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_InputPowerFilePath"></a> InputPowerFilePath

The input power file path. The default value is "".

```csharp
public string InputPowerFilePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_InputShaftSet"></a> InputShaftSet

The input shaft set.

```csharp
public Obj InputShaftSet { readonly get; set; }
```

#### Property Value

 Obj

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_InputShaftSetInfos"></a> InputShaftSetInfos

The input shaft set information.

```csharp
public IEnumerable<InputShaftSetParameters> InputShaftSetInfos { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[InputShaftSetParameters](VM.API.Pre.GearTrain.InputShaftSetParameters.md)\>

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_InputSpeedFilePath"></a> InputSpeedFilePath

The input speed file path. The default value is "".

```csharp
public string InputSpeedFilePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_InputStartSpeed"></a> InputStartSpeed

The input start speed. The default value is 100.

```csharp
public ExpressionValueVariable InputStartSpeed { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_IsUseCW"></a> IsUseCW

The flag whether using cw or not. The default value is false.

```csharp
public bool IsUseCW { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_MaxTorque"></a> MaxTorque

The maximum torque. The default value is 100.

```csharp
public ExpressionValueVariable MaxTorque { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_NameOfResult"></a> NameOfResult

The name of result. The default value is "".

```csharp
public string NameOfResult { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_NumberOfInterpolation"></a> NumberOfInterpolation

The number of interpolation. The default value is 100.

```csharp
public ExpressionValueVariable NumberOfInterpolation { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_OutputShaftSetInfos"></a> OutputShaftSetInfos

The output shaft set information.

```csharp
public IEnumerable<OutputShaftSetParameters> OutputShaftSetInfos { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[OutputShaftSetParameters](VM.API.Pre.GearTrain.OutputShaftSetParameters.md)\>

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_SamplingFrequency"></a> SamplingFrequency

The sampling frequency. The default value is 1000.

```csharp
public ExpressionValueVariable SamplingFrequency { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_TMScenarioFile"></a> TMScenarioFile

The TM scenario file. The default value is "".

```csharp
public string TMScenarioFile { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_TypeOfSimulation"></a> TypeOfSimulation

The simulation type. The default value is Acceleration.

```csharp
public PowerFlow.SimulationType TypeOfSimulation { readonly get; set; }
```

#### Property Value

 PowerFlow.SimulationType

### <a id="VM_API_Pre_GearTrain_PowerFlowParameters_VehicleSimulatorResultFile"></a> VehicleSimulatorResultFile

The vehicle simulator result file. The default value is "".

```csharp
public string VehicleSimulatorResultFile { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

