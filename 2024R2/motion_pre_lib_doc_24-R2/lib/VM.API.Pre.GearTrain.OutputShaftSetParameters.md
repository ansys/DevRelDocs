# Struct OutputShaftSetParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the output shaft set parameters

```csharp
public struct OutputShaftSetParameters
```

## Constructors

### OutputShaftSetParameters\(\)

Default constructor

```csharp
public OutputShaftSetParameters()
```

## Properties

### Efficiency

The split.

```csharp
public ExpressionValueVariable Efficiency { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### OutputShaftSet

The output shaftset and the type is <xref href="VM.Managed.DAFUL.GearTrain.IHasPowerLoad" data-throw-if-not-resolved="false"></xref>.

```csharp
public Obj OutputShaftSet { readonly get; set; }
```

#### Property Value

 Obj

### OutputTorqueFilePath

The output torque file path

```csharp
public string OutputTorqueFilePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReductionRatio

The reduction ratio

```csharp
public ExpressionValueVariable ReductionRatio { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### Split

The split.

```csharp
public ExpressionValueVariable Split { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable


