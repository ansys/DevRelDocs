# Struct HousingParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the housing parameters for the operation of body to drivetrain.

```csharp
public struct HousingParameters
```

## Constructors

### HousingParameters\(\)

Default constructor

```csharp
public HousingParameters()
```

### HousingParameters\(string, string, Vector\)

Initializes a new instance of the <xref href="VM.API.Pre.GearTrain.HousingParameters" data-throw-if-not-resolved="false"></xref> class

```csharp
public HousingParameters(string bodyName, string housingName, Vector rotateAxis)
```

#### Parameters

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bodyName of the housing parameters.

`housingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The housingName of the housing parameters.

`rotateAxis` Vector

The rotate axis of the housing parameters.

## Properties

### BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### HousingName

The value for the housing name. The default value is "".

```csharp
public string HousingName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RotateAxis

The value for the rotate axis. The default value is (0, 1, 0).

```csharp
public Vector RotateAxis { readonly get; set; }
```

#### Property Value

 Vector


