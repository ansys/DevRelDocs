# <a id="OpenTD_Transformation"></a> Class Transformation

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A 3D transformation, described as translation plus up to 3 sequential rotations.

```csharp
public class Transformation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Transformation](OpenTD.Transformation.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Transformation__ctor"></a> Transformation\(\)

```csharp
public Transformation()
```

### <a id="OpenTD_Transformation__ctor_OpenTD_Transformation_"></a> Transformation\(Transformation\)

```csharp
public Transformation(Transformation x)
```

#### Parameters

`x` [Transformation](OpenTD.Transformation.md)

## Fields

### <a id="OpenTD_Transformation_Axis1"></a> Axis1

```csharp
public int Axis1
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Transformation_Axis2"></a> Axis2

```csharp
public int Axis2
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Transformation_Axis3"></a> Axis3

```csharp
public int Axis3
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_Transformation_Rot1"></a> Rot1

```csharp
public Dimensional<Angle> Rot1
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_Transformation_Rot2"></a> Rot2

```csharp
public Dimensional<Angle> Rot2
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_Transformation_Rot3"></a> Rot3

```csharp
public Dimensional<Angle> Rot3
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_Transformation_Tx"></a> Tx

```csharp
public Dimensional<ModelLength> Tx
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Transformation_Ty"></a> Ty

```csharp
public Dimensional<ModelLength> Ty
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_Transformation_Tz"></a> Tz

```csharp
public Dimensional<ModelLength> Tz
```

#### Field Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

## Properties

### <a id="OpenTD_Transformation_Rot1Exp"></a> Rot1Exp

```csharp
public ExpressionData Rot1Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Transformation_Rot2Exp"></a> Rot2Exp

```csharp
public ExpressionData Rot2Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Transformation_Rot3Exp"></a> Rot3Exp

```csharp
public ExpressionData Rot3Exp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Transformation_TxExp"></a> TxExp

```csharp
public ExpressionData TxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Transformation_TyExp"></a> TyExp

```csharp
public ExpressionData TyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_Transformation_TzExp"></a> TzExp

```csharp
public ExpressionData TzExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

