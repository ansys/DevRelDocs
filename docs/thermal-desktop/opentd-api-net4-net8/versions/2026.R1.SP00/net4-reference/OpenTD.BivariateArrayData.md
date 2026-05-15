# Class BivariateArrayData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Represents a TD bivariate array.

```csharp
[DataContract]
public class BivariateArrayData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BivariateArrayData](OpenTD.BivariateArrayData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### BivariateArrayData\(\)

Initializes a new instance of the <xref href="OpenTD.BivariateArrayData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BivariateArrayData()
```

### BivariateArrayData\(string\)

Initializes a new instance of the <xref href="OpenTD.BivariateArrayData" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BivariateArrayData(string bivariateArray)
```

#### Parameters

`bivariateArray` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bivariate array in the format used by input forms in TD.

## Properties

### Value

Bivariate array with comma and newline delimiters.

```csharp
[DataMember]
public string Value { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### xValues

Get independent variable along top row.

```csharp
[DataMember]
public List<double> xValues { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### yValues

Get independent variable along left column.

```csharp
[DataMember]
public List<double> yValues { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### zValues

Get dependent variable, row-by-row (z11, z12, z13, z21, z22, z23, etc.)

```csharp
[DataMember]
public List<double> zValues { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>


