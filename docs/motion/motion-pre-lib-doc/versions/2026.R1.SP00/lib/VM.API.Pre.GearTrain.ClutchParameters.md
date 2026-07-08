# Struct ClutchParameters
<a id="VM_API_Pre_GearTrain_ClutchParameters"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the clutch parameters for the operation of body to drivetrain.

```csharp
public struct ClutchParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_ClutchParameters__ctor"></a> ClutchParameters\(\)

Default constructor

```csharp
public ClutchParameters()
```

### <a id="VM_API_Pre_GearTrain_ClutchParameters__ctor_System_String_System_String_VM_Vector_VM_Vector_"></a> ClutchParameters\(string, string, Vector, Vector\)

Initializes a new instance of the <xref href="VM.API.Pre.GearTrain.ClutchParameters" data-throw-if-not-resolved="false"></xref> class

```csharp
public ClutchParameters(string bodyName, string clutchName, Vector position, Vector rotateAxis)
```

#### Parameters

`bodyName` string

The bodyName of the clutch parameters.

`clutchName` string

The clutchName of the clutch parameters.

`position` Vector

The position of the clutch parameters.

`rotateAxis` Vector

The rotate axis of the clutch parameters.

## Properties

### <a id="VM_API_Pre_GearTrain_ClutchParameters_BodyName"></a> BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 string

### <a id="VM_API_Pre_GearTrain_ClutchParameters_ClutchName"></a> ClutchName

The value for the clutch name. The default value is "".

```csharp
public string ClutchName { readonly get; set; }
```

#### Property Value

 string

### <a id="VM_API_Pre_GearTrain_ClutchParameters_Position"></a> Position

The value for the position. The default value is (5, 5, 5).

```csharp
public Vector Position { readonly get; set; }
```

#### Property Value

 Vector

### <a id="VM_API_Pre_GearTrain_ClutchParameters_RotateAxis"></a> RotateAxis

The value for the rotate axis. The default value is (0, 0, 1).

```csharp
public Vector RotateAxis { readonly get; set; }
```

#### Property Value

 Vector

