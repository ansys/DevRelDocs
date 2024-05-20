# Struct ClutchParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the clutch parameters for the operation of body to drivetrain.

```csharp
public struct ClutchParameters
```

## Constructors

### ClutchParameters\(\)

Default constructor

```csharp
public ClutchParameters()
```

### ClutchParameters\(string, string, Vector, Vector\)

Initializes a new instance of the <xref href="VM.API.Pre.GearTrain.ClutchParameters" data-throw-if-not-resolved="false"></xref> class

```csharp
public ClutchParameters(string bodyName, string clutchName, Vector position, Vector rotateAxis)
```

#### Parameters

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bodyName of the clutch parameters.

`clutchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The clutchName of the clutch parameters.

`position` Vector

The position of the clutch parameters.

`rotateAxis` Vector

The rotate axis of the clutch parameters.

## Properties

### BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ClutchName

The value for the clutch name. The default value is "".

```csharp
public string ClutchName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Position

The value for the position. The default value is (5, 5, 5).

```csharp
public Vector Position { readonly get; set; }
```

#### Property Value

 Vector

### RotateAxis

The value for the rotate axis. The default value is (0, 0, 1).

```csharp
public Vector RotateAxis { readonly get; set; }
```

#### Property Value

 Vector


