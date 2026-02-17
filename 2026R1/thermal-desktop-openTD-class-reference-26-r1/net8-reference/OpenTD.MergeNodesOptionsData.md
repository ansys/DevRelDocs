# <a id="OpenTD_MergeNodesOptionsData"></a> Class MergeNodesOptionsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Provides options for the ThermalDesktop.MergeNodes command.

```csharp
public class MergeNodesOptionsData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MergeNodesOptionsData](OpenTD.MergeNodesOptionsData.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_MergeNodesOptionsData__ctor"></a> MergeNodesOptionsData\(\)

```csharp
public MergeNodesOptionsData()
```

## Properties

### <a id="OpenTD_MergeNodesOptionsData_KeepMethod"></a> KeepMethod

```csharp
public MergeNodesOptionsData.KeepMethods KeepMethod { get; set; }
```

#### Property Value

 [MergeNodesOptionsData](OpenTD.MergeNodesOptionsData.md).[KeepMethods](OpenTD.MergeNodesOptionsData.KeepMethods.md)

### <a id="OpenTD_MergeNodesOptionsData_NodeHandles"></a> NodeHandles

```csharp
public List<string> NodeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_MergeNodesOptionsData_Tolerance"></a> Tolerance

```csharp
public Dimensional<ModelLength> Tolerance { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

