# Class OrbitDateTime

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Date and time data used to define orbits.

```csharp
[DataContract]
public class OrbitDateTime
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OrbitDateTime](OpenTD.RadCAD.OrbitDateTime.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### OrbitDateTime\(\)

```csharp
public OrbitDateTime()
```

## Properties

### Day

```csharp
[DataMember]
public int Day { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DayExp

```csharp
[DataMember]
public ExpressionData DayExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Hour

```csharp
[DataMember]
public int Hour { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HourExp

```csharp
[DataMember]
public ExpressionData HourExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Minute

```csharp
[DataMember]
public int Minute { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MinuteExp

```csharp
[DataMember]
public ExpressionData MinuteExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Month

```csharp
[DataMember]
public int Month { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MonthExp

```csharp
[DataMember]
public ExpressionData MonthExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Second

```csharp
[DataMember]
public int Second { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SecondExp

```csharp
[DataMember]
public ExpressionData SecondExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### Year

```csharp
[DataMember]
public int Year { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### YearExp

```csharp
[DataMember]
public ExpressionData YearExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## See Also

ITdDerived


