# Method ReadJsonStreamAsync

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## ReadJsonStreamAsync(Stream)

Reads a list of PlugInInfo objects from a stream

```csharp
public static Task<IList<PlugInInfo>> ReadJsonStreamAsync(Stream input)

```

### Parameters

`input` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The input stream. It must be encoded using
UTF-8

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1)<[PlugInInfo](Phoenix.PlugIns.PlugInInfo.md)>>

A task that when complete will contain the read objects
