# Method WriteJson

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## WriteJson(IEnumerable<PlugInInfo>)

Writes a list of PlugInInfo objects into a JSON string. Defaults
to human readable (indented)

```csharp
public static string WriteJson(IEnumerable<PlugInInfo> infos)

```

### Parameters

`infos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[PlugInInfo](Phoenix.PlugIns.PlugInInfo.md)>

The PlugInInfo objects to write

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

A string containing the JSON

## WriteJson(IEnumerable<PlugInInfo>, Formatting)

Writes a list of PlugInInfo objects into a JSON string.

```csharp
public static string WriteJson(IEnumerable<PlugInInfo> infos, Formatting formatting)

```

### Parameters

`infos` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[PlugInInfo](Phoenix.PlugIns.PlugInInfo.md)>

The PlugInInfo objects to write

`formatting` Formatting

The JSON formatting to use

### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

A string containing the JSON
