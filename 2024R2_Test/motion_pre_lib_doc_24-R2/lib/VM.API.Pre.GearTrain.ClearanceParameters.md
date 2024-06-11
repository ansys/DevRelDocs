# Struct ClearanceParameters

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This struct represents the clearance parameters

```csharp
public struct ClearanceParameters
```

## Constructors

### ClearanceParameters\(\)

Default constructor

```csharp
public ClearanceParameters()
```

## Properties

### AxialClearance

The enum for axial clearance. The default value is both.

```csharp
public ClearanceInfo.AxialType AxialClearance { readonly get; set; }
```

#### Property Value

 ClearanceInfo.AxialType

### DampingRatio

The value for the damping ratio. The default value is 0.0001.

```csharp
public ExpressionValueVariable DampingRatio { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### LeftAxial

The value for the left axial. The default value is 0.0.

```csharp
public ExpressionValueVariable LeftAxial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### Penalty

The value for the penalty. The default value is 1000000.

```csharp
public ExpressionValueVariable Penalty { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### PreloadAxial

The value for the preload axial. The default value is 0.0.

```csharp
public ExpressionValueVariable PreloadAxial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### PreloadRadial

The value for the preload radial. The default value is 0.0.

```csharp
public ExpressionValueVariable PreloadRadial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### Radial

The value for the radial. The default value is 0.0.

```csharp
public ExpressionValueVariable Radial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### RadialClearance

The enum for radial clearance. The default value is fix.

```csharp
public ClearanceInfo.RadialType RadialClearance { readonly get; set; }
```

#### Property Value

 ClearanceInfo.RadialType

### RightAxial

The value for the right axial. The default value is 0.0.

```csharp
public ExpressionValueVariable RightAxial { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable


