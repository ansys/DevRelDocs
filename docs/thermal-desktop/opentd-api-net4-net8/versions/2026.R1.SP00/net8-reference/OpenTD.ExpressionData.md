# Class ExpressionData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data describing a TD expression.

```csharp
[MessagePackObject(true)]
public class ExpressionData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExpressionData](OpenTD.ExpressionData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ExpressionData\(\)

Initializes a new instance of the <xref href="OpenTD.ExpressionData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ExpressionData()
```

### ExpressionData\(string\)

Initializes a new instance of the <xref href="OpenTD.ExpressionData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ExpressionData(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression.

### ExpressionData\(string, UnitsData\)

Initializes a new instance of the <xref href="OpenTD.ExpressionData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ExpressionData(string expression, UnitsData expressionUnits)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression.

`expressionUnits` [UnitsData](OpenTD.UnitsData.md)

The expression units.

### ExpressionData\(ExpressionData\)

```csharp
public ExpressionData(ExpressionData x)
```

#### Parameters

`x` [ExpressionData](OpenTD.ExpressionData.md)

## Properties

### Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DisableWarnings

```csharp
public bool DisableWarnings { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExpressionInSindaUnits

```csharp
public bool ExpressionInSindaUnits { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputToSinda

```csharp
public bool OutputToSinda { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Value

```csharp
public string Value { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### units

ExpressionDatas contain their own unit system, independent of the
dwg units or OpenTD WorkingUnits. This unit system defaults to the
WorkingUnits but can be changed.

```csharp
public UnitsData units { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### unitsType

```csharp
public UnitsData.UnitsType unitsType { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

## Methods

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### implicit operator string\(ExpressionData\)

```csharp
public static implicit operator string(ExpressionData x)
```

#### Parameters

`x` [ExpressionData](OpenTD.ExpressionData.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


