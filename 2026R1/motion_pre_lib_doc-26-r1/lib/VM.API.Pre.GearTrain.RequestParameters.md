# Struct RequestParameters
<a id="VM_API_Pre_GearTrain_RequestParameters"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the request

```csharp
public struct RequestParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_RequestParameters__ctor"></a> RequestParameters\(\)

Default constructor

```csharp
public RequestParameters()
```

## Properties

### <a id="VM_API_Pre_GearTrain_RequestParameters_BaseMarker"></a> BaseMarker

The base marker.

```csharp
public Obj BaseMarker { readonly get; set; }
```

#### Property Value

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_GearTrain_RequestParameters_ForceActionEntitis"></a> ForceActionEntitis

The force action entities.

```csharp
public IEnumerable<Obj> ForceActionEntitis { readonly get; set; }
```

#### Property Value

 IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

### <a id="VM_API_Pre_GearTrain_RequestParameters_ForceActionEntityNames"></a> ForceActionEntityNames

The force action entity names.

```csharp
public IEnumerable<string> ForceActionEntityNames { readonly get; set; }
```

#### Property Value

 IEnumerable<string\>

### <a id="VM_API_Pre_GearTrain_RequestParameters_ForceDisplayEndTime"></a> ForceDisplayEndTime

The force display end time. The default value is 1.

```csharp
public ExpressionValueVariable ForceDisplayEndTime { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_GearTrain_RequestParameters_ForceDisplayStartTime"></a> ForceDisplayStartTime

The force display start time. The default value is 0.

```csharp
public ExpressionValueVariable ForceDisplayStartTime { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_GearTrain_RequestParameters_KinematicActionEntitis"></a> KinematicActionEntitis

The kinematic action entities.

```csharp
public IEnumerable<Obj> KinematicActionEntitis { readonly get; set; }
```

#### Property Value

 IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

### <a id="VM_API_Pre_GearTrain_RequestParameters_SamplingTimes"></a> SamplingTimes

The sampling times.

```csharp
public IEnumerable<ExpressionValueVariable> SamplingTimes { readonly get; set; }
```

#### Property Value

 IEnumerable<[ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)\>

### <a id="VM_API_Pre_GearTrain_RequestParameters_SynchronizeSimulationTime"></a> SynchronizeSimulationTime

The flag whether synchronizing simulation time. The default value is true.

```csharp
public bool SynchronizeSimulationTime { readonly get; set; }
```

#### Property Value

 bool

