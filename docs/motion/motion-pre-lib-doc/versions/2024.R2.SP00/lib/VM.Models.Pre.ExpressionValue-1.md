# Struct ExpressionValue<T\>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public struct ExpressionValue<T> : IExpressionValue, IExpressionValue<T>, IExpression
```

#### Type Parameters

`T` 

#### Implements

[IExpressionValue](VM.Models.Pre.IExpressionValue.md), 
[IExpressionValue<T\>](VM.Models.Pre.IExpressionValue\-1.md), 
IExpression

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ExpressionValue\(T, string\)

```csharp
public ExpressionValue(T value, string expression)
```

#### Parameters

`value` T

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
public static IExpressionParser<T> Parser { get; }
```

#### Property Value

 [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<T\>

### Value

```csharp
public T Value { get; set; }
```

#### Property Value

 T

## Methods

### Equals\(ExpressionValue<T\>\)

```csharp
public bool Equals(ExpressionValue<T> other)
```

#### Parameters

`other` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

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

### SetParser\(IExpressionParser<T\>\)

```csharp
public static void SetParser(IExpressionParser<T> parser)
```

#### Parameters

`parser` [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<T\>

### WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

## Operators

### operator ==\(ExpressionValue<T\>, ExpressionValue<T\>\)

```csharp
public static bool operator ==(ExpressionValue<T> expressionValue1, ExpressionValue<T> expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

`expressionValue2` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator ExpressionValue<T\>\(T\)

```csharp
public static implicit operator ExpressionValue<T>(T value)
```

#### Parameters

`value` T

#### Returns

 [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

### implicit operator T\(ExpressionValue<T\>\)

```csharp
public static implicit operator T(ExpressionValue<T> expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 T

### implicit operator ExpressionValue<T\>\(string\)

```csharp
public static implicit operator ExpressionValue<T>(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

### implicit operator string\(ExpressionValue<T\>\)

```csharp
public static implicit operator string(ExpressionValue<T> expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### operator \!=\(ExpressionValue<T\>, ExpressionValue<T\>\)

```csharp
public static bool operator !=(ExpressionValue<T> expressionValue1, ExpressionValue<T> expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

`expressionValue2` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


