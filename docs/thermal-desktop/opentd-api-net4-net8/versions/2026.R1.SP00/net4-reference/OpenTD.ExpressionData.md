# Class ExpressionData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Data describing a TD expression.

```csharp
[DataContract]
public class ExpressionData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExpressionData](OpenTD.ExpressionData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

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
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DisableWarnings

```csharp
[DataMember]
public bool DisableWarnings { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExpressionInSindaUnits

```csharp
[DataMember]
public bool ExpressionInSindaUnits { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OutputToSinda

```csharp
[DataMember]
public bool OutputToSinda { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Value

```csharp
[DataMember]
public string Value { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### units

ExpressionDatas contain their own unit system, independent of the
dwg units or OpenTD WorkingUnits. This unit system defaults to the
WorkingUnits but can be changed.

```csharp
[DataMember]
public UnitsData units { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### unitsType

```csharp
[DataMember]
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


