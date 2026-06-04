# Class RadiationAnalysisGroupManager

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Use to manage radiation analysis groups.
Each ThermalDesktop object includes a RadiationAnalysisGroupManager.

```csharp
public class RadiationAnalysisGroupManager
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RadiationAnalysisGroupManager](OpenTD.RadCAD.RadiationAnalysisGroupManager.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### Copy\(string, string\)

BETA-OPENTD This feature is untested in OpenTD

```csharp
public void Copy(string original, string newName)
```

#### Parameters

`original` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### CreateOrUpdate\(string, string\)

```csharp
public void CreateOrUpdate(string name, string comment = "")
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetDefault\(\)

```csharp
public string GetDefault()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetRadiationGroup\(string\)

```csharp
public Tuple<string, string> GetRadiationGroup(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetRadiationGroups\(\)

```csharp
public List<Tuple<string, string>> GetRadiationGroups()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### Merge\(IEnumerable<string\>, string\)

BETA-OPENTD This feature is untested in OpenTD

```csharp
public void Merge(IEnumerable<string> origNames, string newName)
```

#### Parameters

`origNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### PurgeUnused\(\)

BETA-OPENTD This feature is untested in OpenTD

```csharp
public void PurgeUnused()
```

### Remove\(string\)

BETA-OPENTD This feature is untested in OpenTD

```csharp
public void Remove(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Rename\(string, string\)

BETA-OPENTD This feature is untested in OpenTD

```csharp
public void Rename(string oldName, string newName)
```

#### Parameters

`oldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetDefault\(string\)

```csharp
public void SetDefault(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)


