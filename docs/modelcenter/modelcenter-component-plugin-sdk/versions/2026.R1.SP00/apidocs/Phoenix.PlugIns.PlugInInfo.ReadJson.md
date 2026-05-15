# Method ReadJson

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## ReadJson(string)

Reads a JSON string into an array of PlugInInfo objects

```csharp
public static IList<PlugInInfo> ReadJson(string json)

```

### Parameters

`json` [string](https://learn.microsoft.com/dotnet/api/system.string)

The JSON string content

### Returns

[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<[PlugInInfo](Phoenix.PlugIns.PlugInInfo.md)>

A list of PlugInInfo objects

### Exceptions

[Exception](https://learn.microsoft.com/dotnet/api/system.exception)

If there are any errors reading the file.
