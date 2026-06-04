# Class ThermoPropAliasManager

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to manage thermophysical property aliases.
Each ThermalDesktop object includes a ThermoPropAliasManager.

```csharp
public class ThermoPropAliasManager
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ThermoPropAliasManager](OpenTD.ThermoPropAliasManager.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### CreateOrUpdateAlias\(string, string\)

```csharp
public void CreateOrUpdateAlias(string aliasName, string materialName)
```

#### Parameters

`aliasName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`materialName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### DeleteAlias\(string\)

```csharp
public void DeleteAlias(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetAlias\(string\)

```csharp
public Tuple<string, string> GetAlias(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetAliases\(\)

```csharp
public List<Tuple<string, string>> GetAliases()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### RenameAlias\(string, string\)

```csharp
public void RenameAlias(string oldname, string newname)
```

#### Parameters

`oldname` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newname` [string](https://learn.microsoft.com/dotnet/api/system.string)


