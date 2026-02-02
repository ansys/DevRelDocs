#  Struct ClearanceParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the clearance parameters

```csharp
public struct ClearanceParameters
```

## Constructors

### <a id="VM_API_Pre_GearTrain_ClearanceParameters__ctor"></a> ClearanceParameters\(\)

Default constructor

```csharp
public ClearanceParameters()
```

## Properties

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_AxialClearance"></a> AxialClearance

The enum for axial clearance. The default value is both.

```csharp
public ClearanceInfo.AxialType AxialClearance { readonly get; set; }
```

#### Property Value

 ClearanceInfo.AxialType

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_DampingRatio"></a> DampingRatio

The value for the damping ratio. The default value is 0.0001.

```csharp
public ExpressionValueVariable DampingRatio { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_LeftAxial"></a> LeftAxial

The value for the left axial. The default value is 0.0.

```csharp
public ExpressionValueVariable LeftAxial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_Penalty"></a> Penalty

The value for the penalty. The default value is 1000000.

```csharp
public ExpressionValueVariable Penalty { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_PreloadAxial"></a> PreloadAxial

The value for the preload axial. The default value is 0.0.

```csharp
public ExpressionValueVariable PreloadAxial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_PreloadRadial"></a> PreloadRadial

The value for the preload radial. The default value is 0.0.

```csharp
public ExpressionValueVariable PreloadRadial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_Radial"></a> Radial

The value for the radial. The default value is 0.0.

```csharp
public ExpressionValueVariable Radial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_RadialClearance"></a> RadialClearance

The enum for radial clearance. The default value is fix.

```csharp
public ClearanceInfo.RadialType RadialClearance { readonly get; set; }
```

#### Property Value

 ClearanceInfo.RadialType

### <a id="VM_API_Pre_GearTrain_ClearanceParameters_RightAxial"></a> RightAxial

The value for the right axial. The default value is 0.0.

```csharp
public ExpressionValueVariable RightAxial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

