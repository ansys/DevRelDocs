# Struct Exceedance

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Contains information about an item that exceeds a tolerance.

```csharp
public struct Exceedance
```

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype)

## Constructors

### Exceedance\(string, double, double, long, long, double, double, int, double\)

```csharp
public Exceedance(string name, double timeA, double timeB, long recA, long recB, double A, double B, int index, double percentDiff)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`timeA` [double](https://learn.microsoft.com/dotnet/api/system.double)

`timeB` [double](https://learn.microsoft.com/dotnet/api/system.double)

`recA` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`recB` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`A` [double](https://learn.microsoft.com/dotnet/api/system.double)

`B` [double](https://learn.microsoft.com/dotnet/api/system.double)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`percentDiff` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Fields

### Index

```csharp
public int Index
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

Sinda name, for example, "MAIN.1"

```csharp
public string Name
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### PercentDifference

```csharp
public double PercentDifference
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RecA

```csharp
public long RecA
```

#### Field Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### RecB

```csharp
public long RecB
```

#### Field Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### TimeA

```csharp
public double TimeA
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TimeB

```csharp
public double TimeB
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ValueA

```csharp
public double ValueA
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ValueB

```csharp
public double ValueB
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### ToString\(\)

Returns the fully qualified type name of this instance.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified type name.


