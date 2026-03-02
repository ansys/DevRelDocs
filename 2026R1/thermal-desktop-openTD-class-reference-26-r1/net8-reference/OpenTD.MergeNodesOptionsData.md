# Class MergeNodesOptionsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Provides options for the ThermalDesktop.MergeNodes command.

```csharp
[MessagePackObject(true)]
public class MergeNodesOptionsData
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MergeNodesOptionsData](OpenTD.MergeNodesOptionsData.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### MergeNodesOptionsData\(\)

```csharp
public MergeNodesOptionsData()
```

## Properties

### KeepMethod

```csharp
public MergeNodesOptionsData.KeepMethods KeepMethod { get; set; }
```

#### Property Value

 [MergeNodesOptionsData](OpenTD.MergeNodesOptionsData.md).[KeepMethods](OpenTD.MergeNodesOptionsData.KeepMethods.md)

### NodeHandles

```csharp
public List<string> NodeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### Tolerance

```csharp
public Dimensional<ModelLength> Tolerance { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>


