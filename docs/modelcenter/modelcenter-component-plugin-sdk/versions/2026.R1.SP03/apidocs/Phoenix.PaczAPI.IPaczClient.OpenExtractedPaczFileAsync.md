# Method OpenExtractedPaczFileAsync

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

## OpenExtractedPaczFileAsync(string, bool)

Opens an uncompressed pacz by loading a folder

This method is thread safe.

```csharp
Task<IPacz> OpenExtractedPaczFileAsync(string pacjFolder, bool skipInitialization = false)

```

### Parameters

`pacjFolder` [string](https://learn.microsoft.com/dotnet/api/system.string)

The folder containing an extracted pacz

`skipInitialization` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Allows for initialization of the pacz to be skipped.
This option is generally meant to be used only internally by Phoenix Integration.
It allows the out of process host to skip initialization so that an PACZ opened by
the in-process can be reused.

### Returns

[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[IPacz](Phoenix.PaczAPI.IPacz.md)>

A task that when complete contains a new instance of IPacz
