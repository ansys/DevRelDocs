# Class PipeTie

Namespace: [OpenTD.FloCAD](OpenTD.FloCAD.md)  
Assembly: OpenTD.dll  

Describes a tie defined by a pipe.

```csharp
[DataContract]
public class PipeTie
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PipeTie](OpenTD.FloCAD.PipeTie.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### PipeTie\(\)

```csharp
public PipeTie()
```

## Properties

### Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GenerateTie

```csharp
[DataMember]
public bool GenerateTie { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WallLocation

```csharp
[DataMember]
public PipeTie.WallLocations WallLocation { get; set; }
```

#### Property Value

 [PipeTie](OpenTD.FloCAD.PipeTie.md).[WallLocations](OpenTD.FloCAD.PipeTie.WallLocations.md)

### Walls

```csharp
[DataMember]
public List<Connection> Walls { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Connection](OpenTD.Connection.md)\>

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

[Pipe](OpenTD.FloCAD.Pipe.md), 
[Tie](OpenTD.FloCAD.Tie.md)


