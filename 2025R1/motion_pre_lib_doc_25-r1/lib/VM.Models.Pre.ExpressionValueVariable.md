#  Struct ExpressionValueVariable

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

### <a id="VM_Models_Pre_ExpressionValueVariable__ctor_System_Double_"></a> ExpressionValueVariable\(double\)

```csharp
public ExpressionValueVariable(double value)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_ExpressionValueVariable__ctor_System_Double_System_String_"></a> ExpressionValueVariable\(double, string\)

```csharp
public ExpressionValueVariable(double value, string expression)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Pre_ExpressionValueVariable_Expression"></a> Expression

```csharp
public string Expression { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_ExpressionValueVariable_IsSimpleValue"></a> IsSimpleValue

```csharp
public bool IsSimpleValue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_ExpressionValueVariable_Parser"></a> Parser

```csharp
public static IExpressionParser<double> Parser { get; }
```

#### Property Value

 [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Pre_ExpressionValueVariable_Value"></a> Value

```csharp
public double Value { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_Pre_ExpressionValueVariable_Equals_VM_Models_Pre_ExpressionValueVariable_"></a> Equals\(ExpressionValueVariable\)

```csharp
public bool Equals(ExpressionValueVariable other)
```

#### Parameters

`other` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_ExpressionValueVariable_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_ExpressionValueVariable_GetSchema"></a> GetSchema\(\)

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### <a id="VM_Models_Pre_ExpressionValueVariable_GetValue_System_String_"></a> GetValue\(string\)

```csharp
public static object GetValue(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Models_Pre_ExpressionValueVariable_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### <a id="VM_Models_Pre_ExpressionValueVariable_SetParser_VM_Models_Pre_IExpressionParser_System_Double__"></a> SetParser\(IExpressionParser<double\>\)

```csharp
public static void SetParser(IExpressionParser<double> parser)
```

#### Parameters

`parser` [IExpressionParser](VM.Models.Pre.IExpressionParser\-1.md)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Pre_ExpressionValueVariable_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

## Operators

### <a id="VM_Models_Pre_ExpressionValueVariable_op_Equality_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> operator ==\(ExpressionValueVariable, ExpressionValueVariable\)

```csharp
public static bool operator ==(ExpressionValueVariable expressionValue1, ExpressionValueVariable expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

`expressionValue2` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_ExpressionValueVariable_op_Implicit_System_Double__VM_Models_Pre_ExpressionValueVariable"></a> implicit operator ExpressionValueVariable\(double\)

```csharp
public static implicit operator ExpressionValueVariable(double value)
```

#### Parameters

`value` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_ExpressionValueVariable_op_Implicit_VM_Models_Pre_ExpressionValueVariable__System_Double"></a> implicit operator double\(ExpressionValueVariable\)

```csharp
public static implicit operator double(ExpressionValueVariable expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Pre_ExpressionValueVariable_op_Implicit_System_String__VM_Models_Pre_ExpressionValueVariable"></a> implicit operator ExpressionValueVariable\(string\)

```csharp
public static implicit operator ExpressionValueVariable(string expression)
```

#### Parameters

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

### <a id="VM_Models_Pre_ExpressionValueVariable_op_Implicit_VM_Models_Pre_ExpressionValueVariable__System_String"></a> implicit operator string\(ExpressionValueVariable\)

```csharp
public static implicit operator string(ExpressionValueVariable expressionValue)
```

#### Parameters

`expressionValue` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_ExpressionValueVariable_op_Inequality_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> operator \!=\(ExpressionValueVariable, ExpressionValueVariable\)

```csharp
public static bool operator !=(ExpressionValueVariable expressionValue1, ExpressionValueVariable expressionValue2)
```

#### Parameters

`expressionValue1` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

`expressionValue2` [ExpressionValueVariable](VM.Models.Pre.ExpressionValueVariable.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

