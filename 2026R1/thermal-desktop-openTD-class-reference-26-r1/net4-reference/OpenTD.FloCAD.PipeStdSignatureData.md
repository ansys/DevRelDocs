# Class PipeStdSignatureData

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Represents a standard pipe.

```csharp
[DataContract]
public class PipeStdSignatureData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PipeStdSignatureData](OpenTD.FloCAD.PipeStdSignatureData.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### PipeStdSignatureData\(\)

```csharp
public PipeStdSignatureData()
```

## Properties

### Name

```csharp
[DataMember]
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Nom\_SI

Nominal diameter in meters.

```csharp
[DataMember]
public string Nom_SI { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Schedule

```csharp
[DataMember]
public string Schedule { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[Pipe](OpenTD.FloCAD.Pipe.md)


