# Struct RequestParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the request

```csharp
public struct RequestParameters
```

## Constructors

### RequestParameters\(\)

Default constructor

```csharp
public RequestParameters()
```

## Properties

### BaseMarker

The base marker.

```csharp
public Obj BaseMarker { readonly get; set; }
```

#### Property Value

 Obj

### ForceActionEntitis

The force action entities.

```csharp
public IEnumerable<Obj> ForceActionEntitis { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

### ForceActionEntityNames

The force action entity names.

```csharp
public IEnumerable<string> ForceActionEntityNames { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### ForceDisplayEndTime

The force display end time. The default value is 1.

```csharp
public ExpressionValueVariable ForceDisplayEndTime { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### ForceDisplayStartTime

The force display start time. The default value is 0.

```csharp
public ExpressionValueVariable ForceDisplayStartTime { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### KinematicActionEntitis

The kinematic action entities.

```csharp
public IEnumerable<Obj> KinematicActionEntitis { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

### SamplingTimes

The sampling times.

```csharp
public IEnumerable<ExpressionValueVariable> SamplingTimes { readonly get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

### SynchronizeSimulationTime

The flag whether synchronizing simulation time. The default value is true.

```csharp
public bool SynchronizeSimulationTime { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


