# Class UDFA

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of a User-Defined Fortran Array (UDFA).

```csharp
[MessagePackObject(true)]
public class UDFA
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UDFA](OpenTD.UDFA.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### UDFA\(\)

```csharp
public UDFA()
```

## Properties

### DoSave

```csharp
public int DoSave { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DoWarn

```csharp
public bool DoWarn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DynamicUpdates

```csharp
public bool DynamicUpdates { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Enabled

```csharp
public int Enabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EnabledExpression

```csharp
public ExpressionData EnabledExpression { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### IndexName

```csharp
public string IndexName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InitData

```csharp
public string InitData { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InitType

```csharp
public UDFA.UdfaInitType InitType { get; set; }
```

#### Property Value

 [UDFA](OpenTD.UDFA.md).[UdfaInitType](OpenTD.UDFA.UdfaInitType.md)

### Length

```csharp
public int Length { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LengthExpression

```csharp
public ExpressionData LengthExpression { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

```csharp
public UDFA.UdfaType Type { get; set; }
```

#### Property Value

 [UDFA](OpenTD.UDFA.md).[UdfaType](OpenTD.UDFA.UdfaType.md)

### UdcaStringLength

```csharp
public int UdcaStringLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UdcaStringLengthExpression

```csharp
public ExpressionData UdcaStringLengthExpression { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### UdfaValueType

```csharp
public UDFA.ValueType UdfaValueType { get; set; }
```

#### Property Value

 [UDFA](OpenTD.UDFA.md).[ValueType](OpenTD.UDFA.ValueType.md)

## Methods

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### Validate\(\)

```csharp
public void Validate()
```


