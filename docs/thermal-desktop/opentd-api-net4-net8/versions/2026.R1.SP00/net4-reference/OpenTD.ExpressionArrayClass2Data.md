# Class ExpressionArrayClass2Data

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

2d array of TD expressions.

```csharp
[DataContract]
public class ExpressionArrayClass2Data
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ExpressionArrayClass2Data](OpenTD.ExpressionArrayClass2Data.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### ExpressionArrayClass2Data\(\)

```csharp
public ExpressionArrayClass2Data()
```

## Properties

### comment

```csharp
[DataMember]
public string comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### disableWarning

```csharp
[DataMember]
public int disableWarning { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### expression

```csharp
[DataMember]
public List<List<string>> expression { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### outputToSinda

```csharp
[DataMember]
public int outputToSinda { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### sindaUnits

```csharp
[DataMember]
public int sindaUnits { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### units

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


