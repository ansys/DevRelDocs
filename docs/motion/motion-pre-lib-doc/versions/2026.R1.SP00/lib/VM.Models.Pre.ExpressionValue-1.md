# Struct ExpressionValue<T\>
<a id="VM_Models_Pre_ExpressionValue_1"></a>

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

### <a id="VM_Models_Pre_ExpressionValue_1__ctor__0_System_String_"></a> ExpressionValue\(T, string\)

```csharp
public ExpressionValue(T value, string expression)
```

#### Parameters

`value` T

`expression` string

## Properties

### <a id="VM_Models_Pre_ExpressionValue_1_Expression"></a> Expression

```csharp
public string Expression { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_ExpressionValue_1_IsSimpleValue"></a> IsSimpleValue

```csharp
public bool IsSimpleValue { get; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_ExpressionValue_1_Parser"></a> Parser

```csharp
public static IExpressionParser<T> Parser { get; }
```

#### Property Value

 [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<T\>

### <a id="VM_Models_Pre_ExpressionValue_1_Value"></a> Value

```csharp
public T Value { get; set; }
```

#### Property Value

 T

## Methods

### <a id="VM_Models_Pre_ExpressionValue_1_Equals_VM_Models_Pre_ExpressionValue__0__"></a> Equals\(ExpressionValue<T\>\)

```csharp
public bool Equals(ExpressionValue<T> other)
```

#### Parameters

`other` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 bool

### <a id="VM_Models_Pre_ExpressionValue_1_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

#### Returns

 bool

### <a id="VM_Models_Pre_ExpressionValue_1_GetSchema"></a> GetSchema\(\)

```csharp
public XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Models_Pre_ExpressionValue_1_GetValue_System_String_"></a> GetValue\(string\)

```csharp
public static object GetValue(string expression)
```

#### Parameters

`expression` string

#### Returns

 object

### <a id="VM_Models_Pre_ExpressionValue_1_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

### <a id="VM_Models_Pre_ExpressionValue_1_SetParser_VM_Models_Pre_IExpressionParser__0__"></a> SetParser\(IExpressionParser<T\>\)

```csharp
public static void SetParser(IExpressionParser<T> parser)
```

#### Parameters

`parser` [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<T\>

### <a id="VM_Models_Pre_ExpressionValue_1_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

## Operators

### <a id="VM_Models_Pre_ExpressionValue_1_op_Equality_VM_Models_Pre_ExpressionValue__0__VM_Models_Pre_ExpressionValue__0__"></a> operator ==\(ExpressionValue<T\>, ExpressionValue<T\>\)

```csharp
public static bool operator ==(ExpressionValue<T> expressionValue1, ExpressionValue<T> expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

`expressionValue2` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 bool

### <a id="VM_Models_Pre_ExpressionValue_1_op_Implicit__0__VM_Models_Pre_ExpressionValue__0_"></a> implicit operator ExpressionValue<T\>\(T\)

```csharp
public static implicit operator ExpressionValue<T>(T value)
```

#### Parameters

`value` T

#### Returns

 [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

### <a id="VM_Models_Pre_ExpressionValue_1_op_Implicit_VM_Models_Pre_ExpressionValue__0____0"></a> implicit operator T\(ExpressionValue<T\>\)

```csharp
public static implicit operator T(ExpressionValue<T> expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 T

### <a id="VM_Models_Pre_ExpressionValue_1_op_Implicit_System_String__VM_Models_Pre_ExpressionValue__0_"></a> implicit operator ExpressionValue<T\>\(string\)

```csharp
public static implicit operator ExpressionValue<T>(string expression)
```

#### Parameters

`expression` string

#### Returns

 [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

### <a id="VM_Models_Pre_ExpressionValue_1_op_Implicit_VM_Models_Pre_ExpressionValue__0___System_String"></a> implicit operator string\(ExpressionValue<T\>\)

```csharp
public static implicit operator string(ExpressionValue<T> expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 string

### <a id="VM_Models_Pre_ExpressionValue_1_op_Inequality_VM_Models_Pre_ExpressionValue__0__VM_Models_Pre_ExpressionValue__0__"></a> operator \!=\(ExpressionValue<T\>, ExpressionValue<T\>\)

```csharp
public static bool operator !=(ExpressionValue<T> expressionValue1, ExpressionValue<T> expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

`expressionValue2` [ExpressionValue](VM.Models.Pre.ExpressionValue\-1.md)<T\>

#### Returns

 bool

