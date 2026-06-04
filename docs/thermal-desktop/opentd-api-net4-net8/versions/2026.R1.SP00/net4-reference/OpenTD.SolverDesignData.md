# Class SolverDesignData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A Sinda solver (optimization) design or constraint variable. Used in Case Set.

```csharp
[DataContract]
public class SolverDesignData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolverDesignData](OpenTD.SolverDesignData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### SolverDesignData\(\)

```csharp
public SolverDesignData()
```

## Properties

### comment

```csharp
[DataMember]
public string comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### disabled

```csharp
[DataMember]
public int disabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### maxValue

```csharp
[DataMember]
public string maxValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### maxValueExp

```csharp
[DataMember]
public ExpressionData maxValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### minValue

```csharp
[DataMember]
public string minValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### minValueExp

```csharp
[DataMember]
public ExpressionData minValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### name

```csharp
[DataMember]
public string name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### useMax

```csharp
[DataMember]
public int useMax { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### useMin

```csharp
[DataMember]
public int useMin { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## See Also

[CaseSet](OpenTD.CaseSet.md)


