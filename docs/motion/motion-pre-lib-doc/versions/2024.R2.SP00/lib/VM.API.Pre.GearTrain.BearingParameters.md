# Struct BearingParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the bearing parameters for the operation of body to drivetrain.

```csharp
public struct BearingParameters
```

## Constructors

### BearingParameters\(\)

Default constructor

```csharp
public BearingParameters()
```

### BearingParameters\(string, string, Vector\)

Initializes a new instance of the <xref href="VM.API.Pre.GearTrain.BearingParameters" data-throw-if-not-resolved="false"></xref> class

```csharp
public BearingParameters(string bodyName, string bearingName, Vector position)
```

#### Parameters

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bodyName of the bearing parameters.

`bearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bearingName of the bearing parameters.

`position` Vector

The position of the bearing parameters.

## Properties

### BearingName

The value for the bearing name. The default value is "".

```csharp
public string BearingName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Position

The value for the position. The default value is (0, 0, 0).

```csharp
public Vector Position { readonly get; set; }
```

#### Property Value

 Vector


