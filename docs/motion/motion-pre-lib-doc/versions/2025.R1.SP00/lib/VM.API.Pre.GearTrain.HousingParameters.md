#  Struct HousingParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the housing parameters for the operation of body to drivetrain.

```csharp
public struct HousingParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_HousingParameters__ctor"></a> HousingParameters\(\)

Default constructor

```csharp
public HousingParameters()
```

### <a id="VM_API_Pre_GearTrain_HousingParameters__ctor_System_String_System_String_VM_Vector_"></a> HousingParameters\(string, string, Vector\)

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

### <a id="VM_API_Pre_GearTrain_HousingParameters_BodyName"></a> BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_HousingParameters_HousingName"></a> HousingName

The value for the housing name. The default value is "".

```csharp
public string HousingName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_HousingParameters_RotateAxis"></a> RotateAxis

The value for the rotate axis. The default value is (0, 1, 0).

```csharp
public Vector RotateAxis { readonly get; set; }
```

#### Property Value

 Vector

