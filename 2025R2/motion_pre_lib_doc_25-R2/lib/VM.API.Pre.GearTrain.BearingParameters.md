#  Struct BearingParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the bearing parameters for the operation of body to drivetrain.

```csharp
public struct BearingParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_BearingParameters__ctor"></a> BearingParameters\(\)

Default constructor

```csharp
public BearingParameters()
```

### <a id="VM_API_Pre_GearTrain_BearingParameters__ctor_System_String_System_String_VM_Vector_"></a> BearingParameters\(string, string, Vector\)

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

### <a id="VM_API_Pre_GearTrain_BearingParameters_BearingName"></a> BearingName

The value for the bearing name. The default value is "".

```csharp
public string BearingName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_BearingParameters_BodyName"></a> BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_BearingParameters_Position"></a> Position

The value for the position. The default value is (0, 0, 0).

```csharp
public Vector Position { readonly get; set; }
```

#### Property Value

 Vector

