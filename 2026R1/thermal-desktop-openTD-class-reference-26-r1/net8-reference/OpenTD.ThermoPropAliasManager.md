# <a id="OpenTD_ThermoPropAliasManager"></a> Class ThermoPropAliasManager

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to manage thermophysical property aliases.
Each ThermalDesktop object includes a ThermoPropAliasManager.

```csharp
public class ThermoPropAliasManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ThermoPropAliasManager](OpenTD.ThermoPropAliasManager.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="OpenTD_ThermoPropAliasManager_CreateOrUpdateAlias_System_String_System_String_"></a> CreateOrUpdateAlias\(string, string\)

```csharp
public void CreateOrUpdateAlias(string aliasName, string materialName)
```

#### Parameters

`aliasName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`materialName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermoPropAliasManager_DeleteAlias_System_String_"></a> DeleteAlias\(string\)

```csharp
public void DeleteAlias(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ThermoPropAliasManager_GetAlias_System_String_"></a> GetAlias\(string\)

```csharp
public Tuple<string, string> GetAlias(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_ThermoPropAliasManager_GetAliases"></a> GetAliases\(\)

```csharp
public List<Tuple<string, string>> GetAliases()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_ThermoPropAliasManager_RenameAlias_System_String_System_String_"></a> RenameAlias\(string, string\)

```csharp
public void RenameAlias(string oldname, string newname)
```

#### Parameters

`oldname` [string](https://learn.microsoft.com/dotnet/api/system.string)

`newname` [string](https://learn.microsoft.com/dotnet/api/system.string)

