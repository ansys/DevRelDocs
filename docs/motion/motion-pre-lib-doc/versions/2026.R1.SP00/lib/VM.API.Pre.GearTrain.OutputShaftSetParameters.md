# Struct OutputShaftSetParameters
<a id="VM_API_Pre_GearTrain_OutputShaftSetParameters"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the output shaft set parameters

```csharp
public struct OutputShaftSetParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_OutputShaftSetParameters__ctor"></a> OutputShaftSetParameters\(\)

Default constructor

```csharp
public OutputShaftSetParameters()
```

## Properties

### <a id="VM_API_Pre_GearTrain_OutputShaftSetParameters_Efficiency"></a> Efficiency

The split.

```csharp
public ExpressionValueVariable Efficiency { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_GearTrain_OutputShaftSetParameters_OutputShaftSet"></a> OutputShaftSet

The output shaftset and the type is <xref href="VM.Managed.DAFUL.GearTrain.IHasPowerLoad" data-throw-if-not-resolved="false"></xref>.

```csharp
public Obj OutputShaftSet { readonly get; set; }
```

#### Property Value

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_GearTrain_OutputShaftSetParameters_OutputTorqueFilePath"></a> OutputTorqueFilePath

The output torque file path

```csharp
public string OutputTorqueFilePath { readonly get; set; }
```

#### Property Value

 string

### <a id="VM_API_Pre_GearTrain_OutputShaftSetParameters_ReductionRatio"></a> ReductionRatio

The reduction ratio

```csharp
public ExpressionValueVariable ReductionRatio { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_GearTrain_OutputShaftSetParameters_Split"></a> Split

The split.

```csharp
public ExpressionValueVariable Split { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

