#  Struct ShaftSetParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the shaftset parameters for the operation of body to drivetrain.

```csharp
public struct ShaftSetParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters__ctor"></a> ShaftSetParameters\(\)

Default constructor

```csharp
public ShaftSetParameters()
```

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters__ctor_System_String_System_String_VM_Vector_VM_Vector_System_Boolean_VM_Managed_DAFUL_GearTrain_PowerLoad_PowerLoadType_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> ShaftSetParameters\(string, string, Vector, Vector, bool, PowerLoadType, ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the <xref href="VM.API.Pre.GearTrain.ShaftSetParameters" data-throw-if-not-resolved="false"></xref> class

```csharp
public ShaftSetParameters(string bodyName, string shaftSetName, Vector position, Vector rorateAxis, bool powerLoad, PowerLoad.PowerLoadType role, ExpressionValueVariable offset, ExpressionValueVariable width)
```

#### Parameters

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bodyName of the shaftset parameters.

`shaftSetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The shaftSetName of the shaftset parameters.

`position` Vector

The position of the shaftset parameters.

`rorateAxis` Vector

The rorateAxis of the shaftset parameters.

`powerLoad` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The powerLoad of the shaftset parameters.

`role` PowerLoad.PowerLoadType

The role of the shaftset parameters.

`offset` ExpressionValueVariable

The offset of the shaftset parameters.

`width` ExpressionValueVariable

The of the shaftset parameters..

## Properties

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_BodyName"></a> BodyName

The value for the body name. The default value is "".

```csharp
public string BodyName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_Offset"></a> Offset

The value for the offset. The default value is 0.0.

```csharp
public ExpressionValueVariable Offset { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_Position"></a> Position

The value for the position. The default value is (0, 0, 0).

```csharp
public Vector Position { readonly get; set; }
```

#### Property Value

 Vector

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_PowerLoad"></a> PowerLoad

The value for the power load. The default value is 'false'.

```csharp
public bool PowerLoad { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_Role"></a> Role

The value for the role. The default value is 'Input'.

```csharp
public PowerLoad.PowerLoadType Role { readonly get; set; }
```

#### Property Value

 PowerLoad.PowerLoadType

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_RotateAxis"></a> RotateAxis

The value for the rotate axis. The default value is (0, 1, 0).

```csharp
public Vector RotateAxis { readonly get; set; }
```

#### Property Value

 Vector

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_ShaftSetName"></a> ShaftSetName

The value for the shaftset name. The default value is "".

```csharp
public string ShaftSetName { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_API_Pre_GearTrain_ShaftSetParameters_Width"></a> Width

The value for the width. The default value is 1.

```csharp
public ExpressionValueVariable Width { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

