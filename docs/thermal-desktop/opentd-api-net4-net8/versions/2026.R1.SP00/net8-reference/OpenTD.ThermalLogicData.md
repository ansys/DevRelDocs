# Class ThermalLogicData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

User logic for one submodel. Can be used for thermal or fluid submodels.
(For fluid submodels, TD will write code to corresponding fluid headers,
e.g., any data in Variables0 will be written to the FLOGIC 0 header.)
Used in a Case Set.

```csharp
[MessagePackObject(true)]
public class ThermalLogicData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ThermalLogicData](OpenTD.ThermalLogicData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ThermalLogicData\(\)

```csharp
public ThermalLogicData()
```

## Properties

### Array

```csharp
public string Array { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Carray

```csharp
public string Carray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Conductor

```csharp
public string Conductor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Control

```csharp
public string Control { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Node

```csharp
public string Node { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Output

```csharp
public string Output { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Variables0

```csharp
public string Variables0 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Variables1

```csharp
public string Variables1 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Variables2

```csharp
public string Variables2 { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## See Also

[CaseSet](OpenTD.CaseSet.md)


