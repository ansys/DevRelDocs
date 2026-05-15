# Class SolverDesignData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

A Sinda solver (optimization) design or constraint variable. Used in Case Set.

```csharp
[MessagePackObject(true)]
public class SolverDesignData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolverDesignData](OpenTD.SolverDesignData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SolverDesignData\(\)

```csharp
public SolverDesignData()
```

## Properties

### comment

```csharp
public string comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### disabled

```csharp
public int disabled { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### maxValue

```csharp
public string maxValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### maxValueExp

```csharp
public ExpressionData maxValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### minValue

```csharp
public string minValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### minValueExp

```csharp
public ExpressionData minValueExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### name

```csharp
public string name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### useMax

```csharp
public int useMax { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### useMin

```csharp
public int useMin { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## See Also

[CaseSet](OpenTD.CaseSet.md)


