# Struct ExpressionValueVariable

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public struct ExpressionValueVariable : IExpressionValue, IExpressionValue<double>, IExpression
```

#### Implements

[IExpressionValue](VM.Models.Pre.IExpressionValue.md), 
[IExpressionValue<double\>](VM.Models.Pre.IExpressionValue\-1.md), 
IExpression

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ExpressionValueVariable\(double\)

```csharp
public ExpressionValueVariable(double value)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### ExpressionValueVariable\(double, string\)

```csharp
public ExpressionValueVariable(double value, string expression)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Expression

```csharp
public string Expression { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsSimpleValue

```csharp
public bool IsSimpleValue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Parser

```csharp
public static IExpressionParser<double> Parser { get; }
```

#### Property Value

 [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### Value

```csharp
public double Value { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Equals\(ExpressionValueVariable\)

```csharp
public bool Equals(ExpressionValueVariable other)
```

#### Parameters

`other` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetSchema\(\)

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### GetValue\(string\)

```csharp
public static object GetValue(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### ReadXml\(XmlReader\)

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### SetParser\(IExpressionParser<double\>\)

```csharp
public static void SetParser(IExpressionParser<double> parser)
```

#### Parameters

`parser` [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

## Operators

### operator ==\(ExpressionValueVariable, ExpressionValueVariable\)

```csharp
public static bool operator ==(ExpressionValueVariable expressionValue1, ExpressionValueVariable expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

`expressionValue2` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator ExpressionValueVariable\(double\)

```csharp
public static implicit operator ExpressionValueVariable(double value)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### implicit operator double\(ExpressionValueVariable\)

```csharp
public static implicit operator double(ExpressionValueVariable expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### implicit operator ExpressionValueVariable\(string\)

```csharp
public static implicit operator ExpressionValueVariable(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### implicit operator string\(ExpressionValueVariable\)

```csharp
public static implicit operator string(ExpressionValueVariable expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### operator \!=\(ExpressionValueVariable, ExpressionValueVariable\)

```csharp
public static bool operator !=(ExpressionValueVariable expressionValue1, ExpressionValueVariable expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

`expressionValue2` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


