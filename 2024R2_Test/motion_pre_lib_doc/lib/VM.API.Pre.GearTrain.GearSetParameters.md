# Struct GearSetParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the gearset parameters for the operation of body to drivetrain.

```csharp
public struct GearSetParameters
```

## Constructors

### GearSetParameters\(\)

Default constructor

```csharp
public GearSetParameters()
```

### GearSetParameters\(string, string, Vector\)

Initializes a new instance of the <xref href="VM.API.Pre.GearTrain.GearSetParameters" data-throw-if-not-resolved="false"></xref> class

```csharp
public GearSetParameters(string bodyName, string gearSetName, Vector position)
```

#### Parameters

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bodyName of the gearset parameters.

`gearSetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The gearSetName of the gearset parameters.

`position` Vector

The position of the gearset parameters.

## Properties

### BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GearSetName

The value for the gearset name. The default value is "".

```csharp
public string GearSetName { readonly get; set; }
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


