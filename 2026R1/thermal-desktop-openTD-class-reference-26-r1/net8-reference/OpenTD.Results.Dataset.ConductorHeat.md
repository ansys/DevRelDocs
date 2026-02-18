# <a id="OpenTD_Results_Dataset_ConductorHeat"></a> Class ConductorHeat

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Represents heatrate data for a conductor connection.

```csharp
public class ConductorHeat
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ConductorHeat](OpenTD.Results.Dataset.ConductorHeat.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="OpenTD_Results_Dataset_ConductorHeat_ConductorInfo"></a> ConductorInfo

```csharp
public IConductorInfo ConductorInfo { get; }
```

#### Property Value

 [IConductorInfo](OpenTD.Results.Dataset.Topology.IConductorInfo.md)

### <a id="OpenTD_Results_Dataset_ConductorHeat_G"></a> G

```csharp
public Dimensional<Conductance> G { get; }
```

#### Property Value

 Dimensional<Conductance\>

### <a id="OpenTD_Results_Dataset_ConductorHeat_Heatrate"></a> Heatrate

```csharp
public Dimensional<HeatRate> Heatrate { get; }
```

#### Property Value

 Dimensional<HeatRate\>

### <a id="OpenTD_Results_Dataset_ConductorHeat_ToTemp"></a> ToTemp

```csharp
public Dimensional<Temp> ToTemp { get; }
```

#### Property Value

 Dimensional<Temp\>

