# <a id="OpenTD_ExpressionArrayClassData"></a> Class ExpressionArrayClassData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Array of TD expressions.

```csharp
[DataContract]
public class ExpressionArrayClassData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExpressionArrayClassData](OpenTD.ExpressionArrayClassData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_ExpressionArrayClassData__ctor"></a> ExpressionArrayClassData\(\)

```csharp
public ExpressionArrayClassData()
```

## Properties

### <a id="OpenTD_ExpressionArrayClassData_comment"></a> comment

```csharp
[DataMember]
public string comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ExpressionArrayClassData_disableWarning"></a> disableWarning

```csharp
[DataMember]
public int disableWarning { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_ExpressionArrayClassData_expression"></a> expression

```csharp
[DataMember]
public List<string> expression { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_ExpressionArrayClassData_outputToSinda"></a> outputToSinda

```csharp
[DataMember]
public int outputToSinda { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_ExpressionArrayClassData_sindaUnits"></a> sindaUnits

```csharp
[DataMember]
public int sindaUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_ExpressionArrayClassData_units"></a> units

```csharp
[DataMember]
public UnitsData units { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_ExpressionArrayClassData_unitsType"></a> unitsType

```csharp
[DataMember]
public UnitsData.UnitsType unitsType { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

