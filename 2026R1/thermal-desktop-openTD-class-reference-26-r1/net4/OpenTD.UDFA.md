# <a id="OpenTD_UDFA"></a> Class UDFA

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Client-side representation of a User-Defined Fortran Array (UDFA).

```csharp
[DataContract]
public class UDFA
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UDFA](OpenTD.UDFA.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_UDFA__ctor"></a> UDFA\(\)

```csharp
public UDFA()
```

## Properties

### <a id="OpenTD_UDFA_DoSave"></a> DoSave

```csharp
[DataMember]
public int DoSave { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UDFA_DoWarn"></a> DoWarn

```csharp
[DataMember]
public bool DoWarn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UDFA_DynamicUpdates"></a> DynamicUpdates

```csharp
[DataMember]
public bool DynamicUpdates { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UDFA_Enabled"></a> Enabled

```csharp
[DataMember]
public int Enabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UDFA_EnabledExpression"></a> EnabledExpression

```csharp
[DataMember]
public ExpressionData EnabledExpression { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_UDFA_IndexName"></a> IndexName

```csharp
[DataMember]
public string IndexName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UDFA_InitData"></a> InitData

```csharp
[DataMember]
public string InitData { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UDFA_InitType"></a> InitType

```csharp
[DataMember]
public UDFA.UdfaInitType InitType { get; set; }
```

#### Property Value

 [UDFA](OpenTD.UDFA.md).[UdfaInitType](OpenTD.UDFA.UdfaInitType.md)

### <a id="OpenTD_UDFA_Length"></a> Length

```csharp
[DataMember]
public int Length { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UDFA_LengthExpression"></a> LengthExpression

```csharp
[DataMember]
public ExpressionData LengthExpression { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_UDFA_Name"></a> Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UDFA_Type"></a> Type

```csharp
[DataMember]
public UDFA.UdfaType Type { get; set; }
```

#### Property Value

 [UDFA](OpenTD.UDFA.md).[UdfaType](OpenTD.UDFA.UdfaType.md)

### <a id="OpenTD_UDFA_UdcaStringLength"></a> UdcaStringLength

```csharp
[DataMember]
public int UdcaStringLength { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_UDFA_UdcaStringLengthExpression"></a> UdcaStringLengthExpression

```csharp
[DataMember]
public ExpressionData UdcaStringLengthExpression { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_UDFA_UdfaValueType"></a> UdfaValueType

```csharp
[DataMember]
public UDFA.ValueType UdfaValueType { get; set; }
```

#### Property Value

 [UDFA](OpenTD.UDFA.md).[ValueType](OpenTD.UDFA.ValueType.md)

## Methods

### <a id="OpenTD_UDFA_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

### <a id="OpenTD_UDFA_Validate"></a> Validate\(\)

```csharp
public void Validate()
```

